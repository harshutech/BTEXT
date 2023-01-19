import React from "react";
function About() {
  return (
    <div className="my-5 mx-5">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is WordCounter?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Apart from counting words and characters, our online editor can
              help you to improve word choice and writing style, and,
              optionally, help you to detect grammar mistakes and plagiarism. To
              check word count, simply place your cursor into the text box above
              and start typing. You'll see the number of characters and words
              increase or decrease as you type, delete, and edit them. You can
              also copy and paste text from another program over into the online
              editor above. The Auto-Save feature will make sure you won't lose
              any changes while editing, even if you leave the site and come
              back later. <b>Tip: Bookmark this page now.</b>
              <br />
              <br />
              Knowing the word count of a text can be important. For example, if
              an author has to write a minimum or maximum amount of words for an
              article, essay, report, story, book, paper, you name it.
              WordCounter will help to make sure its word count reaches a
              specific requirement or stays within a certain limit.
              <br />
              <br />
              In addition, WordCounter shows you the top 10 keywords and keyword
              density of the article you're writing. This allows you to know
              which keywords you use how often and at what percentages. This can
              prevent you from over-using certain words or word combinations and
              check for best distribution of keywords in your writing.
              <br />
              <br />
              In the Details overview you can see the average speaking and
              reading time for your text, while Reading Level is an indicator of
              the education level a person would need in order to understand the
              words you’re using.
              <br />
              <br />
              Disclaimer: We strive to make our tools as accurate as possible
              but we cannot guarantee it will always be so.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
