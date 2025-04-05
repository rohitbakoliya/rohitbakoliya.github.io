---
title: Shareby
excerpt:
    Shareby is a web-based platform where anyone can write code/rich text in the inbuilt Code Editor/Rich Text Editor
    and share it with their colleagues and teammates.

iframe: projects_shareby-demo.png
demo: https://shareby.herokuapp.com/
src: https://github.com/rohitbakoliya/shareby
pinned: true

tags:
    - ReactJs
    - NodeDotJs
    - Mongodb

date: 2021-05-02

info:
    tech:
        - Node.js
        - Express.js
        - React.js
        - MongoDB
        - Heroku
        - ReactContext API
        - Puppeteer API
        - Ant Design
        - Styled Components
---

### Features

-   Awesome Reponsive UI

-   Vs Code like Editor

    -   Dark Mode
    -   Options to use custom editor configuration
    -   Generate images of codes right from the editor
    -   Markdown preview
    -   Allow to export codes

-   Text editor

    -   With WYSIWYG Editor options
    -   Youtube, Codepen can be embeded
    -   Export as HTML or Markdown

-   Generates a unique link to share code/text

-   Protect shares by adding password

-   Options to decide when to expire links

-   Recent shares by others

<br>

### Technical aspects

-   Used _cryptographically-secure_ PRGN(CSPRGN) to generate unique urls. see
    [benchmark tests](./server/test/uid.benchmark.txt)

    `3 * 10^5` URIs per second with avg collision rate of ~ `0.0001%`

-   Used in memory caching at application level for different HTTP requests

-   Introduced HTTP caching for static resources and shared codes

-   Used Puppeteer API to generate images using carbon [ref: [carbon.now.sh](https://carbon.now.sh)]

<br>

### Tools Used

-   **React**

    React is a JavaScript library that aims to simplify the development of visual interfaces.

-   **Ant Design**

    A design system for the better user experience of enterprise applications

-   **Monaco Editor**

    The Monaco Editor is the code editor that powers VS Code

-   **Editor.js**

    Editor.js is a javascript package that provides the solution for building rich text editors

-   **Express.js**

    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web
    and mobile.

-   **Puppeteer**

    Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium. Used for generating code
    images by taking carbon screenshots([carbon.now.sh](https://carbon.now.sh)) from headless browser

> 💫 You can find a helper repository for generating code images over
> [here](https://github.com/rohitbakoliya/carbon-ss-heroku)
