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

            let upsellsSlider = upsells.querySelector('.upsells-slider');
            if (!upsellsSlider) {
                upsellsSlider = document.createElement('div');
                upsellsSlider.classList.add('upsells-slider');
                upsells.insertBefore(upsellsSlider, upsells.firstChild);
            }

            let scrollContainer = upsellsSlider.querySelector('.upsells-stacked-container');
            if (!scrollContainer) {
                scrollContainer = document.createElement('div');
                scrollContainer.classList.add('upsells-stacked-container');
                upsellsSlider.appendChild(scrollContainer);
            }

            let sliderTrack = scrollContainer.querySelector('.slider-track');
            if (!sliderTrack) {
                sliderTrack = document.createElement('div');
                sliderTrack.classList.add('slider-track');
                scrollContainer.appendChild(sliderTrack);
            }

            cartData.items.forEach((item) => {
                const productId = item.product_id.toString();
                if (!window.productData[productId]) return;

                const productInfo = window.productData[productId];
                if (addedSlideProductIds.has(productInfo.slide_product_id)) return;
                addedSlideProductIds.add(productInfo.slide_product_id);

                const customBlock = createCustomBlock(productInfo);
                sliderTrack.appendChild(customBlock);
            });

            // ✅ AFTER all slides are added
            requestAnimationFrame(() => {
                const slider = document.querySelector('.upsells-slider');
                const scrollContainer = slider.querySelector('.upsells-stacked-container');
                const track = scrollContainer.querySelector('.slider-track');
                const slides = track.querySelectorAll('.custom-product-block');

                // Setup drag
                let isDown = false;
                let startX;
                let scrollLeft;

                scrollContainer.addEventListener('mousedown', (e) => {
                    isDown = true;
                    scrollContainer.classList.add('dragging');
                    startX = e.pageX - scrollContainer.offsetLeft;
                    scrollLeft = scrollContainer.scrollLeft;
                });

                scrollContainer.addEventListener('mouseleave', () => {
                    isDown = false;
                    scrollContainer.classList.remove('dragging');
                });

                scrollContainer.addEventListener('mouseup', () => {
                    isDown = false;
                    scrollContainer.classList.remove('dragging');
                });

                scrollContainer.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - scrollContainer.offsetLeft;
                    const walk = x - startX;
                    scrollContainer.scrollLeft = scrollLeft - walk;
                });

                scrollContainer.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
                    scrollLeft = scrollContainer.scrollLeft;
                });

                scrollContainer.addEventListener('touchmove', (e) => {
                    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
                    const walk = x - startX;
                    scrollContainer.scrollLeft = scrollLeft - walk;
                });

                if (!slider.querySelector('.slider-arrow')) {
                    const leftArrow = document.createElement('button');
                    leftArrow.className = 'slider-arrow left';
                    leftArrow.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    `;

                    const rightArrow = document.createElement('button');
                    rightArrow.className = 'slider-arrow right';
                    rightArrow.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    `;

                    const dotsContainer = document.createElement('div');
                    dotsContainer.className = 'slider-dots';

                    slides.forEach((_, index) => {
                        const dot = document.createElement('div');
                        dot.className = 'slider-dot';
                        if (index === 0) dot.classList.add('active');
                        dot.addEventListener('click', () => {
                            scrollContainer.scrollTo({ left: index * (330 + 16), behavior: 'smooth' });
                        });
                        dotsContainer.appendChild(dot);
                    });

                    slider.appendChild(leftArrow);
                    slider.appendChild(rightArrow);
                    slider.appendChild(dotsContainer);

                    leftArrow.addEventListener('click', () => {
                        scrollContainer.scrollBy({ left: -(330 + 16), behavior: 'smooth' });
                    });

                    rightArrow.addEventListener('click', () => {
                        scrollContainer.scrollBy({ left: (330 + 16), behavior: 'smooth' });
                    });

                    scrollContainer.addEventListener('scroll', () => {
                        const scrollLeft = scrollContainer.scrollLeft;
                        const slideWidth = 330 + 16;
                        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

                        // Use Math.round for dot index but clamp it
                        let index = 0;
                        let closestDistance = Infinity;

                        slides.forEach((slide, i) => {
                            const slideOffset = slide.offsetLeft;
                            const distance = Math.abs(slideOffset - scrollLeft);
                            if (distance < closestDistance) {
                                closestDistance = distance;
                                index = i;
                            }
                        });

                        const dots = slider.querySelectorAll('.slider-dot');

                        // Track visible slide using IntersectionObserver
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    const index = Array.from(slides).indexOf(entry.target);
                                    dots.forEach(dot => dot.classList.remove('active'));
                                    if (dots[index]) dots[index].classList.add('active');
                                }
                            });
                        }, {
                            root: scrollContainer,
                            threshold: 0.6, // slide must be 60% in view to count
                        });

                        // Observe all slides
                        slides.forEach(slide => observer.observe(slide));

                        // Arrow visibility logic using precise scroll values
                        leftArrow.style.opacity = scrollLeft <= 0 ? '0.5' : '1';
                        rightArrow.style.opacity = scrollLeft >= maxScrollLeft - 2 ? '0.5' : '1';
                    });

                    // Hide arrows/dots if only one slide
                    if (slides.length <= 1) {
                        leftArrow.style.display = 'none';
                        rightArrow.style.display = 'none';
                        dotsContainer.style.display = 'none';
                    }

                    // Force initial sync
                    scrollContainer.dispatchEvent(new Event('scroll'));
                }

                if (slides.length === 1) {
                    slides[0].style.width = '100%';
                    slides[0].style.flex = '0 0 100%';
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
    <div class="custom_product_title">
        <h3 class="title">${productInfo.cart_title}</h3>
        <p class="subtitle">${productInfo.cart_subtitle}</p>
    </div>
    <div class="custom_product_container">
      <div class="cmb_custom-product">
        <img src="${productInfo.slide_image}" alt="${productInfo.slide_product_title}">
      </div>
      <div class="cmd_info_review">
        <div class="cmb_product-info">
          <div class="cmb_product_info_price_btn">
            <div class="cmb_product_info_reviews">
                <svg xmlns="http://www.w3.org/2000/svg" width="69" height="12" viewBox="0 0 69 12" fill="none">
                    <path d="M5.33614 9.29591L2.49785 11.0098C2.41445 11.051 2.33704 11.0677 2.26563 11.0599C2.19474 11.0515 2.12567 11.027 2.05843 10.9864C1.99066 10.9447 1.93958 10.8858 1.90518 10.8097C1.87077 10.7336 1.86765 10.6504 1.89579 10.5602L2.65111 7.34664L0.152946 5.18079C0.0825757 5.12345 0.0361832 5.0549 0.0137688 4.97515C-0.00864556 4.8954 -0.00369351 4.81903 0.0286249 4.74605C0.0609433 4.67308 0.103948 4.61313 0.157638 4.56622C0.211849 4.52087 0.284827 4.49011 0.376569 4.47395L3.67305 4.18622L4.95848 1.14307C4.99393 1.05706 5.04501 0.995033 5.11174 0.956981C5.17846 0.918928 5.25326 0.899902 5.33614 0.899902C5.41902 0.899902 5.49408 0.918928 5.56133 0.956981C5.62857 0.995033 5.67939 1.05706 5.7138 1.14307L6.99923 4.18622L10.2949 4.47395C10.3872 4.48959 10.4604 4.52061 10.5146 4.567C10.5689 4.61287 10.6121 4.67255 10.6444 4.74605C10.6762 4.81903 10.6809 4.8954 10.6585 4.97515C10.6361 5.0549 10.5897 5.12345 10.5193 5.18079L8.02117 7.34664L8.77649 10.5602C8.80568 10.6494 8.80281 10.7323 8.76789 10.8089C8.73296 10.8855 8.68162 10.9444 8.61385 10.9856C8.54713 11.0273 8.47806 11.0521 8.40665 11.0599C8.33576 11.0677 8.25861 11.051 8.17521 11.0098L5.33614 9.29591Z" fill="black"/>
                    <path d="M19.9182 9.29591L17.0799 11.0098C16.9965 11.051 16.9191 11.0677 16.8477 11.0599C16.7768 11.0515 16.7077 11.027 16.6405 10.9864C16.5727 10.9447 16.5216 10.8858 16.4872 10.8097C16.4528 10.7336 16.4497 10.6504 16.4778 10.5602L17.2331 7.34664L14.735 5.18079C14.6646 5.12345 14.6182 5.0549 14.5958 4.97515C14.5734 4.8954 14.5783 4.81903 14.6107 4.74605C14.643 4.67308 14.686 4.61313 14.7397 4.56622C14.7939 4.52087 14.8669 4.49011 14.9586 4.47395L18.2551 4.18622L19.5405 1.14307C19.576 1.05706 19.627 0.995033 19.6938 0.956981C19.7605 0.918928 19.8353 0.899902 19.9182 0.899902C20.0011 0.899902 20.0761 0.918928 20.1434 0.956981C20.2106 0.995033 20.2614 1.05706 20.2958 1.14307L21.5813 4.18622L24.877 4.47395C24.9692 4.48959 25.0425 4.52061 25.0967 4.567C25.1509 4.61287 25.1942 4.67255 25.2265 4.74605C25.2583 4.81903 25.263 4.8954 25.2405 4.97515C25.2181 5.0549 25.1717 5.12345 25.1014 5.18079L22.6032 7.34664L23.3585 10.5602C23.3877 10.6494 23.3848 10.7323 23.3499 10.8089C23.315 10.8855 23.2636 10.9444 23.1959 10.9856C23.1292 11.0273 23.0601 11.0521 22.9887 11.0599C22.9178 11.0677 22.8406 11.051 22.7572 11.0098L19.9182 9.29591Z" fill="black"/>
                    <path d="M34.5 9.29591L31.6617 11.0098C31.5783 11.051 31.5009 11.0677 31.4295 11.0599C31.3586 11.0515 31.2895 11.027 31.2222 10.9864C31.1545 10.9447 31.1034 10.8858 31.069 10.8097C31.0346 10.7336 31.0315 10.6504 31.0596 10.5602L31.8149 7.34664L29.3168 5.18079C29.2464 5.12345 29.2 5.0549 29.1776 4.97515C29.1552 4.8954 29.1601 4.81903 29.1924 4.74605C29.2248 4.67308 29.2678 4.61313 29.3215 4.56622C29.3757 4.52087 29.4486 4.49011 29.5404 4.47395L32.8369 4.18622L34.1223 1.14307C34.1577 1.05706 34.2088 0.995033 34.2756 0.956981C34.3423 0.918928 34.4171 0.899902 34.5 0.899902C34.5828 0.899902 34.6579 0.918928 34.7251 0.956981C34.7924 0.995033 34.8432 1.05706 34.8776 1.14307L36.1631 4.18622L39.4587 4.47395C39.551 4.48959 39.6242 4.52061 39.6785 4.567C39.7327 4.61287 39.7759 4.67255 39.8083 4.74605C39.8401 4.81903 39.8447 4.8954 39.8223 4.97515C39.7999 5.0549 39.7535 5.12345 39.6832 5.18079L37.185 7.34664L37.9403 10.5602C37.9695 10.6494 37.9666 10.7323 37.9317 10.8089C37.8968 10.8855 37.8454 10.9444 37.7777 10.9856C37.7109 11.0273 37.6419 11.0521 37.5705 11.0599C37.4996 11.0677 37.4224 11.051 37.339 11.0098L34.5 9.29591Z" fill="black"/>
                    <path d="M49.082 9.29591L46.2437 11.0098C46.1603 11.051 46.0829 11.0677 46.0115 11.0599C45.9406 11.0515 45.8715 11.027 45.8043 10.9864C45.7365 10.9447 45.6854 10.8858 45.651 10.8097C45.6166 10.7336 45.6135 10.6504 45.6416 10.5602L46.397 7.34664L43.8988 5.18079C43.8284 5.12345 43.782 5.0549 43.7596 4.97515C43.7372 4.8954 43.7422 4.81903 43.7745 4.74605C43.8068 4.67308 43.8498 4.61313 43.9035 4.56622C43.9577 4.52087 44.0307 4.49011 44.1224 4.47395L47.4189 4.18622L48.7043 1.14307C48.7398 1.05706 48.7909 0.995033 48.8576 0.956981C48.9243 0.918928 48.9991 0.899902 49.082 0.899902C49.1649 0.899902 49.2399 0.918928 49.3072 0.956981C49.3744 0.995033 49.4252 1.05706 49.4596 1.14307L50.7451 4.18622L54.0408 4.47395C54.133 4.48959 54.2063 4.52061 54.2605 4.567C54.3147 4.61287 54.358 4.67255 54.3903 4.74605C54.4221 4.81903 54.4268 4.8954 54.4044 4.97515C54.3819 5.0549 54.3356 5.12345 54.2652 5.18079L51.767 7.34664L52.5223 10.5602C52.5515 10.6494 52.5487 10.7323 52.5137 10.8089C52.4788 10.8855 52.4275 10.9444 52.3597 10.9856C52.293 11.0273 52.2239 11.0521 52.1525 11.0599C52.0816 11.0677 52.0045 11.051 51.9211 11.0098L49.082 9.29591Z" fill="black"/>
                    <path d="M63.6638 9.29591L60.8255 11.0098C60.7421 11.051 60.6647 11.0677 60.5933 11.0599C60.5224 11.0515 60.4533 11.027 60.3861 10.9864C60.3183 10.9447 60.2672 10.8858 60.2328 10.8097C60.1984 10.7336 60.1953 10.6504 60.2234 10.5602L60.9787 7.34664L58.4806 5.18079C58.4102 5.12345 58.3638 5.0549 58.3414 4.97515C58.319 4.8954 58.3239 4.81903 58.3563 4.74605C58.3886 4.67308 58.4316 4.61313 58.4853 4.56622C58.5395 4.52087 58.6125 4.49011 58.7042 4.47395L62.0007 4.18622L63.2861 1.14307C63.3216 1.05706 63.3727 0.995033 63.4394 0.956981C63.5061 0.918928 63.5809 0.899902 63.6638 0.899902C63.7467 0.899902 63.8217 0.918928 63.889 0.956981C63.9562 0.995033 64.007 1.05706 64.0414 1.14307L65.3269 4.18622L68.6226 4.47395C68.7148 4.48959 68.7881 4.52061 68.8423 4.567C68.8965 4.61287 68.9398 4.67255 68.9721 4.74605C69.0039 4.81903 69.0086 4.8954 68.9861 4.97515C68.9637 5.0549 68.9173 5.12345 68.847 5.18079L66.3488 7.34664L67.1041 10.5602C67.1333 10.6494 67.1304 10.7323 67.0955 10.8089C67.0606 10.8855 67.0093 10.9444 66.9415 10.9856C66.8748 11.0273 66.8057 11.0521 66.7343 11.0599C66.6634 11.0677 66.5862 11.051 66.5028 11.0098L63.6638 9.29591Z" fill="black"/>
                </svg>
                <span>${productInfo.okendo_reviews} Reviews</span>
            </div>
            <h4>${productInfo.slide_product_title}</h4>
            <span>${productInfo.slide_product_price}</span>
          </div>
        </div>
        <div class="cmb_review">
          <div class="cmb_verified_buyer">
            <span class="verified-buyer">
              <span class="buyer_name">${productInfo.review_author}</span>
              Verified Buyer
            </span>
          </div>
          <p><span class="subtitle">${productInfo.review_title}</span></p>
          <p class="last_review_p">${productInfo.review_text}</p>
        </div>
        <button class="add-to-cart-button" onclick="addProductToCart('${productInfo.slide_product_id}');" data-product-id="${productInfo.slide_product_id}">ADD TO CART</button>
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
