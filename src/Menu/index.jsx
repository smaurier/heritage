import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/frise-chronologique">Frise chronologique</Link></li>
          <li><Link to="/carte-interactive">Carte interactive</Link></li>
          <li><Link to="/personnages-historiques">Personnages historiques</Link></li>
          <li><Link to="/evenements-historiques">Evenements historiques</Link></li>
          <li><Link to="/quizz-jeux-educatifs">Quizz et jeux éducatifs</Link></li>
          <li><Link to="/actualites-historiques">Actualités historiques</Link></li>
          <li><Link to="/ressources-pedagogiques">Ressources pédagogiques</Link></li>
          <li><Link to="/discussions">Discussions</Link></li>
          <li><Link to="/a-propos">A propos</Link></li>
          <li><Link to="/connexion">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;