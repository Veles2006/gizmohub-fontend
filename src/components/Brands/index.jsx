import classNames from "classnames/bind";
import styles from './Brands.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Brands({ brands = [] }) {
    return <div className={cx('brands')}>
        <div className={cx('grid', 'wide')}>
            <ul className={cx('brands-list', 'row')}>
                {brands.map((brand, idx) => (
                    <li className={cx('brand-item', 'l-2-4')}>
                        <Link to={'#'}><img src={brand} alt="" /></Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>;
}

export default Brands;