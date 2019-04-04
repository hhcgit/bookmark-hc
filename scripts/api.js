'use strict';
const api=function(){
    const baseUrl='https://thinkful-list-api.herokuapp.com/hhc/bookmarks';
    const getpages= function(){
        return fetch(baseUrl,{
            method:"GET"
        };
    };
    const submitUrl=function(name,url){
        const addin= store.createObj(name,url);
        addin=JSON.stringify(addin);
        return fetch(baseUrl,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            addin
        });
    };
    const gettitle= function (url){

    }
    return {
        getpages,
        submitUrl
    };
}