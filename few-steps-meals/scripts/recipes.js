// =========================
// FULL RECIPE DATASET
// =========================

const recipes = [
  {
    id: 1,
    name: "Baked Feta Pasta",
    category: "5-ingredients",
    difficulty: "Easy",
    time: "30 min",
    ingredients: ["feta", "cherry tomatoes", "pasta", "olive oil", "garlic"],
    image: "images/baked-feta-pasta.webp",
    description: "The viral TikTok pasta — creamy, tangy, and unbelievably simple."
  },
  {
    id: 2,
    name: "Honey Garlic Chicken",
    category: "5-ingredients",
    difficulty: "Easy",
    time: "20 min",
    ingredients: ["chicken", "honey", "soy sauce", "garlic", "butter"],
    image: "images/honey-garlic-chicken1.webp",
    description: "Sweet, sticky, garlicky chicken made in one pan — a global favorite."
  },
  {
    id: 3,
    name: "Smashburger Tacos",
    category: "special",
    difficulty: "Easy",
    time: "15 min",
    ingredients: ["ground beef", "tortillas", "cheese", "onion", "pickles"],
    image: "https://via.placeholder.com/600x400?text=Smashburger+Tacos+%E2%80%93+Few+Steps+Meals",
    description: "The TikTok sensation — crispy beef, melty cheese, and soft tortillas."
  },
  {
    id: 4,
    name: "Ramen Lasagna",
    category: "special",
    difficulty: "Medium",
    time: "25 min",
    ingredients: ["ramen", "cheese", "tomato sauce", "garlic"],
    image: "https://via.placeholder.com/600x400?text=Ramen+Lasagna+%E2%80%93+Few+Steps+Meals",
    description: "A fun, viral twist on classic lasagna using ramen noodles."
  },
  {
    id: 5,
    name: "Tortilla Pizza",
    category: "quick",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["tortilla", "cheese", "sauce", "toppings"],
    image: "https://via.placeholder.com/600x400?text=Tortilla+Pizza+%E2%80%93+Few+Steps+Meals",
    description: "Crispy, fast, and customizable — a TikTok favorite."
  },
  {
    id: 6,
    name: "Grinder Salad Sandwich",
    category: "5-10",
    difficulty: "Easy",
    time: "15 min",
    ingredients: ["hoagie roll", "lettuce", "mayo", "meats", "cheese"],
    image: "https://via.placeholder.com/600x400?text=Grinder+Salad+Sandwich+%E2%80%93+Few+Steps+Meals",
    description: "The viral sandwich with the famous creamy grinder salad."
  },
  {
    id: 7,
    name: "Sushi Bake",
    category: "special",
    difficulty: "Medium",
    time: "30 min",
    ingredients: ["rice", "crab", "mayo", "sriracha", "seaweed"],
    image: "https://via.placeholder.com/600x400?text=Sushi+Bake+%E2%80%93+Few+Steps+Meals",
    description: "A warm, creamy, crowd‑pleasing sushi casserole."
  },
  {
    id: 8,
    name: "Chicken Caesar Wraps",
    category: "quick",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["chicken", "tortilla", "lettuce", "Caesar dressing"],
    image: "https://via.placeholder.com/600x400?text=Chicken+Caesar+Wraps+%E2%80%93+Few+Steps+Meals",
    description: "A fresh, crunchy wrap perfect for lunch or dinner."
  },

  // =========================
  // FAMILY FAVORITES
  // =========================

  {
    id: 9,
    name: "One‑Pan Lemon Chicken & Rice",
    category: "5-10",
    difficulty: "Easy",
    time: "30 min",
    ingredients: ["chicken thighs", "rice", "lemon", "garlic", "broth"],
    image: "https://via.placeholder.com/600x400?text=Lemon+Chicken+%26+Rice+%E2%80%93+Few+Steps+Meals",
    description: "Bright, comforting, and cooked together in one pan."
  },
  {
    id: 10,
    name: "Chicken Alfredo",
    category: "5-10",
    difficulty: "Medium",
    time: "25 min",
    ingredients: ["pasta", "cream", "butter", "parmesan", "chicken"],
    image: "https://via.placeholder.com/600x400?text=Chicken+Alfredo+%E2%80%93+Few+Steps+Meals",
    description: "Creamy, rich, and a family classic."
  },
  {
    id: 11,
    name: "Beef Stir Fry",
    category: "5-10",
    difficulty: "Easy",
    time: "20 min",
    ingredients: ["beef", "veggies", "soy sauce", "garlic"],
    image: "https://via.placeholder.com/600x400?text=Beef+Stir+Fry+%E2%80%93+Few+Steps+Meals",
    description: "A fast, flavorful stir fry perfect for busy nights."
  },
  {
    id: 12,
    name: "Chili",
    category: "budget",
    difficulty: "Easy",
    time: "35 min",
    ingredients: ["beans", "tomatoes", "beef", "spices"],
    image: "https://via.placeholder.com/600x400?text=Chili+%E2%80%93+Few+Steps+Meals",
    description: "A warm, hearty classic that feeds a crowd."
  },
  {
    id: 13,
    name: "Chicken Noodle Soup",
    category: "5-10",
    difficulty: "Easy",
    time: "30 min",
    ingredients: ["chicken", "noodles", "carrots", "celery"],
    image: "https://via.placeholder.com/600x400?text=Chicken+Noodle+Soup+%E2%80%93+Few+Steps+Meals",
    description: "Comforting, cozy, and perfect for cold days."
  },
  {
    id: 14,
    name: "Sloppy Joes",
    category: "budget",
    difficulty: "Easy",
    time: "20 min",
    ingredients: ["ground beef", "bun", "tomato sauce"],
    image: "https://via.placeholder.com/600x400?text=Sloppy+Joes+%E2%80%93+Few+Steps+Meals",
    description: "A messy, delicious family favorite."
  },
  {
    id: 15,
    name: "BBQ Chicken Quesadillas",
    category: "quick",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["tortillas", "chicken", "BBQ sauce", "cheese"],
    image: "images/bbq-chicken-quesadilla.webp",
    description: "Crispy, cheesy, and packed with BBQ flavor."
  },

  // =========================
  // HEALTHY
  // =========================

  {
    id: 16,
    name: "Greek Chicken Bowls",
    category: "healthy",
    difficulty: "Easy",
    time: "25 min",
    ingredients: ["chicken", "rice", "cucumber", "tomato", "tzatziki"],
    image: "https://via.placeholder.com/600x400?text=Greek+Chicken+Bowls+%E2%80%93+Few+Steps+Meals",
    description: "Fresh, bright, and protein‑packed."
  },
  {
    id: 17,
    name: "Avocado Toast",
    category: "healthy",
    difficulty: "Easy",
    time: "5 min",
    ingredients: ["bread", "avocado", "salt", "pepper"],
    image: "https://via.placeholder.com/600x400?text=Avocado+Toast+%E2%80%93+Few+Steps+Meals",
    description: "Simple, trendy, and delicious."
  },
  {
    id: 18,
    name: "Mediterranean Salad",
    category: "healthy",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["cucumber", "tomato", "feta", "olive oil"],
    image: "https://via.placeholder.com/600x400?text=Mediterranean+Salad+%E2%80%93+Few+Steps+Meals",
    description: "A refreshing, colorful salad with bold flavors."
  },
  {
    id: 19,
    name: "Chicken Burrito Bowls",
    category: "healthy",
    difficulty: "Easy",
    time: "20 min",
    ingredients: ["chicken", "rice", "beans", "salsa"],
    image: "https://via.placeholder.com/600x400?text=Chicken+Burrito+Bowls+%E2%80%93+Few+Steps+Meals",
    description: "A Chipotle‑style bowl you can make at home."
  },
  {
    id: 20,
    name: "Veggie Omelette",
    category: "healthy",
    difficulty: "Easy",
    time: "8 min",
    ingredients: ["eggs", "spinach", "tomato", "cheese"],
    image: "https://via.placeholder.com/600x400?text=Veggie+Omelette+%E2%80%93+Few+Steps+Meals",
    description: "A fluffy omelette packed with veggies."
  },
  {
    id: 21,
    name: "Tuna Salad Wrap",
    category: "healthy",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["tuna", "mayo", "tortilla", "lettuce"],
    image: "https://via.placeholder.com/600x400?text=Tuna+Salad+Wrap+%E2%80%93+Few+Steps+Meals",
    description: "A light, protein‑rich wrap."
  },

  // =========================
  // BUDGET
  // =========================

  {
    id: 22,
    name: "Bean Tacos",
    category: "budget",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["tortillas", "beans", "cheese"],
    image: "https://via.placeholder.com/600x400?text=Bean+Tacos+%E2%80%93+Few+Steps+Meals",
    description: "A fast, filling, budget‑friendly meal."
  },
  {
    id: 23,
    name: "Veggie Fried Rice",
    category: "budget",
    difficulty: "Easy",
    time: "12 min",
    ingredients: ["rice", "egg", "peas", "soy sauce"],
    image: "https://via.placeholder.com/600x400?text=Veggie+Fried+Rice+%E2%80%93+Few+Steps+Meals",
    description: "A fast and flavorful fried rice made with pantry staples."
  },
  {
    id: 24,
    name: "Potato Soup",
    category: "budget",
    difficulty: "Easy",
    time: "25 min",
    ingredients: ["potatoes", "onion", "milk", "broth"],
    image: "https://via.placeholder.com/600x400?text=Potato+Soup+%E2%80%93+Few+Steps+Meals",
    description: "A warm, creamy soup that’s easy on the wallet."
  },
  {
    id: 25,
    name: "Peanut Butter Banana Toast",
    category: "budget",
    difficulty: "Easy",
    time: "5 min",
    ingredients: ["bread", "peanut butter", "banana"],
    image: "https://via.placeholder.com/600x400?text=Peanut+Butter+Banana+Toast+%E2%80%93+Few+Steps+Meals",
    description: "A sweet, simple breakfast or snack."
  },
  {
    id: 26,
    name: "Rice and Beans Bowl",
    category: "budget",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["rice", "beans", "salsa"],
    image: "https://via.placeholder.com/600x400?text=Rice+and+Beans+Bowl+%E2%80%93+Few+Steps+Meals",
    description: "A nutritious, budget‑friendly staple."
  },
  {
    id: 27,
    name: "Pita Pizza",
    category: "budget",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["pita", "sauce", "cheese"],
    image: "https://via.placeholder.com/600x400?text=Pita+Pizza+%E2%80%93+Few+Steps+Meals",
    description: "A quick, customizable mini pizza."
  },

  // =========================
  // QUICK
  // =========================

  {
    id: 28,
    name: "Garlic Butter Shrimp",
    category: "quick",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["shrimp", "butter", "garlic", "lemon"],
    image: "https://via.placeholder.com/600x400?text=Garlic+Butter+Shrimp+%E2%80%93+Few+Steps+Meals",
    description: "Juicy shrimp cooked in garlic butter — ready in minutes."
  },
  {
    id: 29,
    name: "Egg Fried Rice",
    category: "quick",
    difficulty: "Easy",
    time: "10 min",
    ingredients: ["rice", "egg", "peas", "soy sauce"],
    image: "https://via.placeholder.com/600x400?text=Egg+Fried+Rice+%E2%80%93+Few+Steps+Meals",
    description: "A fast, satisfying meal using leftover rice."
  },
  {
    id: 30,
    name: "Lemon Butter Pasta",
    category: "quick",
    difficulty: "Easy",
    time: "12 min",
    ingredients: ["pasta", "butter", "lemon", "garlic"],
    image: "https://via.placeholder.com/600x400?text=Lemon+Butter+Pasta+%E2%80%93+Few+Steps+Meals",
    description: "A bright, buttery pasta ready in minutes."
  }
];

// =========================
// DOM ELEMENTS
// =========================

const recipeGallery = document.querySelector("#recipe-gallery");
const searchInput = document.querySelector("#recipe-search");
const filterButtons = document.querySelectorAll(".filter-buttons .cta-btn");

// =========================
// RENDER RECIPE CARDS
// =========================

function renderRecipes(list) {
  recipeGallery.innerHTML = "";

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

// =========================
// SEARCH FUNCTION
// =========================

function searchRecipes() {
  const query = searchInput.value.toLowerCase();

  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(query))
  );

  renderRecipes(filtered);
}

// =========================
// CATEGORY FILTER FUNCTION
// =========================

function filterByCategory(category) {
  if (category === "all") {
    renderRecipes(recipes);
    return;
  }

  const filtered = recipes.filter(recipe => recipe.category === category);
  renderRecipes(filtered);
}

// =========================
// EVENT LISTENERS
// =========================

searchInput.addEventListener("input", searchRecipes);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    filterByCategory(filter);
  });
});

// =========================
// INITIAL LOAD
// =========================

renderRecipes(recipes);
