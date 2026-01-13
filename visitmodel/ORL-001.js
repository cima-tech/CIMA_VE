// GLOSSARY: ORL-001 - Modelo de consulta ORL completo
// Descripción: Contiene todas las definiciones, opciones y estructuras para consultas ORL

export const CIMA_DATA = {
    // GLOSSARY: MOT-001 - Motivos de consulta ORL
    // Descripción: Lista estandarizada de motivos de consulta en otorrinolaringología
    MOTIVOS: [
        "Obstrucción Nasal", "Ronquidos Nocturnos", "Respiración Bucal", 
        "Rinorrea", "Odinofagia", "Otorrea", "Otalgia", "Masa en Cuello", 
        "Difonía", "Dolor Facial", "Cefalea"
    ],
    
    // GLOSSARY: ANT-001 - Antecedentes relevantes
    // Descripción: Condiciones médicas previas relevantes para ORL
    ANTECEDENTES: [
        "Alergias", "Asma", "HTA", "Tiroides", "DM", "IQx", "Trauma Acústico"
    ],
    
    // GLOSSARY: DX-001 - Diagnósticos ORL
    // Descripción: Catálogo completo de diagnósticos en otorrinolaringología
    DX: [
        "Otocerumen Bilateral", "Otocerumen Derecho", "Otocerumen Izquierdo",
        "Otitis Externa Bilateral", "Otitis Externa Derecha", "Otitis Externa Izquierda",
        "Otitis Media Aguda Bilateral", "Otitis Media Aguda Derecha", "Otitis Media Aguda Izquierda",
        "Otitis Media Crónica Perforada Bilateral", "Otitis Media Crónica Perforada Derecha",
        "Otitis Media Crónica Perforada Izquierda", "Otitis Media Crónica Sucurativa",
        "Otitis Media Crónica Colestetomatosa", "Hipoacusia Neurosensorial Profunda Bilateral",
        "Hipoacusia Neurosensorial Profunda Derecha", "Hipoacusia Neurosensorial Profunda Izquierda",
        "Hipoacusia Conductiva Leve Bilateral", "Hipoacusia Conductiva Leve Derecha",
        "Hipoacusia Conductiva Leve Izquierda", "Presbiacusia", "Otitis Media Serosa Bilateral",
        "Otitis Media Serosa Derecha", "Otitis Media Serosa Izquierda", "Faringoamigdalitis Aguda",
        "Tonsilitis Recurrente", "Otitis Media Aguda Recurrente", "Alto Riesgo Biológico Para Hipoacusia",
        "Rinopatía Obstructiva", "Rinitis Alérgica", "Poliposis Nasal", "Rinosinusitis Aguda Maxiloetmoidal",
        "Rinosinusitis Aguda Maxilar", "Rinosinusitis Maxilar Crónica", "Rinosinusitis Crónica Con Poliposis Nasal",
        "Lesión En Cuerda Vocal Derecha", "Lesión En Cuerda Vocal Izquierda", "Parálisis De Cuerda Vocal Bilateral",
        "Parálisis De Cuerda Vocal Derecha", "Parálisis De Cuerda Vocal Izquierda", "Epistaxis Anterior",
        "Epistaxis Anteroposterior", "Epistaxis Posterior", "Frenillo Lingual", "Antecedente Quirúrgico"
    ],
    
    // GLOSSARY: MED-001 - Medicamentos ORL
    // Descripción: Medicamentos comúnmente prescritos en ORL, organizados por categoría
    RECIPE_MEDS: {
        "Esteroides Nasales": [
            "Solución Fisiológica", "Flinas / Nasonex / Elocon / Flixonase / Nimarin / Budenas (Spray Nasal)",
            "Flinas - Spray Nasal", "Nasonex - Spray Nasal", "Elocon - Spray Nasal",
            "Flixonase - Spray Nasal", "Nimarin - Spray Nasal", "Budenas - Spray Nasal",
            "Momentasona o Fluticasona - Spray Nasal"
        ],
        "Antialérgicos": [
            "Desloratadina - Tabletas 5 mg", "Desloratadina - Jarabe", "Loratadina - Tabletas 10 mg",
            "Loratadina - Jarabe", "Cetirizina - Tabletas 10 mg", "Cetirizina - Jarabe",
            "Levocetirizina - Tabletas 5 mg", "Levocetirizina - Jarabe", "Rinolast - Tabletas",
            "Rinolast - Jarabe", "Fexofenadina - Tabletas 120 mg", "Fexofenadina - Jarabe",
            "Claricort - Tabletas", "Lorecort - Jarabe", "Montelukast - Tabletas 4 mg",
            "Montelukast - Tabletas 5 mg", "Montelukast - Tabletas 10 mg", "Rinomax - Gotas Nasales",
            "Bactroban, Bacitracina, Mupirocina, Muprovan - crema o ungüento"
        ],
        "Gotas óticas": [
            "Quinotic, Quinotic HC, (Gotas Óticas)", "Otalex (Gotas Óticas)",
            "Poliótico (Gotas Óticas)", "Otirilin o Aceite de Bebé (Gotas)"
        ],
        "Protector Gástrico": [
            "Pantoprazol ó Esomeprazol - Tabletas de 20 mg", "Pantoprazol - Tabletas 40 mg"
        ],
        "Antibióticos": [
            "Amoxicilina / Acido Clavulánico - Tabletas 875/125 mg",
            "Amoxicilina / Acido Clavulánico - Suspensión 600 mg / 5 ml",
            "Amoxicilina - Tabletas 500 mg", "Amoxicilina - Jarabe",
            "Sultamicilina - Tabletas 750 mg", "Sultamicilina - Suspensión 250 mg / 5 ml",
            "Levofloxacina- Tabletas 500 mg", "Levofloxacina- Tabletas 750 mg",
            "Moxifloxacina, Moxen, Avelox - Comprimidos 400 mg"
        ],
        "Otros": [
            "Pulmolix - Sobres", "Betahistina - 8 mg", "Betahistina - 16 mg",
            "Betahistina - 24 mg", "Viajesan - Comprimidos"
        ]
    },
    
    // GLOSSARY: IND-001 - Indicaciones de medicamentos
    // Descripción: Posologías y esquemas de tratamiento estandarizados
    INDICACIONES_OPTIONS: {
        "Esteroides Nasales": [
            "Realizar lavados nasales cada 12 horas por 7 días.",
            "Colocar dos aplicaciones en cada fosa nasal cada 12 horas por 1 mes.",
            "Colocar una aplicación en cada fosa nasal cada 12 horas por 1 mes."
        ],
        "Antialérgicos": [
            "Tomar 1 tableta diaria por 1 mes.",
            "Dar vía oral 1 cc una vez al día por 1 mes.",
            "Dar vía oral 2 cc una vez al día por 1 mes.",
            "Dar vía oral 3 cc una vez al día por 1 mes.",
            "Dar vía oral 4 cc una vez al día por 1 mes.",
            "Dar vía oral 5 cc una vez al día por 1 mes.",
            "Tomar 1 tableta cada 12 horas por 7 días.",
            "Dar vía oral 1 cc cada 12 horas por 7 días.",
            "Dar vía oral 2 cc cada 12 horas por 7 días.",
            "Dar vía oral 3 cc cada 12 horas por 7 días.",
            "Dar vía oral 4 cc cada 12 horas por 7 días.",
            "Dar vía oral 5 cc cada 12 horas por 7 días.",
            "Colocar 3 Gotas en cada fosa nasal cada 8 horas por 5 días.",
            "Colocar 1 aplicación en cada fosa nasal cada 12 horas por 7 días.",
            "Tomar 1 tableta diaria por 3 meses."
        ],
        "Gotas óticas": [
            "Aplicar 3 Gotas en cada oído cada 12 horas por 7 días. No mojar los oídos.",
            "Aplicar 3 Gotas en cada oído cada 8 horas por 7 días. No mojar los oídos.",
            "Aplicar 3 Gotas en oído izquierdo cada 8 horas por 7 días. No mojar los oídos.",
            "Aplicar 3 Gotas en oído izquierdo cada 12 horas por 7 días. No mojar los oídos.",
            "Aplicar 3 Gotas en oído derecho cada 8 horas por 7 días. No mojar los oídos.",
            "Aplicar 3 Gotas en oído derecho cada 12 horas por 7 días. No mojar los oídos."
        ],
        "Protector Gástrico": [
            "Tomar 1 tableta diaria por 3 meses.",
            "Tomar 1 tableta diaria antes del desayuno por 1 mes.",
            "Tomar 1 tableta antes del desayuno y 1 Tableta antes la cena por 1 mes."
        ],
        "Antibióticos": [
            "Tomar 1 tableta cada 12 horas por 10 días.",
            "Tomar 1 tableta cada 8 horas por 10 días.",
            "Tomar 1 tableta diaria por 10 días.",
            "Dar vía oral 1 cc cada 12 horas por 10 días.",
            "Dar vía oral 2 cc cada 12 horas por 10 días.",
            "Dar vía oral 3 cc cada 12 horas por 10 días.",
            "Dar vía oral 4 cc cada 12 horas por 10 días.",
            "Dar vía oral 5 cc cada 12 horas por 10 días.",
            "Dar vía oral 6 cc cada 12 horas por 10 días."
        ],
        "Otros": [
            "Tomar 1 tableta cada 12 horas por 10 días.",
            "Tomar 1 tableta cada 8 horas por 10 días.",
            "Tomar 1 tableta diaria por 10 días."
        ]
    },

    // GLOSSARY: STU-001 - Estudios ORL
    // Descripción: Configuraciones de estudios específicos en ORL
    STUDIES: {
        "Nasofibrolaringoscopia": {
            "Fosas Nasales": ["Permeables", "No Permeables"],
            "Correderas Nasales": [
                "Sin Rinorrea", "Rinorrea Blanca Escasa", "Rinorrea Blanca Moderada",
                "Rinorrea Blanca Abundante", "Rinorrea Hialina Escasa", "Rinorrea Hialina Moderada",
                "Rinorrea Hialina Abundante", "Rinorrea Amarilla Escasa", "Rinorrea Amarilla Moderada",
                "Rinorrea Amarilla Abundante", "Rinorrea Verde Escasa", "Rinorrea Verde Moderada",
                "Rinorrea Verde Abundante"
            ],
            "Tabique": [
                "Central", "Septumdesviación Levoconvexa", "Septumdesviación Dextroconvexa",
                "Levoconvexa Con Espolón Oseo Derecho", "Levoconvexa Con Espolón Oseo Izquierdo",
                "Dextroconvexa Con Espolón Oseo Derecho", "Dextroconvexa Con Espolón Oseo Izquierdo",
                "Central Con Espolón Óseo Derecho", "Central Con Espolón Óseo Izquierdo"
            ]
        },
        "Endoscopia Nasal": {
            "Fosas Nasales": ["Permeables", "No Permeables"],
            "Tabique": [
                "Central", "Septumdesviación Levoconvexa", "Septumdesviación Dextroconvexa",
                "Levoconvexa Con Espolón Oseo Derecho", "Levoconvexa Con Espolón Oseo Izquierdo",
                "Dextroconvexa Con Espolón Oseo Derecho", "Dextroconvexa Con Espolón Oseo Izquierdo",
                "Central Con Espolón Óseo Derecho", "Central Con Espolón Óseo Izquierdo"
            ]
        }
    },
    
    // GLOSSARY: EXAM-001 - Examen físico ORL
    // Descripción: Componentes del examen físico especializado
    PHYSICAL_EXAM: {
        "Cara": {
            "Simetría": [
                "Simetría Facial", "Asimetría Facial", "Parálisis Facial Periférica",
                "Parálisis Facial Periférica derecha", "Parálisis Facial Periférica izquierda",
                "Parálisis Facial Central", "Edema Facial", "Malformación Craneofacial"
            ]
        },
        "Oído Derecho": {
            "Oído Externo": [
                "Pabellón Auricular Indemne Normoimplantado", "Microtia Grado 1",
                "Microtia Grado 2", "Microtia Grado 3", "Anotia", "Fístula"
            ],
            "Conducto Auditivo Externo": [
                "CAE Libre", "CAE con Otocerumen", "CAE estenótico", "Atresia CAE",
                "CAE con LOE", "CAE con Otorrea Fétida", "CAE Descamativo"
            ]
        }
    }
};

