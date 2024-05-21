import React from "react";
import "../styles/body.css";

export const Body = () => {
  return (
    <div className="px-96">
      <div className="content">
        <div>
          <div className="left-content">
            <td>
              <div className="recent-news">
                <i>Recent</i>
              </div>
              <tr>
                <div className="recent-content">
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="card-figure">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        alt="Album"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Today News</h2>
                      <p>
                        Click the button to read the news for today and maybe
                        you gonna find something new
                      </p>
                      <div className="card-actions justify-end">
                        <p className="date-content">Date : 2024</p>
                        <button className="btn btn-primary">Listen</button>
                      </div>
                    </div>
                  </div>
                </div>
              </tr>
            </td>
          </div>
        </div>
        <div className="right-content">
          <div className="announcement">
            <i>Announcement</i>
          </div>
          <td>
            <tr>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" id="accordion-1" className="hidden" />
                <label
                  htmlFor="accordion-1"
                  className="collapse-title text-xl font-medium"
                >
                  Day 1 : Regret
                </label>
                <div className="collapse-content">
                  <p>Regereting all of the things</p>
                </div>
              </div>
            </tr>
          </td>
          <div></div>
        </div>
      </div>
    </div>
  );
};
