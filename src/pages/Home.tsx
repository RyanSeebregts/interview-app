import React from 'react';
import Button from '../components/Button';

interface OwnProps {
    openPage: (page: string) => void
}
const Home = (props: OwnProps) => {
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
                    <Button marginTop="10px" title="About" clickHandler={() => openPage('about')} />
                    <Button marginTop="10px" title="Shop" clickHandler={() => openPage('shop')} />
            </div>
        </div>
    );
}

export default Home;
