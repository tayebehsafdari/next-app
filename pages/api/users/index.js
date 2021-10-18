/* import Cors from 'cors';

const cors = Cors({
    origin: 'http://localhost:3000'
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {

    await runMiddleware(req, res, cors);
    // console.log(req, res);
    let users = [
        {id: 1, name: 'Tayebeh Safdari'},
        {id: 2, name: 'Mahtab Baseri'},
        {id: 3, name: 'Nadia Esmaeili'},
        {id: 4, name: 'Bahara Norasteh Fard'},
        {id: 5, name: 'Farinaz Kaviani Far'},
    ];
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({data: users, status: 'success'}));
} */
import Cors from 'cors';
import nc from "next-connect";

const handler = nc();

handler
    .use(Cors({
        origin: 'http://localhost:3000'
    }))
    .get(async (req, res) => {
            let users = [
                {id: 1, name: 'Tayebeh Safdari'},
                {id: 2, name: 'Mahtab Baseri'},
                {id: 3, name: 'Nadia Esmaeili'},
                {id: 4, name: 'Bahara Norasteh Fard'},
                {id: 5, name: 'Farinaz Kaviani Far'},
            ];
            res.json({data: users, status: 'success'});
        }
    );
export default handler;