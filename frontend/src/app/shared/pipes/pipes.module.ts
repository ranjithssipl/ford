import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//--
import { InArrayPipe, InStringPipe, InCommaSeperatedPipe  } from './array.pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InStringPipe, 
    InCommaSeperatedPipe, 
    InArrayPipe
  ],
  exports: [
    InStringPipe, 
    InCommaSeperatedPipe, 
    InArrayPipe
  ]
})
export class PipesModule { }
