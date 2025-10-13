const http = require("http");
const url = require("url");

const posts = [
    {
        id: 1,
        title: "First Post",
        content: "This is the first post.",
        author: "First author",
        published: false,
        createdAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is the second post.",
        author: "Second author",
        published: true,
        createdAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
    }
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    console.log(path);
    console.log(method);


    if (path === "/posts" && method === "GET") {
        console.log("GET /posts");
        getPosts(req, res);
    } else if (path.startsWith("/posts/") && method === "GET") {
        console.log("GET /posts/:id");
        getPostbyId(req, res);
    }
});

server.listen(3002, () => {
});

const getPosts = (req, res) => {
    const publishedPosts = posts.filter( (post) => {
        return post.published === true;
    });
    res.writeHead(200, { "Content-Type": "application/json"})
    res.end(JSON.stringify(publishedPosts));
}

const getPostbyId = (req, res) => {
    const path = url.parse(req.url).pathname;
    const id = parseInt(path.split("/")[2]);
    const post = posts.find( (post) => {
        return post.id === id && post.published === true;
    });
    if (post) {
        res.writeHead(200, { "Content-Type": "application/json"})
        res.end(JSON.stringify(post));
    } else {
        res.writeHead(404, { "Content-Type": "application/json"})
        res.end(JSON.stringify({ message: "Post not found"}));
    }
}
