import { FilterAction } from '../Constants/filter.constant';

export default function filterReducer(
  state: { category: string; priceRange: [number, number]; searchTerm: string },
  action: FilterAction
) {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload as string,
      };
    case 'SET_PRICE_RANGE':
      return {
        ...state,
        priceRange: action.payload as [number, number],
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload as string,
      };
    default:
      return state;
  }
}
