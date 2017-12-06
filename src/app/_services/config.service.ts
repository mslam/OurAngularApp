/* config.service.ts */

import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

  private config = {};

  setOption(option, value) {
    console.log(option);
    console.log(value);
    this.config[option] = value;
  }

  getConfig() {
    return this.config;
  }
}
