(function($){
  var handleKeydown = function(e){
    if($('#auto_list').css('display') == 'block'){
      if(e.keyCode == 9 ){
        var first = $('#auto_list li').first()[0];
        var selected = false;
        $('#auto_list li').each(function(){
           if($(this).hasClass('selected')){
             first = $(this)[0];
             return
           }
        })
        if($(first).attr('data-value') != '@members'){
          e.preventDefault();
          $(first).trigger('click');
        }
      }
    }
  }
  document.addEventListener('keydown', handleKeydown, false);
})(jQuery);
