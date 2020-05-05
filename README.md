Link to deployed website [The Fitness World](https://firash94.github.io/Interactive-Frontend-Development-Milestone-Project-/index.html)  
     
# The Fitness World

The Fitness World is a web app that has been created to reach out to individuals and encourage them to seek a better lifestyle and assissting them throughout their journey to reach their goals.

In order to help them achieve this, the users are able to get in touch with me and to arrange a one on one personal training session. The user will be able to locate all the nearby "Pure Gyms" around their area where the session could be held.

Furthermore, the users are able to download the pre-made workout plans which are tailored to their goals. These plans are made to cater people who are looking for fat loss or muscle gain/toning as well as general fitness help.


### Developer goals:

-	To try and reach out to as many people and help them out with their goals in person by having a one on one session in their nearby Pure Gyms.
-	To provide the users with workout plans which they can use on their own towards their goals.
-   To give the user an access to a BMR calculator and find out how much calories their body needs for a daily intake.
-	To provide the user with a contact method which enables them to get in touch with me for any advice or support.

### User goals and interests:


- 	To get in touch with a PT and arrange one on one sessions to help them with their results.
-	Being able to reach out to experienced PTs in the fitness industry for advice and help in their lifestyle.
-	To use the training plans that are provided in the website which could be tailored to their goals in case they are looking to make a change in their workout routine.
-	Being able to find out what the daily calorie intake should be for their body to consume and function normally through the BMR calcualtor.

### Users who would be interested in this web app (Target clients)


- 	Somneone looking for a personal trainer for one on one sessions in the gym.
-	Someone looking for an advice/help with their fitness lifestyle.
- 	Somneone looking for a fat loss training plan.
-	Someone looking for muscle gain training plan.
-	Someone looking to find out how much their calorie intake should be for their body to function.


## UX

**This application was developed for the following stories:**


-	As a user type, I want to get in touch with a personal trainer and schedule a one on one training session with them.
-	As a user type, I want to contact a personal trainer for advice and help on how to train correctly as well as eat healthy.
-	As a user type, I want to try a new fat loss training plan that differs to my usual weekly plans.
-	As a user type, I want to try a new muscle gain training plan that differs to my usual weekly plans.
-	As a user type, I want be able to find out what should be my daily calorie intake for my body to function on normal basis.

This web app was designed to be responsive on all available platforms such as desktops, tablets and mobile phones.



**Wireframes**


The user can view the initial wireframes design for this web app by downloading the following [PDF document](https://pdfhost.io/v/DIJ6feD4e_Project_Wireframespdf.pdf).

## Features



**Navigation around the site:**

The website consists of five different web pages: Home page, Meet us, Plans, Calculator and Contact page. 
Please note - there is no link for the home page within the navigation menu as I have used the website title as a link back to the home page.

The navigation bar changes into a toggler when viewed on a smaller sized screen such as mobile phone. 
When the screen size is shrinks, the “Menu” button appears which then can be clickable to display a dropdown menu that enables the navigation through the app.


**Home Page:**

This home page is quite a basic intro page for the user when they land on the web app. On here I speak about general motivation and the lifestyle of fitness as well as an introduction about what I can do to help the user in term of fitness.

This is quite a short summary to quickly cover what the web app is about.


**Meet us! Page:**


On this page, I have talked about why fitness can help towards a better lifestyle for the human being and I have also provided couple of reasons to back my point. This is mainly to encourage someone that isn't as motivated and to give them that little extra nudge they need.

Futhermore, I have also offered to provide the user a one on one 1 hour PT session in one of their nearby Pure Gyms.

To do this, I have also implemented a google maps API which shows the top 20 nearby Pure Gyms around the user as soon as they allow their location to be seen. 

The google maps API fetches the user's location and shows the nearby Pure Gyms around them however if they disallow this, then the API will revert back to the original location on the map. Furthermore, when the user clicks on one of the nearby gyms, this will display the full name of the gym and the rating that it has been given.

These features are all responsive within the web app and can enlarge/shrink in a suitable matter to meet the right user experience needs depending on the size of the screen. 
For instance, the large main image at the top becomes hidden when the web app is viewed on mobile and the google maps window shrinks into a square to fit perfectly and suitably on a mobile screen too.


**Plans Page:**

On this page, I have explained what kind of plans I provide for the user to use when training in the gym.

I have implemented two hyperlink images and subtitles; one for Fat Loss plan and the second is for Muscle Gain plan. These links will take the user to the contact page as they need to get in touch and request these from me by sending an email.

In terms of responsiveness, The subtitle at the top of the page will be centered on mobile, the large image will shrink to fit right under. The overlapping content box will no longer overlap for cleaner view and be shown as a block under the image.

The two training plan images are also dispalyed in two different blooks for better user experience and visualisation.


**Calculator Page:**

This page basically contains the Basal Metabolic Rate (BMR). This calcualtor is basically used for the user to find out what the daily calorie intake needs to be for their body to function correctly.

I have explained what a BMR is and why it is needed in a paragraph just incase for some users that do not know what it is.

Under the content section, the calculator has been implemented for both the male and female gendre. This has been implemented through JavaScript to make an automatic calculation which then dispalys the result in an input field for the user after they have filled in the required fields.

In terms of responsiveness, for a better user experience I have seperated each form in their own blocks to appear under eachother when viewed on smaller screens.


**Contact Page:**

The contact section consists of a form which can be used for the user to get in touch with me directly. This can be used for reaching out and scheduling a one on one session in their nearby pure gym, to request a training plan or to ask for general advice or tips.

**The footer:**


The footer includes links to all my social media pages. In case they want to get in touch through different platforms or view my profile. There is also a disclaimer for copyright at the very bottom of the web app.



**Features to implement in the future:**

-	Setting the contact page to send an automated email to the recipient once they submit a successful message delivered to me. This way they receive a confirmation that I did receive their email and will get in touch as soon as possible.
-	Upload the training plans on the web app and have the user download them instantly rather than requesting them from me by getting in touch to save time.
-	Add a macros to calories calcualtor.
-	Add a functionality that allows the user to schedule a one on one session with me in one of their nearby Pure gyms.


## Technologies used 


-	HTML/HTML5 – This was used to implement most of the content on the site.
-	CSS – This was used for the design/look and feel of the site.
-	Git – Used as a repository for version control.
-	Github - Used to host the files and the web app itself.
-	Cloud 9 – This is the platform used for developing the web app.
-	Bootstrap – This was used mainly for navigation purposes and to aid in making the web app responsive.
-	Fotnawesome - This was used to fetch the icons for the social media platforms in the footer.
-	JavaScript – This was used to implement the google maps API as well as the BMR Calculator.


## Testing

### Generic/Journey testing:

The following have been tested from a user’s perspective to ensure the web app works as expected:

-	Easy to navigate around the web app as the navigation bar/drop-down menu is easily visible on the web app.
-	Each page of the web app easily recognisablea, easy to navigate around and easy to read/understand.
-	Esily detects the users location (once the user allows to) and displays all nearby gyms for them.
-	Shows clear understanding to the user that this is a fitness based web app.
-	The user can easily see what nearby gyms they have around them including the full name and rating.
-	The user can easily use the BMR calculator as it is quite basic to use with no complex functionality.
-	The user can easily see the calorie intake result when they click submit on the BMR calcualtor as the input field stands out.
-	The user is easily able to read all web app content as the font is large and clear.


### Manual Testing

-	Navigation links:
	Each navigation link has been tested to ensure that it is linked to the correct page. The navigation link has also been tested when viewed on a smaller screen sizes to ensure the functionality is consistent making sure the toggler is activated correctly.
-	BMR buttons:
	Both the calculate and reset button has been testedfor both gendres. When hitting submit without filling in the fields, this throws a "Not a Number" value in the value section. I have also tested that both buttonswork correctly.
-	Training plans images/subheading links:
	I have tested these links to makesure that they redirect correctly to the contact form for the user to get in touch.
-	Google maps API (Allowing location):
	I have tested this on my end to make sure that when location is enabled, the map shows the exact correct location of my area and displays all 20 nearby gyms.
-	Google maps API (Disallowing location):
	I have tested this on my end to make sure that when location is disabled, the following message is shown on the map 'Geolocation permissions denied. Using default location.'. I have also tested that the APi also defaults to the main location when user's location is disabled.
-	Google maps API (clicking on the gym marker):
	I have tested all the markers to make sure that each gym dispalys the full name and the rating.
-	BMR Calculator:
	I have tested both gendres for the BMR calculator to make sure that the correct calculation is calculated as implmented in the code.
-	BMR Calculator (Reset button):
	I have tested this for both forms to make sure that when the reset button is clicked, all values are removed.
-	Contact form:
	Each field was tested thoroughly to make sure that the mandatory functionality worked. I have tested the following fields: Full name, email address, Phone and comments section. The form has failed to submit if any of the fields was left blank. I have also tested that the modal window pops up confirming that the form has been submitted when processed successfully.
	The email address field has also been tested when trying to insert an invalid email address. The form fails to submit as the email address is not written in the correct format.
	The phone number field has also been tested to make sure that it only allows numeric values and no other character.
-	Social media icons:
	The social media icons in the footer section have all been tested to make sure they are linked correctly and work fine. The “_blank” attribute have also been tested on all of them to make sure that when they are clicked, a new window is open rather than navigating away from the web app.
-	Button hover:
	The button with the hover effect have been tested across the web app. The functionality was working correctly and it changes colour when hovered over.

All images have been tested to make sure they change size when resizing the screen. Background images were tested to make sure that they are covering each section no matter what the screen size is.

The web app content was checked and tested to make sure that there was no Grammarly error.




### Cross browser/device testing:

**iPad:**

-	Safari: The web app has been tested to make sure all sections are appearing correctly on iPad making sure the media queries are working as expected. This has been tested as landscape as well as portrait.

-	Chrome: The web app has also been tested on the chrome browser making sure it is displayed consistently a long with Safari on the iPad device.


**Desktop:**

-	Chrome: Testing was done to make sure all images/content was displayed clearly on the large desktop screen.

-	Firefox: Testing was also carried on Firefox to make sure everything is consistent with chrome.


**Android phone:**

-	Android internet: Tested mainly to make sure the web app is responsive correctly on small screen sizes. This was tested through landscape and portrait orientation.

-	Chrome: The web app was also tested on chrome mainly for orientation purposes.


### Issues found and resolved:

The main testing was done throughout carrying the project which means that almost all issues were fixed as the implementation carried forward.

The BMR Description text was coming out the containing box when viewed on mobile phone. The responsiveness was fixed by applying margins to the content box.

There was Grammarly error in the content under “Implementation Specialist At MaritzCX Jan 18 – Present”. This was fixed during implementation.

The google maps on the Meetu us page was not displaying correctly in size and not stretching across the container. This was due to certain bootstrap classes which prevented it from showing in width of 100%. The classes have been removed and the map is displayed correctly.

There was a grammar mistake in the first paragraph on the home page. This was also fixed.



### Left to resolve:

For the BMR Calculator, the script had to be implemented on the same page as the HTML rather than on a seperate page. The reason for this is that whenever I linked it, the functionality seems to mess up although I do link the Javascript file and the HTML file correctly.
Eventually I will find an alternative to move the JS to a seperate file and get it to work.



## Deployment

This project was developed using the Cloud9 IDE, this was then committed to git and pushed to GitHub through the terminal within Cloud9.

To deploy the project from the GitHub repository to GitHub Pages I took the following steps:

1.	Logged into GitHub.
2.	Chose Interactive-Frontend-Development-Milestone-Project from the list of repositories.
3.	Selected Settings from the menu that is just under the respository, it is the last item on the right.
4.	Scrolled down to the section titled GitHib Pages.
5.	Under Source clicked the dropdown menu titled None and selected Master Branch.
6.	This automatically refreshes the page which took me back to the top. The website has now been delpoyed.
7.	Then I scrolled back down to the GitHub Pages section where there is now a link to the delpoyed website, I clicked the link to view and check it.

Please note - On submission the The Development Branch and Master Branch of this project are identical.

The submission URL to the Final version of the website is: https://firash94.github.io/Interactive-Frontend-Development-Milestone-Project-/index.html

To run the project locally by cloning from GitHub do the following:

1.	Click this link to go to the projects GitHub [Repositry](https://github.com/FirasH94/Interactive-Frontend-Development-Milestone-Project-).
2.	Click the green Clone or download dropdown at the top right, just above the list if files and commits.
3.	Copy the URL in the box under Clone to HTTPS. https://github.com/FirasH94/Interactive-Frontend-Development-Milestone-Project-.git
4.	Open Git Bash in your local IDE.
5.	Change the current working directory to the location you want the cloned directory to be made.
6.	Type git clone, then paste the URL that you copied earlier. https://firash94.github.io/Interactive-Frontend-Development-Milestone-Project-/index.html

When Pressing Enter, your local clone will be created.


## Credits

**Content:**

-	All the content within the website (Except the BMR Content) Has been written by me from scratch.
-	The BMR content was taken from the fllowing site: https://codepen.io/danijel91/pen/OGqwzB


**Media:**

-	The background image, the workout plans images and the BMR Man and Woman images were taken from google and slightly edited by me through an image editor.
-	The real life image of the PT you see on the home page and the Meet Us page has been taken live as they are a picture of a PT that I know.
-	Social media icons were taken from “Font awesome” website.


**Code:**

-	The initial theming was taken from a bootstrap theming page for the initial navigation purposes and outer layout: https://startbootstrap.com/themes/business-casual/
-	https://developers.google.com/ was used to help me implement the google maps API on my website and to locate the geolocation of the user.

## Disclaimer

The content of this website was created for educational purposes.