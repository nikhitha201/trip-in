/* ==========================================
   HYDERABAD ATTRACTIONS DATABASE
========================================== */

const places = [

{
name:"Charminar",
bestTime:"7:00 AM - 10:00 AM",
season:"October - February",
entryFee:"₹25",
duration:"2 Hours",
food:"Shadab Restaurant",
hotel:"Hotel Marjaan"
},

{
name:"Golconda Fort",
bestTime:"4:00 PM - 7:00 PM",
season:"October - February",
entryFee:"₹25",
duration:"3 Hours",
food:"Paradise Biryani",
hotel:"The Golkonda Hotel"
},

{
name:"Ramoji Film City",
bestTime:"9:00 AM - 6:00 PM",
season:"All Seasons",
entryFee:"₹1350",
duration:"Full Day",
food:"Ramoji Food Court",
hotel:"Sitara Luxury Hotel"
},

{
name:"Hussain Sagar",
bestTime:"5:00 PM - 8:00 PM",
season:"October - March",
entryFee:"Free",
duration:"2 Hours",
food:"Eat Street",
hotel:"Hotel Annapurna"
},

{
name:"Birla Mandir",
bestTime:"6:00 AM - 9:00 AM",
season:"All Seasons",
entryFee:"Free",
duration:"1 Hour",
food:"Minerva Coffee Shop",
hotel:"Hotel Imperial"
},

{
name:"Salar Jung Museum",
bestTime:"10:00 AM - 1:00 PM",
season:"All Seasons",
entryFee:"₹50",
duration:"3 Hours",
food:"Cafe Niloufer",
hotel:"Central Park Hotel"
},

{
name:"Chowmahalla Palace",
bestTime:"10:00 AM - 4:00 PM",
season:"October - February",
entryFee:"₹80",
duration:"2 Hours",
food:"Pista House",
hotel:"Hotel Nayaab"
},

{
name:"Laad Bazaar",
bestTime:"5:00 PM - 9:00 PM",
season:"All Seasons",
entryFee:"Free",
duration:"2 Hours",
food:"Shadab Restaurant",
hotel:"Hotel Marjaan"
}

];

/* ==========================================
   HOTEL DATABASE
========================================== */

const hotels = {

budget:[
"Hotel Annapurna",
"Hotel Vaishnavi",
"Hotel Haridwar",
"Hotel Nayaab"
],

standard:[
"Minerva Grand",
"The Golkonda Hotel",
"Central Park Hotel",
"Hotel Imperial"
],

premium:[
"Taj Krishna",
"ITC Kakatiya",
"Hyatt Hyderabad",
"Marriott Hyderabad"
]

};

/* ==========================================
   FOOD DATABASE
========================================== */

const foods = [

"Hyderabadi Biryani",
"Haleem",
"Irani Chai",
"Osmania Biscuit",
"Qubani Ka Meetha",
"Double Ka Meetha",
"Pathar Ka Gosht",
"Chicken 65",
"Kebabs"

];

/* ==========================================
   2 DAYS 1 NIGHT PLAN
========================================== */

const itinerary2 = [

{
day:"Day 1",

morning:"Charminar",

breakfast:"Irani Chai & Osmania Biscuit",

afternoon:"Chowmahalla Palace",

lunch:"Paradise Biryani",

evening:"Hussain Sagar",

dinner:"Shah Ghouse",

stay:"Recommended Hotel"
},

{
day:"Day 2",

morning:"Golconda Fort",

breakfast:"Cafe Niloufer",

afternoon:"Laad Bazaar Shopping",

lunch:"Bawarchi",

evening:"Departure"
}

];

/* ==========================================
   3 DAYS 2 NIGHTS PLAN
========================================== */

const itinerary3 = [

{
day:"Day 1",

morning:"Charminar",

breakfast:"Irani Chai",

afternoon:"Chowmahalla Palace",

lunch:"Paradise Biryani",

evening:"Hussain Sagar",

dinner:"Shah Ghouse"
},

{
day:"Day 2",

morning:"Ramoji Film City",

breakfast:"Hotel Breakfast",

afternoon:"Film City Tour",

lunch:"Ramoji Food Court",

evening:"Live Shows",

dinner:"Restaurant Dinner"
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

/* ==========================================
   4 DAYS 3 NIGHTS PLAN
========================================== */

const itinerary4 = [

{
day:"Day 1",

morning:"Charminar",

breakfast:"Irani Chai",

afternoon:"Chowmahalla Palace",

lunch:"Paradise Biryani",

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

dinner:"Restaurant Dinner"
},

{
day:"Day 3",

morning:"Birla Mandir",

breakfast:"Cafe Niloufer",

afternoon:"Salar Jung Museum",

lunch:"Bawarchi",

evening:"Local Market Visit",

dinner:"Pista House"
},

{
day:"Day 4",

morning:"Golconda Fort",

breakfast:"Local Cafe",

afternoon:"Laad Bazaar",

lunch:"Paradise Biryani",

evening:"Departure"
}

];

/* ==========================================
   BUDGET CATEGORY
========================================== */

function getBudgetType(amount){

if(amount <= 5000){
return "budget";
}

if(amount <= 10000){
return "standard";
}

return "premium";

}

/* ==========================================
   ITINERARY SELECTOR
========================================== */

function getItinerary(duration){

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

/* ==========================================
   PLACE FINDER
========================================== */

function getPlaceInfo(placeName){

return places.find(
place => place.name === placeName
);

}
