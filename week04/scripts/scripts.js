// Display the date the document was last modified
const lastModifiedSpan = document.getElementById("last-modified");
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}
