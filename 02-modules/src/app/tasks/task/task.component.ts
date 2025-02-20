import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true })
  task!: Task;

  private readonly tasksService: TasksService = inject(TasksService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
  }
}
