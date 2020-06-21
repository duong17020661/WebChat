import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ChatToolbarComponent } from './chat-toolbar/chat-toolbar.component';
import { ChatActivityComponent } from './chat-activity/chat-activity.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ListUserComponent,
    ChatToolbarComponent,
    ChatActivityComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
