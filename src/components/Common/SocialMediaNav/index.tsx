import "./nav.scss"
export default function SocialMediaNav(){
    return (
      <nav className="side-nav">
        <div>
          <a href="">
            <img src="./assets/icons/facebook.png" alt="facebook icon" />
          </a>
          <a href="">
            <img src="./assets/icons/instagram.png" alt="instagram icon" />
          </a>
          <a href="">
            <img src="./assets/icons/youtube.png" alt="youtube icon" />
          </a>
          <a href="">
            <img src="./assets/icons/linkedin.png" alt="linkedin icon" />
          </a>
        </div>
      </nav>
    );
}