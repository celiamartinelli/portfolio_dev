import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub } from 'react-icons/fa';
import Header from '../../Header/Header';
import './HomePage.scss';
import Form from '../../Form/Form';

export default function HomePage() {
  const [text] = useTypewriter({
    words: ['passionnée', 'curieuse', 'touche à tout', 'développeuse web'],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div>
      <div>
        <Header className="z-10" />

        <div className="overflow-hidden">
          <div className="text-lg mt-40 text-center m-5">
            <h1>Hi, I'm Célia Martinelli, Nice to meet you</h1>
            <div>
              <h1 className="text-4xl">
                Je suis <span>{text}</span>
                <Cursor cursorColor="green" />
              </h1>
            </div>
            <p className="text-m">
              Je m'efforce de créer des expériences numériques uniques et
              engageantes
            </p>
          </div>
        </div>

        <div>
          <div
            id="portfolio"
            className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5"
          >
            <h2 className="text-2xl font-bold text-center">
              Bienvenue sur mon portfolio
            </h2>
            <p className="text-center">
              Je suis développeuse web passionné par la création de solutions
              logicielles efficaces et innovantes. J'ai une solide expérience en
              JavaScript, React, Node.js et d'autres technologies de
              développement web. J'ai travaillé sur de nombreux projets
              passionnants et j'ai acquis une solide expérience dans divers
              domaines du développement web.
            </p>
            <div className="flex items-center justify-center">
              <a
                className="flex flex-col items-center justify-center text-center bg-emerald-500 text-white py-2 px-4 rounded shadow transition ease-in duration-25 transform hover:scale-95 focus:outline-none"
                href="https://github.com/celiamartinelli?tab=overview&from=2024-04-01&to=2024-04-30"
              >
                <FaGithub className="text-5xl" />
                Voir mon travail sur GitHub
              </a>
            </div>
          </div>
          <div
            id="about"
            className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5"
          >
            <h2 className="text-2xl font-bold text-center">À propos de moi</h2>
            <p className="text-center">
              J'aime résoudre des problèmes complexes et créer des solutions
              logicielles qui ont un impact réel. Je suis toujours à la
              recherche de nouvelles opportunités pour apprendre et grandir en
              tant que développeur. Si vous êtes intéressé par mon travail ou si
              vous souhaitez discuter d'une opportunité potentielle, n'hésitez
              pas à me contacter.
            </p>
            <div>
              <h2 className="text-center font-bold">HardSkill</h2>
              <ul className="flex flex-wrap justify-center">
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-500 text-white m-1">
                  React
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-500 text-white m-1">
                  Node.js
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-500 text-white m-1">
                  JavaScript
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-500 text-white m-1">
                  HTML
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-500 text-white m-1">
                  CSS
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-500 text-white m-1">
                  React Native
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-500 text-white m-1">
                  Supabase
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-500 text-white m-1">
                  Expo
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-500 text-white m-1">
                  TaildwindCSS
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-center font-bold">SofSkill</h2>
              <ul className="flex flex-wrap justify-center">
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-800 text-white m-1">
                  Capacité d'adaptation
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-800 text-white m-1">
                  Motivation
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-800 text-white m-1">
                  Gestion du Temps
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-800 text-white m-1">
                  Autodiscipline
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-800 text-white m-1">
                  Résolution de prioblème
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-800 text-white m-1">
                  Curiosité
                </li>
                <li className="mr-2 py-1 px-2 rounded  bg-emerald-800 text-white m-1">
                  Sens de la communication
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div
              id="contact"
              className=" bg-white bg-opacity-50 rounded-2xl p-7 m-5"
            >
              <h2 className="text-2xl font-bold text-center">Contactez-moi</h2>
              <p className="text-center">
                Vous pouvez m'envoyer un email à monadresseemail@example.com ou
                me suivre sur les réseaux sociaux. J'aimerais avoir de vos
                nouvelles et discuter de la façon dont nous pourrions travailler
                ensemble pour créer quelque chose de grand.
              </p>
              <div className="flex justify-center">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
