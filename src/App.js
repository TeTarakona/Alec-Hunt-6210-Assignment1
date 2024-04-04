import { React, useEffect, useState } from "react";
import { getEntities } from "./getEntities"
import "./app.css";

function App() {
  console.log(getEntities())

const [entities, setEntities] = useState([]);
//I've used React before and prefer to use async/await over .then, so I've used that here
  useEffect(() => {
    const loadData = async () => {
      const entities = await getEntities();
      setEntities(entities);
    };

    loadData();
  }, []);

  const Entities = () => {
    return (
      <>
      {
         entities.map((entity) => {
          return (
            <article className="entity" key={entity.id}>
              <div className="description">
              <h2>{entity.id}</h2>
              <p>{entity.class}</p>
              <p>{entity.containment}</p>
              <p>{entity.description}</p>
              <div className="image-container">
              <img className="img" src={entity.image} alt={entity.id} />
              </div>
              </div>
            </article>
          )
        })
      }
      </>
    )
  }

  return (
    <div className="entities">
      <Entities />
    </div>
  );
}

export default App;
