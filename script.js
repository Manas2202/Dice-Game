var activePlayer , roundScore , scores , gameState;

init();

document.querySelector(".btn--roll").addEventListener('click',function(){

    if(gameState){
        var dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').style.display = 'block';

        if(dice !== 1){
            document.querySelector('.dice').src = 'dice-' + dice + '.png';
            roundScore += dice;
            document.querySelector("#current--" + activePlayer).textContent = roundScore;
        }else{
            document.getElementById("current--" + activePlayer).textContent = '0';
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--active');
        }
    }
    

});

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gameState){
        scores[activePlayer] += roundScore;
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
        roundScore = 0;
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        document.querySelector('#current--' + activePlayer).textContent = roundScore; 
        document.querySelector('.dice').style.display = 'none';
        
        if(scores[activePlayer] >= 20){
            document.querySelector('#name--' + activePlayer).classList.add('player--winner');
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!!!';
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            gameState = false;
        }else{
            activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
            document.querySelector('.player--' + activePlayer).classList.add('player--active');
        }
    }
    
    
    
});

document.querySelector('.btn--new').addEventListener('click',init);


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameState = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById("score--0").textContent = '0';
    document.getElementById("score--1").textContent = '0';
    document.getElementById("current--0").textContent = '0';
    document.getElementById("current--1").textContent = '0';
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');

}
