   

      const mongoose = require("mongoose")


      const connection = mongoose.connect("mongodb+srv://saurav:mallik@cluster0.2oyafkb.mongodb.net/evaldb?retryWrites=true&w=majority")

      module.exports = {connection}