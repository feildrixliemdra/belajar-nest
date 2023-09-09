import { IsISBN, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDTO {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsISBN()
  @IsNotEmpty()
  public isbn: string;

  @IsNumber()
  public author_id: number;

  @IsNumber()
  public edition: number;

  @IsString()
  @IsNotEmpty()
  public category: string;
}
