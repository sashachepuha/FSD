$(document).ready(function() {

// Сворачивание всех dropdown

    $(".dropdown").children(".dropdown__list" ).slideToggle(0);

// Переменные

    var comfort = $(".dropdown-comfort").children( ".dropdown__value" ).html()
    var guests = $(".dropdown-guests").children( ".dropdown__value" ).html()
    var val = 0
    var one = 0
    var two = 0
    var tree = 0

// "Выподание"

    $( ".dropdown__value" ).click(function(){
        $(this).siblings(".dropdown__list" ).slideToggle(400);
        if ($(this).parent('.dropdown').hasClass('dropdown__border')){
            $(this).parent('.dropdown').removeClass('dropdown__border');
        }
        else{
            $(this).parent('.dropdown').addClass('dropdown__border');
        }
    });

// Кнопка "+"
    
    $(".dropdown__plus").click(function(){
        val = +$(this).siblings(".dropdown__item-val").html()
        val += 1
        $(this).siblings(".dropdown__item-val").html(val)
    });

// Кнопка "-"

    $(".dropdown__minus").click(function(){
        val = +$(this).siblings(".dropdown__item-val").html()
        if (val == 0){
            $(this).siblings(".dropdown__item-val").html(val)
        }
        else{
        val -= 1
        $(this).siblings(".dropdown__item-val").html(val)
        }
    });

// окончания

    function ending (n, form) {
        if (n == 1){return form[0]}
        if (n >=2 && n <= 4){return form[1]}
        if (n >=5){return form[2]}
    }

// Кнопка "Применить"

    $(".button__text").not(".button__text__inactive").click(function(){
        block = $(this).closest('.dropdown')
        one = +block.find(".dropdown__list .dropdown__item-val:eq(0)" ).html()
        two = +block.find(".dropdown__list .dropdown__item-val:eq(1)" ).html()
        tree = +block.find(".dropdown__list .dropdown__item-val:eq(2)" ).html()
        if (one == 0 && two== 0 && tree == 0){
            block.children( ".dropdown__value" ).html(guests)
        }
        if (one >= 1){
            block.children( ".dropdown__value" ).html(one+two+ending(one+two, [' гость', ' гостя', ' гостей']))
            if ( tree >= 1){
                block.children( ".dropdown__value" ).append(", "+tree+ending(tree, [' младенец', ' младенца', ' младенцев']))
            }
        }
        else {
            tree = 0
            two = 0
            block.find(".dropdown__list .dropdown__item-val:eq(2)" ).html(0)
            block.find(".dropdown__list .dropdown__item-val:eq(1)" ).html(0)
        }

        $(this).closest(".dropdown__list" ).slideToggle(400);
        if ($(this).closest('.dropdown').hasClass('dropdown__border')){
            $(this).closest('.dropdown').removeClass('dropdown__border');
        }
        else{
            $(this).closest('.dropdown').addClass('dropdown__border');
        }
            
    });

// Кнопка "очистить"

    $(".button__text__inactive").click(function(){
        block = $(this).closest('.dropdown')
        block.children( ".dropdown__value" ).html(guests)
        block.find(".dropdown__item-val" ).html(0)
    });

// Поле ввода для "Удобства"

    $(".dropdown-comfort").find(".dropdown__buttons").click(function(){
        block = $(this).closest('.dropdown')
        one = +block.find(".dropdown__list .dropdown__item-val:eq(0)" ).html()
        two = +block.find(".dropdown__list .dropdown__item-val:eq(1)" ).html()
        tree = +block.find(".dropdown__list .dropdown__item-val:eq(2)" ).html()
        str = []

        if (one == 0 && two== 0 && tree == 0){
            block.children( ".dropdown__value" ).html(comfort)
        }
        else{
            if (one >= 1){
                str.push(one+ending(one, [' спальня', ' спальни', ' спален']))
            }
            if (two >= 1 && one == 0){
                str.push(two+ending(two, [' кровать', ' кровати', ' кроватей']))
            }
            else if (two >= 1 && one >= 1){
                str.push(", "+two+ending(two, [' кровать', ' кровати', ' кроватей']))
            }
            if (tree >= 1 && two == 0 && one == 0){
                str.push(tree+ending(tree, [' ванная комната', ' ванных комнаты', ' ванных комнат']))
            }
            else if (tree >= 1 && (two >= 1 || one >= 1)){
                str.push(", "+tree+ending(tree, [' ванная комната', ' ванных комнаты', ' ванных комнат']))
            }
            block.children( ".dropdown__value" ).html(str)
        }
    })
});



