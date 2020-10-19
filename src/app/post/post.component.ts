import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  post: IPost;

  constructor(
      private route: ActivatedRoute,
      private router: Router
      // private postsService: PostsService
  ) {
  }

  ngOnInit(): void {

    this.route.data.subscribe(data => {
        this.post = data.post;
    });

    // this.post = this.route.snapshot.data.post;  // TK: this is not a correct way to use resolve

    // this.route.params
    //     .subscribe((params: Params) => {
    //       console.log('Params ==>  ', params);
    //       this.post = this.postsService.getById(+params.id);   // TK: added "+" in front of params.id to convert to integer
    //     });
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
        .then(r => console.log('Navigated to 4?:', r))
        .catch(err => {
          console.log('Error navigating to 4', err);
        });
  }
}
