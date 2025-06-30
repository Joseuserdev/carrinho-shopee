# 🛒 Shopee Cart – Carrinho de Compras Simples em Node.js

Este é um projeto de estudo que simula um carrinho de compras utilizando Node.js, com foco em modularização de funcionalidades e boas práticas de organização de código. A ideia é permitir que usuários possam criar itens, adicionar ou remover do carrinho, visualizar os produtos selecionados e calcular o valor total.

## 📂 Estrutura do Projeto
DIO-node.js/ ├── src/ │   ├── index.js               # Arquivo principal que executa o sistema │   └── services/ │       ├── item.js            # Função para criar itens com subtotal │       └── cart.js            # Funções para manipular o carrinho (add, delete, total, etc)


## ⚙️ Funcionalidades

- Criar novos itens com nome, preço e quantidade
- Adicionar itens ao carrinho
- Remover itens por nome ou índice
- Listar todos os itens do carrinho
- Calcular o valor total dos produtos

## 🚀 Como Executar

1. Clone o repositório:
se estiver em seu ambiente de desenvolvimento...
   ```bash
   git clone https://github.com/seu-usuario/carrinho-shopee.git
   cd  carrinho-shopee

   - Execute o projeto com Node.js:
      --{node src/index.js} para executar o arquivo principal do projeto.

2. ou na barra superior deste repositorio de um fork para gerar uma copia deste projeto em seu proprio repositorio remoto.

    ## 💡 Objetivo


 Este projeto foi criado com fins educacionais para praticar conceitos de:


- Modularização em JavaScript
- Programação assíncrona com async/await
- Organização de código em múltiplos arquivos
- Estruturação de projetos Node.js sem frameworks
  
