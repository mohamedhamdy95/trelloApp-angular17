import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../Models/task';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    MatCardModule ,
    MatInputModule ,
    MatFormFieldModule ,
    MatIconModule ,
    ReactiveFormsModule,
    
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  constructor(private fb:FormBuilder){}
  todoForm!:FormGroup;
  tasks:Task[] = [];
  inprogres:Task[] = [];
  done:Task[] = [];
ngOnInit(): void {
    this.todoForm=this.fb.group({
      item:['',Validators.required]
    })
}
}
