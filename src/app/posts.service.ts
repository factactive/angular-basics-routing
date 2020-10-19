import {Injectable} from '@angular/core';

export interface IPost {
  title: string;
  text: string;
  id: number;
}

@Injectable({providedIn: 'root'})
export class PostsService {
  posts: IPost[] = [
    {title: 'Post 1a', text: 'Sample text for post 1a', id: 11},
    {title: 'Post 2b', text: 'Sample text for post 2b', id: 22},
    {title: 'Post 3c', text: 'Sample text for post 3c', id: 33},
    {title: 'Post 4d', text: 'Sample text for post 4d', id: 44},
  ];

  getById(id: number) {
    return this.posts.find(p => p.id === id);
  }
}
