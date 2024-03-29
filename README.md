<h1 align="center">iRemember Spaced Repetition</h1>

<!-- Responsive Image -->
<img src="assets/images-readme/responsive.png" alt="responsive design of website">


<!-- Links -->
View the Live project [link](https://eburonia.github.io/i-remember/)<br>
View the GitHub Repository [link](https://github.com/Eburonia/i-remember/)


<!-- About -->
## About
The purpose of this website is to help students to memorize certain information by using so-called flashcards. This information could be about a language (vocabulary) or other information (e.g. topography).

Some people are not familiar with the flashcard system. Back in the days when there were no computers, students used [flashcards](https://en.wikipedia.org/wiki/Flashcard) to learn another language.

A flashcard has a question side (front-side) and an answer side (back-side). By showing the question on the front-side, the student has to guess the answer indicated on the back-side of the flashcard.

For example, the question could be, what is the French translation of the English word 'Car'? The answer is 'Voiture'. 'Car' is mentioned on the front and 'Voiture' on the back-side of the flashcard.

By repeating these flashcards over a certain amount of time, students start to remember the answers to the questions. This is called [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition).

There already exist flashcard/spaced repetition systems on the internet. One of the most well-known is '[Anki](https://apps.ankiweb.net/)'. The desktop version of the application is popular among language learners and is also of high quality. You have to pay for the smartphone version of the application, but it is not that impressive.

The idea of the website creator was to create a free version of a flashcard system that end-users can use on a desktop or smaller devices.

Creating flashcards can be done on the 'Editor' and learning on the 'Practice' page.

See the 'How to Use' page on the website for more information about how the website functions.


<!-- Table of Contents -->
## Table of Contents

[User Experience (UX)](#UX)

[Features](#features)

[Technologies Used](#technologies)

[Testing](#testing)

[Known Bugs](#bugs)

[Deployment](#deployment)

[Credits](#credits)


<!-- User Experience (UX) -->
<a id="UX"></a>
## User Experience (UX)

### User Stories

#### First-time Visitor Goals
1. As a first-time visitor of the website, I want to understand what the website's purpose is, so I can have an idea whether I have ended up in the right place or not.
2. As a first-time visitor of the website, I want to navigate easily throughout the website, so I don't get frustrated not knowing where to click.
3. As a first-time visitor of the website, I want to find out quickly how to use the website, so I might not get frustrated by intuitively trying things out on the website.
4. As a first-time visitor of the website, I want to practice an example flashcard set without having to create one first, so I can quickly see how the 'Practice' page looks and functions.
5. As a first-time visitor of the website, I want to create my own flashcard sets, so I can study whatever I want.
6. As a first-time visitor of the website, I want to have a user-friendly user interface, so I might not get annoyed or frustrated while using the website.
7. As a first-time visitor of the website, I want to know what other end-users think of the website, so I can decide whether I might use the website or not.
8. As a first-time visitor of the website, I want to know if I can contact the creator of the website, so I can ask a question or provide some feedback.
9. As a first-time visitor of the website, I want additional information about a flashcard set, so I might not get confused when practicing a specific flashcard set.
10. As a first-time visitor of the website, I want to know how long it takes to get through a flashcard set, so I might not get frustrated because I have no idea how much time it will take.


#### Returning Visitor Goals
1. As a returning visitor of the website, I want to maintain my flashcard sets, so I can add or delete flashcards that are needed or not needed anymore.
2. As a returning visitor of the website, I want to re-use my created flashcard sets anytime, so I can keep practicing them.
3. As a returning visitor of the website, I want to use my created flashcard sets on different devices, so I can decide which device I might use when I want to practice.
4. As a returning visitor of the website, I want to see my progress, so I know whether I need to invest more time to increase my score.
5. As a returning visitor of the website, I want to practice my flashcards as long as I want, so I can decide how much time I am willing to invest in practicing a deck.
6. As a returning visitor of the website, I want to receive the latest information about the website, so I know when for example new features are implemented on the website.


### Design

#### Colour Scheme
The following colours were used throughout the webpage:
   - Hex: #D5D8CF: light green colour
      - Main colour on website, used in header, footer, and main content.
   - Hex: #707070: dark gray colour
      - Colour used in navigation bar, website logo, headings, paragraphs,  footer, 'Practice' page, and 'Deck Editor' page.
   - Hex: #f04a64: orange-pink colour
      - Colour used in buttons, website logo, links, hover colour, and active page links.
   - Hex: #f5f5f5: whitesmoke colour
      - Colour used as background colour in division sections, and text of buttons.
   - Hex: #d3d3d3: lightgray colour
      - Colour used in disabled buttons practice page.
   - Hex: #b33649: dark red colour
      - Colour used for button hover.
   - Hex: #32cd32: green colour
      - Colour used in 'Correct' button (pressed) on 'Practice' page.
   - Hex: #ff0000: red colour
      - Colour used in scoreboard (wrong answers), and 'Wrong' button on 'Practice' page.
   - Hex: #00bfff: deepskyblue colour
      - Colour used in 'Show Answer' button, and answer field on 'Practice' page.
   - Hex: #990000: crimson colour
      - Colour used in 'Wrong' button (pressed) on 'Practice' page.
   - Hex: #00FF00: limegreen colour
      - Colour used in scoreboard (correct answers), and 'Correct' button (pressed) on 'Practice' page.
   - Hex: #9C1228: dark red colour
      - Colour used in border colour of buttons.


<img src="assets/images-readme/colour-scheme.png" alt="colour scheme"><br>
<sub>Colour scheme</sub>


#### Typography
- Not much attention is given in selecting a proper font-type as long it's a well-readable font. 'Segoe UI' is the only font-type used throughout the website and is a well-readable font type. 'Tahoma'; 'Geneva'; 'Verdana'; and 'sans-serif' are set as a fallback font-type.
- The website logo was created by using the 'Glacial Indifference' font-type.

<img src="assets/images-readme/font-type.png" alt="segoe UI font-type"><br>
<sub>Segoe UI font-type</sub><br>


#### Imagery
The website is created for learning purposes. Except for the website logo and images on the manual page, no additional images are implemented on the website. The website logo is responsive for smaller devices.


#### Wireframes
Wireframes belonging to the website's project have been made in [Adobe XD](https://www.adobe.com/products/xd.html). Images are implemented in markdown files and can be found here:
- Wireframes of the 'Index' Page - [link](assets/wireframes/wireframes-index.md)
- Wireframes of the 'Practice' Page - [link](assets/wireframes/wireframes-practice.md)
- Wireframes of the 'Editor' Page - [link](assets/wireframes/wireframes-editor.md)
- Wireframes of the 'How to use' Page - [link](assets/wireframes/wireframes-manual.md)
- Wireframes of the 'Contact' Page - [link](assets/wireframes/wireframes-contact.md)

All wireframes were designed for three different devices:
- Desktop - Web: maximum viewport width 1920px
- iPad - Nexus 9: maximum viewport width 768px
- iPhone - 12 Pro Max: maximum viewport width 428px


#### Mockups
Due to the limited available time of the web developer, mockups have not been created.
Instead, an image of the responsive design has been added on top of this README file.


<!-- Features -->
<a id="features"></a>
## Features

### Header
A header has been added on top of every page and exists out of the website logo, and a navigation bar. The background colour used for the header is a light green colour as described in the colour scheme section in this README file. The navigation bar will change to a 'hamburger-style' navigation menu on smaller devices (e.g. iPad or smartphone). By hovering the navigation bar anchor links, the colour will change from a dark gray colour to an orange-pink colour as described in the colour scheme section of this README file and making it clear to the end-user this is a clickable link. Active pages are indicated with an orange-pink colour and a stripe above the active link. The company logo on the top left-hand side of the header has a clickable anchor link assigned to it which will always redirect the website to the index page. The Company logo will automatically resize for smaller devices. 


### Footer
A footer has been added on the bottom of every page and exists out of social media links, and a copyright notice. The same background colour has been chosen as in the header (light green) while the social media links are styled in a dark gray colour. By hovering the social media link icons, the colour will change from a dark gray colour to an orange-pink colour as described in the colour scheme section of this README file and makes it clear to the end-user these are clickable links. The icons used for the social media links are directly loaded from the [fontawesome](https://www.fontawesome.com) website. All social media links will be opened on a new blank page. A clear copyright notice is visible at the bottom of the footer which will be resized on smaller devices.


### Index Page
On the 'Index' page, the end-user gets an introduction to the website and its purpose. Some background about the website is given in the 'About' section and also emphasizes the end-user to read the manual on the 'How to use' page first. External links are opened on a blank page. And it's also mentioned how the end-user can contact the website's owner.


### Practice Page
The practice page exists out of two sections. In the first section, you have to import a flashcard set (deck) into the system by first clicking the 'Browse' button, then select a deck (text file .txt), and then by clicking the 'Load Deck' button, the second section will be shown on the screen which is the practice section. You can also decide to press the 'Example Deck' button. It will load and show the end-user an example flashcard set (deck) in the practice section.

When the end-user has loaded a flashcard set (deck), the practice interface will show up on the screen. It starts with the deck title 'PRACTICE FLASHCARDS' telling the end-user is in the practice section of the page.

Below that is the 'Deck name' indicated and is equal to the imported file (.txt) name. Then indicated, we have the 'Number of cards shown so far' and the 'Number of cards' inside the deck. Every time a new card shows up on the screen, the 'Number of cards shown so far' will increment by +1 until it reaches the 'Number of cards.'

There is a 'Question field' and an 'Answer field' nested in one division (the flashcard).
The 'Question field' has a title that is equal to the card's front-side title which you can change in the 'Editor' and the 'Answer field' has a title that is equal to the card back-side title which you can also change in the 'Editor'.

Then we have the 'Answer textbox' and a 'Show answer' button. When pressing the button, it shows the answer to the question. Above the 'Answer textbox,' a scoreboard is indicated. Telling the end-user how many cards are guessed 'Correct' and how many guessed 'Wrong.'

On smaller devices, the practice interface looks different. 
Typing answers on smaller devices is not really convenient for the end-user and user experience. For that reason, the 'Answer-textbox' is replaced with 3 buttons: the 'Wrong' button, 'Answer' button, and 'Correct' button. Here the end-user has to tell the system whether he/she knew the correct answer or not.
By guessing the answer and comparing it with the back-side of the card (by pressing the 'Answer' button), the end user has then to press the 'Wrong' or 'Correct' button.

Proper styling has been done regarding the colours, see 'Colour scheme' section in this README file for more information.

### Editor Page
To create or modify flashcard sets (decks), the end-user has to open the 'Editor' page. Modifying an existing flashcard set (deck) is done by pressing the 'Browse' button, then select a deck file (.txt), and then press the 'Load Deck' button to import the deck into the editor screen.

Creating a new deck is done by pressing the 'New Deck' button.
The end-user can change the following fields in the 'Deck editor':
   * Deck name (description of deck and file name)
   * Front-side (description of flashcards front-side, will show-up in practice screen)
   * Back-side (description of flashcards back-side, will show-up in practice screen)
   * Flashcards (front-side and back-side)

New flashcards will be added by pressing the 'Add Card' button.
For every (new) flashcard, the end-user can adjust the front-side, and back-side.

Some special characters cannot be used because they are part of the deck file itself, these are: | + < >

Deleting flashcards can be done by pressing the button with the 'Recycle Bin' icon in it.

When all necessary deck information and flashcards are added, the end-user can then create a deck file by pressing the 'Export' button. A deck (.txt) file will be generated and the end-user can save it then.

By opening the 'Practice' page, the generated deck can be imported in order to practice the deck.

Proper styling has been done regarding the colours, see 'colour scheme' section in this README file for more information.


### How to Use Page
On the 'How to Use' page, the end-user can find a small manual about how the website functions. Special attention is given to the 'Practice' and 'Editor' pages. Images are implemented to help the end-user easily understand how the website works. The page is responsive on smaller devices.
Proper styling has been done regarding the colours, see 'colour scheme' section in this README file for more information.


### Contact Page
On the 'Contact' page you can find a submission form including 3 text fields (first name, last name, e-mail address) and a text area (your message). All fields are mandatory fields and need to be filled before you can press the 'Submit' button. When done correctly, a message will be shown on the screen telling the end-user the form has been sent or not. Proper styling has been done regarding the colours, see 'colour scheme' section in this README file for more information.


### h2/h3 Heading
Every page as an h2 heading added including a [fontawesome](https://www.fontawesome.com/) icon describing the main purpose of the page. For consistency, sizing and colour (dark gray) of all h2 and h3 headings are chosen all the same on every page.


### Paragraphs
For consistency, sizing and colour (dark gray) of the paragraphs are chosen all the same on every page.


### Links
Anchor links are introduced in the navigation bar and on the 'Index' and 'How to use' pages. Having a orange-pink colour as described in the 'Colour scheme' section of this README file.


### Buttons
For consistency, all buttons are sized and styled the same way. A dark red colour for the border, an orange-pink background colour, and a smokewhite colour for the fonts are used as described in the 'Colour scheme' section in this README file.

<img src="assets/images-readme/button.png" alt="typical button"><br>
<sub>Typical button</sub>


### Responsiveness
All pages are responsive on all devices. Designed for minimum viewport width of: 320px.


### Accessibility
* All images have been foreseen with an alternative (alt) text in case the image cannot be loaded. This also helps the screen readers.
* Aria-labels have been introduced where needed to give important information to the screen readers. The W3C Markup Validator generates an error when aria-labels are added to divisions functioning like a editable fields (see Editor page). For that reason, no aria-labels have been added to divisions that function as editable fields.


### Future Features
* A future feature could be working with a database so the end-user can store flashcard sets externally to avoid the not-so user-friendly way of storing your flashcard sets right now. At the moment, you have to download your newly created flashcard sets and also when you have adjusted them.
* The statistics at the moment are also not spectacular and can be expanded and even stored in a database.


<!-- Technologies Used -->
<a id="technologies"></a>
## Technologies Used

### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [jQuery](https://en.wikipedia.org/wiki/JQuery)


### Frameworks, Libraries and Programs Used
- [jQuery v3.5.1](https://jquery.com/download/) - jQuery which is a JavaScript Library mainly used for manipulating the HTML DOM tree, is used throughout the website especially on the 'Practice' and 'Editor' page.
- [Font Awesome](https://www.fontawesome.com/) - Font Awesome icons are used on the website for linking to the social media pages and in h2 headings.
- [Git](https://git-scm.com/) - Git was used for version control and code change tracking of the website project. The terminal in Gitpod was used to commit and to push the project to the Github repository.
- [Github](https://github.com/) - The project code has been stored on the Github website.
- [GitPod](https://www.gitpod.io/) - GitPod was used for creating the code, testing of the website, commiting, and pushing the code to the github repository. 
- [Adobe XD](https://www.adobe.com/products/xd.html) - Adobe XD was used to create the website's Wireframes. To see the Wireframes, go to the Design section above to see the results.
- [Photopea.com](https://www.photopea.com/) - The Photopea website is used for creating the website logo, 'Manual' page images and README images.
- [EmailJS](https://www.emailjs.com/) - EmailJS is used to send emails from the 'Contact' page form to the website owner's e-mail address directly from the client-side JavaScript code.


<!-- Testing -->
<a id="testing"></a>
## Testing

### Functionality Checklist

#### Common
- Check aria labels. **(checked)**
- Check alternative 'alt' text. **(checked)**
- Check the spelling of the page content. **(checked as much as possible)**


#### Header/Navigation Bar
- Check whether the header is always on top of the page. **(checked)**
- Check whether the iRemember logo links back to the index page. **(checked)**
- Check the 'Active' page in the navigation bar and the remaining links change colour while hovering. **(checked)**
- Check for dead links. **(checked)**
- Check the responsiveness of the navigation bar (change to hamburger-style navigation) (min. 320px). **(checked)**
- Check whether there is no overflow while reducing the screen size. **(checked)**

<img src="assets/images-readme/hamburger-navbar.png" alt="hamburger-style navigation bar"><br>
<sub>Hamburger-style navigation bar</sub><br><br><br>


#### Footer
- Check whether the footer is always at the bottom of the page. **(checked)**
- Check whether all social media links are working properly and are opening a new blank page. **(checked)**
- Check whether the social media links change colour while being hovered. **(checked)**
- Check for dead links. **(checked)**
- Check the responsiveness of the footer when changing the size of the viewport (min. 320px). **(checked)**


#### Index Page
- Check for dead links. **(checked)**
- Check the responsiveness when changing the size of the viewport (min. 320px). **(checked)**


#### Practice Page
- Check the responsiveness of the page when changing the size of the viewport (min. 320px). **(checked)**
- Check change of colour while hovering the buttons. **(checked)**
- Check whether files can be selected when 'Browse' button is clicked. **(checked)**
- Check whether warning alert shows on screen when no .txt file is selected. **(checked)**
- Check whether non-deck related .txt files will be blocked from loading on the practice page. **(checked)**
- Check whether 'Load Deck' button shows up when .txt file is selected. **(checked)**
- Check whether 'Load Deck' button loads the practice screen and loads the deck properly. **(checked)**
- Check whether the 'Example Deck' button loads the example deck on the practice screen properly. **(checked)**
- Check whether the answer textbox is not caps sensitive. **(checked)**
- Check whether the 'Replay' button resets the deck properly. **(checked)**
- Check whether the 'Show Answer' button show the answer properly on screen (desktop only). **(checked)**
- Check whether the 'Show Answer' button show the answer properly on screen (smaller devices only). **(checked)**
- Check whether the 'Other Deck' button opens the start screen of the practice page (desktop only). **(checked)**
- Check whether the 'Other Deck' button opens the start screen on the practice page (smaller devices only). **(checked)**
- Check whether deck description is loaded properly on screen. **(checked)**
- Check whether flashcard front-side description is loaded properly on screen. **(checked)**
- Check whether flashcard back-side description is loaded properly on screen. **(checked)**
- Check whether the score is correctly calculated after all cards are shown to the end-user. **(checked)**
- Check whether the scoreboard (correct and wrong answers) does not show strange behavior. **(checked)**
- Check whether the 'Answer', 'Correct' and 'Wrong' buttons show strange behavior on smaller devices. **(checked)**

<img src="assets/images-readme/interface-practice.png" alt="interface of practice page"><br>
<sub>Interface of Practice page</sub><br><br><br>


<img src="assets/images-readme/interface-practice-small.png" alt="interface of practice page smaller devices"><br>
<sub>Interface of Practice page small devices</sub><br><br><br>


<img src="assets/images-readme/end-screen-practice.png" alt="end screen practice session"><br>
<sub>Your score at end of a practice session</sub><br><br><br>


#### Editor Page
- Check the responsiveness of the page when changing the size of the viewport. **(checked)**
- Check change of colour while hovering the buttons. **(checked)**
- Check whether files can be selected when 'Browse' button is clicked. **(checked)**
- Check whether warning alert shows on screen when no .txt file is selected. **(checked)**
- Check whether non-deck related .txt files will be blocked from loading on the editor page. **(checked)**
- Check whether 'Load Deck' button shows up when .txt file is selected. **(checked)**
- Check whether 'Load Deck' button loads the editor screen and loads the deck properly. **(checked)**
- Check whether 'New Deck' button functions properly. **(checked)**
- Check whether special characters for generating deck files will be blocked. **(checked)**
- Check whether all added text to the text fields will not overflow the field. **(checked)**
- Check whether the 'Garbage Bin' button deletes the selected card. **(checked)**
- Check whether it opens deck .txt files properly. **(checked)**
- Check whether the deck will be exported to a .txt file properly. **(checked)**


<img src="assets/images-readme/interface-editor.png" alt="interface of editor page"><br>
<sub>Interface of Editor page</sub><br><br><br>


<img src="assets/images-readme/deck-file.png" alt="typical content of a .txt deck file"><br>
<sub>Typical content of a .txt deck file</sub><br><br><br>


<img src="assets/images-readme/non-deck-selected.png" alt="text file witout deck content selected"><br>
<sub>Text file without deck content selected</sub><br><br><br>


#### How to Use Page
- Check for dead links. **(checked)**
- Check the responsiveness of the page when changing the size of the viewport. **(checked)**
- Check whether images are clickable. **(checked)**


#### Contact Page
- Check the responsiveness of the page when changing the size of the viewport. **(checked)**
- Check functionality of required fields. (checked). **(checked)**
- Check whether 'Your message has been sent!' screen show up when a message has been sent. **(checked)**
- Check whether the message has ended up in the website creator's mailbox. **(checked)**


<img src="assets/images-readme/contact-form.png" alt="contact form before submitting"><br>
<sub>Contact form before submitting</sub><br><br><br>


<img src="assets/images-readme/message-success.png" alt="confirmation screen message has been sent"><br>
<sub>Confirmation screen message has been sent</sub><br><br><br>


<img src="assets/images-readme/emailjs.png" alt="received email from emailJS"><br>
<sub>The received email from emailJS in the website creator's mailbox</sub><br><br><br>


#### 404 Page
- Check whether 404 page loads when entering a wrong link address. **(checked)**
- Check the 'back to homepage' anchor link is going to the index page'. **(checked)**

<img src="assets/images-readme/404-page.png" alt="404-page error message"><br>
<sub>404 page error message</sub><br><br><br>


### Usability Testing
- Family and friends were asked to test the website and to navigate through all website pages. Buttons, links, and contact form were tested by them.


### Compatibility Testing
The following browsers were used for compatibility testing:
- Firefox
- Google Chrome
- Microsoft Edge


### Further Testing
The following devices were used for testing the website:
- Desktop: Asus ZenBook (viewport: 1920px * 1080px) 
- Smartphone: Samsung S9+ (viewport: 360px * 740px)
- Smartphone: iPhone 11 (viewport: 414px * 896px)

During the building of the website, [Google Chrome DevTools](https://developer.chrome.com/) was used to simulate different viewport sizes.
The website is designed for a minimum viewport width of 320px (iPhone 5 size).


### Testing Code
The following online validators were used to check whether the website generated any Javascript, html and CSS syntax errors:

#### W3C Markup Validator

W3C Markup Validator, results of English language pages:
* [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Findex.html)
* [practice.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fpractice.html)
* [editor.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Feditor.html)
* [manual.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fmanual.html)
* [contact.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fcontact.html)
* [404.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Feburonia.github.io%2Fi-remember%2F404.html)

No errors found.


#### W3C CSS Validator

W3C CSS Validator, results of the style sheets:
* [header.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fassets%2Fcss%2Fheader.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* [footer.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fassets%2Fcss%2Ffooter.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* [index.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fassets%2Fcss%2Findex.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* [practice.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fassets%2Fcss%2Fpractice.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) (error)
* [editor.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fassets%2Fcss%2Feditor.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) (error)
* [manual.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fassets%2Fcss%2Fmanual.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* [contact.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fassets%2Fcss%2Fcontact.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* [404.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feburonia.github.io%2Fi-remember%2Fassets%2Fcss%2F404.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


Errors found:
- practice.css/editor.css: Styling the 'Browse' button of the 'input file' html tag is not recognized by the validator. Styling of the button still works and for that reason the CSS code was not adjusted or removed from the file.
- practice.css/editor.css: CSS code for preventing to select text in divisions is not recognized by the validator. Code still works and for that reason the CSS code was not adjusted or removed from the file.


#### JSHint JavaScript Analysis Tool

JSHint, results of the JavaScript files:
* contact.js (error)
* editor.js
* header.js
* practice.js

Errors found:
- Generates two not relevant errors, the page includes emailJS Javascript code which communicates with the 'Contact' html page and with emailJS.

JSHint [website](https://www.jshint.com/)


### Testing Grammar and Spelling 
- [Grammarly.com](https://www.grammarly.com/) was used to check grammar and spelling.


### Testing User Stories from User Experience (UX) Section

#### First-time Visitor Goals
1. As a first-time visitor of the website, I want to understand what the website's purpose is, so I can have an idea whether I have ended up in the right place or not.
   * In the upper left corner in the navigator bar, a website logo stating 'iRemember Spaced Repetition' already suggests what the website might be about.
   * The 'Index' page starts with an 'About' section, clearly stating what the purpose of the website is.
   * In the navigator bar, there is a link to the 'How to Tse' page which also gives you information about the purpose of the website.
   * In case the end-user still has questions about the website, he/she can use the contact form on the contact page to send a question or provide feedback to the website owner.


2. As a first-time visitor of the website, I want to navigate easily throughout the website, so I don't get frustrated not knowing where to click.
   * A navigation bar has been added to every page in the upper right corner of the website including all available pages on the website.
   * On smaller devices (iPad and smartphones) the navigation bar is executed as a so-called 'hamburger-style' navigation menu.


3. As a first-time visitor of the website, I want to find out quickly how to use the website, so I might not get frustrated by intuitively trying things out on the website.
   * On the 'Index' page, a link to the 'How to Use' page has been implemented in the 'About' section. Also in the navigation bar/menu the same link has been implemented.


4. As a first-time visitor of the website, I want to practice an example flashcard set without having to create one first, so I can quickly see how the 'Practice' page looks and functions.
   * An example flashcard set has been implemented on the 'Practice' page. By pressing the 'Example Deck' button, the example flashcard set existing out of 20 cards will be loaded into the 'Practice' page. In this card set, you have to guess the capital cities of 20 European countries.


5. As a first-time visitor of the website, I want to create my own flashcard sets, so I can study whatever I want.
   * A special 'Editor' page has been implemented on the website. Here you can create a new flashcard set, import and adjust an existing flashcard set, and download your created/adjusted flashcard sets. You can give a description to your flashcard sets, and give a description to the front-side and back-side of your flashcards.
   * On the 'Practice' page you can import your created flashcard sets by clicking the 'Browse' and 'Load Deck' buttons.


6. As a first-time visitor of the website, I want to have a user-friendly user interface, so I might not get annoyed or frustrated while using the website.
   * The 'Practice' page of the website functions differently on a desktop and smaller devices. On the desktop, you have 'direct input' for the answer using a 'textbox'. This can be done here because direct input from the keyboard works conveniently. On smaller devices, direct input does not function that well. For this reason, the 'textbox' has been replaced by buttons (show answer, correct answer, and wrong answer). While on the desktop version the system checks your answer, on smaller devices the end-user has to tell the system whether your answer was correct or not by pressing the 'Correct' or 'Wrong' button.
   * The 'Editor' page works the same on desktop and smaller devices. It is advised to use the 'Landscape Mode' of the phone when using the 'Editor' page for the sake of convenience.


7. As a first-time visitor of the website, I want to know what other end-users think of the website, so I can decide whether I might use the website or not.
   * Social media links are added to the 'Footer' section of every page. On the indicated social media platforms, the end-user can comment or discuss with other end-users about the website.


8. As a first-time visitor of the website, I want to know if I can contact the creator of the website, so I can ask a question or provide some feedback.
   * A special 'Contact' page has been added to the website which can be accessed in the website's navigation bar/menu. A link to the page is also mentioned in the 'About' section on the 'Index' page.
   * On the 'Contact' page a contact form has been implemented. Here the end-user can add information about himself (first name, last name, e-mail address) and of course the message you want to send to the website owner. The sent e-mail will end up in the e-mail box of the website owner.


9. As a first-time visitor of the website, I want additional information about a flashcard set, so I might not get confused when practicing a specific flashcard set.
   * On the 'Editor' page, a summary of a flashcard set will be shown to the end-user. Next to the flashcards themselves, 3 additional fields are implemented into the summary: 'Deck description', 'Front-side description', and 'Back-side description'. This gives the end-user additional information about the flashcard set. Not only on the 'Editor' page but this information will also be shown on the 'Practice' page when you have loaded a deck on screen. These fields can be for example: 
      * Deck description: Vocabulary English-Spanish
      * Front-side description: English
      * Back-side description: Spanish


10. As a first-time visitor of the website, I want to know how long it takes to get through a flashcard set, so I might not get frustrated because I have no idea how much time it will take.
    * On the 'Practice' page, it clearly states how many cards there are in the loaded flashcard set. It also states how many cards have been shown so far. This looks as following: CARD 8 OF 26 SHOWN.


#### Returning Visitor Goals
1. As a returning visitor of the website, I want to maintain my flashcard sets, so I can add or delete flashcards that are needed or not needed anymore.
   * On the 'Editor' page, you can adjust your flashcards, delete your flashcards, or add new flashcards.


2. As a returning visitor of the website, I want to re-use my created flashcard sets anytime, so I can keep practicing them.
   * You need to download your created flashcard sets (.txt file will be generated) to re-use them for practicing purposes on the 'Practice' page.


3. As a returning visitor of the website, I want to use my created flashcard sets on different devices, so I can decide which device I might use when I want to practice.
   * You need to download your created flashcard set (.txt file will be generated) to re-use them for practicing purposes. In case you want to use the generated .txt file on your smaller devices, you have to import them on your smartphone or iPad and load them into the 'Practice' page of the website.


4. As a returning visitor of the website, I want to see my progress, so I know whether I need to invest more time to increase my score.
   * On the 'Practice' page, a scoreboard has been implemented. It shows the end-user how many cards have been guessed 'Correct' and how many 'Wrong'.
   * When all cards are shown on screen, the final score will be calculated in the 'Answer Field' of the 'Practice' page.


5. As a returning visitor of the website, I want to practice my flashcards as long as I want, so I can decide how much time I am willing to invest in practicing a deck.
   * When the end-user got through the selected flashcard set. Two buttons will show up 'Replay Deck' and 'Other Deck'. Here you can replay your active flashcard set or select another flashcard set (goes to the begin screen).


6. As a returning visitor of the website, I want to receive the latest information about the website, so I know when for example new features are implemented on the website.
   * The latest news about the website and new features will be shared on the website's 'Twitter' and 'Facebook' pages. Links to the website's social media pages can be found in the footer of every page.


<!-- Known Bugs -->
<a id="bugs"></a>
## Known Bugs
- The W3C Markup Validator generates an error when aria-labels are added to divisions functioning like editable fields (see Editor page). For that reason, no aria-labels have been added to divisions that function as editable fields.
- See JSHint JavaScript Analysis Tool section for some not relevant errors in the JavaScript code.
- Not a real bug, but it is still possible to cheat using the 'Practice' page. When pressing the answer button on the practice page for small devices (width < 900 px) you know the answer, and then you can fill it in the 'Answer textbox' on the desktop version page (width > 900 px) and getting a 'Correct' score for it.
- The website does not 100% recognize whether the content of a .txt deck file is related to a flashcard set or not. Although code has been added trying to check as much as possible, making it almost impossible to select a .txt file which does not contain a deck file.
- Not sure whether the website functions on an Apple computer, it has not been tested.
- Optimize the code in the future.


<!-- Deployment -->
<a id="deployment"></a>
## Deployment


### Publishing
'GitHub Pages' was used for publishing the website. The procedure was as follows:
1. Login to the [GitHub](https://www.github.com/) website.
2. On the left side of your screen, you can find a summary of all repositories. Select [Eburonia/i-remember](https://github.com/Eburonia/i-remember)
3. You can find a ribbon on the top of your screen. In the ribbon, click on 'Settings'.
4. In the selection menu on the left side of your screen, click on 'Pages'.
5. Beneath 'Source' you will find a small pull-down menu. Click on it and select 'main', then press the 'Save' button.
6. You will get automatically redirected to the 'GitHub Pages' page. There you will see a blue text box telling the site will be published.
7. Refresh the page after a minute and when this text box turns green, the website has been published.
8. Click the link in the green text box to go to your published website.

<img src="assets/images-readme/publishing.png" alt="github pages publishing">


### Forking
If you want to make a copy of the repository you can Fork it without changing the original repository by following the next procedure:
1. Login to the [GitHub](https://www.github.com/) website.
2. On the left side of your screen, you can find a summary of all repositories. Select [Eburonia/i-remember](https://github.com/Eburonia/i-remember)
3. On the right side of your screen, next to 'Unwatch' pull-down menu, and the 'Star' button, you can find the 'Fork' button.
4. By clicking this button, it will create a copy of the website in your repository.

<img src="assets/images-readme/forking.png" alt="forking webpage">


### Cloning
You can clone the repository by following the next procedure:
1. Login to the [GitHub](https://www.github.com/) website.
2. On the left side of your screen, you can find a summary of all repositories. Select [Eburonia/i-remember](https://github.com/Eburonia/i-remember)
3. Click on the 'Code' button next to the Green 'GitPod' button.
4. Click on 'HTTPS' and copy the hyperlink below it.
5. Go to the repository where you want to make a clone of the website. Or create a new repository.
6. When in this repository, select the folder or create a folder where you want to clone the directory.
7. Go to the terminal and type: 'Git Clone (copied link)' and press enter. The directory has been cloned now.

<img src="assets/images-readme/cloning.png" alt="cloning webpage">


### Downloading
You can download the repository by following the next procedure:
1. Login to the [GitHub](https://www.github.com/) website.
2. On the left side of your screen, you can find a summary of all repositories. Select [Eburonia/i-remember](https://github.com/Eburonia/i-remember)
3. Click on the 'Code' button next to the Green 'GitPod' button and then click on 'Download ZIP'.
4. A .zip file of the repository content will be downloaded. 

<img src="assets/images-readme/downloading.png" alt="downloading webpage">


<!-- Credits -->
<a id="credits"></a>
## Credits

### Code
- Most of all HTML, CSS, jQuery, and JavaScript code was written by the website creator: Maurice Vossen.
- The 'generate a file and download it' on the 'Editor' page has been copied from [here](https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server). The code has been adjusted by the website creator.
- The submission form JavaScript code on the 'Contact' page is coming from the Code Institude's webinar about EmailJS.
- The JavaScript code for importing .txt file content on the 'Practice' and 'Editor' page has been copied from [here](https://usefulangle.com/post/193/javascript-read-local-file). The code has been adjusted slightly by the website creator.
- CSS code for disabling selecting text in divisions (html) is coming from [here](https://www.arungudelli.com/tutorial/css/disable-text-selection-in-html-using-user-select-css-property/).
- Many jQuery code examples were found on the internet which gave the website creator information on how to implement certain code on this website, especially the [stackoverflow](https://www.stackoverflow.com/) website and the [jQuery website](https://api.jquery.com/) itself gave a lot of information.
- The code for the event detecting which key has been pressed is coming from [here](https://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery).


### Content

#### README file
For consistency reasons, the README file of the website creator's previous project [Japanese Restaurant Shibuya](https://github.com/Eburonia/japanese-restaurant-shibuya) was used as a basis for the README file of this project.


#### Index Page
All content on the 'Index' page was written by the website creator.


#### How to Use Page
All content on the 'How to Use' page was written by the website creator.


### Media

#### Images
- The website logo was created by the website creator.
- All images on the 'How to Use' page were created by the website creator.
- All images in this README file were created by the website creator.

<img src="assets/images/logo.png" alt="website logo"><br>
<sub>Logo of the website</sub>


### Acknowledgements
- Thanks to my personal mentor Maranatha Ilesanmi for answering my questions and giving feedback to this project.
- The many free coding forums on the internet, especially [Stackoverflow.com](https://www.stackoverflow.com/) for providing answers to my coding questions. Most of my questions were already asked by other users of the stackoverflow website, making it easy to find quick answers.



