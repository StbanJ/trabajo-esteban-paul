import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  URL: string = 'https://finalspaceapi.com/api/v0/quote/';
  constructor() { }

  getcitas = () => fetch(this.URL).then((response)=> response.json())

  getUnCitar = async (id: number) => {
    let response: Response = await fetch(`${this.URL}/${id}`);
    let episodio:any = await response.json()
    return episodio;
  };
}
