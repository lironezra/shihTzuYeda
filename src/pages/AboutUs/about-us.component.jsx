import React from 'react';

import ImageBanner from '../../components/Shared/ImageBanner/image-banner.component';
import ShihtzuBannerPhoto from '../../assets/images/shihtzu-running.jpg';
import userLogo from '../../assets/icons/user-profile-icon-6.jpg';

import './about-us.styles.scss';

const AboutUsPage = () => {
    return (
        <>
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
                    <div className="card">
                        <div className="profile-img">
                            <img src={userLogo} alt="" />
                        </div>
                        <div className="card-description">
                            <h3>מירי וויזנברג</h3>
                            <p>מנהלת הקבוצה</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="profile-img">
                            <img src={userLogo} alt="" />
                        </div>
                        <div className="card-description">
                            <h3>מיכל כהן</h3>
                            <p>סגנית מנהלת</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="profile-img">
                            <img src={userLogo} alt="" />
                        </div>
                        <div className="card-description">
                            <h3>אירנה מקרנקו</h3>
                            <p>סגנית מנהלת</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsPage;