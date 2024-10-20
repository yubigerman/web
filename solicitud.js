     document.getElementById('generate-and-send').addEventListener('click', async function() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const pdfFileName = 'archivo.pdf';

            doc.text('Hola, este es un archivo PDF.', 10, 10);
            const pdfData = doc.output('blob');

            // Subir el PDF a un servidor
            const formData = new FormData();
            formData.append('file', pdfData, pdfFileName);

            // Cambia la URL a tu servidor donde procesarás la subida
            const response = await fetch('TU_URL_DEL_SERVIDOR', {
                method: 'POST',
                body: formData,
            });
            
            if (response.ok) {
                const fileUrl = await response.text(); // Obtener la URL del archivo subido
                const whatsappLink = `https://api.whatsapp.com/send?text=Aquí tienes tu archivo PDF: ${fileUrl}`;
                window.open(whatsappLink, '_blank'); // Abrir WhatsApp con el enlace
            } else {
                alert('Error al subir el archivo.');
            }
        });
