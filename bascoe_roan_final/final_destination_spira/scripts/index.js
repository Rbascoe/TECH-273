/* JS Document */
/*******************/
/*
    Name: Roan Bascoe
    Class: TECH-273
    Date: 11/16/23
    Proj: Project 4
*/
/*******************/

// getUserInput function grabs the value the user enters in the input field when they hit 'submit'

const getUserInput = () => {
  let value = document.getElementById("password").value;

  //   Check to confirm the inputted value
  console.log(value);

  return value;
};

/* The autheticatePassword function take the value returned from the getUserInput function and compares it to a set of string values in a switch statement.
If the returned value mets the correct condition the an alert is received that access has been granted and the greyed out navbar links are ungreyed and the pages 
they link to are made accessible. If none of the conditions are met then an 'Access Denied' alert is displayed and the navbar links remained disabled and greyed out.
*/

const autheticatePassword = () => {
  let password = getUserInput();

  switch (password) {
    case "storm":
      alert("Access Granted");
      enableLink();
      redirectPage();
      console.log("Correct password storm entered");
      break;
    case "orgrim":
      alert("Access Granted");
      enableLink();
      redirectPage();
      console.log("Correct password orgrim entered");
      break;
    case "iron":
      alert("Access Granted");
      enableLink();
      redirectPage();
      console.log("Correct password iron entered");
      break;
    case "under":
      alert("Access Granted");
      enableLink();
      redirectPage();
      console.log("Correct password under entered");
      break;
    default:
      alert("Access Denied");
  }
};

/* The enableLink function grabs an array of the a tag elements and assigns that array to the 'disabledLinks' variable. Ideally, it would be better to grab elements by 
class name or id but due to the simplicity of this web page, and having a limited number of a tags, I decided to go with the 'just make it work' approach. The function
then removes the 'disableLink' class, which changes the color of the links, and the onclick 'return false' value from the disabled links to make them accessible. 
*/

const enableLink = () => {
  let disabledLinks = document.getElementsByTagName("a");

  //   Check to ensure array contains expected amount of elements
  console.log(disabledLinks.length);

  disabledLinks[0].onclick = null;
  disabledLinks[0].classList.remove("disabled-link");
  disabledLinks[0].classList.add("enabled-link");

  disabledLinks[1].onclick = null;
  disabledLinks[1].classList.remove("disabled-link");
  disabledLinks[1].classList.add("enabled-link");
};

// this fucntion redirects to the initial content page after authentication is completed

const redirectPage = () => {
  window.location.href = "page2.html";
};
