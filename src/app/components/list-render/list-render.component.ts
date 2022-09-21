import { Component, OnInit } from '@angular/core';

import { Catraca } from 'src/app/Catraca';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  catracas: Catraca[] = [];

  catracaDetails = '';

  constructor(private listService: ListService) {
    this.getCatracas();
  }

  ngOnInit(): void {}

  showId(catraca: Catraca) {
    this.catracaDetails = `A ${catraca.name} pertence à ${catraca.area}.`;
  }

  removeCatraca(catraca: Catraca) {
    this.catracas = this.catracas.filter((a) => catraca !== a);
    this.listService.remove(catraca.id).subscribe();
  }

  getCatracas(): void {
    this.listService.getAll().subscribe((catracas) => (this.catracas = catracas));
  }
}
