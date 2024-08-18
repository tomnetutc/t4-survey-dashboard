import { HomeProps } from "@types";

import {  Hero } from "@components";

export default async function Home({ searchParams }: HomeProps) {
 

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold' style={{ marginTop: '2rem' }}>About </h1>
          <section style={{ textAlign: "justify" }}>
          <p>In 2019, four universities comprising the TOMNET (Transformative Transportation Technologies) and D-STOP Tier 1 University Transportation Centers, namely, Arizona State University, Georgia Tech, The University of Texas at Austin, and University of South Florida, conducted a survey to understand traveler attitudes, behaviors, and mobility and lifestyle choices in the context of new mobility services and rapidly evolving transportation technologies. An identical survey was administered to a random sample of individuals in the four metro regions of Phoenix, Atlanta, Tampa, and Austin.</p>
          <h1 className='text-4xl font-extrabold' style={{ marginTop: '1rem' }}>  </h1>
          <p> Emerging transportation technologies including electric and autonomous vehicles and emerging mobility services such 
as ride-hailing and vehicle sharing are bringing about transformative changes in the transportation landscape. With the 
emergence of new transportation technologies and services, it is critical that transportation forecasting models be 
enhanced to account for behavioral dynamics that will result from the increasing penetration of disruptive forces in the 
transportation marketplace. To enhance transportation forecasting models, people’s attitudes towards and perceptions of 
emerging technologies and services need to be measured and understood. Armed with such an understanding, it will be 
possible to specify and develop behavioral models that account for attitudes and perceptions, adoption cycles, and 
adaptation patterns. It is envisioned that such models will help decision-makers better plan transportation infrastructure 
systems and design marketing and policy strategies that maximize the benefits of these disruptive technologies. With this 
background, the T4 survey (TOMNET Transformative Transportation Technologies Survey) has been designed and 
deployed in the previous stages of this large-scale survey based research projects. </p>
<h1 className='text-4xl font-extrabold' style={{ marginTop: '1rem' }}>  </h1>
<p>The survey intended to collect very 
detailed and in-depth data about people’s mobility patterns, as well as attitudes towards and perceptions of emerging 
transportation options such as ridehailing services and autonomous vehicles. The third phase of this research project 
focuses on the compilation and analysis of survey data in order to better understand people’s preferences and choices for 
future mobility options and technologies in the Greater Phoenix metropolitan area. A comprehensive description of all 
the steps taken to full deployment, data cleaning, and weighting is provided, in addition to a descriptive weighted 
univariate illustration of the findings from the Phoenix survey sample.</p></section>
<h1 className='text-4xl font-extrabold' style={{ marginTop: '2rem' }}>Data Collection  </h1>
          <section style={{ textAlign: "justify" }}>
          <p> Based on the pilot deployment results that used both a paper survey instrument sent by mail and
an online survey invited by email, the project leadership team decided to implement the full 
deployment only in the online form using the Qualtrics software. In addition to the savings in cost, 
the online survey method provided a higher quality of the responses with a smaller number of 
incomplete responses and the platform allows the implementation of logic conditions that increase 
the efficiency and provide a respondent-specific design of the survey. To overcome the potential 
bias that an email-only invitation may produce toward respondents with regular access to email, 
survey invitations were also mailed out to physical addresses providing the participants with the 
online survey link. On the mail-out postcards, it was mentioned t hat we can mail out the actual 
paper questionnaire if the respondents are willing to complete the survey exclusively on the paper,
for which we didn’t get any requests in the Arizona deployment.</p></section>


 <h1 className='text-4xl font-extrabold text-center' style={{ marginTop: '2rem' }}>Team</h1>       
 <section className="text-center" style={{ marginTop: '2rem' }}>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '150px', textAlign: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <a href="https://search.asu.edu/profile/3243599" target="_blank" className="text-decoration-none">
        <figure className="figure">
          <img src='ibatur.jpg' className="figure-img img-fluid" alt="Irfan Batur" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
          <figcaption className="figure-caption" style={{ fontWeight: 'bold' }}>Irfan Batur</figcaption>
          <figcaption className="figure-caption">Role: Principal Investigator</figcaption>
          <figcaption className="figure-caption" style={{ fontStyle: 'italic' }}>Arizona State University</figcaption>
        </figure>
      </a>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
      <a href="https://search.asu.edu/profile/980477" target="_blank" className="text-decoration-none">
        <figure className="figure">
          <img src='rpendyala.png' className="figure-img img-fluid" alt="Ram M. Pendyala" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
          <figcaption className="figure-caption" style={{ fontWeight: 'bold' }}>Ram M. Pendyala</figcaption>
          <figcaption className="figure-caption">Role: Principal Investigator</figcaption>
          <figcaption className="figure-caption" style={{ fontStyle: 'italic' }}>Arizona State University</figcaption>
        </figure>
      </a>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <a href="https://sustainability-innovation.asu.edu/person/sara-khoeini/" target="_blank" className="text-decoration-none">
        <figure className="figure">
          <img src='sKhoeini.jpg' className="figure-img img-fluid" alt="Sara Khoeini" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
          <figcaption className="figure-caption" style={{ fontWeight: 'bold' }}>Sara Khoeini</figcaption>
          <figcaption className="figure-caption">Role: Associate or Co-investigator</figcaption>
          <figcaption className="figure-caption" style={{ fontStyle: 'italic' }}>Arizona State University</figcaption>
        </figure>
      </a>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <a href="https://www.linkedin.com/in/dhairyamgajjar/" target="_blank" className="text-decoration-none">
        <figure className="figure">
          <img src='dgajjar.jpg' className="figure-img img-fluid" alt="Dhairya Gajjar" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
          <figcaption className="figure-caption" style={{ fontWeight: 'bold' }}>Dhairya Mitesh Gajjar</figcaption>
          <figcaption className="figure-caption">Role: Developer</figcaption>
          <figcaption className="figure-caption" style={{ fontStyle: 'italic' }}>Arizona State University</figcaption>
        </figure>
      </a>
    </div>
  </div>
</section>




        
        
        
        
        </div>

      
      </div>
    </main>
  );
}