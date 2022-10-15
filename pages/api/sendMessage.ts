import * as dotenv from 'dotenv'
import Message from '../../mongo-models/message-model'
import connectMongo from '../../utils/mongodb'
dotenv.config()


export default async function handler(req,res){
    try{

        if(req.method = "POST"){
            await connectMongo()
    
            const message = new Message(req.body)
            await message.save()
            res.send(true)
            return
        }
        res.send(true)
    }catch(err){
        res.status(500).json(err)
    }
}
