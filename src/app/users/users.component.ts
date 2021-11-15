import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Populating List for display
  users: User[] = [
    { age: 11, name: 'Mahesh',description:"Hi I am Mahesh" },
    { age: 12, name: 'Shakti',description:"Hi I am Shakti"  },
    { age: 13, name: 'Radha',description:"Hi I am Radha"  },
    { age: 14, name: 'Krishna',description:"Hi I am Krishna"  }
  ];
  // Flag to toggle between the data
  toggledData?:boolean = false;
  showDescription?:string;

  constructor() { }

  ngOnInit(): void {
  }
  // When selected a particular User Name to show data according to the toggleable data
  onSelect(user?:User){
    this.toggledData = true;
    this.showDescription = user?.description;
  }
}
