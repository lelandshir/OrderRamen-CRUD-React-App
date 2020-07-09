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
- Open the project text editor of choice and start up postgresSQL
- Create a data table in psql: ```CREATE TABLE ramen (id SERIAL, ingredient1 TEXT, ingredient2 TEXT, ingredient3 TEXT, ingredient4 TEXT, ingredient5 TEXT, ingredient6 TEXT, ingredient7 TEXT, ingredient8 TEXT)```


## :sweat: Challenges:
- Adding more complex datasets to SQL. We would have liked to create an array of all the ingredients rather than having them all as separate columns.


## :pray: Future Features:
- Upon click of ingredient, the specific ingredient gets added to bowl.
- More mobile responsiveness.
