# stupid-questions
No question too stupid.

## Initial roles/interests

Devops: Mandy & Erwin
Git: Kamon
Client: Kamon, Mandy, Jana
Server: Erwin, Sach, Siobhan
Full-stack: Justin, Prem

##Creating seed dummy Data- Client side

Seeded dummy data for asking a question and viewing its contents:
React Redux 
Can be found in src > reducers folder > initialQuestions 

Example: 
```const initialQuestions = [{
  id:1,
  title:"what is javascript?",
  content:"I don't know what Javascript is! ohmigod!",
  created:""
},{```

Seeded dummy data for question answers: 
React Redux 
Can be found in src > reducers folder > initialAnswers 
Example:

```const initialAnswers= [{
  id:1,
  content:"A programming language",
  created:"",
  question_id:1
},{
```
