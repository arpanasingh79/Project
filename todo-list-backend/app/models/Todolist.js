const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../libs/timeLib')

const Todolist = new Schema({
  userId: {
    type: String
  },
  
  lists:[
      {
        listId:{
            type:String,
            index: true,
            unique: true
        },
        listOpen:{type:Boolean,default:true},
        title:{
            type:String,
            default: "List ABC"
        }

      }
  ],
  items:[
      {
          itemId:{type:String,index: true,unique: true},
          itemText:{type:String},
          itemOpen:{type:Boolean,default:true},
          itemParent:{type:String}
      }
  ],
  creationTime: {
    type: Date,
    default: time.now()
  }
})

module.exports = mongoose.model('Todolist', Todolist)
