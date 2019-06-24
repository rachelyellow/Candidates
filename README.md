# Candidates

## Setup Instructions

1. Navigate to your API folder and run `npm start` in your terminal. 
***Note: the API is not included in this repository! You can download the original API [here](https://github.com/KnockriInc/react-assessment).

2. In another terminal, clone this repository using `git clone https://github.com/rachelyellow/Candidates.git`.

3. Go to the "Candidates" project directory and run `npm i` to install all dependencies.

4. After you've installed all dependencies, run `npm start` in the terminal 

5. Open [http://localhost:3000](http://localhost:3000) in your browser to start the app.

## Dependencies
- [Axios ^0.19.0](https://github.com/axios/axios)
- [React ^16.8.6](https://reactjs.org/)
- [React-bootstrap 1.0.0-beta.9](https://react-bootstrap.github.io/)
- [React-DOM ^16.8.6](https://reactjs.org/docs/react-dom.html)
- [React-scripts 3.0.1](https://www.npmjs.com/package/react-scripts)


### Additional Information - Assessment Questions

###### How did you decide which technologies to use as part of your solution?

- React and plain JavaScript are the main requirements for this project.
- As I created my wire frames I decided that this scenario would work best as a single-page application.
- I did not use redux because I did not see the need for it in this app at its current state.
- I used axios to simplify making requests to the API (don't have to write out promises, etc.).
- I did not see the need for other middleware frameworks/libraries, as in my opinion React is powerful enough to get the job done. 
- I chose to use Bootstrap to help with the styling of the components as I saw fit for the application.
- In the future, if I was to further build on this project with a larger data set I would consider using Redux for state management.

###### Are there any improvements you could make to your submission?
- I could add timestamps to the comments
- Could improve on the style with more details
- Improvements to accessibility
- Add feature to select multiple candidates for comparison


###### What would you do differently if you were allocated more time?
- If there were many more candidates in the database, I would improve the user experience by limiting the "Candidates" sidebar to 10 candidates and a time, and add controls to search and navigate through the people.
- If there are mulitple hiring managers using this software I could add in a voting or bookmarking/favourites system to help make the selection process easier.
