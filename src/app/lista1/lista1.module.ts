import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Lista1} from './lista1.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Lista1RoutingModule } from './lista1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Lista1RoutingModule
  ],
  declarations: [Lista1]
})
export class Lista1Module {}
