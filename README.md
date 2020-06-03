# people-list
A quick demo of fetching and displaying users from the Random User Generator API

View a [live demo.](https://jrunge.github.io/people-list/)

To run it locally:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Summary
I used Next.js as core build platform for this project. It support server side rendering (SSR) when deployed as a node.js server. The current demo uses statically rendered content on Github pages.

To fetch the content, I used the Apollo GraphQL client side library. Since the API provided (https://randomuser.me/api/?results=100) is strictly a JSON REST API, I used apollo-rest-link to provided a GraphQL-like interface.

After fetching the data, it is rendered as a table using Reactabular and styled using Semantic UI css.

## Technologies used
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Apollo Rest Link](https://www.apollographql.com/docs/link/links/rest.html)
- [Reactabular](https://reactabular.js.org/)
- [Semantic UI](https://semantic-ui.com/)


## Possible next steps
- allow user to specify number of results either on the page or in the url
- add sorting, pagination, and searching to the table
- mark "bad data" from API, such as when Last Name field contains the users full name
- cleanup and customize table style, perhaps adding theme support from Semantic UI
