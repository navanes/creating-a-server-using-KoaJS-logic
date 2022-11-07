import { config } from "dotenv"
config();
import Koa from 'koa';
import Router from 'koa-router';
import Post from './controllers/post.js';
import User from './controllers/user.js';

const port = process.env.PORT;
const app = new Koa();
const router = new Router();
const post = new Post()
const user = new User()

router.get('/post', post.getPosts);
router.get('/post/:id', post.getPost);
router.get('/user', user.getUsers);
router.get('/user/:id', user.getUser);

app.use(router.routes());

app.listen(port, function(){
    console.log(`Server running on https://localhost:${port}`)
});



