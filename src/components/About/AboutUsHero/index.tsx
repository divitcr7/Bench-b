import './abouthero.scss'
import SocialMediaNav from "@/components/Common/SocialMediaNav";

export default function AboutUsHero() {
  return (
    <section className="aboutus-container">
      <div className="aboutus ">
        {/* left navigation */}
        <SocialMediaNav />

        <div className='aboutus-content'>
            <div className='aboutus-heading'>
                <h3>ABOUT</h3>
                {/* <h1>BENCHMARK</h1> */}
                <img src='./assets/images/about-logo.png' /> 
                <h4>INSURANCE GROUP</h4>
            </div>
        </div>
      </div>
    </section>
  );
}
