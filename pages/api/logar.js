import JSONDatabase from '../../config/database';

export default async function Handler(req, res) {
    try {
        const dbUsers = new JSONDatabase('users');
        const users = await dbUsers.getAll();
        
        const user = users.find(u => req.body.email == u.email && req.body.senha == u.senha);

        if(user){
            res.status(200).json(user);
        }else{
            throw new Error("Usuário não encontrado.");
        }
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}