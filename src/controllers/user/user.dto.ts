import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class SetUserDTO {
  @MinLength(4)
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @MinLength(4)
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  readonly countryId?: number | undefined;
}

export class SetUserMetadataDTO extends SetUserDTO {
  age: number;
  city: string;
  weight: number;
}
