import React from 'react'
import 'tailwindcss/tailwind.css';


import FeatureCard from './FeatureCard'
import GalleryCard3 from './GalleryCard3'
import Question from './Question'

function Presentation ()  {
  return (
    <div className="w-full flex overflow-auto min-h-screen items-center flex-col">

<div className="flex-initial w-full h-auto flex items-start justify-center bg-gray-900">

<div className="w-full flex max-w-7xl h-auto items-center pt-24 px-12 flex-col pb-24 justify-center">

<div className="gap-8 flex items-center flex-col justify-start">

<h1 className="bg-gradient-to-r from-cyan-400 to-light-blue-500 text-transparent bg-clip-text max-w-2xl text-center font-raleway leading-snug md:text-6xl  text-3xl">
  HomeSphere : Votre solution intégrée d'automatisation à domicile
</h1>

<span className="text-white text-lg text-center leading-snug">
  Simplifiez votre quotidien avec notre solution complète d'automatisation domestique
</span>
<div className="gap-6 flex items-center flex-row border-2 border-dashed border-gray-300">
</div>

          </div>
        </div>
      </div>
      <div className="flex-initial w-full h-auto flex items-center justify-center">
  <div className="w-full flex flex-col md:flex-row max-w-7xl items-center pt-16 px-12 pb-16 justify-between">
    <div className="flex-1 flex items-start flex-col justify-start mb-8 md:mb-0">
      <span className="text-[#5228f5ff] text-left font-raleway mb-6 md:text-2xl">
        <span>Details</span>
        <br></br>
      </span>
      <h2 className="w-4/5 md:text-left text-center font-raleway leading-snug mb-6 md:text-4xl text-2xl">
        Simplifiez votre quotidien avec notre solution complète d'automatisation domestique
      </h2>
      <span className="text-gray-600 md:text-lg text-left leading-snug mb-8">
        Créez et personnalisez des scénarios automatisés en fonction de vos besoins spécifiques"
      </span>
    </div>
    <img
      alt="image"
      src="https://images.unsplash.com/photo-1608592922139-5e2b42df53aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2NXw&ixlib=rb-4.0.3&q=80&w=400"
      className="w-100 h-100 object-cover ml-16 rounded-full"
    />
  </div>
</div>

      <div className="flex-initial w-full h-auto flex items-center justify-center">
  <div className="flex-initial w-full flex items-center flex-col justify-center bg-gray-100">
    <div className="gap-12 w-full flex max-w-7xl items-center pt-16 px-12 flex-col pb-16 justify-start">
      <div className="flex items-center flex-col justify-start">
        <span className="text-[#5228f5ff] font-raleway mb-6 md:text-2xl">
          <span>features</span>
          <br></br>
        </span>
        <h2 className="font-raleway leading-snug mb-6 text-4xl">
          Fonctionnalités Clés
        </h2>
            </div>
            <div className="w-full grid gap-8 md:grid-cols-2 grid-cols-1">
              <FeatureCard
                Heading="Contrôle des Appareils"
                SubHeading="Contrôle précis des lumières, climatisation, caméras de sécurité, serrures de porte."
              ></FeatureCard>
              <FeatureCard
                Heading="Personnalisation des Scénarios"
                SubHeading="Création et personnalisation de scénarios automatisés en fonction des besoins spécifiques."
              ></FeatureCard>
              <FeatureCard
                Heading="Compatibilité Multiplateforme"
                SubHeading="Intégration aisée avec une variété d'appareils et de marques pour une interopérabilité optimale."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-initial w-full h-auto flex items-center justify-center border-2 border-dashed border-gray-300">
</div>
<div className="flex-initial w-full h-auto flex items-center justify-center">
  <div className="gap-6 w-full flex max-w-7xl items-center pt-16 px-12 flex-col pb-16">
    <h1 className="text-center font-raleway leading-snug md:text-4xl text-2xl">
      Découvrez notre solution domotique en images
    </h1>
    <span className="text-gray-600 text-center leading-snug px-12">
      Explorez les fonctionnalités de HomeSphere à travers ces images captivantes
    </span>
    <div className="w-full grid gap-4 mt-8 md:grid-cols-4   grid-cols-2">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1461151304267-38535e780c79?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1509660933844-6910e12765a0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1530546171585-cc042ea5d7ab?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="flex-initial w-full h-auto flex items-center justify-center bg-gray-900">
  <div className="gap-6 w-full flex max-w-7xl items-center pt-24 px-20 flex-col pb-24 justify-start ">
    <h1 className="text-white md:text-4xl text-2xl text-center font-raleway leading-snug">
      Control Your Home with Ease
    </h1>
    <span className="text-white max-w-7xl text-center leading-snug">
      Manage your lights, air conditioning, security cameras, and door locks with precision
    </span>
    <button className="text-white font-semibold py-6 transition duration-300 ease-in-out border-0 px-12 rounded-full bg-gradient-to-r from-cyan-400 to-light-blue-500">
      Explore Features
    </button>
  </div>
</div>
<div className="flex-initial w-full h-auto flex items-center justify-center">
  <div className="flex-initial w-full flex items-center flex-row justify-center">
    <div className="gap-8 w-full flex max-w-7xl items-start pt-16 px-12 flex-row pb-16">
      <div className="flex max-w-35% items-start flex-col justify-start">
        <span className="text-[#5228f5ff] font-raleway mb-6">
          <span>FAQ</span>
          <br></br>
        </span>
      </div>
      <div className="gap-6 flex items-start flex-col">
              <Question
                Answer="Les fonctionnalités clés de HomeSphere incluent le contrôle précis des appareils domestiques tels que les lumières, la climatisation, les caméras de sécurité et les serrures de porte. Il permet également la création et la personnalisation de scénarios automatisés en fonction des besoins spécifiques. De plus, HomeSphere offre une compatibilité multiplateforme, ce qui signifie qu'il peut être intégré facilement avec une variété d'appareils et de marques pour une interopérabilité optimale."
                Question="Quelles sont les fonctionnalités clés de HomeSphere ?"
              ></Question>
              <Question
                Answer="Le projet HomeSphere comprend trois phases de développement. La phase 1 consiste en la conception d'une interface conviviale et le développement des fonctionnalités de base de l'application. La phase 2 implique la création d'un hub domotique robuste pour la connexion, la gestion sécurisée et la synchronisation des appareils. Enfin, la phase 3 comprend des tests rigoureux, des ajustements et un déploiement progressif."
                Question="Quelles sont les phases de développement du projet HomeSphere ?"
              ></Question>
              <Question
                Answer="Les principales contraintes du projet HomeSphere sont les délais et le budget. Il est essentiel de respecter les échéances fixées et d'optimiser l'utilisation des ressources allouées. De plus, la sécurité des données est une priorité absolue pour garantir la confidentialité et la sécurité des informations échangées."
                Question="Quelles sont les contraintes du projet HomeSphere ?"
              ></Question>
              <Question
                Answer="Dans l'équipe du projet HomeSphere, le chef de projet est responsable de la supervision globale, de la gestion des délais et des ressources. L'équipe de développement est chargée de la conception, du développement, des tests et de la maintenance de l'application."
                Question="Quels sont les rôles et responsabilités dans l'équipe du projet HomeSphere ?"
              ></Question>
              <Question
                Answer="Les critères de succès du projet HomeSphere sont d'avoir des fonctionnalités opérationnelles qui permettent un contrôle fiable et réactif des appareils, réduisant ainsi les tâches manuelles. De plus, l'interface doit être intuitive, offrant une expérience utilisateur fluide et personnalisable pour faciliter l'interaction avec la solution."
                Question="Quels sont les critères de succès du projet HomeSphere ?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-initial w-full h-auto flex items-center justify-center bg-black border-2 border-dashed border-gray-300">
</div>

    </div>
  )
}

export default Presentation
