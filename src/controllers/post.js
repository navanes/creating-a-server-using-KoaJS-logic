import fs from "fs";

class Post {
    data = fs.readFileSync("./data/posts.json", "utf8");
    getPosts = (ctx) => {
        ctx.set('Content-Type', 'application/json');
        ctx.body = this.data;
    };
    getPost = (ctx) => {
        let selectedPost = Number(ctx.params.id);
        const selectedId = JSON.parse(this.data).find((value) => {
            if (value.id === selectedPost) {
                return value;
            }
        })
        if(selectedId) {
            ctx.set("Content-Type", "application/json");
            ctx.body = JSON.stringify(selectedId);
        } else {
            ctx.status= 404;
            ctx.set("Content-Type", "text/plain");
            ctx.body = 'error code';
        }
    }
}

export default Post;
