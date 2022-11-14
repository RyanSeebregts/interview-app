import React from 'react';

interface OwnProps {
    locations: string[]
    goBackClick: () => void
    locationClick: (location: string) => void
}
const LocationViewer = (props: OwnProps) => {
    const {
        locations,
        locationClick,
        goBackClick
    } = props
    return (
        <div style={{
            marginTop: '20px'
        }}>
            <button 
                style={{
                    cursor: 'pointer'
                }}
                onClick={goBackClick}
            >
                Go Back
            </button>
            <div style={{
                width: '100%',
                display: 'flex',
            }}>
                {
                    locations.map((prop, key) => 
                        <React.Fragment>
                            {
                                key !== 0 &&
                                    '/ '
                            }
                            <div 
                                style={{
                                    cursor: 'pointer'
                                }}
                                onClick={() => locationClick(prop)}
                            >
                                {`${prop} `}
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        </div>
    );
}

export default LocationViewer;
