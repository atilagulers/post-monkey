import httpStatus from 'http-status';
import Post from '../models/Post.js';

/**
 * Get user's posts.
 * @GET /posts/:userId
 */
export const getPostsByUserId = async (req, res, next) => {
  try {
    const {userId} = req.params;
    let {page, limit} = req.query;

    if (!page) page = 1;
    if (!limit) limit = 10;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const currentPage = isNaN(pageNumber) || pageNumber < 1 ? 1 : pageNumber;
    const postsPerPage =
      isNaN(limitNumber) || limitNumber < 1 ? 10 : limitNumber;

    const skip = (currentPage - 1) * postsPerPage;

    const posts = await Post.find({user: userId})
      .sort({createdAt: -1})
      .skip(skip)
      .limit(postsPerPage);

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
