import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { config, jobdata } from './General_Function'

const JobItem = () => {

    const [content, setContent] = useState([jobdata])

    const FetchData = ()=>{
        let url = 'http://get_data_url';
        axios.get(url, config)
        .then(response =>{
            setContent(response.data.data);
        }) 
    }

    

    useEffect(() =>{
        // FetchData()
    },[]);

  return (
    <div className="section latest-jobs-ads">
    <div className="section-title tab-manu">
      <h4>Latest Jobs</h4>

      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation">
          <a href="#hot-jobs" data-toggle="tab">
            Hot Jobs
          </a>
        </li>
        <li role="presentation">
          <a href="#recent-jobs" data-toggle="tab">
            Recent Jobs
          </a>
        </li>
        <li role="presentation">
          <a className="active" href="#popular-jobs" data-toggle="tab">
            Popular Jobs
          </a>
        </li>
      </ul>
    </div>
    <div className="tab-content">
      <div role="tabpanel" className="tab-pane fade in" 
      id="hot-jobs">

        {content&&content.map((list, id) => 
        <div className="job-ad-item" key={id}>
          <div className="item-info">
            <div className="item-image-box">
              <div className="item-image">
                <a href="/job-details">
                  <img
                    src={list.image}
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="ad-info">
              <span>
                <a href="/job-details" className="title">
                  {list.title}
                </a>{" "}
                @ <a href="#">{list.company}</a>
              </span>
              <div className="ad-meta">
                <ul>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>
                      {list.office}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      Full Time
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-money" aria-hidden="true"></i>
                      ${list.min_salary} - ${list.max_salary}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                      {list.location}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="button">
              <a href={"/job-details/"+list.id} className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
        </div>)}
   
      </div>
     
      <div
        role="tabpanel"
        className="tab-pane fade in active show"
        id="popular-jobs"
      >
   
        <div className="job-ad-item">
          <div className="item-info">
            <div className="item-image-box">
              <div className="item-image">
                <a href="/job-details">
                  <img
                    src="images/job/4.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="ad-info">
              <span>
                <a href="/job-details" className="title">
                  Human Resource Manager
                </a>{" "}
                @ <a href="#">Dropbox Inc</a>
              </span>
              <div className="ad-meta">
                <ul>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>
                      San Francisco, CA, US{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      Full Time
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-money" aria-hidden="true"></i>
                      $25,000 - $35,000
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                      HR/Org. Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="button">
              <a href="#" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default JobItem