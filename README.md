# 📝 Redação Assistida – Ferramenta para Auxílio na Redação

Este projeto é uma aplicação web simples desenvolvida em **React** que permite aos usuários criarem rascunhos de redação, adicionando parágrafos e visualizando o texto completo.

📌 **Desenvolvido como parte do teste prático para a vaga de desenvolvedor full stack na Repertório.**

---

## 🚀 Funcionalidades

✅ **Adicionar Parágrafo** – O usuário pode digitar um parágrafo e adicioná-lo ao rascunho.  
✅ **Salvar Rascunho** – Simulação da funcionalidade de salvar (sem persistência em banco).  
✅ **Visualizar Texto Completo** – Exibição do texto com todos os parágrafos adicionados.  
✅ **Gerenciamento de Estado** – Os parágrafos são armazenados em um array dentro do componente **DraftEditor**.  
✅ **Responsividade** – A interface se adapta a diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

- **React** (Vite) – Framework para criação da interface.
- **TypeScript** – Tipagem segura e melhor manutenção do código.
- **CSS Modules / TailwindCSS** – Para estilização responsiva.

---

## 📂 Estrutura do Projeto

```
📦 redacao-assistida
├── 📂 src
│   ├── 📂 components
│   │   ├── DraftEditor.tsx  // Editor principal do rascunho
│   │   ├── Paragraph.tsx  // Componente de parágrafo
│   ├── 📂 data
│   │   ├── TextData.ts  // Lista de textos de exemplo
│   ├── 📂 pages
│   │   ├── Home.tsx  // Página principal
│   │   ├── Editor.tsx  // Página do editor
│   ├── App.tsx  // Componente raiz
│   ├── main.tsx  // Ponto de entrada da aplicação
├── package.json
├── README.md
```

---

## 🏗️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```sh
git clone https://github.com/viniciosragazzidev/teste-repertorio.git
```

### 2️⃣ Instalar as dependências

```sh
cd redacao-assistida
npm install
```

### 3️⃣ Rodar o servidor de desenvolvimento

```sh
npm run dev
```

Agora a aplicação estará disponível em **http://localhost:5173** 🚀

---

## 🔗 Deploy Online

Se disponível, acesse a versão online do projeto [aqui](https://teste-repertorio-nine.vercel.app/).

---

## 📌 Melhorias Futuras

🔹 Implementar um backend para salvar os rascunhos permanentemente.  
🔹 Criar um sistema de autenticação para múltiplos usuários.  
🔹 Adicionar um sistema de correção automática de redação.

---

📌 **Desenvolvido por:** Vinicios Ragazzi
📧 Contato: devviniciosragazzi@gmail.com  
👨‍💻 [LinkedIn](https://www.linkedin.com/in/viniciosragazzidev/) | [GitHub](https://github.com/viniciosragazzidev/)

```

```
