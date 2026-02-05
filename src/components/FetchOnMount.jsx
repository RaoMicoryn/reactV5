import { useEffect, useState } from "react";

function FetchOnMount() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="card">
            <h3>Username List</h3>

            {loading && <p>Loading Data...</p>}

            {!loading && (
                <ul>
                    {users.map(user =>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FetchOnMount;