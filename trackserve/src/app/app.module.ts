import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MetricComponent } from './metric/metric.component';
import { RouterModule, Routes } from '@angular/router';
import {MdDialogModule} from '@angular/material';
import { ServerinfoComponent } from './serverinfo/serverinfo.component';
import { HttpClientModule } from '@angular/common/http';
import {PostDataService} from './post-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { ConfigComponent } from './config/config.component';

const appRoutes: Routes = [
{ path: 'metric', component: MetricComponent },
{ path: 'config', component: ConfigComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MetricComponent,
    ServerinfoComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,FormsModule,ChartsModule,HttpClientModule,TreeModule,
    
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
     MdDialogModule,
     BrowserAnimationsModule,CdkTableModule
     
  ],
  entryComponents: [ 
    ServerinfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
