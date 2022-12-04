function Mensagem(props: any) {
    return (
        <div>
            {props.mensagem}
        </div>
    )
}

const MeuComponente = () => {
    return (
        <div>
            <Mensagem mensagem="Teste" />
        </div>
    )
}

export default MeuComponente