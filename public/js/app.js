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
    let li = document.createElement("li");
    recsList.appendChild(li);
    li.appendChild(createTag("h2", rec.name));
    li.appendChild(createTag("p", rec.location));
    li.appendChild(createTag("p", rec.review));
  });
};

fetchData(displayData);

// window.addEventListener("load", displayRecommendations);
/// call request functions

// displ// dis
