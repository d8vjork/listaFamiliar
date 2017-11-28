'use strict';

module.exports = function(Listafamiliar) {

  Listafamiliar.beforeRemote('create', function (ctx, next) {
    if (ctx.req.accessToken) ctx.args.data.owner = ctx.req.accessToken.userId
    next()
  })

  Listafamiliar.afterRemote('create', function (ctx, model, next) {
    if (ctx.req.accessToken) {
      const Usuario = Listafamiliar.app.models.Usuario

      Usuario.findById(ctx.req.accessToken.userId, function (err, usuario) {
        if (err) return next(err)

        usuario.listaFamiliarId = model.id
        usuario.save()
        next()
      })
    }
  })

};
