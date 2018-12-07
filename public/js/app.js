var recommendations = document.getElementById("recommendations");
var recsList = document.getElementById("recsList");

// const displayRecommendations = () => {
//   console.log("hello");
// fetchData(function() {
//   console.log("callback in fetchdata");
// });
// };

const createTag = (tag, value) => {
  let item = document.createElement(tag);
  item.textContent = value;
  return item;
};

const displayData = display => {
  console.log("display data is running from inside fetchdata");
  console.log(display);
  display.forEach(function(rec) {
<<<<<<< HEAD
    let item = document.createElement("p");
    item.textContent = rec.name;
    recsList.appendChild(item);
=======
    let li = document.createElement("li");
    recsList.appendChild(li);
    li.appendChild(createTag("h2", rec.name));
    li.appendChild(createTag("p", rec.location));
>>>>>>> 32cd752ed5b08d28d03980d4f5f0bab66a832558
  });
};

fetchData(displayData);

// window.addEventListener("load", displayRecommendations);
/// call request functions

// displ// dis
