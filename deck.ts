import { RANKS } from "./rank.ts";
import { SUITS } from "./suit.ts";
import { Card } from "./cards.ts";

export class Deck {
    private cards: Map<Card, boolean> = new Map();

    public constructor() {
        RANKS.forEach((rank) => {
            SUITS.forEach(suit => {
                this.cards.set(new Card(suit, rank), false);
            })
        })
        this.cards = this.shuffle(this.cards);
    }

    private shuffle(cards: Map<Card, boolean>): Map<Card, boolean> {
        const shuffled = new Map<Card, boolean>();
        const keys = Array.from(cards.keys());
        while (keys.length > 0) {
            const randomIndex = Math.floor(Math.random() * keys.length);
            const key = keys.splice(randomIndex, 1)[0];
            shuffled.set(key, cards.get(key) || false);
        }
        return shuffled;
    }

    public draw(): Card | null {
        for (const [card, drawn] of this.cards) {
            if (!drawn) {
                this.cards.set(card, true);
                return card;
            }
        }
        return null;
    }
}
