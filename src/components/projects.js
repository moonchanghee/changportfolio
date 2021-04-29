import React from 'react';

const Projects = ({ data }) => (
  <section >
    <h1 className="section-header">Projects</h1>

    {data.map(item => (
      <>
       <section className="py-5 border-b border-neutral-300  items-center">
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
          <ul>
          {item.description.map((des,i)=>{
              return(
                
                  <li className="item-ul">  ●   {des.text}</li>
                )
            })}
            </ul>
            <div className="project-contents-tag" style ={{marginTop:"50px"}}>
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
        </section>
      </>
    ))}
    <br/><br/><br/>
  </section>
);

export default Projects;

