import Link from "next/link";

const FirstArticles = () => {
    return (
        <ul>
            <li>
                <Link href="/articles?title=first-article&id=1">
                    <a>The first article</a>
                </Link>
            </li>
            <li>
                <Link href="/articles?title=second-article&id=2">
                    <a>The second article</a>
                </Link>
            </li>
            <li>
                <Link href="/articles?title=third-article&id=3">
                    <a>The third article</a>
                </Link>
            </li>
            <li>
                <Link href="/articles?title=fourth-article&id=4">
                    <a>The fourth article</a>
                </Link>
            </li>
        </ul>
    );
}

export default FirstArticles;