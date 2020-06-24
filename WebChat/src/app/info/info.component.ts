import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public files = [{
    name: "Terrance Orta.pdf"
}, {
    name: "Richard Mahoney.pdf"
}];

  public images = [{
  url: "/assets/IMG/Avatar/2.jpg"
}, {
  url: "/assets/IMG/Avatar/3.jpg"
},{
  url: "/assets/IMG/Avatar/2.jpg"
}];

  constructor() { }

  ngOnInit(): void {
  }

  isShowFile = false;
  isShowImg = false;
  
  toggleDisplayFile() {
    this.isShowFile = !this.isShowFile;
  }
  toggleDisplayImg() {
    this.isShowImg = !this.isShowImg;
  }
}
