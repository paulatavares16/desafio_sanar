import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Feature from './Feature';
import Galery from './Galery';
import Contact from './Contact';
import Reviews from './Reviews';
import SignupTrigger from './SignupTrigger';
import Bottom from './Bottom';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Intro />
        <div className="features">
          <div className="section-container">
            <Feature
              phonePosition="right"
              tag="Lorem Dolor"
              name="MAURIS NEC MALESUADA FAMES"
              platforms={['apple','android']}
              description="Quisque lorem lotorto frigila sad, vestibulo id, elem fendi justo vel binbendum sapien massa ac turpis falcibus orci lutus non."
              />
          </div>

          <hr className="separator" />

          <div className="section-container">
            <Feature
              phonePosition="left"
              tag="Graviola"
              name="CUM SOCIIS NATOQUE"
              platforms={[]}
              description="Interger ultricis possueri pubilian curaier, nula ipsulum dollor latus, sucipite adipiscing. Cum sociis natoque penativus et ultrices voulpart. Nullam wisi ultricies."
            />
          </div>

          <hr className="separator separator-inverted" />

          <div className="section-container">
            <Galery />
          </div>
        </div>
        <Contact />
        <Reviews />
        <SignupTrigger />
        <Bottom />
      </div>
    );
  }
}

export default App;
