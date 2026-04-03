// ------------------------------
// Footer year + Last modified
// ------------------------------
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// ------------------------------
// Hamburger menu toggle
// ------------------------------
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// ------------------------------
// Temple Data list
// ------------------------------
const temples = [
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/800x500/mexico-city-temple-exterior-1518357-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple5.jpg"
  },
  {
    templeName: "Puebla Mexico",
    location: "Puebla, Mexico",
    dedicated: "2024, May, 19",
    area: 36600,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/42fe168daf1b11eeafb4eeeeac1e9006b9466aaa/full/500%2C/0/default"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/800x500/bountiful-temple-lds-1059079-wallpaper.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/800x500/san-diego-mormon-temple-1164678-wallpaper.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/800x500/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Jordan River Utah",
    location: "South Jordan, Utah, United States",
    dedicated: "1981, November, 16",
    area: 148236,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/800x500/CWD_f5579d41-7344-4498-a589-4017ba5fcc91.jpg"
  },
  {
    templeName: "Oaxaca Mexico",
    location: "Oaxaca, Mexico",
    dedicated: "2000, March, 11",
    area: 10500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oaxaca-mexico/800x500/oaxaca-mexico-temple-759272-wallpaper.jpg"
  },
  {
    templeName: "Los Angeles California",
    location: "Los Angeles, California, United States",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/800x500/los-angeles-temple-766339-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/4-Rome-Temple-2160935.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/800x500/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 47224,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/800x500/laie-temple-775370-wallpaper.jpg"
  }
];

// ------------------------------
// Display Temple Cards function 
// ------------------------------
function displayTemples(templeList) {
  const container = document.querySelector("#temple-cards");
  container.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("figure");

    card.innerHTML = `
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName}" 
           loading="lazy">
      <figcaption>
        <strong>${temple.templeName}</strong><br>
        Location: ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area.toLocaleString()} sq ft
      </figcaption>
    `;

    container.appendChild(card);
  });
}

// ------------------------------
// Filtering the temples based on criteria
// ------------------------------
function filterTemples(criteria) {
  let filtered = temples;

  if (criteria === "old") {
    filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
  } else if (criteria === "new") {
    filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
  } else if (criteria === "large") {
    filtered = temples.filter(t => t.area > 90000);
  } else if (criteria === "small") {
    filtered = temples.filter(t => t.area < 10000);
  }

  displayTemples(filtered);
}

// ------------------------------
// Navigation Event Listeners for filtering and home (show all) 
// ------------------------------
document.querySelector("#filter-old").addEventListener("click", () => filterTemples("old"));
document.querySelector("#filter-new").addEventListener("click", () => filterTemples("new"));
document.querySelector("#filter-large").addEventListener("click", () => filterTemples("large"));
document.querySelector("#filter-small").addEventListener("click", () => filterTemples("small"));

// Home = show all addEventListener for the home link to show all temples
document.querySelector("a[href='index.html']").addEventListener("click", () => displayTemples(temples));

// ------------------------------
// Initial Page Load
// ------------------------------
displayTemples(temples);
