import { Component, OnInit } from '@angular/core';
import {User} from '../../user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  constructor() { }

  dataSource:User[]=[
    {id:1, name: 'Maria', email: 'maria@gmail.com', birthyear: '22/12/1988'},
    {id:2, name: 'Ozawa', email: 'ozawa@gmail.com', birthyear: '22/12/1988'},
    {id:3, name: 'Tiana', email: 'tiana@gmail.com', birthyear: '22/12/1988'},
  ];

  displayedColumns: string[] = ['id', 'name', 'email', 'birthyear', 'action'];

}
