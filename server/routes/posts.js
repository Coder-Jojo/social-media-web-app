import express from 'express';

const router = express.Router();

import {getPosts} from '../controller/post.js'

router.get('/', getPosts)

export default router;