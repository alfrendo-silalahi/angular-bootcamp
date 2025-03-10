import { Component, signal, WritableSignal } from '@angular/core';

interface Traffic {
  id: string;
  value: number;
}

@Component({
    selector: 'app-traffic',
    imports: [],
    templateUrl: './traffic.component.html',
    styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  dummyTrafficData: Traffic[] = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];

  maxTraffic: WritableSignal<number> = signal(
    Math.max(...this.dummyTrafficData.map((data) => data.value))
  );
}
