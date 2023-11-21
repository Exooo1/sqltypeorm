import {Body, Controller, Get, Post} from "@nestjs/common";
import {BooksService} from "./books.service";

@Controller('books')
export class BooksController {
    constructor(private readonly bookService:BooksService) {
    }

    @Get()
    getBooks(){
      return this.bookService.getBooks()
    }

    @Post('add')
    addBooks(@Body() data:any){
      return this.bookService.addBooks(data)
    }

    @Post('manu')
    createManu(@Body() data:any){
        return this.bookService.createManu(data)
    }

    @Post('pc')
    createPC(@Body() data:any){
        return this.bookService.createPC(data)
    }

    @Post('gamers')
    createGamers(@Body() data:any){
        return this.bookService.createGamers(data)
    }

    @Get('pc')
    getPC(){
        return this.bookService.getPC()
    }
}