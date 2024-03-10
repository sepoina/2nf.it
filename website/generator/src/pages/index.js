import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { Hero, ImageAndText, CtaCards, TextCards, FeatureShowcase, CtaImageButton, icons } from '@site/src/components';
import { EsOpenSource } from '../theme/sections/os-projects';
import { EsOsFreebies } from '../theme/sections/os-freebies';


export default function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName='es-footer-white'
		>
			<Hero
				title='Vite React dal volto umano'
				subtitle='Componenti, hooks, appunti ed utility per la piattaforma React in ambito es6 - Vite.'
				buttons={[
					{ url: '#GiancarloGhigi', label: 'Chi sono' },
					{ url: '#get-started', label: 'Progetti in evidenza' },
				]}
				imageUrl='./img/homepage/team-work-monochromatic-94953.svg'

			/>

			<ImageAndText
				title='&lt;Translate&gt; un solo componente per tutte le traduzioni'
				imageUrl='./img/homepage/web-developer-two-color.svg'
				gray
			>
				Semplificare la vita a chi scrive componenti
				<br /> <br />
				Rollup di vite e babel possono essere integrati ad un sistema di traduzioni automatico che cattura tutti gli elementi statici e testuali del tuo progetto
				e li converte in una tabella di traduzioni (che puoi usare per sottoporla a ChatGPT o ad altri sistemi di traduzione).
				Il tutto lasciando il codice pulito e semplificato.
				Un solo componente: <b>&lt;Translate&gt;</b>
				<br /> <br />
				vedi il progetto viteTranslate!
			</ImageAndText>

			<div id='get-started'>
				<br />
				<CtaCards
					title='React Hooks e plugins'
					subtitle="Vite e React sono tutti funzionali. Ecco i progetti in evidenza"
					cards={[
						// icons
						// LINK - 2nf.it/website/generator/src/components/icons/index.jsx:4
						{
							icon: icons.uxDesigner,
							text: <>&lt;Translate&gt;<br />che altro?</>,
							buttonLabel: 'New theme',
							buttonUrl: '/docs/theme',
						},
						{
							icon: icons.react,
							text: <>useShared<br /> l'hook scalabile</>,
							buttonLabel: 'New plugin',
							buttonUrl: '/docs/plugin',
						}
					]}
				/>
			</div>

			<TextCards
				title='Risorse open source'
				subtitle="Ogni progetto open source si basa su risorse esistenti. Sostieni la comunità open source!"
				cards={[
					{
						title: 'Eightshift Theme',
						subtitle: <span>Il tema utilizzato per realizzare questo sito è un fork dell'ultimo <a href="https://www.npmjs.com/package/@infinum/docusaurus-theme" className='marker'><b>Tema infinum</b></a> e del progetto <a href="https://github.com/infinum/eightshift-docs" className='marker'><b>Eightshift Docs</b></a> per docusaurus.</span>
					},
					{
						title: 'Manypixels SVG',
						subtitle: <span>Le grafiche di questo sito sono derivate dal progetto <a href="https://www.manypixels.co/gallery" className='marker'><b>Manypixels</b></a> dove puoi trovare i dettagli di licenza.</span>
					}
				]}
			/>
			<div id='GiancarloGhigi'>
				<br /> <br />
				<FeatureShowcase
					title={<>
						<span style={{
							color: 'rgba(0, 0, 0,0.7)',
							transform: 'scale(3.5) translate(-5%, 22%)',
							display: 'inline-block',
							zIndex: '0',
							position: 'absolute',
							opacity: '0.1'
						}}>
							2nf
						</span>
						<br />
						<span style={{
							color: 'rgb(0, 0, 0)',
							textShadow: '0px 0px 13px #fff',
							filter: 'drop-shadow(-3px -3px 16px white)',
							position: 'relative',
							zIndex: '1000'
						}}>
							Giancarlo Ghigi
						</span>
					</>}
					text={
						<span>
							<br /><br />
							Mi occupo da molti anni di programmazione e comunicazione/facilitazione, puoi vedere il mio <a href="https://www.linkedin.com/in/giancarlo-ghigi" className='marker'><b>LinkedIn</b></a> per i dettagli. Ultimamenente sto sviluppando nell'ambiente React componenti, hooks e plugin per vite. Ho deciso di mettere
							alcuni frammenti del mio lavoro online su <a href="https://github.com/sepoina" className='marker'><b>GitHub</b></a> e soprattutto nelle sezioni docs
							di questo sito per tenere traccia della loro evoluzione.
							Se vuoi contribuire o contattarmi usa questo indirizzo <a href="mailto:giancarlo.ghigi@gmail.com" className='marker'><b>mail</b></a> o i link a fondo pagina.
						</span>
					}
					imageUrl='./img/homepage/checklist-isometric-34096.svg'
					gray
				/>
			</div>
			{
				/*
			<EsOpenSource />
			<EsOsFreebies />

				*/
			}

		</Layout>
	);
}
