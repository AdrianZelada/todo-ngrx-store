import { Component, OnInit } from '@angular/core';
import * as FiltersActions from '../../filter/filter.actions'
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { DeleteAllTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  typesFilters :FiltersActions.filterValidates[] = ['todos','completados','pendientes'];
  currentFilter :FiltersActions.filterValidates;
  pendientes:Todo[]=[];
  constructor(private store:Store<AppState>) { 
    this.store.subscribe((data)=>{
      this.currentFilter = data.filter;
      this.contarPendientes(data.todos);
    });
  }

  ngOnInit() {

  }

  changeFilter(newFilter: FiltersActions.filterValidates){
    console.log(newFilter)
    const action = new FiltersActions.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  contarPendientes(todos:Todo[]){
    this.pendientes = todos.filter(todo=>!todo.completado)
  }

  clearCompleted(){
    const action = new DeleteAllTodoAction();
    this.store.dispatch(action);
  }

}
