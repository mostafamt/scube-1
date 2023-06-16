import React from 'react';
import Footer from '../../../Footer-1/Footer';
import Menu from '../../../Menu/Menu';

const StudyRoom = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Menu />
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1>SMART STUDY ROOM in YOUR FAVORITE LANGUAGE</h1>
        <p>
          If you feel that the lesson is hard to study in English, you can use
          your favorite language. If your eyes are tired to read, listen to the
          narration.
        </p>
        <p>
          You will not leave the room until you finish your study, you can take
          notes, learning terminology and new words. More importantly, your
          class teacher will go with you to the Smart Study Room at your own
          study time
        </p>
        <video width="600" height="450" controls>
          <source
            src="https://res.cloudinary.com/dapspj9n8/video/upload/v1686629369/Smart-Objects-Course-Player-m_tuzsik.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <br />
        <video width="600" height="450" controls>
          <source
            src="https://res.cloudinary.com/dapspj9n8/video/upload/v1686629737/smart_lesson_Demo_tppqjz.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <Footer />
    </div>
  );
};

export default StudyRoom;
