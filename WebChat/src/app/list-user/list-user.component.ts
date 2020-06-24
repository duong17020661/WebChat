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
    name: "Terrance Orta",
    phone: "770-504-2217"
}, {
    id: 2,
    name: "Richard Mahoney",
    phone: "423-676-2869"
}, {
    id: 3,
    name: "Donna Price",
    phone: "859-496-2817"
}, {
    id: 4,
    name: "Lisa Landers",
    phone: "901-747-3428"
}, {
    id: 100,
    name: "Dorothy H. Spencer",
    phone: "573-394-9254"
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
  filterFunction() {
    
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

