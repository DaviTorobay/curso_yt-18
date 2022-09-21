import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Catraca } from 'src/app/Catraca';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  catraca?: Catraca;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getCatraca();
  }

  ngOnInit(): void {}

  getCatraca(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((catraca) => (this.catraca = catraca));
  }
}
