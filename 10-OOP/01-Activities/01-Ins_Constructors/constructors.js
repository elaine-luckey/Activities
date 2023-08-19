

//If you keep defining like below, you are constantly repeating yourself


// const Book1 = {
//     title: "Harry Potter 1",
//     pageCount: 500,
//     read: function (){
//         console.log(`I am reading ${this.title}`)
//     }
// }



// const Book2 = {
//     title: "Fire and Water",
//     pageCount: 1000,
//     read: function(){
//         console.log(`I am reading ${this.title}`)
//     }
// }


// 1000 books in this list of books
//Create a function that can be reused over and over and can define as many books as you want without writing so much
//Below is called a constructor function
//You recognize a pattern and create a constructor function. it allows you to create as many objects as you want and you do not have to redeclare anything

function Book (title, pageCount) {
    this.title = title,
    this.pageCount = pageCount,
    this.read = function(){
        console.log(`I am reading ${this.title}`)
    }
}


const Book1 = new Book("Harry Potter1", 500);
const Book2 = new Book("Fire and Water", 1000);
const Book3 = new Book ("New Title", 100);

Book1.read();
Book2.read(); 