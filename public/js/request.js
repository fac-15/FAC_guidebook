let xhr = new XMLHttpRequest();

function fetchData(callback) {
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let display = JSON.parse(xhr.responseText);
      callback(display);
      console.log("the xhr is making a request");
    }
  };
  xhr.open("GET", "/restaurants", true);
  xhr.send();
}

// function fetchUserData(callback) {
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       let display = JSON.parse(xhr.responseText);
//       callback(display);
//       console.log("the xhr is making a request");
//     }
//   };
//   xhr.open("GET", "/users", true);
//   xhr.send();
// }
