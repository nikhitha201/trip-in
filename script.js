function calculateCost(){

let packageCost =
document.getElementById("packageCost").value;

let people =
document.getElementById("people").value;

if(people==""){
alert("Enter number of travelers");
return;
}

let total = packageCost * people;

document.getElementById("result").innerHTML =
"Total Cost = ₹" + total;

}

function bookTrip(){

alert(
"Thank you for choosing TRIP IN! Your booking request has been submitted."
);

}
