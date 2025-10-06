import React, { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'; // ajuste o caminho se necessário

const API_BASE = "http://localhost:5001";

const Register = () => {
  const { setUser } = useContext(UserContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE}/register`, { email, senha, nome });
      setMensagem(response.data.mensagem);

      // Salva o usuário no contexto (simulando login automático após registro)
      setUser({
        name: nome,
        email: email,
        role: 'user' // ou o que seu backend retornar
      });

      // Navega para o dashboard após 2 segundos
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      setMensagem("Erro ao registrar usuário");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de usuário</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label className="block text-gray-700">Nome de usuário</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label>Senha</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Cadastrar
          </button>
        </form>

        {mensagem && <p className="mt-4 text-center text-red-500">{mensagem}</p>}
        <p className="mt-4 text-center">
          Já tem uma conta? <a href="/" className="text-blue-500 hover:underline">Faça Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
