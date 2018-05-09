import React from 'react';
import './inshorts.css';


let header_logo = require('../assets/inshorts_main_logo.png')
let iphone_logo = require('../assets/iphone_logo.png')
let android_logo = require('../assets/android_logo.png')

let dhoni= require('../assets/dhoni.jpg')
let vodafone = require('../assets/vodafone.jpg')
let rupee = require('../assets/rupee.JPG')
let parliament = require('../assets/parliament.jpg')
let home = require('../assets/home.jpg')
let village = require('../assets/village.jpg')
let nobel = require('../assets/nobel.jpg')
let maradona = require('../assets/maradona.jpg')
let logo_footer = require('../assets/logo_footer.png')
let contact_icon = require('../assets/contact_icon.png')
let linkedIn_img = require('../assets/linkedin.png')
let facebook_img = require('../assets/facebook.png')
let twitter_img = require('../assets/twitter.png')

let twitter = 'https://twitter.com/inshorts'
let linkedIn = 'https://www.linkedin.com/company/news-in-shorts'
let facebook = 'https://www.facebook.com/inshortsapp'
let tc_link = 'https://www.inshorts.com/tnc'
let android_link = 'https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website'
let ios_link = 'https://itunes.apple.com/us/app/news-in-shorts/id892146527'

class Inshorts extends React.Component {
	constructor() {
		super();
		this.navigation_bar_stateChange = this.navigation_bar_stateChange.bind(this);
	 	this.close_navigation_bar = this.close_navigation_bar.bind(this);
	};
	 
