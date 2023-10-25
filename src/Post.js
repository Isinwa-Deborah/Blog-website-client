import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post(props) {
    const post = props.posts;
    const { username } = post.author;
    return (
        <>
            {/* Post 1 */}
            <div className="post">
                {<div className="image">
                    <Link to={`/post/${post._id}`}>
                        <img src={'http://localhost:4000/' + post.cover} alt="" />
                    </Link>
                </div>}

                <div className="text">
                    <Link to={`/post/${post._id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p className="info">
                        <a href="/" className="author">{username}</a>
                        {/* <time>{formatISO9075(new Date(createdAt))}</time> */}
                    </p>
                    {/* <p className="summary">Some tried-and-true life lessons from my 104-year-old Aunt Irene may serve as a springboard to help us create successful life habits!</p> */}
                    <p className="summary"> {post.summary}</p>
                </div>
            </div>

        </>
    );
}