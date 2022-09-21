import image from '../Footer/footer_logo_soundscapes.svg';
import { Link } from "react-router-dom";
export function Footer() {
    return (  
             
           
        <div className="Footer"> <Link to={'home'} style={{ textDecoration: 'none' }}>
            <img className="Footer_logo" src={image} alt="soundscapes_logo" />
        </Link> </div>
    );
}
