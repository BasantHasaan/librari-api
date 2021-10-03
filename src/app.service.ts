import { Injectable } from '@nestjs/common';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