// GLOSSARY: VISIT-001 - Clase de visita ORL
// Descripción: Representa una consulta individual con todos sus componentes
export class ORLVisit {
    constructor(type = 'Primera', patientData = null) {
        this.id = `visit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        this.type = type;
        this.timestamp = new Date().toISOString();
        this.patientData = patientData;
        
        // Componentes de la consulta
        this.components = {
            motivo: { texto: '', chips: [] },
            enfermedadActual: '',
            antecedentes: { chips: [] },
            examenFisico: {},
            estudios: {},
            diagnostico: { texto: '', chips: [] },
            tratamiento: {
                medicamentos: [],
                indicaciones: [],
                plan: ''
            },
            notas: ''
        };
        
        this.metadata = {
            estado: 'borrador', // borrador | completado | emitido
            documentoEmitido: false,
            fechaEmision: null,
            usuarioResponsable: null
        };
    }
    
    // GLOSSARY: VISIT-002 - Métodos de utilidad
    agregarMotivo(motivo) {
        this.components.motivo.chips.push(motivo);
    }
    
    agregarDiagnostico(dx) {
        this.components.diagnostico.chips.push(dx);
    }
    
    agregarMedicamento(med, indicacion) {
        this.components.tratamiento.medicamentos.push({
            nombre: med,
            indicacion: indicacion,
            timestamp: new Date().toISOString()
        });
    }
    
    completarConsulta() {
        this.metadata.estado = 'completado';
        this.metadata.fechaCompletado = new Date().toISOString();
    }
    
    emitirDocumento(tipo) {
        this.metadata.estado = 'emitido';
        this.metadata.documentoEmitido = true;
        this.metadata.fechaEmision = new Date().toISOString();
        this.metadata.tipoDocumento = tipo; // 'informe' | 'receta'
    }
    
    toJSON() {
        return {
            id: this.id,
            type: this.type,
            timestamp: this.timestamp,
            components: this.components,
            metadata: this.metadata,
            patientReference: this.patientData?.identificacion?.codigo_interno_cima
        };
    }
    
    static fromJSON(json) {
        const visit = new ORLVisit(json.type);
        Object.assign(visit, json);
        return visit;
    }
}

// GLOSSARY: VISIT-003 - Factory de visitas
// Descripción: Crea visitas con configuración específica
export class VisitFactory {
    static createFirstVisit(patientData) {
        const visit = new ORLVisit('Primera', patientData);
        
        // Configuración automática para primera consulta
        const edad = patientData?.demografia?.edad_auto || 0;
        const sexo = patientData?.demografia?.genero || 'Desconocido';
        
        visit.components.enfermedadActual = 
            `Paciente ${sexo} de ${edad} años quien acude a consulta por presentar [Motivo de consulta].`;
        
        return visit;
    }
    
    static createFollowUpVisit(previousVisit) {
        const visit = new ORLVisit('Sucesiva', previousVisit.patientData);
        
        // Heredar datos de la consulta anterior
        visit.components = JSON.parse(JSON.stringify(previousVisit.components));
        visit.components.enfermedadActual = 
            `Control de ${previousVisit.components.diagnostico.chips[0] || 'patología ORL'}.`;
        
        return visit;
    }
}