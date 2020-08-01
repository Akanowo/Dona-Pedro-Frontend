export interface ICar {
  id: string;
  name: string;
  imgUrl: string;
  condition: string;
  transition: string;
  bodyType: string;
  capacity: string;
  models?: Array<
    {
      year?: number;
      imgUrl?: string;
      price?: number
    }
  >;
}
