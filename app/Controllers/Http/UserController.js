'use strict'

class UserController {

    async addUser( { request, response } ){
        const body = request.post()
        response.send(body);
    }

    async getUser ({ request, response }){
        const query = request.get()
        response.send({
            message: "Hello from Get",
            query
        })
    }
}

module.exports = UserController
