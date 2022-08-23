/*
 * @Descripttion: App Service
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-08-23 13:29:18
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-08-23 13:46:07
 */
import { Injectable } from '@nestjs/common';
import { version } from '../package.json'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getVersion(): string {
    console.log(version)
    return version;
  }
}
