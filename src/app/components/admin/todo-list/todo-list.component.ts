import { Component } from '@angular/core';
import { ITodo } from '../../../interfaces';
import { ToDoService } from '../../../services/to-do.service';
import { TodoInputComponent } from '../todo-input/todo-input.component';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoInputComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todo!: ITodo;
  toDos: ITodo[] = [];
  selectedTodoTitle: string = "";

  constructor(private todoService: ToDoService) {
    this.todoService.currentTodo.subscribe(todo => this.todo = todo);
  }

  ngOnInit(): void {
    this.toDos = this.todoService.getToDos();
    this.todoService.currentTodo.subscribe(() => {
      this.toDos = this.todoService.getToDos(); // Cập nhật lại danh sách toDos
    });
  }
  
  toggleCompleted(id: number): void {
    this.todoService.toggleCompleted(id); // Thay đổi trạng thái hoàn thành của todo
    this.toDos = this.todoService.getToDos(); 
  }

  deleteTodo(id: number): void {
    this.todoService.delete(id);
    this.toDos = this.todoService.getToDos();
  }

  getTodo(id: number) {
    const todo = this.todoService.findById(id);
    if(todo) {
      this.todoService.changeTodo(todo);
    }
  }
}