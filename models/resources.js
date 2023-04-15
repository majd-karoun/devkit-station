const mongoose = require('mongoose');


const resourceSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
})

const Resource = mongoose.model('Resource', resourceSchema, 'resources' )

module.exports = Resource;