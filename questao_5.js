function pessoa(nome, idade, endereco) {
    this.nome = "nome"
    this.idade = "idade"
    this.endereco = {rua: 0, número: 0, cidade: "", estado: ""}
}

const pessoa1 = new pessoa("Miguel", "18", this.endereco(301, 405, "Brasilia", "DF"))

    console.log(pessoa1)


