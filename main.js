const swiper = new Swiper('.swiper-container', {
    // цикличность
    loop: true,
  
    //Пагианция
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    a11y: {
        paginationBulletMessage: 'Тут название слайда {{index}}',
    }
  });

  