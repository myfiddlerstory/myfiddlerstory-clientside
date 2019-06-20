import React, { PureComponent } from 'react'


import CustomScrollbar from '../CustomScrollbar'
import Navigator from '../Navigator'
import AppContainer from '../AppContainer'

import '../CompletePage/CompletePage.css'


class About extends PureComponent {

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
            <div className="complete-page-heading">About My Fiddler Story</div>
            <CustomScrollbar>
                <p>
                On June 20th, in honor of World Refugee Day, every seat at Fiddler on the Roof in Yiddish was underwritten with one goal in mind: to host nearly 500 refugees of all backgrounds, and celebrate their unique stories and journeys through this poignant and timely production. Fiddler on the Roof, at its very core, is a refugee and immigrant story. World Refugee Day will be the inaugural event for a series of initiatives that will ultimately create a methodology for how to use the prism of theater to talk about the immigration crisis.
           </p>
                <p>
                Fiddler will partner with the non-profit organization Reboot to further enhance its World Refugee Day celebration, and bring the inspiring work of four Rebooters to Stage 42. 


           </p>
                <p>
                To kick things off, photographer Gillian Laub and illustrator/journalist Christopher Noxon will photograph and "live-sketch", respectively, a select group of refugee attendees, in an effort to document an extraordinary array of stories, journeys and experiences. Many refugees attending the performance will have answered a series of questions written by Nicola Behrman, creator of the innovative viral project 10-Q, about their experiences leaving their homeland.

    
           </p>
                <p>Prior to the performance, attendees will be free to explore an installation of After Anatevka: Jewish Immigration and American Reaction,​ an exhibition previously displayed at YIVO Institute for Jewish Research, curated by author & Yiddish scholar Eddy Portnoy.
           </p>
                <p>
                Immediately following the performance, Fiddler will host a Town Hall event hosted by Luis Miranda, Jr. allowing this diverse community of refugees (and the leaders of the organizations that work to protect their rights) the opportunity to connect with one another in a safe and celebratory space.

           </p>

           <p>
           As part of the on-going initiative, the production team will launch MyFiddlerStory.com, an interactive digital platform that will allow refugees and their families to share their stories through text and video submissions.

           </p>

           <div className="complete-page-heading">About Reboot</div>
           <p>Reboot affirms the value of Jewish traditions and creates new ways for people to make them their own. Inspired by Jewish ritual and embracing the arts, humor, food, philosophy, and social justice, we produce creative projects that spark the interest of young Jews and the larger community. Among our productions are events, exhibitions, recordings, books, films, DIY activity toolkits, and apps. Since our inception, 575 network members, over 1,250 community organization partners, and hundreds of thousands of people have looked to Reboot to rekindle connections and re-imagine Jewish lives full of meaning, creativity, and joy.</p>
            <p>Reboot has been responsible for producing some of the most influential and innovative Jewish books, films, music, digital platforms and large-scale public events of the past five years.</p>
            <p>These projects include the 
                <a href="http://www.nationaldayofunplugging.com/"> National Day of Unplugging</a>,
                <a href="http://www.doyou10q.com/">10Q</a>,
                <a href="https://deathoverdinner-jewishedition.org/">Death Over Dinner - Jewish Edition</a>,
                <a href="https://www.silverscreenstudios.org/">Silver Screen Studios</a>,
                <a href="http://www.kibitzpod.com/">The Kibitz</a>,
                <a href="http://www.beyondbubbie.com/">Beyond Bubbie</a>,
                <a href="http://www.sabbathmanifesto.org/">Unscrolled, the Sabbath Manifesto</a>,
                <a href="http://www.sukkahcity.com/">Sukkah City</a>,
                the UNDO list, the DAWN Festival, <a href="http://www.eastsidejews.com/">East Side Jews</a>,
                <a href="http://idelsohnsociety.com/">the Idelsohn Society of Musical Preservation</a>, and more! Over the past three years alone, these nationally-visible projects have become more numerous, diverse and impactful.
                </p>

                <p>Over the last five years:</p>

                <ul>
                    <li style={{lineHeight: "50px"}}>1,250 organizations have partnered with Reboot, inspiring more than 3,500 events and engaging more than 760,000 people </li>
                    <li style={{lineHeight: "50px"}}>1.4 million unique visitors have traveled to our website</li>
                    <li style={{lineHeight: "50px"}}>77,000 active subscribers have signed up on Reboot’s interactive program sites</li>
                    <li style={{lineHeight: "50px"}}>Over 60,000 have made contributions of content to these projects</li>
                </ul>

                 <div className="complete-page-heading">About Fiddler on the Roof - Yiddish</div>
                 <p>A New York Times Critics’ Pick, Fiddler on the Roof “strikes a deep emotional chord” and “offers a kind of authenticity no other American Fiddler ever has” (The New York Times).</p>
                 <p>With direction by Oscar and Tony Award®-winner Joel Grey, this production “speaks to us all” (Newsday). It has been hailed as “a richer, deeper interpretation” by The Wall Street Journal, “a mitzvah” by Time Out New York, and AM New York gives it four stars, calling Fiddler on the Roof “perfect.”</p>
                 <p>Harold Prince, the legendary and original producer of Fiddler on the Roof on Broadway (1965 Winner of 9 Tony® Awards, including Best Musical) says, “If you have seen Fiddler before, you must see this production because it will make you feel you are seeing Fiddler for the first time.”</p>
                 <p>In Yiddish with English and Russian Supertitles.</p>
                 <a href="http://fiddlernyc.com/#about">http://fiddlernyc.com/#about</a>


            </CustomScrollbar>
            <div className="complete-page-fade-in-container"></div>
           



        </div >
        </AppContainer>
        </Navigator>
        )
    }
}


export default About