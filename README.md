# stupid-questions
No question too stupid.

## Initial roles/interests

Devops: Mandy & Erwin
Git: Kamon
Client: Kamon, Mandy, Jana
Server: Erwin, Sach, Siobhan
Full-stack: Justin, Prem
<enter>

## Build and run client

<pre>
<code>
npm run build
npm start
</code>
</pre>



# Installation - Client Side

Open the terminal and enter your 'stupid-questions-client' repository.

Run 'npm i' to install appropriate packages in the package.json:

```
npm i
```

Once the packages have been installed, the webpack must be built using 'npm run build'

```
npm run build
```

Then open a new tab in the terminal and run the server

```
npm run server
```


##Creating seed dummy Data- Client side

1. Created Seed dummy data for asking a question and viewing its contents:
- React Redux
- Can be found in src > reducers folder > initialQuestions
Example:
```
const initialQuestions = [{
  id:1,
  title:"what is javascript?",
  content:"I don't know what Javascript is! ohmigod!",
  created:""
},{
```

2. Created seed dummy data for question answers:

- React Redux
- Can be found in src > reducers folder > initialAnswers
Example:
```
const initialAnswers= [{
  id:1,
  content:"A programming language",
  created:"",
  question_id:1
},{
```
