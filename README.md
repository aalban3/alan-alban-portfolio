# My Portfolio Website
Welcome to my page! This website contains my work history, as well as projects I have worked. In the skils section I have listed some of the languages I use as well as my AWS experience. 

## Tech Stack
Since this is one of my very first Javascript projects, I didn't go with a framework. Instesd I decidedd to focus on the basics here, and use ReactJS for my personal projects. 
* Node
* Express
* MongoDB
## Using Amazon Web Services (AWS)
I deployed my app on AWS since it's what I have used in the pasdt and feel the most comfortable with. I wrote a Medium article ([here](https://alan-alban.medium.com/deploying-your-express-js-apps-to-aws-in-7-steps-883d51365406)) to show how I deployed my app. I used the following AWS services:
* **EC2** - One instance for MongoDb and one for my applicaiton code
* **Elastic Beanstalk (EB)** - This took care of generasting the resources I needed for the app, it took care of this:
    * Creating the Node App I needed
    * Setting up the load balanxcers in my region
    * Easy creation of environment variablesd to protect my MongoDB credentials
* **CodePipeline** - Setup my CI/Cd for production. It takes the code form my github repository and updates it in AWS every time I make a commit. EB is takes the code and updates the server with it. I go staight to PROD since I'm currently using my local environment for the BUILD stage. 


