import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class SetCountryDTO {
  @MinLength(4)
  @IsString()
  @IsNotEmpty()
  readonly country: string;
}
