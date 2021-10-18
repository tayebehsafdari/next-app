import nc from "next-connect";

const handler = nc();

handler
    .post((req, res) => {
        console.log(req.body);
        res.status(200).json({data: 'Article created', status: 'success'})
    });
/* export default (req, res) => {
    if (req.method === 'POST') {
        // res.statusCode = 200;
        // res.setHeader('Content-type', 'application/json');
        // res.end(JSON.stringify({data: 'Article created', status: 'success'}));
        console.log(req.body);
        res.status(200).json({data: 'Article created', status: 'success'})
    } else {
        res.statusCode = 404;
        res.setHeader('Content-type', 'application/json');
        // res.end(JSON.stringify({data: 'Note: Article could not be created', status: 'error'}));
        res.end(JSON.stringify({status: 'error'}));
    }
} */