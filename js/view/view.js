export class GameView{
    constructor(model) {
        this.model = model;
    }

    drawCardsRows() {
        for (let i = 0; i < this.model.cards.length; i++) {
            if (this.model.cards[i].isRevealed === false) {
                this.model.cards[i].drawBack();
            } else {
                this.model.cards[i].drawFront();
            }
        }
    }

    updateCardsRows() {
        if (this.model.flippedCards.length === 2) {
            let first = this.model.flippedCards[0];
            let second = this.model.flippedCards[1];

            if (this.model.cards[first].src === this.model.cards[second].src) {
                this.model.flippedCards = [];
                this.model.clickedCard = 0;
            }

            if (this.model.cards[first].src !== this.model.cards[second].src) {
                setTimeout(()=> {
                    this.model.cards[first].isRevealed = false;
                    this.model.cards[second].isRevealed = false;
                    this.model.clickedCard = 0;
                }, 1500);
            }
            this.model.flippedCards = [];
        }
    }
}