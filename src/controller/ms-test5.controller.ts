import { Controller, Get, Inject } from '@nestjs/common';

import { MsTest5Service } from '../services/ms-test5.service';

@Controller('msTest5')
export class MsTest5Controller {
    @Inject(MsTest5Service)
    private readonly msTest5Service: MsTest5Service;

    constructor(msTest5Service: MsTest5Service) {
        this.msTest5Service = msTest5Service;
    }

    @Get()
    findAll(): string {
        return this.msTest5Service.findAll();
    }
}