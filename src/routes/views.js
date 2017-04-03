module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    const data = {
      title: 'Introduction to Handlebars',
      message: 'Let\s start using templating',
      user: {
        firstName: 'Pete',
        lastName: 'Blanks',
        role: 'admin'
      }
    }
    reply.view('index', data);
  }
};
