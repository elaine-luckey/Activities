// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.

class ForumItem {
  constructor(authorName, text, createdOn){
    this.authorName = authorName,
    this.text = text,
    this.createdOn = createdOn
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
function BlogPost () {

  ForumItem.call(this, authorName, text, createdOn)
  this.comment = [];
  this.title = title;

  addComment(comment) {
    this.comments.push(comment);
  }

  
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    // this.authorName = authorName;
    // this.text = text;
    // this.createdOn = createdOn;
    // this.reaction = reaction;
    super(this, authorName, text, createdOn);
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

// TODO: Log both newly created BlogPost and Comment to the console.
