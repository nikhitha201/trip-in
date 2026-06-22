const startBtn =
document.getElementById("startBtn");

const planner =
document.getElementById("planner");

startBtn.addEventListener("click",()=>{

planner.scrollIntoView({
behavior:"smooth"
});

});

const budgetSlider =
document.getElementById("budgetSlider");

const budgetValue =
document.getElementById("budgetValue");

budgetSlider.addEventListener("input",()=>{

budgetValue.innerText =
"₹" + budgetSlider.value;

});
const places = [

{
name:"Charminar",
bestTime:"7 AM - 10 AM",
season:"October - February",
entryFee:"₹25",
duration:"2 Hours",
food:"Shadab Restaurant",
hotel:"Hotel Marjaan"
},

{
name:"Golconda Fort",
bestTime:"4 PM - 7 PM",
season:"October - February",
entryFee:"₹25",
duration:"3 Hours",
food:"Paradise Biryani",
hotel:"Hotel Deccan Serai"
},

{
name:"Ramoji Film City",
bestTime:"9 AM - 6 PM",
season:"All Seasons",
entryFee:"₹1350",
duration:"Full Day",
food:"Ramoji Food Court",
hotel:"Sitara Luxury Hotel"
},

{
name:"Hussain Sagar",
bestTime:"5 PM - 8 PM",
season:"October - March",
entryFee:"Free",
duration:"2 Hours",
food:"Eat Street",
hotel:"Hotel Annapurna"
},

{
name:"Birla Mandir",
bestTime:"6 AM - 9 AM",
season:"All Seasons",
entryFee:"Free",
duration:"1 Hour",
food:"Minerva Coffee Shop",
hotel:"Hotel Imperial"
},

{
name:"Salar Jung Museum",
bestTime:"10 AM - 1 PM",
season:"All Seasons",
entryFee:"₹50",
duration:"3 Hours",
food:"Cafe Niloufer",
hotel:"Hotel Central Park"
},

{
name:"Chowmahalla Palace",
bestTime:"10 AM - 4 PM",
season:"October - February",
entryFee:"₹80",
duration:"2 Hours",
food:"Pista House",
hotel:"Hotel Nayaab"
},

{
name:"Nehru Zoological Park",
bestTime:"8 AM - 12 PM",
season:"Winter",
entryFee:"₹60",
duration:"4 Hours",
food:"Zoo Cafeteria",
hotel:"Hotel Haridwar"
}

];
const hotels = {

budget:[
"Hotel Annapurna",
"Hotel Vaishnavi",
"Hotel Haridwar",
"Hotel Nayaab"
],

standard:[
"Minerva Grand",
"Hotel Imperial",
"Hotel Central Park",
"The Golkonda"
],

premium:[
"Taj Krishna",
"ITC Kakatiya",
"Hyatt Hyderabad",
"Marriott Hyderabad"
]

};
const foods = [

"Hyderabadi Biryani",

"Haleem",

"Double Ka Meetha",

"Qubani Ka Meetha",

"Irani Chai",

"Osmania Biscuit",

"Pathar Ka Gosht",

"Chicken 65",

"Kebabs",

"Mutton Biryani"

];
const itinerary2 = [

{
day:"Day 1",

morning:"Charminar",

breakfast:"Irani Chai & Osmania Biscuit",

afternoon:"Chowmahalla Palace",

lunch:"Paradise Biryani",

evening:"Hussain Sagar",

dinner:"Shah Ghouse",

stay:"Hotel"
},

{
day:"Day 2",

morning:"Golconda Fort",

breakfast:"Cafe Niloufer",

afternoon:"Shopping At Laad Bazaar",

lunch:"Bawarchi",

evening:"Departure"
}

];
const itinerary3 = [

{
day:"Day 1",

morning:"Charminar",

breakfast:"Irani Chai",

afternoon:"Chowmahalla Palace",

lunch:"Paradise",

evening:"Hussain Sagar",

dinner:"Shah Ghouse"
},

{
day:"Day 2",

morning:"Ramoji Film City",

breakfast:"Hotel Breakfast",

afternoon:"Film City Tour",

lunch:"Food Court",

evening:"Shows & Activities",

dinner:"Restaurant"
},

{
day:"Day 3",

morning:"Golconda Fort",

breakfast:"Cafe Niloufer",

afternoon:"Salar Jung Museum",

lunch:"Bawarchi",

evening:"Shopping & Departure"
}

];
const itinerary4 = [

{
day:"Day 1",

morning:"Charminar",

breakfast:"Irani Chai",

afternoon:"Chowmahalla Palace",

lunch:"Paradise",

evening:"Hussain Sagar"
},

{
day:"Day 2",

morning:"Ramoji Film City",

breakfast:"Hotel Breakfast",

afternoon:"Tour",

lunch:"Food Court",

evening:"Shows"
},

{
day:"Day 3",

morning:"Salar Jung Museum",

breakfast:"Cafe Niloufer",

afternoon:"Birla Mandir",

lunch:"Bawarchi",

evening:"Lumbini Park"
},

{
day:"Day 4",

morning:"Golconda Fort",

breakfast:"Local Cafe",

afternoon:"Shopping",

lunch:"Restaurant",

evening:"Departure"
}

];
function getBudgetType(amount){

if(amount <= 5000){
return "budget";
}

if(amount <= 10000){
return "standard";
}

return "premium";

}
const generateBtn =
document.getElementById("generateBtn");

