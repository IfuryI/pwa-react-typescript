import React from 'react'
import './PersonCard.scss'
import { ReactComponent as HouseBageSvg } from '../../../assets/bages/house.svg';
import { ReactComponent as PetsBageSvg } from '../../../assets/bages/pets.svg';
import { ReactComponent as SmokeBageSvg } from '../../../assets/bages/smoke.svg';
import { ReactComponent as ScrollSvg } from '../../../assets/scroll.svg';
import { ReactComponent as LaguageSvg } from '../../../assets/mini/language.svg';
import { ReactComponent as SmokeSvg } from '../../../assets/mini/smoke.svg';
import { ReactComponent as PetsSvg } from '../../../assets/mini/pets.svg';
import { ReactComponent as SkipSvg } from '../../../assets/skip.svg';
import { ReactComponent as LikeSvg } from '../../../assets/heart.svg';
import IconButton from '../../navigation/IconButton/IconButton';

type Props = {}

const PersonCard = (props: Props) => {
  return (

    <>
      
      <div className="cardContainer">
        <div className="cardContainer__shadow"></div>
        <div className="cardContainerHead">
          <div className='cardContainerBages'>
            <SmokeBageSvg />
            <PetsBageSvg />
            <HouseBageSvg />
          </div>
          <div className='cardContainerPersonScroll'>
            <div className='cardContainerPerson'>
              <h2>Bart, 23</h2>
              <p>with Jane, 25 and Judy, 3</p>
            </div>
            <IconButton icon={ScrollSvg} className='scrollBack' />
          </div>
          <IconButton className="scrollIcon" icon={ScrollSvg} />
        </div>
        <div className="aboutContainer">
          <div className="feature"><LaguageSvg /><p className="featureText">English, Hebrew, Russian</p></div>
          <div className="feature"><SmokeSvg /><p className="featureText">Not a smoker</p></div>
          <div className="feature"><PetsSvg /><p className="featureText">2 cats and 1 dog</p></div>
          <p>I am a driven and ambitious individual, who is constantly striving to learn and grow. I have a passion for problem solving and am always looking for ways to challenge myself and improve my skills. I thrive in creative and collaborative environments, and am eager to take on new tasks and responsibilities. I am determined to make a positive impact on the world.</p>
        </div>
      
      </div>
      <div className='hideGradient'></div>
      <div className='buttons'>
        <button className='btnSkip'><SkipSvg /></button>
        <button className='btnLike'><LikeSvg /></button>
      </div>
    </>


  )
}

export default PersonCard