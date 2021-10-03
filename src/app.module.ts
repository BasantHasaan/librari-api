import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthorsModule,
    ArticlesModule,
  ],
    controllers: [AppController],
    providers: [AppService],
})
// @Module({
//   // imports: [AuthorsModule, DatabaseModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
export class AppModule {}
