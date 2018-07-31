import * as TodoActions from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Saludar');
const todo2 = new Todo('Hablar');
const estadoInicial : Todo[] =[todo1,todo2];

export function todoReducer(state = estadoInicial, action:TodoActions.Actions):Todo[] {
    switch (action.type) {
        case TodoActions.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state,todo];
        
        case TodoActions.TOGGLE_TODO:            
            return state.map(val=>{                
                if(val.id === action.id){                    
                    return {
                        ...val,
                        completado: !val.completado
                    };
                }else{
                    return val;
                }                                          
            }); 

        case TodoActions.TOGGLE_ALL_TODO:            
            return state.map(val=>{                
                return {
                    ...val,
                    completado: action.status
                };                
            }); 
            
        case TodoActions.EDIT_TODO:            
            return state.map(val=>{                
                if(val.id === action.id){                    
                    return {
                        ...val,
                        texto: action.texto
                    };
                }else{
                    return val;
                }                                          
            });

        case TodoActions.BORRAR_TODO:            
            return state.filter(val=>{                
                return val.id !== action.id                                                           
            });

        case TodoActions.DELETE_ALL_TODO:            
            return state.filter(val=>{                
                return !val.completado                                                           
            });
        default:
            return state;        
    }
}