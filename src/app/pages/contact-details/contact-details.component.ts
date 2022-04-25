import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }


  contact!: Contact

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async ({ id }) => {
      this.contact = await lastValueFrom(this.contactService.getContactById(id))
    })
  }



  get contactImg() {
    return {
      'background-image': `url(https://robohash.org/${this.contact._id})`,
      'background-color': `rgb(${Math.random() * 1000 % 255}, ${Math.random() * 1000 % 255}, ${Math.random() * 1000 % 255})`
    }
  }

}
