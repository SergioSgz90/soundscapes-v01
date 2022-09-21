import image from "../../pages/About/sgz.jpg";

export function About(props: any) {
    return (
      <div className="About_container">
        <div className="About">
          <h2>About</h2>
          <img className="About_profilePic" src={image} alt="" />
          <p>Soundscapes is a project by Sergio Garcia</p>
          <p>
            using the following technologies: Figma, Typescript, React, React
            Context, React Router.
          </p>
          <p>Coming soon: Jest Testing, Redux</p>
        </div>
      </div>
    );
}

export default About;
