var menu_list_array = ["Veg Supreme Pizza","Panner Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza","Margharita Pizza"];
function getmenu() {
    document.getElementById("list_of_pizzas").style.display="inline";
}
function add_item() {
    var pizza_item=document.getElementById("add_item").value;
    console.log(pizza_item);
    menu_list_array.push(pizza_item);
    console.log(menu_list_array);
}
for (var k = 0; k < length_of_the_array; k++) {
    pizza_item1.push("<h4>NAME -" + pizza_item[k] + "</h4>");
    console.log(pizza_item1);
}