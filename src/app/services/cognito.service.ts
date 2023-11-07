import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { take, from, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginData, UserAuthData } from '../auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  constructor() {
    this.initAmplify();
  }

  signUp(user: UserAuthData): Observable<any> {
    return from(
      Auth.signUp({
        username: user.email,
        password: user.password,
        attributes: {
          given_name: user.givenName,
          family_name: user.familyName
        }
      })
    );
  }

  confirmAuth(user: { code: string; email: string }): Observable<any> {
    return from(Auth.confirmSignUp(user.email, user.code));
  }

  signIn({ email, password }: LoginData): Observable<any> {
    return from(Auth.signIn(email, password));
  }

  private initAmplify(): void {
    setTimeout(() => {
      Amplify.configure({
        userPoolId: environment.cognito.userPoolId,
        userPoolWebClientId: environment.cognito.clientId
      });
    });
  }

  public forgotPassword(email: string): Observable<any> {
    return from(Auth.forgotPassword(email)).pipe(take(1));
  }

  public forgotPasswordSubmit(email: string, code: string, newPassword: string): Observable<any> {
    return from(Auth.forgotPasswordSubmit(email, code, newPassword)).pipe(take(1));
  }
}
