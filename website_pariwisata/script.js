function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Tampilkan section yang dipilih
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}