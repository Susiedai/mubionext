/* ================================================================
   ANNOUNCEMENTS
   Short notices shown on the home page and the News & events page.
   Example:
   {text:"Your announcement here.", until:"2026-12-01"},
   - until (optional, YYYY-MM-DD): the announcement hides after this date
   - link, linkText (optional): adds a link/button to the announcement
   - image, imageAlt (optional): small picture shown at the right (it links to `link`)
   - featured:true, title (optional): shows it as a large banner at the
     very top of the home page
   ================================================================ */

const announcements = [
  {text:"Friday, November 20 is the last day of early registration by appointment for Spring 2027, and the graduation application priority deadline for December 2026 graduates. Talk with your advisor about your spring schedule.",
   link:"https://registrar.missouri.edu/academic-calendar/", linkText:"Dates and deadlines", until:"2026-11-20"},
  {text:"NSF ERC CURB shares industry internship and co-op openings for summer and fall 2027 with Nestlé Purina, Evonik, Ameren, and MilliporeSigma. Apply early, since many companies fill spots on a rolling basis. See the flyer for details and contact information.",
   link:"flyers/CURB_Internships_Nov2026.pdf", linkText:"CURB internship flyer", image:"images/CURB_Internships_thumb.png", imageAlt:"Thumbnail of the CURB industry internships flyer", until:"2027-04-20"},
  {text:"Thank you to all the students who came to the Let Us Chat Pizza Party. We look forward to meeting again in the first week of next semester.", until:"2026-12-31"},
  {text:"Monday, December 7 is the last day to withdraw from a course or from the term. Talk with your advisor before you withdraw.",
   link:"https://registrar.missouri.edu/academic-calendar/", linkText:"Dates and deadlines", until:"2026-12-07"},
  {featured:true, title:"End of the fall semester",
   text:"Fall semester classwork ends Friday, December 11, and final examinations run December 14–18. Check the final exam schedule for the time of each of your exams.",
   link:"https://registrar.missouri.edu/academic-calendar/final-exam-schedule/", linkText:"Final exam schedule", until:"2026-12-18"},
  {text:"Spring 2027 classwork begins Tuesday, January 19. Regular registration runs January 11–15, and January 26 is the last day to register, add, or change sections.",
   link:"https://registrar.missouri.edu/academic-calendar/", linkText:"Dates and deadlines", until:"2027-01-26"}
];
