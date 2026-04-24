import {Deck} from "./deck.ts";
import {Card} from "./cards.ts";

export class Game {
    private deck: Deck;
    private currentCard: Card | null = null;

    public constructor() {
        this.deck = new Deck();
    }

    public play() {
        this.currentCard = this.deck.draw();
        if (this.currentCard === null) {
            console.log("No more cards in the deck!");
            return;
        }
        console.log(this.currentCard);

        let guess = prompt("Will the next card be higher (h) or lower (l)?", "h/l")
        if (guess === null) {
            console.log("Game cancelled.");
            return;
        }
        if (guess !== "h" && guess !== "l") {
            console.log("Invalid input. Please enter 'h' or 'l'.");
            return;
        }
        const nextCard = this.deck.draw();
        if (nextCard === null) {
            console.log("No more cards in the deck!");
            return;
        }
        console.log(nextCard);
        const isHigher = nextCard.beats(this.currentCard);
        if ((guess === "h" && isHigher) || (guess === "l" && !isHigher)) {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    }
}