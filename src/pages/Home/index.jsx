import '../Home/styles.css';
import {Card} from '../../components/Card'

export function Home(){
  return (
    <div className="container">
      <span>Listagem de Presença</span>
      <input type="text" id="alunos" placeholder="Digite seu nome..."/>
      <button type="submit">Adicionar</button>

      <Card />
      <Card />
      <Card />
    </div>
  )
}