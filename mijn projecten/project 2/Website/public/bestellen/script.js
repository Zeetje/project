var socket = io();

socket.on('returnCart', function(ret) {
  document.getElementById("cart").innerHTML = ret;
})

socket.on("returnPrice", function(ret) {
  document.getElementById("price").innerHTML = ret;
})

function sweetAlert(titel, iconSrc, html1, html2, price, pid){
  Swal.fire({
    title: '<strong>'+titel+'</strong>',
    iconHtml: '<img src="'+iconSrc+'" id="popupImg">',
    html:
      html1 + ', <br>' +
      html2 + '<br>' +
      'Price: ' + price,
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      socket.emit("add", pid);
    }
  })
}


document.getElementById("contadina").addEventListener("click", () => {sweetAlert("Pizza Contadina", "", "Een geweldige pizza met", "Tomatensaus, cherrytomaten, rucola en Parmezaanse kaas", 7.45, 1);})
document.getElementById("margarita").addEventListener("click", () => {sweetAlert("Pizza Margherita", "", "Een geweldige pizza met", "Tomatensaus, mozzarella en basilicum", 7.95, 2);})
document.getElementById("tonno").addEventListener("click", () => {sweetAlert("Pizza Tonno", "", "Een geweldige pizza met", "Tomatensaus, tonijn, ansjovis, rode paprika, zwarte olijven en kappertjes", 9.95, 3);})
document.getElementById("delizioza").addEventListener("click", () => {sweetAlert("Pizza Delizioza", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, rode paprika en basilicum", 8.95, 4);})
document.getElementById("kaas").addEventListener("click", () => {sweetAlert("Pizza Quattro formaggi", "", "Een geweldige pizza met", "Mozzarella, gorgonzola, provolone en Parmezaanse kaas", 10.95, 5);})
document.getElementById("pepperoni").addEventListener("click", () => {sweetAlert("Pizza Salame", "", "Een geweldige pizza met", "Tomatensaus, mozzarella en salami Milano", 9.45, 6);})
document.getElementById("rustica").addEventListener("click", () => {sweetAlert("Pizza Rustica", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, gekruid rundergehakt en rode pepers", 9.95, 7);})
document.getElementById("fiamma").addEventListener("click", () => {sweetAlert("Pizza Fiamma", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, salami pepperone en rode pepers", 10.95, 8);})
document.getElementById("lusso-margherita").addEventListener("click", () => {sweetAlert("Pizza Di Lusso Margherita", "", "Een geweldige pizza met", "Tomatensaus, buffelmozzarella en pesto", 10.95, 9);})
document.getElementById("stagioni").addEventListener("click", () => {sweetAlert("Pizza Quattro Stagioni", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, prosciutto cotto, salami Milano, champignons en artisjokken", 10.95, 10);})
document.getElementById("prosciutto").addEventListener("click", () => {sweetAlert("Pizza Prosciutto di Parma", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, Parmaham, zongedroogde tomaat, mascarpone, rucola en Parmezaanse kaas", 12.95, 11);})
document.getElementById("pollo").addEventListener("click", () => {sweetAlert("Pizza Pollo con Extra", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, gegrilde kip, rode ui, rode paprika en champignons", 12.95, 12);})
document.getElementById("funghi").addEventListener("click", () => {sweetAlert("Pizza Ai funghi", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, champignons en knoflookolie", 10.95, 13);})
document.getElementById("hawaii").addEventListener("click", () => {sweetAlert("Pizza Hawaii", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, prosciutto cotto en ananas", 11.95, 14);})
document.getElementById("pollo-p").addEventListener("click", () => {sweetAlert("Pizza Pollo Pesto", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, gegrilde kip, cherrytomaten, champignons, zoete ui, rode paprika en pesto", 13.95, 15);})
document.getElementById("doner").addEventListener("click", () => {sweetAlert("Pizza Döner", "", "Een geweldige pizza met", "Tomatensaus, kipdöner, mozzarella, rode ui en knoflooksaus, +2,95 voor extra kipdöner", 14.95, 16);})
document.getElementById("cotto").addEventListener("click", () => {sweetAlert("Pizza Con Cotto", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, prosciutto cotto en basilicum", 10.95, 17);})
document.getElementById("carpaccio").addEventListener("click", () => {sweetAlert("Pizza Carpaccio", "", "Een geweldige pizza met", "Gemengde sla, carpaccio, Parmezaanse kaas, pijnboompitten, truffelmayonaise", 13.95, 18);})
document.getElementById("bbq-C").addEventListener("click", () => {sweetAlert("Pizza BBQ Chicken", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, kipdöner, gegrilde kip, rode pepers, rode ui en barbecuesaus", 14.95, 19);})
document.getElementById("bbq-M").addEventListener("click", () => {sweetAlert("Pizza BBQ Meatlovers", "", "Een geweldige pizza met", "Tomatensaus, mozzarella, gehakt, kipdöner, pittige salami, rode ui, paprika en barbecuesaus", 14.95, 20);})
document.getElementById("bufala").addEventListener("click", () => {sweetAlert("Pizza Bufala Bruschetta", "", "Een geweldige pizza met", "Buffelmozzarella, gemarineerde tomatenblokjes, rucola, pesto en Parmezaanse kaas", 13.95, 21);})
document.getElementById("margarita-v").addEventListener("click", () => {sweetAlert("Pizza Vegan Margherita", "", "Een geweldige pizza met", "Tomatensaus, vegan pizzakaas en basilicum", 7.95, 22);})
document.getElementById("funghi-v").addEventListener("click", () => {sweetAlert("Pizza Vegan Funghi", "", "Een geweldige pizza met", "Tomatensaus, vegan mozzarella, champignons en knoflookolie", 10.95, 23);})
document.getElementById("doner-v").addEventListener("click", () => {sweetAlert("Pizza Vegan Döner", "", "Een geweldige pizza met", "Tomatensaus, vegan pizzakaas, vegan kebab, rode ui en vegan knoflooksaus", 14.45, 24);})
document.getElementById("pollo-p-v").addEventListener("click", () => {sweetAlert("Pizza Vegan Pollo Pesto", "", "Een geweldige pizza met", "Tomatensaus, vegan mozzarella, vegan kipreepjes, cherrytomaten, champignons, zoete ui, gegrilde paprika en vega pesto", 13.95, 25);})
document.getElementById("bbq-C-v").addEventListener("click", () => {sweetAlert("Pizza Vegan BBQ Chicken", "", "Een geweldige pizza met", "Tomatensaus, vegan pizzakaas, vega kipreepjes, rode pepers, rode ui en vegan barbecuesaus", 13.49, 26);})


function changeValue(html, int){
  socket.emit("change", html, int)
}


document.getElementById("afrekenen").addEventListener("click", function(){
  if (document.getElementById("price").innerHTML == "Total Price: €0.00" ){return;}
  else{
    window.location.href = "../betalen/";
  }
})
