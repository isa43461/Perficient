import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { Routes } from '@angular/router';
export {rutas};

const rutas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'directory', component: DirectoryComponent }
  ];
