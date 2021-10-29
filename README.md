# LAP 2 Project: Habipad

## Installation & Usage

### Installation
- Use `git clone` to clone this repo and the client repo.
- Navigate to your repo folders in a terminal.

#### Client
- Run `npm install`.

### Usage

#### Server
- Run `bash _scripts/startDev.sh` to start the server.
- Use `ctrl+c` (windows/mac) to stop the server.
- Run `bash _scripts/teardown.sh` to stop the server and teardown.
- Run `bash _scripts/startTest.sh` to run the test suites.

#### Client
- Once the server is running, open the **index.html** file with a browser of your choice.
- Create a new user account with the sign-up form.

## Bugs
- Testing: Some server tests return a `res.json is not a function` error.

## Wins & Challenges

### Wins
#### Minimum Viable Product Achieved
- A user can sign-up or login.
- Once logged in, the user can create a new habit or make a log entry to an exisiting habit by checking a box.
- Each habit's streak count is displayed.

### Challenges
- Testing: A variety of errors happened during the testing process, although most were solved.
- Hosting on Heroku: Connection to the database couldn't be established.
