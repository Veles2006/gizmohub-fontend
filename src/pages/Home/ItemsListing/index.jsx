import classNames from 'classnames/bind';
import styles from './ItemsListing.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

const cx = classNames.bind(styles);

function ItemsListing({ itemsListing = [] }) {
    return (
        <div className={cx('items-listing')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    {itemsListing.map((item, idx) => (
                        <div className={cx('col', 'l-3')}>
                            <div className={cx('item-wrapper')}>
                                <div className={cx('header')}>
                                    <h3>{item.header}</h3>
                                </div>
                                <div className={cx('products-lists')}>
                                    {item.products.map((product, idx) => (
                                        <React.Fragment key={idx}>
                                            <div className={cx('product')}>
                                                <img src={product.img} />
                                                <div
                                                    className={cx(
                                                        'product__content'
                                                    )}
                                                >
                                                    <h5
                                                        className={cx(
                                                            'product__title'
                                                        )}
                                                    >
                                                        <Link to={'#'}>
                                                            {product.title}
                                                        </Link>
                                                    </h5>
                                                    {item.header ===
                                                    'On sale' ? (
                                                        <span
                                                            className={cx(
                                                                'price'
                                                            )}
                                                        >
                                                            <s
                                                                className={cx(
                                                                    'text-muted'
                                                                )}
                                                            >
                                                                {product.price}
                                                            </s>
                                                            {product.sale}
                                                        </span>
                                                    ) : (
                                                        <span
                                                            className={cx(
                                                                'price'
                                                            )}
                                                        >
                                                            {product.price}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            {idx < item.products.length - 1 && (
                                                <hr />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ItemsListing;
