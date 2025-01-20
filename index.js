const jsonServer = require('json-server')

const TSServer = jsonServer.create()

const middleware =jsonServer.defaults()

const PORT = 3000

const route = jsonServer.router('db.json')


TSServer.use(middleware)

TSServer.use(route)

TSServer.listen(PORT,()=>{
console.log(`TSServer started at port ${PORT}`);
})