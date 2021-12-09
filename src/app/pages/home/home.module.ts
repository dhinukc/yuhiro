import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderComponent } from '../../components/header/header.component';
import { TrentCardComponent } from '../../components/trent-card/trent-card.component';
import { WorkoutTypeCardComponent } from '../../components/workout-type-card/workout-type-card.component';
import { AdditionalTrainingComponent } from '../../components/additional-training/additional-training.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderComponent, TrentCardComponent, WorkoutTypeCardComponent, AdditionalTrainingComponent]
})
export class HomePageModule { }
