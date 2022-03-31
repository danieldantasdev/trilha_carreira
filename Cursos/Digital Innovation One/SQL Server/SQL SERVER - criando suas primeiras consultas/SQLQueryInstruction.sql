
/*CRIAR A TABELA*/ 
create table Teste

(
	Descricao varchar(50)null,
	Complemento char(10)not null
)


/*
int - inteiros 
bigint - inteiros maiores (CPF em formato númerico)
varchar(4000) - 'a'
char - 'a        '
bit - 0 ou 1
null - aceita nulos, e nulos ausência de valores
not null - não acdita nulos
*/

/* 
char retorna com alguns espaços a direita
*/

/*INSERINDO VALORES A TABELA*/
insert Teste
values
	('a', 'a')
select *
from Teste



/*APAGAR TABELA*/ 
drop table Teste


create table Produtos
(
	Codigo int,
	Nome varchar(100),
	Descricao varchar(200),
	Preco float
)

create table Pedido 
(
	Codigo int not null,
	DataSolicitacao datetime not null,
	FlagPago bit not null,
	TotalPedido float not null,
	CodigoCliente int not null
)

create table PedidoItem 
(
	CodigoPedido int not null,
	CodigoProduto int not null,
	Preco float not null,
	Quantidade int not null
)

/*ENTRANDO NO BANCO*/
use ecomerce

/*SELECIONANDO A TABELA*/
select * from Clientes

apertando ALT + F1 selecionando ela conseguimos mais detalhes

/*INSERINDO DADOS NA TABELA*/
insert into Clientes (Codigo, Nome, TipoPessoa) values (1,'Daniel', 'M');
insert Clientes (Codigo, Nome, TipoPessoa) values (2,'Daniel', 'M');
insert Clientes values (3,'Daniel', 'M');


/*ATUALIZANDO DADOS NA TABELA*/
update Clientes
set	   Codigo = 5

where  Codigo = 2

update Clientes
set	   Nome = 'Daniel'

where  Nome = 'Jose'

/*DELETANDO DADOS NA TABELA*/
delete from Clientes

delete from Clientes where Codigo in(5)

delete from Clientes where Codigo in(5) AND TipoPessoa in('M')

/*OPERADORES DADOS NA TABELA*/
AND - Os dois verdadeiros
OR - Pelo menos um ser verdadeiro

V AND V = V
V AND F = F
F AND V = F
F AND F = F

V OR V = V
V OR F = V
F OR V = V
F OR F = F