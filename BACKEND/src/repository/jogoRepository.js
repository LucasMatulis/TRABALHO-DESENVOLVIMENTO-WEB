import { con } from "./connection.js";


export async function salvar(jogo) {
  const comando = `
      INSERT INTO Jogos (nomeJogo, precoJogo, imagemJogo)
                    VALUES (?, ?, ?)
  `

  const [info] = await con.query(comando, [jogo.nomeJogo, jogo.precoJogo,jogo.imagemJogo])
  jogo.id = info.insertId;
  
  return jogo;
}

export async function listar() {
  const comando = `
     SELECT idJogo        as id,
            nomeJogo        as nome,
            precoJogo      as preco,
            imagemJogo   as imagem
       FROM jogos
  `

  const [linhas] = await con.query(comando);
  return linhas;
}


export async function buscarPorId(id) {
  const comando = `
  SELECT idJogo        as id,
        nomeJogo        as nome,
        precoJogo      as preco,
        imagemJogo   as imagem
    FROM jogos
      WHERE idJogo=?
  `

  const [linhas] = await con.query(comando, [id]);
  return linhas;
}


export async function alterar(id, jogo) {
  const comando=`  UPDATE retrogames.jogos
                    SET
                    nomeJogo = ?,
                    precoJogo = ?,
                    imagemJogo = ?
                    WHERE idJogo = ?`

  const [linhas] = await con.query(comando, [jogo.nomeJogo, jogo.precoJogo,jogo.imagemJogo, id])
  
  return jogo;

}


export async function remover(id) {
  const comando = 'DELETE FROM jogos WHERE idJogo = ?'

  const [info] = await con.query(comando, [id])
  return info.affectedRows;
}
