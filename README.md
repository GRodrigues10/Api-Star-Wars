# 🌌 Star Wars API  

API criada com **Node.js + Express + MongoDB**, trazendo informações do universo Star Wars: **filmes, séries, documentários, jogos, conteúdos populares e personagens**.  

---

## 🚀 Tecnologias utilizadas  
- Node.js  
- Express  
- MongoDB (via Mongoose)  
- Cors  
- Dotenv  

---

## 📂 Endpoints  

### 📽️ Dados gerais (filmes, séries, documentários, jogos, populares)  

- **Listar todos** → `GET /`  
- **Buscar por ID** → `GET /data/:id`  
- **Criar novo item** → `POST /`  
- **Atualizar item por ID** → `PUT /:id`  
- **Deletar item por ID** → `DELETE /:id`  

---

### 👤 Personagens  

- **Listar todos os personagens** → `GET /personagens`  
- **Buscar personagem por ID** → `GET /personagens/:id`  
- **Criar novo personagem** → `POST /personagens`  
- **Atualizar personagem por ID** → `PUT /personagens/:id`  
- **Deletar personagem por ID** → `DELETE /personagens/:id`  

---

## 🔮 Exemplos de resposta  

### Exemplo de item (filme/série/documentário)  

```json
{
  "id": "6718d4b17a84d6e8c2332a5f",
  "title": "Star Wars: A New Hope",
  "description": "O jovem Luke Skywalker se junta a Obi-Wan Kenobi...",
  "poster_url": "https://link-poster.jpg",
  "backdrop_url": "https://link-backdrop.jpg",
  "trailer_url": "https://youtube.com/trailer",
  "cast": "Mark Hamill, Harrison Ford, Carrie Fisher",
  "age_rating": "12",
  "duration": "2h 1min",
  "seasons": null,
  "year": 1977,
  "types": ["filme"]
}
