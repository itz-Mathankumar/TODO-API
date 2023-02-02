const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(

  {

    title: {

      type: String,

      required: [true, 'Please add a title'],

    },

    description: {

        type: String,

    },

    is_completed: {

        type:Boolean,

        default:false,

    }

  },

  {

    timestamps: true,

  }

)

module.exports = mongoose.model('Todo', todoSchema)