# Emailer

The purpose of this application is to be a survey software in which people can pay credits to send out simple surveys (yes/no answers) to recipients and gather the results.

Users can add credits to their account with credit card transactions through Stripe API. Upon confirmation of the survey, credits are consumed and the emails go out. Responses are tracked with SendGrid API and stored in the database associated with the user ID of the creator to access later.

# Run

The package.json file contains all the custom run scripts made for the application. \
npm run dev - Runs the application in developer mode.

NGROK is used for creating the local tunnel for SendGrid to send to:
ngrok http 5000

The second forwarding address must be pasted into the Event Webhook settings under SendGrid for Emailer. This address changes when a new NGROK instance is opened.

## Deploying to Heroku

npm run build - Builds the application and gets it ready to deploy to Heroku. The github repo is already linked to it in the Heroku backend.

# Technologies used

- NodeJS
- React
- Redux
- Express
- MongoDB
- MaterializeCSS Designs
- Stripe
- SendGrid
- Passport

## Front-End Preview
# Dashboard After User Authentification
Clicking the logo on the left will direct the user back to the dashboard at any time. Add credits will bring up the stripe payment screen. Logout will sign out the individual and be replaced with a sign in option. Users can see their own created survey's and responses (Y/N) as recipients respond to them.
![image](https://user-images.githubusercontent.com/29129116/160463253-a24d6d21-7914-44ad-a151-167510ab5820.png)

# Creating a Survey
Input fields give user feedback after being interacted with. Emails that are incorrect are told to the user. Email addresses should be seperated with commas.
![image](https://user-images.githubusercontent.com/29129116/160464136-914c3909-0973-4a29-8b5c-fbac268f94b5.png)

# Review Screen
Users can review their survey before sending to the recipients. A minimum of 1 credit is required to send out the email.
![image](https://user-images.githubusercontent.com/29129116/160464386-b99f0111-0b4d-45c8-aa91-13556eda4d5f.png)
