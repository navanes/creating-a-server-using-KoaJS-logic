import fs from "fs";

class User {
    data = fs.readFileSync("./data/users.json", "utf8");
    getUsers = (ctx) => {
        ctx.set("Content-Type", "application/json");
        ctx.body = this.data;
    };
    getUser = (ctx) => {
        let selectedUser = Number(ctx.params.id);
        const selectedId = JSON.parse(this.data).find((value) => {
            if (value.id === selectedUser) {
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

export default User;