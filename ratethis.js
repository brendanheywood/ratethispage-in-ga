!function ($) {
    "use strict";
    var opts=['Not useful','Meh','Ok','Good','Great']; 

    $('.ratethispage').each(function(i,e){

        function show(n){
            n = n || 0;
            $hint.text(' '+(opts[n-1] || ''));
            if (n){
                $e.find('i:lt('+(n)+')').attr('class','icon-star');
                $e.find('i:gt('+(n-1)+')').attr('class','icon-star-empty');
            } else {
                $e.find('i').attr('class','icon-star-empty');
            }
        }
        var $e = $(e);
        $e.addClass('alert alert-info').append('<b>Rate this page: </b>');
        var $hint;
        for(var c=0;c<opts.length; c++){
            $('<a href="#" data-val="'+(c+1)+'"><i class="icon-star-empty" ></i></a>')
                .appendTo($e)
                .on({
                    'mouseover': function(){
                        var val = $(this).data('val');
                        show(val);
                    },
                    'mouseout': function(){
                        show();
                    },
                    'click': function(){
                        var val = $(this).data('val');
                        $e.addClass('alert-success').removeClass('alert-info');
                        $e.find('a').unbind().removeAttr('href');
                        show(val);
                        return false;
                    }
                });
            
        }
        $hint = $('<span> </span>').appendTo($e);
    });
}(window.jQuery);
