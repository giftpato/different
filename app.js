/** nav mobile bar **/

const mobille = document.querySelector('#mobb')
    const mobile = document.querySelector('#mobile')
   mobille.addEventListener('click', function(){
    mobile.classList.toggle('menu');
    mobille.classList.toggle('active');
   }
   )

   /** fading out loading **/

   window.onload = fadeIn;
   function fadeIn(){
       var fade = document.getElementById('conn');
       var opacity = 1;
       var intervalId = setInterval(function() {
           if(opacity > 0){
               opacity = opacity - 0.1;
               fade.style.opacity = opacity;
               fade.style.display = "none";
           }else{
               clearInterval(intervalId);
           }
       }, 3000);
   }