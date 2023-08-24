import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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
      minlength: 6,
    },
    avatar: {
      type: String,
      default: '/avatars/default-avatar.jpg',
    },
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    friendRequests: [
      {
        sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        status: {
          type: String,
          enum: ['pending', 'accepted', 'rejected'],
          default: 'pending',
        },
      },
    ],
  },
  {timestamps: true}
);

const User = mongoose.model('User', userSchema);
export default User;
