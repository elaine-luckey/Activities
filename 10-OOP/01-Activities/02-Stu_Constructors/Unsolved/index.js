// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost (authorName, title, text, createdOn)
    this.authorName = authorName,
    this.title = title,
    this.text = text,
    this.createdOn = createdOn

    this.printMetaData = function () {
        console.log(`Created by ${this.authorName} on ${this.createdOn} date.`);
    };

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor

const newPost = new BlogPost(
    "Harry Potter",
    "New Post",
    "Post Text",
    "08/01/2023",
);


// const BlogPost1 = new BlogPost("Harry Potter", "December 1, 1990");
// const BlogPost2 = new BlogPost("Random Person", "January 1, 2000");
// const BlogPost3 = new BlogPost("Real Person", "March 1, 2005");




// TODO: Call the 'printMetaData()' method on the new object
BlogPost1.printMetaData();
BlogPost2.printMetaData();
BlogPost3.printMetaData();