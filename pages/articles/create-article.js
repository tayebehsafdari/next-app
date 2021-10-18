import {useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import fetch from 'node-fetch';

const CreateArticle = () => {
    const [form, setForm] = useState({
        title: '',
        body: ''
    });
    const submitHandler = async (event) => {
        event.preventDefault();
        let res = await fetch('http://localhost:3000/api/articles/create-article', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {'Content-type': 'application/json'}
        });
        res = await res.json();
        console.log(res);
    }
    const changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        setForm({
            ...form,
            [nam]: val
        });
    }
    return (
        <div className="create-article">
            <Container>
                <h2>Create an article</h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="title">
                        <Form.Label>title</Form.Label>
                        <Form.Control type="text" name="title" value={form.title} onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="body">
                        <Form.Label>body</Form.Label>
                        <Form.Control as="textarea" rows={3} name="body" value={form.body} onChange={changeHandler}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default CreateArticle;