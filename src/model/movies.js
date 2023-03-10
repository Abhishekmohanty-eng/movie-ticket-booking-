const mongoose = require('mongoose')


const moviesSchema = new mongoose.Schema({
  moviesName:{
    type: 'string',
    require:true,
    unique:true,

  },
  moviesDateOfrelease:{
    type: 'Date',
    require:true,
  
  },theterNameOfMovie:{
    type: 'string',
    require:true,
  },
  movieTimeA:{
    type: 'string',
    require:true,
    seatNumA:{
      min:1,
      max:100
    }
   
  },
  movieTimeB:{
    type: 'string',
    require:true,
    seatNumB:{
      min:1,
      max:100
    }
   
  },
  movieTimeC:{
    type: 'string',
    require:true,
    seatNumC:{
      min:1,
      max:100
    }

  }
       
   
}, { timestamps: true })


module.exports = mongoose.model('moviesModels', moviesSchema)