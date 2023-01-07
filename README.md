# Event Platform | GraphQL, Apollo Client & Hygraph

![banner](banner.png)

> Project carried out at `Ignite Lab | React.js`, an event held by Rocketseat where we experiment and test new technologies that are
> market trends. This time we built an `Events Platform`, where people will be able to sign up and see the Lessons that are made available
> on specific days and times of the month, the application is integrated with a `Content Management System, Hygraph`, to manage the content of classes
> of the event, as well as its participants. Requests are made with `GraphQL` (a query language created by Facebook), and with `Apollo
> Client` we optimize state management and use it to fetch, cache and modify application data while updating
> automatically your UI.

:arrow_right: GraphQL | A query language for your API <br /> 
:arrow_right: Apollo Client - a GraphQL Client <br /> 
:arrow_right: Hygraph | Headless CMS <br /> 
:arrow_right: date-fns <br /> 

<br />

## GraphQL | A query language for your API 

`GraphQL is a server-oriented query language and runtime environment` for application programming interfaces (APIs) whose priority is `to provide exactly the data clients request` and nothing else.

GraphQL was developed to make `APIs faster, more flexible and intuitive for developers`. You can even deploy it in an integrated development environment (IDE) known as `GraphiQL`. As an `alternative to the REST architecture`, GraphQL allows developers to build requests that pull data from multiple sources in a single API call.

Additionally, GraphQL gives API maintainers the flexibility to add or deprecate fields without affecting existing queries. Developers can build APIs with any method they want, as the GraphQL specification ensures that they work predictably for clients.

<div align="center">
<img src="graphql-query.png" width="550" />
</div>

### Ask for what you need, get exactly that

Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. `Apps using GraphQL are fast and stable because they control the data they get, not the server`.

### Get many resources in a single request

`GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request`. Apps using GraphQL can be quick even on slow mobile network connections.

### Describe what’s possible with a type system

`GraphQL APIs are organized in terms of types and fields, not endpoints. Access the full capabilities of your data from a single endpoint`. GraphQL uses types to ensure Apps only ask for what’s possible and provide clear and helpful errors. Apps can use types to avoid writing manual parsing code.

### Move faster with powerful developer tools

`Know exactly what data you can request from your API without leaving your editor`, highlight potential issues before sending a query, and take advantage of improved code intelligence. GraphQL makes it easy to build powerful tools like `GraphiQL` by leveraging your API’s type system.

*<i>redhat.com/en/topics/api/what-is-graphql</i> <br />
*<i>graphql.org</i> <br />
