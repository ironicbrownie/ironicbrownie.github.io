// popup "Added to Cart" window from detail page
document.getElementById("cart-icon").addEventListener('click', 
function(){
document.querySelector('.popup').style.display = "flex";
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.popup').style.display = "none";
});


// collapsing payment option 1
function myFunction() {
    var x = document.getElementById("PayCollaps");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// side-menu responsive

function openFunction(){
    document.getElementById("nav-menu").style.width="300px";
}

function closeFunction(){
    document.getElementById("nav-menu").style.width="0px";
}
