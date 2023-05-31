import {AuthService} from "../../services/auth.service";
import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(currentRoute: any, nextState: any) {

    if (this.authService.isLogged) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

}
