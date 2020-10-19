import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostComponent} from './post/post.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'posts', component: PostComponent}
];
// TK: custom module
@NgModule({
    imports: [RouterModule],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
