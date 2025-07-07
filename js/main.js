document.addEventListener('DOMContentLoaded', function() {
    // El núcleo de configuración y cálculo se mantiene, ya que es lógicamente sólido.
    // La clave es remapear los `ui` selectors a la nueva estructura del HTML.

    const CONFIG = {
        packages: {
            'ESP1': { investment: 200, gen5Bonuses: [25, 5, 5, 5, 10], cv: 100 },
            'ESP2': { investment: 500, gen5Bonuses: [75, 10, 10, 10, 20], cv: 250 },
            'ESP3': { investment: 1000, gen5Bonuses: [150, 20, 20, 20, 40], cv: 500 }
        },
        exchangeRate: 4500,
        binary: { cvPerPerson: 50, percentage: 0.17 }
    };

    let state = { currency: 'COP', selectedPackage: 'ESP3' };
    
    // NOTA: Estos selectores deben corresponder a elementos que se creen
    // dentro de los nuevos contenedores `#calculator-app` y `#ai-planner`.
    const ui = {
        // ... (Nuevos selectores para la UI rediseñada)
        whatsappLink: document.getElementById('whatsapp-link'),
    };
    
    // Las funciones de CÁLCULO (formatCurrency, calculateBinaryIncome, etc.) se MANTIENEN.
    // ...

    // Las funciones de RENDERIZADO deben ser reescritas para poblar la NUEVA UI.
    // Ejemplo:
    function renderComparisonTable() {
        const tableContainer = document.querySelector('.comparison-table');
        if (!tableContainer) return;
        
        // Datos de la tabla del documento estratégico
        const data = [
            { metric: 'Capital Inicial en Riesgo', traditional: 'Alto a Extremo', gano: 'Bajo (Inversión en producto)' },
            { metric: 'Exposición al Riesgo', traditional: 'Muy Alto', gano: 'Casi Nulo (Sin costos fijos)' },
            { metric: 'Costos Operativos Mensuales', traditional: 'Altos', gano: 'Mínimos (Consumo personal)'},
            { metric: 'Sistema de Apoyo', traditional: 'Inexistente', gano: 'Completo (Mentoría, Equipo)'},
            { metric: 'Tipo de Ingreso', traditional: 'Lineal', gano: 'Residual y Apalancado'},
            { metric: 'Escalabilidad', traditional: 'Limitada', gano: 'Global e Ilimitada'},
            { metric: 'Estilo de Vida', traditional: 'Absorbente', gano: 'Flexible, Libertad de tiempo'}
        ];
        
        let tableHTML = `
            <div class="table-header">
                <div>Métrica Empresarial</div>
                <div>Emprendimiento Tradicional</div>
                <div class="highlight">La Franquicia Personal Gano Excel</div>
            </div>`;
            
        data.forEach(row => {
            tableHTML += `
                <div class="table-row">
                    <div>${row.metric}</div>
                    <div>${row.traditional}</div>
                    <div class="highlight">${row.gano}</div>
                </div>`;
        });
        
        tableContainer.innerHTML = tableHTML;
        
        // Se necesitarían estilos en style.css para .table-header, .table-row, etc.
    }


    function setupWhatsAppLink() {
        if (!ui.whatsappLink) return;
        const params = new URLSearchParams(window.location.search);
        const phone = params.get('socio');
        if (phone) {
            // Se actualiza el mensaje para alinearse al nuevo léxico
            const message = encodeURIComponent("Hola, he revisado el Plan Maestro de Asociación y estoy listo para conversar sobre cómo convertirme en un socio estratégico.");
            ui.whatsappLink.href = `https://wa.me/${phone}?text=${message}`;
        } else {
            // Enlace genérico si no hay código de socio
            const genericMessage = encodeURIComponent("Hola, he revisado el Plan Maestro de Asociación y me gustaría saber más.");
            ui.whatsappLink.href = `https://wa.me/?text=${genericMessage}`;
        }
    }

    // La función para llamar a la API de `generate-plan` se mantiene igual.
    // Su lógica interna y el prompt son excelentes.
    async function generateActionPlan() {
       // ... la lógica existente es válida y se conecta al endpoint /api/generate-plan
    }
    
    function initialize() {
        renderComparisonTable();
        setupWhatsAppLink();
        
        // Todos los demás event listeners para las calculadoras y el formulario
        // necesitarían ser vinculados a los nuevos elementos de la UI.
    }

    initialize();
});
