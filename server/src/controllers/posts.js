import httpStatus from 'http-status';
import Post from '../models/Post.js';

/**
 * Get user's posts.
 * @GET /posts/:userId
 */
export const getPostsByUserId = async (req, res, next) => {
  try {
    const {userId} = req.params;

    const posts = await Post.find({user: userId});
    console.log(posts);

    res.status(httpStatus.OK).json(posts);
  } catch (error) {
    next(error);
  }
};

/**
 * Create new post.
 * @POST /posts
 */
export const createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);

    res.status(httpStatus.CREATED).json(newPost);
  } catch (error) {
    next(error);
  }
};
