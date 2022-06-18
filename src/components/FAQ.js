import * as React from 'react'
import Collapsible from 'react-collapsible';
import '../styles/index.css'

const FAQ = ({content, key}) => {
  let faqs = content.split("## ").slice(1);
  let output = faqs.map((faq) => {
    let tokens = faq.split("?\r\n\r\n");
    console.log(tokens);
    let question = tokens[0];
    let answer = tokens[1];
    return <Collapsible trigger={<h2>{`${question}?`}</h2>}>
      <p>{answer}</p>
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