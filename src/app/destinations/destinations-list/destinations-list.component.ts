import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination.model';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.css']
})
export class DestinationsListComponent implements OnInit {
  destinations: Destination[] = [
    new Destination('A Test Destination', 'A description of the test destination', 'https://source.unsplash.com/500x500/?destination,vacation')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
