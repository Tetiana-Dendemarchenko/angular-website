import {Injectable, Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }): any {
    const authService = this.injector.get(AuthService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
