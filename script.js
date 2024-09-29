// Get elements
const inputText = document.getElementById("inputText");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

// Update counts
inputText.addEventListener("input", updateCounts);

function updateCounts() {
  const text = inputText.value;
  charCount.textContent = `Character Count: ${text.length}`;
  wordCount.textContent = `Word Count: ${
    text.trim() ? text.trim().split(/\s+/).length : 0
  }`;
}

// Convert to Uppercase
function toUpperCaseText() {
  inputText.value = inputText.value.toUpperCase();
  updateCounts();
}

// Convert to Lowercase
function toLowerCaseText() {
  inputText.value = inputText.value.toLowerCase();
  updateCounts();
}

// Reverse the text
function reverseText() {
  inputText.value = inputText.value.split("").reverse().join("");
  updateCounts();
}

// Clear the textarea
function clearText() {
  inputText.value = "";
  updateCounts();
}
