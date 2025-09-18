export default function Friend({ friend }) {
    const { name, username, email, phone, website } = friend;
    return (
        <div
            style={{
                margin: "10px",
                padding: "10px",
                border: "4px salmon solid",
                borderRadius: "20px",
            }}
        >
            <h5>Name: {name}</h5>
            <h4>UserName: {username}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
}
