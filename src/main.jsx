import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const notes =[
  {
  id :1,
  content :'HTML is easy',
  important : true
},
{
  id : 2,
  content :'Browser can only excute javascript',
  important : false
},

{
  id : 3,
  content : 'Get and post are two most important HTTP protocal',
  important: true

}

]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
)
