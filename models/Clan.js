const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClanSchema = new Schema({
  id: ObjectId,
  name: {
    type: String,
    required: true,
  },
  motto: String,
  bungieGroupId: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Clan = mongoose.model('Clan', ClanSchema);

module.exports = Clan;
