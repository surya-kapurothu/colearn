import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC modules!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='videos/study.mp4'
              text='Focussed study, while enjoying the breaks you need'
              label='Pomodoro Timer'
              path='/'
            />
            <CardItem
              src='videos/discuss.mp4'
              text='Collaborate and exchange learnings, for deeper understanding'
              label='Feynman Technique'
              path='/'
            />
            <CardItem
              src='videos/revise.mp4'
              text='Active Recall, for stronger retaining of gained learning'
              label='Lietner System'
              path='/'
            />
          </ul>
          <h1>Become a PRO member!</h1>
          <ul className='cards__items'>
            <CardItem
              src='videos/students.mp4'
              text='* Priority matching in Feyman module'
              text2='* Bespoke Youtube content in Pomodoro breaks'
              text3='* Exclusive access to descriptive answer analysis'
              price='Rs. 149/month'
              label='Student Pro'
              path='/products'
            />
            <CardItem
              src='videos/teacher.mp4'
              text='* Student progress analysis and reports'
              text2='* Automation Toolkit and Bot access'
              text3='* Newer activity and homework ideas, everyday'
              price='Rs. 299/month'
              label='Educator Pro'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
