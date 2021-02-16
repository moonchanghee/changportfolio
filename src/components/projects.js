import React from 'react';

const Projects = ({ data }) => (
  <section>
    <h1 className="section-header">Projects</h1>
    {data.map(item => (
      <>
        <article className="my-5" key={item.name}>
          <a href={item.link}><h2 className="item-header">{item.name}</h2></a>
          <h3 className="item-sub">
              {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>      
        </article>
        <div className="project-contents" >
          <div className="project-image-contents">
            <img className="project-image" src={`./${item.img}.jpg`} alt={item.img}></img>
          </div>
          <div className="project-contents-description">
            {item.description.map((des,i)=>{
              return(
                <p>
                  <li className="item-ul">{des.text}</li>
                </p>)
            })}
            <div className="project-contents-tag">
              {item.tag.map(tag=>{
                return (
                <span key={tag.name} className="tag">
                  {tag.name}
                </span>
                )
              })}
            </div>
          </div>
        </div>
      </>
    ))}
  </section>
);

export default Projects;

