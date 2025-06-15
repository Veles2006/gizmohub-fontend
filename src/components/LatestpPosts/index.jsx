import classNames from 'classnames/bind';
import styles from './LatestpPosts.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LatestpPosts({ latestpPosts = [] }) {
    return (
        <div className={cx('latest-posts')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('latest-posts-title')}>
                    <h3>Latest posts</h3>
                </div>
                <div className={cx('latest-posts-content')}>
                    <div className={cx('grid', 'wide')}>
                        <div className={cx('row')}>
                            {latestpPosts.map((post, idx) => (
                                <div className={cx('col', 'l-3')}>
                                    <div className={cx('post')}>
                                        <div className={cx('post-btn')}>{post.flag}</div>
                                        <div className={cx('post-img')}>
                                            <img src={post.image} />
                                        </div>
                                        <div className="post-content">
                                            <h4 className={cx('post-content__title')}>
                                                <Link to={'#'}>{post.title}</Link>
                                            </h4>
                                            <p className={cx('post-content__paragraph')}>
                                                {post.paragraph}
                                            </p>
                                            <Link to={'#'} className={cx('post-content__read-more')}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestpPosts;
