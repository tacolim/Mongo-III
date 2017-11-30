const postContMethod = require ('../controllers/postControllers');
const userContMethod = require ('../controllers/userControllers');

module.exports = (app) => {
  //add your new routes here
  app.route('/').get(userContMethod.loginPage);
  
  app.route('/login').post(userContMethod.login);

  app.route('/create-user').post(userContMethod.createUser);

  app.route('/new-user').post(userContMethod.newUser);
  
  app.route('/posts')
    .get(postContMethod.listPosts)
    .post(postContMethod.addPost);
  
  app.route('/posts/:id')
    .get(postContMethod.findPost)
    .put(postContMethod.addComment);
    
  app.route('/new-post').post(postContMethod.createPost);
};
