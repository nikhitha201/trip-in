/* ==========================================
   ELEMENTS
========================================== */

const startBtn = document.getElementById("startBtn");

const planner = document.getElementById("planner");

const budgetSlider =
document.getElementById("budgetSlider");

const budgetValue =
document.getElementById("budgetValue");

const generateBtn =
document.getElementById("generateBtn");

const resultsSection =
document.getElementById("resultsSection");

const results =
document.getElementById("results");


/* ==========================================
   SHOW PLANNER
========================================== */

startBtn.addEventListener("click", () => {

planner.classList.remove("hidden");

planner.scrollIntoView({
behavior: "smooth"
});

});


/* ==========================================
   BUDGET DISPLAY
========================================== */

budgetSlider.addEventListener("input", () => {

budgetValue.innerText =
"₹" + budgetSlider.value;

});


/* ==========================================
   RANDOM HOTEL
========================================== */

function getHotel(category){

const hotelList = hotels[category];

const randomIndex =
Math.floor(
Math.random() * hotelList.length
);

return hotelList[randomIndex];

}


/* ==========================================
   FOOD RECOMMENDATION
========================================== */

function getFoodSuggestions(){

let selectedFoods = [];

while(selectedFoods.length < 3){

const food =
foods[
Math.floor(
Math.random() * foods.length
)
];

if(!selectedFoods.includes(food)){
selectedFoods.push(food);
}

}

return selectedFoods;

}


/* ==========================================
   GENERATE PLAN
========================================== */

generateBtn.addEventListener("click", () => {

const duration =
document.getElementById("duration").value;

const budget =
parseInt(budgetSlider.value);

if(duration === ""){

alert(
"Please select your trip duration."
);

return;

}

const budgetType =
getBudgetType(budget);

const hotel =
getHotel(budgetType);

const foodSuggestions =
getFoodSuggestions();

const itinerary =
getItinerary(duration);

displayPlan(
itinerary,
hotel,
foodSuggestions,
budget,
budgetType
);

});


/* ==========================================
   DISPLAY PLAN
========================================== */

function displayPlan(
itinerary,
hotel,
foodSuggestions,
budget,
budgetType
){

resultsSection.classList.remove("hidden");

results.innerHTML = "";


/* ========= SUMMARY CARD ========= */

results.innerHTML += `

<div class="summary-card">

<h3>Trip Summary</h3>

<p><strong>Budget:</strong> ₹${budget}</p>

<p><strong>Category:</strong>
${budgetType.toUpperCase()}</p>

<p><strong>Recommended Hotel:</strong>
${hotel}</p>

<p><strong>Must Try Foods:</strong>
${foodSuggestions.join(", ")}</p>

</div>

`;


/* ========= DAY CARDS ========= */

itinerary.forEach(day => {

const placeInfo =
getPlaceInfo(day.morning);

results.innerHTML += `

<div class="day-card">

<h3>${day.day}</h3>

<p>
🌅 <strong>Morning:</strong>
${day.morning}
</p>

<p>
🍳 <strong>Breakfast:</strong>
${day.breakfast}
</p>

<p>
🏛 <strong>Afternoon:</strong>
${day.afternoon}
</p>

<p>
🍽 <strong>Lunch:</strong>
${day.lunch}
</p>

<p>
🌇 <strong>Evening:</strong>
${day.evening}
</p>

${day.dinner ?

`<p>
🍴 <strong>Dinner:</strong>
${day.dinner}
</p>`

: ""}

<p>
🏨 <strong>Stay:</strong>
${hotel}
</p>

${
placeInfo ?

`

<div class="place-details">

<h4>
Place Information
</h4>

<p>
🕒 Best Time:
${placeInfo.bestTime}
</p>

<p>
🌤 Best Season:
${placeInfo.season}
</p>

<p>
🎫 Entry Fee:
${placeInfo.entryFee}
</p>

<p>
⌛ Visit Duration:
${placeInfo.duration}
</p>

<p>
🍽 Nearby Food:
${placeInfo.food}
</p>

<p>
🏨 Nearby Hotel:
${placeInfo.hotel}
</p>

</div>

`

: ""
}

</div>

`;

});


resultsSection.scrollIntoView({
behavior:"smooth"
});

}
