import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Catraca } from 'src/app/Catraca';

import { ListService } from 'src/app/services/list.service';

import { ModalService } from 'src/app/components/_modal/modal.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  catraca?: Catraca;

  bodyText!: string;

  constructor(private listService: ListService, private route: ActivatedRoute,
    private modalService: ModalService) {
    this.getCatraca();
  }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getCatraca(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((catraca) => (this.catraca = catraca));
  }
}