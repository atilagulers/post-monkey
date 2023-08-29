import express from 'express';
import {getPostsByUserId, createPost} from '../controllers/posts.js';
//import {getFeedPosts, getUserPosts, likePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/:userId', getPostsByUserId);
router.post('/', createPost);

//* UPDATE
//router.patch('/:id/like', likePost);

export default router;
