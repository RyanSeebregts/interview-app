import React from 'react';
import Button from '../components/Button';

interface OwnProps {
}
const Pants = (props: OwnProps) => {
    
    return (
        <div style={{
        width: '100%',
        flexGrow: 1,
        }}>
            <div style={{
                marginTop: '50px',
            }}>
                    <h3>This is the Pants Page</h3>
            </div>
        </div>
    );
}

export default Pants;
