export interface ProductModel {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly category: string;
  readonly image: string;
  readonly rating: RatingModel;
}

export interface RatingModel {
  readonly rate: number;
  readonly count: number;
}
