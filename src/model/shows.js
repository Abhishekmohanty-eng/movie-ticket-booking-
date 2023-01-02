const mongoose = require('mongoose')


const showsSchema = new mongoose.Schema({
  showsName:{
    type: 'string',
    require:true,
    unique:true,

  },
  showsDateOfrelease:{
    type: 'Date',
    require:true,
  
  },theterNameOfshows:{
    type: 'string',
    require:true,
  },
  showsTimeA:{
    type: 'string',
    require:true,
    seatNumA:{
      min:1,
      max:100
    }
   
  },
  showTimeB:{
    type: 'string',
    require:true,
    seatNumB:{
      min:1,
      max:100
    }
   
  },
  showTimeC:{
    type: 'string',
    require:true,
    seatNumC:{
      min:1,
      max:100
    }
  } 
}, { timestamps: true })

module.exports = mongoose.model("showModels", showsSchema)