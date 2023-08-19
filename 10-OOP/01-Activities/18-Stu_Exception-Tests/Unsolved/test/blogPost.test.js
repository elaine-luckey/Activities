const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
    it("should throw an error when authorName is less than 2 characters long", () => {
      const shortAuthorName = 'A';
      expect(() => new BlogPost(shortAuthorName)).toThrow("Author must be at least 2 characters long.");
    });
  

  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.

    it("should throw an error when authorName contains invalid characters", () => {
      const  invalidAuthorName = "John_Doe$";
      expect(() => new BlogPost(invalidAuthorName)).toThrow("Author must only contain letters and spaces, no special characters are allowed.");
    });

});
