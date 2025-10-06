import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // caminho correto

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null); // desloga
  };

  return (
    <nav style={{ height: '60px', backgroundColor: '#444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <h3>Meu Dashboard</h3>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</Link>

        {user ? (
          <>
            {user.role === 'admin' && (
              <li>
                <Link to="/admin" className="hover:text-pink-500">
                  Painel Admin
                </Link>
              </li>
            )}
            <li>
              <span style={{ color: 'pink' }}>Olá, {user.name}</span>
            </li>
            <li>
              <button
                onClick={handleLogout}
                style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
              >
                Sair
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          </li>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
