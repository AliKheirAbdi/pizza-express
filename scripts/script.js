var size, crust, toppings, price, total;
function Pizza(size, crust, toppings, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

//shows the total amount due for pizza selected
$(document).ready(function(){
    $('button#order').click(function(){
        var pizzaSize = $('.size option:selected').val();
        var pizzaCrust = $('.crust option:selected').val();

        var pTopping = [];

        $.each($("input[name='toppings']:checked"), function(){
            pTopping.push($(this).val());
        });
        var pizzaTopping = pTopping.length*200;
        var pizzaTotal = parseInt(pizzaSize) + parseInt(pizzaCrust)+ parseInt(pizzaTopping);
        alert("Your total order is: "+pizzaTotal)
        $('.delivery').show();
        event.preventDefault();
    });
});


$(document).ready(function(){
     $('#order2').click(function(){
         $('#make-order').append('<div class="row">'+
        '<div class="col-md-4">'+
    '<h4>Select Your Flavour</h4>'+
    '<form id="form" class="size">'+
        '<select class="form-control">'+
            '<select class="browser-default custom-select custom-select-md mb-3 name">'+
            '<option value="Chicken PeriPeri">Chicken PeriPeri</option>'+
            '<option value="Hawaiian">Hawaiian</option>'+
            '<option value="Chicken Tikka">Chicken Tikka</option>'+
            '<option value="BBQ Chicken">BBQ Chicken</option>'+
            '<option value="Club Pizza">Club Pizza</option>'+
            '<option value="Margherita">Margherita</option>'+
          '</select>'+
        '</select>'+
    '</form>'+
'</div>'+
'<div class="col-md-4">'+
    '<label for="select">Select Pizza Crust</label>'+
    '<form id="form" class="crust">'+
        '<select name="Crust" class="form-control">'+
            '<option label="Crispy" -- 200" value="200"></option>'+
            '<option label="Spicy" -- 200" value="200"></option>'+
            '<option label="Gluten-free" -- 200" value="200"></option>'+
        '</select>'+
    '</div>'+
    '</form>'+

'<div class="col-md-4">'+
    '<h4>Select your Toppings of choice!</h4>'+
    '<form id="form" class="topping">'+
        '<div class="row">'+
            '<div class="col-md-6">'+
        '<input type="checkbox" name="toppings2" class="form control" label="Bacon" value="200">Bacon<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Pepperoni" value="200">Pepperoni<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="chillies" value="200">Chillies<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Sausage" value="200">Sausage<br>'+
    '</div>'+
        '<div class="col-md-6">'+
        '<input type="checkbox" name="toppings2" class="form control" label="Cheese" value="200">Cheese<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="pineapple" value="200">Pineapple<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Mushrooms" value="200">Mushrooms<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Olive" value="200">Olives<br>'+
    '</div>'+
'</div>'+

    '</form>'+'<br>'+

'</div>'+
'</div>');
$(document).ready(function(){
    $('#secondOrder').click(function(){
        var pizzaSize2 = $('.size option:selected').val();
        var pizzaCrust2 = $('.crust option:selected').val();

        var pTopping2 = [];

    $.each($("input[name='toppings']:checked"), function(){
    pTopping2.push($(this).val());
    });

    var pizzaTopping = pTopping2.length*100;
    var pizzaTotal = parseInt(pizzaSize2) + parseInt(pizzaCrust2)+ parseInt(pizzaTopping2);

    alert("Your total order is: "+pizzaTotal2)//displays grandtotal for order added

    });
    event.preventDefault();
});

});
});


