import { Injectable } from "@angular/core";
import { Destination } from "../destination.model";
@Injectable({
  providedIn: "root"
})

export class DestinationListService {

private destinations: Destination[] = [
    new Destination('A Test Destination', 'A description of the test destination', 'https://source.unsplash.com/500x500/?destination,vacation')
  ];
}
