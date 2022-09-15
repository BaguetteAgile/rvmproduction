

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1251},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-marketing","displayName":"Marketing","link":{"linkType":"LinkTypePage","href":"#!page-marketing"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-realisations","displayName":"realisations","link":{"linkType":"LinkTypePage","href":"#!page-realisations"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-contact","displayName":"contact","link":{"linkType":"LinkTypePage","href":"#!page-contact"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-web","displayName":"web","link":{"linkType":"LinkTypePage","href":"#!page-web"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
<script src="https://www.google.com/recaptcha/api.js?render=6LcUJQEiAAAAAAHP2PviEOv9ZI6nu_C5FOLQ0muF">

      function onClick(e) {
        e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute('6LcUJQEiAAAAAAHP2PviEOv9ZI6nu_C5FOLQ0muF', {action: 'submit'}).then(function(token) {
              // Add your logic to submit to your backend server here.
          });
        });
      }
  