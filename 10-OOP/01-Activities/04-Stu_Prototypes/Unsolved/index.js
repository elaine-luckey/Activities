// TODO: Add a comment describing what kind of function this is
//constructor function
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
//used to add the addComment function method to all instances of BlogPost objects
BlogPost.prototype.addComent = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComent('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
//['Nice post, I like it!']
console.log(post.comments);
