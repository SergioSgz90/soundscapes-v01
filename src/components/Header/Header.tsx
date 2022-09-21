import image from '../Header/header_logo_soundscapes.svg';
import { Link } from 'react-router-dom';

export function Header({ children }: { children: JSX.Element }) {
    return (
        <div className="header_container">
            <Link to={'home'} style={{ textDecoration: 'none' }}>
                <img
                    className="header_logo"
                    src={image}
                    alt="soundscapes_logo"
                />{' '}
            </Link>
            <Link to={'home'} style={{ textDecoration: 'none' }}>
                <h1 className="header_title">soundscapes</h1>
            </Link>

            <div className="header_spacer"></div>
            {children}
        </div>
    );
}
