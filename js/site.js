function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("copyrightYear").textContent = currentYear;
}

document.addEventListener('DOMContentLoaded', updateCopyrightYear);
