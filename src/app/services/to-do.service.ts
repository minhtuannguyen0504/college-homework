import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  id: number = 1;
  toDos: ITodo[] = [];
  private todoItem = new BehaviorSubject<ITodo>({
    id: 0,
    title: '',
    completed: false,
  });
  currentTodo = this.todoItem.asObservable();

  constructor() { }

  changeTodo(item: ITodo): void {
    this.todoItem.next(item)
  }

  getToDos(): ITodo[] {
    return this.toDos;
  }

  add(title: string): void  {
    const newTodo: ITodo = {
      id: this.id++,
      title: title,
      completed: false
    }

    this.toDos.push(newTodo);
  }

  delete(id: number): void  {
    this.toDos = this.toDos.filter(todo => todo.id !== id);
  }

  update(toDoSelector: ITodo): void {
    const todo = this.toDos.find(todo => todo.id === toDoSelector.id);
    if (todo) {
      todo.title = toDoSelector.title;
      todo.completed = toDoSelector.completed;
      this.todoItem.next(todo);
    }
  }
  

  toggleCompleted(id: number): void {
    const todo = this.toDos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.todoItem.next(todo); 
    }
  }
  

  findById(id: number): ITodo | undefined {
    return this.toDos.find(todo => todo.id === id);
  }
}