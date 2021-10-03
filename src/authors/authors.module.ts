import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { authorsProviders } from './authors.providers';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService, ...authorsProviders],
  exports: [AuthorsService],
})
export class AuthorsModule {}
