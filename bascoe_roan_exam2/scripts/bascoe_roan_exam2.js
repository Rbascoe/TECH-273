/* JS Document */
/*******************/
/*
    Name: Roan Bascoe
    Class: TECH-273
    Date: 11/27/23
    Proj: Exam 2
*/
/*******************/

function checkAnswer() {
  let answer = "Neptune";
  let names = document.getElementsByClassName("buttons");

  let choice_one = names[0].innerHTML;
  let choice_two = names[1].innerHTML;
  let choice_three = names[2].innerHTML;

  if (choice_one == answer) {
    alert("Wrong Answer. Please try again!");
  } else if (choice_two == answer) {
    alert("Correct Answer. I am Neptune!");
  } else if (hoice_three == answer) {
    alert("Incorrect. Please try again!");
  }

}
