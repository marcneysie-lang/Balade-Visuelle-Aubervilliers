// ==========================================
// 1. LES DONNÉES
// ==========================================
const eventsData = [
    {
        time: '10:09',
        title: 'Campus Condorcet',
        description: 'Début de l\'aventure.',
        image: 'images/01campuscondorcet.jpg',
        cardContent: 'Lat: 48.91167 | Long: 2.3670'
    },
    {
        time: '10:15',
        title: 'Humathèque',
        description: 'Photo prise le 2025-10-30',
        image: 'images/02humathèque.jpg',
        cardContent: 'Lat: 48.91145 | Long: 2.3666'
    },
    {
        time: '10:17',
        title: 'Humathèque',
        description: 'Photo prise le 2025-10-30',
        image: 'images/03humathèque.jpg',
        cardContent: 'Lat: 48.91145 | Long: 2.3666'
    },
    {
        time: '10:20',
        title: 'Campus Condorcet Sud',
        description: 'Photo prise le 2025-10-30',
        image: 'images/04campuscondorcetsud.jpg',
        cardContent: 'Lat: 48.90676 | Long: 2.3658'
    },
    {
        time: '10:22',
        title: 'Le batiment TSF',
        description: 'Photo prise le 2025-10-30',
        image: 'images/05tsf.jpg',
        cardContent: 'Lat: 48.90682 | Long: 2.3661,'
    },
    {
        time: '10:25',
        title: 'Pole Socio Médical',
        description: 'Photo prise le 2025-10-30',
        image: 'images/06polesociomedical.jpg',
        cardContent: 'Lat: 48.90683 | Long: 2.3660'
    },
    {
        time: '10:28',
        title: 'Maison des Sciences de l\'Homme',
        description: 'Photo prise le 2025-10-30',
        image: 'images/07mshparis.jpg',
        cardContent: 'Lat: 48.90666 | Long: 2.3661'
    },
    {
        time: '10:29',
        title: 'Bar',
        description: 'Photo prise le 2025-10-30',
        image: 'images/08bar.jpg',
        cardContent: 'Lat: 48.90670 | Long: 2.3662'
    },
    {
        time: '10:30',
        title: 'Commerces: boulangerie et salon de thé',
        description: 'Photo prise le 2025-10-30',
        image: 'images/09boulanger-salon.jpg',
        cardContent: 'Lat: 48.90659 | Long: 2.3663'
    },
    {
        time: '10:30',
        title: 'Franprix',
        description: 'Photo prise le 2025-10-30',
        image: 'images/10franprix.jpg',
        cardContent: 'Lat: 48.90660 | Long: 2.3664'
    },
    {
        time: '10:31',
        title: 'Pharmacie',
        description: 'Photo prise le 2025-10-30',
        image: 'images/11pharmacie.jpg',
        cardContent: 'Lat: 48.90671 | Long: 2.3668'
    },
    {
        time: '10:32',
        title: 'Parc de la place',
        description: 'Photo prise le 2025-10-30',
        image: 'images/12parc.jpg',
        cardContent: 'Lat: 48.90636 | Long: 2.3664'
    },
    {
        time: '10:32',
        title: 'Restaurant',
        description: 'Photo prise le 2025-10-30',
        image: 'images/13restaurant.jpg',
        cardContent: 'Lat: 48.90624 | Long: 2.3665'
    },
    {
        time: '10:33',
        title: 'Fast Food',
        description: 'Photo prise le 2025-10-30',
        image: 'images/14pizza.jpg',
        cardContent: 'Lat: 48.90616 | Long: 2.3665'
    },
    {
        time: '10:34',
        title: 'Des gens qui circulent sur la place',
        description: 'Photo prise le 2025-10-30',
        image: 'images/15passants.jpg',
        cardContent: 'Lat: 48.90614 | Long: 2.3665'
    },
    {
        time: '10:34',
        title: 'Affichage sur la ville',
        description: 'Photo prise le 2025-10-30',
        image: 'images/16affichage.jpg',
        cardContent: 'Lat: 48.90632 | Long: 2.3664'
    },
    {
        time: '10:35',
        title: 'Logement des habitants',
        description: 'Photo prise le 2025-10-30',
        image: 'images/17batiment.jpg',
        cardContent: 'Lat: 48.90627 | Long: 2.3663'
    },
    {
        time: '10:36',
        title: 'Tour emblématique d\'Aubervilliers',
        description: 'Photo prise le 2025-10-30',
        image: 'images/18tour.jpg',
        cardContent: 'Lat: 48.90629 | Long: 2.3662'
    },
    {
        time: '10:37',
        title: 'Achat et vente de maison',
        description: 'Photo prise le 2025-10-30',
        image: 'images/19immobilliers.jpg',
        cardContent: 'Lat: 48.90626 | Long: 2.3662'
    },
    {
        time: '10:38',
        title: 'Studio Central',
        description: 'Photo prise le 2025-10-30',
        image: 'images/20studiocentral.jpg',
        cardContent: 'Lat: 48.90598 | Long: 2.3666'
    },
    {
        time: '10:38',
        title: 'Tableau d'affichage',
        description: 'Photo prise le 2025-10-30',
        image: 'images/21tableau.jpg',
        cardContent: 'Lat: 48.90599 | Long: 2.366'
    },
    {
        time: '10:39',
        title: 'Studio 217 Star Academy',
        description: 'Photo prise le 2025-10-30',
        image: 'images/22studio217.jpg',
        cardContent: 'Lat: 48.90537 | Long: 2.367'
    },
    {
        time: '10:40',
        title: 'Michel friperie',
        description: 'Photo prise le 2025-10-30',
        image: 'images/23michel.jpg',
        cardContent: 'Lat: 48.90542 | Long: 2.367'
    },
    {
        time: '10:41',
        title: 'Affiche du studio 210',
        description: 'Photo prise le 2025-10-30',
        image: 'images/24studio210.jpg',
        cardContent: 'Lat: 48.90412 | Long: 2.367'
    },
    {
        time: '10:42',
        title: 'Terrain de jeu',
        description: 'Photo prise le 2025-10-30',
        image: 'images/25terraindejeu.jpg',
        cardContent: 'Lat: 48.90417 | Long: 2.367'
    },
    {
        time: '10:44',
        title: 'Parc urbain, Zone de fauve tardive',
        description: 'Photo prise le 2025-10-30',
        image: 'images/26zonedefauvetardive.jpg',
        cardContent: 'Lat: 48.90383 | Long: 2.3676'
    },
    {
        time: '10:46',
        title: 'Le passage',
        description: 'Photo prise le 2025-10-30',
        image: 'images/27lepassage.jpg',
        cardContent: 'Lat: 48.90385 | Long: 2.3676'
    },
    {
        time: '10:54',
        title: 'Bureaux à louer',
        description: 'Photo prise le 2025-10-30',
        image: 'images/28bureauxàlouer.jpg',
        cardContent: 'Lat: 48.90781 | Long: 2.368'
    },
    {
        time: '10:56',
        title: 'Grossiste bijoutier',
        description: 'Photo prise le 2025-10-30',
        image: 'images/29grossistes.jpg',
        cardContent: 'Lat: 48.90823 | Long: 2.368'
    },
    {
        time: '10:58',
        title: 'Collège Miriam Makeba',
        description: 'Photo prise le 2025-10-30',
        image: 'images/30collègemiriammakeba.jpg',
        cardContent: 'Lat: 48.90969 | Long: 2.371'
    },
    {
        time: '11:04',
        title: 'Kebab',
        description: 'Photo prise le 2025-10-30',
        image: 'images/31kebab.jpg',
        cardContent: 'Lat: 48.9115 | Long: 2.373'
    },
    {
        time: '11:10',
        title: 'Vélos électriques à louer',
        description: 'Photo prise le 2025-10-30',
        image: 'images/32véloélectrique.jpg',
        cardContent: 'Lat: 48.91102 | Long: 2.373'
    },
    {
        time: '11:15',
        title: 'Cours d'eau',
        description: 'Photo prise le 2025-10-30',
        image: 'images/33laseine.jpg',
        cardContent: 'Lat: 48.91217 | Long: 2.374'
    },
    {
        time: '11:28',
        title: 'Terideal bureaux de location',
        description: 'Photo prise le 2025-10-30',
        image: 'images/34terideal.jpg',
        cardContent: 'Lat: 48.91345 | Long: 2.375'
    },
    {
        time: '11:30',
        title: 'Ferme Urbaine',
        description: 'Photo prise le 2025-10-30',
        image: 'images/35fermeurbaine.jpg',
        cardContent: 'Lat: 48.91476 | Long: 2.376'
    }
];

