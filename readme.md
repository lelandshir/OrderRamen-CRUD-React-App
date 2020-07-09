# Ramen DOM

### :computer: Creators:

- Leland Shirley
- Bobby Tazioli

## :sunrise_over_mountains: About:

[Ramen DOM](https://ramen-shop.herokuapp.com/) is a single page web application that allows the user to create ramen bowls from a list of ingredients. The user can then go and edit or delete the bowls that he/she has created.

## :wrench: :nut_and_bolt: :hammer: The Build:
### Front-end:
- ReactJS
- Javascript
- HTML5
- CSS
### Back-end:
- PHP
- Apache
- postgresSQL

## :floppy_disk: Git Strategy:

1. No pushes to git origin dev or git origin master.
2. When you are finished working on changes to your local feature, do a git push origin <name_feature>
3. Any merge will be done on the site itself by comparing name_feature with dev branch.
4. Group member who is ready to merge changes should send message in Slack to other group member so we can go over the merge together.
6. Whenever any sort of merge is done in github, make sure to do a git pull origin dev.

## :sparkles: Want to make your own improvements?
- Visit our [Github](https://github.com/lelandshir/ramen-app)
- Clone or download the repository
- Open the project in terminal and your text editor of choice

## :dancer: Wins:
- We came up with a workflow that made the most sense to us. As a group, we decided to meet daily at 11am EST to do our merges. These meeting were also when we would decide what tasks to complete for the day.
- We came up with a way to work on the same files separately and then resolve Git issues efficiently. Having this framework for dealing with merge conflicts helped ensure no ones code got overwritten.
- We worked together to problem solve bugs together when needed. Most of the time, we would get on zoom together and share our screen to show the bug. We would then work through solutions together. Console.log was our best tool for finding the source of most bugs.
- We pivoted when issues came up and solved them. Our original goal was to incorporate an api, but we scaled back in order to deliver a polished product without bugs.
- We are proud of this code we come up with to access the park data from inside the user. It initially gave us trouble because we were accessing the park info without going into the user's park array.

```Javascript
router.put('/:id/:index', (req, res) => {
  console.log(req.body);
  Park.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPark) => {
    User.findById(req.session.user._id, (error, foundUser) => {
      foundUser.parks.splice(req.params.index, 1, updatedPark)
      foundUser.save((error, data) => {
        res.json(data)
        })
      })
    })
  })
  ```

## :sweat: Challenges:
- Initial Heroku setup - we misinterpreted the setup instructions. We realized we had not defined our port in the .env files and mongo Atlas configs. We also found out that the names for our mongo database variables did not match up. Once we fixed this issues, things finally worked on Heroku.
- When we sorted the data by priority we realized that we needed to set the values of 'priority' to 3, 2, and 1 instead of High, Medium, and Low so that it wouldn't sort alphabetically. This caused a major bug because in our model we still had an enum for High, Medium, and Low. Anytime we created a new park with a priority the object would come back as null. Once we removed the old enum from the model, it solved the issue.
- Clearing the form data after you create a park or account was another challenge for us. We figured out that we had to attach it to a createForm.name so we could set it to an empty object in the .then of http requests.
- We had an issue with accessing the id of req.session.user. We kept getting an error cannot get property id of undefined. After doing some console logs, we realized our req.session.user was coming back as undefined. This happened because our form had an ng-model of signupUsername and signupPassword instead of username and password like it was in our user model. Using console.log really helped us solve this issue.   

```Javascript
router.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (error, createdUser) => {
    console.log(createdUser);
    req.session.user = createdUser;
    res.json(req.session.user);
  })
});
```

## :pray: Future Features:
- Utilize National Parks API to give the user the option to search and import that data when adding a park.

## :blue_book: Sources:
- Info about the national parks for our admin account  
[Wikipedia](https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States)
