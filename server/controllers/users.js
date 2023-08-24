import httpStatus from 'http-status';
import User from '../models/User.js';

//* GET
export const getUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findById(id);

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
