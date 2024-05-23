import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveModule } from '../reactive/reactive.module';
import { AuthModule } from '../auth/auth.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, ReactiveModule, AuthModule, RouterModule],
  exports: [SideMenuComponent],
})
export class SharedModule {}
