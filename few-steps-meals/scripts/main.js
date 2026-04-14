// =========================
// DATA: SIMPLE, FUN RECIPES
// =========================

const recipes = [
  {
    id: "sheet-pan-chicken",
    name: "Sheet Pan Chicken & Veggies",
    description: "One pan, easy cleanup, and a full dinner in under 30 minutes.",
    ingredients: ["chicken thighs", "baby potatoes", "carrots", "olive oil", "seasoning blend"],
    time: "30 min",
    tags: ["popular", "budget", "5-ingredient"],
    image: "images/sheet-pan-chicken.jpg",
    popularity: 5,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: true,
    isFiveToTen: false,
    isSpecial: false,
    isQuick: true
  },
  {
    id: "creamy-tomato-pasta",
    name: "Creamy Tomato One-Pot Pasta",
    description: "Comforting, creamy, and made in a single pot with pantry staples.",
    ingredients: ["pasta", "tomato sauce", "cream or milk", "garlic", "parmesan", "olive oil"],
    time: "25 min",
    tags: ["popular", "5-10-ingredient"],
    image: "images/creamy-tomato-pasta.jpg",
    popularity: 4,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: false,
    isFiveToTen: true,
    isSpecial: false,
    isQuick: true
  },
  {
    id: "veggie-fried-rice",
    name: "5-Minute Veggie Fried Rice",
    description: "Use leftover rice and frozen veggies for a fast, tasty meal.",
    ingredients: ["cooked rice", "frozen veggies", "egg", "soy sauce", "green onion"],
    time: "10 min",
    tags: ["quick", "5-ingredient"],
    image: "images/veggie-fried-rice.jpg",
    popularity: 4,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: true,
    isFiveToTen: false,
    isSpecial: false,
    isQuick: true
  },
  {
    id: "slow-cooker-tacos",
    name: "Slow Cooker Taco Night",
    description: "Let the slow cooker do the work, then build your own tacos.",
    ingredients: ["beef or chicken", "taco seasoning", "onion", "tortillas", "toppings"],
    time: "4–6 hrs (hands-off)",
    tags: ["family", "5-10-ingredient"],
    image: "images/slow-cooker-tacos.jpg",
    popularity: 5,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: false,
    isFiveToTen: true,
    isSpecial: true,
    isQuick: false
  },
  {
    id: "weekend-lasagna",
    name: "Weekend Baked Lasagna",
    description: "A cozy, layered lasagna for when you have a little extra time.",
    ingredients: ["lasagna noodles", "tomato sauce", "ground meat", "ricotta", "mozzarella", "onion", "garlic", "spices"],
    time: "1 hr 15 min",
    tags: ["special", "comfort"],
    image: "images/weekend-lasagna.jpg",
    popularity: 5,
    difficulty: "medium",
    isBudget: false,
    isFiveIngredient: false,
    isFiveToTen: false,
    isSpecial: true,
    isQuick: false
  },
  {
    id: "sheet-pan-fajitas",
    name: "Sheet Pan Fajitas",
    description: "Colorful peppers, onions, and chicken baked together for easy fajitas.",
    ingredients: ["chicken", "bell peppers", "onion", "fajita seasoning", "tortillas"],
    time: "25 min",
    tags: ["popular", "5-ingredient"],
    image: "images/sheet-pan-fajitas.jpg",
    popularity: 4,
    difficulty: "easy",
    isBudget: true,
    isFiveIngredient: true,
    isFiveToTen: false,
    isSpecial: false,
    isQuick: true
  }
];

// =========================
// MEAL IDEAS
// =========================

