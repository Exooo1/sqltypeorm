import { Body, Controller, Get, Post } from "@nestjs/common";
import { CountryService } from "./country.service";
import { SetCountryDTO } from "./country.dto";

@Controller("country")
export class CountryController {
  constructor(private readonly countryService: CountryService) {
  }

  @Get()
  getCountries() {
    return this.countryService.getCountries();
  }

  @Post("add-country")
  newCountry(@Body() data: SetCountryDTO) {
    return this.countryService.addCountry(data);
  }
}
