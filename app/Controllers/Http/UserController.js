'use strict'
const Database = use('Database');

class UserController {

    async addUser( { request, response } ){
        try {
            const body = request.post();
            const Userid = await Database
            .insert({...body,created_at: new Date(), updated_at: new Date()})
            .into('users')
            .returning('id')
            response.send({
                message: 'success',
                data: {...body, Userid}
            });    
        } catch (error) {
            console.log(error)
            response.send({
                message: 'error',
                data: ""
            });
        }
    }

    async getUser ({ request, response }){
        try {
            const query = request.get()
            let result = await Database.select('*').from('users');
            response.send({
                message: "Hello from Get",
                result
            })  
        } catch (error) {
            console.log(error);
            response.send({
                message: "Error",
                result: []
            })
        }
    }
}

module.exports = UserController
