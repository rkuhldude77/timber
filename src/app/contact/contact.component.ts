import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  emailString: string =
    'mailto:timberelite.construction@gmail.com?subject=Appointment%20' + 
    'set%20up&body=I%20would%20like%20to%20schedule%20an%20appointment%20for:';
  emailText: string = 'timberelite.construction@gmail.com';
}
