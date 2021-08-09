var menu_list_array = ["Veg Supreme Pizza","Panner Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza","Margharita Pizza"];
function getmenu() {
    document.getElementById("list_of_pizzas").style.display="inline";
}
function add_item() {
    var pizza_item=document.getElementById("add_item").value;
    console.log(pizza_item);
    menu_list_array.push(pizza_item);
    console.log(menu_list_array);
    document.getElementById("pizza_show").innerHTML=menu_list_array;
}
//for (var k = 0; k < menu_list_array.length; k++) {
    //menu_list_array.push("<h4>NAME -" + pizza_item[k] + "</h4>");
    //console.log(menu_list_array);
    //document.getElementById("display_addmenu").innerHTML=menu_list_array;
//}
//background-image: url("images/Bg.jpg");