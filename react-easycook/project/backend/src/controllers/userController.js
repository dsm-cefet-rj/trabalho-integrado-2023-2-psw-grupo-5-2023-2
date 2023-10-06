import Usuario from '../../models/userSchema.js'


    
    function read(request, response){
        return response.json({
            success: true
        })
    }

    function create(request, response){
        const {id, userNome, userEmail, userCpf, userPassword, userDataNasc, createdAt} = request.body

        console.log(id)
        console.log(userNome)
    }
 export default {create, read}


    
