import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-location',
  templateUrl: './modal-location.component.html',
  styleUrls: ['./modal-location.component.css']
})
export class ModalLocationComponent implements OnInit {
@Input ()dataLocation:any;
  constructor() { }

  ngOnInit(): void {
  }

}
