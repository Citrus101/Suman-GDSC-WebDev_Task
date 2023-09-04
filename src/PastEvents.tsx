import {Card} from "./Card"
import styles from "./PastEvents.module.css"



import flutterImage from "./Images/CardImages/Flutter.png"
function Card1(){
  const Title ="Flutter Festival GDSC DJSCE";
  const Info = <>
    <p>Mar 1, 2022</p>
    <p>Speaker Session / Tech Talk - Virtual</p>
    <p>✨ GDSC DJSCE, in collaboration with GDSC VIT Mumbai, GDSC VJTI, GDSC UMIT, and GDSCMIET presents, Shrihriday Bhagwat, a self-taught Flutter developer and the Founder and CEO of Codeaamy coming in to help you in getting started with Flutter</p>
    </>
  return(
    <>
    <Card image={flutterImage} title={Title} info={Info}></Card>
    </>
  )
}

import AndroidJamImage01 from "./Images/CardImages/Android Jam.webp"
function Card2(){
  const Title ="Android Study Jams 2021 - Session 3";
  const Info = <>
    <p>Dec 11, 2021</p>
    <p>Android Study Jams: Prior Programming Experience - Virtual</p>
    <p>About 60+ registrations. 5 completed the entire course and 2 of them also built an app which was an optional task.
  </p>
    </>
  return(
    <>
    <Card image={AndroidJamImage01} title={Title} info={Info}></Card>
    </>
  )
}

import AndroidJamImage02 from "./Images/CardImages/Android Jam.webp"
function Card3(){
  const Title ="Android Study Jam Session 2: Build app from scratch";
  const Info = <>
    <p>Dec 6, 2021</p>
    <p>Android Study Jams: New to Programming - Virtual</p>
    <p>This session gave a kick start to Android Development journey, we build a Blood Donation application from scratch, we dive into basic concepts of native development. </p>
    </>
  return(
    <>
    <Card image={AndroidJamImage02} title={Title} info={Info}></Card>
    </>
  )
}

import AndroidJamImage03 from "./Images/CardImages/Android Jam.webp"
function Card4(){
  const Title ="Android Study Jams 2021 - Info Session";
  const Info = <>
    <p>Dec 1, 2021</p>
    <p>Android Study Jams: New to Programming - Virtual</p>
    <p>This is an event series for people who wish to be an Android Developer or for those with a desire to learn something new. With Android Study Jam, you will have the opportunity to learn both Java(Native) and Kotlin</p>
    </>
  return(
    <>
    <Card image={AndroidJamImage03} title={Title} info={Info}></Card>
    </>
  )
}

import UIUXImage from "./Images/CardImages/UI-UX.webp"
function Card5(){
  const Title ="PixelHacks";
  const Info = <>
    <p>Nov 29, 2021</p>
    <p>Speaker Session / Tech Talk - Virtual</p>
    <p>Ever wondered what makes a user’s experience with an application so satisfying? UI/UX design is the key! 👾 🖥️GDSC DJSCE🖥️ and ⚡DJCSI⚡ present 👾PixelHacks👾, a comprehensive workshop on UI/UX! Join us on our journey to learn UI/UX Design! ✨ 🗣️: Ruchita Parmar, UX </p>
    </>
  return(
    <>
    <Card image={UIUXImage} title={Title} info={Info}></Card>
    </>
  )
}


export const PastEvents = () => {


  return (
    <>
      <div className={styles.pastContainer}>
        <h1>Past Events</h1>
        <div className={styles.cardGrid}>
          {Card1()}
          {Card2()}
          {Card3()}
          {Card4()}
          {Card5()}
        </div>
      </div>
    </>
  );
};
