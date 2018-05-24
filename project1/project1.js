const Cards = {
    playGame: function () {
        Cards.shuffleDeck();

    },

    deck2: [],
    deck: ['A-Heart', '2-Heart', '3-Heart', '4-Heart', '5-Heart', '6-Heart', '7-Heart', '8-Heart', '9-Heart', '10-Heart', 'J-Heart',
     'Q-Heart', 'K-Heart', 'A-Club', '2-Club', '3-Club', '4-Club', '5-Club', '6-Club', '7-Club', '8-Club', '9-Club', '10-Club', 'J-Club', 
     'Q-Club', 'K-Club', 'A-Diamond', '2-Diamond','3-Diamond', '4-Diamond', '5-Diamond', '6-Diamond', '7-Diamond', '8-Diamond', '9-Diamond', 
     '10-Diamond', 'J-Diamond', 'Q-Diamond', 'K-Diamond', 'A-Spade', '2-Spade', '3-Spade', '4-Spade', '5-Spade', '6-Spade', '7-Spade',
      '8-Spade', '9-Spade', '10-Spade', 'J-Spade', 'Q-Spade', 'K-Spade'],
    standCount: 0,
    cardSpot: 0,
    isRunning: false,
    

    shuffleDeck: function () {
        for (let s = Cards.deck2.length; s < 52; s++) {
            let i = Math.floor(Math.random() * Cards.deck.length);
            Cards.deck2.push(Cards.deck[i]);
            Cards.deck.splice(i, 1);
        }
        Cards.deal2CardstoPlayer();
        Cards.deal2CardstoDealer();
    },

    hit: function () {
        if(Cards.standCount == 0){
        if (Player.points < 21) {
            if (Player.hand.length > 1 && Player.hand.length < 6) {
                {
                    let topCard = Cards.deck2[Cards.deck2.length - 1]
                    Player.hand.push(topCard)
                    if (Player.hitCount == 0) {
                        $("#faceDownCard8").attr('src', topCard + ".png")
                    }
                    if (Player.hitCount == 1) {
                        $("#faceDownCard9").attr('src', topCard + ".png")
                    }
                    if (Player.hitCount == 2) {
                        $("#faceDownCard10").attr('src', topCard + ".png")
                    }                    
                    Cards.deck2.pop();                    
                    Player.hitCount = Player.hitCount + 1;
                    Cards.getPlayerPoints();
                    document.getElementById('boxScore').textContent = Player.points.toString();
                    //Cards.determineWinner();
                                       
                     }
            }
        }
        }
       
    },


    hitDealer: function () {
            if (Dealer.hand.length > 1 && Dealer.hand.length < 5) {
                Cards.getDealerPoints();
                if(Dealer.points < 17){
                     console.log('test')
                    for (let dealerUnflippedCards = 0; dealerUnflippedCards < 3; dealerUnflippedCards++) {
                    let topCard = Cards.deck2[Cards.deck2.length - 1]
                    Dealer.hand.push(topCard)
                    if(Dealer.points < 17){
                    if (Dealer.hitCount == 0) {
                        $("#faceDownCard2").attr('src', topCard + ".png")
                     console.log('test1')
                        
                    }
                    else if (Dealer.hitCount == 1) {
                        $("#faceDownCard3").attr('src', topCard + ".png")
                     console.log('test2')
                        
                    }
                    else if (Dealer.hitCount == 2) {
                        $("#faceDownCard4").attr('src', topCard + ".png")
                     console.log('test3')
                        
                    }                 
                    Cards.deck2.pop();
                    Dealer.hitCount = Dealer.hitCount + 1;
                    Cards.determineWinner();                   
                  } 
                }           
            }
        }
    },

    stand: function () {
        Cards.standCount = Cards.standCount + 1;
        Cards.hitDealer(); 
    },

    deal2CardstoPlayer: function () {
        if (Player.hand.length == 0) {
            for (i = Player.cards; i < 2; i++) {
                let topCard = Cards.deck2[Cards.deck2.length - 1]
                Player.hand.push(topCard);
                document.getElementById("faceDownCard6").src = Player.hand[0] + ".png"
                document.getElementById("faceDownCard7").src = Player.hand[1] + ".png"
                Cards.deck2.pop();
            }
            Cards.getPlayerPoints();
            document.getElementById('boxScore').textContent = Player.points.toString();

        }           
    },

    deal2CardstoDealer: function () {
        if (Dealer.hand.length == 0) {
            for (i = Dealer.cards; i < 2; i++) {
                let topCard = Cards.deck2[Cards.deck2.length - 1]
                Dealer.hand.push(topCard);
                Cards.deck2.pop();
                document.getElementById("faceDownCard").src = Dealer.hand[0] + ".png"
            }
        }
    },

    determineWinner: function () {
        console.log("in determine winner")
        if(Dealer.points < 21 && Player.points < 21){
            if (Player.points > Dealer.points) {
                Cards.hitDealer();
                document.getElementById('result').textContent = "you won";
            }
            else if (Dealer.points > Player.points) {
                Cards.hitDealer();
                document.getElementById('result').textContent = "dealer won";
            }
        }

            if(Dealer.points > 21){
                document.getElementById('result').textContent = "Dealer BUSS, You win";            
            }
            else if(Player.points > 21){
                Cards.hitDealer(); 
                document.getElementById('result').textContent = "You BUSS, You lose";            
            }

      
    },

    getPlayerPoints: function () {
        Player.points = 0;
        for (let i = 0; i < Player.hand.length; i++) {
            let cardInHand = Player.hand[i].split("");
            if (cardInHand[0] == "K" || cardInHand[0] == "Q" || cardInHand[0] == "J" || cardInHand[0] == "1") {
                Player.points = Player.points + 10;
            }
            else if (cardInHand[0] > 1 && cardInHand[0] < 10) {
                let cardLowerThanTen = Number(cardInHand[0])
                Player.points = Player.points + cardLowerThanTen;
            }
            else if (cardInHand[0] == "A") {
                if (Player.points > 10) {
                    Player.points = Player.point + 1;
                }
                else {
                    Player.points = Player.points + 11
                }
            } 
        }

        if (Player.points == 21) {
            document.getElementById('result').textContent = "You Won";
        }
        return Player.points;
    },

    startGame: function(){
        Cards.isRunning = true;
        Cards.shuffleDeck();
    },

    getDealerPoints: function () {
        Dealer.points = 0;
        for (let i = 0; i < Dealer.hand.length; i++) {
            let cardInHand = Dealer.hand[i].split("");
            if (cardInHand[0] == "K" || cardInHand[0] == "Q" || cardInHand[0] == "J" || cardInHand[0] == "1") {
                Dealer.points = Dealer.points + 10;
            }
            else if (cardInHand[0] > 1 && cardInHand[0] < 10) {
                let cardLowerThanTen = Number(cardInHand[0])
                Dealer.points = Dealer.points + cardLowerThanTen;
            }
            else if (cardInHand[0] == "A") {
                if (Dealer.points > 10) {
                    Dealer.points = Dealer.point + 1;
                }
                else { 
                    Dealer.points = Dealer.points + 11
                } 
            }
        }
        if (Dealer.points == 21) {
            document.getElementById('result').textContent = "Aww Dealer Won";
        }
        return Dealer.points;
    },
}



