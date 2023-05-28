(function() {
    emailjs.init("M3BmILiOrW7iZgJvN");
})();

window.onload = function() {
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        sendEmail();
    });
};

function sendEmail() {
    var name = document.getElementById('name').value;
    var contact = document.getElementById('tel').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var items = [];

    var quantityInputs = document.getElementsByClassName('input-responsive quantity-input');
    var foodMenuDescs = document.getElementsByClassName('food-menu-desc');

    for (var i = 0; i < quantityInputs.length; i++) {
        var quantity = parseInt(quantityInputs[i].value);
        if (quantity > 0) {
            var itemName = foodMenuDescs[i].getElementsByTagName('h4')[0].innerText;
            items.push({
                name: itemName,
                quantity: quantity
            });
        }
    }

    var message = 'Name: ' + name + '\nPhone Number: ' + contact + '\nEmail: ' + email + '\nAddress: ' + address + '\n\nItems:\n';
    for (var j = 0; j < items.length; j++) {
        message += 'Name: ' + items[j].name + '\nQuantity: ' + items[j].quantity + '\n';
    }

    var templateParams = {
        subject: 'New Order',
        message: message
    };

    emailjs.send("service_yexoh9e", "template_ofa7l8o", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your order has been placed successfully. We will contact you shortly.');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to place the order. Please try again later.');
        });
}
