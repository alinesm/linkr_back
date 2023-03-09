import { Router } from "express";
import {
  getTrending,
  listHashtagsByPost,
  showPostsByHashtag,
} from "../controllers/hashtagsControllers.js";

// Como usuário logado,
// quero ver as hashtags de cada post em destaque (negrito) no corpo do post

// Ao clicar em uma hashtag no corpo do post,
// o usuário deve ser redirecionado para a
// rota /hashtag/:hashtag
// em que :hashtag é o nome da hashtag (**sem #**)
// https://www.npmjs.com/package/react-tagify
const router = Router();

router.get("/hashtag/trending", getTrending);
router.get("/hashtag/:idPost", listHashtagsByPost);
router.get("/hashtag/:hashtag", showPostsByHashtag);

// Como usuário logado, quero ver a caixa de lista de hashtags em trending
// Ao clicar em uma hashtag, o usuário deve ser redirecionado para a rota /hashtag/:hashtag
// em que :hashtag é o nome da hashtag (sem #).
//  **Obs: não utilizar a biblioteca react-tagify para renderizar as hashtags dentro da caixa de trending**

// Como usuário logado, quero ver os posts de uma hashtag na rota "/hashtag/:hashtag"

export default router;
