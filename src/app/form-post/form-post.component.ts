import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-post.component.html',
  styleUrl: './form-post.component.css'
})
export class FormPostComponent {
  postRequest(postValue: string) {
    console.log("post request : " + postValue);
  }
}
