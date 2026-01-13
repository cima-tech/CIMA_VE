// GLOSSARY: APP-001 - Punto de entrada principal de la aplicación
// Descripción: Inicializa todos los módulos y configura la aplicación

import PatientProfile from '../patient/patient-profile.js';
import ThemeManager from './theme-manager.js';
import { initializeUI, setupEventListeners } from './ui-manager.js';
import { loadUserConfig } from '../user/user-manager.js';

class CIMAApp {
    constructor() {
        this.currentPatient = null;
        this.currentUser = null;
        this.themeManager = null;
        this.isInitialized = false;
        
        // GLOSSARY: APP-002 - Estados de la aplicación
        this.states = {
            PATIENT_EDIT: 'patient_edit',
            VISIT_ACTIVE: 'visit_active',
            DOCUMENT_PREVIEW: 'document_preview',
            SEARCH_MODE: 'search_mode'
        };
        
        this.currentState = null;
    }
    
    async initialize() {
        try {
            // 1. Cargar configuración de usuario
            this.currentUser = await loadUserConfig();
            
            // 2. Inicializar gestor de temas
            this.themeManager = new ThemeManager();
            await this.themeManager.initialize();
            
            // 3. Inicializar interfaz
            await initializeUI(this);
            
            // 4. Configurar event listeners
            setupEventListeners(this);
            
            // 5. Cargar datos persistentes
            await this.loadPersistentData();
            
            this.isInitialized = true;
            console.log('✅ CIMA App inicializada correctamente');
            
            // 6. Aplicar tema guardado
            const savedTheme = localStorage.getItem('cima_theme') || 'light';
            const savedLayout = localStorage.getItem('cima_layout') || 'topbar';
            this.themeManager.setTheme(savedTheme);
            this.themeManager.setLayout(savedLayout);
            
        } catch (error) {
            console.error('❌ Error inicializando aplicación:', error);
            this.showEmergencyError(error);
        }
    }
    
    async loadPersistentData() {
        // Cargar datos del último paciente si existe
        const lastPatientId = localStorage.getItem('cima_last_patient');
        if (lastPatientId) {
            // Aquí cargarías el paciente desde el almacenamiento
            // this.currentPatient = await loadPatient(lastPatientId);
        }
    }
    
    createNewPatient() {
        this.currentPatient = new PatientProfile();
        this.currentPatient.generarCodigoCIMA(this.currentUser?.id || 'u001');
        this.currentState = this.states.PATIENT_EDIT;
        return this.currentPatient;
    }
    
    showEmergencyError(error) {
        // Mostrar interfaz de error mínima
        document.body.innerHTML = `
            <div class="emergency-error glass">
                <h2>⚠️ Error en CIMA</h2>
                <p>${error.message}</p>
                <button onclick="location.reload()">Reintentar</button>
            </div>
        `;
    }
}

// Inicializar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.CIMA_APP = new CIMAApp();
    window.CIMA_APP.initialize();
});

export default CIMAApp;