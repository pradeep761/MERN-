const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    default: 'incomplete',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Task', taskSchema);
