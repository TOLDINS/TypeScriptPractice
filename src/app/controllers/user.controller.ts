import {IUser, UserModel} from '../models/user.model';
interface ICreateUserInput{
 email:IUser['email'],
 first_name:IUser['first_name'];
 last_name:IUser['last_name']
}

export const UserController={
    createUser: async({
        email,
        first_name,
        last_name
    }:ICreateUserInput):Promise<IUser> =>{
     return UserModel.create({
         email,
         first_name,
         last_name
     }).then((data:IUser)=>{
         return data;

     }).catch((error:Error)=>{
         throw error;
     })
    }
}
