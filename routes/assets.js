const path = require('path');

module.exports = [{
  method: 'GET',
  path: '/assets/{filename}',
  handler(request, reply) {
    const filePath = path.join(__dirname, '..', 'public', 'assets', request.params.filename);

    reply.file(filePath);
  },
}];
