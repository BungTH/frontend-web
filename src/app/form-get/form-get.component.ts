import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-get.component.html',
  styleUrl: './form-get.component.css'
})
export class FormGetComponent {
  getValue: string = "";
  getResponse() {
    this.getValue = 'get response';
    console.log("get response : " + this.getValue);
  }
}
