import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EventoService } from './_services/evento.service';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { NavComponent } from './nav/nav.component';

import { DateTimeFormatPipePipe } from './_helps/DateTimeFormatPipe.pipe';

@NgModule({
   declarations: [
      AppComponent,
      EventosComponent,
      NavComponent,
      DateTimeFormatPipePipe
   ],
   imports: [
      BrowserModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      // Não precisava declarar aqui os providers, mas é só pra saber que é aqui que declara eles
      EventoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
