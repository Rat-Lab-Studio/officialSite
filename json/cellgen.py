import json
import os
import random
import string

# Datos base de la celda
cell_data = {
    "cell_model": "LFP71173207/280Ah",
    "manufacturer_name": "Xiamen Hithium Energy Storage Technology Co., Ltd.",
    "eu_distributor_name": "Vector Energy S.L.",
    "manufacturing_place": "201-1, Comprehensive Building 5, No. 11, Butang Middle Road, Industrial Base Of Xiamen Torch High Tech Zone (Tongxiang), Xiamen, Fujian, P.R. China",
    "cell_chemistry": "LiFePo4",
    "cell_mass": "5,43Kg",
    "cell_dimensions": "Thickness:72.15mm (max), Width: 175.20mm (max), Height: 207.61mm (max)",
    "extinguishing_agent": "Hydrocarbon surfactant, CO2",
    "nominal_voltage": "3,2V",
    "minimum_voltage": "2,5V",
    "maximum_voltage": "3,65V",
    "cell_capacity_ah": "280Ah",
    "cell_capacity_wh": "896Wh",
    "internal_resistance": "2,55mOhm",
    "temperature_idle_lower": "-30ºC",
    "temperature_idle_upper": "60ºC",
    "testing_and_certifications": "UN 38.3, IEC 62619, MSDS"
}

# Ruta donde guardar los archivos
save_path = input("Introduce la ruta donde guardar los archivos: ")
os.makedirs(save_path, exist_ok=True)

# Función para generar nombre aleatorio alfanumérico de 10 caracteres en MAYÚSCULAS
def random_filename(length=10):
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))

# Lista para almacenar nombres de archivos
file_names_list = []

# Generar 20 archivos JSON
for i in range(1, 21):
    cell_data_copy = cell_data.copy()
    cell_data_copy["cell_number"] = i  # Añadir campo dinámico
    
    file_name = random_filename()
    file_names_list.append(file_name)
    
    file_path = os.path.join(save_path, f"{file_name}.json")
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(cell_data_copy, f, ensure_ascii=False, indent=2)

# Guardar archivo TXT con los nombres en formato array legible
txt_path = os.path.join(save_path, "file_names.txt")
with open(txt_path, 'w', encoding='utf-8') as f:
    f.write("[\n")
    for name in file_names_list:
        f.write(f'  "{name}",\n')
    f.write("]\n")

print(f"Se han generado 20 archivos JSON en {save_path}")
print(f"El archivo con los nombres se ha guardado como {txt_path}")
