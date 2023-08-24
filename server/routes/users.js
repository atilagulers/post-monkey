import express, {Router} from 'express';

import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';

const router = express.Router();

//* GET
router.get('/:id', getUser);
router.get('/id/friends', getUserFriends);

//* UPDATE
router.patch('/:id/:friendId', addRemoveFriend);

export default router;
