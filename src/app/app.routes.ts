import { Routes } from '@angular/router'

import { HomeComponent } from '../app/home/home.component'
import { PeopleComponent } from '../app/people/people.component'
import { FilmsComponent } from '../app/films/films.component'
import { StarshipsComponent } from '../app/starships/starships.component'
import { VehiclesComponent } from '../app/vehicles/vehicles.component'
import { SpeciesComponent } from '../app/species/species.component'
import { PlanetsComponent } from '../app/planets/planets.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'planets', component: PlanetsComponent },
]
