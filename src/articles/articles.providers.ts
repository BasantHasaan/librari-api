import { Article } from './entities/article.entity';
import { ARTICLE_REPOSITORY } from '../core/constants';

export const articlesProviders = [
  {
    provide: ARTICLE_REPOSITORY,
    useValue: Article,
  },
];
