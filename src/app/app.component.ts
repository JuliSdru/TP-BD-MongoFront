import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userUrl = "";
  title = 'tp';
  urlServer = "https://tp-ticketera.herokuapp.com/";
  todos= "";
  desperfectos: any;
  atencion: any;
  cliente: any;
  zona: any;
  usedUrl= "";
  
  constructor(private http: HttpClient) {
    this.userUrl=this.urlServer;
  }

  get() {
    return this.http.get(this.urlServer)
      .subscribe((data: any) => {
        this.desperfectos = JSON.stringify(data)
      })
  }

  getMotivo() {
    return this.http.get(this.urlServer.concat("motivo"))
      .subscribe((data: any) => {
        this.desperfectos = JSON.stringify(data)
      })
  }

  getDesperfectosUbicados() {
    return this.http.get(this.urlServer.concat("desperfectosUbicacion"))
      .subscribe((data: any) => {
        this.desperfectos = JSON.stringify(data)
      })
  }

  getClienteUno() {
    return this.http.get(this.urlServer.concat("clienteUno"))
      .subscribe((data: any) => {
        this.cliente = JSON.stringify(data)
      })
  }

  getReclamosCliente() {
    return this.http.get(this.urlServer.concat("empleadoCliente"))
      .subscribe((data: any) => {
        this.cliente = JSON.stringify(data)
      })
  }

  getEmpleadoCliente() {
    return this.http.get(this.urlServer.concat("reclamosClientes"))
      .subscribe((data: any) => {
        this.cliente = JSON.stringify(data)
      })
  }

  getDistanciaCliente() {
    return this.http.get(this.urlServer.concat("distanciaCliente"))
      .subscribe((data: any) => {
        this.zona = JSON.stringify(data)
      })
  }

  getMismaZonaCliente() {
    return this.http.get(this.urlServer.concat("mismaZona"))
      .subscribe((data: any) => {
        this.zona = JSON.stringify(data)
      })
  }

  getGeoZonaSur() {
    return this.http.get(this.urlServer.concat("geoZonaSur"))
      .subscribe((data: any) => {
        this.zona = JSON.stringify(data)
      })
  }

  getAtencionEmpleado() {
    return this.http.get(this.urlServer.concat("atencionAempleados"))
      .subscribe((data: any) => {
        this.atencion = JSON.stringify(data)
      })
  }

  getReclamosFinalizado() {
    return this.http.get(this.urlServer.concat("reclamoFinalizado"))
      .subscribe((data: any) => {
        this.atencion = JSON.stringify(data)
      })
  }

  getReclamoDerivado() {
    return this.http.get(this.urlServer.concat("reclamoDerivado"))
      .subscribe((data: any) => {
        this.atencion = JSON.stringify(data)
      })
  }


}