	navigation_bar_stateChange() {
		var x=document.getElementsByClassName("navigation_bar");
		x[0].style.display = "block"; 	

		x= document.getElementsByClassName("close_btn");
		x[0].style.display = "block"; 	
	}
	close_navigation_bar() {
		var x=document.getElementsByClassName("navigation_bar");
		x[0].style.display= "none";

		x= document.getElementsByClassName("close_btn");
		x[0].style.display = "none";
	}

	
   render() {
      return (
         <div className="inshorts_outer_div">
			 
			<div className="header">
                <div id="menu_bar_icon" onClick={this.navigation_bar_stateChange}>
                    <p className="menu_bar_line"> </p>
                    <p className="menu_bar_line"> </p>
                    <p className="menu_bar_line"> </p>
                </div>
                <p id="menu_text" onClick={this.navigation_bar_stateChange}>Menu</p>	
                
                <img id="header_logo" src={header_logo} alt="inshorts_logo" />  
	        </div>

			 <div className="navigation_bar">

                <div id="language_select">
                    <span id="english" className="language">English</span>
                    <span id="hindi" className="language">हिंदी</span>
                </div>	

                <ul id="navigation_list">
                    <li id="category_text">Categories</li>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">All News</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">India</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Business</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Sports</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">World</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Politics</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Technology</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Startup</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Entertainment</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Miscellaneous</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Hatke</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Science</li> </a>
                    <a className="navigation_link" href="#" target="_blank"> <li className="navigation_list_items">Automobile</li> </a>
                </ul>
            </div>

			<div className="close_btn" onClick={this.close_navigation_bar}>
					<p className="close_btn_line line1"> </p>
                    <p className="close_btn_line line2"> </p>
					<p className="close_txt">Close</p> 
					
                
			</div>

		
            <div className="download_section"> 
                <div id="download_section_text"> For the best experience use <strong>inshorts</strong> app on your smartphone </div>
                
                <a id="iphone_logo" href={ios_link} target="_blank"> <img className="download_logo_image" src={iphone_logo} alt="iphone_logo"/> </a> 
                
                <a id="android_logo" href={android_link} target="_blank"> <img className= "download_logo_image" src={android_logo} alt="android_logo"/> </a>

            </div>
			
		<div className="container">
			<div className="sub_container">
				<div class="image-container">
					<img className="article_image" src={dhoni} alt="dhoni_img"/>
				</div>
				
				<div className="article_msg"> 
					<p className="article_heading"> Dhoni asks for DRS even before umpire declares Bumrah out</p>
					<p className="article_author"> <strong>short</strong> by Dishant Sharma / 04:35 pm on 11 Dec 2017,Monday</p>
					<p className="article_msg_main"> MS Dhoni signalled to take a DRS review even before the umpire could completely raise his finger to declare Jasprit Bumrah out in the first ODI against Sri Lanka. Dhoni took the call from the non-striker's end after the Sri Lankan team appealed for LBW. The review found that the ball had pitched outside off-stump, resulting in the decision's reversal.
					
					</p>
					<a className="article_link" href="http://www.bcci.tv/videos/id/5779/when-dhoni-made-the-right-call-yet-again?utm_source=inshorts&utm_medium=referral&utm_campaign=fullarticle" target="_blank" >read more at BCCI</a>
				</div>
			</div>
			<div className="sub_container">
				<div class="image-container">
					<img className="article_image" src={vodafone} alt="vodafone_img"/>
				</div>
				
				<div className="article_msg"> 
					<p className="article_heading"> Vodafone promises to provide India's best postpaid plans</p>
					<p className="article_author"> <strong>short</strong> by Roshan Gupta / 10.00 am on 08 Dec 2017,Friday</p>
					<p className="article_msg_main"> On Vodafone RED Postpaid plans, you can enjoy free national roaming, no data wastage with Data Roll Over, unmatched entertainment with Netflix, Vodafone Play, Magzter. In addition to that, it also offers savings of up to 20% (by adding family, friends, and devices) under RED TOGETHER & free smartphone protection with RED Shield.</p>
					<a className="article_link" href="http://www.hindustantimes.com/world-news/time-magazine-honours-kansas-shooting-hero-ian-grillot-who-took-bullet-for-an-indian/story-1TtxZ16dQS4RhUx3YbZiIK.html?utm_source=inshorts&utm_medium=referral&utm_campaign=fullarticle" target="_blank" >read more at Hindustan Times</a>
				</div>
			</div>
			
			<div className="sub_container">
				<div class="image-container">
					<img className="article_image" src={rupee} alt="rupee_img"/>
				</div>
				
				<div className="article_msg"> 
					<p className="article_heading"> Delhi, Guj accounted for half of fake note seizures in 2016</p>
					<p className="article_author"> <strong>short</strong> by Sonu Kumari / 11:34 am on 11 Dec 2017,Monday</p>
					<p className="article_msg_main"> Delhi and Gujarat collectively accounted for more than half of the fake notes seized in the country in 2016, a report by the National Crime Records Bureau revealed. The report further revealed that nearly 50% of the seized notes were in the denomination of ₹500. Interestingly, no fake currency was seized from Chhattisgarh in 2016.</p>
					<a className="article_link" href="https://factly.in/2016-2-states-accounted-50-fake-notes-seized-country/?utm_source=inshorts&utm_medium=referral&utm_campaign=fullarticle" target="_blank" >read more at FACTLY</a>
				</div>
			</div>
			
			<div class="sub_container">

				<div class="image-container">
					<img class="article_image" src={parliament} alt="parliament_img"/>
				</div>
				<div class="article_msg"> 
					<p class="article_heading"> Parliament passed 47% bills without debate in last 10 yrs</p>
					<p class="article_author"> <strong>short</strong> by Parmeet Kaur / 08:57 am on 11 Dec 2017,Monday</p>
					<p class="article_msg_main"> Nearly 47% of the bills in the last 10 years were passed without any debates in the Parliament, according to a report. It also revealed that 61% of these bills were passed in the last three hours of a session. Further, the number of MPs with doctorate, post-doctorate and post-graduate degrees also declined by 62% in the last 20 years.</p>
					<a class="article_link" href="http://www.india.com/news/india/parliament-passed-47-per-cent-bills-without-any-debate-in-last-10-years-2737257/?utm_source=inshorts&utm_medium=referral&utm_campaign=fullarticle" target="_blank" >read more at Hindustan Times</a>
				</div>
			</div>
			
			<div className="sub_container">
				<div class="image-container">
					<img className="article_image" src={home} alt="rental_home_img"/>
				</div>
				<div className="article_msg"> 
					<p className="article_heading"> India's only ISO-certified house is in Chennai</p>
					<p className="article_author"> <strong>short</strong> by Sonu Kumari / 12:47 pm on 11 Dec 2017,Monday</p>
					<p className="article_msg_main"> Chennai's Surana family has acquired an ISO 9000 certification for their home, thereby becoming the first family in the country to do so. The grandfather in the family is the 'household head', while the father and children are 'permanent customers'. Guests or 'temporary customers' visiting the house are served a form to give feedback for the hospitality and food.
					</p>
				</div>
			</div>
			<div className="sub_container">
				<div class="image-container">
					<img className="article_image" src={village} alt="village_img"/>
				</div>
				
				<div className="article_msg"> 
					<p className="article_heading"> Jharkhand village holds kissing competition for couples</p>
					<p className="article_author"> <strong>short</strong> by  Sonu Kumari / 10:20 am on 11 Dec 2017,Monday</p>
					<p className="article_msg_main">Dumaria, a tribal-dominated village of Jharkhand, organised a kissing competition for couples during its two-day annual fair. Over 18 couples took part in the contest which was aimed at strengthening the relationship between husband and wife. It was an initiative to check the growing cases of divorces and differences between tribal couples, Jharkhand Mukti Morcha legislator Simon Marandi said.</p>
					<a className="article_link" href="http://www.hindustantimes.com/india-news/in-jharkhand-a-village-hold-kissing-contest-for-couples/story-ZgRSlgPch6SVLto4TD2uaK.html?utm_source=inshorts&utm_medium=referral&utm_campaign=fullarticle" target="_blank" >read more at Hindustan Times</a>
				</div>
			</div>
			
			<div className="sub_container">

				<div class="image-container">
					<img className="article_image" src={nobel} alt="nobel_img"/>
				</div>
				
				<div className="article_msg"> 
					<p className="article_heading"> 2017 Nobel Laureates receive awards, $1 million cash prize</p>
					<p className="article_author"> <strong>short</strong> by Swarnim Bagre / 11:11 am on 11 Dec 2017,Monday</p>
					<p className="article_msg_main"> The 2017 Nobel Laureates were handed their medals, personal diplomas, and cash awards worth 9 million SEK ($1.07 million) per Nobel Prize on Sunday. While the ceremony for Peace Prize took place in Norway, the remaining honours were awarded in Stockholm by the Swedish King. Notably, Alfred Nobel had established prizes in only five of the six disciplines in 1895.</p>
					<a className="article_link" href="https://www.nobelprize.org/ceremonies/?utm_source=inshorts&utm_medium=referral&utm_campaign=fullarticle" target="_blank" >read more at Nobel Prize</a>
				</div>
			</div>

			<div className="sub_container">

				<div class="image-container">
					<img className="article_image" src={maradona} alt="nobel_img"/>
				</div>

				
				<div className="article_msg"> 
					<p className="article_heading"> Maradona arrives in India to play charity match with Ganguly</p>
					<p className="article_author"> <strong>short</strong> by Dishant Sharma / 01:32 pm on 11 Dec 2017,Monday</p>
					<p className="article_msg_main"> Former World Cup-winning captain Argentina's Diego Maradona arrived in Kolkata on Sunday, reportedly to take part in a charity football match against a team captained by former Indian cricket captain Sourav Ganguly. Maradona, who visited India in December 2008 as well, is on a three-day trip currently and will likely play the charity football match on December 12.</p>
					<a className="article_link" href="http://indiatoday.intoday.in/story/diego-maradona-sourav-ganguly-kolkata-charity-match/1/1107424.html" target="_blank" >read more at india today</a>
				</div>
			</div>
			

		</div>	

	<button type="button" id="load_more_button">Load More</button>

	<div id="footer">

	
		<div> </div>  

		<div id="inshorts_logo_div">
			<img id="footer_logo" src={logo_footer} alt="inshorts_logo"/>
			<pre id="footer_inshorts_text"><strong >Inshorts</strong> medialabs pvt.ltd. 
                <br/> &copy; COPYRIGHT 2017  
            </pre>
		</div>	

		<div id="inshorts_contact_us_div">
			<img id="contact_icon" src={contact_icon} alt="contact_img"/>
			<p> 
                <a className="footer_link" href={tc_link} target="_blank">Terms & conditions </a> <br/> 
                <a className="footer_link" href={tc_link} target="_blank">Privacy Policies</a> 
            </p>
		</div>	

		<div> </div>
		
		<div className="social_media">
			<a className="facebook" href={facebook} target="_blank"> <img className="footer_social_logo" src={facebook_img} alt="facebook_img"/> </a>

			<a  className="twitter" href={twitter} target="_blank"> <img className="footer_social_logo" src={twitter_img} alt="twitter_img"/></a>

			<a className="linkedIn" href={linkedIn} target="_blank"><img className="footer_social_logo" src={linkedIn_img} alt="linkedin_img"/> </a>
		</div>
	</div>

         </div>
      );
   }
}

export default Inshorts;