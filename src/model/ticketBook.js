const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const ticketSchema = new mongoose.Schema({
  movesname :{
    type: 'string',
    require:true,
    unique:true,

  },
  thaterWebsite:{
    type: 'string',
    require:true,
    unique:true,
  },
  thaterContactNum:{
    type: 'number',
    require:true,
    unique:true,
  },
  location:{
    type: 'string',
    require:true,
    unique:true,
  }
       
   
}, { timestamps: true })


module.exports = mongoose.model('theatersModels', ticketSchema)