var recommendations = document.getElementById("recommendations");
var recsList = document.getElementById("recsList");

// const displayRecommendations = () => {
//   console.log("hello");
// fetchData(function() {
//   console.log("callback in fetchdata");
// });
// };

const displayData = display => {
  console.log("display data is running from inside fetchdata");
  display.forEach(function(rec) {
    let item = document.createElement("p");
    item.textContent = rec.name;
    recsList.appendChild(item);
  });
};

fetchData(displayData);

// window.addEventListener("load", displayRecommendations);
/// call request functions

// displ// dis