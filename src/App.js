import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function App() {
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState(0)
  const [users, setUsers] = useState([])
  //databae with table of users
  const usersCollectionRef = collection(db, 'users')


  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
  }
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id)
    const newFields = { age: age + 1 }
    await updateDoc(userDoc, newFields)

  }

  useEffect(() => {
    const getUsers = async () => {
      //get the data from database
      const data = await getDocs(usersCollectionRef)

      // .. to include also id spread operator
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }
    getUsers()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(users)
  return <div className='App'>

    <input type="text" placeholder='Name..' onChange={(e) => { setNewName(e.target.value) }} />
    <input type="number" placeholder='Age..' onChange={(e) => { setNewAge(e.target.value) }} />
    <button onClick={createUser}>Create user</button>

    {users.map((user) => {
      return (<div key={user.id}>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <button onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
        <button onClick={() => deleteUser(user.id)}>Delete user</button>
      </div>)
    })}
  </div>;
}

export default App;
