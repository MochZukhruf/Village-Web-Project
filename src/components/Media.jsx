import React from "react";
import "../styles/media.css";

export const Media = () => {
  return (
    <div className="mx-96">
      <div className="content">
        <div className="media-left">
          <td>
            <div className="recent-news">
              <i>Media Left</i>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    <tr className="hover">
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    <tr>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </div>
        <div className="media-right">
          <div className="structure">
            <i>Media Right</i>
          </div>
        </div>
      </div>
    </div>
  );
};
