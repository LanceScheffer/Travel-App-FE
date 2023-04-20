import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination.model';
import { Subscription } from 'rxjs';
import { DestinationListService } from './destination-list.service';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.css'],
})
export class DestinationsListComponent implements OnInit {
  destinations: Destination[] = [];
  subscription: Subscription;

  constructor(private destinationListService: DestinationListService) {}

  ngOnInit(): void {
    this.destinations = this.destinationListService.getDestinations();

    console.log('this.destinations:', this.destinations);

    this.subscription =
      this.destinationListService.destinationsChanged.subscribe(
        (destinations: Destination[]) => {
          console.log(destinations);

          this.destinations = destinations;

          console.log('this.destinations:', this.destinations);
        }
      );
  }
}
