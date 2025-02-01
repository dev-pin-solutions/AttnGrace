jQuery(document).ready(function () {

  if ($(window).width() < 768) {
    $(".compare-banner-1 img").blowup({
      border: "2px solid #d9bea8",
      width: 100,
      height: 100,
      scale: 1
    });
  }
  else if($(window).width() < 991) {
    $(".compare-banner-1 img").blowup({
      border: "4px solid #d9bea8",
      width: 200,
      height: 200,
      scale: 1
    });
  }
  else {
    $(".compare-banner-1 img").blowup({
      border: "8px solid #d9bea8",
      width: 400,
      height: 400,
      scale: 1
    });
  }

  var tabImageOptions = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false
  }

  $(".tab-img-slider").slick(tabImageOptions);

  $(document).on('click','.compare-field input', function(){
    var dataAttr = '.'+$(this).siblings('label').data('attr');

    if($('.compare-field input').is(':checked')) {
      $('.product-compare-tabs').fadeIn();
    }

    else {
      $('.product-compare-tabs').fadeOut();
    }

    if($(this).is(':checked')){
      $(dataAttr).fadeIn();
      $(dataAttr).addClass('activeTabSlide');
      $('.tab-img-slider').slick('unslick');
      $('.tab-img-slider').slick(tabImageOptions);
    }

    else {
      $(dataAttr).fadeOut();
      $(dataAttr).removeClass('activeTabSlide');
      $('.tab-img-slider').slick('unslick');
      $('.tab-img-slider').slick(tabImageOptions);
    }

    jQuery('.activeTabSlide').each(function(i) {
      if(i === 0) {
        $(this).addClass('first-tab');
      }
      else {
        $(this).removeClass('first-tab');
      }
      i++;
    });
    
    const checkboxCl = $('.checkbox-field input:checked').length;
    if(checkboxCl >= 3){
      $('.product-compare-tabs .compare-tab-wrapper').addClass('show-three-inrow');
      $('.product-item-list .compare-field').each(function() {
        if(!$(this).find('input').is(':checked')){
          $(this).addClass('three-checked');
          $(this).find('input').prop('disabled', true);
        }
      });
    }else{
      $('.product-compare-tabs .compare-tab-wrapper').removeClass('show-three-inrow');
      $('.product-item-list .compare-field').each(function() {
        $(this).removeClass('three-checked');
        $(this).find('input').prop('disabled', false);
      });
    }
 });

  $(".item-slide").slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      fade: true,
      slidesToScroll: 1,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      touchThreshold: 100
  });

  $(".backtoTop").click(function () {
     $("html, body").animate({scrollTop: 0}, 1000);
  });

  $('a, p, span, h1, h2, h3, h4, h5, h6, label, strong').jfontsize({
    btnMinusClasseId: '.size-decrease',
    btnPlusClasseId: '.size-increase',
    btnMinusMaxHits: 3,
    btnPlusMaxHits: 3,
    sizeChange: 1
  });

  $(".product-item-list").slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