const mealIdeas = [
  "Toast + scrambled eggs + sliced tomato",
  "Tuna salad on crackers with cucumber slices",
  "Quesadilla with cheese and leftover chicken",
  "Yogurt bowl with fruit, oats, and honey",
  "Rice bowl with beans, salsa, and cheese",
  "Pita pizza with sauce, cheese, and veggies",
  "Peanut butter banana toast with cinnamon"
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
  container.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
    <h4>${recipe.name}</h4>
    <p>${recipe.description}</p>
    <p><strong>Time:</strong> ${recipe.time}</p>
  `;
}

// =========================
// FEATURED ROW 1
// =========================

function renderFeaturedRecipes() {
  const mostPopularContainer = document.querySelector("#most-popular-content");
  const budgetWeekContainer = document.querySelector("#budget-week-content");
  const quickFiveContainer = document.querySelector("#quick-five-content");

  if (!mostPopularContainer || !budgetWeekContainer || !quickFiveContainer) return;

  // Most popular = highest popularity
  const mostPopular = [...recipes].sort((a, b) => b.popularity - a.popularity)[0];
  mostPopularContainer.innerHTML = createRecipeCardHTML(mostPopular);

  // Budget meal of the week = any isBudget recipe (random)
  const budgetRecipes = recipes.filter(r => r.isBudget);
  const budgetPick = getRandomItem(budgetRecipes);
  budgetWeekContainer.innerHTML = createRecipeCardHTML(budgetPick);

  // Quick 5-minute idea = isQuick + short description
  const quickRecipes = recipes.filter(r => r.isQuick);
  const quickPick = getRandomItem(quickRecipes);
  quickFiveContainer.innerHTML = createRecipeCardHTML(quickPick);
}

// =========================
// SPECIALTY ROW 2
// =========================

function renderSpecialtyRecipes() {
  const fiveIngredientContainer = document.querySelector("#five-ingredient-content");
  const fiveTenContainer = document.querySelector("#five-ten-content");
  const specialContainer = document.querySelector("#special-recipes-content");

  if (!fiveIngredientContainer || !fiveTenContainer || !specialContainer) return;

  // 5-ingredient magic (TikTok-style)
  const fiveIngredientRecipes = recipes.filter(r => r.isFiveIngredient);
  const fivePick = getRandomItem(fiveIngredientRecipes);
  fiveIngredientContainer.innerHTML = `
    <img src="${fivePick.image}" alt="${fivePick.name}" loading="lazy">
    <h4>${fivePick.name}</h4>
    <ul class="tiktok-steps">
      <li>1. Toss all ingredients with seasoning.</li>
      <li>2. Spread on a pan in a single layer.</li>
      <li>3. Bake until golden and cooked through.</li>
      <li>4. Serve straight from the pan and enjoy.</li>
    </ul>
    <button class="cta-btn secondary">Try This Recipe</button>
  `;

  // 5–10 ingredient favorites (classic card)
  const fiveTenRecipes = recipes.filter(r => r.isFiveToTen);
  const fiveTenPick = getRandomItem(fiveTenRecipes);
  fiveTenContainer.innerHTML = `
    <img src="${fiveTenPick.image}" alt="${fiveTenPick.name}" loading="lazy">
    <h4>${fiveTenPick.name}</h4>
    <p>${fiveTenPick.description}</p>
    <p><strong>Ingredients:</strong> ${fiveTenPick.ingredients.length} simple items.</p>
    <button class="cta-btn secondary">View Recipe</button>
  `;

  // Special recipes (weekend special)
  const specialRecipes = recipes.filter(r => r.isSpecial);
  const specialPick = getRandomItem(specialRecipes);
  specialContainer.innerHTML = `
    <img src="${specialPick.image}" alt="${specialPick.name}" loading="lazy">
    <h4>${specialPick.name}</h4>
    <p>${specialPick.description}</p>
    <p><strong>Time:</strong> ${specialPick.time}</p>
    <button class="cta-btn secondary">Cook This</button>
  `;
}

// =========================
// MEAL IDEAS GENERATOR + localStorage
// =========================

const MEAL_IDEAS_KEY = "fewStepsMealsIdeas";

function getSavedIdeas() {
  const stored = localStorage.getItem(MEAL_IDEAS_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveIdea(idea) {
  const ideas = getSavedIdeas();
  ideas.push(idea);
  localStorage.setItem(MEAL_IDEAS_KEY, JSON.stringify(ideas));
  updateSavedIdeasCount();
}

function updateSavedIdeasCount() {
  const countSpan = document.querySelector("#saved-ideas-count");
  if (!countSpan) return;
  const ideas = getSavedIdeas();
  countSpan.textContent = ideas.length;
}

function setupMealIdeasGenerator() {
  const generateBtn = document.querySelector("#generate-idea-btn");
  const saveBtn = document.querySelector("#

    /* =========================
    RECIPE DATA (OBJECTS + ARRAYS)
 ========================= */
 
 const recipes = [
     {
         id: 1,
         name: "Creamy Garlic Pasta",
         category: "5-10",
         difficulty: "Easy",
         time: "20 min",
         ingredients: ["Pasta", "Garlic", "Cream", "Butter", "Parmesan"],
         image: "images/garlic-pasta.jpg",
         description: "A quick, creamy pasta dish with garlic and parmesan."
     },
     {
         id: 2,
         name: "Budget Bean Tacos",
         category: "budget",
         difficulty: "Easy",
         time: "15 min",
         ingredients: ["Tortillas", "Black beans", "Onion", "Lime", "Cilantro"],
         image: "images/bean-tacos.jpg",
         description: "A flavorful, budget-friendly taco recipe using pantry staples."
     },
     {
         id: 3,
         name: "5‑Ingredient Chicken Bake",
         category: "5-ingredients",
         difficulty: "Medium",
         time: "30 min",
         ingredients: ["Chicken", "Olive oil", "Garlic", "Salt", "Pepper"],
         image: "images/chicken-bake.jpg",
         description: "A simple chicken bake with only 5 ingredients."
     },
     {
         id: 4,
         name: "Quick Veggie Stir Fry",
         category: "quick",
         difficulty: "Easy",
         time: "12 min",
         ingredients: ["Mixed veggies", "Soy sauce", "Garlic", "Oil"],
         image: "images/veggie-stirfry.jpg",
         description: "A fast and healthy stir fry perfect for busy days."
     }
 ];
 
 /* =========================
    DOM ELEMENTS
 ========================= */
 
 const recipeGallery = document.querySelector("#recipe-gallery");
 const searchInput = document.querySelector("#recipe-search");
 const filterButtons = document.querySelectorAll(".filter-buttons .cta-btn");
 
 /* =========================
    RENDER RECIPE CARDS
 ========================= */
 
 function renderRecipes(list) {
     recipeGallery.innerHTML = ""; // Clear gallery
 
     if (list.length === 0) {
         recipeGallery.innerHTML = `<p>No recipes found.</p>`;
         return;
     }
 
     list.forEach(recipe => {
         const card = `
             <article class="card recipe-card">
                 <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
                 <h4>${recipe.name}</h4>
                 <p>${recipe.description}</p>
                 <p><strong>Time:</strong> ${recipe.time}</p>
                 <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
             </article>
         `;
         recipeGallery.insertAdjacentHTML("beforeend", card);
     });
 }
 
 /* =========================
    SEARCH FUNCTION
 ========================= */
 
 function searchRecipes() {
     const query = searchInput.value.toLowerCase();
 
     const filtered = recipes.filter(recipe =>
         recipe.name.toLowerCase().includes(query) ||
         recipe.ingredients.some(ing => ing.toLowerCase().includes(query))
     );
 
     renderRecipes(filtered);
 }
 
 /* =========================
    CATEGORY FILTER FUNCTION
 ========================= */
 
 function filterByCategory(category) {
     if (category === "all") {
         renderRecipes(recipes);
         return;
     }
 
     const filtered = recipes.filter(recipe => recipe.category === category);
     renderRecipes(filtered);
 }
 
 /* =========================
    EVENT LISTENERS
 ========================= */
 
 searchInput.addEventListener("input", searchRecipes);
 
 filterButtons.forEach(btn => {
     btn.addEventListener("click", () => {
         const filter = btn.dataset.filter;
         filterByCategory(filter);
     });
 });
 
 /* =========================
    INITIAL LOAD
 ========================= */
 
 renderRecipes(recipes);
 
  
 {
  id: 5,
  name: "One‑Pan Lemon Chicken & Rice",
  category: "5-10",
  difficulty: "Easy",
  time: "30 min",
  ingredients: ["Chicken thighs", "Rice", "Lemon", "Garlic", "Chicken broth"],
  image: "images/lemon-chicken-rice.jpg",
  description: "A bright, comforting one‑pan chicken and rice dish with fresh lemon and garlic."
},
{
  id: 6,
  name: "Cheesy Veggie Quesadillas",
  category: "budget",
  difficulty: "Easy",
  time: "10 min",
  ingredients: ["Tortillas", "Cheese", "Bell peppers", "Onion", "Oil"],
  image: "images/veggie-quesadilla.jpg",
  description: "Crispy quesadillas loaded with sautéed veggies and melted cheese — fast and budget‑friendly."
},
{
  id: 7,
  name: "5‑Ingredient Tomato Basil Pasta",
  category: "5-ingredients",
  difficulty: "Easy",
  time: "18 min",
  ingredients: ["Pasta", "Tomatoes", "Basil", "Olive oil", "Garlic"],
  image: "images/tomato-basil-pasta.jpg",
  description: "A fresh, simple pasta tossed with tomatoes, basil, and garlic — perfect for busy nights."
},
{
  id: 8,
  name: "Quick Egg Fried Rice",
  category: "quick",
  difficulty: "Easy",
  time: "12 min",
  ingredients: ["Rice", "Eggs", "Peas", "Soy sauce", "Green onions"],
  image: "images/egg-fried-rice.jpg",
  description: "A fast and flavorful fried rice made with pantry staples and fresh green onions."
},
{
  id: 9,
  name: "Creamy Potato Soup",
  category: "budget",
  difficulty: "Medium",
  time: "25 min",
  ingredients: ["Potatoes", "Onion", "Garlic", "Milk", "Butter", "Broth"],
  image: "images/potato-soup.jpg",
  description: "A warm, creamy potato soup that’s comforting, filling, and easy on the wallet."
},
{
  id: 10,
  name: "Chicken Caesar Wraps",
  category: "5-10",
  difficulty: "Easy",
  time: "15 min",
  ingredients: ["Chicken", "Tortillas", "Lettuce", "Caesar dressing", "Parmesan"],
  image: "images/chicken-caesar-wrap.jpg",
  description: "A fresh and crunchy wrap with chicken, crisp lettuce, and creamy Caesar dressing."
},
{
  id: 11,
  name: "Garlic Butter Shrimp",
  category: "quick",
  difficulty: "Easy",
  time: "10 min",
  ingredients: ["Shrimp", "Butter", "Garlic", "Lemon", "Parsley"],
  image: "images/garlic-butter-shrimp.jpg",
  description: "Juicy shrimp cooked in garlic butter — ready in minutes and perfect with rice or pasta."
},
{
  id: 12,
  name: "Veggie Omelette",
  category: "5-ingredients",
  difficulty: "Easy",
  time: "8 min",
  ingredients: ["Eggs", "Spinach", "Tomato", "Cheese", "Salt"],
  image: "images/veggie-omelette.jpg",
  description: "A fluffy omelette packed with fresh veggies and melted cheese — a quick breakfast or dinner."
}


/* =========================
   MEAL IDEAS DATA
========================= */

const mealIdeas = [
    "5‑Minute Garlic Butter Noodles",
    "Cheesy Bean Quesadilla",
    "Egg Fried Rice Bowl",
    "Chicken & Rice Burrito Bowl",
    "Veggie Omelette Wrap",
    "Tomato Basil Toast",
    "Quick Tuna Salad Wrap",
    "One‑Pan Lemon Chicken",
    "Creamy Potato Bowl",
    "Veggie Stir Fry with Rice",
    "Chicken Caesar Wrap",
    "Avocado Egg Toast",
    "Pasta with Olive Oil & Garlic",
    "Black Bean Nachos",
    "Simple Chicken Tacos",
    "Budget Chili Bowl",
    "Spinach & Cheese Scramble",
    "Rice + Beans + Salsa Bowl",
    "Peanut Butter Banana Toast",
    "Quick Shrimp Stir Fry"
];

/* =========================
   DOM ELEMENTS
========================= */

const generateIdeaBtn = document.querySelector("#generate-idea-btn");
const saveIdeaBtn = document.querySelector("#save-idea-btn");
const ideaOutput = document.querySelector("#meal-idea-output");
const savedIdeasCount = document.querySelector("#saved-ideas-count");
const savedIdeasList = document.querySelector("#saved-ideas-list");

/* =========================
   LOAD SAVED IDEAS
========================= */

let savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];

function updateSavedIdeasUI() {
    savedIdeasList.innerHTML = "";

    if (savedIdeas.length === 0) {
        savedIdeasList.innerHTML = "<p>No saved ideas yet.</p>";
    } else {
        savedIdeas.forEach((idea, index) => {
            const li = document.createElement("li");
            li.textContent = idea;

            // Optional delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "✕";
            deleteBtn.classList.add("delete-idea-btn");
            deleteBtn.addEventListener("click", () => {
                savedIdeas.splice(index, 1);
                localStorage.setItem("savedIdeas", JSON.stringify(savedIdeas));
                updateSavedIdeasUI();
            });

            li.appendChild(deleteBtn);
            savedIdeasList.appendChild(li);
        });
    }

    savedIdeasCount.textContent = savedIdeas.length;
}

updateSavedIdeasUI();

/* =========================
   GENERATE RANDOM MEAL IDEA
========================= */

function generateMealIdea() {
    const randomIndex = Math.floor(Math.random() * mealIdeas.length);
    const idea = mealIdeas[randomIndex];

    ideaOutput.innerHTML = `
        <p class="generated-idea">