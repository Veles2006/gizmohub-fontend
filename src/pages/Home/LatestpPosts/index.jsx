import classNames from 'classnames/bind';
import styles from './LatestpPosts.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LatestpPosts({ latestpPosts = [] }) {
    return (
        <div className={cx('latest-posts')}>
            <div className={cx('latest-posts-title')}>
                <h3>Latest posts</h3>
            </div>
            <div className={cx('latest-posts-content')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        {latestpPosts.map((post, idx) => (
                            <div className={cx('post', 'l-3')}>
                                <div className={cx('post-img')}>
                                    <img src={post.img} />
                                </div>
                                <div className="post-content">
                                    <h4 className="post-content__title">
                                        <Link to={'#'}>{post.title}</Link>
                                    </h4>
                                    <p className={cx('post-content__paragraph')}>
                                        {post.paragraph}
                                    </p>
                                    <Link to={'#'} className={cx('post-content__read-more')}>Read More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestpPosts;
