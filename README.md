## React Mini Apps w/ Auth0 Authentication

-   Pomodoro Timer
-   Markdown Editor
-   Rock Paper Scissors
-   Mini Zelda
-   Infinitely
-   Quiz Me

#### Test User

-   Username: demo@test.com
-   Password: vtu5W8&82V

### Auth0 Setup:

-   Create a new app in your Auth0 account. I named mine `React Mini Apps - Auth`.
-   Create a Database under `Connections` named `Email-Password-DB`. Assign this db to app you created above from the `Applications` tab.
-   After deploying to your preferred hosting service, add the live url to the list of allowed urls under `Application URIs` of your Auth0 backend.

### Pomodoro Timer

### Markdown Editor

npm packages used `parse, remark-react & unified`

### Rock Paper Scissors

### Mini Zelda

Canvas Api

### Infinitely \_\_\_ FINISH SEARCH FUNCTIONALITY

Infinitely scroll images pulled from api. Add your Unsplash access key in the `.env` file

### Quiz Me

API used: [Open Trivia DB](https://opentdb.com/)
npm packages used `dompurify` to sanitize incoming html data. `lodash.shuffle` to shuffle answers array
