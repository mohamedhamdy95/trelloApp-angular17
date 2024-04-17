import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../Models/task';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  todoForm!: FormGroup;
  tasks: Task[] = [];
  inprogres: Task[] = [];
  done: Task[] = [];
  isEdit: boolean = false;
  updatedIndex!:any;
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required],
    });
  }
  add() {
    this.tasks.push({
      Title: this.todoForm.value.item,
      Completed: false,
    });
    this.todoForm.reset();
    // console.log(this.tasks);
  }
  update() {
    this.tasks[this.updatedIndex].Title=this.todoForm.value.item;
    this.tasks[this.updatedIndex].Completed=false;
    this.todoForm.reset();
    console.log('edit');
  }
  deleteTask(index: number) {}
  onEditTask(index: number, task: Task) {}

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
