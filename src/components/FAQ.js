import * as React from 'react'
import Collapsible from 'react-collapsible';
import ReactMarkdown from 'react-markdown'
import '../styles/index.css'

const FAQ = ({content, key}) => {

  function parse(answer) {
    return answer.replace(/_*_/, 'i')
  }


  let faqs = content.split("## ").slice(1);
  let output = faqs.map((faq) => {
    let tokens = faq.split("\r\n\r\n");
    console.log(tokens);
    let question = tokens[0];
    let answers = [];
    for (let i = 1; i < tokens.length; i++) {
      answers.push(<p><ReactMarkdown>{tokens[i]}</ReactMarkdown></p>);
    }
    return <Collapsible trigger={<h2>{`${question}`}</h2>}>
      {answers}
    </Collapsible>;
  });

  return (
    <div key={key}>
        <h1>FAQ</h1>
        {output}
    </div>
  )
}

export default FAQ