import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public users = [{
    name: "Terrance Orta",
    phone: "770-504-2217"
}, {
    name: "Richard Mahoney",
    phone: "423-676-2869"
}, {
    name: "Donna Price",
    phone: "859-496-2817"
}, {
    name: "Lisa Landers",
    phone: "901-747-3428"
}, {
    name: "Dorothy H. Spencer",
    phone: "573-394-9254"
}];

  constructor() { }

  ngOnInit(): void {
  }

}

