

function Book (title, pageCount) {
    this.title = title,
    this.pageCount = pageCount
}

Book.prototype.owner = "Me!";
Book.prototype.finish = function () {
    console.log(`I am finished with ${this.title}, get me a new one!`);
}

const Book1 = new Book("title", 500);
console.log(Book1);
Book1.read();
Book1.finish();


class Book {
    constructor(title, pageCount){
        this.title = title;
        this.pageCount = pageCount;
    }

    owner = "me"

    //automatically binded to the prototype
    finish(){
        console.log(`I am reading ${this.title}`)
    }
}

const Book2 = new Book("New Title", 600);
console.log(Book2);