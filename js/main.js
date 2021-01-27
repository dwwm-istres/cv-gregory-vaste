// mettre sur le lien avec la class en js on rajoute un target en js
$().ready(() => {
  // Target blank
  $('.target-blank').each(function() { $(this).attr('target', '_blank'); });

  // Petit bonus un scrollTo !
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    var _target = $(this).attr('href');
    $('html,body').animate({scrollTop: $(_target).offset().top - 150}, 'slow');
  })
});