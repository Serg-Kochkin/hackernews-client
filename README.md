# HackerNews Client

A simple React client that fetches and displays the top stories from HackerNews. The application is built using React and Bootstrap for styling.

![Project Screenshot](./src/assets/images/screenshot.png) _(Screenshot of project)_

## Features

- Displays the top 9 stories from [HackerNews API](https://github.com/HackerNews/API).
- Allows users to comment on the chosen ID of articles.
- Responsive design using react-bootstrap.

## Prerequisites

- [Node.js](https://nodejs.org/) v18.18.1 and [npm](https://www.npmjs.com/) installed.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Serg-Kochkin/hackernews-client.git
cd hackernews-client
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

This will open the application in your browser. By default, it can be accessed at `http://localhost:3000`.

## Deployment

To create a production build of the application, run:

```bash
npm run build
```

This will generate a `build` directory with the optimized production build.

---

## Testing

This project uses [Jest](https://jestjs.io/) along with [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for unit testing.

### Running Tests

To run the tests, you can use the following command:

```bash
npm test
```

This command will initiate Jest and run all test files in the project. The tests are located alongside the components they are testing and have a `.test.js` files.

---

## License

MIT

---

You can expand upon this template based on any other specifics of your project, such as testing instructions, information about the API, contributors, and so on.
