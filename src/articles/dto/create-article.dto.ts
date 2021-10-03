import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({
    description: 'Article Title',
    required: true,
  })
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;
  @ApiProperty({
    description: 'Article Body',
    required: true,
  })
  @IsNotEmpty()
  readonly body: string;
  @IsNotEmpty()
  readonly authorId: string;
}
