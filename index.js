document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(this);

    // Convert form data to object
    var formObject = {};
    formData.forEach(function(value, key) {
        formObject[key] = value;
    });

    var inputFields = document.querySelectorAll('input[type="text"], textarea');
    inputFields.forEach(function(input) {
        input.readOnly = true;
       input.style.color= '#696666';
    });

    // Disable submit button
    var submitButton = document.querySelector('input[type="submit"]');
    submitButton.disabled = true;
});

