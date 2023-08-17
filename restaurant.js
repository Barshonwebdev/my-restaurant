// meal load function

const searchMeal = () => {
  const searched = document.getElementById("search");
  const searchResult = searched.value;
  
  if(searched.value==""){
    return;
  }
  else {
  searched.value = "";
  loadSearchedMeal(searchResult); }
};

const loadMeal = async () => {
  try {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const res = await fetch(url);
    const data = await res.json();
    displayMeal(data.categories);
  } catch (error) {
    console.log(error);
  }
};

const loadSearchedMeal = async (searchResult) => {
  try {
    const header = document.getElementById("header");
    header.innerText = `Our ${searchResult} Menu`;  
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResult}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.meals);
    displaySearchedMeal(data.meals);
  } catch (error) {
    console.log(error);
  }
};
const displayMeal = (meals) => {
  const container = document.getElementById("menu");
  container.innerText = "";
  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.classList.add("col");
    mealCard.innerHTML = `<div class="col">
            <div class="card">
              <img src="${meal.strCategoryThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> ${meal.strCategory}</h5>
                <p class="card-text">
                  ${meal.strCategoryDescription}
                </p>
              </div>
            </div>
          </div>`;
    container.appendChild(mealCard);
  });
};

const displaySearchedMeal = (meals) => {
  const container = document.getElementById("menu");
  container.innerText = "";
  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.classList.add("col");
    mealCard.innerHTML = `<div class="col">
            <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title"> ${meal.strMeal}</h3>
                <h6 class="card-title">Origin- ${meal.strArea}</h6>
                <h6 class="card-title">Category- ${meal.strCategory}</h6>
                <p class="card-text">
                  Ingredients- ${meal.strIngredient1},${meal.strIngredient2},${meal.strIngredient3},${meal.strIngredient4},${meal.strIngredient5},${meal.strIngredient6},${meal.strIngredient7},${meal.strIngredient8},${meal.strIngredient9},${meal.strIngredient10},${meal.strIngredient11},${meal.strIngredient12},${meal.strIngredient13}
                </p>
              </div>
            </div>
          </div>`;
    container.appendChild(mealCard);
  });
};

loadMeal();
