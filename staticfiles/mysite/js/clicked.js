document.getElementById('visitors').innerHTML = localStorage.getItem('person');


var button = document.querySelector('#btnShowDetail');
var visitors = document.querySelector('#visitors');

if (localStorage.getItem('clicked') === null){
    localStorage.setItem('clicked',0);
}
else{
    let lastClick = parseInt(localStorage.getItem('clicked'));
    visitors.textContent = lastClick;
}



button.addEventListener('click',()=>{
    var clicked = localStorage.getItem('clicked');
    console.log(clicked);
    var newClick = parseInt(clicked)+1;
    localStorage.setItem('clicked',parseInt(newClick));
    
    let lastClick = parseInt(localStorage.getItem('clicked'));
    visitors.textContent = lastClick;


});


