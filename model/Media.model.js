    


         const mongoose = require("mongoose")

         const mediaSchema = mongoose.Schema({
              title : String,
             body : String,
              device : String,
              no_if_comments : Number,
              userID : String
         },{
            versionKey : false
         })
    
         const MediaModel = mongoose.model("media", mediaSchema)
    
         module.exports = {MediaModel}