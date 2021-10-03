import { Injectable, Inject } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';
import { ARTICLE_REPOSITORY } from '../core/constants';
import { Author } from '../authors/entities/author.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject(ARTICLE_REPOSITORY)
    private readonly articleRepository: typeof Article,
  ) {}

  async create(createArticleDto: CreateArticleDto, authorId): Promise<Article> {
    return await this.articleRepository.create<Article>({
      ...createArticleDto,
      authorId,
    });
  }
  async findAll(): Promise<Article[]> {
    return await this.articleRepository.findAll<Article>({
      include: [{ model: Author }],
    });
  }

  async findOne(id): Promise<Article> {
    return await this.articleRepository.findOne({
      where: { id },
      include: [{ model: Author }],
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
