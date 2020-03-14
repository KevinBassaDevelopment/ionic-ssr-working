import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  posts: any;
  constructor(
    private postsService: PostsService
  ) {}

  ngOnInit(){
    this.posts = this.postsService.getAllPosts();
  }
}
