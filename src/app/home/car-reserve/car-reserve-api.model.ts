export interface IReserve {
  categories: Array<string>;
  locations: Array<string>;
  states: Array<string>;
  status: string;
  error?: string;
  message?: string;
}
