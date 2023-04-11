import { Component } from 'react'

class Contato extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            sexo: '',
            preferencia: ''
        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(event) {
        event.preventDefault()
        const { nome, email, sexo, preferencia } = this.state
        if (nome === '' || email === '' || sexo === '' || preferencia === '') {
            alert('Preencha todos os campos')
            return
        }
        alert(`Nome: ${nome} \nEmail: ${email} \nSexo: ${sexo} \nPreferencia: ${preferencia}`)
    }
    render() {
        return (
            <div className="form">
                <h1>Cadastre-se em nosso site</h1>
                <p>Ao cadastrar você fica por dentro de todos os lançamentos de Filmes e Séries</p>
                <form onSubmit={this.cadastrar}>
                    <label>Nome: </label>
                    <input type='text' value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} /><br />
                    <label>Email: </label>
                    <input type='email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /><br />
                    <label>Sexo:</label>
                    <select value={this.state.sexo} onChange={(e) => this.setState({ sexo: e.target.value })}>
                        <option value=''></option>
                        <option value='feminino'>Feminino</option>
                        <option value='masculino'>Masculino</option>
                    </select><br /><br />
                    <label>Preferencia:</label><br />
                    <div value={this.state.preferencia} onChange={(e) => this.setState({ preferencia: e.target.value })}>
                    <input type='radio' value='Filme' name='preferencia'/>Filme
                    <input type='radio' value='Serie' name='preferencia'/>Serie
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        )
    }
}

export default Contato