import { Action } from "../../../node_modules/@ngrx/store";

export const SET_FILTER = '[ Filter ] Set Filter ';
export type filterValidates = 'todos' | 'completados' | 'pendientes';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;
    constructor( public filter : filterValidates ) {}
}

export type Actions = SetFilterAction;