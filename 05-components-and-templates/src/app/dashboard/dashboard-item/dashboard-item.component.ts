import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  // @Input({ required: true })
  // image!: { src: string; alt: string };
  // @Input({ required: true })
  // title!: string;

  // available in >= Angular 17
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
