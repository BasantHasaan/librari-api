import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { articlesProviders } from './articles.providers';


@Module({
  providers: [ArticlesService, ...articlesProviders],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
