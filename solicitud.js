function mostrarInfo(infoId) {
    // Oculta todas las secciones de información
    const infoSections = document.querySelectorAll('.info');
    infoSections.forEach(section => section.style.display = 'none');

    // Muestra la sección seleccionada
    const selectedInfo = document.getElementById(infoId);
    selectedInfo.style.display = 'block';
}
