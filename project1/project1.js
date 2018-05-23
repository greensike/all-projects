const Cards = {
    playGame: function () {
        Cards.shuffleDeck();

    },
    //Math.floor(Math.random() * Cards.deck);

    hearts: [],
    clubs: [],
    diamond: [],
    spade: [],
    deck2: [],
    deck: ['A-Heart', '2-Heart', '3-Heart', '4-Heart', '5-Heart', '6-Heart', '7-Heart', '8-Heart', '9-Heart', '10-Heart', 'J-Heart', 'Q-Heart', 'K-Heart', 'A-Club', '2-Club', '3-Club', '4-Club', '5-Club', '6-Club', '7-Club', '8-Club', '9-Club', '10-Club', 'J-Club', 'Q-Club', 'K-Club', 'A-Diamond', '2-Diamond',
        '3-Diamond', '4-Diamond', '5-Diamond', '6-Diamond', '7-Diamond', '8-Diamond', '9-Diamond', '10-Diamond', 'J-Diamond', 'Q-Diamond', 'K-Diamond', 'A-Spade', '2-Spade', '3-Spade', '4-Spade', '5-Spade', '6-Spade', '7-Spade', '8-Spade', '9-Spade', '10-Spade', 'J-Spade', 'Q-Spade', 'K-Spade'],



    shuffleDeck: function () {
        for (let s = Cards.deck2.length; s < 52; s++) {
            let i = Math.floor(Math.random() * Cards.deck.length);
            Cards.deck2.push(Cards.deck[i]);
            Cards.deck.splice(i, 1);
        }
        console.log(Cards.deck2)
    },

    hit: function () {
        if (Player.hand.length > 1 && Player.hand.length < 5) {
            {
                let topCard = Cards.deck2[Cards.deck2.length - 1]
                Player.hand.push(topCard)
                console.log(topCard)
                console.log(typeof topCard);
                console.log(Player.hand)
                Cards.deck2.pop();
            }
            Player.points = 0;
        }
    },

    hitDealer: function () {
        if (Dealer.hand.length > 1 && Dealer.hand.length < 5) {
            {
                let topCard = Cards.deck2[Cards.deck2.length - 1]
                Dealer.hand.push(topCard)
                console.log(topCard)
                console.log(typeof topCard);
                console.log(Dealer.hand)
                Cards.deck2.pop();
            }
            Dealer.points = 0;
        }
    },

    stand: function () {
        hitDealer();
    },



    deal2CardstoPlayer: function () {
        for (i = Player.cards; i < 2; i++) {
            let topCard = Cards.deck2[Cards.deck2.length - 1]
            Player.hand.push(topCard);
            Cards.deck2.pop();
        }
        console.log(Cards.deck2);
        console.log(Player.hand);
    },

    deal2CardstoDealer: function () {
        for (i = Dealer.cards; i < 2; i++) {
            let topCard = Cards.deck2[Cards.deck2.length - 1]
            Dealer.hand.push(topCard);
            Cards.deck2.pop();
        }
        console.log(Cards.deck2);
        console.log(Dealer.hand);
    },

    determineWinner: function () {
        if(Player.points > Dealer.points){
            console.log("you won")
        }

        else if (Dealer.points > Player.points) {
            console.log("dealer win")
        }
    },

    getPlayerPoints: function () {
        for (let i = 0; i < Player.hand.length; i++) {
            let cardInHand = Player.hand[i].split("");
            if (cardInHand[0] == "K" || cardInHand[0] == "Q" || cardInHand[0] == "J" || cardInHand[0] == "1") {
                Player.points = Player.points + 10;
                
            }
            else if (cardInHand[0] > 1 && cardInHand[0] < 10) {
                let cardLowerThanTen = Number(cardInHand[0])
                Player.points = Player.points + cardLowerThanTen;
            }
            else if (cardInHand[0] == "A"){
                if(Player.points > 10){
                    Player.points = Players.point +1;
                }
                else {
                    Player.points = Player.points + 11
                }
            }
        }
        console.log(Player.points)
    },


    getDealerPoints: function () {
        for (let i = 0; i < Dealer.hand.length; i++) {
            let cardInHand = Dealer.hand[i].split("");
            if (cardInHand[0] == "K" || cardInHand[0] == "Q" || cardInHand[0] == "J" || cardInHand[0] == "1") {
                Dealer.points = Dealer.points + 10;
            }
            else if (cardInHand[0] > 1 && cardInHand[0] < 10) {
                let cardLowerThanTen = Number(cardInHand[0])
                Dealer.points = Dealer.points + cardLowerThanTen;
            }
            else if (cardInHand[0] == "A"){
                if(Dealer.points > 10){
                    Dealer.points = Dealer.point +1;
                }
                else if(Dealer.points < 10){
                    Dealer.points = Dealer.points + 11
                }
            }
        }
        console.log(Dealer.points)
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


}) //doc end