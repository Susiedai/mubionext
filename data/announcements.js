/* ================================================================
   ANNOUNCEMENTS
   Short notices shown on the home page and the News & events page.
   Example:
   {text:"Your announcement here.", until:"2026-12-01"},
   - until (optional, YYYY-MM-DD): the announcement hides after this date
   - link, linkText (optional): adds a link/button to the announcement
   - featured:true, title (optional): shows it as a large banner at the
     very top of the home page
   ================================================================ */

const announcements = [
  {featured:true, title:"U.S. Senate Internship Opportunities for Engineering Students",
   text:"Tuesday, November 10, 11:00 a.m.–12:00 p.m. in Lafferre Hall. Meet Morgan Corder, Director of Field Operations for U.S. Senator Eric Schmitt, for an informal discussion of internships in constituent services, community engagement, and policy development. Students interested in government, public policy, and careers beyond engineering are welcome.", until:"2026-11-10"},
  {text:"Thank you to all the students who came to the Let Us Chat Pizza Party. We look forward to meeting again in the first week of next semester.", until:"2026-12-31"},
  {text:"The CUAHSI Water Science Exchange, “Water in Working Landscapes,” comes to the University of Missouri November 12–14. Registration closes October 29.",
   link:"https://www.cuahsi.org/community/water-science-exchange", linkText:"Event details", until:"2026-11-14"},
  {text:"Spring 2027 registration begins October 7. Talk with your advisor about your spring schedule before you register.", until:"2026-11-30"}
];
