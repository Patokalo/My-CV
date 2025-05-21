document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.getElementById("darkModeBtn");
    const downloadPdfBtn = document.getElementById("downloadPdfBtn");
    const previewBtn = document.getElementById("previewBtn");

    // Mode sombre
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Télécharger en PDF
    downloadPdfBtn.addEventListener("click", () => {
        import('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js')
            .then(() => {
                const element = document.querySelector(".cv-container");
                html2pdf().from(element).save("cv-jean-dupont.pdf");
            })
            .catch(err => console.error("Erreur chargement html2pdf :", err));
    });

    // Prévisualisation
    previewBtn.addEventListener("click", () => {
        const previewWindow = window.open("", "_blank");
        const html = document.documentElement.outerHTML;
        previewWindow.document.write(html);
        previewWindow.document.close();
    });
});
