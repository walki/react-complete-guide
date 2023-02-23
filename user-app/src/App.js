import Users from './components/Users/Users';

function App() {

  const users = [
    { id: 'user1', name: 'Max', age: 31 },
    { id: 'user2', name: 'Max', age: 31 },
  ]



  return (
    <>
    <Users users={users} />
    </>
  );
}

export default App;
