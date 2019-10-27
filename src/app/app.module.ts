import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { UsersComponent } from './pages/users/users.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { LayoutblankComponent } from './components/layoutblank/layoutblank.component';
import { LoginErrorsComponent } from './pages/login-errors/login-errors.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogueConfirmComponent } from './pages/dialogue-confirm/dialogue-confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DashboardComponent,
    NotFoundComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    LayoutAdminComponent,
    LayoutblankComponent,
    LoginErrorsComponent,
    DialogueConfirmComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule

  ],
  entryComponents: [
    DialogueConfirmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
