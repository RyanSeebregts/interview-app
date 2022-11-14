import React from 'react';
import Button from '../components/Button';

interface OwnProps {
    openPage: (page: string) => void
}
const About = (props: OwnProps) => {
    const {
        openPage
    } = props
    return (
        <div style={{
        width: '100%',
        flexGrow: 1,
        }}>
            <div style={{
                marginTop: '50px',
            }}>
                    <Button marginTop={'10px'} title="About Us" clickHandler={() => openPage('us')} />
                    <Button marginTop={'10px'} title="FAQ" clickHandler={() => openPage('faq')} />
                    <Button marginTop={'10px'} title="Contact Us" clickHandler={() => openPage('contact')} />
            </div>
        </div>
    );
}

export default About;
