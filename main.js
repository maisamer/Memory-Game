document.addEventListener('DOMContentLoaded',()=>{
    cardArray =[
        {
            name:'anime',
            img:'images/anime.png'
        },
        {
            name:'anime',
            img:'images/anime.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'download',
            img:'images/download.png'
        },
        {
            name:'download',
            img:'images/download.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'pancakes',
            img:'images/pancakes.png'
        },
        {
            name:'pancakes',
            img:'images/pancakes.png'
        },
    ]

    cardArray.sort(()=>0.5-Math.random());

    cardsChosen =[];
    cardsChosenId=[];
    cardsWon=[];
    const grid = document.querySelector('.grid')
    const scoreDisplayed = document.querySelector('#score')
    const messageDisplayed = document.querySelector('#message')

    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flibCard);
            grid.appendChild(card);

        }
    }

    function flibCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        if(cardsChosen.length ===2){
            setTimeout(chechForMatch,500)
        }
    }
    function chechForMatch(){
        var cards = document.querySelectorAll('img');
        const optionalOneId = cardsChosenId[0];
        const optionalTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            //alert('You found a match :)')
            cards[optionalOneId].setAttribute('src','images/white.png');
            cards[optionalTwoId].setAttribute('src','images/white.png');
            cards[optionalOneId].style.pointerEvents = 'none';
            cards[optionalTwoId].style.pointerEvents = 'none';
            cardsWon.push(cardsChosen);
        }else{
            cards[optionalOneId].setAttribute('src','images/blank.png');
            cards[optionalTwoId].setAttribute('src','images/blank.png');
            //alert('Sorry :( try again')
        }
        cardsChosen=[];
        cardsChosenId=[];
        scoreDisplayed.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            messageDisplayed.textContent='Congaturation you win...'
        }

    }
    createBoard();




})