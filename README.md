# Module Federation Examples
![Webpack Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNi2lZfkFecYTfFKEXkoq6rJfjlv5pFomLKNcD349-89suEeHTy8ZVTZzi3BuPcmWcY8&usqp=CAU)

Webpack 5 Module Federation is a breakthrough technology that allows us to share code resources across applications in multiple single page applications. It is a technology particularly well suited for the enterprise as it allows teams to reduce duplicate cross team compatibility issues and makes keeping shared packages and libraries much easier.

In this tutorial (which accompanies a Tech Talk I give), we will walk through some common scenarios, pitfalls, and architecture decisions we should keep in mind when developing applications that utilize the Webpack 5 Module Federation technology.

## Angular Getting Started
In order to make this a fun time for all, I chose to make this topic a bit more fun by including some
The Angular portion of this tutorial consists of 3 applications:

- Shell (contains header and footer elements)
- Final Fantasy VII Reference Database
- Final Fantasy VIII Reference Database
- Final Fantasy IX Reference Database

Each of these apps runs independently on a separate port. They are tied together and share certain packages via Webpack Module federation.
## In order to follow along with everything you will need

- [Angular CLI]([https://](https://cli.angular.io/))
- Yarn package manager (NPM not supported at this time)
- Webpack 5 (will automatically be handled by Angular)

## Steps
In order to make following along easier I have chosen to break this portion into important steps in the process of our Module Federation journey. 

These steps can be switched by just changing your local development branch.

NOTE: I'll call out in my talk when we are switching, but for your reference, here are the steps.

| Step Name         | Branch      | Description                                                                      |
| ----------------- | ----------- | -------------------------------------------------------------------------------- |
| Angular Step 1    | `ng-step-1` | Initializing and setting up webpack module Federation in shell application.      |
| Angular Step 2    | `ng-step-2` | Adding webpack module federation to the FF VII, FF VIII, and FF IX applications. |


### Credits and Further Reading
- [The Microfrontend Revolution](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/)
- [Webpack 5 Module Federation Official Docs](https://webpack.js.org/concepts/module-federation/)
- [Module Federation Learning Site](https://module-federation.github.io/)
- [Final Fantasy Wiki (assets and text)](https://finalfantasy.fandom.com/wiki/Final_Fantasy_Wiki)
