import { Injectable } from "@nestjs/common";
import { SetUserDTO } from "./user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, LessThan, Repository } from "typeorm";
import { UserEntity } from "../../entity/user.entity";
import { CountryEntity } from "../../entity/country.entity";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>
  ) {
  }

  getUsers() {
    return this.userRepository.find({ order: { createdAt: "DESC" } });
  }

  async newUser(data: SetUserDTO) {
    try {
      const { lastName, firstName, countryId } = data;
      const newUser = new UserEntity();
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      const where: FindOptionsWhere<UserEntity> = { lastName };
      const whereCountry: FindOptionsWhere<CountryEntity> = {};
      const foundUser = await this.userRepository.findOne({ where });
      if (foundUser) throw new Error("The similar user!");
      if (countryId) {
        whereCountry.id = countryId;
        const country = await this.countryRepository.findOne({ where: whereCountry });
        if (!country) throw new Error("NotFound Country");
        newUser.country = country;
      }
      return this.userRepository.save(newUser);
    } catch (err) {
      return err.message;
    }
  }

  async getUserWithCountry() {
    return this.userRepository.find({ relations: ["country"] });
  }

  async findAUser(name: string) {
    try {
      const user = await this.userRepository.findOneBy({ firstName: name });
      if (!user) return {
        message: "notFound"
      };
      return user;
    } catch (err) {
      return err;
    }
  }

  async findUserTwoQuery(id: number) {
    const where: FindOptionsWhere<UserEntity> = {
      id: LessThan(id),
      country: {
        country: "France"
      }
    };
    const user = await this.userRepository.find({ relations: ["country"], where });
    if (!user) return {
      message: "notFound"
    };
    return user;
  }

  async findAndCountUser() {
    const [items, count] = await this.userRepository.findAndCount({ relations: ["country"] });
    console.log(count);
    return items;
  }

  async updateUserOne(date: { name: string, id: number }) {
    // return await this.userRepository.update({ id: date.id }, { firstName: date.name });
    // or
    const user = await this.userRepository.findOneBy({ id: date.id });
    if (user) {
      user.firstName = date.name;
      return await this.userRepository.save(user);
    }
    return [];
  }

  async deleteUser(userId: number) {
    // return await this.userRepository.delete({ id: user });
    //or
    const user = await this.userRepository.findOneBy({ id: userId });
    if(user) {
      return await this.userRepository.remove(user)
    }
    return  []
  }

}
