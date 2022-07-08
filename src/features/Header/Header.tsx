import image from "../Header/header_logo_soundscapes.svg"
export function Header() {

    return (
        <div className="header_container">
            <img className="header_logo" src={image} alt="soundscapes_logo" />
            <h1 className="header_title">soundscapes</h1>
        </div>
    )
    
}

