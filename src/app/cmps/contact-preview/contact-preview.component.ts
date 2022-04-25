import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() contact: Contact
  @Output('remove') onRemove = new EventEmitter<string>()

  ngOnInit(): void {
  }

  get contactImg() {
    return {
      'background-image': `url(https://robohash.org/${this.contact._id})`,
      'background-color': `rgb(${Math.random() * 1000 % 255}, ${Math.random() * 1000 % 255}, ${Math.random() * 1000 % 255})`
    }
  }

  onPreview() {
    this.router.navigate(['contact', this.contact._id])
  }

  onRemoveContact(ev: MouseEvent) {
    ev.stopPropagation()
    this.onRemove.emit(this.contact._id)
  }

  onEditContact(ev: MouseEvent) {
    ev.stopPropagation()
    this.router.navigate(['contact/edit', this.contact._id])
  }
}
