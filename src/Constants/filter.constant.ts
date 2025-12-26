export const Categories: string[] = [
  'Electronics', 'Clothing', 'Books', 'Home', 'Sports', 'Toys', 'Food', 'Beauty'
]

export type FilterActionType = 'SET_CATEGORY' | 'SET_PRICE_RANGE' | 'SET_SEARCH_TERM';

export interface FilterAction{
  type: FilterActionType;
  payload: string | [number, number];
}