// ==========================================
// 2. FONCTION D'AFFICHAGE (RENDER)
// ==========================================
function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-events');
    timelineContainer.innerHTML = '';

    eventsData.forEach((event, index) => {
        const eventElement = document.createElement('div');
        // Force la classe "position-top" pour que tout s'affiche au-dessus
        eventElement.className = 'timeline-event position-top';

        eventElement.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${event.time}</div>
            
            <div class="timeline-card">
                <div class="card-pointer"></div>
                <h3>${event.title}</h3>
                <img src="${event.image}" alt="${event.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/250x150?text=Image+Introuvable';">
                <p><strong>${event.description}</strong></p>
                <p style="font-size:0.8em; color:#999;">${event.cardContent}</p>
            </div>
        `;
        timelineContainer.appendChild(eventElement);
    });

    // Initialisation des boutons de navigation
    initNavigation();
}

// ==========================================
// 3. LOGIQUE DES BOUTONS FLÉCHÉS
// ==========================================
function initNavigation() {
    const container = document.getElementById('scrollContainer');
    const leftBtn = document.getElementById('scrollLeft');
    const rightBtn = document.getElementById('scrollRight');

    // On déplace de 300px à chaque clic
    leftBtn.addEventListener('click', () => {
        container.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        container.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

// ==========================================
// 4. LANCEMENT
// ==========================================
document.addEventListener('DOMContentLoaded', renderTimeline);
