import React from "react";
import PropTypes from "prop-types"; 
import './AdvisoryBoard.css';
import AdvisoryCard from './AdvisoryCard/AdvisoryCard';
import Arjan_Hura from '../../../assets/Arjan_Hura.svg';
import Jella_An from '../../../assets/Jella_An.svg';
import Bradley_Barnett from '../../../assets/Bradley_Barnett.svg';
import James_Landreneau from '../../../assets/James_Landreneau.svg';
import Taj_Nasser from '../../../assets/Taj_Nasser.svg';

export default class AdvisoryBoard extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  // Javascript Object for each of the advisory board people
  information = [
    {
      name: "Arjan Hura",
      title: "MD",
      text: "Dr. Hura is a refractive surgeon at the Maloney-Shamie Vision Institute in Los Angeles, California who completed a refractive, cataract, and anterior segment surgery fellowship with the Cleveland Eye Clinic. He is invested in technology, mentorship, and innovation.",
      twitter: "https://twitter.com/ArjanHuraMD",
      linkedin: "https://www.linkedin.com/in/arjanhura/?original_referer=https%3A%2F%2Feyespace.ai%2F",
      youtube: "https://www.youtube.com/channel/UC0SRlPbAES_MBKUA6TBq25A",
      picture: Arjan_Hura,
    },
    {
      name: "Jella An",
      title: "MD",
      text: "Dr. An serves as an associate professor at Johns Hopkins University and as a medical director and vice chair for the Wilmer Clinical Network. She is a glaucoma specialist focusing on MIGS and Cataract Surgery. She has extensive experience training residents and fellows and is on the forefront of the MIGS revolution.",
      twitter: "https://twitter.com/ajjella",
      linkedin: "",
      youtube: "https://www.youtube.com/@JellaAnMD",
      picture: Jella_An,
    },
    {
      name: "Bradley Barnett",
      title: "MD, PhD",
      text: "Dr. Barnett is the founder, owner, and medical director of California LASIK & Eye in Sacramento California. He completed a fellowship at the Shiley Eye Institute holds patents in cutting-edge IOL technology and is dedicated to surgical innovation.",
      twitter: "https://twitter.com/CALASIKandEye",
      linkedin: "https://www.linkedin.com/in/bradley-barnett/",
      youtube: "",
      picture: Bradley_Barnett,
    },
    {
      name: "James Landreneau",
      title: "MD",
      text: "Dr. Landreneau is a fellowship trained cornea, cataract, and refractive surgeon. His passions include resident and fellow surgical training, myopia control, and the surgical treatment of keratoconus. He currently offers the full spectrum of refractive surgery options from LASIK and ICLs to the artificial iris.",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/james-landreneau-md-01b116124/",
      youtube: "",
      picture: James_Landreneau,
    },
    {
      name: "Taj Nasser",
      title: "MD",
      text: "Dr. Nasser is a fellowship trained refractive surgeon practicing at Parkhurst Nuvision LASIK Eye Surgery. He is fluent in Spanish and dedicated to international surgical eye mission trips.",
      twitter: "https://twitter.com/tajnassermd",
      linkedin: "https://www.linkedin.com/in/taj-nasser-md-5a0b2069?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA6U-UgBhV7nvDxZtGyE-evg-J5v4PM5o90&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B4HA%2BkiwBRN6lISolvDqoOQ%3D%3D",
      youtube: "",
      picture: Taj_Nasser,
    },
  ];

  render() {
    return ( 
    // maybe add a prop for id (if we need to distinguish btwn different cards)
    <div className="AdvisoryBoard">
      <div className="AdvisoryBoardTitle AboutUsTitle">Advisory Board</div>
      <div className="AdvisoryBoardCards">
        {
          this.information.map((obj) => {
            return (
              <AdvisoryCard name={obj.name} title={obj.title} text={obj.text} twitter={obj.twitter} linkedin={obj.linkedin} youtube={obj.youtube} picture={obj.picture}/>
            )
          })
        }
      </div>
    </div>
    );
  }
}

