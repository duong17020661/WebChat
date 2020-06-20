import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';	
import { ChatComponent } from './chat/chat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'chat' , component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
        ChatComponent,
]