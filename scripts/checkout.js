window.onload=function() {
  addEventListener("click", function () {
    let level = 1*document.getElementById("level").value;
    let hours = 1*document.getElementById("hours").value;
    let price;
    if(level<0||level>5||level%1!=0||isNaN(level)){
      alert('Invalid input for hours. You must enter a natural number between 1 and 5.');
      }

      if (hours<0||level%1!=0||isNaN(hours)) {
        alert('Invalid input for hours. You must enter a natural number.');
        }

        switch(level){
          case 1:
            price = 20 * hours;
            break;
          case 2:
            price = 25 * hours;
            break;
          case 3:
            price = 30 * hours;
            break;
          case 4:
            price = 35 * hours;
            break;
          case 5:
            price = 40 * hours;
            break;
        }

        document.getElementById("Price").value = price;
      });
}