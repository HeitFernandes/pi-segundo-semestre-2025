# 🗂️ Documentação do Banco de Dados — Mainteer

Este diretório reúne os arquivos referentes à **modelagem e documentação do banco de dados** do projeto **Mainteer**.

---

## 📘 Estrutura da Pasta

| Arquivo | Descrição |
|----------|------------|
| **DicionarioDados - Mainteer.xlsx** | Planilha contendo a descrição detalhada das tabelas, campos, tipos de dados, chaves e relacionamentos utilizados no banco de dados. |
| **Mainteer.brM3** | Arquivo do **modelo conceitual**, desenvolvido no software **BrModelo 3**. |
| **Mainteer.png** | Exportação em imagem do **modelo conceitual**, mostrando entidades, atributos e relacionamentos. |
| **Mainteer_Modelo_Logico.brM3** | Arquivo do **modelo lógico**, também desenvolvido no **BrModelo 3**, representando a estrutura relacional. |
| **Mainteer_Logico.png** | Exportação em imagem do **modelo lógico**, incluindo tabelas, chaves primárias e estrangeiras. |

---

## 🧩 Descrição Geral

O banco de dados **Mainteer** foi projetado para o **gerenciamento de serviços e ordens de manutenção de motocicletas**.  
Ele contempla o cadastro de **clientes**, **funcionários**, **motos**, **ordens de serviço**, **agendamentos** e **peças de reposição**, garantindo rastreabilidade e integridade das informações.

---

## 🧱 Modelagem

### 🔹 [Modelo Conceitual](https://github.com/HeitFernandes/pi-segundo-semestre-2025/blob/main/Data/modelo_conceitual/Mainteer.png)
Representa a visão de alto nível do sistema, destacando entidades principais, atributos e relacionamentos.  
As principais entidades são:
- **Cliente**
- **Moto**
- **Funcionário**
- **Agendamento de Serviço**
- **Ordem de Serviço**
- **Peças de Serviço**
- **Marca**, **Modelo** e **Cor** (para detalhamento da moto)

### 🔹 [Modelo Lógico](https://github.com/HeitFernandes/pi-segundo-semestre-2025/blob/main/Data/modelo_logico/Mainteer_Logico.PNG)
Estrutura o banco de dados de forma relacional, definindo:
- **Chaves primárias e estrangeiras**
- **Tipos de dados**
- **Cardinalidades**
- **Relacionamentos normalizados**

As tabelas possuem nomes e tipos de dados padronizados, respeitando boas práticas de nomenclatura e integridade referencial.

---

## 🧾 [Dicionário de Dados](https://github.com/HeitFernandes/pi-segundo-semestre-2025/blob/main/Data/DicionarioDados%20-%20Mainteer.pdf)

A planilha `DicionarioDados - Mainteer.xlsx` contém:
- Nome de cada tabela e campo  
- Tipo de dado (INT, VARCHAR, DATE, etc.)  
- Restrições (PK, FK, NN, UNIQUE, etc.)  
- Descrição funcional de cada campo  

Esse documento complementa o modelo lógico, detalhando o propósito de cada atributo.

---

## 🛠️ Ferramentas Utilizadas

- **BrModelo 3** — Modelagem conceitual e lógica  
- **MySQL Workbench** — Referência para tipos de dados e diagramas relacionais  
- **Microsoft Excel** — Criação do dicionário de dados  
- **GitHub** — Versionamento e documentação do projeto

---

## 👥 Equipe de Desenvolvimento

| Nome | Função / Contribuição |
|------|------------------------|
| **Paola Gabriele** | Desenvolvimento completo dos modelos conceitual, lógico e físico; criação do dicionário de dados; organização da documentação e estrutura do projeto de Banco de Dados. |
| **Felipe Rodrigues** | Apoio na definição dos requisitos, revisão do modelo conceitual/lógico e participação nas validações. |
| **Beatriz Martins** | Participação nas validações, testes do modelo lógico e alterações dos tipos de atributos. |
| **Samuel Heitor** | Participação nas validações e alteração de atributos|

---
