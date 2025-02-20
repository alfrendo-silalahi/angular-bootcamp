import { Task } from './task/task.model';
import NewTask from './new-task/new-task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) this.tasks = JSON.parse(tasks);
  }
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-11-29',
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

  getUsersTasks(userId: string): Task[] {
    return this.tasks.filter((task: Task): boolean => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string): void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId: userId,
    });
    this.saveTasks();
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task: Task): boolean => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