$(".product-slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });

  $('.as-seen-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    asNavFor: '.as-seen-nav-slider'
  });

  $('.as-seen-nav-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.as-seen-text-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  $(".home-section-collection-products").slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });

  $('.testimonials-container').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true
  });
  $('.meta-testimonials-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });

  var tap = ("ontouchstart" in document.documentElement);

  if(!tap){
    var slideTimer;
    $('.as-seen-nav-slider').on('mouseenter', '.slick-slide', function (e) {
        var $currTarget = $(e.currentTarget);
        $('.as-seen-nav-slider .slick-slide').removeClass('slick-current');
        $currTarget.addClass('slick-current');

        slideTimer = setTimeout(function () {
            var index = $('.as-seen-nav-slider').find('.slick-current').data('slick-index');
            var slickObj = $('.as-seen-text-slider').slick('getSlick');
            $('.as-seen-text-slider').slick('pause');
            slickObj.slickGoTo(index);
        }, 100);
    }).on('mouseleave', '.slick-slide', function (e) {
        clearTimeout(slideTimer);
        $('.as-seen-text-slider').slick('play');
    });
  }

  $(".pillar_slider_content > .shg-box-content").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });

  $('.point').hover(
      function () {
          $('.point').removeClass('active');
          $(this).addClass('active');
      }
  )

  $('.footer-bottom strong').on('click', function (e) {
      $(this).parent().toggleClass("active");
  });

  $('.main-sidebar-navigation-toggle').click(function () {
      $('body,html').removeClass('menu-open');
  });

  $('.main-header-menu-item').click(function () {
    $('body,html').toggleClass('menu-open');
    $('#overnav').toggleClass('visible');
    $('.overnav-overlay').toggleClass('visible');
  });

  $('.share').click(function () {
    $('body').addClass('social-popup');
  });

  $('.close-social-share').click(function () {
      $('body').removeClass('social-popup');
  });

  var content = $('.dot-point.active').html();
  $('.mobile-leak-points').html(content);

  $('.dot-point').click(function () {
      var content = $(this).html();
      $('.mobile-leak-points').html(content);
  });

  // Disabled so home page buttons redirect to the page spcified in home-hero section settings 
  // without animating downward before redirect. 10.06.20 - Ryan Koning

  //$('.slide-content .button').click(function() {
  //    $('html, body').animate({
  //        scrollTop: $('.leak-review').offset().top + 30
  //    }, 1000);
  //});

  $('.close-bar').click(function () {
      $('.announcement-bar').slideUp();
      $('body').addClass('hide-announcement');
  });

  $('.product-tabs > li:eq(0) .tab-title').addClass('active').next().slideDown();

  $('.product-tabs .tab-title').click(function (j) {
      var dropDown = $(this).closest('li').find('.tab-content');

      $(this).closest('.product-tabs').find('.tab-content').not(dropDown).slideUp();

      if ($(this).hasClass('active')) {
          $(this).removeClass('active');
      } else {
          $(this).closest('.product-tabs').find('.tab-title.active').removeClass('active');
          $(this).addClass('active');
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
  });
  
  $('.overnav .navigation-parent-item>a').click(function() {
    $(this).toggleClass('active-submenu');
  });
  
  $(function(){
    var url = [window.location.pathname]+[window.location.search];
    if (url != '/' && url !== '/collections') {
      $('.main-navigation-menu a[href^="' + url + '"]').addClass('active-submenu');
      $( ".main-navigation-menu .active-submenu" ).closest( "ul" ).parent().addClass('active');
      $( ".main-navigation-menu .active-submenu" ).closest( 'ul[aria-label="Shop"]' ).parent().addClass('active');
    }
      if (url == '/products/briefs-large') {
          $('.main-navigation-menu a[href^="/products/briefs"]').addClass('active-submenu');
          $( ".main-navigation-menu .active-submenu" ).closest( "ul" ).parent().addClass('active');
      }
  });

  $(document).on("click",".overnav li.active>a",function(e) {
    $(this).parent().removeClass('active');
    $(this).removeClass('active-submenu');
  });

  $('body').on('DOMSubtreeModified', ".main-sidebar-cart-count", function() {
    document.querySelector('.cart-count').innerHTML = $(this).text()
    if ($(this).text() == "0") {
      $(this).hide();
    } else {
      $(this).show();
    }
  });

$("span[pdp-modal-id]").click(function() {
  $("body").addClass("pdp-modal-open");
  var modalBox = $(this).attr('pdp-modal-id');
  $("#" + modalBox).addClass('open');
});

$(".close-icon").click(function () {
  $('body').removeClass('pdp-modal-open');
  $(this).closest('.popup-main').removeClass('open');
});

$('.size-popup-overlay').click(function () {
  $(this).parent().removeClass('open');
  $('body').removeClass('pdp-modal-open');
});

if ($(window).width() < 991) {
  $( ".product-description-details" ).insertBefore( ".new-product-layout .outofstock" );
}

// change comparision subscription 
  
  $('.product-subscription-section input.radio').click(function(){
    let pc_subscription = $(this).val();
    console.log(pc_subscription);
    const selectedVid = $(this).parents('.subscribe-item').data('vid');
    console.log('selectedVid ',selectedVid);
    $(this).parents('.compare-tab').find('input[name="variant_id"]').val(selectedVid);
    if(pc_subscription == 'onetime') {
      $(this).parents('.compare-tab').find('#frequency').val(pc_subscription);
    }else{
      $(this).parents('.compare-tab').find('#frequency').val(8);
    }
  });

});

