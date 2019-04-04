'use strict';
/*global $*/
const bookmark = (function(){
    const handleUrl= function(){
        $('.url-input').on('submit', function(event){
            event.preventDefault();
            const newUrl=$('.url-input').val();
            $(.url-input).val('');
            
        })
    }
})();