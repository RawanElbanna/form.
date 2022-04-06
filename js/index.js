(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  var entry = 0;
 var input = document.getElementById("validationCustomUsername");
  function change() {
  
    if (entry == 0) {
      document.getElementById("validationCustomUsername").placeholder = "email@example/com"; 
      entry++;
      input.classList.add("red");
    }
}
