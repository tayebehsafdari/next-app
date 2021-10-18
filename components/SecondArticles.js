import Link from "next/link";

const SecondArticles = (props) => {
    return (
        <ol>
            {
                props.posts.map(post => {
                    // console.log(post);
                    return (
                        <li key={post.id}>
                            <Link href="/articles/[id]" as={`/articles/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    );
                })
            }
        </ol>
    );
}

export default SecondArticles;