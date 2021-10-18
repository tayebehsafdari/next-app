export default (req, res) => {
    // console.log(req, res);
    const {query: {id}} = req;
    let user = {
        id: id,
        name: 'Tayebeh Safdari'
    };
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({data: user, status: 'success'}));
}