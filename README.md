# travel_assignment

### Notes
This App will not work on a browser unless you disable CORS checks. But you can have a look to the components in the storybook page.

[Visual TDD](https://storybook.js.org/tutorials/visual-testing-handbook/react/en/vtdd/) has been applied to the project, and Chromatic has been configured for [caching regressions automatically](https://storybook.js.org/tutorials/visual-testing-handbook/react/en/automate/). 

### Setting up this project locally

Requires to have installed latest nodejs version [https://nodejs.org/en/download](https://nodejs.org/en/download)

Initialize repo:

```sh
git clone https://github.com/fernandogmar/travel_assignment.git
cd travel_assignment
npm install
npm run storybook
```

Automatic visual testing:
```sh
npm run chromatic
```

### Further improvements

- Improve design 
- Add extensions as searching/filtering  
