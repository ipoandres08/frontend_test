import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.interface';
import { ApiService} from '../../services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ResponseI } from '../../models/response.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private api: ApiService) { }

  dataPost!: Post;
  editForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  })
  ngOnInit(): void {
    let postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPost(postId).subscribe(data=>{
      this.dataPost = data;
      this.editForm.setValue({
        'id' : this.dataPost.id,
        'title' : this.dataPost.title,
        'body' : this.dataPost.body
      });
    });
  }

  postForm(form:Post){
    this.api.putPost(form).subscribe(data=>{
      console.log(data);
      this.router.navigate(['dashboard']);
    });
  }
  back(){
    this.router.navigate(['dashboard']);
  }
}
