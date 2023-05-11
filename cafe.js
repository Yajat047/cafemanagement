(function(){
    emailjs.init("M3BmILiOrW7iZgJvN");
})();

window.onload = function() {
    document.getElementById('s_btn').addEventListener('click', function(event) {
        event.preventDefault();
        sendEmail();
    });
}

function sendEmail() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var event = document.getElementById("event").value;
    var members = document.getElementById("members").value;
    var advance = document.getElementById("advance").value;

    var templateParams = {
        name: name,
        date: date,
        time: time,
        event: event,
        members: members,
        advance: advance
    };

    emailjs.send("service_yexoh9e", "template_d49owgj", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your reservation request has been sent successfully. We will contact you shortly.');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the reservation request. Please try again later.');
        });
}
