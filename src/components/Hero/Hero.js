import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there <br /> I am Nehemiah :)
      </SectionTitle>
      <SectionText>
       I'm a software developer who enjoys working in highly functional teams; always
        passionate about learning new technologies that I can apply in my work
        and personal projects.
      </SectionText>

      <Button onClick={()=> window.location ='https:google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);



export default Hero;
