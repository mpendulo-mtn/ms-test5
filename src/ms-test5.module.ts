import { Module } from '@nestjs/common';

import { MsTest5Controller } from './controller/ms-test5.controller';
import { MsTest5Service } from './services/ms-test5.service';

@Module({
    controllers: [MsTest5Controller],
    providers: [MsTest5Service]
})
export class MsTest5Module {}