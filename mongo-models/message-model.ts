import {Schema, model, models} from  "mongoose"

const messageSchema = new Schema({
    email : String,
    subject : String,
    body : String,
})


const Message = models.Message || model("Message", messageSchema)

export default Message