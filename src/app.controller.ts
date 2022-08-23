/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-08-23 13:29:18
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-08-23 13:48:10
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/version')
  getVersion(): string {
    return this.appService.getVersion();
  }
}
