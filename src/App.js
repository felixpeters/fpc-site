import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {

  return (
      <Router>
        <header class="bg-gray-900 flex justify-between items-center px-4 py-3">
          <div class="text-white text-3xl font-semibold">
            Explainable AI Interfaces
          </div>
          <nav className="flex">
            <Link to="/" className="text-lg text-white font-semibold rounded px-2 py-1 hover:bg-gray-800">Home</Link>
            <Link to="/survival" className="text-lg text-white font-semibold rounded px-2 py-1 hover:bg-gray-800">Survival Analysis</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/survival">
            <Survival />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

function Survival() {
  return <h2>Survival</h2>
}

export default App;