/* eslint-disable */

import { Injectable, Inject } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { AUTHOR_REPOSITORY } from '../core/constants';
@Injectable()
export class AuthorsService {
  constructor(
    @Inject(AUTHOR_REPOSITORY) private readonly authorRepository: typeof Author) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return await this.authorRepository.create<Author>(createAuthorDto);
  }

  // create(author: Author) {
  //   this.authors.push(author);
  // }

  // findAll(): Author[] {
  //   return this.authors;
  // }
  // create(createAuthorDto: CreateAuthorDto) {
  //   return 'This action adds a new author';
  // }

  // findAll() {
  //   return `This action returns all authors`;
  // }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
