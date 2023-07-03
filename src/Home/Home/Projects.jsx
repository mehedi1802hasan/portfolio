import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-center text-teal-900">Projects</h3>
      <p className="text-center">Here is my showcase to display all of My Project</p>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div>
          <div className="border-2 border-black shadow-xl card w-96 bg-base-100">
            <figure>
              <div className="image-container">
                <img
                  className="scrolling-image"
                  src="https://i.ibb.co/pKft7DG/sportcamp.jpg   "
                  alt="Shoes"
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes, whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-2 border-black shadow-xl card w-96 bg-base-100">
          <figure>
              <div className="image-container">
                <img
                  className="scrolling-image"
                  src="https://i.ibb.co/LRNYgVm/learn-toyss.jpg"
                  alt="learntoy"
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes, whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-2 border-blue-900 shadow-xl card w-96 ">
          <figure>
              <div className="image-container">
                <img
                  className="scrolling-image"
                  src="https://i.ibb.co/9GBzMdx/kitcheass.jpg"
                  alt="Shoes"
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes, whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
