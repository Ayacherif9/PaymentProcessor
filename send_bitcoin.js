document.addEventListener('DOMContentLoaded', function () {
    // Function to show a specific section
    window.showSection = function(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    };

    // Function to add a new destination field
    window.addDestination = function() {
        const container = document.getElementById('destination-container');
        const destinationFields = container.querySelectorAll('.destination-field');

        if (destinationFields.length < 20) { // Limit to a maximum of 20 fields
            const newField = document.createElement('div');
            newField.classList.add('destination-field');
            newField.innerHTML = `
                <div class="label-container">
                    <label for="destination">Destination Address</label>
                    <span class="remove-destination" onclick="removeDestination(this)">Remove destination</span>
                </div>
                <input name="destination" type="text"> <br>
                <div class="label-container">
                    <label for="Amount">Amount</label>
                </div>
                <input name="Amount" type="text"> <br>
                <p class="text-white">Your available balance is 0 BTC.</p>
                <div class="checkbox-container">
                    <input type="checkbox" name="subtractFees">
                    <label>Subtract fees from amount</label>
                </div>
                <label for="labels">Labels</label><br>
                <input type="text" name="label" placeholder="Select labels">
                <br>
                <hr/>
            `;
            container.appendChild(newField);
        }
    };

    // Function to remove a destination field
    window.removeDestination = function(element) {
        const container = document.getElementById('destination-container');
        const destinationFields = container.querySelectorAll('.destination-field');

        if (destinationFields.length > 2) { // Ensure at least two fields are present
            element.closest('.destination-field').remove();
        } else {
            alert("At least two destination fields must be present.");
        }
    };

    // Initialize Section 2 with exactly two destination fields
    function initializeSection2() {
        const container = document.getElementById('destination-container');
        let currentFields = container.querySelectorAll('.destination-field').length;

        // Ensure exactly two fields are present
        while (currentFields < 2) {
            addDestination();
            currentFields++;
        }
    }

    // Event listener for the button in Section 1
    document.querySelector('#section1 .add-another-destination a').addEventListener('click', function(event) {
        event.preventDefault();
        showSection('section2');
        initializeSection2();
    });

    // Event listener for the button in Section 2
    document.querySelector('#section2 .button-secondary').addEventListener('click', function(event) {
        event.preventDefault();
        addDestination();
    });

    // Initialize Section 2 on page load if active
    if (document.querySelector('#section2').classList.contains('active')) {
        initializeSection2();
    }
});
