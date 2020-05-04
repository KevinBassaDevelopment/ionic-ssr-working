import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  posts: any;
  constructor(
    private postsService: PostsService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.posts = this.postsService.getAllPosts();
  }
  public onBtnClicked() {
    // this.router.navigate(['page1']);
     this.navCtrl.navigateRoot(['/page1']);
   }
}
