import classNames from "classnames/bind";
import styles from './CompanyServices.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)

function CompanyServices({ companyServices = [] }) {
    return <div>

        <div className={cx('grid', 'wide')}>
            <div className={cx('row')}>
                {companyServices.map((companyService, ind) => (
                    <div className={cx('l-3')}>
                     <div className={cx('category-icon')}>
                        <FontAwesomeIcon icon={companyService.icon} />
                     </div>
                     <div className={cx('category-content')}>
                        <h4>{companyService.header}</h4>
                        <p>{companyService.content}</p>
                     </div>
                </div>
                ))}
            </div>
        </div>
    </div>;
}

export default CompanyServices;