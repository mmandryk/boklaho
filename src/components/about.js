import React, { Component } from 'react';


import '../components/css/about.css'


class About extends Component {
    render() {
        return(
      <div >
                <fieldset class="slideshow">

                        {/* <!-- Slide 1 --> */}
                        <label className="slide-button" for="slideCheckbox4">Check As!</label>
                        <input type="radio" id="slideCheckbox4" name="slide" checked></input>
                        <div class="slide">
                        <div class="slide__content">
                            <h5>Our customers says that we are:</h5>
                            
                                <h3>Profesional</h3>
                                <h3>Workamnship</h3>
                                <h3>Courtesy</h3>
                                <h3>Reliability</h3>
                                <h3>Timekeeping</h3>
                                <h3>Keep in contact</h3>
                                <h3>We fully inform all the way through the process.</h3>
                                <h3>...check As on <a href="https://www.checkatrade.com/EcoConstructionSystems/" 
                                style={{ textDecoration: 'none', fontSize: '50px', color: '#38ef7d', WebkitAnimationDirection: 'rotateY(130deg)'}}>Checkatrade!</a></h3>
                            
                        </div>   
                        </div>

                        {/* <!-- Slide 2 --> */}
                        <label className="slide-button" for="slideCheckbox2">Insulation</label>
                        <input type="radio" id="slideCheckbox2" name="slide" checked></input>
                        <div class="slide">
                        <div class="slide__content">
                        <h4>External Wall Insulation is a highly advanced insulation system that is applied to a house's outside walls. The
                        system comprises of a layer of insulation, a layer of insulating render implanted with reinforcing mesh,
                        followed by a final coat of render finished to the desired decorative effect.</h4>
                        <h4>External wall insulation is a particularly effective method of insulation for homes constructed from solid walls,
                        referred to by some as 'hard to treat', because quite simply they have no cavity which can be filled with
                        insulation. External wall insulation is applied to the outer face of a property's walls improving the thermal
                        efficiency of the walls significantly as well as giving the property a new and/or improved look.</h4>
                        </div> 
                        </div>

                        {/* <!-- Slide 3 --> */}
                        <label className="slide-button" for="slideCheckbox3">Materials</label>
                        <input type="radio" id="slideCheckbox3" name="slide" checked></input>
                        <div class="slide">
                        <div class="slide__content">
                            <h4>As one of the leading EWI system manufacturers in the UK, Wetherby have a wide selection of approvals from 
                                the British Board of Agrement, The Irish Agrement Board and European DIBT.</h4>
                            <h4>Despite having one of the widest ranges of External Wall Insulation Systems in the UK, they are proud to be 
                                actively involved in numerous Research and Development projects, that will allow them to keep at the forefront of our industry 
                                for many years to come.</h4>
                            <h4>New product development and testing is a very valuable investment to the company and they are always looking for innovative, 
                                cost effective alternatives to traditional EWI and render activities.</h4>
                            <h4>Thats why we cooperate whit them! </h4>
                        </div>  
                        </div>

                        {/* <!-- Slide 4 --> */}



                        <label className="slide-button" for="slideCheckbox1">Benefits</label>
                        <input type="radio" id="slideCheckbox1" name="slide" checked ></input>
                        <div class="slide">
                        <div class="slide__content">
                            <h1><h5>Whant to know about Yours benefits?</h5></h1>
                            
                            <h3>Reduce condensation, heat loss & CO2 emissions.</h3>
                            <h3>Help to reduce occupants heating bills for about 40%.</h3>
                            <h3>Helping with condensation problem and colorous mould growth.</h3>
                            <h3>No reduction of interior living spaces.</h3>
                            <h3>Improves aappearence of the building.</h3>
                            <h3>Has long term durability.</h3>
                            <h3>A cost-effective alternative to demolition & rebuilds.</h3>
                            <h3>British Board of Agrement (BBA) aprroved.</h3>
                            
                        </div>  
                        </div>


                        {/* <!-- Slide 5 --> */}
                        {/* <label class="slide-button" for="slideCheckbox5">The End</label>
                        <input type="radio" id="slideCheckbox5" name="slide"></input>
                        <div class="slide">
                        <div class="slide__content">
                            <h1>The end</h1>
                            <h3>It's over</h3>
                        </div>  
                        </div> */}

                        {/* <!-- Add more slides here! --> */}

</fieldset>
</div>

        )
    }
};

export default About;

