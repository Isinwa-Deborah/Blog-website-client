import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {
    return (
        <>
            {/* Post 1 */}
            <div className="post">
                {<div className="image">
                    <Link to={`/post/${_id}`}>
                        <img src={'http://localhost:4000/' + cover} alt="" />
                    </Link>
                </div>}

                <div className="text">
                    <Link to={`/post/${_id}`}>
                        <h2>{title}</h2>
                    </Link>
                    <p className="info">
                        <a href="" className="author">{author}</a>
                        <time>{formatISO9075(new Date(createdAt))}</time>
                    </p>
                    {/* <p className="summary">Some tried-and-true life lessons from my 104-year-old Aunt Irene may serve as a springboard to help us create successful life habits!</p> */}
                    <p className="summary"> {summary}</p>
                </div>
            </div>

        </>
    );
}