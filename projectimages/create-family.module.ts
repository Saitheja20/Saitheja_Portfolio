import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFamilyComponent } from './create-family.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
@NgModule({
  declarations: [CreateFamilyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateFamilyComponent,
      },
    ]),
    SharedModule
  ]
})
export class CreateFamilyModule { }
