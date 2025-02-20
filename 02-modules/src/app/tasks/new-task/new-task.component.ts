import {
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true })
  userId!: string;

  @Output()
  close: EventEmitter<void> = new EventEmitter<void>();

  // @Output()
  // add: EventEmitter<NewTask> = new EventEmitter<NewTask>();

  constructor(private taskService: TasksService) {}

  // Regular fields
  // enteredTitle: string = '';
  // enteredSummary: string = '';
  // enteredDate: string = '';

  // Signal fields
  enteredTitle: WritableSignal<string> = signal('');
  enteredSummary: WritableSignal<string> = signal('');
  enteredDate: WritableSignal<string> = signal('');

  onCancel(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.taskService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDate(),
      },
      this.userId
    );
    this.close.emit();
  }
}
