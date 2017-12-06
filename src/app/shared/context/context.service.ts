import { Injectable } from '@angular/core';
import {Company} from "../company";
import {Signupuser} from "../signupuser";
import {Loginuser} from '../loginuser';
@Injectable()
export class ContextService {

  constructor() { }

  public currentCompany: Company;
  public currentSignupuser: Signupuser;
  public currentLoginuser: Loginuser;
}
