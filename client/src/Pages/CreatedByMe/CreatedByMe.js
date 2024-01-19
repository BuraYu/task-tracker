import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './CreatedByMe.css'

const OpenTasks = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Navbar className="navbar" />
        <div className="content--container">
          <div className="open-tasks--container-fin">
            <table id="tasks">
              <thead>
                <th>Title</th>
                <th>created on</th>
                <th>status</th>
                <th>Priority</th>
                <th>Owner</th>
              </thead>
              <tbody>
                <tr>
                  <td>Do this</td>
                  <td>Do that</td>
                  <td>Don't do anything</td>
                  <td>Test this</td>
                  <td>Hurr durr</td>
                </tr>
                <tr>
                  <td>Do this</td>
                  <td>Do that</td>
                  <td>Don't do anything</td>
                  <td>Test this</td>
                  <td>Hurr durr</td>
                </tr>
                <tr>
                  <td>Do this</td>
                  <td>Do that</td>
                  <td>Don't do anything</td>
                  <td>Test this</td>
                  <td>Hurr durr</td>
                </tr>
                <tr>
                  <td>Do this</td>
                  <td>Do that</td>
                  <td>Don't do anything</td>
                  <td>Test this</td>
                  <td>Hurr durr</td>
                </tr>
                <tr>
                  <td>Do this</td>
                  <td>Do that</td>
                  <td>Don't do anything</td>
                  <td>Test this</td>
                  <td>Hurr durr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="open-tasks--container-res">
            <span>Click on a task for details</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default OpenTasks
