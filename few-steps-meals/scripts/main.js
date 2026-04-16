// =========================
//  SIMPLE RECIPES
// =========================

const recipes = [
  {
    id: "baked-feta-pasta",
    name: "Baked Feta Pasta",
    description: "The viral TikTok pasta — creamy, tangy, and unbelievably simple.",
    ingredients: ["feta", "cherry tomatoes", "pasta", "olive oil", "garlic"],
    time: "30 min",
    image: "images/baked-feta-pasta.jpg",
    popularity: 5,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: true,
    isFiveToTen: false,
    isSpecial: false,
    isQuick: true
  },
  {
    id: "honey-garlic-chicken",
    name: "Honey Garlic Chicken",
    description: "Sweet, sticky, garlicky chicken made in one pan — a global favorite.",
    ingredients: ["chicken", "honey", "soy sauce", "garlic", "butter"],
    time: "20 min",
    image: "images/honey-garlic-chicken.jpg",
    popularity: 5,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: true,
    isFiveToTen: false,
    isSpecial: false,
    isQuick: true
  },
  {
    id: "smashburger-tacos",
    name: "Smashburger Tacos",
    description: "The TikTok sensation — crispy beef, melty cheese, and soft tortillas.",
    ingredients: ["ground beef", "tortillas", "cheese", "onion", "pickles"],
    time: "15 min",
    image: "images/smashburger-tacos.jpg",
    popularity: 5,
    difficulty: "easy",
    isBudget: false,
    isFiveIngredient: false,
    isFiveToTen: true,
    isSpecial: true,
    isQuick: true
  },
  {
    id: "tuscan-chicken",
    name: "Creamy Tuscan Chicken",
    description: "Rich, creamy, restaurant‑style chicken with spinach and sun‑dried tomatoes.",
    ingredients: ["chicken", "cream", "spinach", "sun‑dried tomatoes", "garlic"],
    time: "25 min",
    image: "images/tuscan-chicken.jpg",
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
    image: "images/garlic-butter-shrimp.jpg",
    popularity: 5,
    difficulty: "easy",
    isBudget: false,
    isFiveIngredient: true,
    isFiveToTen: false,
    isSpecial: false,
    isQuick: true
  },
  {
    id: "lemon-chicken-rice",
    name: "One‑Pan Lemon Chicken & Rice",
    description: "Bright, comforting, and cooked together in one pan.",
    ingredients: ["chicken thighs", "rice", "lemon", "garlic", "broth"],
    time: "30 min",
    image: "images/lemon-chicken-rice.jpg",
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
