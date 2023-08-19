

const array = [1, 2, 3];
console.log(array);


const obj = {
    property: "values",
}

console.log(obj);



function Book (title, pageCount) {
    this.title = title,
    this.pageCount = pageCount,
    this.read = function(){
        console.log(`I am reading ${this.title}`)
    }
}

//When using the prototype it is accessing all the objects at any level

Book.prototype.owner = "Me!";
Book.prototype.finish = function () {
    console.log(`I am finished with ${this.title}, get me a new one!`);
}

const Book1 = new Book ("title", 500);
console.log(Book1);

console.log(Book1.owner);

Book1.read();
Book1.finish();
