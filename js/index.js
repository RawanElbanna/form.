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
  var x=document.getElementById("validationCustom03");
  var y=document.getElementById("validationCustom02");
  var z=document.getElementById("validationCustom01");
  function change() {
  
    if (entry == 0) {
      document.getElementById("validationCustomUsername").placeholder = "email@example/com"; 
      entry++;
      input.classList.add("red");
      x.classList.add("tra");
      y.classList.add("tran");
      z.classList.add("trans");
    }
}
