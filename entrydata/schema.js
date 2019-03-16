const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Entry = new Schema({
	Date:{
		type: Number 
	},
	Entry:{
		type: String
	}
},{
	collection: 'posts'
})

module.exports = mongoose.model('Entry', Entry)