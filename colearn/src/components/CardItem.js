import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <video className='cards__item__img' autoPlay loop muted>
                <source src={props.src} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='cards__item__text'>{props.text2}</h5>
            <h5 className='cards__item__text'>{props.text3}</h5>
            <h4 className='cards__item__amount'>{props.price}</h4>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
