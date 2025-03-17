# Connor Fan's CSE 134B Website - HW 5

This website is my portfolio that will be shown to job recruiters in the future.

Changes made in part 5:

* Created project-cards custom element to display projects and labs.

    * Required for part 1

* Created Load Local and Load Remote buttons in /projects/index.html

    * Required for part 2

* Adjusted navbar css with nowrap attribute

    * Main page text was too low because it used padding that accounted for "Contact Me" and "About Me" using 2 lines of text when screens were narrower.

    * Stopped "Contact Me" and "About Me" from wrapping text

    * Changed all pages padding-top from 2em to 1em, while giving contactme.html extra padding-top for the contact form

* Changed "mobile" screen threshold

    * Since I used the nowrap attributes, the theme-switcher button was squished earlier, so I had to go into "mobile" view at a wider screen resolution.

* Fixed "mobile" menu dropdown

    * Since wider screens could get the "mobile" view, the "Projects" and "Lab" links no longer get dropdown tables in mobile view.

* Fixed page margins and padding

    * Removed gap between page content and edge of web browser by changing body tag in styles.css

* Styled aboutme

    * Styled aboutme.html in aboutme.css to use centered flex column 

    * Looks much nicer and viewable via scrolling

