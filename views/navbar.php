<header>
  <nav role="navigation">
    <div id="menuToggle">
      <!--
        A fake / hidden checkbox is used as click reciever,
        so you can use the :checked selector on it.
        -->
      <input type="checkbox" />

      <!--
        Some spans to act as a hamburger.

        They are acting like a real hamburger,
        not that McDonalds stuff.
        -->
      <span></span>
      <span></span>
      <span></span>

      <!--
        Too bad the menu has to be inside of the button
        but hey, it's pure CSS magic.
        -->
      <ul id="menu">
        <a href="#">
          <li>Accueil</li>
        </a>
        <a href="/Escape_web/index.php/history">
          <li>Démarrer</li>
        </a>
        <a href="#">
          <li>infos</li>
        </a>
        <a href="#">
          <li>Paramètres</li>
        </a>
        <a href="#">
          <li>Aides</li>
        </a>
      </ul>
    </div>
  </nav>
</header>
