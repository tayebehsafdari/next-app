import Link from "next/link";

const ListUsers = (props) => {
    console.log(props);
    return (
        <ul>
            {
                props.users.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link href="/users/[id]" as={`/users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default ListUsers;