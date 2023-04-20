import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DestinationListService } from '../destinations-list/destination-list.service';
import { Destination } from '../destination.model';
@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.css'],
})
export class DestinationFormComponent implements OnInit {
  destinationForm = new FormGroup({
    location: new FormControl(''),
    description: new FormControl(''),
    imagePath: new FormControl(''),
  });
  constructor(private destinationListService: DestinationListService) {}

  ngOnInit(): void {}

  submit() {
    const { location, description, imagePath } = this.destinationForm.value;

    const formDestination = new Destination(location, description, imagePath);

    this.destinationListService.addDestinations(formDestination);
  }
}
