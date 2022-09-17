import * as React from "react";

import Layout from "@components/Layout";

import CardContentInfo from "@components/CardContentInfo";

import CardContentMedia from "@components/CardContentMedia";

import OmnihRoomsImg from "@images/works/omnihrooms/img02.png";
import SpkMhsImg from "@images/works/spkmahasiswa/img01.png";
import OmniHotelImg from "@images/works/omnihotelier/img02.png";
import BislokaImg from "@images/works/bisloka/img02.png";
import InnovationProjectImg from "@images/works/innovation-app/img01.png";

import "@sass/pages/Work.scss";

const WorkPage = () => (
    <Layout>
        <div className="work">
            <div className="work__page-title-wrapper">
                <h1 className="work__page-title-wrapper__title">Work</h1>
                <p className="txt-large">Client projects and other professional work.</p>
            </div>
            <div className="work__page-content-wrapper">
                {/*Innovation App*/}
                <div className="work__page-content-wrapper__content">
                    <CardContentMedia>
                        <img src={InnovationProjectImg} alt="Preview of Inovation App Project"/>
                    </CardContentMedia>

                    <CardContentInfo 
                        title="Innovation App Admin Panel" 
                        desc="Frontend of Admin Panel for Innovation Project. Build with Next JS and Typescript"
                        tags={['Web App Development', 'Front End Development', 'Next JS', 'Typescript', 'Chakra UI']}
                    />
                </div>

                {/*OmniH Rooms*/}
                <div className="work__page-content-wrapper__content">
                    <CardContentMedia>
                        <img src={OmnihRoomsImg} alt="Preview of Omni Rooms Project"/>
                    </CardContentMedia>

                    <CardContentInfo 
                        title="Omnih Rooms" 
                        desc="Omni Hotelier Booking Engine with new UI Interfaces. Using Nuxt JS for Frontend Tech Stack and Laravel for Backend API"
                        tags={['Web App Development', 'Full Stack Development', 'Nuxt JS', 'Laravel']}
                    />
                </div>

                {/*SPK Mahasiswa*/}
                <div className="work__page-content-wrapper__content">
                    <CardContentMedia>
                        <img src={SpkMhsImg} alt="Preview of SPK Mahasiswa Project"/>
                    </CardContentMedia>

                    <CardContentInfo 
                        title="Sistem Pendukung Keputusan Beasiswa" 
                        desc="A Decision Support System created to determine which students are eligible for scholarships "
                        tags={['Web App Development', 'Full Stack Development', 'Laravel']}
                    />
                </div>

                {/*Omni Hotelier Extranet*/}
                <div className="work__page-content-wrapper__content">
                    <CardContentMedia>
                        <img src={OmniHotelImg} alt="Preview of Omni Hotelier Extranet Project"/>
                    </CardContentMedia>

                    <CardContentInfo 
                        title="Omni Hotelier Extranet" 
                        desc="Backend Dashboard of Omni Hotelier that use to setup everything that property owner needs before they can start selling rooms at omni hotelier booking engine."
                        tags={['Web App Development', 'Back End Development', 'Vue JS', 'Laravel', 'Docker']}
                    />
                </div>

                {/* Bisloka */}
                <div className="work__page-content-wrapper__content">
                    <CardContentMedia>
                        <img src={BislokaImg} alt="Preview of Bisloka Project"/>
                    </CardContentMedia>

                    <CardContentInfo 
                        title="Bisloka Official Website" 
                        desc="Official Website of Bisloka that build to help people on finding transportation for traveling or want to going to some places that far away"
                        tags={['Web App Development', 'Full Stack Development', 'Laravel']}
                    />
                </div>
            </div>
        </div>
    </Layout>
);

export default WorkPage;