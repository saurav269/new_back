   

     const express = require("express")
const { MediaModel } = require("../model/Media.model")

     const mediaRouter = express.Router()


     mediaRouter.get('/', async(req,res) =>{
      const device1 = req.query.device
      const device2 = req.query.device
  
         if(device1){
          try{
              let media = await MediaModel.find({device : device1})
              res.send(media)
          }catch(err){
              console.log(err)
              res.send({"msg" : err})
          }  
         }else if(device2){
          try{
              let media = await MediaModel.find({device : device2})
              res.send(media)
          }catch(err){
              console.log(err)
              res.send({"msg" : err})
          }    
         }else if(device1 && device2){
              try{
               let media = await MediaModel.find({$and : [{device : device1},{device :device2}]})
               res.send(media)
              }catch(err){
               console.log(err)
              }
         }
         
         else{
          try{
              let media = await MediaModel.find()
              res.send(media)
          }catch(err){
              console.log(err)
          } 
         }   
    })

   //  mediaRouter.get('/top', async(req,res) =>{
   //       const max_comment = req.query.no_if_comments
   //       let max = -Infinity
       
         
   //  })

     mediaRouter.post("/create", async(req,res) =>{

        const payload = req.body
         try{
            const data = new MediaModel(payload)
            await data.save()
            res.send({"msg" :"Data has been added"})
         }catch(err){
            console.log(err)
         }
     })

     mediaRouter.patch("/update/:id", async(req,res) =>{
         const ID = req.params.id

         const payload = req.body

         const rMedia = await MediaModel.findOne({"_id" : ID})

         const Media_id = rMedia.userID

         const making_req_id = req.body.userID
         try{
            if(Media_id !== making_req_id){
               res.send({"msg":"You are not authorized"})
            }else{

               await MediaModel.findByIdAndUpdate({_id : ID},payload)
               res.send({"msg": "Data has been updated"})
            }

         }catch(err){
            console.log(err)
         }
     })

     mediaRouter.delete("/delete/:id", async(req,res) =>{
      const ID = req.params.id
      const rMedia = await MediaModel.findOne({"_id" : ID})

      const Media_id = rMedia.userID

      const making_req_id = req.body.userID
      try{
         if(Media_id !== making_req_id){
            res.send({"msg":"You are not authorized"})
         }else{
            await MediaModel.findByIdAndDelete({_id : ID})
            res.send({"msg": "Data has been deleted"})
         }
      }catch(err){
         console.log(err)
      }
  })

     module.exports = {mediaRouter}

     //63f36ffa4beb47c010a5d7c6