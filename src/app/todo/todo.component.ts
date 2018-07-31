import { Component, OnInit } from '@angular/core';
import { Store } from '../../../node_modules/@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  selectAll :boolean=false;
  constructor(private store :Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.selectAll= !this.selectAll;
    const action = new ToggleAllTodoAction(this.selectAll);
    this.store.dispatch(action);
  }

}
