const toTop= document.querySelector('.to-top');

document.addEventListener('scroll', function(){
    if(window.pageYOffset>200){
        toTop.classList.add('active');
     
    }else{
        toTop.classList.remove('active');
    }
})