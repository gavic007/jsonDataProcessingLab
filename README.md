# jsonDataProcessingLab

## Setup
- Fork this repository (so that it is easy for us to keep track of your work).
- Add the initial list of user stories as issues. Prioritize and estimate your stories. 
- Use the generator to generate your project (see below).
- Make sure your applications is called "student". 
- Move the seed.js into your config directory. 
- Make sure that your .gitignore contains the .idea, mongo.js, etc. Use past .gitignore for reference. 
- Once you have checked your .gitignore, add your project to the repsoitory and commit. 
- You will be using your test database (just like we did last time). You will be using a read-only access on a different database for your production code. 

## Using the generator to create your project
We are using yeoman generator: http://yeoman.io/generators/
Specifically, the angular-fullstack generator: https://github.com/DaftMonk/generator-angular-fullstack

Run: ``yo`` in your project's main directory...
- Choose generator: ``Angular Fullstack``
- Choose Scripting Language: ``Javascript``
- Choose markup Language: ``HTML``
- Choose Stylesheet Language: ``CSS``
- Choose Router: ``uiRouter``
- Use Bootstrap = ``yes``
- Include UI Bootstrap = ``yes``
- Use mongoDB with Mongoose = ``yes``
- Scaffold authentication boilerplate = ``yes``
- Additional oAuth strategies (none, just hit enter)
- Use Socket.io = ``yes``

## Sample data
You are provided with sample data that can be used to initialize your test database. Place this file into the config directory (next to mongo.js), and it will be used to seed your database.

## User Stories
You should add these as issues and milestones
        <button type="submit" class="btn btn-primary" ng-click=ones on your github repository to help keep track of them.

> As an administrator I would like to display a list of all students, ordered alphabetically by last name, first name. (DONE)

> As an administrator I would like to display a list of all students, ordered by date of birth. (DONE)

> As an administrator, I would like to display a list of all students, ordered by the number of credits that they have successfully completed (i.e. excluding the in-progress credits and grade F courses).(DONE)

> As an administrator I would like to view a list of students based on their major(s). (DONE)

> As an administrator I would like to view detailed information for an individual student. (DONE)

> As an administrator, i would like to view all courses that a student has taken or is taking, with grades, including failed courses. (DONE)

> As an administrator, I would like to display a list of students with their GPA. (DONE)

> As an administrator, I would like to display students' status based on their completed courses (freshman, sophomore, junior, senior) and sort/search by these parameters.(DONE)

> As an administrator, I would like to search student records based on courses that they are taking or have taken. 


