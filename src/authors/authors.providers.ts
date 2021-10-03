import { Author } from './entities/author.entity';
import { AUTHOR_REPOSITORY } from '../core/constants';

export const authorsProviders = [
  {
    provide: AUTHOR_REPOSITORY,
    useValue: Author,
  },
];
