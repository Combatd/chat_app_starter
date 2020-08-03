# chat_app_starter
A simple chat application implemented in HTML, CSS, Material Design, JavaScript, and Firebase.

## Learning Goals
* Client-side and DOM Manipulation with HTML5, CSS3, JavaScript, and Material Design (CSS Framework)
* Server and Database with Firebase
* Debugging errors
* Deal with Git Version Control with branches, merge conflicts, and pull requests.

### Technical Steps
This project needed certain features in the DOM and Firebase to work properly.

1. Project Intro -- HTML (form and header elements in index.html)
2. DOM Elements (main.js) 
3. Firebase initialization, config, and local serving (main.js) 
4. Firebase authentication (main.js)
5. Firebase hosting and deploying
6. Firebase Firestore (main.js)

## Credits
This tutorial was adapted from Google Codelab. 

1. CSS Background Patterns - freebieSupply
* https://codepen.io/CWEI/pen/NAZmRx
* Accessed August 2 2020
* HTML5 and CSS3 examples

2. linear-gradient() - Mozilla Developer Network
* https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
* Accessed August 2 2020
* CSS3 Documentation

3. RGB Color Fade Algorithm - Codepixl
* https://codepen.io/Codepixl/pen/ogWWaK/
* Accessed August 2 2020
* CSS3 and JavaScript Example

4. Window setInterval() Method - W3Schools
* https://www.w3schools.com/jsref/met_win_setinterval.asp
* Accessed August 2 2020
* JavaScript Documentation

### Possible Extensions

1. Change the style of the app with Material Design or CSS.
* Adding a custom NavBar for computer and mobile screens!

2. Make a knock-off version of Snapchat stickers. Add a button element to the message form element in index.html and write the event listener and firebase functions such that every time you click the button, you send a specific image as a sticker in the chat.

3. Make ephemeral messages, like in Snapchat. If a message is older than 24 hours old, delete the message from Firebase Firestore. 
* Currently "GET" messages last 24 hours

4. Change the authentication method. 

You can use one of the other authentication methods that Firebase comes with such as twitter, GitHub, or anonymous (if you're tryna make the next Omegle). This should be a quick change in your Firebase console as well as the `signIn` function within `main.js`

Or you can take on the challenge of integrating the Snap Login Kit with Firebase. You might want to check out the links on this [Stack Overflow](https://stackoverflow.com/questions/61341010/is-it-possible-to-user-snapchat-kit-login-with-firebase). This will not be a quick change; it may have to use Cloud Functions or a server for this part.
* Plans to implement Snap Login Kit as Custom Authentication in Firebase with JavaScript. 

5. Allow the user to send Bitmoji as images.
* Needs SnapKit integration