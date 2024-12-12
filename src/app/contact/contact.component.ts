import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, // Import required Material modules here
  ],
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Thank you for your message!');
      form.reset();
    }
  }
}
