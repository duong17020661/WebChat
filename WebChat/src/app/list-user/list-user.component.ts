import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { filter } from 'jszip';
import { ListUserService } from './list-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

//   public users = [{
//     id: 1,
//     name: 'Terrance Orta',
//     lastMessage: '770-504-2217',
//     photo: 'https://randomuser.me/api/portraits/men/27.jpg',
//     status: true,
// }];

public users = [];

  spinnerService: any;

  constructor(private router: Router, private _userservice: ListUserService) { }

  ngOnInit(): void {
      this._userservice.getUsers().subscribe(data => this.users = data);
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

