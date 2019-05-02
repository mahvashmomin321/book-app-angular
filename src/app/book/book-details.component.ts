import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from './book';


@Component({
    templateUrl: './book-details.component.html',
    // selector: 'book-details'
})


export class BookDetailsComponent implements OnInit{
    book: Book;
    constructor(private bookService:BookService,
        private route:ActivatedRoute){}

    ngOnInit():void{
        this.route.paramMap.subscribe((map)=>{
            let bookId = map.get("bookId");
            console.log(bookId);

            let id=Number(bookId);
          this.bookService.findBookById(id).subscribe((data)=>{
                this.book = data;
                console.log(data);
            });


        });
    }
   
}