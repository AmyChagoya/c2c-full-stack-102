# Lesson 6 — Back End Setup (Server Folder)

Goal: set up your `server/` folder with Express and Nodemon and get a basic server running on port **3001**.

Stop after you successfully run `npm run devStart`. We will do the MySQL connection + queries after.

## Work To Be Done In The IDE (Lesson 6)

### 1) Start the client (so we avoid port conflicts)

In one terminal, make sure your React client is running (it should use port 3000):

```bash
cd /workspaces/c2c-full-stack-102/lesson-06/app/client
npm install
npm start
```

Leave this running.

### 2) Initialize the server folder

Open a **new** terminal and run:

```bash
cd /workspaces/c2c-full-stack-102/lesson-06/app/server
npm init -y
```

This creates `package.json`.

### 3) Create `index.js`

Inside `/workspaces/c2c-full-stack-102/lesson-06/app/server/`, create a new file named `index.js`:

```bash
cd /workspaces/c2c-full-stack-102/lesson-06/app/server
touch index.js
```

### 4) Install dependencies

Still inside `/workspaces/c2c-full-stack-102/lesson-06/app/server/`:

```bash
npm install express body-parser mysql nodemon
```

### 5) Express server — step 1 (create the server)

In `index.js`, add this first chunk:

```js
const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("running on port 3001");
});
```

Run it:

```bash
node index.js
```

You should see: `running on port 3001`.

Now visit `http://localhost:3001`.

You will likely see: `Cannot GET /`.

### 6) Express server — step 2 (add a GET route)

In `index.js`, add this route **above** the `app.listen(...)`:

```js
app.get("/", (req, res) => {
  res.send("hello world");
});
```

Stop your server (`Ctrl+C`) and run it again:

```bash
node index.js
```

Refresh `http://localhost:3001` and you should see: `hello world`.

### 7) Nodemon setup (edit `package.json` scripts)

In `/workspaces/c2c-full-stack-102/lesson-06/app/server/package.json`, update/add the `scripts` section to include:

```json
"scripts": {
	"start": "node index.js",
	"devStart": "nodemon index.js"
}
```

### 8) Run the server with Nodemon (stop here)

Run:

```bash
npm run devStart
```

Confirm it works by changing your `res.send("hello world")` message, saving the file, and refreshing the browser.

Stop here — we will do the MySQL part next.
