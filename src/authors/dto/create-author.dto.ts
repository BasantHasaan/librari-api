import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateAuthorDto {
          @ApiProperty({
            description: 'Author Name',
            required: true,
          })
         @IsNotEmpty()
         readonly name: string;

          @ApiProperty({
            description: 'Author jobTitle',
            required: true,
          })
         @IsNotEmpty()
         @MinLength(6)
         readonly jobTitle: string;
       }
