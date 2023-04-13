import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.css']
})
export class DestinationFormComponent implements OnInit {
  destinationForm = new FormGroup({
    location: new FormControl(''),
    description: new FormControl(''),
    imagePath: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  submit(formObject,e){e.preventDefault()
    this.destinationForm.value
    console.log(this.destinationForm.value);

  }
}
