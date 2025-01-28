import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { Task } from './task/task.model';
import NewTask from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true })
  id!: string;

  @Input({ required: true })
  name!: string;

  isAddingTask: boolean = false;

  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master React',
      summary:
        'Learn all the basic and advanced features of React & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Master Vue',
      summary:
        'Learn all the basic and advanced features of Vue & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't5',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task: Task): boolean => task.userId === this.id);
  }

  onCompleteTask(id: string): void {
    this.tasks = this.tasks.filter((task: Task): boolean => task.id != id);
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCancelAddTask(): void {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask): void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId: this.id,
    });

    // Close the dialog
    this.isAddingTask = false;
  }
}
