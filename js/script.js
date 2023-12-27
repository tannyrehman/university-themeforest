  
 // init Isotope
    var $grid = $('.grid').isotope({
   // options
   });
  // filter items on button click

   $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    // filter items on button active
  
   $('.filter-button-group').on( 'click', 'button', function() {
      $(this).activeClass('active').siblings.removeClass('active');
    });
