import { NestFactory } from '@nestjs/core';

import { MsTest5Module } from './ms-test5.module';

const bootstrap = async () => {
    const app = await NestFactory.create(MsTest5Module);
    await app.listen(3000);
}

bootstrap();