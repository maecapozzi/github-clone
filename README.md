To run this app: 

Clone this repo

`cd` into the directory 

run `npm install` to install all dependencies

run `npm start` to start the app

1. Create a Search Component for the Github Username
2. On Search, make an api call to Github API to fetch the information about the user
  * API URL: https://api.github.com/users/{username}
3. Create a component User Badge which presents the following about the user
  * User Profile Image, Name, Number of Followers, Number of people Following

4. Make an api call to get all the repositories for the user 
  * API URL: https://api.github.com/users/{username}/repos
5. Create a Repo List component which will present cards having Repository details. 
* Following details should be part of each repository card
  * Name, Description, Git URL, Number of Stars, Forks Count, Number of Open Issues, Repository Size
6. Style the page to the best of the ability to make the UI look clean and presentable
7. Click Update from the top Menu and save the link
