import fetch from 'node-fetch';
import Header from "../components/Header";
import FirstArticles from "../components/FirstArticles";
import SecondArticles from "../components/SecondArticles";
import ListUsers from "../components/ListUsers";
import Link from "next/link";
import {Container, Form, Button} from 'react-bootstrap';
import Head from 'next/head';
import Error from 'next/error';

const Home = (props) => {
    console.log(props);
    if (props.errorCode) {
        return <Error statusCode={props.errorCode} title="Page Not Found"/>
    }
    // const [posts, setPosts] = useState([]);
    /* useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json));
    }, []); */
    return (
        <div className="home-page py-5">
            <Container>
                <Head>
                    <title>Home</title>
                </Head>
                <h2>Home</h2>
                <Header/>
                <br/>
                <h2>Articles</h2>
                <FirstArticles/>
                <br/>
                <SecondArticles posts={props.posts}/>
                <br/>
                <h2>List of users</h2>
                <ListUsers users={props.users}/>
                <br/>
                <h2>Creating an article</h2>
                <Link href="/articles/create-article">
                    <a>an article</a>
                </Link>
            </Container>
        </div>
    );
}

/* export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    // console.log(posts);
    return {
        props: {posts}
    }
} */

export async function getStaticProps() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let errorCode = res.ok ? false : res.statusCode;
    let posts = await res.json();

    res = await fetch('http://localhost:3000/api/users');
    let users = await res.json();
    console.log(users);

    // console.log(posts);
    return {
        props: {
            errorCode,
            posts,
            users: users.data
        }
    }
}

export default Home;