const results =
document.getElementById("results");
function getRandomHotel(type){

const hotelList = hotels[type];

const randomIndex =
Math.floor(Math.random() * hotelList.length);

return hotelList[randomIndex];

}
function getRandomFoods(){

let selectedFoods = [];

for(let i=0;i<3;i++){

const randomFood =
foods[
Math.floor(Math.random()*foods.length)
];

selectedFoods.push(randomFood);

}

return selectedFoods;

}
function getPlaceInfo(placeName){

return places.find(
place => place.name === placeName
);

}
function generateItinerary(duration){

if(duration === "2"){
return itinerary2;
}

if(duration === "3"){
return itinerary3;
}

if(duration === "4"){
return itinerary4;
}

return [];

}
generateBtn.addEventListener("click",()=>{

const duration =
document.getElementById("duration").value;

const budget =
parseInt(
document.getElementById("budgetSlider").value
);

if(duration === ""){

alert(
"Please select trip duration."
);

return;

}

const budgetType =
getBudgetType(budget);

const hotel =
getRandomHotel(budgetType);

const recommendedFoods =
getRandomFoods();

const tripPlan =
generateItinerary(duration);

displayResults(
tripPlan,
hotel,
recommendedFoods,
budgetType,
budget
);

});
function displayResults(
tripPlan,
hotel,
recommendedFoods,
budgetType,
budget
){

results.innerHTML = "";

results.innerHTML += `

<div class="summary-card">

<h2>
Trip Summary
</h2>

<p>
Budget:
₹${budget}
</p>

<p>
Category:
${budgetType.toUpperCase()}
</p>

<p>
Recommended Hotel:
${hotel}
</p>

<p>
Must Try Foods:
${recommendedFoods.join(", ")}
</p>

</div>

`;

tripPlan.forEach(day=>{

let placeInfo =
getPlaceInfo(day.morning);

results.innerHTML += `

<div class="itinerary-card">

<h2>
${day.day}
</h2>

<p>
🌅 Morning:
${day.morning}
</p>

<p>
🍳 Breakfast:
${day.breakfast}
</p>

<p>
🏛 Afternoon:
${day.afternoon}
</p>

<p>
🍽 Lunch:
${day.lunch}
</p>

<p>
🌇 Evening:
${day.evening}
</p>

${
day.dinner
?
`<p>🍴 Dinner: ${day.dinner}</p>`
:
""
}

${
placeInfo
?
`

<hr>

<h4>
Place Details
</h4>

<p>
Best Time:
${placeInfo.bestTime}
</p>

<p>
Season:
${placeInfo.season}
</p>

<p>
Entry Fee:
${placeInfo.entryFee}
</p>

<p>
Duration:
${placeInfo.duration}
</p>

`
:
""
}

</div>

`;

});

}
