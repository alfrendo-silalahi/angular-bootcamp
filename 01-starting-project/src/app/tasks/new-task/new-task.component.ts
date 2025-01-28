import {
  Component,
  EventEmitter,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import NewTask from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  add: EventEmitter<NewTask> = new EventEmitter<NewTask>();

  // Regular fields
  // enteredTitle: string = '';
  // enteredSummary: string = '';
  // enteredDate: string = '';

  // Signal fields
  enteredTitle: WritableSignal<string> = signal('');
  enteredSummary: WritableSignal<string> = signal('');
  enteredDate: WritableSignal<string> = signal('');

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(): void {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
    });
  }
}
