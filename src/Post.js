import { formatISO9075 } from "date-fns";

export default function Post({ title, summary, cover, content, createdAt, author }) {
    return (
        <>
            {/* Post 1 */}
            <div className="post">
                <div className="image">
                    <img src="https://cogwa-media.s3.amazonaws.com/images/made/life-lessons-from-aunt-irene_876_584.jpg" alt="" />
                </div>

                <div className="text">
                    {/* <h2>Life Lessons From Aunt Irene</h2> */}
                    <h2>{title}</h2>
                    <p className="info">
                        <a href="" className="author">{author.username}</a>
                        <time>{formatISO9075(new Date(createdAt))}</time>
                    </p>
                    {/* <p className="summary">Some tried-and-true life lessons from my 104-year-old Aunt Irene may serve as a springboard to help us create successful life habits!</p> */}
                    <p className="summary"> {summary}</p>
                </div>
            </div>

        </>
    );
}