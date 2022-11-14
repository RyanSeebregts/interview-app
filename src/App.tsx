import React, { useState } from 'react';
import LocationViewer from './components/LocationViewer';
import About from './pages/About';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Jackets from './pages/Jackets';
import Pants from './pages/Pants';
import Shop from './pages/Shop';
import Tshirt from './pages/Tshirt';

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(['home'])

  const goBackHandler = () => {
    const newArr = [...currentLocation]
    newArr.splice(newArr.length - 1, 1)
    setCurrentLocation(newArr)
  }

  const locationClickHandler = (location: string) => {
    const index = currentLocation.indexOf(location)
    console.log(location)
    if(index > -1) {
      const newArr = [...currentLocation]
      newArr.length = index + 1
      setCurrentLocation(newArr)
    }
  }

  const openPageHandler = (page: string) => {
    const newArr = [...currentLocation]
    newArr.push(page)
    setCurrentLocation(newArr)
  }

  const getPageHandler = () => {
    console.log(currentLocation[currentLocation.length - 1])
    switch(currentLocation[currentLocation.length - 1]) {
      case 'home':
        return (
          <Home 
            openPage={openPageHandler}
          />
        )
      case 'about':
        return (
          <About 
            openPage={openPageHandler}
          />
        )
      case 'shop':
        return (
          <Shop 
            openPage={openPageHandler}
          />
        )
      case 'us':
        return (
          <AboutUs 
          />
        )
      case 'faq':
        return (
          <FAQ 
          />
        )
      case 'contact':
        return (
          <Contact 
          />
        )
      case 'jackets':
        return (
          <Jackets 
          />
        )
      case 'pants':
        return (
          <Pants 
          />
        )
      case 't-shirts':
        return (
          <Tshirt 
          />
        )
    }
  }

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div 
        style={{
          maxWidth: '700px',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <LocationViewer 
          locations={currentLocation}
          goBackClick={goBackHandler}
          locationClick={locationClickHandler}
        />
        {
          getPageHandler()
        }

      </div>
      
    </div>
  );
}

export default App;
