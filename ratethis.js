!function ($) {
    "use strict";
    var def = {
        'opts': 'Not useful,Meh,Ok,Good,Great',
        'prom': 'Rate this page: ',
        'category': 'website',
        'action': 'rating'
    }

    $('.ratethispage').each(function(i,e){
        var $e = $(e);
        var $hint;
        var opts     = ($e.data('opts')     || def.opts).split(',');
        var prom     =  $e.data('prompt')   || def.prom;
        var category =  $e.data('category') || def.category;
        var action   =  $e.data('action')   || def.action;
 
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
        $e.addClass('alert alert-info').append('<b>'+prom+'</b>');
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
                        _gaq.push(['_trackEvent', category, action, opts[val-1], val]);
                        return false;
                    }
                });
            
        }
        $hint = $('<span> </span>').appendTo($e);
    });
}(window.jQuery);
