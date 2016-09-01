# stupid-questions
No question too stupid.

## Initial roles/interests

Devops: Mandy & Erwin
Git: Kamon
Client: Kamon, Mandy, Jana
Server: Erwin, Sach, Siobhan
Full-stack: Justin, Prem
<enter>
##Creating seed dummy Data- Client side
<ul>
1.Created Seed dummy data for asking a question and viewing its contents:</li>
<li>React Redux</li>
<li>Can be found in src > reducers folder > initialQuestions </li>
Example: 
<pre>
<code>
```const initialQuestions = [{
  id:1,
  title:"what is javascript?",
  content:"I don't know what Javascript is! ohmigod!",
  created:""
},{```
</code>
</pre>
<ul>
2.Created seed dummy data for question answers: 
<li>React Redux </li>
<li>Can be found in src > reducers folder > initialAnswers </li>
Example:
<pre>
<code>
```const initialAnswers= [{
  id:1,
  content:"A programming language",
  created:"",
  question_id:1
},{```
</code>
</pre>
