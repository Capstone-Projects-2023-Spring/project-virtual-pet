import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProjectReadme from "../components/ReademeMD";
import styles from './index.module.css';
import MDXContent from '@theme/MDXContent';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1EJMUpbfZ9whOF?utm_source=generator&theme=0"
          width="100%"
          height="200"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>

      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <HomepageHeader/>
        <main>
            <MDXContent>
                <ProjectReadme/>
            </MDXContent>
        </main>
    </Layout>
  );
}
