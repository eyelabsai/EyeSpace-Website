# Cloning the Repository
- `git clone git@github.com:EH67/Eyespace.git`
- make sure there's an ssh key in your computer. If not:
    - `ssh-keygen`
        - keep pressing enter for the default values (unless you already have a key. If so, exit out of ssh-keygen with Ctrl+C and skip to the next step)
    - `cat ~/.ssh/id_rsa.pub`
        - copy the output and add the key to your github

# Setting Up
- Make sure Node.js is install on your computer
- Travel to the project directory in the terminal. Run `npm install` to install all the necessary packages

# BEFORE YOU EDIT ANYTHING, MAKE A BRANCH
- type `git checkout -b <branch name>` to create a new branch and travel to it
- type `git branch` and make sure you're in the branch you just created
- to travel to another branch, type `git checkout <branch name>`
    - the `-b` argument creates a new branch. If you're not trying to create the branch, do not include `-b`
- DO NOT EDIT DIRECTLY ON THE MAIN BRANCH!

# Running the Website
- In the terminal, type `npm start`
- Once the app is fired up, go to any browser (Google Chrome, Firefox, etc) and type "localhost:3000" to access the website

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