/*
$(window).on('resize orientationchange', function () {
  productDetailsMob();
});
*/

window.onload = function() {
setTimeout(function() {
  $('#fsb_close').click(function () {
    $('body').removeClass('has-announcement-bar');
  });

  if ($("#fsb_background").length > 0) {
    document.body.className += ' has-announcement-bar';
  }
}, 2000);
$('.mapboxgl-ctrl-geocoder--input').val('');
$('.page-find-specialist #storepoint-container .mapboxgl-ctrl-geocoder input[type=text]').css('color', '#a0a0a0');

function findGorgias() {
  var gorgiasdiv = $("#chat-window");
  if(!gorgiasdiv.length) {
    window.setTimeout(findGorgias,500);
    return;
  }
  
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        if (attributeValue == "gorgias-chat-key-1kd5mhg") { 
          $("#smile-ui-lite-launcher-frame-container").addClass("display-none-important");
        } else {
          $("#smile-ui-lite-launcher-frame-container").removeClass("display-none-important");
        }
      }
    });
  });
  observer.observe(gorgiasdiv[0], {
    attributes: true
  });
}
findGorgias();
}

$(".atcGridSub #quantity").change(function(){
$(this).closest('.atcGridSub').find('.onetime').val('2');
});

$(".atcGridSub").submit(function(e) {
e.preventDefault();
var form = $(this);
var frequency = $(this).find("#frequency").val();
var pid = $(this).find("#product_id").val();
var qty = $(this).find("#quantity").val();
if (frequency == "onetime") {
  data = {
    "id": pid,
    "quantity": qty
  }
} else {
  var variant_id = $(this).find("#variant_id").val();
  var unit_type = $(this).find("#unit_type").val();
  data = {
    "id": variant_id,
    "quantity": qty,
    "properties": {
      "shipping_interval_frequency": frequency,
      "shipping_interval_unit_type": unit_type
    }
  }
}
  console.log('data',data);
jQuery.ajax({
  type: 'POST',
  url: '/cart/add.js',
  data: data,
  dataType: 'json',
  success: function() { 
    window.SLIDECART_UPDATE();
    window.SLIDECART_OPEN();
    jQuery.getJSON('/cart.js', function(cart) {
  		$('.cart-count').html(cart.item_count);
	  });
    console.log(124124214);
  },
  error: function (error) {      
    alert(error.responseJSON['description']);
  }
});
});

$(".atcUpsellSlide").submit(function(e) {
e.preventDefault();
var form = $(this);
var frequency = $(this).find("#frequency").val();
var pid = $(this).find("#product_id").val();
var qty = $(this).find("#quantity").val();
if (frequency == "onetime") {
  data = {
    "id": pid,
    "quantity": qty
  }
} else {
  var variant_id = $(this).find("#variant_id").val();
  var unit_type = $(this).find("#unit_type").val();
  data = {
    "id": variant_id,
    "quantity": qty,
    "properties": {
      "shipping_interval_frequency": frequency,
      "shipping_interval_unit_type": unit_type
    }
  }
}
jQuery.ajax({
  type: 'POST',
  url: '/cart/add.js',
  data: data,
  dataType: 'json',
  success: function() {
    // $('.slideupsell').toggleClass('open');
    window.SLIDECART_UPDATE();
    window.SLIDECART_OPEN();
    jQuery.getJSON('/cart.js', function(cart) {
  		$('.cart-count').html(cart.item_count);
	  });
  }
});
});

$('.slideupsell .close').click(function(){
$('.slideupsell').toggleClass('open');
});

$('.slideupsell .overlay').click(function(){
$('.slideupsell').toggleClass('open');
});

/*
jQuery(".atcGridSub").on("change","input[name='quantity']",function(){
var basePrice = $(this).find('#basePrice').val();
var discPrice = $(this).find('#discPrice').val();
var qty = $(this).find('#quantity').val();
var pp = (discPrice * qty).toFixed(2);
var onetimeprice =  (basePrice * qty).toFixed(2);
console.log(basePrice);
console.log(discPrice);
console.log(qty);
console.log(onetimeprice);
console.log(pp);
$(this).find(".onetime").text(onetimeprice);
$(this).find(".recPrice").text(pp);
});
*/

