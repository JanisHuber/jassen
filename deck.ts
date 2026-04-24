import { RANKS } from "./rank";
import { SUITS } from "./suit";
import { Card } from "./cards";

export class Deck {
    private cards: Card[] = [];
    private map: Map<Card, boolean> = new Map();

    public constructor() {
        RANKS.forEach((card) => {
            SUITS.forEach(suit => {
                this.map.set(new Card(suit, card), false);
            })
        })
    }
}
