import userSchema from '../../models/userSchema.js'

    async function read(request, response){
        const userList = await userSchema.find();
        return response.json(userList)
    }

    async function create(request, response){
        const {id, userNome, userEmail, userCpf, userPassword, userDataNasc, createdAt} = request.body

        if(!userNome || !id){
            //erro
            return response.status(400).json({
                erro: 'necessario preencher nome e id'})
        }

        const userCreated = await userSchema.create({
            id,
            userNome,
            userEmail,
            userCpf,
            userPassword,
            userDataNasc,
            createdAt
        })
        return response.json(userCreated)
    }
 export default {create, read}


    
