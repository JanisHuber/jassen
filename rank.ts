export enum RankType {
    Sechs = 1,
    Sieben = 2,
    Acht = 3,
    Neun = 4,
    Banner = 5,
    Under = 6,
    Ober = 7,
    König = 8,
    Ass = 9,
}

export const RANKS: readonly RankType[] = [
    RankType.Sechs,
    RankType.Sieben,
    RankType.Acht,
    RankType.Neun,
    RankType.Banner,
    RankType.Under,
    RankType.Ober,
    RankType.König,
    RankType.Ass,
];
