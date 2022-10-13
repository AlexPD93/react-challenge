# React challenge

Practice using React to create dynamic apps in the browser.

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
1. Run `npm install` to install all the dependencies
1. Run `npm run dev` to start the local dev server

## Checking your work

Each challenge has associated unit tests. You can run each challenge's tests with `./tests 1`, `./tests 2` etc.

Make sure you read test failures carefully—the output can be noisy but the error message should provide useful information to help you.

You can import and render the component you're working on inside `challenge/App.jsx` to see it appear on the page.

## Challenge 1: creating components

Create a new file `challenge/Greeting.jsx` that default-exports a component called `Greeting`. The component should take a prop called `name` and use it to render a `<p>` element that greets the user. E.g. `<Greeting name="oli">` should render `<p>Hello oli</p`>.

Import and render this component inside the `App` component in `challenge/App.jsx` to see it appear on the page.
