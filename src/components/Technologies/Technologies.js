import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiFlutter} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br />
   <SectionTitle>Tecnologías</SectionTitle>
   <SectionText>
    Me dedico al desarrollo FrontEnd y Mobile. Las tecnologías que manejo son React y Flutter con Dart.
   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experience with <br />
           React.Js
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <SiFlutter size="3rem" />
       <ListContainer>
         <ListTitle>Mobile</ListTitle>
         <ListParagraph>
           Experience with <br />
           Flutter and Dart
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
