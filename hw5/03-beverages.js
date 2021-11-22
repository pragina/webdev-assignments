$(document).ready(function () {
  // Add your code here

  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

  const addItemToDOM = (drink) => {
    console.log(drink.strDrink);
    console.log(drink.strDrinkThumb);

    $("#results").css({
      gridTemplateColumns: "auto auto auto",
      display: "grid",
      textAlign: "center",
      padding: "0px 50px",
      gridRowGap: "10px",
      gap: "10px",
    });

    $("#results").append(
      $("<div>")
        .addClass("figure")
        .css({
          width: "100%",
          height: "100%",
        })
        .append(
          $("<img>")
            .css({
              width: "100%",
              height: "70%",
            })
            .attr("src", drink.strDrinkThumb)
            .attr("alt", `${drink.strDrink}-${drink.idDrink}`)
        )
        .append(
          $("<label>")
            .css({
              marginTop: "10px",
              marginBottom: "50px",
              fontWeight: "bold",
              width: "70%",
              display: "inline-block",
            })
            .text(drink.strDrink)
        )
    );
  };

  const fetchData = (url) => {
    // Add your code here

    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        console.log(data);
        if (data == undefined || data == null || data == "") {
          $("#results").append($("<div>").text("Data not available"));
        } else {
          data.drinks.forEach((drink) => {
            addItemToDOM(drink);
          });
        }
      },

      error: (error) => {
        console.log(error);
        $("#results").append(
          $("<div>").text("An error occured. Please try again.")
        );
      },

      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
