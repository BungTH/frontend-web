import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormPostComponent } from './form-post/form-post.component';
import { FormGetComponent } from './form-get/form-get.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, FormPostComponent, FormGetComponent],
})
export class AppComponent {}
