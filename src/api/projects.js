const data = [
    { 
        id: 0, 
        title: 'Macrophoto-graphie', 
        description: `Une plateforme pilotée par micro-controller destinée à la photographie de minéraux. Cette plateforme est capable de prendre des matrices 3D de photographies. A l'origine ce projet a été donné par Tellure aux Labs de la Médiathèque du Val d'Argent.`, 
        filename: 'https://labs.valdargent.com/images/Articles/evenements/projets/projets_realises/img3.jpg', 
        difficulties: `J'ai travaillé sur ce projet lors de mon stage en terminal baccalauréat. C'était la première fois que je travaillais sur un projet concret avec une vrai problématique.`, 
        role: `Nous étions deux, issus de la même promotion, a travailler sur ce projet. Nous n'avions pas spécialement d'énormes connaissances en développement. Nous avons travaillé en autonomie sur le projet en donnant des compte rendu tous les jours/2 jours à notre tuteur.`, 
        team: `Dans ce projet, j'ai travaillé sur la partie développement du programme de la plateforme. Tandis que mon collègue a travailler sur l'aspect conception de la plateforme.` ,
        body: `<header class="project__header mb-1">
        <h2 class="heading heading--1 grid__column">Projets</h2>
        <h1 class="heading heading--3 mb-2">Macrophoto-graphie</h1>
        <p class="hashtag">#c, #arduino, #c++, #makeblock</p>
    </header>
    <p class="text mb-1">Une plateforme pilotée par micro-controller destinée à la photographie de minéraux. Cette plateforme est capable de prendre des matrices 3D de photographies. A l'origine ce projet a été donné par Tellure aux Labs de la Médiathèque du Val d'Argent.</p>
    <img src="https://labs.valdargent.com/images/Articles/evenements/projets/projets_realises/img3.jpg" alt="Macrophoto-graphie" class="project__img mb-1">
    <div class="project__body grid grid--gapped">
        <div class="project__body__element grid__column--4 grid__column--8--sm grid__column--6--lg mb-1">
            <h2 class="heading--2 heading mb-2">Difficultés</h2>
            <p class="text">J'ai travaillé sur ce projet lors de mon stage en terminal baccalauréat. C'était la première fois que je travaillais sur un projet concret avec une vrai problématique.</p>
        </div>
        <div class="project__body__element grid__column--4 grid__column--8--sm grid__column--6--lg mb-1">
            <h2 class="heading heading--2 grid__column--4 mb-2">Mon rôle</h2>
            <p class="text">Dans ce projet, j'ai travaillé sur la partie développement du programme de la plateforme. Tandis que mon collègue a travailler sur l'aspect conception de la plateforme.</p>
        </div>
        <div class="project__body__element grid__column--4 grid__column--8--sm grid__column--6--lg mb-1">
            <h2 class="heading heading--2 grid__column--4 mb-2">Équipe</h2>
            <p class="text">Nous étions deux, issus de la même promotion, a travailler sur ce projet. Nous n'avions pas spécialement d'énormes connaissances en développement. Nous avons travaillé en autonomie sur le projet en donnant des compte rendu tous les jours/2 jours à notre tuteur.</p>
        </div>
    </div>`
    },
    {
        id: 1,
        title: 'Dmx Controller',
        filename: 'http://sono.e44.com/images/produits/P/PAR56LEDCH-par56-rgb-led_478d5.jpg',
        description: `Une suite d'application servant à contrôler des éléments scéniques tel que des spots LED. Le projet est composé d'une application Android et d'une application de bureau. Ces deux éléments fonctionnent grâce à un serveur qui fait l'intemédiaire entre applications et éléments scéniques.`,
        body: `
        <header class="project__header mb-1">
        <h2 class="heading heading--1 grid__column">Projets</h2>
        <h1 class="heading heading--3 mb-2">Dmx Controller</h1>
        <p class="hashtag">#android, #csharp, #c++, #raspberry, #dmx512, #java</p>
    </header>
    <p class="text mb-1">Une suite d'application servant à contrôler des éléments scéniques tel que des spots LED. Le projet est composé d'une application Android et d'une application de bureau. Ces deux éléments fonctionnent grâce à un serveur qui fait l'intemédiaire entre applications et éléments scéniques. Ce projet a été développé dans le cadre de mon BTS Systèmes numériques.</p>
    <img src="http://sono.e44.com/images/produits/P/PAR56LEDCH-par56-rgb-led_478d5.jpg" alt="Dmx Controller" class="project__img mb-1">
    <div class="project__body grid grid--gapped">
        <div class="project__body__element grid__column--4 grid__column--8--sm grid__column--6--lg mb-1">
            <h2 class="heading--2 heading mb-2">Difficultés</h2>
            <p class="text">La difficultés dans ce projet a été de travailler avec des personnes qui n'avaient pas forcément toutes le même niveau ce qui a créé des différences dans la vitesse de travail. Ces différences ont été compensé par le développement de librairies en commun lors ce que s'était possible.</p>
        </div>
        <div class="project__body__element grid__column--4 grid__column--8--sm grid__column--6--lg mb-1">
            <h2 class="heading heading--2 grid__column--4 mb-2">Mon rôle</h2>
            <p class="text">J'ai travaillé sur la partie développement de l'application de bureau. J'ai également en quelque sorte donner la direction globale dans laquelle allait le projet en donnant des conseils sur la manière dont les outils devaient être pensé.</p>
        </div>
        <div class="project__body__element grid__column--4 grid__column--8--sm grid__column--6--lg mb-1">
            <h2 class="heading heading--2 grid__column--4 mb-2">Équipe</h2>
            <p class="text">Nous étions 3 à travailler sur ce projet. Une personne pour chaque élément de projet : Application bureau, serveur, application Android. Nous avons travaillé en autonomie avec des rendu de rapport d'étape tous les 2 mois.</p>
        </div>
    </div>
        
        `
    }
]

export default {
    getProjects: () => {
        return data
    },
    getProject: (id) => {
        return data.find(e => {return e.id == id})
    }
}