import { Component, OnInit } from '@angular/core';
import { Treinamentos } from 'src/app/Treinamento';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  treinamentos: Treinamentos[] = [];

  treinamentoDetails = '';

  constructor(private listService: ListService) {
    this.getTreinamentos();
   }

  ngOnInit(): void {  }

  getTreinamentos(): void {
    this.listService.getTreinamentos().subscribe((treinamentos) => (this.treinamentos = treinamentos));
  }

  currentTreinamento = undefined;

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
