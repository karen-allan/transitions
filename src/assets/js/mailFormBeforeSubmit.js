(function beforeSubmit() {
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var subjectLine = document.getElementById("subject");
    var message = document.getElementById("message");
    body.value = "First%20Name:%20" + firstName.value + "%20/%20Last%20Name:%20" + lastName.value + "%20-%20MESSAGE:%20" + message.value;
  })()