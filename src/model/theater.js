const mongoose = require('mongoose')


const thaterSchema = new mongoose.Schema({
  thaterName:{
    type: 'string',
    require:true,
    unique:true,

  },
  thaterWebsite:{
    type: 'string',
    require:true,
    unique:true,
  },
  thatercontactNum:{
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


module.exports = mongoose.model('theatersModels', thaterSchema)