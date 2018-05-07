import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PostComponent } from './app.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [PostComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [PostComponent]
})
export class AppModule {}
