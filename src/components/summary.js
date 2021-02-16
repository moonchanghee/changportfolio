import React from 'react';

const Summary = ({ data }) => (
  <div>
    
    <section className="py-5 border-b border-neutral-300  items-center">
      <h1 className="section-header">Introduce</h1>
      <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg">
        {data}
      </p>
    </section>
  </div>
);

export default Summary;
