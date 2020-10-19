import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  post: Post;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.route.params
        .subscribe((params: Params) => {
          console.log('Params ==>  ', params);
          this.post = this.postsService.getById(+params.id);   // TK: added "+" in front of params.id to convert to integer
        });
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
        .then(r => console.log('Navigated to 4?:', r))
        .catch(err => {
          console.log('Error navigating to 4', err);
        });
  }
}
