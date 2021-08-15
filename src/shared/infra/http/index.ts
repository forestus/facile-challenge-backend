import server, { connectToDB } from "./server";

const PORT = process.env.PORT || 3000;
// inicia a Conexão com o Banco e quando termina Inicia a Configuração do Servidor.
connectToDB().then(() => {
  // Porta do Servidor
  server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
  });
});
