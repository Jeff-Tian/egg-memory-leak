'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const query = this.ctx.query;
    if (Number(query.pageSize) !== -1) {
      return this.ctx.body = this.ctx.service.home.hello(query);
    }

    query.page = 1;
    query.pageSize = 10;

    let pageResult = this.ctx.service.home.hello(query);
    while (pageResult.length > 0) {
      this.ctx.res.write(JSON.stringify(pageResult));

      query.page++;
      pageResult = this.ctx.service.home.hello(query);
    }

    this.ctx.res.end();
  }
}

module.exports = HomeController;
