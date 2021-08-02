    document.addEventListener('DOMContentLoaded', function () {
    //Добавляем свайпер
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          observer: true,
          observeSlideChildren: true,
          observeParents: true,
        },
    });
        //Устанавливаем табы
    var tabs_items = document.querySelectorAll(".tabs");

    tabs_items.forEach(function (tabs) {
    var controls = tabs.querySelector(".tabs__control");
    var tab = controls.querySelectorAll(".tabs__tab");
    var contents = tabs.querySelector(".tabs__contents");
    var content = contents.querySelectorAll(".tabs__content");

    tab.forEach(function (item) {
        item.onclick = function (e) {
        e.preventDefault();

        var tabId = item.dataset.tab;

        tab.forEach(function (item) {
            if (tabId == item.dataset.tab) {
            item.classList.add("tabs__tab--current");
            item.setAttribute('aria-selected','true');
            item.removeAttribute('tabindex','-1');
            } else {
            item.classList.remove("tabs__tab--current");
            item.setAttribute('aria-selected','false');
            item.setAttribute('tabindex','-1');
            }
        });

        content.forEach(function (item) {
            if (tabId == item.dataset.tabContent) {
            item.classList.add("tabs__content--current");
            item.removeAttribute('hidden','hidden');
            } else {
            item.classList.remove("tabs__content--current");
            item.setAttribute('hidden','hidden');
            }
        });
        };
    });
    });

      $(document).ready(function() {
        $(".header__burger").click(function() {
          $(this).toggleClass("active");
          $('.header__burger-menu').slideToggle(300, function(){
            if($(this).css('display') === "none"){
              $(this).removeAttr('style');
            }
          });
        });
      });
});

