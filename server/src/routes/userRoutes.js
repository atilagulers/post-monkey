import express from 'express';

import {
  getUserByUsername,
  getUserFriends,
  addRemoveFriend,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

router.get('/:username', getUserByUsername);

router.patch('/:userId', updateUser);

router.get('/id/friends', getUserFriends);

router.patch('/:id/:friendId', addRemoveFriend);

export default router;
