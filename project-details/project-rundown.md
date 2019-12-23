# Personal website
A website which showcases my projects and the thought process that went into creating them.

## Reason for creation
Prior to the inception of this repository, I had been creating a website using React at work. I have decided to design and develop a website using the skills learned, both to showcase those skills and to provide a platform for insight into how I engineer solutions. Additionally, this repository serves as a reference for myself so that I am able to look back in future if I need to create something similar again.

## Tech used
- React
- NodeJs
- Docker
- Docker Swarm
- Ansible
- Webstorm

## Definition of done
This project will be defined as completed when I have a: 
- [ ] Landing page with informative content about who I am.
- [x] Projects page which contains information about the projects or repositories that I have created or work on.
    - [x] Retrieve a file from a repository to use as the project description.
- [x] Contact page to provide a means to communicate with me if desired. 

### Stretch goals
There are a number of stretch goals which I would like to implement within this website.
- [ ] Split view to show the source code of the current page with comments etc.
- [ ] Have two state management options for each page (MobX and Redux) which can be viewed as source.

## Retrospective
- Designing a landing page is difficult until you have the content ready to display there.
- To avoid coupling the website with a database, I've made the repositories page scrape the git repositories to find a project rundown document that is displayed when requested for more information about the project. I hope that this will enable the ability to modify the repositories on a whim and not worry about the database going out of date, so long as I update the file that is required for a description.
- It's hard to find time and drive to create a website like this when you work full time. Steady progress makes it easier to finish than attempting to smash it all out quickly.