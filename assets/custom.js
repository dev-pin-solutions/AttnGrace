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


document.querySelector('.cart-full').addEventListener('click', () => {

  if(!document.querySelector('.custom-product-block')) {
  const customBlock = document.createElement('div');
  customBlock.classList.add('custom-product-block');

  customBlock.innerHTML = `
        <h3 class="title">Nourish Your Skin, Naturally</h3>
        <p class="subtitle">Delivers deep hydration with a lightweight, fast-absorbing formula, leaving your skin silky smooth and radiant—every day.</p>
        <div class="custom_product_container">
            <div class="cmb_custom-product">
                <img src="https://cdn.shopify.com/s/files/1/0350/7706/2795/files/BODYOILPDP_NOTYPO.001_1.png?v=1737039536" alt="Daily Renew Body Oil">
            
            </div>
            <div class="cmd_info_review">
               <div class="cmb_product-info">
                  <div class="cmb_product_info_price_btn">
                    <h4>Daily Renew Body Oil</h4>
                    <span>$25.00</span>
                  </div>
                  <button class="add-to-cart-button">ADD TO CART</button>
              </div>
              <div class="cmb_review">
                  <div class="cmb_verified_buyer"> <span class="verified-buyer"><span class="buyer_name" style="color: black; margin-right: 5px">Joan F.</span>Verified Buyer
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 14C6.03385 14 5.12695 13.8177 4.2793 13.4531C3.42253 13.0885 2.67741 12.5895 2.04395 11.9561C1.41048 11.3226 0.911458 10.5775 0.546875 9.7207C0.182292 8.87305 0 7.96615 0 7C0 6.03385 0.182292 5.12695 0.546875 4.2793C0.911458 3.42253 1.41048 2.67741 2.04395 2.04395C2.67741 1.41048 3.42253 0.911458 4.2793 0.546875C5.12695 0.182292 6.03385 0 7 0C7.96615 0 8.87305 0.182292 9.7207 0.546875C10.5775 0.911458 11.3226 1.41048 11.9561 2.04395C12.5895 2.67741 13.0885 3.42253 13.4531 4.2793C13.8177 5.12695 14 6.03385 14 7C14 7.96615 13.8177 8.87305 13.4531 9.7207C13.0885 10.5775 12.5895 11.3226 11.9561 11.9561C11.3226 12.5895 10.5775 13.0885 9.7207 13.4531C8.87305 13.8177 7.96615 14 7 14ZM10.0215 3.86914L5.87891 7.99805L3.91016 6.04297L2.625 7.32812L5.87891 10.5684L11.3066 5.1543L10.0215 3.86914Z" fill="#0075FF"/>
                    </svg></span>
                    </div>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p><span class="subtitle">Another Reason To Love My Body Oil</span></p>
                  <p class="last_review_p">I found many of my friends were being bitten by mosquitoes while we were having lunch out in the garden except me.</p>
              </div>
            </div>
           
        </div>
        
    `;

  const upsells = document.querySelector('.upsells');
  console.log(upsells);
  if (upsells) {
    upsells.insertBefore(customBlock, upsells.firstChild);
  }

  const addToCartButton = customBlock.querySelector('.add-to-cart-button');
  addToCartButton.addEventListener('click', () => {
    const productId = '42258447925502'; // ID продукта
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: productId,
        quantity: 1
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add product to cart');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Product added:', data);
        window.location.href = window.location.href.split('?')[0] + '?open_cart=true';
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  });
  }
});




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
