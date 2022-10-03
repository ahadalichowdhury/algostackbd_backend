const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    Name: { type: String },
    email: { type: String, unique: true },
    Position: { type: String },
    image: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    ProfessionDetails: { type: String },
    Expertise: { type: String },
    Comfortable: { type: String },
    Familiar: { type: String },
    Tools: { type: String },
    PersonalDetails: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const UsersModel = mongoose.model("users", DataSchema);
module.exports = UsersModel;
