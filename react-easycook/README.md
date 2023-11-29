# Projeto EasyCook em React e NodeJs

## Lista de Afazeres

- Cadastro de novo usuário 
    - No processo de cadastro e autorização, a senha é criptografada.
        - A senha é armazenada após a criptografia.
    - O cadastro atribui um novo e único estoque a este usuário
        - A lista de ingredientes "adicionáveis" ao estoque é igual para todos os usuários
        - O estoque de cada usuário monitora diferentes ingredientes - especificamente os escolhidos pelo usuário

- Login do usuário
    - A comparação das senhas se dá entre senhas criptografadas, por questões de segurança.
    - O token de autenticação garante que não há a necessidade de se logar novamente dentro de um curto período de tempo.
    - Preservar, de alguma forma, o id do usuário logado pelas páginas.

- Nova lista e nova receita
    - Os formulários de cada página precisam estar completos e enviar requisições adequadas (com validações no front e back).
    - As páginas devem fazer GETs da lista de ingredientes disponíveis para que se possa adicionar ingredientes às requisições de POST.
 
- Página de Estoque e edição de lista de compras
    - As requisições de Patch devem atualizar as entidades de monitoração, não os ingredientes, no banco de dados
    - A exclusão deve deletar as monitorações, não os ingredientes
    - Deve ser possível adicionar e remover monitorações nas listas de compras
    - Devem ser consultadas apenas as monitorações que são pertecem ao usuário logado (buscar monitorações cujo id do owner seja igual ao do usuário)
          

## Referências de Estudo

[AUTENTICAÇÃO - Curso REACT Udemy](https://www.udemy.com/course/react-redux-pt/learn/lecture/14757850#overview)

## Fluxo de trabalho do github

[Pequeno guia sobre como colaborar usando git e github](https://docs.github.com/pt/get-started/quickstart/github-flow)
