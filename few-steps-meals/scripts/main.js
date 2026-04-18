// =========================
//  SIMPLE RECIPES (HOMEPAGE)
// =========================

const recipes = [
  
  {
    id: "honey-garlic-chicken",
    name: "Honey Garlic Chicken",
    description: "Sweet, sticky, garlicky chicken made in one pan — a global favorite.",
    ingredients: ["chicken", "honey", "soy sauce", "garlic", "butter"],
    time: "20 min",
    image: "images/chicken1.webp",
    popularity: 5,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: true,
    isFiveToTen: false,
    isSpecial: false,
    isQuick: true
  },

  
  {
    id: "tuscan-chicken",
    name: "Creamy Tuscan Chicken",
    description: "Rich, creamy, restaurant‑style chicken with spinach and sun‑dried tomatoes.",
    ingredients: ["chicken", "cream", "spinach", "sun‑dried tomatoes", "garlic"],
    time: "25 min",
    image: "images/creamy-tuscan-chicken3.webp",
    popularity: 4,
    difficulty: "medium",
    isBudget: false,
    isFiveIngredient: false,
    isFiveToTen: true,
    isSpecial: true,
    isQuick: false
  },

  
  {
    id: "garlic-butter-shrimp",
    name: "Garlic Butter Shrimp",
    description: "Juicy shrimp cooked in garlic butter — ready in minutes.",
    ingredients: ["shrimp", "butter", "garlic", "lemon", "parsley"],
    time: "10 min",
    image: "images/garlic-butter-shrimp.webp",
    popularity: 5,
    difficulty: "easy",
    isBudget: false,
    isFiveIngredient: true,
    isFiveToTen: false,
    isSpecial: false,
    isQuick: true
  },

 
  {
    id: "veggie-stir-fry-bowl",
    name: "Veggie Stir Fry Bowl",
    description: "Colorful vegetables tossed in a light soy‑garlic sauce over warm rice.",
    ingredients: ["rice", "broccoli", "carrots", "soy sauce", "garlic"],
    time: "15 min",
    image: "images/veggie-stir-fry-bowl-small.webp",
    popularity: 4,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: false,
    isFiveToTen: true,
    isSpecial: false,
    isQuick: true
  },

  
  {
    id: "cheesy-chicken-quesadilla",
    name: "Cheesy Chicken Quesadilla",
    description: "Crispy tortilla filled with melty cheese and seasoned chicken.",
    ingredients: ["tortilla", "chicken", "cheese", "seasoning"],
    time: "10 min",
    image: "images/cheesy-chicken-quesadilla.webp",
    popularity: 3,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: true,
    isFiveToTen: false,
    isSpecial: false,
    isQuick: true
  },

  
  {
    id: "simple-veggie-pasta",
    name: "Simple Veggie Pasta",
    description: "Light pasta tossed with sautéed vegetables and herbs.",
    ingredients: ["pasta", "zucchini", "tomato", "olive oil", "herbs"],
    time: "20 min",
    image: "images/simple-veggie-pasta-small.webp",
    popularity: 4,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: false,
    isFiveToTen: true,
    isSpecial: false,
    isQuick: false
  }
];

// =========================
// HELPERS
// =========================

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createRecipeCardHTML(recipe) {
  return `
    <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
    <h4>${recipe.name}</h4>
    <p>${recipe.description}</p>
    <p><strong>Time:</strong> ${recipe.time}</p>
  `;
}

// =========================
// RECIPE OF THE DAY
// =========================

function renderRecipeOfTheDay() {
  const container = document.querySelector("#recipe-of-day-content");
  if (!container) return;

  const recipe = getRandomItem(recipes);
  container.innerHTML = createRecipeCardHTML(recipe);
}

// =========================
// FEATURED ROW 1
// =========================

function renderFeaturedRecipes() {
  const mostPopularContainer = document.querySelector("#most-popular-content");
  const budgetWeekContainer = document.querySelector("#budget-week-content");
  const quickFiveContainer = document.querySelector("#quick-five-content");

  if (!mostPopularContainer || !budgetWeekContainer || !quickFiveContainer) return;

  const mostPopular = [...recipes].sort((a, b) => b.popularity - a.popularity)[0];
  mostPopularContainer.innerHTML = createRecipeCardHTML(mostPopular);

  const budgetRecipes = recipes.filter(r => r.isBudget);
  budgetWeekContainer.innerHTML = createRecipeCardHTML(getRandomItem(budgetRecipes));

  const quickRecipes = recipes.filter(r => r.isQuick);
  quickFiveContainer.innerHTML = createRecipeCardHTML(getRandomItem(quickRecipes));
}

// =========================
// SPECIALTY ROW 2
// =========================

function renderSpecialtyRecipes() {
  const fiveIngredientContainer = document.querySelector("#five-ingredient-content");
  const fiveTenContainer = document.querySelector("#five-ten-content");
  const specialContainer = document.querySelector("#special-recipes-content");

  if (!fiveIngredientContainer || !fiveTenContainer || !specialContainer) return;

  const fiveIngredientRecipes = recipes.filter(r => r.isFiveIngredient);
  fiveIngredientContainer.innerHTML = createRecipeCardHTML(getRandomItem(fiveIngredientRecipes));

  const fiveTenRecipes = recipes.filter(r => r.isFiveToTen);
  fiveTenContainer.innerHTML = createRecipeCardHTML(getRandomItem(fiveTenRecipes));

  const specialRecipes = recipes.filter(r => r.isSpecial);
  specialContainer.innerHTML = createRecipeCardHTML(getRandomItem(specialRecipes));
}

// =========================
// INITIALIZE
// =========================

document.addEventListener("DOMContentLoaded", () => {
  renderRecipeOfTheDay();
  renderFeaturedRecipes();
  renderSpecialtyRecipes();
});
