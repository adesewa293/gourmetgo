const { Schema } = require("mongoose");

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
})