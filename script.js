// Función auxiliar genérica para construir listas (usada para Beats, Packs y listas presenciales)
function renderList(targetId, dataArray, templateFn) {
    const container = document.getElementById(targetId);
    if (container) {
        const html = dataArray.map(templateFn).join('');
        container.innerHTML = html;
    } else {
        console.warn(`Contenedor con ID ${targetId} no encontrado.`);
    }
}

// Función para construir la tabla de Precio Cerrado Presencial
function renderPrecioCerrado(targetId, data) {
    const container = document.getElementById(targetId);
    if (!container) return;

    let html = `
        <table class="pricing-table">
            <thead>
                <tr>
                    <th>Artistas</th>
                    <th>Sin Instrumental a Pistas</th>
                    <th>Con Instrumental a Pistas</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    for(let i = 0; i < data.sin_pistas.length; i++) {
        html += `
            <tr>
                <td>${data.sin_pistas[i].artistas}</td>
                <td>${data.sin_pistas[i].precio}</td>
                <td>${data.con_pistas[i].precio}</td>
            </tr>
        `;
    }

    html += `
            <tr>
                <td colspan="3" class="table-note">Más de 4 artistas: Se trabajará por horas (sesiones).</td>
            </tr>
        </tbody>
    </table>
    `;
    
    container.innerHTML = html;
}

// NUEVA FUNCIÓN: Para construir la tabla de Requisitos Técnicos Online
function renderNormativasTable(targetId, dataArray) {
    const container = document.getElementById(targetId);
    if (!container) return;

    let html = `
        <table class="pricing-table">
            <thead>
                <tr>
                    <th>Requisito</th>
                    <th>Preferencia</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    dataArray.forEach(item => {
        html += `
            <tr>
                <td><strong>${item.req}</strong></td>
                <td>${item.pref}</td>
                <td>${item.nota}</td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

// Función principal para cargar datos y renderizarlos
async function loadAndRenderPricing() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`Error al cargar los datos: ${response.statusText}`);
        }
        const data = await response.json();

        // ------------------ TARIFAS ONLINE ------------------
        renderList('list-beats', data.tarifas_beats, (item) => `<li>${item.desc}: <strong>${item.precio}</strong></li>`);
        renderList('list-mezcla', data.tarifas_online_mezcla, (item) => `<li>Mezcla de ${item.rango}: <strong>${item.precio}</strong></li>`);
        renderList('list-pack', data.tarifas_online_pack, (item) => `<li>${item.rango}: <strong>${item.precio}</strong></li>`);
        renderList('list-mastering', data.mastering, (item) => `<li>${item.desc}: <strong>${item.precio}</strong></li>`);

        // ------------------ NORMAS ONLINE (NUEVO) ------------------
        renderNormativasTable('table-requisitos-container', data.online_normativas.archivos);
        renderList('list-entrega', data.online_normativas.entrega, (item) => `<li><strong>${item.item}:</strong> ${item.desc}</li>`);

        // ------------------ TARIFAS PRESENCIALES ------------------
        renderPrecioCerrado('table-precio-cerrado', data.presenciales_precio_cerrado);
        renderList('list-grabacion-suelta', data.presenciales_precio_cerrado.grabacion_suelta, (item) => `<li>${item.desc}: <strong>${item.precio}</strong></li>`);
        renderList('list-por-sesiones', data.presenciales_por_sesiones, (item) =>
            `<li><strong>${item.servicio}:</strong> ${item.precio_h} / hora (Máx ${item.max_h})</li>
             <p class="session-note">${item.nota}</p>`
        );

    } catch (error) {
        console.error("Error al cargar la data de precios:", error);
        // Fallback en caso de error de carga
        document.getElementById('tarifas').innerHTML = '<p class="error-message">Error cargando las tarifas. Por favor, inténtelo más tarde.</p>';
    }
}

// Ejecutar al cargar la página
loadAndRenderPricing();


/* ----------------------------------------------------
   CÓDIGO DE INTERACTIVIDAD (Tabs y Menú Móvil) - SIN CAMBIOS
   ---------------------------------------------------- */

// Lógica para las Pestañas de Tarifas
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.target).classList.add('active');
    });
});

// Lógica para el Menú Móvil
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

/* ----------------------------------------------------
   NUEVA FUNCIÓN: COPIAR EMAIL AL PORTAPAPELES
   ---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-email-btn');
    const emailText = document.getElementById('contact-email-text');
    const copyMessage = document.getElementById('copy-message');

    if (copyButton && emailText) {
        copyButton.addEventListener('click', () => {
            const email = emailText.textContent;
            
            // Usamos la API del Portapapeles
            navigator.clipboard.writeText(email).then(() => {
                // Éxito al copiar: Mostrar mensaje
                copyMessage.textContent = '¡Email copiado al portapapeles!';
                copyMessage.style.visibility = 'visible';
                
                // Ocultar mensaje después de 3 segundos
                setTimeout(() => {
                    copyMessage.style.visibility = 'hidden';
                }, 3000);
            }).catch(err => {
                // Fallo al copiar (ej. navegador antiguo o permisos denegados)
                copyMessage.textContent = 'Error: Por favor, copia manualmente el email.';
                copyMessage.style.visibility = 'visible';
                console.error('Fallo al copiar texto: ', err);
            });
        });
    }
});