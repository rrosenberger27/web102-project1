import React from "react";
import Card from "./card";
import f4img from "../images/f4.webp";
import supermanImg from "../images/Superman.webp";
import beautifulJourneyImg from "../images/A_Big_Bold.jpg";
import caughtStealingImg from "../images/Caught_Stealing.jpg";
import fridayImg from "../images/Freakier_Friday.webp";
import himImg from "../images/Him.jpg";
import rosesImg from "../images/The_Roses.jpeg";
import wickedImg from "../images/Wicked.jpg";
import zootopiaImg from "../images/Zootopia.jpg";
import f1img from "../images/F1.jpg";
import "../styles/CardGrid.css";

const CardGrid = () => {

    return (
        <div className="cardGrid">
            <Card
            photo={f4img}
            title="Fantastic Four"
            premise="Mister Fantastic, Invisible Woman, Human Torch and the Thing face their most daunting challenge yet as they defend Earth from Galactus and Silver Surfer."
            release="July 27"
            trailer="https://www.youtube.com/watch?v=pAsmrKyMqaA"
            />
            <Card
            photo={supermanImg}
            title="Superman"
            premise="A young Superman must balance his alien heritage with his human compassion to bring hope to a world that views kindness as old-fashioned."
            release="July 11"
            trailer="https://www.youtube.com/watch?v=Ox8ZLF6cGM0"
            />
            <Card
            photo={beautifulJourneyImg}
            title="A Big Bold Beautiful Journey"
            premise="An imaginative tale of two strangers and the unbelievable journey that connects them."
            release="September 19"
            trailer="https://www.youtube.com/watch?v=7t9cPtA9St0"
            />
            <Card
            photo={caughtStealingImg}
            title="Caught Stealing"
            premise="A washed-up baseball player's life unravels into a desperate fight for survival after he is accidentally plunged into the violent criminal underworld of 1990s New York City."
            release="August 29"
            trailer="https://www.youtube.com/watch?v=6mIvD-GN-p4"
            />
            <Card
            photo={fridayImg}
            title="Freakier Friday"
            premise="As two families are forced to merge, a mother, daughter, and two soon-to-be stepsisters all swap bodies, forcing them to understand each other before they ruin a wedding."
            release="August 8"
            trailer="https://www.youtube.com/watch?v=IyJzhtJEtoU"
            />
            <Card
            photo={himImg}
            title="Him"
            premise="A promising young football player joins an isolated compound to train under a dynasty team's aging quarterback."
            release="September 19"
            trailer="https://www.youtube.com/watch?v=ccmQETThJgs"
            />
            <Card
            photo={rosesImg}
            title="The Roses"
            premise="A seemingly perfect couple hides tensions and rivalry. When the husband's career ambitions fail, their relationship's underlying conflicts explode."
            release="August 29"
            trailer="https://www.youtube.com/watch?v=4G66oRY3SeQ"
            />
            <Card
            photo={wickedImg}
            title="Wicked: For Good"
            premise="Branded a villain across Oz, Elphaba, a misunderstood witch, must navigate a world turned against her while her former friend, Glinda, grapples with the price of power and popularity."
            release="November 21"
            trailer="https://www.youtube.com/watch?v=vt98AlBDI9Y"
            />
            <Card
            photo={zootopiaImg}
            title="Zootopia 2"
            premise="Brave rabbit cop Judy Hopps and her friend, the fox Nick Wilde, team up again to crack a new case, the most perilous and intricate of their careers."
            release="November 26"
            trailer="https://www.youtube.com/watch?v=xo4rkcC7kFc"
            />
            <Card
            photo={f1img}
            title="F1"
            premise="A Formula One driver comes out of retirement to mentor and team up with a younger driver."
            release="June 27"
            trailer="https://www.youtube.com/watch?v=CT2_P2DZBR0"
            />
        </div>
    );
}

export default CardGrid;