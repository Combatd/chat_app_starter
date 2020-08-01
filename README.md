# chat_app_starter

## Directions
To run this project, you will need to complete the following workshops (found on Notion):

1. Project Intro -- HTML (form and header elements in index.html)
2. DOM Elements (main.js) 
3. Firebase initialization, config, and local serving (main.js) 
4. Firebase authentication (main.js)
5. Firebase hosting and deploying
6. Firebase Firestore (main.js)

## Credits
This tutorial was adapted from Google Codelab. 

### Possible Extensions

1. Change the style of the app with Material Design or CSS. 

2. Make a knock-off version of Snapchat stickers. Add a button element to the message form element in index.html and write the event listener and firebase functions such that every time you click the button, you send a specific image as a sticker in the chat. 

3. Make ephemeral messages, like in Snapchat. If a message is older than 24 hours old, delete the message from Firebase Firestore. 

4. Change the authentication method. 

You can use one of the other authentication methods that Firebase comes with such as twitter, GitHub, or anonymous (if you're tryna make the next Omegle). This should be a quick change in your Firebase console as well as the `signIn` function within `main.js`

Or you can take on the challenge of integrating the Snap Login Kit with Firebase. You might want to check out the links on this [Stack Overflow](https://stackoverflow.com/questions/61341010/is-it-possible-to-user-snapchat-kit-login-with-firebase). This will not be a quick change; it may have to use Cloud Functions or a server for this part.

5. Allow the user to send Bitmoji as images.