import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
    return (
        <section className="section" id="about">
                <Title title="about" subTitle="us"/>
                
                <div className="section-center about-center">
                    <div className="about-img">
                    <img
                        src={aboutImg}
                        className="about-photo"
                        alt="awesome beach"
                    />
                    </div>
                    <article className="about-info">
                    <h3>explore the difference</h3>
                    <p>
                        From quiet shorelines to cliffside sunsets, Backroads
                        designs trips that balance iconic highlights with hidden
                        local spots worth slowing down for.
                    </p>
                    <p>
                        Every itinerary is built for small groups, flexible
                        pacing, and expert guidance, so you can focus on the
                        experience instead of the logistics.
                    </p>
                    <a href="#tours" className="btn">read more</a>
                    </article>
                </div>
        </section>
    )
}
export default About;
