export interface IArtistCard {
    avatar: string;
    artistName: string;
}

export interface ITrending {
    id: number;
    mainImg: string;
    subMainImg_1: string;
    subMainImg_2: string;
    numNFT: string;
    trendingName: string;
    artistCard: IArtistCard;
}