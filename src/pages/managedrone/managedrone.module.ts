import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagedronePage } from './managedrone';

@NgModule({
  declarations: [
    ManagedronePage,
  ],
  imports: [
    IonicPageModule.forChild(ManagedronePage),
  ],
})
export class ManagedronePageModule {}
