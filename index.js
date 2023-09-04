'use strict';

const submit = document.querySelector("#submit")

submit.addEventListener("click", function(event){
  event.preventDefault();
  const moodInput= document.querySelector("[name=mood]:checked");
  const myMood = document.querySelector("#myMood");
  const moodValue = moodInput.value;
  myMood.innerHTML = moodValue;
  const classes = myMood.classList;
  console.log(classes);

  const bgColor = document.querySelector("body");
  const color = bgColor.classList;
  // bgColor.innerHTML = moodValue;
  console.log(color);

  switch(moodValue) {
    case 'Not Happy':
      // classes.add("not-happy")
      // classes.remove("happy", "very-happy")
      color.add("not-happy")
      color.remove("happy", "very-happy")
      break
    case 'Happy':
      // classes.add("happy")
      // classes.remove("not-happy", "very-happy")
      color.add("happy")
      color.remove("not-happy", "very-happy")
      break
    case 'Very Happy':
      // classes.add("very-happy")
      // classes.remove("not-happy", "happy")
      color.add("very-happy")
      color.remove("not-happy", "happy")
      break
  }


})
