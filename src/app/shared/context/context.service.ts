import { Injectable } from '@angular/core';
import {Company} from "../company";

@Injectable()
export class ContextService {

  constructor() { }

  public currentCompany: Company;
}
