import {RoutesTypeOption} from '../types/routes';

export const routes=({app}:RoutesTypeOption)=>{
    app.get('/api/user',(req,res)=>{

        return res.send('Test');

    })

}