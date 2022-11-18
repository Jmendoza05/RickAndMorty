import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-detail-chararter',
  templateUrl: './detail-chararter.component.html',
  styleUrls: ['./detail-chararter.component.css']
})
export class DetailChararterComponent implements OnInit {
  url:any | null;
  personaje: any = {
    img: '',
    nombre: '',
    especie: '',
    estado: '',
    genero: '',
    origen: '',
    location: '',
    episodes: []
    } 
  constructor( private aRouter: ActivatedRoute,
    private characters: CharacterService) { 
    this.url = this.aRouter.snapshot.paramMap.get('url');
  }

  ngOnInit(): void {
      this.getCharacter(this.url);      
  }

  getCharacter(url:any){   
    this.characters.getOneCharater(url).subscribe(data =>{
      this.personaje.img = data.image;
      this.personaje.nombre = data.name;
      this.personaje.especie = data.species;
      this.personaje.estado = data.status;
      this.personaje.origen = data.origin;
      this.personaje.location = data.location.name;
      this.getEpisodes(data);
    });
    console.log(this.personaje);        
  }
  getEpisodes(data:any){
    data.episode.forEach((element:any) => {
      this.characters.getEpisode(element).subscribe(data =>{
        let episodio = {
          name: data.name,
          fecha: data.air_date
        }
        this.personaje.episodes.push(episodio);
      });      
    });
  }
}
