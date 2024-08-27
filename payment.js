// Fonction pour gérer l'ouverture et la fermeture des menus déroulants
function toggleDropdown(button) {
    var dropdownMenu = button.nextElementSibling;
    var allDropdowns = document.querySelectorAll('.dropdown-menu');

    // Masquer tous les autres menus
    allDropdowns.forEach(menu => {
        if (menu !== dropdownMenu) {
            menu.style.display = 'none';
        }
    });

    // Afficher ou masquer le menu actuel
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Fonction pour mettre à jour le texte du bouton en fonction du choix sélectionné
function updateButtonText(button, selectedItemText) {
    button.textContent = selectedItemText;
}

// Fonction pour gérer la sélection des choix
function handleSelection(event) {
    var item = event.target;
    var dropdownMenu = item.closest('.dropdown-menu');
    var button = dropdownMenu.previousElementSibling;

    if (item.tagName === 'A') {
        event.preventDefault();

        // Vérifiez si l'élément sélectionné est "Custom Range"
        if (item.textContent === 'Custom Range') {
            // Afficher l'interface de filtrage des dates et heures
            document.getElementById('date-range-filter').style.display = 'block';
        } else {
            // Remplacer le texte du bouton par le choix sélectionné
            updateButtonText(button, item.textContent);

            // Masquer le menu après la sélection
            dropdownMenu.style.display = 'none';
        }
    }
}

// Ajouter des écouteurs d'événements aux éléments de menu pour "All Status"
document.querySelectorAll('.all-status-button + .dropdown-menu a').forEach(item => {
    item.addEventListener('click', handleSelection);
});

// Ajouter des écouteurs d'événements aux éléments de menu pour "Payment"
document.querySelectorAll('.dropdown-button + .dropdown-menu a').forEach(item => {
    item.addEventListener('click', handleSelection);
});

// Ajouter des écouteurs d'événements pour fermer le filtre des dates
document.getElementById('cancel-filter').addEventListener('click', function() {
    document.getElementById('date-range-filter').style.display = 'none';
});

document.getElementById('apply-dates').addEventListener('click', function() {
    // Code pour appliquer les dates (si nécessaire)
    var startDateTime = document.getElementById('start-datetime').value;
    var endDateTime = document.getElementById('end-datetime').value;

    // Ajoutez votre logique pour filtrer les données en fonction des dates et heures

    // Fermer le filtre après application
    document.getElementById('date-range-filter').style.display = 'none';
});

// Fermer les menus déroulants lorsque l'utilisateur clique en dehors
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(dropdown => {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            }
        });
    }
};






// Fonction pour gérer la sélection des choix
function handleSelection(event) {
    var item = event.target;
    var dropdownMenu = item.closest('.dropdown-menu');
    var button = dropdownMenu.previousElementSibling;

    if (item.tagName === 'A') {
        event.preventDefault();

        if (item.textContent === 'Custom Range') {
            // Afficher l'overlay et l'interface de filtrage des dates
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('date-range-modal').style.display = 'block';
        } else {
            updateButtonText(button, item.textContent);
            dropdownMenu.style.display = 'none';
        }
    }
}

// Fermer le filtre des dates
document.getElementById('cancel-dates').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('date-range-modal').style.display = 'none';
});

document.getElementById('apply-dates').addEventListener('click', function() {
    var startDateTime = document.getElementById('start-datetime').value;
    var endDateTime = document.getElementById('end-datetime').value;

    // Votre logique pour filtrer les données en fonction des dates

    // Fermer l'overlay et le modal
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('date-range-modal').style.display = 'none';
});

// Fermer l'overlay lorsque l'utilisateur clique en dehors de l'interface
window.onclick = function(event) {
    if (event.target === document.getElementById('overlay')) {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('date-range-modal').style.display = 'none';
    }
};


//create invoices__lorsque tu cliques additional options

function toggleDropdown(event, button) {
    event.preventDefault(); // Prevent the default button action
    
    // Get the dropdown menu
    const menu = button.nextElementSibling;
    
    // Toggle the dropdown menu visibility
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        // Hide all other dropdown menus
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            if (m !== menu) m.style.display = "none";
        });
        menu.style.display = "block";
    }
}
