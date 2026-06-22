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
