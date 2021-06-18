import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//--
import { errorRouting } from './error.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';
import { ErrorInterceptorService } from '@app/features/error/error-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    errorRouting
  ],
  declarations: [NotFoundComponent, PermissionDeniedComponent],
  providers: [
    // API error handling interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ]
})
export class ErrorModule { }
