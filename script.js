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
