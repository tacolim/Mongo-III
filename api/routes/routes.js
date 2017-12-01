const postControllers = require ('../controllers/postControllers');
const userControllers = require ('../controllers/userControllers');

module.exports = (app) => {
  //add your new routes here
  app.route('/login').post(userControllers.userLogin);

  app.route('/new-user').post(userControllers.userCreate);
  
  app.route('/posts').get(postControllers.postsList)

  
  app.route('/posts/:id')
    .get(postControllers.postFind)
    .put(postControllers.commentAdd);
    
  app.route('/new-post').post(postControllers.postCreate);
};
