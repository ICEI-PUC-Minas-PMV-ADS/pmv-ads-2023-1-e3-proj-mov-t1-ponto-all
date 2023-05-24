import * as SQLite from 'expo-sqlite';

export const Database = {
  getConnection: () => {
    
    const db = SQLite.openDatabase('ponto_all.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists cadastros (id integer primary key not null, nome text not null, cpf int not null, rg text not null, nasc text not null, cargo text not null, jornada real not null, admissao text not null, senha text not null);'
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;
