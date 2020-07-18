import React from 'react';

import './events.styles.scss';

import CustomTabs from '../../components/CustomTabs/custom-tabs.component';

const TABS_DATA = {
  tabsName: ['אירועים שהיו', 'אירועים קרובים'],
  // Each TabPanel is set of food images
  tabPanels: [
    [
      {
        name: 'מנגו',
        img:
          'https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/allow-foods%2Fmango.jpg?alt=media&token=8eab08a4-1a4b-49e4-bc20-9573305a7349'
      },
      {
        name: 'בקר,עוף, הודו, כבש, דגים',
        img:
          'https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/allow-foods%2Fmeat.jpg?alt=media&token=68a4532b-0daa-4166-8d7c-e039463323ee'
      }
    ],
    [
      {
        name: 'פסטה',
        img:
          'https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/allowed-in-low-doses%2Fpasta.jpg?alt=media&token=49f68698-5485-415c-9e12-5ed0ee72db5e'
      }
    ],
    [
      {
        name: 'בצל',
        img:
          'https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/allowed-in-low-doses%2Fonions.jpg?alt=media&token=e97f44f5-7f39-4be3-992b-68bc1b90c1a2'
      },
      {
        name: 'שום',
        img:
          'https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/allowed-in-low-doses%2Fgarlic.jpg?alt=media&token=d6453d52-c116-4f4d-b3f4-611ee8a4180b'
      }
    ]
  ]
};

const EventsPage = () => {
  return (
    <div className='events-page-container'>
      {/* <div className="header">
        <h2>אירועי הקבוצה</h2>
      </div> */}

      <CustomTabs tabsName={TABS_DATA.tabsName} />

      <br />

      <div className='event-card-container'>
        <div className='ev-card-left'>
          <span className='day'>4</span>
          <span className='month'>אוק</span>
        </div>
        <div className='ev-card-middle'>
          <img
            className='ev-image'
            src='https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1590229835/shih-tzu-yeda/Events/festidog-2019_h5quil.jpg'
            alt='event'
          />
        </div>
        <div className='ev-card-rigth'>
          <h2>מפגש שיצוידע סוכות</h2>
          <p>גן העיר, תל אביב, 15:00.</p>
        </div>
      </div>
      <div className='event-card-container'>
        <div className='ev-card-left' style={{ backgroundColor: '#ffcc99' }}>
          <span className='day'>4</span>
          <span className='month'>אוק</span>
        </div>
        <div className='ev-card-middle'>
          <img
            className='ev-image'
            src='https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589988127/shih-tzu-yeda/Events/sukkot-event-2019_nud4j3.jpg'
            alt='event'
          />
        </div>
        <div className='ev-card-rigth'>
          <h2>מפגש שיצוידע סוכות</h2>
          <p>גן העיר, תל אביב, 15:00.</p>
        </div>
      </div>
      <div className='event-card-container'>
        <div className='ev-card-left' style={{ backgroundColor: '#ffc87c' }}>
          <span className='day'>4</span>
          <span className='month'>אוק</span>
        </div>
        <div className='ev-card-middle'>
          <img
            className='ev-image'
            src='https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1590229520/shih-tzu-yeda/Events/purim-event-2019_x6aott.jpg'
            alt='event'
          />
        </div>
        <div className='ev-card-rigth'>
          <h2>מפגש שיצוידע סוכות</h2>
          <p>גן העיר, תל אביב, 15:00.</p>
        </div>
      </div>
      <div className='event-card-container'>
        <div className='ev-card-left' style={{ backgroundColor: '#ffa089' }}>
          <span className='day'>4</span>
          <span className='month'>אוק</span>
        </div>
        <div className='ev-card-middle'>
          <img
            className='ev-image'
            src='https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1590229645/shih-tzu-yeda/Events/xabi-3-birthday_anfnzr.jpg'
            alt='event'
          />
        </div>
        <div className='ev-card-rigth'>
          <h2>מפגש שיצוידע סוכות</h2>
          <p>גן העיר, תל אביב, 15:00.</p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
