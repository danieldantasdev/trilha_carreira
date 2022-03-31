# SQL SERVER

## AULA 1

### Por que armazenar dados?

- Maneira de usar dados no futuro
- Compartilhamento de passar dados de geração em geração

### O que é um banco de dados?

- Planilha Excel
- Dados que você irá reaproveitar em algum momento
- É uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS)

### SGBD's?

- Softwares que gerenciam banco de dados
- Sabemos com manipular o dado mas não como ele foi armazenado
- Usuários com níveis de acessos (administrador - user)

# Banco de dados relacionais?

- SQL SERVER
- ORACLE
- MySQL

**Sistemas que precisam de uma confiabilidade e seguir muito maior (vendas, estoque)**
**Altamente tipados**

## Representação banco de dados relacional


| E-Comerce     |  
|---------------|           id: int
|  Vendas       | ----->    Nome: varchar (Alfa-numéricos)
|  Produtos     |           CPF: char 
|  Sistemas     |           Ativo: bit

### Atomicidade

`Quero cadastrar uma venda para um cliente que não existe, o SQL SERVER vai retorna um erro de chave estrangeira`

`Quero cadastrar um cliente que não existe, o SQL SERVER vai retornar um erro de chave estrangeira`

`Resolve problemas de compras duplicadas de um mesmo produtos`

**Garantia que todos os dados estejam corretos, para assim colocar os mesmos em uma tabela**

### Consistência de dados

|   Estoque   |       |E-Comerce|   |E-Comerce|       |  Vendas  |
|-------------|       |E-Comerce|   |E-Comerce|       |----------|

`Cadastro de produtos persiste somente se haver nos quatro bases do exemplo de cima`


# Banco de dados não relacionais - NoSQL?

- MongoDB
- Neo4j     
- Firebase

**Sistema que focam na melhor performance (geolocalização, links, BigData, vídeos)**


## AULA 2 - primeiras consultas em SQL SERVER

- Instalei o SQL SERVER 2019 Express edition no site da Microsoft
- Chave de integração entre o banco e o sistema que posso desenvolver é:
`Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;`
- Instalei o SSMS (Microsoft SQL SERVER Management Studio)

**Comando**

select getdate()
go
`Para retornar a data`

use master()
go
`Para retornar o master`

### SQL SERVER

- É um serviço que fica rodando no windows

**Comando para criar o modo dark no SQL SERVER**
`powershell -Command “(gc ‘C:\Program Files (x86)\Microsoft SQL Server Management Studio 18\Common7\IDE\ssms.pkgundef’) -replace ‘\[\`$RootKey\`$\\Themes\\{1ded0138-47ce-435e-84ef-9ec1f439b749}\]’, ‘//[`$RootKey`$\Themes\{1ded0138-47ce-435e-84ef-9ec1f439b749}]’ | Out-File ‘C:\Program Files (x86)\Microsoft SQL Server Management Studio 18\Common7\IDE\ssms.pkgundef'”`

## AULA 3 - criando o primeiro banco de dados
