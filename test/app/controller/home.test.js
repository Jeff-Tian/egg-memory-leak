'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => {
    app.mockService('home', 'hello', (query) => {
      return [
        require('../../../package-lock'),
      ];
    });

    return app.httpRequest()
        .get('/?page=1&pageSize=-1')
        .expect(['world'])
        .expect(200);
  });
});
