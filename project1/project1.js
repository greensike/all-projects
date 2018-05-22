const Cards = {
    playGame: function () {
        Cards.shuffleDeck();

    },
    //Math.floor(Math.random() * Cards.deck);

    deck2: [],
    deck: ['A-Heart', '2-Heart', '3-Heart', '4-Heart', '5-Heart', '6-Heart', '7-Heart', '8-Heart', '9-Heart', '10-Heart', 'J-Heart', 'Q-Heart', 'K-Heart',
        'A-Club', '2-Club', '3-Club', '4-Club', '5-Club', '6-Club', '7-Club', '8-Club', '9-Club', '10-Club', 'J-Club', 'Q-Club', 'K-Club', 'A-Diamond', '2-Diamond',
        '3-Diamond', '4-Diamond', '5-Diamond', '6-Diamond', '7-Diamond', '8-Diamond', '9-Diamond', '10-Diamond', 'J-Diamond', 'Q-Diamond', 'K-Diamond'
        , 'A-Spade', '2-Spade', '3-Spade', '4-Spade', '5-Spade', '6-Spade', '7-Spade', '8-Spade', '9-Spade', '10-Spade', 'J-Spade', 'Q-Spade', 'K-Spade'],


    shuffleDeck: function () {
        for (let s = Cards.deck2.length; s < 52; s++) {
            let i = Math.floor(Math.random() * Cards.deck.length);
            Cards.deck2.push(Cards.deck[i]);
            Cards.deck.splice(i, 1);
        }
        console.log(Cards.deck2)
    },

    hit: function () {
    if (Player.cards >= 2 && Player.cards < 5){
        {
        let hitCard = Cards.deck2[Cards.deck2.length -1]
          console.log(hitCard)
          Cards.deck2.pop();
          Player.hand++;
        }
    }
    
    },

    deal2Cards: function () {
        

    },

    flipCardInHand: function () {
    },

    compareCardValue: function () {
    },

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


}) //doc end