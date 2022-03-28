# Emailer

The purpose of this application is to be a survey software in which people can pay credits to send out simple surveys (yes/no answers) to recipients and gather the results.

Users can add credits to their account with credit card transactions through Stripe API. Upon confirmation of the survey, credits are consumed and the emails go out. Responses are tracked with SendGrid API and stored in the database associated with the user ID of the creator to access later.

# Run

The package.json file contains all the custom run scripts made for the application. \
npm run dev - Runs the application in developer mode.

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
