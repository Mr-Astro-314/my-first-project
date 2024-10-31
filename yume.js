var modelbox = document.getElementById('bookingformbox');
var spanx = document.getElementsByClassName('cbf')[0];
var ticketBook = document.getElementsByClassName('ticket-book');
for (let i = 0; i < ticketBook.length; i++){
    ticketBook[i].addEventListener('click', function(){
        modelbox.style.display = "block";
    });
}

spanx.onclick = function(){
    modelbox.style.display = "none";
}
var submitButton = document.getElementById('booking-form');
submitButton.addEventListener('submit', function(event){
    event.preventDefault();
    var model= document.getElementsByClassName('model')[0];
    model.style.display = "block";
    modelbox.style.display = "none"
});


var yesdisplay = document.getElementById('yes');
        yesdisplay.addEventListener('click',function(){
            var resultbox = document.getElementById('result-box');
            resultbox.style.display =  "block";
            var model =  document.getElementsByClassName('model')[0];
            model.style.display = "none"
        });

        document.getElementById('yes').addEventListener('click',function(){
            var name = document.getElementById('name').value;
            var mail = document.getElementById('mail').value;
            var number = document.getElementById('number').value;
            var age = document.getElementById('age').value;
            var address = document.getElementById('address').value;
            var date = document.getElementById('date').value;
            var resultdiv = document.getElementById('results');

            resultdiv.innerHTML = `<h2> submited details; </h2>
            <p><strong> Name: </strong>${name} </p>
            <p><strong> Email: </strong>${mail} </p>
            <p><strong> number: </strong>${number} </p>
            <p><strong> age: </strong>${age} </p>
            <p><strong> address: </strong>${address} </p>
            <p><strong> date: </strong>${date} </p>`;
        });



        document.getElementById('bookNow').addEventListener('click', function(booklet){
            booklet.preventDefault();
            var successfully = document.getElementById('successfully');
            successfully.style.display = "block"


        })
        var saktiman = document.getElementById('boxlet');
        saktiman.addEventListener('click', function(){
            let andhera = document.getElementById('result-box');
            andhera.style.display = 'none'
        })





function showDetails(detailId){
    var allDetails = document.querySelectorAll('[id$="-details"]');
    allDetails.forEach(function(div){
        div.style.display = "none";
    });
    var detailsDiv = document.getElementById(detailId);
    detailsDiv.style.display = "block";
}
