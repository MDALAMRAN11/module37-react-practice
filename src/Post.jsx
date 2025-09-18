export default function Post({ post }) {
    const { title, body, id } = post;
    return (
        <div className="cart">
            <p
                style={{
                    backgroundColor: "lightGray",
                    borderRadius: "10px",
                    fontWeight: "bold",
                }}
            >
                Title:<br></br> {title}
            </p>
            <p
                style={{
                    backgroundColor: "lightBlue",
                    borderRadius: "10px",
                    fontWeight: "bold",
                }}
            >
                Body:<br></br> {body}
            </p>
        </div>
    );
}
