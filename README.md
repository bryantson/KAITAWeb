# KAITA Website

This is the source 

# Cloning Process

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

First, create a branch under "development" branch. The branch should be associated with Trello task name. Once ready, use the following command to clone the repo:

```sh
$ git clone https://github.com/bryantson/KAITAWeb.git # or clone your own fork
```

cd into the directory


```sh
$ git branch -a # show all branches including yours
$ git checkout your_branch # switch to your own branch
```

Make modification to your files. Then, when you are ready to check in.

```sh
$ git status # show the changed files
$ git add file1 file 2  # check in the files you changed and want to commit
$ git commit -m "ADD some message" # commit your change
$ git push # Push the code to repository

Then, when you are ready to merge, make a pull request to development branch

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/bryantson/KAITAWeb.git # or clone your own fork
$ cd into the directory
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Documentation
