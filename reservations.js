console.log("reservations.js linked!");



$("#resoSubmit").on("click", function (event) {
    event.preventDefault();
    let formData = {
        name: $('#nameInput').val().trim(),
        phone: $('#phoneInput').val().trim(),
        email: $('#emailInput').val().trim(),
        customerID: $("#idInput").val().trim()
    };
    let location = window.location.origin;
    $.post(location + '/api/add', formData, function (data) {
        if (data) {
            alert(data)
        }
    })
})
