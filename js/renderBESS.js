// =============================================================
// renderBESS.js
// -------------------------------------------------------------
// Genera el contenido HTML para mostrar la información de un
// sistema BESS (Battery Energy Storage System).
// -------------------------------------------------------------
// Incluye:
//   - Información general
//   - Datos del fabricante
//   - Especificaciones técnicas
//   - Etiquetas de cumplimiento (CE, WEEE, UN38.3, etc.)
//   - Imagen interactiva con Battery Packs clicables
// =============================================================

import { isMobile } from "./ui.js";

// =============================================================
// CONFIGURACIÓN GLOBAL DEL MÓDULO
// -------------------------------------------------------------
// Detecta tipo de dispositivo una sola vez
// =============================================================
const boolPhone = isMobile(); // true = móvil / false = PC
let imgSource = boolPhone ? "media/BessStringPhone.png" : "media/BessStringPc.png";


// =============================================================
// FUNCIÓN PRINCIPAL: renderBESS()
// -------------------------------------------------------------
// id    -> identificador (no usado directamente aquí)
// data  -> objeto con toda la información del BESS
// =============================================================
export function renderBESS(id, data) {

  // -------------------------------------------------------------
  // FRAME: Información general
  // -------------------------------------------------------------
  let html = /*html*/`
    <div class="container">

      <div class="frame"> 
        <div class="row-centered"><h3>BESS Passport ID:</h3> </div>
        <div class="centered-content"><h3>${data.general_info.battery_passport_id}</h3></div>

        <div class="row"><div class="label">BESS Model:</div><div class="value">${data.general_info.bess_model}</div></div>
        <div class="row"><div class="label">Batch Number:</div><div class="value">${data.general_info.batch_number}</div></div>
        <div class="row"><div class="label">Serial Number:</div><div class="value">${data.general_info.serial}</div></div>
      </div> <!-- Fin frame: general info -->


      <!-- =========================================================
           FRAME: Información del fabricante
           ========================================================= -->
      <div class="frame">
        <div class="accordion">
          <div class="accordion-title">Manufacturer</div>
          <div class="accordion-content">
            <div class="row"><div class="label">Name:</div><div class="value">${data.manufacturer.name}</div></div>
            <div class="row"><div class="label">Registered Trade Name:</div><div class="value">${data.manufacturer.registered_trade_name}</div></div>
            <div class="row"><div class="label">Postal Address:</div><div class="value">${data.manufacturer.postal_address}</div></div>
            <div class="row"><div class="label">Web Address:</div><div class="value"><a href="${data.manufacturer.web_address}" target="_blank">${data.manufacturer.web_address}</a></div></div>
            <div class="row"><div class="label">Email Address:</div><div class="value"><a href="mailto:${data.manufacturer.email_address}">${data.manufacturer.email_address}</a></div></div>
            <div class="row"><div class="label">Manufacturer ID:</div><div class="value">${data.manufacturer.manufacturer_id}</div></div>
            <div class="row"><div class="label">Manufacturing Place:</div><div class="value">${data.manufacturer.manufacturing_place}</div></div>
            <div class="row"><div class="label">Manufacturing Date:</div><div class="value">${data.manufacturer.manufacturing_date}</div></div>
            <div class="row"><div class="label">Warranty Period:</div><div class="value">${data.manufacturer.warranty_period}</div></div>
          </div> <!-- Fin accordion-content -->
        </div> <!-- Fin accordion -->


        <!-- =========================================================
             FRAME: Especificaciones técnicas
             ========================================================= -->
        <div class="accordion">
          <div class="accordion-title">Technical Specs</div>
          <div class="accordion-content">

            <div class="row"><div class="label">BESS Category:</div><div class="value">${data.technical_specs.bess_category}</div></div>
            <div class="row"><div class="label">BESS Status:</div><div class="value">${data.technical_specs.bess_status}</div></div>
            <div class="row"><div class="label">Battery Type:</div><div class="value">${data.technical_specs.battery_type}</div></div>
            <div class="row"><div class="label">Dimensions:</div><div class="value">${data.technical_specs.dimensions}</div></div>
            <div class="row"><div class="label">Weight:</div><div class="value">${data.technical_specs.weight}</div></div>
            <div class="row"><div class="label">Rated Capacity (Ah):</div><div class="value">${data.technical_specs.rated_capacity_ah}</div></div>
            <div class="row"><div class="label">Rated Energy (kWh):</div><div class="value">${data.technical_specs.rated_energy_kwh}</div></div>
            <div class="row"><div class="label">Rated AC Power:</div><div class="value">${data.technical_specs.rated_ac_power}</div></div>
            <div class="row"><div class="label">Rated AC Voltage:</div><div class="value">${data.technical_specs.rated_ac_voltage}</div></div>
            <div class="row"><div class="label">Rated Grid Frequency:</div><div class="value">${data.technical_specs.rated_grid_frequency}</div></div>
            <div class="row"><div class="label">DC Voltage Range:</div><div class="value">${data.technical_specs.dc_voltage_range}</div></div>
            <div class="row"><div class="label">AC Voltage Range:</div><div class="value">${data.technical_specs.ac_voltage_range}</div></div>
            <div class="row"><div class="label">Max AC Current:</div><div class="value">${data.technical_specs.max_ac_current}</div></div>
            <div class="row"><div class="label">Aux. Power Input Voltage:</div><div class="value">${data.technical_specs.aux_power_input_voltage}</div></div>
            <div class="row"><div class="label">Aux. Power Input Current:</div><div class="value">${data.technical_specs.aux_power_input_current}</div></div>
            <div class="row"><div class="label">Aux. Power Frequency:</div><div class="value">${data.technical_specs.aux_power_frequency}</div></div>
            <div class="row"><div class="label">Operating Temperature:</div><div class="value">${data.technical_specs.operating_temperature}</div></div>
            <div class="row"><div class="label">IP Rating:</div><div class="value">${data.technical_specs.ip_rating}</div></div>
            <div class="row"><div class="label">Cooling Method:</div><div class="value">${data.technical_specs.cooling_method}</div></div>
            <div class="row"><div class="label">Inverter Topology:</div><div class="value">${data.technical_specs.inverter_topology}</div></div>
            <div class="row"><div class="label">Altitude:</div><div class="value">${data.technical_specs.altitude}</div></div>

            <div class="row"><div class="label">Testing and Standards:</div></div>
            <div class="centered-content">${data.technical_specs.testing_and_standards}</div>

          </div> <!-- Fin accordion-content -->
        </div> <!-- Fin accordion -->


        <!-- =========================================================
             FRAME: Etiquetas y certificaciones
             ========================================================= -->
        <div class="accordion">
          <div class="accordion-title">Compliance Labels</div>
          <div class="accordion-content">
  `;

  // Mostrar iconos según etiquetas
  data.compliance_labels.symbols_labels.forEach(symbol => {
    if (symbol === "CE") html += `<img class="symbols" src="media/ce_mark.png">`;
    else if (symbol === "WEEE") html += `<img class="symbols" src="media/weee.png">`;
    else if (symbol === "UN38.3") html += `<img class="symbols" src="media/un38_3.png">`;
    else if (symbol === "Refer to the instruction manual") html += `<img class="symbols" src="media/read-manual.png">`;
  });

  html += `
          </div> <!-- Fin accordion-content -->
        </div> <!-- Fin accordion -->
      </div> <!-- Fin frame -->
  `;

  // =============================================================
  // FRAME: Imagen interactiva con Battery Packs (BP)
  // =============================================================
  html += `
      <div class="interactive">
        <img class="interactive_img_bess" src="${imgSource}" usemap="#image-map">
        <map name="image-map">
  `;

  data.batpacks.forEach((bpId, i) => {
    html += `
          <area class="area_bess" 
            alt="BP${i + 1}" 
            title="BP${i + 1}" 
            href="index.html?id=${bpId}" 
            coords="${getBPcoords(i)}" 
            shape="rect">
    `;
  });

  html += `
        </map>
        <p><b>Select Battery Pack</b></p>
      </div> <!-- Fin interactive -->
    </div> <!-- Fin container -->
  `;

  return html;
}


// =============================================================
// FUNCIÓN AUXILIAR: getBPcoords()
// -------------------------------------------------------------
// Devuelve coordenadas de cada Battery Pack según dispositivo
// =============================================================
function getBPcoords(index) {
  const coordsPc = [
    "488,231,618,288", 
    "490,362,617,422",
    "487,493,618,551", 
    "492,629,618,683",
    "493,754,616,811", 
    "490,891,620,945", 
    "741,232,874,293", 
    "743,364,874,419",
    "741,493,871,550", 
    "743,623,874,683", 
    "744,752,878,817", 
    "741,888,873,948",
    "741,1015,874,1078"
  ];

  const coordsPhone = [
    "481,215,643,321", 
    "483,347,635,439", 
    "481,476,632,570", 
    "481,612,631,708",
    "474,741,636,840", 
    "479,868,632,965", 
    "732,218,885,315", 
    "734,350,888,447",
    "738,479,885,573", 
    "731,607,889,711", 
    "732,734,888,845", 
    "734,873,884,969",
    "732,1008,886,1108"
  ];

  return boolPhone ? coordsPhone[index] || "0,0,0,0" : coordsPc[index] || "0,0,0,0";
}
