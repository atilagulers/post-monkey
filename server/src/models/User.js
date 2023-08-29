import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 4,
      maxLength: 16,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    birthday: {
      type: Date,
      required: true,
    },
    avatar: {
      type: String,
      default: '/avatars/default-avatar.jpg',
    },
    //posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    //friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    //friendRequests: [
    //  {
    //    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    //    status: {
    //      type: String,
    //      enum: ['pending', 'accepted', 'rejected'],
    //      default: 'pending',
    //    },
    //  },
    //],
  },
  {timestamps: true}
);

const User = mongoose.model('User', userSchema);
export default User;
