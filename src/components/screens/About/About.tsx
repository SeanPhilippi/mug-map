import { FC } from 'react';
import './About.css';

interface Props {}

const About: FC<Props> = () => {
  return (
    <div className='about-page'>
      <h2>About Mug Map</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam pariatur impedit, magni sapiente sit.
      </p>
    </div>
  );
};

export default About;
