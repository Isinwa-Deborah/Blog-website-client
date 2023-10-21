export default function Post() {
    return (
        <>
            {/* Post 1 */}
            <div className="post">
                <div className="image">
                    <img src="https://cogwa-media.s3.amazonaws.com/images/made/life-lessons-from-aunt-irene_876_584.jpg" alt="" />
                </div>

                <div className="text">
                    <h2>Life Lessons From Aunt Irene</h2>

                    <p className="info">
                        <a href="#" className="author">Pam Myers</a>
                        <time>2023-10-01  7:00</time>
                    </p>
                    <p className="summary">Some tried-and-true life lessons from my 104-year-old Aunt Irene may serve as a springboard to help us create successful life habits!</p>
                </div>
            </div>

        </>
    );
}