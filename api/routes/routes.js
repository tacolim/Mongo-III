const postContMethod = require ('../controllers/postControllers');
const userContMethod = require ('../controllers/userControllers');

module.exports = (app) => {
  //add your new routes here
  app.route('/').post(userContMethod.login);
  
  app.route('/create-user').post(userContMethod.newUser);
  
  app.route('/posts').get(postContMethod.listPosts);
  
  app.route('/posts/:id')
    .get(postContMethod.findPost)
    .post(postContMethod.addComment);
    
  app.route('/new-post').post(postContMethod.createPost);
};
