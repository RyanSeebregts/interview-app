import React from 'react';
import Button from '../components/Button';

interface OwnProps {
    openPage: (page: string) => void
}
const Shop = (props: OwnProps) => {
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
                    <Button marginTop={'10px'} title="T-shirts" clickHandler={() => openPage('t-shirts')} />
                    <Button marginTop={'10px'} title="Pants" clickHandler={() => openPage('pants')} />
                    <Button marginTop={'10px'} title="Jackets" clickHandler={() => openPage('jackets')} />
            </div>
        </div>
    );
}

export default Shop;
