import { Component, OnInit } from '@angular/core';
import {User} from '../../user.model';
import {UserServiceService} from '../../user-service.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogueConfirmComponent} from '../dialogue-confirm/dialogue-confirm.component'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(public userService:UserServiceService, public dialog: MatDialog) { }

  // dataSource:User[]=[
  //   {id:1, name: 'Maria', email: 'maria@gmail.com', birthyear: '22/12/1988'},
  //   {id:2, name: 'Ozawa', email: 'ozawa@gmail.com', birthyear: '22/12/1988'},
  //   {id:3, name: 'Tiana', email: 'tiana@gmail.com', birthyear: '22/12/1988'},
  // ];

  dataSource:User[];
  displayedColumns: string[] = ['avatar', 'name', 'email', 'birthYear', 'action'];

  ngOnInit(){
    this.userService.getUsersFromFireBase().subscribe(
      (result:User[])=>{this.dataSource = result;}
    );
  }

  onDelete(item: User){
    const dialogRef = this.dialog.open(DialogueConfirmComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.userService.deleteUser(item.id).subscribe(
          (result:string)=>{}
        );
      }
    });
  }
}
