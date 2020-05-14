import React from 'react';

import ImageBanner from '../../components/Shared/ImageBanner/image-banner.component';
import Card from '../../components/Card/card.component';
import userLogo from '../../assets/icons/user-profile-icon-6.jpg';

import './about-us.styles.scss';
import ShihtzuBannerPhoto from '../../assets/images/shihtzu-running.jpg';

const TEAM_MANAGERS = [
    {fullName: "מירי וויזנברג", jobTitle: "מנהלת הקבוצה"},
    {fullName: "מיכל כהן", jobTitle: "סגנית מנהלת"},
    {fullName: "אירנה מקרנקו", jobTitle: "סגנית מנהלת"}
];

const AboutUsPage = () => {
    return (
        <div className="about-us-page-container">
            <ImageBanner image={ShihtzuBannerPhoto} />
            <section className="about-the-team-section">
                <h1>קצת על הקבוצה שלנו...</h1>
                <p>
                    <strong>שיצו קבוצת הידע לאוהבי הגזע<br /></strong>
                    <br />  
                    חברים יקרים,<br />
                    ברוכים הבאים לקבוצה איכותית וחמה לאוהבי ומגדלי גזע השיצו.<br />
                    מטרת הקבוצה היא שיתוף ידע, טיפים ומידע מקצועי על אהובנו וחברנו הטוב.<br />
                    כמו כן, תמונות וסרטונים יתקבלו באהבה גדולה!!!<br />
                    אצלנו יש במה ומקום בלב לכ-ו-ל-ם, כל כלב הוא עולם ומלואו, יחיד ומיוחד, ולכן כל תוכן קשור יתקבל בברכה!<br />
                    
                    <strong style={{color: '#cc3300'}}>אין</strong> לפרסם זיווגים, תמונות שגר, מכירת כלבים וגורים בקבוצה זו (תוכן מסוג זה יוסר).<br />
                    בעלי עסקים, אין לפרסם שרותים/מוצרים בקבוצה.<br />
                     אין להוציא/לפרסם כל מידע שמופיע בקבוצה או באתר.<br />
                    בנוסף, נבקש לשמור על כבוד הדדי ותרבות דיון.<br />
                    ע"מ לכבד חברים רגישים, תמונות קשות לצפיה, יש לשים בתגובה הראשונה.<br />
                    אז למה אתם מחכים?! 
                </p>
            </section>
            <section className="team-managers-section">
                <h1>מנהלות הקבוצה</h1>
                <div className="manager-cards">
                    {
                        TEAM_MANAGERS.map((m, i) => <Card 
                                                        key={i} 
                                                        cardName={m.fullName} 
                                                        cardDesc={m.jobTitle} 
                                                        image={userLogo}/>)
                    }
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;