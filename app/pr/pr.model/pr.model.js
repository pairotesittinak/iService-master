var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Add Model
var newsSchema = mongoose.Schema({
    title: String,
    group_id: Number,
  	date: { 
  		type: Date, 
  		default: Date.now() 
  	},
  	author: String,
  	image: {type: Schema.Types.Object, ref: 'File' },
    description: String
}, 
{collection: 'News'}
);
var newss = mongoose.model('newss', newsSchema);

var File = mongoose.model("File", new Schema({}, {strict: false}), "fs.files" );
