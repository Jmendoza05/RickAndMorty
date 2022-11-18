import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-episode',
  templateUrl: './modal-episode.component.html',
  styleUrls: ['./modal-episode.component.css']
})
export class ModalEpisodeComponent implements OnInit {
@Input() dataEndEpisode:any;
  constructor() { }

  ngOnInit(): void {
  }

}
