let shareButton = document.querySelector(" spaan i");
const  text = document.querySelector(" .content .text");

shareButton.addEventListener("click", function(e){
    e.preventDefault();
    text.style.dispaly = 'block';
    shareButton.style.dispaly= 'none';
})