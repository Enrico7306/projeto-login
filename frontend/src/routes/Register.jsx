import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5001"

const Register = () => {

// HOOK -useState - manipula o estado da variavel
  const [email,setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  //HOOK - useNavigate - navega entre os componentes 
  const navigate = useNavigate();

  // CRIANDO A FUNÇÃO HandleRegister

  const handleRegister =async (e)=>{
    e.preventDefault();
    try{
      const response= await axios.post(`${API_BASE}/register`,{email,senha});
      setMensagem(response.data.mensagem);
      // direciona para o login em 2 segundos
      setTimeout(()=>navigate("/",2000))
    }catch(error){
      setMensagem(error,"erro ao registrar usuario")
    }
  }
  

  return (
    
    <div className= "flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de usuário</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label className="block text-gray-700">Email</label>
            <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label>Senha</label>
            <input className= "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Cadastrar</button>
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
