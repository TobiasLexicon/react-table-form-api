import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { PersonRow } from './Components/PersonRow';
import { SubmitPerson } from './Components/SubmitPerson';
import personData from './Data/personData';

function App() {
  const [persons, setPersons] = useState([]);

  const getPersons = async () => {
    return await axios.get('https://localhost:5031/People').then(res => res);
  };

  useEffect(() => {
    getPersons().then(res => setPersons(res.data));
  });

  return (
    <div>
      <h1>People Listy Thing</h1>
      <SubmitPerson className='form' />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <PersonRow {...person} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
