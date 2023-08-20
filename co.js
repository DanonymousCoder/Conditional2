let select = document.querySelector("Select");
let para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const option = select.value;
  
  if (choice === "sunny") {
    para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  }
  
}