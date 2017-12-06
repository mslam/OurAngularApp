import { Component } from '@angular/core';
import { Angular2TokenService} from 'angular2-token';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apples work? ';
  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init(environment.token_auth_config);

    // this._tokenService.signIn({email: 'beep', password: 'beepbeep'}).subscribe(
    //   res => {
    //     console.log('auth response: ', res);
    //     console.log('auth response headers: ', res.headers.toJSON());
    //     console.log('auth response body: ', res.json());
    //   },
    //
    // err => {
    //     console.error('auth error:', err);
    //   }
    // );
  }
}
