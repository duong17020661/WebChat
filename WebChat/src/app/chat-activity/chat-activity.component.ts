import { Component, OnInit } from '@angular/core';
import { ChatActivityService } from './chat-activity.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chat-activity',
  templateUrl: './chat-activity.component.html',
  styleUrls: ['./chat-activity.component.css']
})
export class ChatActivityComponent implements OnInit {

  public userID;
  public messages = []

  constructor(private _chatservice: ChatActivityService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._chatservice.getUsers().subscribe(data => this.messages = data);
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userID = id;
  }


  onEnter(value: string) {
    if (value) {
      this.messages.push(value);
    }
    value = ""
  }
}
