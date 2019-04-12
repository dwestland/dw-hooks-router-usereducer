import React from 'react'

export default function About() {

  return (
    <div>
      <h2>About</h2>

      <hr />

      <h1>Heading</h1>
      <h2>Sub Heading</h2>
      <h3>Sub Sub Heading</h3>
      <h4>Sub Sub Sub Heading</h4>
      <h5>Sub Sub Sub Sub Heading</h5>
      <h6>Sub Sub Sub Sub Sub Heading</h6>
      <p>Paragraph</p>
      <i>Italic</i>

      <div class="image-grid">
        <div class="image-fit">
          <img class="image-fit-placeholder" src="images/icons/homescreen48.png" alt="" />
          <img class="image-fit-img" src="https://images.computerhistory.org/timeline/timeline_computers_1964.cdc6600.jpg" alt="Old computer" />
        </div>
      </div>
      <div class="image-grid">
        <div class="image-fit">
          <img class="image-fit-placeholder" src="images/icons/homescreen48.png" alt="" />
          <img class="image-fit-img" src="https://images.computerhistory.org/timeline/timeline_computers_1949.csirac.jpg" alt="Old computer" />
        </div>
      </div>
      <div class="image-grid">
        <div class="image-fit">
          <img class="image-fit-placeholder" src="images/icons/homescreen48.png" alt="" />
          <img class="image-fit-img" src="https://images.computerhistory.org/timeline/timeline_computers_1943.whirlwind.jpg" alt="Old computer" />
        </div>
      </div>

    </div>
  )
}
