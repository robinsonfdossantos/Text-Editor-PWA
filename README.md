# Text Editor PWA  ![License](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Description
  This application is a text editor that works locally after installed in the local computer but everything you create will reflct to the online application, so it is very useful tool to create notes even when you are oofline, then when you connect to an online network it will automatically update all your new inputs to the online network.
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  
  ## Installation

  Navigate to https://github.com/robinsonfdossantos/Text-Editor-PWA.

  Open a local built-in Terminal (powershell, bash) on your local machine.

  Navigate to a desired folder to place your project in, using 'cd "folder"'.

  Use 'git clone' to copy the repository to your local computer by typing "git clone git@github.com:robinsonfdossantos/Text-Editor-PWA.git".
  
  ## Usage
  
  Run the built-in terminal in VS Code. Make sure you have installed all required packages using 'npm install or npm i'.

  When you clone the application to your local machine the `../client/dist` folder can generate some conflicts, if that happens you should delete it, then it will be automatically created again when you run the command 'npm build or npm start ', depending on how your package.json was configured. Another important note is to remember to run 'npm i or npm install' in the `client` and `server` directories to create the `node_modules` for them that will be needed for their functionality and also during deployment.

  Once you're sure you have all the packages you need, you can run `npm start` and see the message `Now listen on port: 3000`. This means that your application is ready to run locally.

  The gif below shows the functionality of the application, but please note that I used my deployed application as a sample, so you must first test it on your `http://localhost:3000/` and then you can deploy it with the Deployment desired tool.

  <img src="./Assets/application.gif" alt="Quick presentation of the app" width="80%" height="80%" />

  In addition, you can configure in-app navigation settings in DevTools to ensure that the manifest and database are configured correctly, as well as verify the app's functionality to run offline. You can find images in the `Assets` directory to help you with these settings.

  ## Deployment

  This application has been deployed using Heroku.

  You can visit my live deployed application with the link below.

  https://guarded-wildwood-57048-845e68a15e2e.herokuapp.com/
  
  ## License

  This application is covered under the MIT license.
  
  ## Contributing

  All users are very welcome to leave their comments and suggestions for improvement by sending me a direct message or creating pull requests on Github.
  
  ## Questions
  For any questions or inquiries, please reach out to me via [GitHub](https://github.com/robinsonfdossantos) or email me at robinsonfdossantos@gmail.com.