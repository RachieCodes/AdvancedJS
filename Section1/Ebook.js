// Inheritance and Super Keyword

class Book{
  constructor(title, author, year)
  {
      this.title = title;
      this.author = author;
      this.year = year;
  }
}

class Ebook extends Book {
    constructor(title, author, year, fileSize)
    {
       super(title, author, year); 
       this.fileSize = fileSize;
    }
    download(title, fileSize)
    {
        return `$${this.title}} $${this.fileSize}}`
    }
}