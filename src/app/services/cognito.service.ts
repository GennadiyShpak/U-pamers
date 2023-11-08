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

  signUp({ email: userMail, password, familyName, givenName }: UserAuthData): Observable<any> {
    const userName = this.toUsername(userMail);
    return from(
      Auth.signUp({
        username: userName,
        password: password,
        attributes: {
          given_name: givenName,
          family_name: familyName,
          email: userMail
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

  forgotPassword(email: string): Observable<any> {
    return from(Auth.forgotPassword(email)).pipe(take(1));
  }

  forgotPasswordSubmit(email: string, code: string, newPassword: string): Observable<any> {
    return from(Auth.forgotPasswordSubmit(email, code, newPassword)).pipe(take(1));
  }

  logout(): Observable<any> {
    return from(Auth.signOut());
  }

  private initAmplify(): void {
    setTimeout(() => {
      Amplify.configure({
        userPoolId: environment.cognito.userPoolId,
        userPoolWebClientId: environment.cognito.clientId
      });
    });
  }

  private toUsername(email: string) {
    return email.replace('@', '-at-');
  }
}
