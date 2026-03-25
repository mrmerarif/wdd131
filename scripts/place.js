// Footer year + last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather values
const temp = parseFloat(document.getElementById("temperature").textContent);
const wind = parseFloat(document.getElementById("windSpeed").textContent);
const windChillSpan = document.getElementById("windChill");

// Wind chill formula (°F)
function calculateWindChill(t, s) {
  return Math.round(
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16)
  );
}

// Only calculate if valid
if (temp <= 50 && wind > 3) {
  windChillSpan.textContent = calculateWindChill(temp, wind) + " °F";
} else {
  windChillSpan.textContent = "N/A";
}
