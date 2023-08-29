import httpStatus from 'http-status';
import User from '../models/User.js';

/**
 * View User Details.
 * @GET /users/:username
 */
export const getUserByUsername = async (req, res) => {
  try {
    const {username} = req.params;
    const user = await User.find({username});

    res.status(httpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * View User Details.
 * @PATCH /users/:userId
 */
export const updateUser = async (req, res) => {
  const {id: userId} = req.user;

  try {
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(httpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const {id} = req.params;
    const friends = await User.findById(id).populate('friends');

    res.status(httpStatus).json(friends);
  } catch (error) {
    next(error);
  }
};

//* UPDATE
export const addRemoveFriend = async (req, res) => {
  try {
    const {id: userId, friendId} = req.params;
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== userId);
    } else {
      user.friends.push(friendId);
      friend.friends.push(userId);
    }

    await user.save();
    await friend.save();

    const updatedUser = user.populate('friends');
    res.status(httpStatus.OK).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
