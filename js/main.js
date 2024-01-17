var toTop = document.querySelector('.to-top');
onscroll=function(){
    if(scrollY >= 750){
        toTop.style.display='block';
    }else{
        toTop.style.display='none'
    }
}
toTop.onclick=function () {
    window.scrollTo({top:0 , behavior:"smooth"});
}