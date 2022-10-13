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

## Challenge 2: using state

Create a new file `challenge/Shouter.jsx` that default-exports a component called `Shouter`. The component should render an `<input>` element and an `<output>` element. Whatever the user types into the input should appear in the output, but transformed into uppercase. E.g. after the user types "hello world" the output should be `<output>HELLO WORLD</output>`.
