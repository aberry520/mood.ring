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
  classes.toggle("default-mood");

  switch(moodValue) {
    case 'Not Happy':
      classes.add("not-happy")
      classes.remove("happy", "very-happy")
      break
    case 'Happy':
      classes.add("happy")
      classes.remove("not-happy", "very-happy")
      break
    case 'Very Happy':
      classes.add("very-happy")
      classes.remove(["not-happy", "happy"])
      break
  }
})
