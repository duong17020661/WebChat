import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-toolbar',
  templateUrl: './chat-toolbar.component.html',
  styleUrls: ['./chat-toolbar.component.css']
})
export class ChatToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShowDivIf = false;
  
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
    if(!this.isShowDivIf) {
      document.getElementById("c4").style.width = "75%";
    }
    else {
      document.getElementById("c4").style.width = "100%";
    }
    
  }
}
