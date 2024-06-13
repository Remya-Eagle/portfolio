import React from 'react';
import './intro.css';
import btnImg from '../../assets/hire-me-50.png';
//import bg from '../../assets/martina-girl-with-open-laptop-1.png';

import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className="hello"><h2>Hello,</h2></span>
                <span>I'm <span className="introname">Remya <br /> Full Stack Developer </span></span>
                <p className="introPara">
                I am passionate about creating innovative and user-friendly web applications that solve real-world problems.              
               
                 </p><p className='introPara'>
            
            
              <ul><strong>Technical Skills</strong></ul> 
<li>Frameworks: .NET Core, Asp.Net, MVC, Asp.Net Web API, Entity Framework, NUNIT</li>
<li>Languages & Libraries: C#, HTML5, CSS 2/3, LINQ, JavaScript, jQuery, AJAX, XML, Typescript</li>
<li>Databases:MS SQL Server, Azure SQLServer</li>
<li>Azure Cloud: Azure Functions, Azure Logic Apps, Azure Insights, Azure App services, Azure Entra</li>
<li>Web Services and APIs: Rest API, Json, Postman, Swagger</li>
<li>Scripting and Automation: PowerShell </li>
<li>Version control:Azure DevOps, Git</li>
<li>Reporting services: SQL Server Reporting</li>
<li>ETL: SQL Server Integration services</li>
<li>Project Management methodologies and tools : Jira, Click up, Forecast,Agile, Kanban,scrum </li><br></br>


<strong>Professional Credentials</strong> <br></br>
<strong>Microsoft Certified:</strong><br>
</br> Azure AI Fundamentals-AI 900: <a href=" https://learn.microsoft.com/en-us/users/remyanair-8362/credentials/43fa418dc215bdfe">Visit Azure AI Fundamentals-AI 900!</a>
<br></br>Linkedin: <a href=" www.linkedin.com/in/remya-nair-a11618195">Visit linkedin!</a><br></br>
<br></br>
<ul><strong>Education</strong></ul>
<li>University of Texas Post Graduation in Cloud Computing (In progress)</li>
<li>Mahatma Gandhi University Master Degree in Computer Application (2005-2008) Completed </li>
<li>Mahatma Gandhi University Bachelor’s Degree in Computer Science (2002-2005) Completed</li>
</p>
            
            </div>
         {   /*<img src={bg} alt="Profile" className="bg" />  */}
        </section>
    );
}
export default Intro;