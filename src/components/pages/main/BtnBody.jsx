import React from "react";
import "../../../styles/style.css";

export const BtnBody = () => {
  return (
    <div className="btn-background-all">
      <div className="hero-btn mx-96">
        <div className="btn-body">
          <div>
            <div className="join-hero">
              <button className="btn join-item circle-btn">
                <img
                  src="/img/icon/group.png"
                  alt=""
                  className="button-image"
                />
              </button>
            </div>
            <p className="button-text">People</p>
          </div>
          <div>
            <div className="join-hero">
              <button className="btn join-item circle-btn">
                <img
                  src="/img/icon/approved.png"
                  alt=""
                  className="button-image"
                />
              </button>
            </div>
            <p className="button-text">Services</p>
          </div>
          <div>
            <div className="join-hero">
              <button className="btn join-item circle-btn">
                <img
                  src="/img/icon/reduction.png"
                  alt=""
                  className="button-image"
                />
              </button>
            </div>
            <p className="button-text">Status</p>
          </div>
          <div>
            <div className="join-hero">
              <button className="btn join-item circle-btn">
                <img
                  src="/img/icon/dollar.png"
                  alt=""
                  className="button-image"
                />
              </button>
            </div>
            <p className="button-text">Finances</p>
          </div>
        </div>
      </div>
    </div>
  );
};
