# task-list-app
# This is a mobile task app where you can add tasks and delete them when done. 

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#motivation">Motivation</a></li>
        <li><a href="#reflection">Reflection</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Description
Mobile task list app based off the Scrimba shopping list mobile app. You can add a task to your task list and delete a task when finished by pressing on the task. You can also mark tasks as important.

The app is connected to the real-time database Firebase, so it saves tasks even when you leave the app, making it easy for you to come back to your task list after leaving the app.

**Note: I am not associated with Scrimba, it is one of the resources that I am using currently to learn Javascript**

### Motivation
For me, task lists and to-do lists are essential in making sure I get things done. I thought this application would be useful for adding tasks as you think of them and then deleting them/checking them off when completed. 

Since this app is mobile, you can take it on the go and add tasks whenever you think of them (I tend to think of tasks at random times, so having the ability to add them immediately to your task list is really helpful to me). 

I used a pastel color theme and a cartoon cat for the image because things with a cute aesthetic motivate me to use them more :D

![app-image](https://github.com/yh63935/task-list-app/assets/120755144/692aa72a-2ae6-4802-8147-e9fb8c168d18)
![app-image-with-prioritized-task](https://github.com/yh63935/task-list-app/assets/120755144/7d341e46-8d38-485c-ad86-ec64d3124fbf)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Reflection
With this project, I learned how to:
- use Firebase to create a realtime database, connect, and reference it in your code
- import and export Javascript functions
- use favicons so the site shows an icon in the browser tab
- use event listeners to listen for clicks
- use .createElement() to create HTML elements
- deploy the project on netlify and add the mobile app to my phone homepage

Limitations/future improvements: 
- add a button to each task so you can prioritize tasks that are urgent

### Built With

* HTML
* CSS
* Javascript
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### 2 ways
#### Method 1: Use current database (my database)
**Note: Anyone can edit the firebase database at the moment. If you see changes you did not make, that means someone else is using the app.
Use method 2 to avoid this**
Go to the [netlify site](https://genuine-snickerdoodle-caefed.netlify.app/) where the app is deployed. Once opened you can go ahead and use it on the browser!

If you want to add it to your mobile homescreen:
1) Open your default browser app (for Android this is Google Chrome)
2) Go to the [netlify site](https://genuine-snickerdoodle-caefed.netlify.app/) while in your browser
3) Open the menu (3 dots on top right for Android)

4) Press "add to home screen"

![add-to-home-screen](https://github.com/yh63935/task-list-app/assets/120755144/0dfcdf5f-94ee-4bb7-b38d-b400088ca573)

5) Give the app a description

![give-app-description](https://github.com/yh63935/task-list-app/assets/120755144/2f7fe064-013e-482d-b994-8333691cdfd7)


6) Find the app on your mobile phone and begin adding tasks! To remove a task/mark as completed, simply press on the task.


![app-no-current-tasks](https://github.com/yh63935/task-list-app/assets/120755144/21e79a87-fe00-4f87-b809-b5df09b008d6)

![app-with-tasks](https://github.com/yh63935/task-list-app/assets/120755144/692aa72a-2ae6-4802-8147-e9fb8c168d18)



#### Method 2: Use the app with your own firebase database:
1) Download the repository
2) Create your [Firebase database](https://console.firebase.google.com/)
3) Replace 'database URL' link with your own Firebase link in 'index.js'

![replace-database-code-screenshot](https://github.com/yh63935/task-list-app/assets/120755144/256422c9-5751-4738-a1cc-2ad786c85b67)
4) Deploy on [netlify](https://app.netlify.com/)
5) Follow Method 1 steps to add to your mobile device

<!-- USAGE EXAMPLES -->
## Usage
Like mentioned above, the app can be used as a to-do list, keeping track of tasks you need to do. 
### Quick Guide: How to Use

1) To add tasks, type them into the input box.
2) Delete tasks by pressing on the task.
3) Prioritize tasks by pressing the star button on the task. This will turn the task pink and the star button white.

![app-prioritize-button](https://github.com/yh63935/task-list-app/assets/120755144/a1073368-37ae-4429-9524-abd2e807aac0)
 
![app-image-with-prioritized-task](https://github.com/yh63935/task-list-app/assets/120755144/7d341e46-8d38-485c-ad86-ec64d3124fbf)
5) Unprioritize the task by pressing the star button again. The task will turn cream again and the star button will return to pink.

![app-image](https://github.com/yh63935/task-list-app/assets/120755144/692aa72a-2ae6-4802-8147-e9fb8c168d18)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Amelia Ho - [Amelia Ho Linkedin](https://www.linkedin.com/in/ameliahoyp/)

Project Link: [https://github.com/yh63935/task-list-app](https://github.com/yh63935/task-list-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Cat cleaning image](https://en.ac-illust.com/clip-art/22306462/cleaning--cute-cat-illustration)
* [https://github.com/othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3](https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
* [netlify](https://app.netlify.com/)
* [Firebase database](https://console.firebase.google.com/)
* [https://firebase.google.com/docs](https://firebase.google.com/docs)
* [https://scrimba.com/playlist/pZZxqsB](https://scrimba.com/playlist/pZZxqsB)
* [https://favicon.io/favicon-converter/](https://favicon.io/favicon-converter/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>




