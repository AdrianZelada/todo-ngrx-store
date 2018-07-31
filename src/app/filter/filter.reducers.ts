
import * as FilterActions from './filter.actions';

const estadoInicial : FilterActions.filterValidates = 'todos';
export function filterReducer(state=estadoInicial,action:FilterActions.Actions):FilterActions.filterValidates {
    switch (action.type) {
        case FilterActions.SET_FILTER:
            return action.filter;        
        default:
           return state;
    }
}