import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faChevronDown,
    faHeart,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import data from '../../../data/homeData';
import styles from './ShopElement.module.scss';

const cx = classNames.bind(styles);
const bestSellingItems = data.bestSellingItems;

const widgetMenuData = [
    {
        title: 'Categories',
        items: ['All', 'Phones', 'Accessories', 'Tablets', 'Watches'],
        classNames: [
            'widget-product-categories',
            'product-categories',
            'cat-item',
        ],
        links: [],
    },
    {
        title: 'Tags',
        items: ['White', 'Cheap', 'Mobile', 'Modern'],
        classNames: [
            'widget-product-tags',
            'product-tags',
            'tags-item',
        ],
        links: [],
    },
    {
        title: 'Brands',
        items: ['Apple', 'Samsung', 'Huwai'],
        classNames: [
            'widget-product-brands',
            'product-tags',
            'tags-item',
        ],
        links: [],
    },
    {
        title: 'Filter by price',
        items: ['Less than $10', '$10- $20', '$20- $30', '$30- $40', '$40- $50'],
        classNames: [
            'widget-price-filter',
            'product-tags',
            'tags-item',
        ],
        links: [],
    },
];

function ShopElement() {
    return (
        <div className={cx('shop-element')}>
            <div className={cx('container')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-9')}>
                            <div className={cx('filter-shop')}>
                                <div>
                                    <p className={cx('filter-title')}>
                                        {'Showing 1–9 of 55 results'}
                                    </p>
                                </div>
                                <div className={cx('filter-btn-wrapper')}>
                                    <div>
                                        <select
                                            id="filter-btn"
                                            className={cx('filter-btn')}
                                        >
                                            <option value={''}>
                                                {'Default sorting'}
                                            </option>
                                            <option value={'name-asc'}>
                                                {'Name (A - Z)'}
                                            </option>
                                        </select>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('products-list', 'row')}>
                                {bestSellingItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={cx(
                                            'card-wrapper',
                                            'col',
                                            'l-3'
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                'card-wrapper__child'
                                            )}
                                        >
                                            <div className={cx('card')}>
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                />

                                                <h5
                                                    className={cx(
                                                        'card__title'
                                                    )}
                                                >
                                                    <Link to={'#'}>
                                                        {item.title}
                                                    </Link>
                                                </h5>
                                                <span className={cx('card__price')}>{item.price}</span>
                                            </div>
                                            <div className={cx('card-concern')}>
                                                <Link
                                                    to={'#'}
                                                    className={cx('card-concern__btn')}
                                                >
                                                    <span>
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faCartShopping
                                                            }
                                                        />
                                                    </span>
                                                </Link>
                                                <Link
                                                    to={'#'}
                                                    className={cx('card-concern__btn')}
                                                >
                                                    <span>
                                                        <FontAwesomeIcon
                                                            icon={faHeart}
                                                        />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <ul className={cx('pagination')}>
                                <li className={cx('pagination__btn', 'pagination__btn--disabled')}>
                                    <Link>Prev</Link>
                                </li>
                                <li className={cx('pagination__btn', 'pagination__btn--active')}>
                                    <Link>1</Link>
                                </li>
                                <li className={cx('pagination__btn')}>
                                    <Link>2</Link>
                                </li>
                                <li className={cx('pagination__btn')}>
                                    <Link>3</Link>
                                </li>
                                <li className={cx('pagination__btn')}>
                                    <Link>Next</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('col', 'l-3')}>
                            <div className={cx('sidebar')}>
                                <div className={cx('widget-search-bar')}>
                                    <form role="search" className={cx('widget-search-bar__form')}>
                                        <input id='search' type="search" placeholder="Search" />
                                        <button className={cx('btn-search', 'button-primary')}>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </form>
                                </div>
                                {widgetMenuData.map((widget, idx) => (
                                    <div
                                        className={cx(`${widget.classNames[0]}`)}
                                        key={idx}
                                    >
                                        <div className={cx('section-title')}>
                                            <h3>{widget.title}</h3>
                                        </div>
                                        <ul
                                            className={cx(
                                                `${widget.classNames[1]}`
                                            )}
                                        >
                                            {widget.items.map((item, idx) => (
                                                <li
                                                    className={cx(
                                                        `${widget.classNames[2]}`
                                                    )}
                                                    key={idx}
                                                >
                                                    <Link to={'#'}>{item}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopElement;
