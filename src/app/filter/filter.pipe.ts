import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as FilterActions from '../filter/filter.actions';
@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: FilterActions.filterValidates): Todo[] {    
    switch (filter) {
      case 'completados':
        return todos.filter((todo:Todo)=>{
          return todo.completado
        });
      case 'pendientes':
        return todos.filter((todo:Todo)=>{
          return !todo.completado
        });    
      default:
        return todos;
    }    
  }

}
