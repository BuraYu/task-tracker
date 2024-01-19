import React from 'react'

import './DetailsView.css'

const DetailsView = () => {
  return (
    <div className="open-tasks--container-res">
      <div className="details-view-title-container">
        <span>unique id: some id</span>
        <button class="btn-close">X</button>
      </div>
      <hr></hr>
      <h1>Title of the task</h1>
      <h4>creator</h4>
      <hr></hr>
      <div className="status-task">
        <div className="select">
          <label htmlFor="">Priority</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="select">
          <label htmlFor="">Priority</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="select">
          <label htmlFor="">Priority</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <hr></hr>

      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus
        perferendis rem rerum laboriosam veniam beatae accusantium porro
        expedita voluptatem molestiae, itaque maxime dolor labore vitae, vero
        facilis blanditiis soluta odit dolores repudiandae necessitatibus. Totam
        accusamus reiciendis dolore tempora eaque nostrum saepe repellat,
        asperiores delectus rem odio laudantium officiis modi voluptatibus. Vel
        id voluptate dolore aliquid voluptatem eaque facere at ipsam dolor iure.
        Laborum odio fugit aliquid maiores qui praesentium vero rem
        exercitationem laudantium quam, nam placeat? Accusamus, error suscipit.
        Natus, aspernatur! Ducimus dolorum deserunt assumenda fuga! Harum facere
        itaque commodi, culpa, neque eaque repellendus aperiam dignissimos amet
        ut illo.
      </span>
      <hr></hr>
      <form>
        <label htmlFor=""></label>
        <textarea name="postContent" rows={5} cols={50} />
      </form>
      <button type="submit">Add comment</button>

      <hr></hr>
    </div>
  )
}
export default DetailsView
