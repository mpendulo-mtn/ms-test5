import { Injectable } from '@nestjs/common';

@Injectable()
export class MsTest5Service {
    findAll(): string {
        return 'Hello from ms-test5 service';
    }
}