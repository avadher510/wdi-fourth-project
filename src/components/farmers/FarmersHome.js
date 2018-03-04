import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../utility/Modal';

const FarmersHome = () => {
  return(
    <section className="hero">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-4 grow">
            <div className="card border-none">
              <Link to="/farmers"><div className="card-body text-center">
                <img className="cardIcon" src='../assets/find-on-map.png' />
                <h4>Find a farmer</h4>
              </div>
              </Link>
            </div>
          </div>

          <div className="col-4 grow">
            <div className="card border-none">
              <Link to="/farmers/new"><div className="card-body text-center">
                <img className="cardIcon" src='../assets/recommendation.png' />
                <h4>Refer a farmer</h4>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-100"></div>

        <div className="row justify-content-around">
          <div className="col-4 grow">
            <div className="card border-none">
              <Modal />
            </div>
          </div>

          <div className="col-4 grow">
            <div className="card border-none">
              <Link to="/login"><div className="card-body text-center">
                <img className="cardIcon" src='../assets/registration.png' />
                <h4>Sign in/Sign up</h4>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmersHome;
