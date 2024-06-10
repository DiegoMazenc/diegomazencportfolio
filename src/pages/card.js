import React, { useState, useEffect } from 'react';
import wolfGang from '../img/portfolio/wolfgang.jpg';
import DashBoard from '../img/portfolio/DashBoard.jpg';
import siteVoyage from '../img/portfolio/siteVoyage.jpg';
import SocialNetwork from '../img/portfolio/SocialNetwork.jpg';
import UBB from '../img/portfolio/UBB.jpg';
import deadfuck from '../img/portfolio/deadfuck.jpg';
import turbojoujou from '../img/portfolio/turboJoujou.jpg';
import symtour from '../img/portfolio/Symtour.jpg';
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
    let art8 = true;

    const handleToggle = (cardId, active) => {
        if (window.innerWidth < 700) {
            let card = document.querySelector(`.Hovered-${cardId}`);
            if (active) {
                card.classList.add('Hovered-hover');
                active = false;
            } else {
                card.classList.remove('Hovered-hover');
                active = true;
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
                        <img className='imgCard' src={symtour} alt="" />
                    </div>
                    <div
                        className={`Hovered Hovered-symtour`}
                        onMouseEnter={() => handleHover('symtour')}
                        onMouseLeave={() => handleHoverLeave('symtour')}
                        onClick={() => { art8 = handleToggle('symtour', art8); }}
                    >
                        <div className='titleCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 257" className="logoFrameWork"><circle cx="128" cy="128.827" r="128" fill="white"/><path fill="black" d="M183.706 48.124c-12.986.453-24.32 7.61-32.757 17.51c-9.342 10.855-15.557 23.73-20.035 36.872c-8.01-6.565-14.19-15.064-27.041-18.77c-9.933-2.852-20.366-1.674-29.96 5.474c-4.545 3.395-7.676 8.527-9.165 13.351c-3.855 12.537 4.053 23.694 7.645 27.7l7.853 8.416c1.619 1.65 5.518 5.955 3.612 12.127c-2.06 6.71-10.15 11.055-18.448 8.495c-3.706-1.13-9.03-3.891-7.838-7.779c.493-1.59 1.631-2.78 2.241-4.155c.56-1.181.827-2.067.997-2.587c1.516-4.95-.555-11.39-5.857-13.025c-4.946-1.516-10.007-.315-11.969 6.054c-2.225 7.235 1.237 20.366 19.783 26.084c21.729 6.676 40.11-5.155 42.717-20.586c1.642-9.665-2.722-16.845-10.717-26.08l-6.514-7.204c-3.946-3.942-5.301-10.661-1.217-15.825c3.446-4.356 8.354-6.215 16.392-4.029c11.733 3.186 16.963 11.327 25.69 17.893c-3.603 11.819-5.958 23.682-8.09 34.32l-1.299 7.931c-6.238 32.721-11 50.688-23.375 61.003c-2.493 1.773-6.057 4.427-11.429 4.612c-2.816.087-3.726-1.85-3.765-2.694c-.067-1.977 1.599-2.883 2.706-3.773c1.654-.902 4.155-2.398 3.985-7.191c-.18-5.664-4.872-10.575-11.654-10.35c-5.08.173-12.823 4.954-12.532 13.705c.303 9.039 8.728 15.813 21.43 15.384c6.79-.233 21.952-2.997 36.895-20.76c17.392-20.362 22.256-43.705 25.915-60.79l4.084-22.556c2.269.272 4.695.453 7.334.516c21.661.457 32.496-10.763 32.657-18.924c.107-4.939-3.241-9.799-7.928-9.689c-3.355.095-7.57 2.328-8.582 6.968c-.988 4.552 6.893 8.66.733 12.65c-4.376 2.832-12.221 4.828-23.269 3.206l2.009-11.103c4.1-21.055 9.157-46.954 28.341-47.584c1.398-.071 6.514.063 6.633 3.446c.035 1.13-.245 1.418-1.568 4.005c-1.347 2.017-1.855 3.734-1.792 5.707c.185 5.376 4.273 8.909 10.185 8.696c7.916-.256 10.193-7.963 10.063-11.921c-.32-9.3-10.122-15.175-23.1-14.75"/></svg>
                            <h3>www.symtour.com</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>Symfony</p>
                            <p>Twig</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                            <p>Ajax</p>
                            <p>API</p>
                            <p>MySQL</p>
                            <p>PHPUnit</p>
                            <p>AWS</p>
                            <p>Hostinger</p>
                        </div>
                        <div className='descContent'>
                            <div className='cardDesc cardDesctwo'>
                            <p>Le projet a été réalisé avec le framework Symfony. Symtour est un outil permettant aux musiciens et aux professionnels du spectacle de réserver des dates pour organiser des concerts.<br/>
                                L'idée est de permettre à un utilisateur de créer un compte et, à partir de son espace personnel, d'accéder aux différentes pages où il est membre. Un utilisateur pourra créer une page "projet musical" où il définira son style musical, sa localisation et son identité. Cette page pourra accueillir d'autres membres auxquels des rôles seront attribués selon les instruments qu'ils jouent dans le projet. Un utilisateur pourra également créer une page "salle de concert", y entrer ses informations et inviter des membres travaillant dans cette salle en leur attribuant également des rôles selon leur corps de métier.<br/>
                                La spécificité de cette application est que les utilisateurs ayant un projet musical pourront faire des demandes de réservation pour des dates à partir d'une page dédiée. Cette page de recherche regroupe les salles et un système de filtrage dynamique, réalisé à partir d'une API que j'ai conçue, permettra de cibler des salles de concert selon les styles musicaux acceptés, la zone géographique ou les dates disponibles.<br/>
                                Un calendrier interactif, entièrement conçu en Javascript, est relié aux données des entités via des API. Ce calendrier, présent sur les tableaux de bord des salles de concert, des projets musicaux ainsi que sur la page de réservation, permet de gérer les demandes de réservation ainsi que les événements validés par les salles et les groupes.<br/>
                                Enfin, chaque page pourra gérer ses événements et inviter d'autres projets musicaux pour compléter un plateau de scène.<br/>
                                Afin de tenir informés les utilisateurs liés à un événement, un système de notifications a été mis en place pour avertir des réponses des salles de concerts, des invitations et des annulations d'événements.</p>
                            </div>
                        </div>
                        <div className='cardLinks'>
                            <div className='repoLink' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                <a href='https://github.com/DiegoMazenc/Symtour' target='_blank'><img className='imgLink' src={githubLogo} alt="" /></a>
                                <div className={`repo ${isHovered ? 'hovered' : ''}`}>
                                    <a href='https://github.com/DiegoMazenc/turbojoujou' target='_blank'> <p>Voir le Repositorie</p></a>
                                </div>
                            </div>

                            <a href='https://symtour.com/' className='webLink' target='_blank'>voir le site</a>
                        </div>
                    </div>

                </div>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 221" className="logoFrameWork"><path fill="#41b883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"/><path fill="#41b883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"/><path fill="#35495e" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"/></svg>
                            <h3>Turbo Joujou</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>HTML </p>
                            <p>CSS</p>
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
                                    <a href='https://github.com/DiegoMazenc/turbojoujou' target='_blank'> <p>Voir le Repositorie</p></a>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 228" className="logoFrameWork"><path fill="#00d8ff" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"/></svg>
                            <h3>www.deadfuck.fr</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>

                        <div className='cardStacks'>
                            <p>HTML </p>
                            <p>CSS</p>
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
                                    <a href='https://github.com/DiegoMazenc/deadfuck' target='_blank'> <p>Voir le Repositorie</p></a>
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
                                    <a href='https://github.com/DiegoMazenc/ReseauSocial' target='_blank'> <p>Voir le Repositorie</p></a>
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
                                    <a href='https://github.com/DiegoMazenc/UltimateBattleBros' target='_blank'> <p>Voir le Repositorie</p></a>
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
                                    <a href='https://github.com/DiegoMazenc/Dashboard' target='_blank'> <p>Voir le Repositorie</p></a>
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
                                    <a href='https://github.com/DiegoMazenc/wolfgang' target='_blank'> <p>Voir le Repositorie</p></a>
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
                                    <a href='https://github.com/DiegoMazenc/Mobile-First-Statique' target='_blank'> <p>Voir le Repositorie</p></a>
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
