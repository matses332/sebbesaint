import React, { Component } from "react";
import {
    Row,
    Col,
    Container
} from "reactstrap";
import { SocialIcon } from "react-social-icons";

export default class AboutMeComponent extends Component {
    render() {
        return (
            <div className="aboutme">
                <Container style={{ color: 'gray' }}>
                    <Row>
                    
                        Dj Sebastian Saint är en välkänd DJ i Sverige, spelat på många av dom främsta klubbarna runtom i landet. Så du har definitivt hört Sebastian någongång.<br/>
                        Sebastian är en Open Format DJ som spelar allt och adderar även sin egna tappning i musiken som spelas.
                        Han spelat för såväl stora events/mindre privata gig.
                        <div className="aboutme2">
                        En av Sebastian stora meriter är när han fick spela på Justin Timberlakes 20/20 Tour, där hans dåvarande Residentskap på Rose Club höll denna fest, just under denna tid på Rose så fick han möjligheten att vissa sin kvalitet bakom spelarna för många stora frontfigurer/aktörer som på så sett givit honom ett bra rykte runtom i landet.<br/>
                        Sebastian är van att spela utomlands och har värmt upp många av sveriges största artister.
                        </div>
                        
              

                        
                    </Row>
                    
                    
                </Container>
            </div>
            
            
            
        );
    }
}
