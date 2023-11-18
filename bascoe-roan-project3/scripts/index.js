/* JS Document */
/*******************/
/*
    Name: Roan Bascoe
    Class: TECH-273
    Date: 11/16/23
    Proj: Project 3
*/
/*******************/

/* The getRandomColor function generates a random hexadecimal value by looping through a string of 16 characters, 6 times, comprised of digits (0-9) and letters (A-F).
'color +=' appends the '#' character to the front of this value to complete the hexadecimal color value and then this value is returned to be used in other functions.
*/

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }

  return color;
};

/* The changeHeaderColor function finds all HTML elements with the class name 'table-header' and returns them in an array. We then loop through the array to access each
individual element and change the background color of each element to a random color via the getRandomColor function.
*/

const changeHeaderColor = () => {
  let elem = document.getElementsByClassName("table-header");

  for (let i = 0; i < elem.length; i++) {
    elem[i].style.backgroundColor = getRandomColor();
  }

  // Confirm the function is being hit

  console.log("Header Color Changed");
};

/* The changeHeaderData function finds all HTML elements with the class name 'table-header' and returns them in an array. We then loop through the array to access each
individual element and change the text or 'innerHTML' of each element based on a random value from the values array.
*/

const changeHeaderData = () => {
  let values = [
    "Naruto",
    "Goku",
    "Tidus",
    "Saitama",
    "Izuku",
    "Tanjiro",
    "Luffy",
  ];
  let elem = document.getElementsByClassName("table-header");

  for (let i = 0; i < elem.length; i++) {
    elem[i].innerHTML = values[Math.floor(Math.random() * 7)];
  }

  // Confirm the function is being hit

  console.log("Header Data Changed");
};

/* The changeRowData function finds all HTML elements with the class names 'row-one', 'row-two', and 'row-three' and returns them in their own arrays. We then loop 
through all of the arrays to access each element for the corresponding row and change the text or 'innerHTML' of each element to a random value. Row one generates
a random value from the 'interests' array, Row two generates a random number between 1 & 51 for a fake age value, and Row Three generates a random value from the 
'traits' array. Ideally, more loop would be used incase the arrays used had a different number of values. However, for the sake of simplicity for this exercise I 
decided to use just 1 loop since both arrays had the same value count aka 'length'.
*/

const changeRowData = () => {
  let interests = [
    "Food",
    "Fighting",
    "Training",
    "Video Games",
    "Family",
    "Friends",
    "Sleep",
  ];
  let traits = [
    "Kind",
    "Strong",
    "Determined",
    "Courageous",
    "Loyal",
    "Thoughtful",
    "Naive",
  ];

  let rowOne = document.getElementsByClassName("row-one");
  let rowTwo = document.getElementsByClassName("row-two");
  let rowThree = document.getElementsByClassName("row-three");

  for (let i = 0; i < rowOne.length; i++) {
    // So age would never be 0
    let age = Math.floor(Math.random() * 50) + 1;

    rowOne[i].innerHTML = interests[Math.floor(Math.random() * 7)];
    rowTwo[i].innerHTML = age;
    rowThree[i].innerHTML = traits[Math.floor(Math.random() * 7)];
  }

  // Confirm the function is being hit

  console.log("Row Data Changed");
};
