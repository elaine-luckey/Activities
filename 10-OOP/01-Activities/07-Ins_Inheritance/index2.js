

// Inheritence Constructor Function ##################################

function Book(title){
    this.title = title,
    this.pageCount = pageCount
}

Book.prototype.read = function (){
    console.log(`Reading ${this.title}`)
}

const Book1 = new Book("Title");

function HistoryBook(title, pageCount, releaseDate) {
    
    //the properties after the comma get passed to the parent constructor function
    Book.call(this, title, pageCount)

    //My own properties
    this.releaseDate = releaseDate
}

const HB1 = new HistoryBook("The Guns", 600, "2011");

console.log(HB1);


// Inheritence using class ################################################

class Book {
    constructor(title, pageCount){
        this.title = title,
        this.pageCount = pageCount
    }
    read() {
        console.log("");
    }
}

class HistoryBook {
    constructor(title, pageCount, releaseDate) {
        super(title, pageCount)
        this.releaseDate = releaseDate
    }
}