---
title: Test-gen CLI
excerpt:
    Minimal interactive CLI, To quickly generate test-cases during the contest without wasting your time writing with
    your own.

iframe: projects_test-gen.png
demo: https://www.npmjs.com/package/@rohitbakoliya/test-gen
src: https://github.com/rohitbakoliya/test-gen

tags:
    - NodeDotJs
    - Typescript
    - Jest

date: 2021-02-03

info:
    idea:
        Sometimes generating test cases in between the contests to finding bugs is a time-consuming task when it comes
        to writing tests for complex pattern strings, trees, or graphs. Here I come with a solution, A interactive CLI
        that can create test cases for you by answering simple questions.
    tech:
        - NodeDotJs
        - Typescript
        - Jest
    links:
        - - NPM
          - https://www.npmjs.com/package/@rohitbakoliya/test-gen
        - - Documentation
          - https://github.com/rohitbakoliya/test-gen/blob/master/docs/docs.md
        - - Blog
          - https://dev.to/rohitbakoliya/test-gen-quickly-generate-test-cases-using-interactive-cli-589d
---

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/c94af0a71b424122a6101604f16b6d56)](https://www.codacy.com/gh/rohitbakoliya/test-gen/dashboard?utm_source=github.com&utm_medium=referral&utm_content=rohitbakoliya/test-gen&utm_campaign=Badge_Grade)
![CI](https://img.shields.io/github/workflow/status/rohitbakoliya/test-gen/CI?logo=Github&label=CI)
![npm](https://img.shields.io/npm/v/@rohitbakoliya/test-gen)
![NPM](https://img.shields.io/npm/l/@rohitbakoliya/test-gen)
![npm](https://img.shields.io/npm/dt/@rohitbakoliya/test-gen)
![node-current (scoped)](https://img.shields.io/node/v/@rohitbakoliya/test-gen)

<details>

<summary>Featured input types for generating the test cases </summary>

-   Numbers
-   Strings
-   Arrays
    -   Of Numbers
    -   Of Strings
    -   Permutation Array
-   Grids
    -   Of Numbers
    -   Of Strings
-   Trees
    -   Weighted Tree
    -   Unweighted Tree
-   Graphs
    -   Undirected Unweighted Graph
    -   Directed Unweighted Graph
    -   Directed Weighted Graph

</details>

### Tech stack

-   **Node.js**

    Node.js is used for writing CLI app.

-   **TypeScript**

    Typescript is used to enables the strict type checking.

-   **Jest.js**

    Jest.js is used for writing unit tests.

-   **Github Actions**

    Github Actions is used to automate the Continuous Integration(CI) workflows.<br> It builds the CLI and runs
    unit test on different Node versions.

### Install

```shell
npm i -g @rohitbakoliya/test-gen
```

or

```shell
npx @rohitbakoliya/test-gen
```

### Usage

```shell
test-gen
```

> For more info please check [github repository](https://github.com/rohitbakoliya/test-gen)
