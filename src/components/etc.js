import React from 'react';

const Etc = ({ data }) => (
  <section>
    <h1 className="section-header">Etc</h1>
    {data.map(item => (
      <>
        <article className="my-5" key={item.name}>
            <a href={item.link}><h2 className="item-header">{item.name}</h2></a>
            <h3 className="item-sub">
                {item.company} | {item.period} 
            </h3>      
        </article>
        <div className="project-contents" >
            {item.description}
        </div>
      </>
    ))}
  </section>
);

export default Etc;

