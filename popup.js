(function($){
  window.assemblaContent = false;
  var handleKeydown = function(e){
    if(window.assemblaContent !== false){
      if(e.keyCode == 8){
        $('#new-comment').val(window.assemblaContent);
      }
      window.assemblaContent = false; 
    }
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
          var text = $('#new-comment').val();
          $(first).trigger('click');
          window.assemblaContent = text;
        }
      }
    }
  }
  document.addEventListener('keydown', handleKeydown, false);
})(jQuery);
