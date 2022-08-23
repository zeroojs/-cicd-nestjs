/*
 * @Descripttion: Main
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-08-23 13:29:18
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-08-23 17:21:24
 */
const os = require('os');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3006;
  const { intranet, extranet } = getAddress()
  await app.listen(port);
  console.log(`\nhttp://localhost:${port}`)
  console.log(`http://${intranet}:${port}`)
  console.log(`http://${extranet}:${port}`)
}
bootstrap();

function getAddress() {
  const interfaces = os.networkInterfaces();
  const [, { address: intranetAddress }] = interfaces.en0;
  const [, { address: extranetAddress }] = interfaces.en7;
  return {
    intranet: intranetAddress,
    extranet: extranetAddress
  }
}
