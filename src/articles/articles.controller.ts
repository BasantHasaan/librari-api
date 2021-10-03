import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  NotFoundException,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, Article as ArticleEntity } from './entities/article.entity';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @ApiCreatedResponse({
    type: Article,
    description: 'Creates article',
  })
  @ApiBadRequestResponse()
  @ApiBody({ type: [CreateArticleDto] })
  @Post()
  async create(
    @Body() createArticleDto: CreateArticleDto,
    @Request() req,
  ): Promise<ArticleEntity> {
    // create a new article and return the newly created post
    return await this.articlesService.create(createArticleDto, req.author.id);
  }

  @Get()
  async findAll() {
    // get all articles in the db
    return await this.articlesService.findAll();
  }
  @ApiNotFoundResponse()
  @ApiOkResponse({
    type: Article,
    isArray: false,
    description: 'Returns Single Article by Id',
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ArticleEntity> {
    // find the article with this id
    const article = await this.articlesService.findOne(id);

    // if the article doesn't exit in the db, throw a 404 error
    if (!article) {
      throw new NotFoundException("This Article doesn't exist");
    }
    // if article exist, return the article
    return article;
  }
}
