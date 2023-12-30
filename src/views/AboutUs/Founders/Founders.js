import React from "react";
import PropTypes from "prop-types"; 
import './Founders.css';
import FounderCard from './FounderCard/FounderCard';
import FounderCardLarge from "./FounderCardLarge/FounderCardLarge";
import FounderCardSmall from "./FounderCardSmall/FounderCardSmall";
import Matthew_Hirabayashi from '../../../assets/Matthew_Hirabayashi.svg';
import Gurpal_Virdi from '../../../assets/Gurpal_Virdi.svg';
import Taj_Nasser from '../../../assets/Taj_Nasser.svg';
import James_Landreneau from '../../../assets/James_Landreneau.svg'
import Brett_Muller from '../../../assets/Brett_Muller.png'
import Person_Icon from '../../../assets/Person_Icon.png'

export default class Founders extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  // Javascript Object for each of the advisory board people
  founders_information = [
    {
      name: "Gurpal Virdi, MD",
      title: "Chief Executive Officer",
      texts: ["The EYESPACE CEO is responsible for talent acquisition, project management, operations, targets, and goal achievement.","       Gurpal Virdi MD is a Palo Alto native who graduated from Washington University in St. Louis. He is currently an ophthalmology resident."],
      twitter: "https://twitter.com/gurpalvirdi",
      linkedin: "https://www.linkedin.com/in/gurpalvirdi/",
      youtube: "",
      picture: Gurpal_Virdi,
    },
    {
      name: "Matthew Hirabayashi, MD",
      title: "President/Chairman",
      texts: [
        "The EYESPACE President is responsible for general company direction, marketing, mission, and brand image.",
        "Matthew Hirabayashi MD is a chief ophthalmology resident currently applying for fellowships in refractive surgery."],
      twitter: "https://twitter.com/EyeFlyMD",
      linkedin: "https://www.linkedin.com/in/matt-hirabayash/",
      youtube: "https://www.youtube.com/channel/UCLKR7pzPLSZgndzU8l1f0_w",
      picture: Matthew_Hirabayashi,
    },
  ];
  founders_large_information = [
    {
      name: "",
      title: "Chief Medical Officer",
      texts: [
        "An alumnus of East Carolina University, Dr. Nasser excelled academically, securing a Magna Cum Laude Bachelor of Science in Chemistry and a minor in Hispanic studies. His medical journey continued at East Carolina University, culminating in a medical degree with a distinction in health system transformation and leadership. His residency in Ophthalmology was completed in New Orleans, where he was honored as chief resident for his initiatives in medical education.",
        "Dr. Nasser, originally from a small Yemeni village, embodies a story of resilience and the realization of the American dream. Born to parents who could not complete even elementary education, he carries the vivid memories of life in a third-world country. Today, Dr. Nasser dedicates himself to combating preventable blindness, regularly embarking on mission trips to provide cataract surgeries to the impoverished.",
        "Dedicated to restoring vision and enhancing the quality of life for patients, Dr. Nasser blends innovative techniques with heartfelt compassion. Driven by a passion for process improvement and high-quality, patient-centered care, Dr. Nasser gravitated towards specializing in refractive surgery. He cherishes the opportunity to have gained extensive experience in this realm and is excited to embark on exciting novel projects to improve the patient and provider experience.",
        "The EYESPACE CMO is responsible for overseeing the medical affairs and policies including providing clinical expertise, strategic planning, risk management, research, innovation, and external relations."
      ],
      picture: Taj_Nasser,
    },
    {
      name:"",
      title:"Chief Technical Officer",
      texts: [
        "The EYESPACE CTO is responsible for technological strategy, innovation, execution, strategic planning, and ensuring that the technological infrastructure aligns with our mission.",
      ],
      picture: Person_Icon,
    }
  ];
  founders_small_information = [
    {
      name:"Brett Mueller, DO PhD",
      youtube: 'aaa',
      twitter:'aaa',
      linkedin:'aaa',
      instagram: 'aaa',
      picture: Brett_Muller,
    },
    {
      name:"James Landreneau, MD",
      youtube: 'aaa',
      picture: James_Landreneau,
    },
    {
      name:"Name",
      youtube: 'aaa',
      picture: Person_Icon,
    }
  ];

  render() {
    return ( 
    // maybe add a prop for id (if we need to distinguish btwn different cards)
    <div className="Founders">
      <div className="FoundersCards">
        {
          this.founders_information.map((obj) => {
            return (
              <FounderCard name={obj.name} title={obj.title} text={obj.text} texts={obj.texts} twitter={obj.twitter} linkedin={obj.linkedin} youtube={obj.youtube} picture={obj.picture}/>
            )
          })
        }
      </div>
      <div className="FoundersCardsLarge">
      {
          this.founders_large_information.map((obj) => {
            return (
              <FounderCardLarge name={obj.name} title={obj.title} texts={obj.texts} twitter={obj.twitter} linkedin={obj.linkedin} youtube={obj.youtube} picture={obj.picture}/>
            )
          })
        }
      </div>
      <h1 className="board-of-directors">Board of Directors</h1>
      <div className="FoundersCardsSmall">
      {
          this.founders_small_information.map((obj) => {
            return (
              <FounderCardSmall name={obj.name}twitter={obj.twitter} linkedin={obj.linkedin} youtube={obj.youtube} instagram={obj.instagram} mail={obj.mail} picture={obj.picture}/>
            )
          })
        }
      </div>
    </div>
    );
  }
}

