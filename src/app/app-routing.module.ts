import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuard} from './auth.guard';
import {PostResolver} from './post.resolver';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent, canActivateChild: [AuthGuard],
        children: [
            {path: 'extra', component: AboutExtraComponent}
        ]},
    {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},  // TK: Added protection and passing our Guard class
    {
        path: 'posts/:id',
        component: PostComponent,
        resolve: {
            post: PostResolver
        }
    },
    {path: 'error', component: ErrorPageComponent}, // TK: this component handles showing the app error page
    {path: '**', redirectTo: '/error'} // TK: path '**' must always be in the end. It handles all unregistered/unknown routes
];
// TK: custom module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
