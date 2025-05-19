import HeaderBottom from './HeaderBottom'
import '../../styles/header.scss';
import HeaderTop from './HeaderTop';

function Header() {
    return <div className="app-header">
        <HeaderTop />
        <HeaderBottom />
    </div>;
}

export default Header;
