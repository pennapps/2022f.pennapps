import * as React from 'react'
import Collapsible from 'react-collapsible';
import ReactMarkdown from 'react-markdown'
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc"
import '../styles/index.css'

const FAQ = ({content, id}) => {
  const faqs = content.split("## ").slice(1);
  const output = faqs.map((faq) => {
    let tokens = faq.split("\n");
    let question = tokens[0];
    let answers = [];
    for (let i = 1; i < tokens.length; i++) {
      if (tokens[i]) {
        answers.push(
          <p className="faq-answer" key={tokens[i]}>
            <ReactMarkdown>{tokens[i]}</ReactMarkdown>
          </p>
        );
      }
    }
    let trigger_closed = <div className="faq-collapsible">
      <h2 className="faq-question" key={question}>{`${question}`}</h2>
      <VscTriangleDown />
    </div>;
    let trigger_open = <div className="faq-collapsible">
      <h2 className="faq-question" key={question}>{`${question}`}</h2>
      <VscTriangleUp />
    </div>;
    return ( 
      <Collapsible trigger={trigger_closed} triggerWhenOpen={trigger_open}>
        {answers}
      </Collapsible>
    );
  });

  return (
    <div id={id} key={id} className="section">
        <h1>FAQ</h1>
        <ReactMarkdown>We know you have a lot of questions, so check below for some of the most common answers (and [this document](https://docs.google.com/document/d/19Hjom5ZjHyzcFwHYFqVHLFV_sdFr7ki_aYCy4Z52KWU/edit) for even more) or drop us a line at [contact@pennapps.com](mailto:contact@pennapps.com).</ReactMarkdown>
        {output}
    </div>
  )
}

export default FAQ