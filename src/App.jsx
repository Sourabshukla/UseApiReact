import { Suspense, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { use } from 'react'

const fetchData = () => fetch('https://dummyjson.com/users').then((res) => res.json())

const userResource = fetchData();
export default function App() {

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Users userResource={userResource} />
      </Suspense>
    </div>
  )
}
const Users = ({ userResource }) => {
  const userdata = use(userResource);

  return (
    <div>
      <h1>users list</h1>
      {userdata?.users?.map((user) => (
        <h1>{user.firstName}</h1>
      ))}

    </div>
  );
};