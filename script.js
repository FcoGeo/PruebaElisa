const microplate = document.getElementById('microplate');
        const rows = 8;
        const cols = 12;

        // Crear dinámicamente 8x12 pocillos
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const well = document.createElement('div');
                well.className = 'well';
                well.dataset.row = i;
                well.dataset.col = j;
                microplate.appendChild(well);
            }
        }

        function llenarAmarillo() {
            const wells = document.querySelectorAll('.well');
            wells.forEach(well => {
                well.style.backgroundColor = 'yellow';
            });
        }

        function difuminadoAleatorio() {
            const wells = document.querySelectorAll('.well');
            wells.forEach(well => {
                const randomOpacity = Math.random();
                well.style.backgroundColor = `rgba(255, 255, 0, ${randomOpacity})`;
            });
        }

        function limpiar() {
            const wells = document.querySelectorAll('.well');
            wells.forEach(well => {
                well.style.backgroundColor = '';
            });
        }