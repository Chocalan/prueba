$(function(){

  $("a").click(function(event){
    if(this.hash !=="");{
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });
  $('[data-toggle="popover"]').popover();
  $('#modalmeet').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $('[data-toggle="popover"]').popover();
  $('#iguana').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $('[data-toggle="popover"]').popover();
  $('#suricata').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

});

$(function () {
  $('[data-toggle="popover"]').popover()
})
