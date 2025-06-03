// CustomArrows.jsx
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './CustomArrows.module.scss'

const cx = classNames.bind(styles);

export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('prev-arrow', 'arrow-left')}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
    );
}

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('prev-arrow', 'arrow-right')}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    );
}
