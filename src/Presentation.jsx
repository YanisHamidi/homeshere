import React from 'react'

import FeatureCard from './FeatureCard'
import GalleryCard3 from './GalleryCard3'
import Question from './Question'

function Presentation ()  {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        overflow: 'auto',
        minHeight: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          flex: '0 0 auto',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#5228f5ff',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            maxWidth: '1400px',
            minHeight: 'auto',
            alignItems: 'center',
            paddingTop: '96px',
            paddingLeft: '48px',
            paddingRight: '48px',
            flexDirection: 'column',
            paddingBottom: '96px',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              gap: '32px',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <h1
              style={{
                color: '#FFFFFF',
                maxWidth: '800px',
                textAlign: 'center',
                fontFamily: '"Raleway"',
                lineHeight: 1.6,
                fontSize: '3.5rem', 
              }}
            >
              HomeSphere : Votre solution intégrée d'automatisation à domicile
            </h1>
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '18px',
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              Simplifiez votre quotidien avec notre solution complète d'automatisation domestique
            </span>
            <div
              style={{
                gap: '24px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                border: '2px dashed rgba(120, 120, 120, 0.4)',
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        style={{
          flex: '0 0 auto',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            maxWidth: '1400px',
            alignItems: 'center',
            paddingTop: '64px',
            paddingLeft: '48px',
            paddingRight: '48px',
            paddingBottom: '64px',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              flex: '1',
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <span
              style={{
                color: '#5228f5ff',
                textAlign: 'left',
                fontFamily: '"Raleway"',
                marginBottom: '24px',
                fontSize: '1.5rem'
              }}
            >
              <span>Details</span>
              <br></br>
            </span>
            <h2
              style={{
                width: '80%',
                textAlign: 'left',
                fontFamily: '"Raleway"',
                lineHeight: 1.6,
                marginBottom: '24px',
                fontSize: '2.5rem',
              }}
            >
              Simplifiez votre quotidien avec notre solution complète d'automatisation domestique
            </h2>
            <span
              style={{
                color: '#595959',
                fontSize: '18px',
                textAlign: 'left',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              Créez et personnalisez des scénarios automatisés en fonction de vos besoins spécifiques"
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1608592922139-5e2b42df53aa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            style={{
              width: '400px',
              height: '400px',
              objectFit: 'cover',
              marginLeft: '64px',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>
      <div
        style={{
          flex: '0 0 auto',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            flex: '0 0 auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#eff0f2ff',
          }}
        >
          <div
            style={{
              gap: '48px',
              width: '100%',
              display: 'flex',
              maxWidth: '1400px',
              alignItems: 'center',
              paddingTop: '64px',
              paddingLeft: '48px',
              paddingRight: '48px',
              flexDirection: 'column',
              paddingBottom: '64px',
              justifyContent: 'flex-start',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <span
                style={{
                  color: '#5228f5ff',
                  fontFamily: '"Raleway"',
                  marginBottom: '24px',
                  fontSize: '1.5rem'
                }}
              >
                <span>features</span>
                <br></br>
              </span>
              <h2
                style={{
                  fontFamily: '"Raleway"',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                  fontSize: '2.5rem'
                }}
              >
                Fonctionnalités Clés
              </h2>
              
            </div>
            <div
              style={{
                width: '100%',
                display: 'grid',
                gridGap: '32px',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
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
      <div
        style={{
          flex: '0 0 auto',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed rgba(120, 120, 120, 0.4)',
        }}
      ></div>
      <div
        style={{
          flex: '0 0 auto',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            gap: '24px',
            width: '100%',
            display: 'flex',
            maxWidth: '1400px',
            alignItems: 'center',
            paddingTop: '64px',
            paddingLeft: '48px',
            paddingRight: '48px',
            flexDirection: 'column',
            paddingBottom: '64px',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontFamily: '"Raleway"',
              lineHeight: 1.6,
            }}
          >
            Découvrez notre solution domotique en images
          </h1>
          <span
            style={{
              color: 'rgb(153, 153, 153)',
              textAlign: 'center',
              lineHeight: 1.6,
              paddingLeft: '48px',
              paddingRight: '48px',
            }}
          >
            Explorez les fonctionnalités de HomeSphere à travers ces images
            captivantes
          </span>
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridGap: '16px',
              marginTop: '32px',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
            }}
          >
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
              image_src="https://images.unsplash.com/photo-1533499966477-9333968a4e28?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1498409505433-aff66f7ba9e6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1524061511843-fd43443e3cb2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1530546171585-cc042ea5d7ab?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTQzMjI2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
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
      <div
        style={{
          flex: '0 0 auto',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
        }}
      >
        <div
          style={{
            gap: '24px',
            width: '1400px',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '96px',
            paddingLeft: '80px',
            paddingRight: '80px',
            flexDirection: 'column',
            paddingBottom: '96px',
            justifyContent: 'flex-start',
          }}
        >
          <h1
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: '"Raleway"',
              lineHeight: 1.6,
            }}
          >
            Control Your Home with Ease
          </h1>
          <span
            style={{
              color: '#FFFFFF',
              maxWidth: '1400px',
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            Manage your lights, air conditioning, security cameras, and door
            locks with precision
          </span>
          <button
            style={{
              color: '#FFFFFF',
              fontWeight: '700',
              paddingTop: '1.5rem',
              transition: '0.3s',
              borderWidth: '0px',
              paddingLeft: '3rem',
              borderRadius: '45px',
              paddingRight: '3rem',
              paddingBottom: '1.5rem',
              backgroundColor: '#291477ff',
            }}
          >
            Explore Features
          </button>
        </div>
      </div>
      <div
        style={{
          flex: '0 0 auto',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            flex: '0 0 auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              gap: '32px',
              width: '100%',
              display: 'flex',
              maxWidth: '1400px',
              alignItems: 'flex-start',
              paddingTop: '64px',
              paddingLeft: '48px',
              paddingRight: '48px',
              flexDirection: 'row',
              paddingBottom: '64px',
            }}
          >
            <div
              style={{
                display: 'flex',
                maxWidth: '35%',
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <span
                style={{
                  color: '#5228f5ff',
                  fontFamily: '"Raleway"',
                  marginBottom: '24px',
                }}
              >
                <span>FAQ</span>
                <br></br>
              </span>
            </div>
            <div
              style={{
                gap: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
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
      <div
        style={{
          flex: '0 0 auto',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          border: '2px dashed rgba(120, 120, 120, 0.4)',
        }}
      ></div>
    </div>
  )
}

export default Presentation
