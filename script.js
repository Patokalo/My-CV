document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.getElementById("darkModeBtn");
    const downloadPdfBtn = document.getElementById("downloadPdfBtn");
    const previewBtn = document.getElementById("previewBtn");

    // Mode sombre
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Télécharger en PDF
 document.addEventListener("DOMContentLoaded", function () {
    const downloadPdfBtn = document.getElementById("downloadPdfBtn");

    downloadPdfBtn.addEventListener("click", () => {
        const element = document.querySelector(".cv-container");
        if (element) {
            html2pdf().from(element).save("cv-aboubacar-kalo.pdf");
        } else {
            console.error("Élément .cv-container introuvable !");
        }
    });
});


    // Prévisualisation
    previewBtn.addEventListener("click", () => {
        const previewWindow = window.open("", "_blank");
        const html = document.documentElement.outerHTML;
        previewWindow.document.write(html);
        previewWindow.document.close();
    });
});
