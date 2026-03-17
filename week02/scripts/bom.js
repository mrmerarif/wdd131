// Get the input field where the user types the chapter
const input = document.querySelector('#favchap');

// Get the Add Chapter button
const button = document.querySelector('button');

// Get the unordered list where chapters will be displayed
const list = document.querySelector('ul');

// List of valid Book of Mormon books (all lowercase for easy checking)
const validBooks = [
  "1 nephi", "2 nephi", "jacob", "enos", "jarom", "omni", "words of mormon",
  "mosiah", "alma", "helaman", "3 nephi", "4 nephi", "mormon", "ether", "moroni"
];

// Add a click event listener so this code runs when the user clicks the button
button.addEventListener('click', function() {

    // Get the user's input and remove extra spaces
    const chapter = input.value.trim();

    // If the input is empty, show a message and stop the function
    if (chapter === '') {
        alert("Please enter a chapter.");
        input.focus(); // This Put the cursor back in the input box
        return;        // Stop the function here
    }

    // Convert the input to lowercase for checking
    const lower = chapter.toLowerCase();

    // This Split the input into words (example: "1 nephi 3" → ["1", "nephi", "3"]) so the user does not get an error if they type "1 nephi" instead of "1 Nephi"
    const parts = lower.split(" ");

    // Determine the correct book name
    // If the first word is a number (1, 2, 3, 4), combine first + second word
    let bookName = parts[0];
    if (!isNaN(parts[0])) {
        bookName = parts[0] + " " + parts[1];  // Example: "1 nephi"
    }

    // This check if the book name is in the list of valid Book of Mormon books
    if (!validBooks.includes(bookName)) {
        alert("Please enter a valid Book of Mormon book.");
        input.focus();
        return; // Stop if the book is not valid
    }

    // This will check if the list already has 10 items (Top 10 limit)
    if (list.children.length >= 10) {
        alert("You can only add 10 chapters.");
        input.focus();
        return; // Stop if the list is full
    }

    // Create an array of existing chapters already in the list
    const existing = Array.from(list.children).map(li => li.firstChild.textContent.toLowerCase());

    // This will check if the chapter is already in the list (prevent duplicates)
    if (existing.includes(lower)) {
        alert("This chapter is already in your list.");
        input.focus();
        return; // Stop if it's a duplicate
    }

    // Create a new <li> element to hold the chapter
    const li = document.createElement('li');

    // Create the delete button for removing the chapter
    const deleteButton = document.createElement('button');

    // Put the user's chapter text inside the <li>
    li.textContent = chapter;

    // Add the ❌ symbol to the delete button
    deleteButton.textContent = '❌';

    // Add an accessibility label so screen readers know what the button does
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

    // Add the delete button to the <li>
    li.append(deleteButton);

    // Add the <li> to the list on the page
    list.append(li);

    // Add a click event to the delete button so it removes the chapter
    deleteButton.addEventListener('click', function () {
        list.removeChild(li); // Remove the <li> from the list
        input.focus();        // Return focus to the input box
    });

    // Clear the input box after adding the chapter
    input.value = '';

    // Put the cursor back in the input box for the next entry
    input.focus();

});
