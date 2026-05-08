const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/login.html") {

        fs.readFile(__dirname + "/login.html", "utf-8", (err, data) => {

            if (err) {
                console.log(err);

                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                res.end("Server error");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });

    }

    else if (req.method === "POST" && req.url === "/login.html") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            console.log(body);

            const data = querystring.parse(body);

            console.log(data);

            const username = data.username;
            const password = data.password;

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            if (username === "user" &&
                password === "secret") {

                res.end(`
                    <h1>Success</h1>

                    <p>
                        Username: ${username}
                    </p>

                    <p>
                        Password: ${password}
                    </p>
                `);

            } else {

                res.end(`
                    <h1>Login failed</h1>

                    <p>
                        Wrong username or password
                    </p>
                `);
            }
        });

    }

    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log(
        "Server running at http://localhost:3000/login.html"
    );
});