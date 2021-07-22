---
title: NoQue-X
excerpt: An effective solution for better digital classrooms!

iframe: https://www.youtube.com/embed/q-Npr7mLHXM
demo: https://noque-x.herokuapp.com/
src: https://github.com/C2OO13/NOQue-X

tags:
    - ReactJs
    - NodeDotJs
    - Mongodb

date: 2021-04-10

info:
    idea:
        Online classes call for a greater amount motivation and self-discipline than a classroom-based course. Students
        can easily shift away from ongoing classes and waste their time. An offline classroom has one or more
        instructors and peers, who can hold a student accountable for their course-work, however in online classes
        teachers don't get a proper feedback and can't keep a check on student's learning and understanding. Online
        classes have just become a boring non-interactive class for teachers Generally students open the class meeting.
    tech:
        - React.js
        - Redux
        - Ant Design
        - Styled Components
        - Express.js
        - Node.js
        - MongoDB
        - Socket.IO
        - Chrome Extension
        - jQuery

    links:
        - [Devfolio Submission, https://devfolio.co/submissions/noquex-871e]
        - [
              PPT Link,
              https://docs.google.com/presentation/d/1H7r74Y8QK3lOkbIKFTp_GUN-KyRN8xbEFrCgHMoxCew/edit?usp=sharing,
          ]
---

> 🚀 Won 3rd prize among **250+ teams**, with this project at Hack36 4.0 hackathon

<br>

### Our Solution

The problem can be solved if a teacher can know whether a student is both physically and mentally present in the
classroom.

Let’s say teacher is going to teach topic A, B, C. He will prepare some short questions for each topic that a student
must be able to answer. After he explains a topic, using our extension he can broadcast the question he prepared to all
the students in a single click. Students will have to give answer by the time teacher has allocated for that question.
Teacher can then move on to next topic and repeat the process when required. Using this, teacher can get feedback of how
many students attempted and how many got it correct. Teacher also gets notified if a student who has joined the
classroom does anything else except attending the class. <br>

> **TLDR** :
>
> -   Allow teachers to broadcast questions to the students during the online lecture meeting in real- time through
>     chrome extension and capture student’s responses <br>
> -   Built lecture analysis dashboard and proctoring tool which can track student's various browsing activities

### Techniqual Aspects

-   By using chrome extension, web sockets we broadcasts the questions from teachers extension panel to the all the
    students (those are in google meet lecture) and receives responses through the same

-   Realtime activities of students such as tab switching, video or audio firing, web searching and downloading files
    etc.

-   Total Active time during lecture also tracked to find attendance of students

-   Only the authenticated users who are students of the class can receive the Questions from respective teacher & are
    able to send responses

### Challanges we ran into

-   Realtime dialog injection in meet on every question brodcasting event by teacher

### Tools we used

-   **React**

    React is a JavaScript library that aims to simplify the development of visual interfaces.

-   **Redux**

    Redux is a JavaScript library for managing application state.

-   **Ant Design**

    A design system for the better user experience of enterprise applications

-   **Styled Components**

    Styled Components is a library for React that allows you to use component-level styles in your application that are
    written with a mixture of JavaScript and CSS using a technique called CSS-in-JS

-   **Express.js**

    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web
    and mobile.

-   **Socket.IO**

    Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication
    between web clients and servers.

### Contributors:

-   [Rohit Bakoliya](https://github.com/rohitbakoliya)
-   [Hardik Upadhyay](https://github.com/Simply-divine)
-   [Smit Patel](https://github.com/C2OO13/)
