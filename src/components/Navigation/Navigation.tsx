import { Link } from 'react-router-dom';

export function Navigation({ menuOptions }: { menuOptions: Array<any> }) {
    return (
        <nav className="Navigation">
            <ul>
                <Link
                    style={{ textDecoration: 'none' }}
                    className="Navigation_buttons"
                    to={'about'}
                >
                    {'About'}
                </Link>
            </ul>
        </nav>
    );
}
