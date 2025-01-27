import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Input({ required: true })
  // id!: string;

  // @Input({
  //   required: true,
  // })
  // avatar!: string;

  // @Input({
  //   required: true,
  // })
  // name!: string;

  @Output()
  select = new EventEmitter<string>();

  // use of output function, in the end same like @Output()
  // output function does not create any signal like input function
  // select = output<string>();

  // use signal
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return `/assets/users/${this.user.avatar}`;
  }

  // use signal
  // imagePath = computed(() => {
  //   return `/assets/users/${this.avatar()}`;
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
