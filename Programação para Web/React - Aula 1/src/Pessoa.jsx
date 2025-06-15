
export function Pessoa({children, cor, estilo, comentario, nome}) {
    return (
        <div title={comentario} style={{color: cor, ...estilo}}>
            <p> Olá, eu me chamo {nome}!</p>
            {children}
        </div>
    )
}