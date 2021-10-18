import fetch from 'node-fetch';

const singlePageUser = (props) => {
    const {user} = props;
    console.log(props);

    return (
        <div className="single-page-user">
            {
                user
                    ? (
                        <>
                            <h2>Single page with id={user.id}</h2>
                            <h4>{user.name}</h4>
                        </>
                    )
                    : <h2>not</h2>
            }
        </div>
    );
}

export async function getServerSideProps({params}) {
    console.log(params);
    const res = await fetch(`http://localhost:3000/api/users/${params.id}`);
    const user = await res.json();
    return {
        props: {
            user: user.data
        }
    }
}

export default singlePageUser;