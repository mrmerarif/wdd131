
const mealIdeas = [
  
  "5‑Minute Cheesy Quesadilla with Salsa",
  "Crispy Chicken Wrap with Crunchy Lettuce",
  "Lazy Night Garlic Butter Noodles",
  "Sheet Pan Nacho Party for Two",
  "One‑Bowl Breakfast Burrito Scramble",
  "Airy Egg Toast with Melty Cheese",

  
  "Quick Lemon Chicken Rice Bowl",
  "Simple Veggie Pasta with Olive Oil",
  "Easy Garlic Shrimp over Steamed Rice",
  "Tomato Basil Toast with Mozzarella",
  "Roasted Veggie and Hummus Pita",
  "Turkey and Avocado Sandwich with Fruit",

  
  "Kid‑Approved Chicken Rollups with Carrots",
  "Family Taco Night Bowls with Rice and Beans",
  "Warm Veggie Rice Skillet with Cheese",
  "Tomato Soup with Grilled Cheese Dippers",
  "Mini Pita Pizzas for the Whole Family",
  "Breakfast for Dinner: Eggs, Toast, and Fruit",

  
  "Lemon Herb Rice Bowl",
  "Garlic Chickpea Salad Wrap",
  "Spinach and Feta Egg Toast",
  "Cucumber, Tomato, and Feta Snack Plate",
  "Avocado and Egg Rice Bowl",
  "Yogurt Parfait with Granola and Berries"
];



const generateBtn = document.querySelector("#generate-idea-btn");
const saveBtn = document.querySelector("#save-idea-btn");
const outputEl = document.querySelector("#meal-idea-output");
const savedListEl = document.querySelector("#saved-ideas-list");
const savedCountEl = document.querySelector("#saved-ideas-count");

// =========================
// STATE + LOCALSTORAGE
// =========================

let currentIdea = "";
let savedIdeas = [];

const STORAGE_KEY = "fsm_saved_meal_ideas";

// =========================
// HELPERS
// =========================

function getRandomIdea() {
  const index = Math.floor(Math.random() * mealIdeas.length);
  return mealIdeas[index];
}

function updateSavedCount() {
  savedCountEl.textContent = savedIdeas.length.toString();
}

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIdeas));
}

function loadFromLocalStorage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      savedIdeas = JSON.parse(stored);
    } catch {
      savedIdeas = [];
    }
  }
}

// =========================
// RENDER SAVED IDEAS
// =========================

function renderSavedIdeas() {
  savedListEl.innerHTML = "";

  if (savedIdeas.length === 0) {
    savedListEl.innerHTML = `<li style="opacity:0.8;">No saved ideas yet. Generate one and save your favorites.</li>`;
    return;
  }

  savedIdeas.forEach((idea, index) => {
    const li = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = idea;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-idea-btn");

    deleteBtn.addEventListener("click", () => {
      savedIdeas.splice(index, 1);
      saveToLocalStorage();
      renderSavedIdeas();
      updateSavedCount();
    });

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    savedListEl.appendChild(li);
  });
}

// =========================
// EVENT HANDLERS
// =========================

function handleGenerateIdea() {
  currentIdea = getRandomIdea();
  outputEl.textContent = currentIdea;
  outputEl.classList.add("show");
  saveBtn.disabled = false;
}


function handleSaveIdea() {
  if (!currentIdea) return;

  if (!savedIdeas.includes(currentIdea)) {
    savedIdeas.push(currentIdea);
    saveToLocalStorage();
    renderSavedIdeas();
    updateSavedCount();
  }

  saveBtn.disabled = true;
}

// =========================
// INITIALIZE
// =========================

function initMealIdeas() {
  loadFromLocalStorage();
  renderSavedIdeas();
  updateSavedCount();

  generateBtn.addEventListener("click", handleGenerateIdea);
  saveBtn.addEventListener("click", handleSaveIdea);
}

document.addEventListener("DOMContentLoaded", initMealIdeas);


function handleSaveIdea() {
  if (!currentIdea) return;

  if (!savedIdeas.includes(currentIdea)) {
    savedIdeas.push(currentIdea);
    saveToLocalStorage();
    renderSavedIdeas();
    updateSavedCount();
  }

  saveBtn.disabled = true;

  
  outputEl.classList.add("show");
}
