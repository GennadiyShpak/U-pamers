import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { UserAuthData } from '../auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  constructor() {
    setTimeout(() => {
      Amplify.configure({
        userPoolId: environment.cognito.userPoolId,
        userPoolWebClientId: environment.cognito.clientId
      });
    });
  }

  signUp(user: UserAuthData): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
      attributes: {
        given_name: user.givenName,
        family_name: user.familyName,
        'custom:avatar': user.userAvatar,
        'custom:socialList': JSON.stringify(user.socialMedias)
      }
    });
  }

  confirmAuth(user: { code: string; email: string }): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }
}