$('.list-plus-qty').click(function () {
$(this).prev().val(+$(this).prev().val() + 1);
});

$('.list-minus-qty').click(function () {
if ($(this).next().val() > 1) {
  if ( $(this).next().val() > $(this).next().attr('min') ) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
  }
}

});

$('.product-details-header-content .okeReviews-reviewsSummary-ratingCount').click(function() {
  $('html,body').animate({
    scrollTop: $(".okeReviews-widget-holder").offset().top},
    'slow'
  );
});
$('.product-details-header-mobile-content .okeReviews-reviewsSummary-ratingCount').click(function() {
  $('html,body').animate({
    scrollTop: $(".okeReviews-widget-holder").offset().top},
    'slow'
  );
});

// Mod the bundle page as a backup plan
// Mod the Button text
document.addEventListener('DOMContentLoaded', function() {
  // Wait until the widget is likely to have loaded
  setTimeout(function() {
    const buttons = document.querySelectorAll('.rb-btn.tnowrap .rb-notice');
    buttons.forEach(function(button) {
      if (button.textContent.includes('Add 4 - 8 to continue')) {
        button.textContent = 'ADD BUNDLE TO CART';
      }
    });
  }, 1000); // Adjust the timeout as needed
});

//disable input between - +
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.rb-input.tw3.ttc.tmb0');
    inputs.forEach(function(input) {
        input.disabled = true;
    });
});


//BUNDLE SAVE 5.55% ~ 15%
// document.addEventListener('DOMContentLoaded', function() {
//   setTimeout(function() {
//     console.log('Script is running');
//     var dropdown = document.getElementById('selling-plan-list');

//     function updateIncentiveText() {
//         if (dropdown.options[dropdown.selectedIndex].text.trim() !== "Only once") {
//             // Query for the element inside this block where it's expected to exist
//             var incentiveTitle = document.querySelector('.incentive-tier__title');
//             if (incentiveTitle && incentiveTitle.textContent.trim() === "Save 5.55%") {
//                 incentiveTitle.textContent = "Save 15%";
//             }
//         } 
//     }

//     // Add event listener for the 'change' event on the dropdown
//     dropdown.addEventListener('change', updateIncentiveText);

//     // Call updateIncentiveText initially if the page loads with a selection other than 'Only once'
//     updateIncentiveText();

//   }, 1000); // Adjust the timeout as needed
  
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var dropdown = document.getElementById('selling-plan-list');

//     function updateIncentiveText() {
//         // Get the container of the incentive text and quantity
//         var incentiveContainer = document.querySelector('.tflex-l.tdn');

//         if (dropdown.options[dropdown.selectedIndex].text.trim() !== "Only once") {
//             // Hide the container when the selected option is not 'Only once'
//             if (incentiveContainer) incentiveContainer.style.display = 'none';
//         } 
//     }

//     // Add event listener for the 'change' event on the dropdown
//     dropdown.addEventListener('change', updateIncentiveText);

//     // Call updateIncentiveText initially if the page loads
//     updateIncentiveText();
// });

document.addEventListener('click', async (event) => {
  // Проверяем, был ли клик по .cart-full
  if (event.target.closest('.cart-full')) {
    console.log('Клик по .cart-full');
    await handleCartFullClick();
    return;
  }
  if (event.target.closest('.add-to-cart')) {
    console.log('Клик по .cart-full');
    await handleCartFullClick();
    return;
  }
  if (event.target.closest('.rb-btn.tnowrap')) {
    console.log('Клик по .cart-full');
    await handleCartFullClick();
    return;
  }
  if (event.target.closest('.rb-btn.tnowrap')) {
    console.log('Клик по .cart-full');
    await handleCartFullClick();
    return;
  }


  // Проверяем, был ли клик по .product-add-available
  if (event.target.closest('.product-add-available')) {
    console.log('Клик по .product-add-available');
    await handleCartFullClick();
    return;
  }
});

