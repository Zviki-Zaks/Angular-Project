import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private contactService: ContactService, 
    private route: ActivatedRoute,
    private router: Router
    // private fb: FormBuilder
    ) { }

  contact!: Contact
  // form: FormGroup

  ngOnInit(): void {
    this.route.data.subscribe(async ({ contact }) => {
      this.contact = contact ? contact : { name: '', phone: '', email: '' } as Contact
    })
    // this.form = this.fb.group({
    //   name: '',
    //   phone: '',
    //   email: '',
    // })
    // this.form.patchValue(this.contact)
  }

  onSubmit(form: NgForm){
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contact')
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

}
