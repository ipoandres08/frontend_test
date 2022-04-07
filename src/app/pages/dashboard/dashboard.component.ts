import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { Post_List } from '../../models/list-post.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts?: Post_List[];
  delete_post?: Number[];
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllPost().subscribe(data =>{
      this.posts = data;
    });
  }

  editPost(id:any){
      this.router.navigate(['edit',id]);
  }
  newPost(){
    this.router.navigate(['new']);
  }

}
