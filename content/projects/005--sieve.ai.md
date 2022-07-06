---
title: Sieve.AI
excerpt:
    Designed for recruiters, Our AI-powered platform can filter out top resumes of the stack. It even can score and rank
    resumes as per the fitment.

iframe: https://www.youtube.com/embed/zJ5fLzR2_1E
demo: https://github.com/rohitbakoliya/sieve.ai
src: https://github.com/rohitbakoliya/sieve.ai
pinned: true

tags:
    - ReactJs
    - NodeDotJs
    - Flask

date: 2021-07-01

info:
    idea:
        A regular day for a Recruiter consists of going through hundreds of resumes for a few specific roles to be
        hired. Only 10 to 15 percent of these resumes are relevant and suitable to the position they hire for.
        This takes up hours of a Recruiter’s time to filter out the top resumes out of the stack. So, the idea was to
        create an application that would screen and rank the resumes as per fitment with the help of Al
    tech:
        - Typescript
        - React
        - Node
        - Express
        - MongoDB
        - Flask
        - NLTK
        - Scikit-Learn
        - Docker

    links:
        - [Dataset Used, https://www.kaggle.com/gauravduttakiit/resume-dataset]
        - [
              Architecture Design,
              https://user-images.githubusercontent.com/46809038/126433985-b84b832a-a029-479f-922c-c344ee88a21e.png,
          ]
---

> 🚀 Runner Up at Techathon, organized by GEP during summer internship 2021

<br>

### Our Solution

Every day, thousands of Job Listings are created to help the companies meet the ever growing demand of market by
recruiting fresh talent. The job of a Recruiter is a very hard and important. It’s like identifying a needle in a
haystack. But in the age of Artificial Intelligence it can be eased out for them through our product, Sieve.ai.

Sieve.ai reduces the burden on a Recruiter by leaving the tedious and repetitive task of going through thousands of
resumes, of which only are handful are relevant. Just upload all the CVs into the system and receive a list of names of
candidates and their respective CVs in descending order of their relevance to the Job Description. Reduce your
Recruitment Turn Around Time with just a click.

<br>

### Technical Features

-   2 Layer Filter Mechanism:

    -   **Role-Based** – It features an AI classifier that can classify the resumes into 20 broad categories of Job
        roles.
    -   **Similarity with Job Description** – It extracts the keywords from the inputted job description and maps them
        with resume based on **cosine similarity**(document similarity) to get a score percentage, which is used to sort
        and display the best resumes on top

-   Added Google OAuth and Password-based authentication to maintain the privacy

-   Recruiters can export shortlisted candidates details, scores as CSV

<br>

### Stats

-   Achieved an classification accuracy of 95%
-   Tested on 20 classes of broad job categories and 900+ resumes
-   Can process up to 3000 resumes per hour
