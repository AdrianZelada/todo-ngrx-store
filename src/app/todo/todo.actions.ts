import { Action} from '@ngrx/store';
export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All todo';
export const EDIT_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const DELETE_ALL_TODO = '[TODO] Borrar All todo';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto : string) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id : number) {}
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public status : boolean) {}
}

export class EditarTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id : number, public texto :string) {}
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id : number) {}
}

export class DeleteAllTodoAction implements Action {
    readonly type = DELETE_ALL_TODO;    
}

export type Actions = AgregarTodoAction | ToggleTodoAction | EditarTodoAction | BorrarTodoAction | DeleteAllTodoAction | ToggleAllTodoAction;
