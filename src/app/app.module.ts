import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    PeopleComponent,
    FilmsComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
