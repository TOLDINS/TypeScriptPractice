import mongoose =require('mongoose');
type OptionType={
    db:string
}
export const connect=({db}:OptionType):void=>{
    const connect=()=>{
        mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        }).then(()=>{
            return console.info('Db connected');
        }).catch(error=>{
            return process.exit(1); 
        });
        
    }
    connect();
    mongoose.connection.on('disconnected',connect);

}