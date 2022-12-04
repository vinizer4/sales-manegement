import { useState } from 'react'
import { Layout, Input } from 'components'
import { useProdutoService } from 'app/services'
import { Produto } from 'app/models/produtos'

export const CadastroProdutos: React.FC = () => {

    const service = useProdutoService()
    const [sku, setSku] = useState<string>('')
    const [preco, setpreco] = useState<string>('')
    const [nome, setnome] = useState<string>('')
    const [descricao, setdescricao] = useState<string>('')

    const submit = () => {
        const produto: Produto = {
            sku,
            preco: parseFloat(preco),
            nome,
            descricao
        }
        service
            .salvar(produto)
            .then(produtoResposta => console.log(produtoResposta));
    }

    return (
        <Layout titulo="Produtos" >
            <div className='columns'>
                <Input
                    label="SKU: *"
                    columnClasses='is-half'
                    onChange={setSku}
                    value={sku}
                    id="inputSku"
                    placeholder='Digite o SKU do produto'
                />
                <Input
                    label="Preço: *"
                    columnClasses='is-half'
                    onChange={setpreco}
                    value={preco}
                    id="inputPreço"
                    placeholder='Digite o Preço do produto'
                />
            </div>
            <div className='columns'>
                <Input
                    label="Nome: *"
                    columnClasses='is-full'
                    onChange={setnome}
                    value={nome}
                    id="inputNome"
                    placeholder='Digite o Nome do produto'
                />
            </div>
            <div className='columns'>
                <div className='field column is-full'>
                    <label className='label' htmlFor='inputDesc'>Descrição: *</label>
                    <div className='control'>
                        <textarea
                            className='textarea'
                            id='inputDesc'
                            value={descricao}
                            onChange={event => setdescricao(event.target.value)}
                            placeholder='Digite a Descrição detalhada do produto' />
                    </div>
                </div>
            </div>
            <div className='field is-grouped'>
                <div className='control is-link'>
                    <button onClick={submit} className='button'>
                        Salvar
                    </button>
                </div>
                <div className='control'>
                    <button className='button'>
                        Voltar
                    </button>
                </div>
            </div>
        </Layout>
    )
}
