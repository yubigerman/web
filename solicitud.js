   document.getElementById('download').addEventListener('click', function() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const pdfFileName = 'archivo.pdf';

            doc.text('Hola, este es un archivo PDF.', 10, 10);
            doc.save(pdfFileName);

            // Enlace para enviar por WhatsApp
            const fileUrl = 'URL_DEL_PDF_SUBIDO'; // Cambia esto por la URL del archivo PDF subido
            const whatsappLink = `https://api.whatsapp.com/send?text=Aquí tienes tu archivo PDF: ${fileUrl}`;
            document.getElementById('whatsapp-link').href = whatsappLink;
            document.getElementById('whatsapp-link').style.display = 'block';
        });
