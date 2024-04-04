//I've used React before, so I've written the fetch request with async/await over .then

const getEntities = async () => {
    const url = "https://raw.githubusercontent.com/TeTarakona/Alec-Hunt-6210-Assignment1/main/data/scp.json";
  
    const response = await fetch(url);
    const entities = await response.json();
  
    return entities;
  };
  
  export { getEntities };