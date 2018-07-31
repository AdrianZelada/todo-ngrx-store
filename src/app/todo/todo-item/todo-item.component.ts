import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  chkField : FormControl;
  txtInput : FormControl;
  editando: Boolean=false;

  @ViewChild('txtInputTag')  txtInputTag :ElementRef;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto,Validators.required);

    this.chkField.valueChanges.subscribe((value)=>{
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    })
  }

  editar(){
    this.editando=true;
    setTimeout(()=>{
      this.txtInputTag.nativeElement.select();
    },1)    
  }

  terminarEdicion(){
    this.editando=false; 
    if(this.txtInput.invalid){
      return;
    }
    const action = new EditarTodoAction(this.todo.id,this.txtInput.value);
    this.store.dispatch(action);
  }

  destroy(){
    const action = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
