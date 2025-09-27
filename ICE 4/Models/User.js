const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const roleSchema = new mongoose.Schema({
    organisationId: { type: mongoose.Schema.Types.ObjectId, ref: "Organisation" },
    role: { type: String, enum: ["admin", "manager", "user"], required: true }
    }, { _id: false });

    const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [roleSchema]
    });
    
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);


userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);