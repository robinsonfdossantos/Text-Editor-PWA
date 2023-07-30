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
  
  Run the terminal built into VS Code. Make sure you have installed all required packages using 'npm install or npm i'.

  When you clone the application to our local machine the folder `../client/dist` may create some conflicts, in case it happens you should delete it when create it automatically again running the command 'npm build or npm start', depeding on how your package.json has been configured. Another important note is remembe to run 'npm i or npm install' in the `client` and `server` directories to create the `node_modules` for them that will be required for their functionality and also during the deployment.

  When you have sure that you have all the required packages, you can run `npm start` and face the message `Now listening on port: 3000`. It means that you application is ready to run locally.

  The gif below shows the functionality of the application, but note I have used my deployed application as sample, so you first have to test it on your `http://localhost:3000/`, then you can deploy it with your desired deployment tool.

  <img src="./Assets/application.gif" alt="Quick presentation of the app" width="80%" height="80%" />


  In addition, you can configure your browse settings in the Application in the DevTools to ensure the Manifest and the Database have been correctly configured besides check the fucntionality of the application to run it offline. You can find images in the `Assets` directory to help you with these configureations.

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