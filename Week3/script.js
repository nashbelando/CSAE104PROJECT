var count = 0;
var btn = document.getElementById("btn");

btn.addEventListener("click", function (){
	count++;
	btn.textContent = "Click " + count + (count === 1 ? " time" : " times");
	console.log("count is now", count);
});