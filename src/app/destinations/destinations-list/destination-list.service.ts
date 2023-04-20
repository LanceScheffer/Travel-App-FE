import { Injectable } from '@angular/core';
import { Destination } from '../destination.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DestinationListService {
  destinationsChanged = new Subject<Destination[]>();

  private destinations: Destination[] = [];

  constructor(private router: Router) {}

  getDestinations() {
    return this.destinations.slice();
  }

  getDestination(index: number) {
    return this.destinations[index];
  }

  addDestinations(destination: Destination) {
    this.destinations.push(destination);

    this.destinationsChanged.next(this.destinations.slice());

    this.router.navigate(['/home']);
  }
}
