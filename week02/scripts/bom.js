const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Create a list item that holds each entry
const li = document.createElement('li');

// Create a delete button
const deleteButton = document.createElement('button');

// Put the input’s value into the li
li.textContent = input.value;

// This selects the delete button’s text
deleteButton.textContent = '❌';

// Add accessibility label
deleteButton.setAttribute('aria-label', 'Remove chapter');

// This will Append the delete button to the li element.
li.append(deleteButton);

// This will append the li element variable to the unordered list in the HTML page. 
list.append(li);
