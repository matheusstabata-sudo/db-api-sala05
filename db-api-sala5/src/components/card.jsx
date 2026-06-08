import s from './card.module.css'

export const Card = (props) => {
    return(
        <div key={props.unico}>
            <img className={s.imagem} src={props.imagem} alt={props.nome} />
            <h4>Name: {props.nome}</h4>
            <p>Species: {props.especie}</p>
            <p>KI: {props.ki}</p>
            <p>maxKi: {props.maxKi}</p>
            <p>race: {props.raca}</p>
            <p>gender: {props.genero}</p>
            <p>affiliation: {props.afiliacao}</p>
            
        </div>
    )
}