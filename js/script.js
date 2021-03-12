

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-marketing","displayName":"Marketing","link":{"linkType":"LinkTypePage","href":"#!page-marketing"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-realisations","displayName":"realisations","link":{"linkType":"LinkTypePage","href":"#!page-realisations"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-contact","displayName":"contact","link":{"linkType":"LinkTypePage","href":"#!page-contact"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-web","displayName":"web","link":{"linkType":"LinkTypePage","href":"#!page-web"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-politique-de-cookies","displayName":"politique-de-cookies","link":{"linkType":"LinkTypePage","href":"#!page-politique-de-cookies"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-mentions-l-gales","displayName":"Mentions-Légales","link":{"linkType":"LinkTypePage","href":"#!page-mentions-l-gales"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
/*------------------ OREJIME - GPDR ------------------------------------------*/
  /* variable consent */
window.orejimeConfig = {
    appElement: "#site-header",
    privacyPolicy: "https://rvmproduction.netlify.app/mentions-l-gales.html",
    mustConsent: true,
    implicitConsent: false,
    lang: "fr",
    translations: {
        fr: {
            consentModal: {
                title:"RVMproduction respect vos données personelles.",
            },
            "google-analytics": {
                description: "Analyse d'audience",
            },
            purposes: {
                experience: "Les cookies de préférences permettent à un site Web de retenir des informations qui modifient la manière dont le site se comporte ou s’affiche, comme votre langue préférée ou la région dans laquelle vous vous situez.",
                statistic: "Les cookies statistiques aident les propriétaires du site Web, par la collecte et la communication d'informations de manière anonyme, à comprendre comment les visiteurs interagissent avec le site Web.",
                essentiel: "Utile au bon fonctionnement des vidéos de Calice"
            },
            save: "Accepter"
        },
    },
    apps: [
        {
        name: "google-analytics",
        title: "Google Analytics",
        purposes: ["statistic"],
        cookies: ["_ga", "_gat", "_gid", "__utma", "__utmb", "__utmc", "__utmt", "__utmz"]
    },

{
         name: "google-tag-manager",
        title: "Google Tag Manager",
        purposes: ["statistic"],
        cookie: ["_ga_"]
    },
   
    ],
}


            
/* End variable consent */
