'use strict';
/*global $*/
function main(){
    bookmark.handleUrl()
    api.getpages().then((pages)=>{pages.forEach(page=>store.addItem(page));
    bookmark.render();})


}
$(main);