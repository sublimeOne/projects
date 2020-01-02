import { DataComponent } from './data/data.component';
import { PhotosComponent } from './photos/photos.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'photos/:albumId', component: PhotosComponent },
  { path: 'data', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
