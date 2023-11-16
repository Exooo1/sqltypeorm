import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import {SetUserDTO, SetUserMetadataDTO} from "./user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post("add-user")
  newUser(@Body() data: SetUserDTO) {
    console.log('here!')
    return this.userService.newUser(data);
  }

  @Get("get-fully")
  getUserWithCountry() {
    return this.userService.getUserWithCountry();
  }

  @Get("find-user/:name")
  findAUser(@Param("name") name: string) {
    return this.userService.findAUser(name);
  }

  @Get("find-userTwo/:id")
  findUserTwoQuery(@Param("id") id: number) {
    return this.userService.findUserTwoQuery(id);
  }

  @Get("find-userCount")
  findAndCountUsers() {
    return this.userService.findAndCountUser();
  }

  @Post("update-user")
  updateUser(@Body() data: { name: string, id: number }) {
    console.log(data);
    return this.userService.updateUserOne(data);
  }

  @Delete("delete/:id")
  deleteUser(@Param("id") id) {
    return this.userService.deleteUser(id);
  }

  @Post("user-metadata")
  userMetadata(@Body() data:SetUserMetadataDTO){
    return this.userService.userMetadata(data)
  }
}
