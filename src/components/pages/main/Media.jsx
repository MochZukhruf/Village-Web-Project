import React from "react";
import "../../../styles/style.css";

export const Media = () => {
  return (
    <div className="background-media">
      <div className="mx-96">
        <div className="container">
          <div className="table-media">
            <p className="left-title">Media</p>
            <div className="overflow-x-auto">
              <div className="media-table">
                <table className="table media-table">
                  <tbody>
                    {/* row */}
                    <tr>
                      <td>Link 1</td>
                      <td>Link 2</td>
                      <td>Link 3</td>
                    </tr>
                    <tr>
                      <td>Link 1</td>
                      <td>Link 2</td>
                      <td>Link 3</td>
                    </tr>
                    <tr>
                      <td>Link 1</td>
                      <td>Link 2</td>
                      <td>Link 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
