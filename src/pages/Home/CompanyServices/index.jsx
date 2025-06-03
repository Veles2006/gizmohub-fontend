import classNames from "classnames/bind";
import styles from './CompanyServices.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)

function CompanyServices({ companyServices = [] }) {
    return <div className={cx('company-services-page')}>

        <div className={cx('grid', 'wide')}>
            <div className={cx('row')}>
                {companyServices.map((companyService, ind) => (
                    <div className={cx('col', 'l-3', 'company-services')}>
                     <div className={cx('company-services-icon')}>
                        <FontAwesomeIcon icon={companyService.icon} />
                     </div>
                     <div className={cx('company-services-content')}>
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