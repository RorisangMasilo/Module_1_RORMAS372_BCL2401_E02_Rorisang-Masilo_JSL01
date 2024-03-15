function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = " "; // Placeholder for validation result

  let regex = /^pet_\d*[a-zA-Z0-9]+$/;

    // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters
  if (regex.test(input)) {
    result = "Valid Syntax <span class='Valid'>U+2705</span>;
  } else {
    result = "Invalid Syntax <span class='Invalid'>U+274C</span>;
  }

  /* let keyboardEvent = new keyboardEvent("keydown", {key: "Enter"});
  document.getElementById("petInput").dispatchEvent(keyboardEvent); */

  document.getElementById("result").innerText = result;
}
