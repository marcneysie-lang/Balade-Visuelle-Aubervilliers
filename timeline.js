// ==========================================
// 1. LES DONNÉES
// ==========================================
const eventsData = [
    {
        time: '10:09',
        title: 'Campus Condorcet',
        description: 'Début de l\'aventure.',
        image: 'images/photo-01-campuscondorcet.jpg',
        cardContent: 'Lat: 48.9117 | Long: 2.3671'
    },
    {
        time: '10:15',
        title: 'Humathèque',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-02-humathèque.jpeg',
        cardContent: 'Lat: 48.9115 | Long: 2.3667'
    },
    {
        time: '10:20',
        title: 'Studio TSF',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-03-studioTSF.jpeg',
        cardContent: 'Lat: 48.9095 | Long: 2.3666'
    },
    {
        time: '10:31',
        title: 'Centre des Colloques',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-04-centredescolloques.jpeg',
        cardContent: 'Lat: 48.9068 | Long: 2.3659'
    },
    {
        time: '10:32',
        title: 'Parking à vélos',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-05-parkingàvélos.jpeg',
        cardContent: 'Lat: 48.9068 | Long: 2.3662'
    },
    {
        time: '10:32',
        title: 'Commerces et bus',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-06-commercesetbus.jpeg',
        cardContent: 'Lat: 48.9068 | Long: 2.3661'
    },
    {
        time: '10:33',
        title: 'Metro 12 Front Populaire',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-07-metro12frontpopulaire.jpeg',
        cardContent: 'Lat: 48.9067 | Long: 2.3664'
    },
    {
        time: '10:35',
        title: 'Studio Centrale',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-08-studiocentrale.jpeg',
        cardContent: 'Lat: 48.906 | Long: 2.3666'
    },
    {
        time: '10:35',
        title: 'Place des EMGP',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-09-infographieplacedes EMGP.jpeg',
        cardContent: 'Lat: 48.9059 | Long: 2.3669'
    },
    {
        time: '10:36',
        title: 'Signalisation EMGP',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-10-signalisationplacedesEMGP.jpeg',
        cardContent: 'Lat: 48.9057 | Long: 2.3678'
    },
    {
        time: '10:37',
        title: 'Camion grossiste',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-11-camiongrossiste.jpeg',
        cardContent: 'Lat: 48.9056 | Long: 2.3678'
    },
    {
        time: '10:37',
        title: 'Studio 217 Star Academy',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-12-studio217staracademy.jpeg',
        cardContent: 'Lat: 48.9054 | Long: 2.3679'
    },
    {
        time: '10:38',
        title: 'Signalisation Studios 210',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-13-signalisationstudios210.jpeg',
        cardContent: 'Lat: 48.9048 | Long: 2.3677'
    },
    {
        time: '10:39',
        title: 'Tournage video',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-14-tournagevideo.jpeg',
        cardContent: 'Lat: 48.9042 | Long: 2.3675'
    },
    {
        time: '10:41',
        title: 'Le Passage',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-15-lepassage.jpeg',
        cardContent: 'Lat: 48.904 | Long: 2.3677'
    },
    {
        time: '10:42',
        title: 'Ferme Urbaine',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-16-signalisationfermeurbaine.jpeg',
        cardContent: 'Lat: 48.904 | Long: 2.3677'
    },
    {
        time: '10:45',
        title: 'Studio 210',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-17-studio210.jpeg',
        cardContent: 'Lat: 48.9041 | Long: 2.3679'
    },
    {
        time: '10:47',
        title: 'Star Academy',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-18-staracademy.jpeg',
        cardContent: 'Lat: 48.905 | Long: 2.3677'
    },
    {
        time: '10:53',
        title: 'EHSS',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-19-ehss.jpeg',
        cardContent: 'Lat: 48.9074 | Long: 2.3669'
    },
    {
        time: '10:55',
        title: 'Commerce de location',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-20-commercedelocation.jpeg',
        cardContent: 'Lat: 48.9078 | Long: 2.368'
    },
    {
        time: '10:56',
        title: 'Fournisseur 1',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-21-fournisseur1.jpeg',
        cardContent: 'Lat: 48.9082 | Long: 2.369'
    },
    {
        time: '10:56',
        title: 'Fournisseur 2',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-22-fournisseur2.jpeg',
        cardContent: 'Lat: 48.9083 | Long: 2.369'
    },
    {
        time: '10:56',
        title: 'Fournisseur 3',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-23-fournisseur3.jpeg',
        cardContent: 'Lat: 48.9085 | Long: 2.3692'
    },
    {
        time: '10:57',
        title: 'Fournisseur 4',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-24-fournisseur4.jpeg',
        cardContent: 'Lat: 48.9085 | Long: 2.3693'
    },
    {
        time: '10:57',
        title: 'Fournisseur 5',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-25-fournisseur5.jpeg',
        cardContent: 'Lat: 48.9086 | Long: 2.3693'
    },
    {
        time: '11:01',
        title: 'Fournisseur 6',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-26-fournisseur6.jpeg',
        cardContent: 'Lat: 48.9096 | Long: 2.3717'
    },
    {
        time: '11:01',
        title: 'Signalisation rue',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-27-signalisationrue.jpeg',
        cardContent: 'Lat: 48.9097 | Long: 2.3719'
    },
    {
        time: '11:04',
        title: 'Centre bus Aubervilliers',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-28-centrebusaubervilliers.jpeg',
        cardContent: 'Lat: 48.9105 | Long: 2.373'
    },
    {
        time: '11:06',
        title: 'Fashion center CIFA',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-29-fashioncentercifa.jpeg',
        cardContent: 'Lat: 48.9115 | Long: 2.3731'
    },
    {
        time: '11:10',
        title: 'Signalisation Saint-Gobain',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-30-signalisationsaintgobain.jpeg',
        cardContent: 'Lat: 48.9134 | Long: 2.3723'
    },
    {
        time: '11:21',
        title: 'Moovrider',
        description: 'Photo prise le 2025-10-30',
        image: 'images/balade-31-moovrider.jpeg',
        cardContent: 'Lat: 48.9161 | Long: 2.3749'
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
