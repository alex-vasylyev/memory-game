import Card from "../card/card.js";

export class GameController {
    constructor(view, model, utils) {
        this.view = view;
        this.model = model;
        this.utils = utils;
    }

    prepareGame() {
        this.model.ctx = this.model.canvas.getContext('2d');
        this.model.shuffledImages = this.utils.shuffleCards(this.model.images);

        // fill the array with cards
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 4; j++) {
                this.model.cards.push(new Card({x: i * 150, y: j * 150, size: 140, src: this.model.shuffledImages.pop(), context: this.model.ctx}));
            }
        }

        document.addEventListener("click", (e)=>{
            const rect = this.model.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            for (let i = 0; i < this.model.cards.length; i++) {
                if (this.model.clickedCard <= 1 && this.model.cards[i].is_selected(mouseX, mouseY) && this.model.cards[i].isRevealed !== true) {
                    this.model.cards[i].isRevealed = true;
                    this.model.flippedCards.push(i);
                    this.model.clickedCard++;
                }
            }
        });
    }
    checkTheEnd() {
        for (let i = 0; i < this.model.cards.length; i++) {
            if (this.model.cards[i].isRevealed === true) {
                this.model.endAmount++;
            }
        }
        if (this.model.endAmount == this.model.cards.length) {
            this.model.ctx.font = "72px serif";
            this.model.ctx.fillStyle = "white";
            this.model.ctx.fillText("The game is finished.", 50, 200);
        }
        this.model.endAmount = 0;
    }
}