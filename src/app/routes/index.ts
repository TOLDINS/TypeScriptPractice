import {UserController} from '../controllers/user.controller';

import {RoutesTypeOption} from '../types/routes';


export const routes=({app}:RoutesTypeOption)=>{
    app.post('/api/user', async(req,res)=>{
        const{
            email,
            first_name,
            last_name


        }=req.body;

        const user= await UserController.createUser({
            email,
            first_name,
            last_name
        });

        return res.send(user);

    })

}