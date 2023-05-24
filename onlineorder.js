    // Initialize Email.js
    (function(){
        emailjs.init("M3BmILiOrW7iZgJvN");

    })();
    window.onload = function () {
        document.getElementById('confirm').addEventListener('click', function(event) {
            event.preventDefault();
            sendEmail();
        } );
    }
    // Function to send the email
    function sendEmail() {
        
        // Get the form values
        var name = document.getElementById('name').value;
        var tel = document.getElementById('tel').value;
        var email = document.getElementById('email').value;
        var address = document.getElementById('address').value;
        var food1 = document.getElementById('food1').value;
        var qty1 = document.getElementById('qty1').value;
        var food2 = document.getElementById('food2').value;
        var qty2 = document.getElementById('qty2').value;
        var food3 = document.getElementById('food3').value;
        var qty3 = document.getElementById('qty3').value;
        
        // Compose the email parameters
        var message = 'Name: ' + name + '\nPhone Number: ' + tel + '\nEmail: ' + email + '\nAddress: ' + address + '\n\nOrder Details:\n';
        if (food1 !== 'nil') {
            message += 'Item 1: ' + food1 + ' (Qty: ' + qty1 + ')\n';
        }
        if (food2 !== 'nil') {
            message += 'Item 2: ' + food2 + ' (Qty: ' + qty2 + ')\n';
        }
        if (food3 !== 'nil') {
            message += 'Item 3: ' + food3 + ' (Qty: ' + qty3 + ')\n';
        }
        
        var params = {
            subject: 'New Order',
            message: message
        };
        
        // Send the email
        emailjs.send("service_yexoh9e", "template_ofa7l8o", params)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Order placed successfully!');
                // document.getElementById('name').value = '';
                // document.getElementById('tel').value = '';
                // document.getElementById('email').value = '';
                // document.getElementById('address').value = '';
                // document.getElementById('food1').value = 'nil';
                // document.getElementById('qty1').value = '1';
                // document.getElementById('food2').value = 'nil';
                // document.getElementById('qty2').value = '1';
                // document.getElementById('food3').value = 'nil';
                // document.getElementById('qty3').value = '1';
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to place the order. Please try again later.');
            });
    }
