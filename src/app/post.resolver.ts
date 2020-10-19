import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IPost, PostsService} from './posts.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<IPost>{

    constructor(private postsService: PostsService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IPost> | Promise<IPost> | IPost {

        return of(this.postsService.getById(+route.params.id))  // TK: method "of" converts result to Observable
            .pipe(      // TK: added method "pipe" here to just emulate delay
                delay(1500)
            );

        // TK: the method below returns just IPost synchronously
        // return this.postsService.getById(+route.params.id);  // TK: (!) Pay attention to "+" in front of +route.params.id! Cast to int
    }
}
