import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getCadastramento = async () => {
  let results = await DB_EXEC(`select * from cadastramento`);
  //console.log(results);
  return results.rows._array;
};

export const insertCadastramento = async (param) => {
  let results = await DB_EXEC(
    `insert into cadastramento(tipo,nome,nasc,cargo,jornada,senha)
  values(?,?,?,?,?,?)`,
    [
      param.tipo,
      param.nome,
      param.nasc,
      param.cargo,
      param.jornada,
      param.senha,
    ]
  );
  //console.log(results);
  return results.rowsAffected;
};

/*
import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getCadastros = async () => {
  let results = await DB_EXEC(`select * from cadastros`);
  console.log(results); //comentar linha para parar debug
  return results.rows._array;
}

export const insertCadastro = async (param) => {
  let results = await DB_EXEC(`insert into cadastros(nome, cpf, rg, nasc, cargo, jornada, admissao, senha)
  values(?,?,?,?,?,?,?,?)`, [param.nome, param.cpf, param.rg, param.nasc, param.cargo, param.jornada, param.admissao, param.senha]);
  console.log(results); //comentar linha para parar debug
  return results.rowsAffected;
}

export const updateCadastro = async (param) => {
  let results = await DB_EXEC(`update cadastros set nome=?, cpf=?, rg=?, nasc=?, cargo=?, jornada=?, admissao=?, senha=?
    where id=?`, [param.nome, param.cpf, param.rg, param.nasc, param.cargo, param.jornada, param.admissao, param.senha, param.id]);
  console.log(results); //comentar linha para parar debug
  return results.rowsAffected;
}

export const deleteCadastro = async (id) => {
  let results = await DB_EXEC(`delete from cadastros where id=?`, [id]);
  console.log(results); //comentar linha para parar debug
  return results.rowsAffected;
}

*/
