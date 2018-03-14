import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(private _router : Router) { 
    console.log(this._router.url);
  }

  ngOnInit() {
    this.menuItems = [
      { Id: 1, Text: 'Views', Href: '/Views', Class: 'fa fa-eye fa-fw', Title: 'Views' },
      { Id: 2, Text: 'Traffic', Href: '/Traffic', Class: 'fa fa-users fa-fw', Title: 'Traffic' },
      { Id: 3, Text: 'Geo', Href: '/Geo', Class: 'fa fa-bullseye fa-fw', Title: 'Geo' },
      { Id: 4, Text: 'Orders', Href: '/Orders', Class: 'fa fa-diamond fa-fw', Title: 'Orders' },
      { Id: 5, Text: 'News', Href: '/News', Class: 'fa fa-bell fa-fw', Title: 'News' },
      { Id: 6, Text: 'General', Href: '/General', Class: 'fa fa-bank fa-fw', Title: 'General' },
      { Id: 7, Text: 'History', Href: '/History', Class: 'fa fa-history fa-fw', Title: 'History' },
      { Id: 8, Text: 'Settings', Href: '/Settings', Class: 'fa fa-cog fa-fw', Title: 'Settings' },
    ];
  }
}

export class MenuItem {
  Id: number = 0;
  Text: string = '';
  Href: string = '';
  Class: string = '';
  Title: string = '';
}
