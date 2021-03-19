function score() {  

  var q1 = document.forms.form.q1.value;
  var q2 = document.forms.form.q2.value;
  var q3 = document.forms.form.q3.value;  
  var elements = document.getElementById("questions").elements;
  for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].disabled = true;
  }

 
  var questions = [q1, q2, q3];

  var answers = ["b", "a", "d"];
  var points = 0;
  var total = 3;  
  for (var i = 0; i < total; i++) {
    if (questions[i] == answers[i]) {
      points = points + 1;
    }
  }
  var q = document.getElementById("p");

  q.style.fontSize = "30px";
  q.style.textAlign = "center";
  q.innerHTML = "You have scored " + points + " out of " + total;
;

  return false;
}