const Dealer = {
    cards: 0,
    points: 0,
    hand: [],
    hitCount: 0,

}

const Player = {
    cards: 0,
    points: 0,
    hand: [],
    hitCount: 0,

}

$(document).ready(function () { // doc start
    document.querySelector('#shuffle').addEventListener('click', function () {
        Cards.shuffleDeck();
    })
    document.querySelector('#hit').addEventListener('click', function () {
        Cards.hit();
    })
    document.querySelector('#deal').addEventListener('click', function () {
        Cards.deal2CardstoPlayer();
    })
    document.querySelector('#dealersDeal').addEventListener('click', function () {
        Cards.deal2CardstoDealer();
    })
    document.querySelector('#playersPoint').addEventListener('click', function () {
        Cards.getPlayerPoints();
    })
    document.querySelector('#dealersPoint').addEventListener('click', function () {
        Cards.getDealerPoints();
    })
    document.querySelector('#hitDealer').addEventListener('click', function () {
        Cards.hitDealer();
    })
    document.querySelector('#stand').addEventListener('click', function () {
        Cards.stand();
    })
    document.querySelector('#startGame').addEventListener('click', function () {
        Cards.shuffleDeck();
    })
    

    $('Dealer1stCard').click(function () {
        $('faceDownCard').attr('src', 'A-Club.png');
        })


}) //doc end