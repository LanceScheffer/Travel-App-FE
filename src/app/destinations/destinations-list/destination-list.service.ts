import { Injectable } from "@angular/core";
import { Destination } from "../destination.model";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})

export class DestinationListService {

  destinationsChanged = new Subject<Destination[]>();
  private destinations: Destination[] = [
    new Destination('A Test Destination', 'A description of the test destination', 'https://source.unsplash.com/500x500/?destination,vacation'),
    {location: 'Cape Girardeau, MO', description: 'kjhkjbkj', imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…RCpoSbXgE0-b2dphQ1H-s99HZubd33I22ksWcqn0&usqp=CAU'}
  ];

  getDestinations() {
    return this.destinations.slice();
  }

  getDestination(index: number) {
    return this.destinations[index];
  }

  addDestinations(destination: Destination) {
    this.destinations.push(destination);
    this.destinationsChanged.next(this.destinations.slice())
  }
}
