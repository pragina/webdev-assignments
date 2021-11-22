const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

let app = document.querySelector("#results");
const loading = document.querySelector("#loading");

const addItemToDOM = (drink) => {
  console.log(drink);
  let element = document.createElement("div");
  element.setAttribute("class", "figure");

  let name = document.createElement("label");
  let image = document.createElement("img");

  app.style.gridTemplateColumns = "auto auto auto";
  app.style.display = "grid";
  app.style.textAlign = "center";
  app.style.padding = "0px 50px";
  app.style.gridRowGap = "10px";
  app.style.gap = "10px";

  image.src = drink.strDrinkThumb;
  image.setAttribute("alt", `${drink.strDrink}-${drink.idDrink}`);
  console.log(drink.strDrink);
  name.textContent = `${drink.strDrink}`;

  element.appendChild(image);
  element.appendChild(name);

  element.style.width = "100%";
  element.style.height = "100%";

  name.style.marginTop = "10px";
  name.style.marginBottom = "50px";
  name.style.fontWeight = "bold";
  name.style.width = "70%";
  name.style.display = "inline-block";

  image.setAttribute("width", "100%");
  image.setAttribute("height", "70%");

  app.append(element);
};

const fetchData = async (url) => {
  // Add your code here

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let newdata = data.drinks;

      newdata.forEach((drink) => {
        console.log(drink);
        //console.log(drink.strDrink, drink.strDrinkThumb);
        addItemToDOM(drink);
      });
    })
    .catch((error) => {
      console.log(error);
      let p = document.createElement("p");
      p.textContent = `An error occured. Please try again.`;
      app.appendChild(p);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
