# Labs

Inside of the `labs` folder (structure detailed below) you will notice several directories. The labs related to our training include:

- 01-find-something
- 02-jquery-methods
- 04-manipulation

Each lab folder includes a reference file to compare your answers against once you've completed the exercise.

The following is a ascii visualization of the exercise file structure, to better help you understand where exercises are located.

```text
|--exercise/
|  |--libs/                  # Supporting libraries such as jQuery
|  |--labs/                  # Folder of all the labs
|     |--01-find-something/  # Lab name
|        |--lab.js           # File where you put your answers to the lab
|        |--lab.reference.js # Reference file to compare against
|        |--lab.tests.html   # Unit Test Runner to run against your answers
|        |--lab.tests.js     # Unit Tests that check youre answers
|     |--...                 # Additional labs
|     |--common/             # JavaScript files necessary to run the labs
|  |--index.html             # Twitter Application markup that should be used to help solve the labs
|  |--css/                   # Styles necessary for the Twitter application to look and function
```