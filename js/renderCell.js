// =============================================================
// renderCell.js
// -------------------------------------------------------------
// Genera el contenido HTML para mostrar la información detallada
// de una celda individual del sistema BESS.
// -------------------------------------------------------------
// Incluye:
//   - Información general del fabricante y modelo
//   - Parámetros eléctricos y físicos
//   - Imagen interactiva de la celda (no clicable por ahora)
// =============================================================

export function renderCell(id, data) {

  // -------------------------------------------------------------
  // Construcción del HTML de la vista de celda
  // -------------------------------------------------------------
  let html = /*html*/`
    <!-- Botón para volver atrás -->
    <img 
      src="media/back-arrow.png" 
      alt="Back" 
      class="back-icon" 
      onclick="window.history.back()"
    >

    <div class="container">

      <!-- FRAME: Encabezado de la celda -->
      <div class="frame">
        <h2>Cell ${data.cell_number}: ${id}</h2>
      </div>

      <!-- FRAME: Información general -->
      <div class="frame">
        <div class="accordion">

          <!-- Título del acordeón -->
          <div class="accordion-title active">General Information</div>

          <!-- Contenido desplegado por defecto -->
          <div class="accordion-content open">

            <div class="row"><div class="label">Manufacturer:</div><div class="value">${data.manufacturer_name}</div></div>
            <div class="row"><div class="label">EU Distributor:</div><div class="value">${data.eu_distributor_name}</div></div>

            <div class="row"><div class="label">Manufacturing Place:</div></div>
            <div class="centered-content">${data.manufacturing_place}</div>

            <div class="row"><div class="label">Cell Model:</div><div class="value">${data.cell_model}</div></div>
            <div class="row"><div class="label">Cell Chemistry:</div><div class="value">${data.cell_chemistry}</div></div>
            <div class="row"><div class="label">Cell Mass:</div><div class="value">${data.cell_mass}</div></div>
            <div class="row"><div class="label">Cell Dimensions:</div><div class="value">${data.cell_dimensions}</div></div>
            <div class="row"><div class="label">Extinguishing Agent:</div><div class="value">${data.extinguishing_agent}</div></div>

            <!-- Parámetros eléctricos -->
            <div class="row"><div class="label">Nominal Voltage:</div><div class="value">${data.nominal_voltage}</div></div>
            <div class="row"><div class="label">Minimum Voltage:</div><div class="value">${data.minimum_voltage}</div></div>
            <div class="row"><div class="label">Maximum Voltage:</div><div class="value">${data.maximum_voltage}</div></div>

            <div class="row"><div class="label">Cell Capacity (Ah):</div><div class="value">${data.cell_capacity_ah}</div></div>
            <div class="row"><div class="label">Cell Capacity (Wh):</div><div class="value">${data.cell_capacity_wh}</div></div>
            <div class="row"><div class="label">Internal Resistance:</div><div class="value">${data.internal_resistance}</div></div>

            <!-- Temperatura de operación -->
            <div class="row"><div class="label">Temperature Range Idle:</div>
              <div class="value">${data.temperature_idle_lower} - ${data.temperature_idle_upper}</div>
            </div>

            <!-- Certificaciones -->
            <div class="row"><div class="label">Testing & Certifications:</div><div class="value">${data.testing_and_certifications}</div></div>

          </div> <!-- Fin accordion-content -->
        </div> <!-- Fin accordion -->
      </div> <!-- Fin frame -->

      <!-- FRAME: Imagen representativa de la celda -->
      <div class="interactive">
        <img 
          class="interactive_img_cell" 
          src="media/iso_cell.png" 
          usemap="#image-map"
        >
      </div>

    </div> <!-- Fin container -->
  `;

  // -------------------------------------------------------------
  // Retorna el HTML generado para insertar en el DOM
  // -------------------------------------------------------------
  return html;
}
