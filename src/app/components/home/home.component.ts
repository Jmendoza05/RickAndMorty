import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { CharacterService } from 'src/app/services/character.service';
import { ToastrService } from 'ngx-toastr';
import { Lexer } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataCharaters: any;
  dataEndEpisode: any = {
    numeroEpisodio: '',
    titleEpisode: '',
    fechaEpisodio: '',
    serieEpisodio: ''

  };
  dataLocation: any = {
    titleLocation: '',
    tipoLocation: '',
    dimension: '',
    numeroResidentes: ''

  };
  personaje: any = {
    nombre: '',
    especie: '',
    estado: '',
    genero: '',
    origen: '',
    episodes: []
  }
  id_guardados = [];
  pages = 1;
  pagesTotal: any;


  constructor(private characters: CharacterService,
    private modal: NgbModal,
    private _toastr: ToastrService,) { }


  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters() {
    this.characters.getCharater(this.pages).subscribe(data => {
      let datainfo: any;
      datainfo = data.info;
      this.pagesTotal = datainfo.pages;
      this.dataCharaters = data.results;
    });

  }
  location(url_location: any) {
    console.log("location", url_location);
    this.characters.getLocation(url_location).subscribe(data => {
      console.log("data: ", data);
      this.dataLocation.titleLocation = data.name;
      this.dataLocation.tipoLocation = data.type;
      this.dataLocation.dimension = data.dimension;
      this.dataLocation.numeroResidentes = data.residents.length
    });

  }
  ultimoEpisodio(url_endEpidode: any) {
    this.characters.getEpisode(url_endEpidode).subscribe(data => {
      this.dataEndEpisode = {
        numeroEpisodio: data.id,
        titleEpisode: data.name,
        fechaEpisodio: data.air_date,
        serieEpisodio: data.episode

      };
    })

  }
  getCharacter(url: any) {
    this.characters.getOneCharater(url).subscribe(data => {
      this.personaje.nombre = data.name;
      this.personaje.especie = data.species;
      this.personaje.estado = data.status;
      this.personaje.origen = data.origin
      this.getEpisodes(data);
    });
  }
  getEpisodes(data: any) {
    data.episode.forEach((element: any) => {
      this.characters.getEpisode(element).subscribe(data => {
        let episodio = {
          name: data.name,
          fecha: data.air_date
        }
        this.personaje.episodes.push(episodio);
      });
    });
    console.log(this.personaje);
  }

  saveCharacter(id: any) {
    if (localStorage.getItem("character")) {
      let id_save = new Array();
      let arr: any = [];
      let data = JSON.parse(JSON.stringify(localStorage.getItem("character")));
      arr = JSON.parse(data);
      arr.push(id);
      const unicos = arr.filter((valor: any, indice: any) => { return arr.indexOf(valor) === indice; });
      localStorage.setItem("character", JSON.stringify(unicos));
      this.id_guardados = unicos;
      let n = 1;
      let bus = this.id_guardados.find(element => element == id)
      console.log(bus);
    } else {
      let id_save = new Array();
      id_save.push(id);
      localStorage.setItem("character", JSON.stringify(id_save));
    }    
  }
  mostrar(){
    console.log("hola");
    
  }
  previous() {
    this.pages = this.pages - 1;
    this.getCharacters();
  }
  next() {
    this.pages = this.pages + 1;
    this.getCharacters();
  }

}
