import { Todo } from "./todo/model/todo.model";
import { ActionReducerMap } from "../../node_modules/@ngrx/store";
import { todoReducer } from "./todo/todo.reducer";
import { filterReducer } from "./filter/filter.reducers";
import * as FilterActions from './filter/filter.actions';

export interface AppState {
    todos: Todo[],
    filter: FilterActions.filterValidates
}


export const reducers : ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter : filterReducer
}