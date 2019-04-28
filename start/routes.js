'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.get('/', 'UserController.getUser')
    Route.post('/', 'UserController.addUser')
}).prefix('/api/v1/user')

Route.group(() => {
    Route.get('/', ({response}) => {
        response.send({ message: "Hello World from task" })
    })
    Route.post('/', ({response}) => {
        response.send({ message: "Hello World" })
    })
}).prefix('/api/v1/task')