// Обработчик для клика по .cart-full
let retryCount = 0;
const maxRetries = 1;
async function handleCartFullClick() {
  const upsells = document.querySelector('.upsells');
  if (!upsells) {
    if (retryCount < maxRetries) {
      retryCount++;
      console.warn(`Блок upsells не найден, повторяем проверку через 2 секунды... (${retryCount}/${maxRetries})`);
      setTimeout(() => handleCartFullClick(), 1000); // Повторная проверка через 2 секунды
    } else {
      console.error('Превышено количество попыток проверки блока upsells.');
    }
    return;
  }

  retryCount = 0;
  document.querySelectorAll('.custom-product-block').forEach((block) => block.remove());
  // Получение данных корзины
  setTimeout(async () => {
    try {
      const cartData = await getCartData();
      const addedSlideProductIds = new Set();

      cartData.items.forEach((item) => {
        const productId = item.product_id.toString();

        if (window.productData[productId]) {
          const productInfo = window.productData[productId];

          if (addedSlideProductIds.has(productInfo.slide_product_id)) return;
          addedSlideProductIds.add(productInfo.slide_product_id);

          const customBlock = createCustomBlock(productInfo);
          upsells.insertBefore(customBlock, upsells.firstChild);
        }
      });
    } catch (error) {
      console.error('Ошибка получения данных корзины:', error);
    }
  }, 500);


}


// Обработчик для клика по .add-to-cart-list
function handleAddToCartListClick(target) {
  console.log('Обрабатываем клик на .add-to-cart-list:', target);

  // Получение ID продукта из атрибута
  const productId = target.getAttribute('data-product-id');
  if (productId) {
    console.log('Добавляем продукт в корзину:', productId);
    addProductToCart(productId);
  }
}

// Обработчик для клика по .product-add-available
function handleProductAddAvailableClick(target) {
  console.log('Обрабатываем клик на .product-add-available:', target);

  // Получение ID продукта из атрибута
  const productId = target.getAttribute('data-product-id');
  if (productId) {
    console.log('Добавляем продукт в корзину:', productId);
    addProductToCart(productId);
  }
}

// Функция для создания кастомного блока
function createCustomBlock(productInfo) {
  const customBlock = document.createElement('div');
  customBlock.classList.add('custom-product-block');
  customBlock.innerHTML = `
    <h3 class="title">${productInfo.cart_title}</h3>
    <p class="subtitle">${productInfo.cart_subtitle}</p>
    <div class="custom_product_container">
      <div class="cmb_custom-product">
        <img src="${productInfo.slide_image}" alt="${productInfo.slide_product_title}">
      </div>
      <div class="cmd_info_review">
        <div class="cmb_product-info">
          <div class="cmb_product_info_price_btn">
            <h4>${productInfo.slide_product_title}</h4>
            <span>${productInfo.slide_product_price}</span>
          </div>
          <button class="add-to-cart-button" onclick="addProductToCart('${productInfo.slide_product_id}');" data-product-id="${productInfo.slide_product_id}">ADD TO CART</button>
        </div>
        <div class="cmb_review">
          <div class="cmb_verified_buyer">
            <span class="verified-buyer">
              <span class="buyer_name" style="color: black; margin-right: 5px">${productInfo.review_author}</span>
              Verified Buyer
            </span>
          </div>
          <p>⭐⭐⭐⭐⭐</p>
          <p><span class="subtitle">${productInfo.review_title}</span></p>
          <p class="last_review_p">${productInfo.review_text}</p>
        </div>
      </div>
    </div>
  `;
  return customBlock;
}



// Функция для добавления продукта в корзину
async function addProductToCart(productId) {
  console.log(productId);
  try {
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: productId,
        quantity: 1,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Product added:', data);
      window.location.href = window.location.href.split('?')[0] + '?open_cart=true';
    } else {
      throw new Error('Failed to add product to cart');
    }
  } catch (error) {
    console.error('Error adding product to cart:', error);
  }
}

// Функция для получения данных корзины
async function getCartData() {
  try {
    const response = await fetch('/cart.js', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      console.error('Ошибка получения данных корзины');
      return { items: [] };
    }
  } catch (error) {
    console.error('Ошибка:', error);
    return { items: [] };
  }
}
