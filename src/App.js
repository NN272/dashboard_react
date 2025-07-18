import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Dashboard from './components/Dashboard/Dashboard';
import Account from './components/Account/Account';
import { DndContext } from '@dnd-kit/core';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
