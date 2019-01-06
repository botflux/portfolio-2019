const data = [
    { 
        id: 0, 
        title: 'Macrophoto-graphie', 
        description: `Une plateforme pilotée par micro-controller destinée à la photographie de minéraux. Cette plateforme est capable de prendre des matrices 3D de photographies. A l'origine ce projet a été donné par Tellure aux Labs de la Médiathèque du Val d'Argent.`, 
        filename: 'https://labs.valdargent.com/images/Articles/evenements/projets/projets_realises/img3.jpg', 
        difficulties: `J'ai travaillé sur ce projet lors de mon stage en terminal baccalauréat. C'était la première fois que je travaillais sur un projet concret avec une vrai problématique.`, 
        role: `Nous étions deux, issus de la même promotion, a travailler sur ce projet. Nous n'avions pas spécialement d'énormes connaissances en développement. Nous avons travaillé en autonomie sur le projet en donnant des compte rendu tous les jours/2 jours à notre tuteur.`, 
        team: `Dans ce projet, j'ai travaillé sur la partie développement du programme de la plateforme. Tandis que mon collègue a travailler sur l'aspect conception de la plateforme.` 
    }
]

export default {
    getProjects: () => {
        return data
    },
    getProject: (id) => {
        console.log('helllooo', id)
        return data.find(e => {return e.id == id})
    }
}