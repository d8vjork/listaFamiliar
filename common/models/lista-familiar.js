'use strict';

module.exports = function(Listafamiliar) {

  Listafamiliar.beforeRemote('create', function (ctx, model, next) {
    if (ctx.req.accessToken) {
      console.log(ctx.args)
      ctx.args.data.owner = ctx.req.accessToken.userId

      next()
    }
  })

};
