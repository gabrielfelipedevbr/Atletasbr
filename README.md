# 🏅 Atletas do Brasil - Pesquisa Olímpica

Bem-vindo ao projeto **Atletas do Brasil**, uma página web feita com muito carinho para te ajudar a encontrar informações sobre atletas brasileiros ou esportes que brilham nas Olimpíadas. Aqui você pode pesquisar pelos seus atletas favoritos ou modalidades esportivas e descobrir um pouco mais sobre cada um!

## 💻 O que você vai encontrar?

Um campo de pesquisa super simples e intuitivo. Basta digitar o nome do atleta ou esporte, clicar no botão "Pesquisar" e voilà! Se encontrarmos algo, os resultados aparecerão logo abaixo, com direito a mais informações e links.

### 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página. Sim, ele ainda vive!
- **CSS3**: Um toque de estilo, claro, com o `styles.css`. (Quem não gosta de uma página bonitinha?)
- **JavaScript**: Aqui a mágica acontece! O arquivo `app.js` traz toda a lógica por trás da busca, e o `dados.js` é onde guardamos todas as informações dos atletas e esportes.
  
## 🚀 Como funciona?

1. **Pesquise**: Digite o nome do atleta ou esporte que você está procurando no campo de busca.
2. **Clique no botão**: Ao clicar em "Pesquisar", a função mágica `pesquisar()` vai vasculhar o banco de dados e encontrar qualquer resultado relacionado ao que você digitou.
3. **Veja os resultados**: Se encontramos algo, vai aparecer logo abaixo com título, descrição e um link para mais informações. Se não, uma mensagem simpática de "Nada foi encontrado" será exibida. (Prometo, sem drama!)

### 🧙‍♂️ Como a busca acontece?

Dentro do nosso `app.js`, a função de pesquisa pega o que você digitou, transforma tudo em minúsculas (para não diferenciar maiúsculas e minúsculas) e compara com nossos dados. A busca é feita em três frentes:
- Título do atleta/esporte.
- Descrição.
- Tags associadas (palavras-chave).

Se qualquer uma dessas coincidências for encontrada, você verá os resultados na tela!

### 📝 Estrutura dos dados:

No arquivo `dados.js`, cada item tem:
- **Título**: Nome do atleta ou esporte.
- **Descrição**: Um textinho bacana explicando quem ou o que é.
- **Tags**: Palavras-chave que ajudam na pesquisa.
- **Link**: Um link para você saber mais, se ficar curioso.

## 🔮 Melhorias Futuras?

- Adicionar **mais dados** (porque atleta bom é o que não falta!).
- Melhorar a interface com mais **CSS estiloso** e responsividade.
- Incluir **sinônimos e correções** de erros de digitação (para aqueles momentos em que a gente digita "futbol" ao invés de "futebol").

## 📝 Como contribuir?

Se você quiser dar uma força e contribuir, fique à vontade! Envie seu pull request com suas ideias ou melhorias. Dúvidas? Só mandar um email para: [franciscogabriel8787@gmail.com](mailto:franciscogabriel8787@gmail.com).

---

E é isso! Espero que você se divirta usando a aplicação tanto quanto nos divertimos criando. 😄
