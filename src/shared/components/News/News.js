import React, { PureComponent } from 'react'


import CustomScrollbar from '../CustomScrollbar'
import Navigator from '../Navigator'
import AppContainer from '../AppContainer'

import '../CompletePage/CompletePage.css'


class News extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
           
            visible : false,
          
        }
    }

    onOpenSidebar = () => {
        this.setState({
            visible: true
        })
    }

    onCloseSidebar = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <Navigator visible={this.state.visible} onCloseSidebar={this.onCloseSidebar}>
            <AppContainer isMenuVisible={true} onOpenSidebar={this.onOpenSidebar}>
            <div className="complete-page-container">
            <div className="complete-page-heading">Press</div>
            <CustomScrollbar>
                <p>
                    <a href="https://www.broadway.com/buzz/196158/yiddish-language-fiddler-will-hold-special-world-refugee-day-performance-luis-a-miranda-jr-to-lead-talkback/">Yiddish-Language Fiddler Will Hold Special World Refugee Day Performance; Luis A. Miranda Jr. to Lead Talkback</a>
                </p>
                <p>
                    <a href="http://www.playbill.com/article/off-broadways-fiddler-on-the-roof-to-welcome-an-audience-of-refugees-on-world-refugee-day">Off-Broadway’s Fiddler on the Roof to Welcome an Audience of Refugees on World Refugee Day</a>
                </p>

                 <p>
                    <a href="https://www.broadwayworld.com/off-broadway/article/FIDDLER-ON-THE-ROOF-to-Honor-World-Refugee-Day-with-Special-Performance-20190612">FIDDLER ON THE ROOF to Honor World Refugee Day with Special Performance</a>
                </p>

                <p>
                    <a href="https://www.theatermania.com/off-broadway/news/fiddler-on-the-roof-world-refugee-day-performance_89010.html">Fiddler on the Roof Announces Special Performance in Honor of World Refugee Day</a>
                </p>

                 <p>
                    <a href="https://www.newsday.com/entertainment/theater/fiddler-on-the-roof-refugees-1.32298676">Yiddish 'Fiddler on the Roof' to do special show for refugees</a>
                </p>

                <p>
                    <span style={{fontStyle:"italic"}}>News/Press Fiddler on the Roof - Yiddish</span><br/>
                    <a href="http://fiddlernyc.com/#press">http://fiddlernyc.com/#press</a><br/>
                    <a href="http://fiddlernyc.com/#about">http://fiddlernyc.com/#about</a><br/>

                </p>

                 <p>
                    <span style={{fontStyle:"italic"}}>Social Media: Fiddler on The Roof</span><br/>
                    <a href="https://www.facebook.com/FiddlerNYC/">https://www.facebook.com/FiddlerNYC/</a><br/>
                    <a href="https://www.instagram.com/FiddlerNYC/">https://www.instagram.com/FiddlerNYC/</a><br/>
                    <a href="https://twitter.com/FiddlerNYC/">https://twitter.com/FiddlerNYC/</a><br/>

                </p>

                 <p>
                    <span style={{fontStyle:"italic"}}>Social Media: Reboot</span><br/>
                    <a href="https://www.facebook.com/Rebooters">https://www.facebook.com/Rebooters</a><br/>
                    <a href="https://www.instagram.com/rebootjewish/">https://www.instagram.com/rebootjewish/</a><br/>
                    <a href="https://twitter.com/reboot">https://twitter.com/reboot</a><br/>

                </p>




              

            </CustomScrollbar>
            <div className="complete-page-fade-in-container"></div>
           



        </div >
        </AppContainer>
        </Navigator>
        )
    }
}


export default News