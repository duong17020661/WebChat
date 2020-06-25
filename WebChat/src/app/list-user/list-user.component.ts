import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { filter } from 'jszip';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public users = [{
    id: 1,
    name: 'Terrance Orta',
    lastMessage: '770-504-2217',
    photo: 'https://randomuser.me/api/portraits/men/27.jpg',
    status: true,
}, {
    id: 2,
    name: 'Richard Mahoney',
    lastMessage: '770-504-2217',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    status: false,
}, {
    id: 3,
    name: 'Donna Price',
    lastMessage: '859-496-2817',
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    status: false,
}, {
    id: 4,
    name: 'Lisa Landers',
    lastMessage: '901-747-3428',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    status: true,
}, {
    id: 5,
    name: 'Dorothy H. Spencer',
    lastMessage: '573-394-9254',
    photo: 'https://randomuser.me/api/portraits/women/67.jpg',
    status: false,
}];
  spinnerService: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onSelect(user) {
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['chat/duong', user.id]);
    }); 
  }

  showlist = false

  show() {
    this.showlist = !this.showlist;
  }

  values = '';
  onKey(event) {
    var a = document.getElementById('myDropdown').getElementsByTagName('a')
    this.values = event.target.value;
    for (var i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(this.values.toUpperCase()) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  
}

