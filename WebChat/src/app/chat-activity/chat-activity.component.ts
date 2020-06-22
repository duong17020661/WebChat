import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-activity',
  templateUrl: './chat-activity.component.html',
  styleUrls: ['./chat-activity.component.css']
})
export class ChatActivityComponent implements OnInit {
  public sender = [{
    message: "Terrance Orta",
}, {
    message: "Richard Mahoney",
}, {
    message: "Donna Price",
}, {
    message: "Lisa Landers",
}, {
    message: "Dorothy H. Spencer",
}];
  public receiver = [{
  message: "Terrance Orta",
}, {
  message: "Richard Mahoney",
}, {
  message: "Donna Price",
}, {
  message: "Lisa Landers",
}, {
  message: "Dorothy H. Spencer",
}];
  constructor() { }

  ngOnInit(): void {
  }

}
