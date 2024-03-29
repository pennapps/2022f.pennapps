import * as React from 'react'
import Collapsible from 'react-collapsible';
import ReactMarkdown from 'react-markdown'
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc"

const FAQ = ({content}) => {
  const faqs = content.split("## ").slice(1);
  const output = faqs.map((faq) => {
    let tokens = faq.split("\n");
    let question = tokens[0];
    let answers = [];
    for (let i = 1; i < tokens.length; i++) {
      if (tokens[i]) {
        answers.push(
          <div className="faq-answer" key={tokens[i]}>
            <ReactMarkdown>{tokens[i]}</ReactMarkdown>
          </div>
        );
      }
    }
    let trigger_closed = <div className="faq-collapsible">
      <h2 className="faq-question" key={question}>{`${question}`}</h2>
      <VscTriangleDown style={{ color: "#40916C", minWidth: "16px" }} />
    </div>;
    let trigger_open = <div className="faq-collapsible">
      <h2 className="faq-question" key={question}>{`${question}`}</h2>
      <VscTriangleUp style={{ color: "#40916C", minWidth: "16px" }} />
    </div>;
    return ( 
      <Collapsible trigger={trigger_closed} triggerWhenOpen={trigger_open}>
        {answers}
      </Collapsible>
    );
  });

  return (
    <div key="faqs" className="section">
        <a className="anchor" id="faqs"/>
        <h1>FAQ</h1>
        <ReactMarkdown>We know you have a lot of questions, so check below for some of the most common answers. If you have other questions, drop us a line at [contact@pennapps.com](mailto:contact@pennapps.com).</ReactMarkdown>
        {output}
    </div>
  )
}

export default FAQ