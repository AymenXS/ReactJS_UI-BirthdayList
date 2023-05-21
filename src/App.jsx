import { useState } from 'react';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <section>
          {people.map(({ id, image, name, age }) => {
            return (
              <article className="person" key={id}>
                <img src={image} alt={name} className="img" />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
            );
          })}
        </section>
        <button type="button" className="btn btn-block" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
