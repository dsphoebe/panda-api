import * as Koa from 'koa'

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen('7788', () => {
  console.log('Koa application is up and running on port 7788')
})
