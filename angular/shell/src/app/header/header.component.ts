import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'ff-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') className = '';
  siteTitle = 'Final Fantasy Bonanza';

  toggleControl = new FormControl(false);

  navigation: MenuItem[] = [
    {
      label: 'Final Fantasy VII',
      link: 'ff-vii'
    },
    {
      label: 'Final Fantasy VIII',
      link: 'ff-viii'
    },
    {
      label: 'Final Fantasy IX',
      link: 'ff-ix'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
    });
  }

}
