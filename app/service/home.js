const Service = require('egg').Service;

module.exports = class HomeService extends Service {
  hello() {
    return [
      'world',
    ];
  }
};
