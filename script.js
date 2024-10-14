const businessBox = document.querySelector(".business-area");
let businesses;

// Inspect this document, and check the console to see if the data is there
let source =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";
fetch(source)
  .then((response) => response.json())
  .then((jsObject) => {
    businesses = jsObject.business;
    for (let index = 0; index < businesses.length; index++) {
      let smallDiv = document.createElement("div");
      smallDiv.classList.add("text-1");
      let h4 = document.createElement("h4");
      h4.innerText = businesses[index].description;
      let p = document.createElement("p");
      p.innerText = businesses[index].address;
      smallDiv.appendChild(h4);
      smallDiv.appendChild(p);
      let Div = document.createElement("div");
      Div.classList.add("business-card");
      let h2 = document.createElement("h2");
      h2.innerText = businesses[index].name;
      let img = document.createElement("img");
      img.src = businesses[index].imageurl;
      Div.appendChild(h2);
      Div.appendChild(img);
      Div.appendChild(smallDiv);
      console.log(businesses);
      const element = businesses[index];
      businessBox.appendChild(Div);
    }
  });
