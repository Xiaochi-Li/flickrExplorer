## Flickr Explorer
This is an single page web APP that display interesting photos to users.

Users could like or unlike images or view larger image and more details

### Design decisions
1. Use typescript to ensure type checking.
2. Use TSLint and .editorconfig to ensure code quality and consistence.
3. using antd UI frame work for its excellent Typescript support.
4. Let redux handle all logic, which leaves most of components stateless,
which in turn decrease maintenance cost and performance issue.

### Run guide
1. clone or download the project
2. cd the project.
3. run `yarn i`
4. use `yarn start` in terminal.

### build guide
2. cd the project.
3. use `yarn build` in terminal.

### deploy guid
1. build the project

### future improvements
1. use redux container and selector pattern to completely separate redux and 
react.js code

### future features
1. implement the feature which allows users to only view images they likes.

