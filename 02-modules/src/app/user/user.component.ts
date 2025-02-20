import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true })
  user!: User;

  @Input({ required: true })
  selected!: boolean;

  @Output()
  select: EventEmitter<string> = new EventEmitter<string>();

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

  // use of output function, in the end same like @Output()
  // output function does not create any signal like input function
  // select = output<string>();

  // use signal
  // avatar = input.required<string>();

  get imagePath(): string {
    return `/assets/users/${this.user.avatar}`;
  }

  // use signal
  // imagePath = computed(() => {
  //   return `/assets/users/${this.avatar()}`;
  // });

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
