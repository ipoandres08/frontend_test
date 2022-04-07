import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../../models/post.interface';
import { ApiService} from '../../services/api/api.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  })
  constructor(private api:ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  postForm(form:Post){
    this.api.postPost(form).subscribe(data =>{
      console.log(data);
      this.router.navigate(['dashboard']);
    })
  }
  // postForm(form:Post){
  //   this.api.postPost(form).
  //   subscribe(
  //     {response: }
  //   );
  // }
}
