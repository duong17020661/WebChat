import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat-activity',
  templateUrl: './chat-activity.component.html',
  styleUrls: ['./chat-activity.component.css']
})
export class ChatActivityComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  message = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  onEnter(value: string) {
    if (value) {
      this.message.push(value);
    }
    value = ""
  }
}
