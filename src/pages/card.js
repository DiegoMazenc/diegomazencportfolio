import React, { useState, useEffect } from 'react';
import wolfGang from '../img/portfolio/wolfgang.jpg';
import DashBoard from '../img/portfolio/DashBoard.jpg';
import siteVoyage from '../img/portfolio/siteVoyage.jpg';
import SocialNetwork from '../img/portfolio/SocialNetwork.jpg';
import UBB from '../img/portfolio/UBB.jpg';
import deadfuck from '../img/portfolio/deadfuck.jpg';
import turbojoujou from '../img/portfolio/turboJoujou.jpg';
import githubLogo from '../img/githubLogo.png';
import arrow from '../img/arrow.png';


const Card = () => {
    const [isHovered, setHovered] = useState(false);
    // const [isActive, setActive] = useState(false);
    let art1 = true;
    let art2 = true;
    let art3 = true;
    let art4 = true;
    let art5 = true;
    let art6 = true;
    let art7 = true;

    const handleToggle = (cardId, active) => {
        if (window.innerWidth < 700) {
            let card = document.querySelector(`.Hovered-${cardId}`);
            if (active) {
                card.classList.add('Hovered-hover');
                active= false;
            } else {
                card.classList.remove('Hovered-hover');
                active= true;
            }
        }
        return active; 
    };
    


    const handleHover = (cardId) => {
        // Si l'écran est supérieur à 700 pixels, ajouter la classe au survol
        if (window.innerWidth >= 700) {
            document.querySelector(`.Hovered-${cardId}`).classList.add('Hovered-hover');
        }
    };

    const handleHoverLeave = (cardId) => {
        // Si l'écran est supérieur à 700 pixels, retirer la classe lorsque le survol se termine
        if (window.innerWidth >= 700) {
            document.querySelector(`.Hovered-${cardId}`).classList.remove('Hovered-hover');
        }
    };

    return (
        <div className='portFolio' id="portFolio">
            <h2>PortFolio</h2>
            <div className='gallery'>
            <div className='CardContenent'>
                    <div className='pasHover'>
                        <img className='imgCard' src={turbojoujou} alt="" />
                    </div>
                    <div
                        className={`Hovered Hovered-turbojoujou`}
                        onMouseEnter={() => handleHover('turbojoujou')}
                        onMouseLeave={() => handleHoverLeave('turbojoujou')}
                        onClick={() => { art7 = handleToggle('turbojoujou', art7); }}
                    >
                        <div className='titleCard'>
                            <h3>Turbo Joujou</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>HTML </p>
                            <p>css</p>
                            <p>JavaScript</p>
                            <p>Vue JS</p>
                            <p>Pinia</p>
                            <p>Vercel</p>
                        </div>
                        <div className='descContent'>
                            <div className='cardDesc cardDesctwo'>
                                <p>Projet réalisé avec le framework Vue.js afin de m'exercer à la conception d'un site internet à partir de micro-composants. Pour cela, j'ai choisi le thème d'une boutique e-commerce vendant diverses catégories de marchandises en rapport avec les jeux vidéo, mangas et figurines.<br />
                                Afin de faciliter la communication entre mes différents composants ainsi que mes données JSON, j'ai mis en place un store avec l'extension Pinia. Cela m'a permis de gérer ma logique de conception sur plusieurs niveaux en centralisant certaines actions dans le store.<br />
                                Le dynamisme est également présent avec la possibilité de trier les articles par prix, par ordre alphabétique, ainsi que selon le thème, l'univers ou la plateforme. Nous pouvons mettre les articles dans un panier qui indique dynamiquement le montant total, et nous pouvons également supprimer les articles à tout moment. Enfin, une page admin a été mise en place afin de gérer le stock.</p>
                            </div>
                        </div>
                        <div className='cardLinks'>
                            <div className='repoLink' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                <a href='https://github.com/DiegoMazenc/turbojoujou' target='_blank'><img className='imgLink' src={githubLogo} alt="" /></a>
                                <div className={`repo ${isHovered ? 'hovered' : ''}`}>
                                    <a href='https://github.com/DiegoMazenc/turbojoujou' target='_blank'> <p>Voir Repositorie</p></a>
                                </div>
                            </div>

                            <a href='https://turbo-jou-jou-8u48.vercel.app/' className='webLink' target='_blank'>voir le site</a>
                        </div>
                    </div>

                </div>
                <div className='CardContenent'>
                    <div className='pasHover'>
                        <img className='imgCard' src={deadfuck} alt="" />
                    </div>
                    <div
                        className={`Hovered Hovered-deadfuck`}
                        onMouseEnter={() => handleHover('deadfuck')}
                        onMouseLeave={() => handleHoverLeave('deadfuck')}
                        onClick={() => { art6 = handleToggle('deadfuck', art6); }}
                    >
                        <div className='titleCard'>
                            <h3>www.deadfuck.fr</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>HTML </p>
                            <p>css</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Netlify</p>
                            <p>OVH</p>
                            <p>Photoshop</p>
                        </div>
                        <div className='descContent'>
                            <div className='cardDesc cardDesctwo'>
                                <p>Réalisation d'un site internet pour un groupe de metal Lyonnais. Ce projet a été élaboré en utilisant framework React, permettant ainsi de créer un site dynamique et réactif. Pour optimiser les fonctionnalités du site, j'ai intégré des bibliothèques modernes telles que Mantine et EmailJS, ajoutant ainsi des éléments interactifs et dynamiques à l'expérience utilisateur.<br />
                                    En plus du développement, j'ai également pris en charge la conception graphique en créant des images promotionnelles percutantes et divers visuels pour mettre en valeur le groupe sous toutes ses facettes. L'ensemble du site a été déployé en ligne sous un nom de domaine dédié, offrant une présence web professionnelle au groupe.</p>
                            </div>
                        </div>
                        <div className='cardLinks'>
                            <div className='repoLink' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                <a href='https://github.com/DiegoMazenc/deadfuck' target='_blank'><img className='imgLink' src={githubLogo} alt="" /></a>
                                <div className={`repo ${isHovered ? 'hovered' : ''}`}>
                                    <a href='https://github.com/DiegoMazenc/deadfuck' target='_blank'> <p>Voir Repositorie</p></a>
                                </div>
                            </div>

                            <a href='https://www.deadfuck.fr/' className='webLink' target='_blank'>voir le site</a>
                        </div>
                    </div>

                </div>

                <div className='CardContenent'>
                    <div className='pasHover'>
                        <img className='imgCard' src={SocialNetwork} alt="" />

                    </div>
                    <div
                        className={`Hovered Hovered-socialNetwork `}
                        onMouseEnter={() => handleHover('socialNetwork')}
                        onMouseLeave={() => handleHoverLeave('socialNetwork')}
                        onClick={() => { art5 = handleToggle('socialNetwork', art5); }}
                    >

                        <div className='titleCard'>
                            <h3>MyTelling.fr</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>PHP</p>
                            <p>PHTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>Bootstrap</p>
                            <p>MySQL</p>
                            <p>PHPMyAdmin</p>
                        </div>
                        <div className='descContent'>
                            <div className='cardDesc cardDesctwo'>
                                <p>Je vous présente un site MVC que j'ai conçu dans le but de créer un petit réseau social. J'ai utilisé PHP avec des Classes instanciées pour structurer et isoler les différentes fonctionnalités du site. Les données sont stockées dans une base de données MySQL gérée par phpMyAdmin. J'ai également intégré des fonctionnalités front-end codées en Ajax pour envoyer des requêtes sous forme de fonctions et récupérer des informations via des API.<br />
                                    Les principales fonctionnalités incluent la possibilité de créer un compte, de se connecter, de changer sa photo de profil et sa photo de bannière, ainsi que de créer des articles. Ces articles sont affichés sur une page d'accueil commune avec ceux d'autres utilisateurs. Les utilisateurs peuvent commenter, liker, ou disliker les articles. De plus, il est possible de suivre un utilisateur grâce à un bouton "Follow" et de ne plus le suivre ultérieurement. Une page d'administration, exclusivement réservée à l'administrateur, permettra de contrôler tous les articles et les utilisateurs.<br />
                                    Le site est actuellement en cours de développement, avec davantage de fonctionnalités passionnantes à venir.</p>
                            </div>
                        </div>
                        <div className='cardLinks'>
                            <div className='repoLink' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                <a href='https://github.com/DiegoMazenc/ReseauSocial' target='_blank'><img className='imgLink' src={githubLogo} alt="" /></a>
                                <div className={`repo ${isHovered ? 'hovered' : ''}`}>
                                    <a href='https://github.com/DiegoMazenc/ReseauSocial' target='_blank'> <p>Voir Repositorie</p></a>
                                </div>
                            </div>
                            <a href='https://www.mytelling.fr/' className='webLink' target='_blank'>voir le site</a>
                        </div>
                    </div>

                </div>

                <div className='CardContenent'>
                    <div className='pasHover'>
                        <img className='imgCard' src={UBB} alt="" />

                    </div>
                    <div
                        className={`Hovered Hovered-UBB`}
                        onMouseEnter={() => handleHover('UBB')}
                        onMouseLeave={() => handleHoverLeave('UBB')}
                        onClick={() => { art4 = handleToggle('UBB', art4); }}
                    >

                        <div className='titleCard'>
                            <h3>Ultimate Battle Bros</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>Photoshop</p>
                            <p>Netlify</p>
                        </div>
                        <div className='descContent'>
                            <div className='cardDesc'>
                                <p>J'ai développé un jeu de combat inspiré de la célèbre licence Super Smash Bros. L'objectif initial était de pratiquer le JavaScript en pur Vanilla et de créer un jeu simple en utilisant un peu d'HTML et de CSS. Au fil de l'exercice, j'ai évolué vers la création d'un jeu dynamique débutant par un menu permettant de paramétrer différentes options.<br />
                                    Les joueurs peuvent choisir de s'affronter à deux sur un clavier, de combattre contre un bot que j'ai programmé avec 9 niveaux de difficulté, ou même de faire s'affronter deux bots l'un contre l'autre. Le jeu propose deux modes : un mode avec un nombre de vies par joueur et un mode chrono qui enregistre le nombre de KO.<br />
                                    En plus, les joueurs ont la possibilité de définir le nombre de dégâts par coup et le nombre de points de guérison. Pour jouer, il suffit de lancer la partie et d'appuyer sur la touche du clavier indiquée en bas de l'écran de votre personnage. Un cœur, permettant de se soigner, apparaîtra aléatoirement dans le jeu, et il faudra appuyer sur la touche indiquée avant votre adversaire.<br />
                                    Le jeu est optimisé pour une expérience de bureau uniquement et offre une immersion totale avec des animations maison, notamment l'expulsion du terrain lorsqu'un joueur atteint 100% de dégâts.<br />
                                    Le jeu est disponible uniquement sur desktop.
                                </p>
                            </div>
                        </div>
                        <div className='cardLinks'>
                            <div className='repoLink' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                <a href='https://github.com/DiegoMazenc/UltimateBattleBros' target='_blank'><img className='imgLink' src={githubLogo} alt="" /></a>
                                <div className={`repo ${isHovered ? 'hovered' : ''}`}>
                                    <a href='https://github.com/DiegoMazenc/UltimateBattleBros' target='_blank'> <p>Voir Repositorie</p></a>
                                </div>
                            </div>
                            <a href='https://ultimate-battle-bros.netlify.app/' className='webLink' target='_blank'>voir le site</a>
                        </div>
                    </div>

                </div>

                <div className='CardContenent'>
                    <div className='pasHover'>
                        <img className='imgCard' src={DashBoard} alt="" />
                    </div>
                    <div
                        className={`Hovered Hovered-DashBoard `}
                        onMouseEnter={() => handleHover('DashBoard')}
                        onMouseLeave={() => handleHoverLeave('DashBoard')}
                        onClick={() => { art3 = handleToggle('DashBoard', art3); }}
                    >

                        <div className='titleCard'>
                            <h3>DashBoard</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>API</p>
                        </div>
                        <div className='descContent'>
                            <div className='cardDesc'>
                                <p>J'ai élaboré un Dashboard conçu pour servir de fond d'écran. L'objectif principal de cet exercice était de récupérer des données à partir de différentes API proposées par divers services et de les intégrer harmonieusement.<br />
                                    Le Dashboard comprend un service météo qui vous fournit des informations en temps réel sur les conditions météorologiques selon votre zone géographique. Pour ceux qui doutent de la précision, il leur suffit de jeter un coup d'œil par la fenêtre pour confirmer que l'API fonctionne correctement. De plus, le fond d'écran se renouvelle à chaque rafraîchissement de la page, J'ai choisi de mettre des images de l'islande et de montagnes.<br />
                                    L'aspect dynamique du Dashboard ne s'arrête pas là. Vous découvrirez également des répliques célèbres de la série Game of Thrones, ajoutant une touche d'épique à votre expérience. De plus, de petits messages contextuels changent à différents moment de la journée, créant une ambiance adaptée à chaque instant.</p>
                            </div>
                        </div>
                        <div className='cardLinks'>
                            <div className='repoLink' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                <a href='https://github.com/DiegoMazenc/Dashboard' target='_blank'><img className='imgLink' src={githubLogo} alt="" /></a>
                                <div className={`repo ${isHovered ? 'hovered' : ''}`}>
                                    <a href='https://github.com/DiegoMazenc/Dashboard' target='_blank'> <p>Voir Repositorie</p></a>
                                </div>
                            </div>
                            <a href='https://diegomazenc.github.io/Dashboard/' className='webLink' target='_blank'>voir le site</a>
                        </div>
                    </div>

                </div>

                <div className='CardContenent'>
                    <div className='pasHover'>
                        <img className='imgCard' src={wolfGang} alt="" />
                    </div>
                    <div
                        className={`Hovered Hovered-wolfGang `}
                        onMouseEnter={() => handleHover('wolfGang')}
                        onMouseLeave={() => handleHoverLeave('wolfGang')}
                        onClick={() => { art2 = handleToggle('wolfGang', art2); }}
                    >

                        <div className='titleCard'>
                            <h3>WolfGang</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                        </div>
                        <div className='descContent'>
                            <div className='cardDesc'>
                                <p>Réalisation un site statique responsive sur le thème de la moto, avec pour objectif de dynamiser la page d'accueil inspirée d'un modèle. Intégration d'un carrousel automatique et de cards ajustables à la taille de l'écran, le tout agrémenté d'une stylisation interactive des éléments pour une expérience immersive.</p>
                            </div>
                        </div>
                        <div className='cardLinks'>
                            <div className='repoLink' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                <a href='https://github.com/DiegoMazenc/wolfgang' target='_blank'><img className='imgLink' src={githubLogo} alt="" /></a>
                                <div className={`repo ${isHovered ? 'hovered' : ''}`}>
                                    <a href='https://github.com/DiegoMazenc/wolfgang' target='_blank'> <p>Voir Repositorie</p></a>
                                </div>
                            </div>
                            <a href='https://diegomazenc.github.io/wolfgang/' className='webLink' target='_blank'>voir le site</a>
                        </div>
                    </div>

                </div>

                <div className='CardContenent'>
                    <div className='pasHover'>
                        <img className='imgCard' src={siteVoyage} alt="" />

                    </div>
                    <div
                        className={`Hovered Hovered-siteVoyage `}
                        onMouseEnter={() => handleHover('siteVoyage')}
                        onMouseLeave={() => handleHoverLeave('siteVoyage')}
                        onClick={() => { art1 = handleToggle('siteVoyage', art1); }}
                    >

                        <div className='titleCard'>
                            <h3>1er Site Mobile-First</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>html</p>
                            <p>css</p>
                        </div>
                        <div className='descContent'>
                            <div className='cardDesc'>
                                <p>Un site réalisé dans le cadre d'un exercice axé sur le Mobile-First. J'y ai intégré des éléments animés récupérés dans certaines bibliothèques de décoration web, ainsi que des effets JavaScript pour dynamiser l'apparition de certains éléments. Rien d'incroyable ici, c'était simplement pour ajouter du contenu. Cependant, si vous avez lu toutes mes descriptions jusqu'ici, c'est que je ne dois pas faire un mauvais travail. Cela flatte ces quelques lignes et me rassure, car vous allez très certainement vous dire, en vous caressant le menton, que je suis un élément intéressant qui dynamisera votre entreprise, de par ma technicité, mon enthousiasme, ma détermination et mon sens de l'humour. Ou au moins, je vous aurai bien fait rire. Le formulaire pour me contacter est juste en dessous. :p
                                </p>
                            </div>
                        </div>
                        <div className='cardLinks'>
                            <div className='repoLink' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                <a href='https://github.com/DiegoMazenc/Mobile-First-Statique' target='_blank'><img className='imgLink' src={githubLogo} alt="" /></a>
                                <div className={`repo ${isHovered ? 'hovered' : ''}`}>
                                    <a href='https://github.com/DiegoMazenc/Mobile-First-Statique' target='_blank'> <p>Voir Repositorie</p></a>
                                </div>
                            </div>
                            <a href='https://diegomazenc.github.io/Mobile-First-Statique/' className='webLink' target='_blank'>voir le site</a>
                        </div>
                    </div>

                </div>


            </div>
        </div >
    );
};

export default Card;
