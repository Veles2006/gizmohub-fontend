import { Link } from 'react-router-dom'
import classNames from "classnames/bind";
import styles from './Categories.module.scss'

const cx = classNames.bind(styles)

function Categories({ categories = [] }) {
    return <div className={cx('categories-page')}>
        <div className={cx('grid', 'wide', 'categories-title')}>
            <h3>
                Categories
            </h3>
        </div>
        <div className={cx('grid', 'wide')}>
            <div className={cx('row')}>
                {categories.map((category, index) => (
                    <div className={cx('l-2', 'card-wrapper')}>
                        <div className={cx('card')}>
                            <Link to={'#'}>
                                <img src={category.img} />
                            </Link>

                            <h5 className={cx('card__title')}>
                                <Link to={'#'}>{category.title}</Link>
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>;
}

export default Categories;