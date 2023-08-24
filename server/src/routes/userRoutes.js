import express from 'express';

import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';

const router = express.Router();

// Get user by username
router.get('/:username', getUser);

// Update user by user id
router.patch('/:userId', getUser);

router.get('/id/friends', getUserFriends);

//* UPDATE
router.patch('/:id/:friendId', addRemoveFriend);

export default router;
