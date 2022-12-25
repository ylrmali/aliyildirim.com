//! show details
var detailButton = document.querySelector('#btnShowDetail');
var firstCard = document.querySelector('.firstCard'); 
var hiddenCard = document.querySelector('.hiddenCard');

function showDetails(){
    firstCard.classList.toggle('hiddenCard');
    hiddenCard.classList.toggle('showCard');
}

//! close details
var closeButton = document.querySelector('#btnCloseDetails');

function closeDetails(){    
    hiddenCard.classList.remove('showCard');
    firstCard.classList.remove('hiddenCard');
}
