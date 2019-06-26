import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {FormControl} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-un-read-book',
  templateUrl: './un-read-book.component.html',
  styleUrls: ['./un-read-book.component.css']
})
export class UnReadBookComponent implements OnInit {

  books: Book[] = [];
  inputControl = new FormControl();

  constructor(
    private bookService: BookService) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getBooks().subscribe(next => {
      this.books = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  toggleBook(i) {
    const book = this.books[i];
    const bookData = {
      ...book,
      read: !book.read
    };
    this.bookService.updateBook(bookData).subscribe(next => {
      this.books[i].read = next.read;
    });
  }

  addBook() {
    const book: Partial<Book> = {
      name: this.inputControl.value,
      read: false
    };

    this.bookService.createBook(book).subscribe(next => {
      this.books.unshift(next);
      this.inputControl.setValue('');
    });
  }

  deleteBook(i) {
    const book = this.books[i];
    this.bookService.deleteBook(book.id).subscribe(() => {
      this.books = this.books.filter(t => t.id !== book.id);
    });

  }

}
