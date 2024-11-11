import { Component, Input, SimpleChanges } from '@angular/core';
import { ToDoService } from '../../../services/to-do.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ITodo } from '../../../interfaces';


@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss'
})
export class TodoInputComponent {
  todoTitleControl = new FormControl('');
  isSelected:boolean = false;
  todoSelected!: ITodo;
  
  constructor(private todoService: ToDoService) {
    this.todoService.currentTodo.subscribe(todo => {
      this.todoTitleControl.setValue(todo.title);
      todo.title !== '' && (this.isSelected = !this.isSelected);
      this.todoSelected = todo;
    });
  }
  

  addTodo(): void {
    const title = this.todoTitleControl.value; 

    if (title && title.trim()) {
      this.todoService.add(title.trim()); 
      this.todoTitleControl.setValue(''); 
    }
  }

  updateTodo(): void {
    const updatedTitle = this.todoTitleControl.value; 

    if (updatedTitle && updatedTitle.trim()) {
      this.todoSelected.title = updatedTitle.trim(); 
      this.todoService.update(this.todoSelected); 
      this.todoTitleControl.setValue(''); 
      this.isSelected = false;
    }
  }
  
}