import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(): User {
    return this.users.find(
      (user: User): boolean => user.id === this.selectedUserId
    )!;
  }

  onSelectUser(userId: string): void {
    this.selectedUserId = userId;
  }
}
