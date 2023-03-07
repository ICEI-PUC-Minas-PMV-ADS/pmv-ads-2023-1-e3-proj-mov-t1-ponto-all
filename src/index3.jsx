import React, { useState } from 'react';

function ControleDePonto() {
  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: 'João da Silva', sobrenome: 'Silva', cargo: 'Desenvolvedor', departamento: 'TI' },
    { id: 2, nome: 'Maria Oliveira', sobrenome: 'Oliveira', cargo: 'Designer', departamento: 'Design' },
    { id: 3, nome: 'Carlos Souza', sobrenome: 'Souza', cargo: 'Gerente', departamento: 'RH' }
  ]);

  const [pontos, setPontos] = useState([]);

  const registrarPonto = (e) => {
    e.preventDefault();

    const ponto = {
      id: pontos.length + 1,
      funcionarioId: parseInt(e.target.funcionario.value),
      data: e.target.data.value,
      horaEntrada: e.target.hora_entrada.value,
      horaSaida: e.target.hora_saida.value
    };

    setPontos([...pontos, ponto]);
  };

  return (
    <div>
      <h1>Controle de Ponto</h1>
      <form onSubmit={registrarPonto}>
        <label htmlFor="funcionario">Funcionário:</label>
        <select id="funcionario" name="funcionario">
          {funcionarios.map((funcionario) => (
            <option key={funcionario.id} value={funcionario.id}>{funcionario.nome}</option>
          ))}
        </select>
        <br />
        <label htmlFor="data">Data:</label>
        <input type="date" id="data" name="data" />
        <br />
        <label htmlFor="hora_entrada">Hora de Entrada:</label>
        <input type="time" id="hora_entrada" name="hora_entrada" />
        <br />
        <label htmlFor="hora_saida">Hora de Saída:</label>
        <input type="time" id="hora_saida" name="hora_saida" />
        <br />
        <button type="submit">Registrar Ponto</button>
      </form>

      <h2>Pontos Registrados</h2>
      <table>
        <thead>
          <tr>
            <th>Funcionário</th>
            <th>Data</th>
            <th>Hora de Entrada</th>
            <th>Hora de Saída</th>
          </tr>
        </thead>
        <tbody>
          {pontos.map((ponto) => {
            const funcionario = funcionarios.find((f) => f.id === ponto.funcionarioId);

            return (
              <tr key={ponto.id}>
                <td>{funcionario.nome}</td>
                <td>{ponto.data}</td>
                <td>{ponto.horaEntrada}</td>
                <td>{ponto.horaSaida}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ControleDePonto;

// Neste exemplo, o componente ControleDePonto contém dois estados (funcionarios e pontos) e uma função registrarPonto, que é chamada quando o formulário é submetido. Quando um ponto é registrado, um novo objeto ponto é adicionado ao estado pontos.//