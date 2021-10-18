import {useRouter} from 'next/router';

const Articles = () => {
    const router = useRouter();
    // console.log(router);

    return (
        <div className="articles">
            <h2>Article with id={router.query.id}</h2>
            <p>The {router.query.title}</p>
        </div>
    );
}

export default Articles;