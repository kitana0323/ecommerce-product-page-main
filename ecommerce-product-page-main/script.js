// функция, исполняемая после загрузки документа
jQuery(document).ready(function () {
    //объявление переменных
    var amount = parseInt('1');
    var totalCost = '125';
    var imageSelected = '1';
    var isEmpty = true;
    //устанавливаем дефолтное изображение для лота
    $('.lot-main').attr('src', 'images/image-product-1.jpg'); //изменяем атрибут src у картинки с классом lot-image
    $('.image-1').addClass('image-selected'); //добавляем новый класс к блоку image-1


    $('.image-1').on('click', function () { //обработчик нажатия на картинку 1
        $('.lot-main').attr('src', 'images/image-product-1.jpg'); //изменяем src
        $('.popup_img').attr('src', 'images/image-product-1.jpg');
        $('.image-1').addClass('image-selected'); //добавляем класс selected
        $('.image-2').removeClass('image-selected');
        $('.image-3').removeClass('image-selected');
        $('.image-4').removeClass('image-selected');
        imageSelected = '1';
    });

    $('.image-2').on('click', function () { //то же самое
        $('.lot-main').attr('src', 'images/image-product-2.jpg');
        $('.popup_img').attr('src', 'images/image-product-2.jpg');
        $('.image-1').removeClass('image-selected');
        $('.image-2').addClass('image-selected');
        $('.image-3').removeClass('image-selected');
        $('.image-4').removeClass('image-selected');
        imageSelected = '2';
    });

    $('.image-3').on('click', function () {//далее аналогично
        $('.lot-main').attr('src', 'images/image-product-3.jpg');
        $('.popup_img').attr('src', 'images/image-product-3.jpg');
        $('.image-1').removeClass('image-selected');
        $('.image-2').removeClass('image-selected');
        $('.image-3').addClass('image-selected');
        $('.image-4').removeClass('image-selected');
        imageSelected = '3';
    });

    $('.image-4').on('click', function () {
        $('.lot-main').attr('src', 'images/image-product-4.jpg');
        $('.popup_img').attr('src', 'images/image-product-4.jpg');
        $('.image-1').removeClass('image-selected');
        $('.image-2').removeClass('image-selected');
        $('.image-3').removeClass('image-selected');
        $('.image-4').addClass('image-selected');
        imageSelected = '4';
    });

    //при клике на главную картинку
    $('.lot-main').on('click', function () {
        var img = $(this);	// получаем изображение, на которое кликнули
        var src = img.attr('src'); // достаем из этого изображения путь до картинки
        $('.popup').css('display', 'block'); //задаём новое значение свойству класса
        $(".popup").fadeIn(200); // медленно выводим изображение
        $(".popup_bg").click(function () {	// Событие клика на затемненный фон	   
            $(".popup").fadeOut(200);	// медленно убираем всплывающее окно
            setTimeout(function () {	// выставляем таймер
                $('.popup').css('display', 'none'); //задаём новое значение свойству класса
            }, 200);
        });
    });

    //нажатие на right
    $('.popup-right').on('click', function () {
        switch (imageSelected) { //проверяем какая картинка была выбрана
            case '1': //если первая, то
                $('.lot-main').attr('src', 'images/image-product-2.jpg'); //меняем src
                $('.popup_img').attr('src', 'images/image-product-2.jpg'); //и тут
                $('.image-1').removeClass('image-selected'); //удаляем классы у неактивных картинок
                $('.image-2').addClass('image-selected'); //добавляем класс к ативнйо картинке
                $('.image-3').removeClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '2';
                break;
            case '2': //далее аналогично
                $('.lot-main').attr('src', 'images/image-product-3.jpg');
                $('.popup_img').attr('src', 'images/image-product-3.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').addClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '3';
                break;
            case '3':
                $('.lot-main').attr('src', 'images/image-product-4.jpg');
                $('.popup_img').attr('src', 'images/image-product-4.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').addClass('image-selected');
                imageSelected = '4';
                break;
            case '4':
                $('.lot-main').attr('src', 'images/image-product-1.jpg');
                $('.popup_img').attr('src', 'images/image-product-1.jpg');
                $('.image-1').addClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '1';
            default:
                break;
        }
    });

    //нажатие на left
    $('.popup-left').on('click', function () { // всё то же самое что и с right, но в обратную сторону
        switch (imageSelected) {
            case '4':
                $('.lot-main').attr('src', 'images/image-product-3.jpg');
                $('.popup_img').attr('src', 'images/image-product-3.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').addClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '3';
                break;
            case '3':
                $('.lot-main').attr('src', 'images/image-product-2.jpg');
                $('.popup_img').attr('src', 'images/image-product-2.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').addClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '2';
                break;
            case '2':
                $('.lot-main').attr('src', 'images/image-product-1.jpg');
                $('.popup_img').attr('src', 'images/image-product-1.jpg');
                $('.image-1').addClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '1';
                break;
            case '1':
                $('.lot-main').attr('src', 'images/image-product-4.jpg');
                $('.popup_img').attr('src', 'images/image-product-4.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').addClass('image-selected');
                imageSelected = '4';
            default:
                break;
        }
    });

    //нажатие на right в мобильной версии
    $('.popup-right-1').on('click', function () { // то же самое что и в десктопной, отличается класс нажимаемого элемента
        switch (imageSelected) {
            case '1':
                $('.lot-main').attr('src', 'images/image-product-2.jpg');
                $('.popup_img-1').attr('src', 'images/image-product-2.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').addClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '2';
                break;
            case '2':
                $('.lot-main').attr('src', 'images/image-product-3.jpg');
                $('.popup_img-1').attr('src', 'images/image-product-3.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').addClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '3';
                break;
            case '3':
                $('.lot-main').attr('src', 'images/image-product-4.jpg');
                $('.popup_img-1').attr('src', 'images/image-product-4.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').addClass('image-selected');
                imageSelected = '4';
                break;
            case '4':
                $('.lot-main').attr('src', 'images/image-product-1.jpg');
                $('.popup_img-1').attr('src', 'images/image-product-1.jpg');
                $('.image-1').addClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '1';
            default:
                break;
        }
    });

    //нажатие на left в мобильной версии
    $('.popup-left-1').on('click', function () { //аналогично предыдущему
        switch (imageSelected) {
            case '4':
                $('.lot-main').attr('src', 'images/image-product-3.jpg');
                $('.popup_img-1').attr('src', 'images/image-product-3.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').addClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '3';
                break;
            case '3':
                $('.lot-main').attr('src', 'images/image-product-2.jpg');
                $('.popup_img-1').attr('src', 'images/image-product-2.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').addClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '2';
                break;
            case '2':
                $('.lot-main').attr('src', 'images/image-product-1.jpg');
                $('.popup_img-1').attr('src', 'images/image-product-1.jpg');
                $('.image-1').addClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').removeClass('image-selected');
                imageSelected = '1';
                break;
            case '1':
                $('.lot-main').attr('src', 'images/image-product-4.jpg');
                $('.popup_img-1').attr('src', 'images/image-product-4.jpg');
                $('.image-1').removeClass('image-selected');
                $('.image-2').removeClass('image-selected');
                $('.image-3').removeClass('image-selected');
                $('.image-4').addClass('image-selected');
                imageSelected = '4';
            default:
                break;
        }
    });

    //нажатие на корзину покупок
    $('.shopping-cart').on('click', function () {
        if ($('.profile').hasClass('profile-active') == false) { //проверяем наличие класса active у корзины (то есть, нажата она уже или нет)
            if (isEmpty == false) { //если корзина не пустая, то выполняем далее
                $('.profile').addClass('profile-active'); //добавляем класс active
                $('.cart-menu-empty').css('display', 'none'); //задаём свойства блокам
                $('.cart-menu').css('display', 'block');
                $('.cart-menu-fill').css('display', 'block');
            }
            else { //если пустая, то показываем соответствующее содержимсое (your cart is cart empty)
                $('.profile').addClass('profile-active');
                $('.cart-menu-empty').css('display', 'flex'); //путём добавления класса
                $('.cart-menu').css('display', 'block');
                $('.cart-menu-fill').css('display', 'none');
            }

        }
        else { //если класс active у корзины (профиля) есть, то скрываем корзину и active у профиля
            $('.profile').removeClass('profile-active');
            $('.cart-menu').css('display', 'none');
        }
    });


    //нажатие на кнопку плюс
    $('.amount-plus').on('click', function () {
        amount += parseInt('1'); //увеличиваем количество товара на единицу
        $('.amount-count').html(amount); //выводим значение в разметку
    });

    //нажатие на кнопку минус
    $('.amount-minus').on('click', function () {
        if (amount == '1') { //проверяем, если значение равно 1, то щапрещаем его уменьшать
            amount = amount;
        }
        else { //если значение не равно единице, то уменьшаем его на единицу
            amount -= parseInt('1');
            $('.amount-count').html(amount); //и выводим в разметку
        }
    });


    //нажатие на кнопку добавить в корзину
    $('.add-cart-wrp').on('click', function () {
        totalCost = (125 * amount); //вычисляем общую сумму
        $('.cart-menu-item-cost-amount').html(amount); //выводим в разметку
        $('.cart-menu-item-cost-total').html(' ' + '$' + totalCost + '.00');
        isEmpty = false; //устанавливаем влаг пустоты корзины (не пустая)
    });

    //нажатие на кнопку удалить из корзины
    $('.cart-menu-item-delete').on('click', function () {
        $('.profile').addClass('profile-active');
        $('.cart-menu-empty').css('display', 'flex');
        $('.cart-menu').css('display', 'block');
        $('.cart-menu-fill').css('display', 'none');
        isEmpty = true; //устанавливаем флаг пустоты корзины (пустая)
    });

})


