import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AngularFirestore,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  constructor(private http: HttpClient, private readonly afs: AngularFirestore) {}

  users: User[] ;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  private shirtCollection: AngularFirestoreCollection<User>;
  // = [
  //   { id: 1, name: "Maria", email: "maria@gmail.com", birthyear: "22/12/1988" },
  //   { id: 2, name: "Ozawa", email: "ozawa@gmail.com", birthyear: "22/12/1988" },
  //   { id: 3, name: "Tiana", email: "tiana@gmail.com", birthyear: "22/12/1988" }
  // ];

  getUsers():Observable<any>{
    return this.http.get('https://quan-ly-hoc-vien.herokuapp.com/users');

  }

  getUsersFromFireBase():Observable<any>{
    this.shirtCollection = this.afs.collection<User>('users');
   return this.shirtCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  deleteUser(userId:number):Observable<any>{
    return this.http.delete('https://quan-ly-hoc-vien.herokuapp.com/users/'+userId);
  }

  create(user:User):Observable<any>{
    return this.http.post<User>("https://quan-ly-hoc-vien.herokuapp.com/users", user, this.httpOptions);
  }
}
