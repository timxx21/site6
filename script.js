let radios = document.getElementById("radio-group-1");
let check = document.getElementById("checker");
radios.style.display = "none";
check.style.display = "none";
let r = document.getElementById("result1");
var result = "0";
r.innerHTML = result;

window.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    let s = document.getElementsByName("selector");
    s[0].addEventListener("change", function(event) {
      let select = event.target;
      let radios = document.getElementById("radio-group-1");
      let check = document.getElementById("checker");
      if (select.value == "1") {
        radios.style.display = "none";
        check.style.display = "none";
        let r = document.getElementById("result1");
        var result = "999$";
        r.innerHTML = result;
      }
      else if (select.value == "2") {
        radios.style.display = "block";
        check.style.display = "none";
        let r = document.getElementById("result1");
        var result = "выбирайте что нибудь";
        r.innerHTML = result;
      }
      else if(select.value == "3") {
        radios.style.display = "none";
        check.style.display = "block";
        let r = document.getElementById("result1");
        var result = "много денег";
        r.innerHTML = result;
      }
    });

    let r = document.querySelectorAll(".radio-group-1 input[type=radio]");
    r.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        if(r.value == "r1"){
          let r = document.getElementById("result1");
          var result = "20000 рублей";
          r.innerHTML = result;
        }else if (r.value == "r2") {
          let r = document.getElementById("result1");
          var result = "1000 рублей";
          r.innerHTML = result;
        }else if (r.value == "r3") {
          let r = document.getElementById("result1");
          var result = "у вас нет таких денег";
          r.innerHTML = result;
        }
      });
    });

    let c = document.getElementsByName("checker");
    c[0].addEventListener("change", function(event) {
      if(this.checked){
        let r = document.getElementById("result1");
        var result = "8 умножить на 100 тысяч получается где то 3 миллиона";
        r.innerHTML = result;
      }else{
        let r = document.getElementById("result1");
        var result = "все еще много денег";
        r.innerHTML = result;
      }
    });

    let button = document.getElementById("ok");
    button.addEventListener("click", ok);
    ok.addEventListener("click", function() {
        let x = a.value;
        let y = b.value;
        if (!isNumeric(x)) {
            alert("Чет вы не то сделали");
            return;
        }
        if (!isNumeric(y)) {
            alert("Чет вы не то сделали");
            return;
        }
        let sum = parseInt(x) * parseInt(y);
        res.innerHTML = sum;
    });
});
