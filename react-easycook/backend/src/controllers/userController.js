import userSchema from '../../models/userSchema.js'

    async function read(request, response){
        const userList = await userSchema.find();
        return response.json(userList)
    }
/*
    async function readOne(request, response){
        const {id} = request.params
        const user = await userSchema.findOneAndReplace({_id: id})
        return response.json(user)
    }
*/
    async function create(request, response){
        const {id, userNome, userEmail, userCpf, userPassword, userDataNasc, createdAt} = request.body

        if(!userNome || !id || !userEmail || !userCpf || !userPassword || !userDataNasc){
            //erro
            return response.status(400).json({
                erro: 'preencha todos os campos'})
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

    async function deleteUser(request, response){
        const {id} = request.params

        const userDeleted = await userSchema.findOneAndDelete({_id: id})

        if(userDeleted){
            return response.json(userDeleted)
        }
        return response.status(401).json({error: 'não foi encontrado o registro para deletar'})
    }
     
    async function update(request, response){
        const {id} = request.params
        const updateData = request.body

        try{
            const updatedUser = await userSchema.findOneAndUpdate({_id:id}, updateData,{new:true})
        
        if(updatedUser){
            return response.json(updatedUser)
        }
        return response.status(404).json({error: 'não foi encontrado o registro para atualizar'})
        }
        catch(error){
            return response.status(500).json({ error: 'erro interno do servidor' })
        }
    }

 export default {create, read, deleteUser, update}


    
