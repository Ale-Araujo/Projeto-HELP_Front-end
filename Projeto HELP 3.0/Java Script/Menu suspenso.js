
function toggleDropdown(id) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function (dropdown) {
        if (dropdown.id !== id) {
            dropdown.classList.remove('show');
        }
    });

    var currentDropdown = document.getElementById(id);
    currentDropdown.classList.toggle('show');
}
