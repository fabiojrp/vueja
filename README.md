# VueJS

## DOM

### Diretivas
- v-bind: Vincula atributos de HTML ou propriedades de componentes a uma expressão JavaScript; é unidirecional, do javascript para o HTML
- v-on:<*evento*>: evento gerado no HTML para atualizar a instância (do Vue no JS)
- v-model: Cria uma ligação bidirecional de dados em um campo de formulário; v-bind+v-on

### Modificadores de acesso:
- stop: interrompe o evento naquela parte
- prevent: evita que evento padrão ocorra

### Interpolação
- linha complexas dentro do {{ }}

### Propriedades reativas
- **computed**: permite que uma função seja chamada como um atributo (sem '()') somente quando necessário
- **watch**: faz atualização assíncrona quando uma variável é modificada