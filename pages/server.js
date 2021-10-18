const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        server.get('/myroute', (req, res) => {
            res.end('Hello World!');
        });
        server.get('*', (req, res) => {
            return handle(req, res);
        });
        server.listen(3000, (err) => {
            if (err) throw err;
            console.log("Example app listening at http://localhost:3000");
        });
    })
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    });