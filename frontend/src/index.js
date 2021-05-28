import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
const restEndpoint = "https://randomuser.me/api"
const callRestAPI = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse)
  return JSON.stringify(jsonResponse)
}
function RenderResult(){
  const [apiResponse, setAPIResponse] = useState("Loading...")
  useEffect(()=> {
    callRestAPI().then(
      result => setAPIResponse(result)
    )
  },[])
  return (
    <div>
      <h1>React App</h1>
      <p>{apiResponse}</p>
    </div>
  )
}
callRestAPI();


ReactDOM.render(
  <RenderResult/>, 
  document.querySelector('#root')
);


