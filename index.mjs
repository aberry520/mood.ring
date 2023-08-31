const submit = document.querySelector("#submit")

submit.addEventListener("click", function(event){
  event.preventDefault();
  const moodInput= document.querySelector("[name=mood]:checked");
  const myMood = document.querySelector("#myMood");
  const moodValue = moodInput.value;
  myMood.innerHTML = moodInput.value;
  const classes = myMood.classList;
  classes.toggle("default-mood");

  switch(moodValue) {
    case 'Not Happy':
      classes.toggle("not-happy")
      break
    case 'Happy':
      classes.toggle("happy")
      break
    case 'Very Happy':
      classes.toggle("very-happy")
      break
  }
})

