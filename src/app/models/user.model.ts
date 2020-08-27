import mongose=require('mongoose');
import {Schema,Document} from 'mongoose';
export interface IUser extends Document{
    email:string,
    first_name:string,
    last_name:string
}
const UserSchema:Schema =new Schema({
    email:{type:String,required:true,unique:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true}
})

export const UserModel=mongose.model<IUser>('User',UserSchema);