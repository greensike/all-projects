const Cards = {
    playGame: function () {
        Cards.shuffleDeck();

    },
    //Math.floor(Math.random() * Cards.deck);

    hearts:[],
    clubs:[],
    diamond:[],
    spade:[],
    deck2: [],
    deck: ['A-Heart', '2-Heart', '3-Heart', '4-Heart', '5-Heart', '6-Heart', '7-Heart', '8-Heart', '9-Heart', '10-Heart', 'J-Heart', 'Q-Heart', 'K-Heart','A-Club', '2-Club', '3-Club', '4-Club', '5-Club', '6-Club', '7-Club', '8-Club', '9-Club', '10-Club', 'J-Club', 'Q-Club', 'K-Club','A-Diamond', '2-Diamond',
    '3-Diamond', '4-Diamond', '5-Diamond', '6-Diamond', '7-Diamond', '8-Diamond', '9-Diamond', '10-Diamond', 'J-Diamond', 'Q-Diamond', 'K-Diamond','A-Spade', '2-Spade', '3-Spade', '4-Spade', '5-Spade', '6-Spade', '7-Spade', '8-Spade', '9-Spade', '10-Spade', 'J-Spade', 'Q-Spade', 'K-Spade'],
        


    shuffleDeck: function () {
        for (let s = Cards.deck2.length; s < 52; s++) {
            let i = Math.floor(Math.random() * Cards.deck.length);
            Cards.deck2.push(Cards.deck[i]);
            Cards.deck.splice(i, 1);
        }
        console.log(Cards.deck2)
    },

    hit: function () {
    if (Player.hand.length >= 2 && Player.hand.length < 5){
        {
        let topCard = Cards.deck2[Cards.deck2.length -1]
        Player.hand.push(topCard)
          console.log(topCard)
          console.log(typeof topCard);      
        Cards.deck2.pop();
          Player.hand++;
        }
    }
    },


    deal2CardstoPlayer: function (){
        for (i = Player.cards; i < 2; i++){
            let topCard = Cards.deck2[Cards.deck2.length -1]
            Player.hand.push(topCard);
            Cards.deck2.pop();    
        }
        console.log(Cards.deck2);
        console.log(Player.hand);
    },

    deal2CardstoDealer: function (){
        for (i = Dealer.cards; i < 2; i++){
            let topCard = Cards.deck2[Cards.deck2.length -1]
            Dealer.hand.push(topCard);
            Cards.deck2.pop();    
        }
        console.log(Cards.deck2);
        console.log(Dealer.hand);
    },
    
    getValueOfCardLessThanTen: function(){
        for (let i = 0; i < Player.hand.length; i++) {
                    let cardInHand = Player.hand[i].split("");
                    if (cardInHand[0] >  1 && cardInHand[0] < 10){
                        let cardLowerThanTen = Number(cardInHand[0])
                        Player.points = Player.points + cardLowerThanTen;
                        console.log(Player.points)   
                    }
                }
    },

    getValueOfFaceCard: function(){
        for (let i = 0; i < Player.hand.length; i++) {
            let cardInHand = Player.hand[i].split("");
            if (cardInHand[0] == "K","Q","J","1"){
                Player.points = Player.points + 10;
                console.log(Player.points)
            }
        }
    },

    getPlayerPoints: function () {   
        
        
            
        }
    }


const Dealer = {
    cards: 0,
    points: 0,
    hand: [],

}


const Player = {
    cards: 0,
    points: 0,
    hand: [],

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


}) //doc end