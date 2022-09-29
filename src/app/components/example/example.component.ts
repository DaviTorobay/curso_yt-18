import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentTreinamento = undefined;

  treinamentos = [
    {
      id: 1,
      name: 'COVID-19',
      type: 'health',
    },
    {
      id: 2,
      name: 'NR-35',
      type: 'security',
    },
    {
      id: 3,
      name: 'NR-10',
      type: 'security',
    },
  ];

  compareWith(o1: { id: any; }, o2: { some: (arg0: (o: any) => boolean) => any; id: any; }) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev: { target: { value: undefined; }; }) {
    this.currentTreinamento = ev.target.value;
  }
}
