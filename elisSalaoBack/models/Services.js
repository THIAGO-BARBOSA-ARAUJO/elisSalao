import mongoose from "mongoose"
//import moment from "moment"

const serviceSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    

})

export default mongoose.model('Service', serviceSchema)