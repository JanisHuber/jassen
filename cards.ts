import { SuitType } from "./suit";
import { RankType } from "./rank";

export class Card {
  private suit: SuitType;
  private rank: RankType;

  constructor(suit: SuitType, rank: RankType) {
    this.suit = suit;
    this.rank = rank;
  }

  public beats(other: Card): boolean {
    if (this.rank === other.rank) {
      return this.suit > other.suit;
    }
    return this.rank > other.rank;
  }
}
