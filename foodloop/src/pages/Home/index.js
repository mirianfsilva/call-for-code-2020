import React from 'react';
import Menu from '../../components/Navbar'
import FooterPage from '../../components/Footer';
import OurProposal from '../../components/Proposal';
import Opening from '../../components/Opening';

function Home() {
    return (
        <div style={{ background: "#fcfdf4" }}>
            <Menu />
            <Opening></Opening>
            <OurProposal />
            <FooterPage />
        </div>
    );
}

export default Home;