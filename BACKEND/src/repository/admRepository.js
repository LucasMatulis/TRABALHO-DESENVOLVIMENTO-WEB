import { con } from "./connection.js";

export async function salvar(adm) {
    const comando = `
        INSERT INTO ADMs (nome, senha)
                      VALUES (?, ?)
    `
  
    const [info] = await con.query(comando, [adm.nome, adm.senha])
    adm.id = info.insertId;
    
    return adm;
  }
  
  export async function listar() {
    const comando = `
       SELECT idADM       as id,
              nome        as nome,
              senha      as senha
         FROM ADMs
    `
  
    const [linhas] = await con.query(comando);
    return linhas;
  }
  
  
  export async function buscarPorId(id) {
    const comando = `
    SELECT idADM       as id,
              nome        as nome,
              senha      as senha
         FROM ADMs
        WHERE idADM=?
    `
  
    const [linhas] = await con.query(comando, [id]);
    return linhas;
  }
  
  
  export async function alterar(id, adm) {
    const comando=`  UPDATE ADMs
                      SET
                      nome = ?,
                      senha = ?
                      WHERE idADM = ?`
  
    const [linhas] = await con.query(comando, [adm.nome, adm.senha,id])
    
    return adm;
  
  }
  
  
  export async function remover(id) {
    const comando = 'DELETE FROM ADMs WHERE idADM = ?'
  
    const [info] = await con.query(comando, [id])
    return info.affectedRows;
  }
  