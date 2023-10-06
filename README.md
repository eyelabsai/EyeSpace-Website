# First Time
## Cloning the Repository
- `git clone git@github.com:EH67/Eyespace.git`
- make sure there's an ssh key in your computer. If not:
    - `ssh-keygen`
        - keep pressing enter for the default values (unless you already have a key. If so, exit out of ssh-keygen with Ctrl+C and skip to the next step)
    - `cat ~/.ssh/id_rsa.pub`
        - copy the output and add the key to your github

## Setting Up
- Make sure Node.js is install on your computer
- Travel to the project directory in the terminal. Run `npm install` to install all the necessary packages

# Instructions for Working on a New Component
## Creating a Branch
- type `git pull` to get any updates to the repository
- type `git checkout -b <branch name> main` to create a new branch from main and travel to it
- type `git branch` and make sure you're in the branch you just created
- to travel to another branch, type `git checkout <branch name>`
    - the `-b` argument creates a new branch. If you're not trying to create the branch, do not include `-b`
- DO NOT EDIT DIRECTLY ON THE MAIN BRANCH!

## Running the Website
- In the terminal, type `npm start`
- Once the app is fired up, go to any browser (Google Chrome, Firefox, etc) and type `localhost:3000` to access the website

## Setting Up the Component
- If the component is one that is used throughout many pages (ex: nav bar, footer), create a new folder under `src/components` with your component name
- Otherwise, travel to the page your component is supposed to be on (Homepage, About Us, etc) under `src/views` and create a new folder there with your component name
- inside that folder, create a `.js` and `.css` file. This is where you'll write your HTML and CSS
- for guidance on how to set up the `.js` file, look under `Examples/TestComponent/TestComponent.js` and `Examples/TestComponent/TestComponent_commented.js`
    - the commented version provides a bit more information on how the code works, whereas the other version is simply a template

## To Render the Component
- Open the .js file for the page you're working on. For instance, if you're building a component for the Homepage, open up `src/views/Homepage/Homepage.js`.
    - import your component at the top (remember to use the right path!)
    - add your component into its `render()` function by the syntax `<ComponentName/>`. 
    - You can also pass in any variables/props within the tag
        - ex: `<ComponentName name="HELLO" color="red" prop1="1"/>`
- in your browser, go to `localhost:3000` (or whatever the path is, depending on which page your component is on) to see if your component pops up. I recommend hard coding a random message within the HTML and use that as a test.  

# Directory Structure
- `src`: 
    - `assets/`: Contains all the img, svg files
    - `components/`: Contains components that are reused throughout many pages (views)
    - `store/`: Contains the global data store (Redux??)
    - `views/`: Contains all the pages for the website
    - `index.js`: main entry point for the app
    - `App.js`: root component (where the rest of the components go)
- `old/`: Irrelavent to the project, contains files for me to refer back to for syntax
- `config-overrides.js`: contains the path alias (this doesn't work properly for some reason)