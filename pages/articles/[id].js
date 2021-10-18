import fetch from 'node-fetch';
import Head from 'next/head';

const singlePageArticle = (props) => {
    const {post} = props;

    return (
        <div className="single-page-article">
            {
                post
                    ? (
                        <>
                            <Head>
                                <title>{post.title}</title>
                            </Head>
                            <h2>Single page with id={post.id}</h2>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </>
                    )
                    : <h2>not</h2>
            }
        </div>
    );
}

/* export async function getServerSideProps({params}) {
    console.log(params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    return {
        props: {post}
    }
} */

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const paths = posts.map(post => {
        return {
            params: {
                id: post.id.toString()
            }
        }
    });
    return {
        /* paths: [
            {params: {id: '1'}},
            {params: {id: '2'}},
            {params: {id: '3'}},
        ],
        fallback: false */
        paths, fallback: false
    }
}

export async function getStaticProps({params}) {
    console.log(params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    return {
        props: {post}
    }
}

export default singlePageArticle;