import React from 'react';
import './skills.css';
import UIDesign from '../../assets/icons8-web-design-96.png';
import WebDev from '../../assets/icons8-visual-studio-48.png';
import Azcloud from '../../assets/icons8-azure-96.png';
import Database from '../../assets/icons8-database.gif';
const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                <p>
                I am proficient in html,css, javascript ,ASP.Net MVC Framework,Web API, integrating Object-Oriented Programming (OOP), Design Patterns,  Web API, jQuery, JavaScript, XML, Entity Framework, MS SQL Server and Azure Cloud. 
                </p>
                </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">

                        <ul>    <h6>UI Design</h6></ul>
                        <li>Developed and optimized data-driven graphical user interfaces (GUIs).</li>
                        <li>Utilized HTML, CSS, JavaScript, TypeScript, and jQuery to create dynamic and responsive web interfaces.</li>
                        <li>Implemented advanced features and functionalities using React.js to enhance user experience and interactivity.</li>
                    </div>

                </div>
<div></div>
                <div className="skillBar">
                    <img src={WebDev} alt="WebDev" className="skillBarImg" />
                    <div className="skillBarText">

                        <ul> <h6>Web Application Development</h6></ul>
                        <li>Developed and maintained applications within the .NET ecosystem</li>
                        <li>Integrated Object-Oriented Programming (OOP) principles and various Design Patterns to create robust and maintainable software solutions.</li>
                        <li>Utilized ASP.NET MVC and Web API to develop dynamic, data-driven web applications.</li>
                        <li>Implemented frontend functionality using jQuery and JavaScript to enhance interactivity and user experience.</li>
                        <li>Employed XML for data interchange and configuration management within applications.</li>
                        <li>Leveraged Entity Framework for data access, enabling efficient and secure database interactions.</li>
                        <li>Managed database operations using MS SQL Server, ensuring data integrity and optimized performance.</li>
                        <li>Extensive experience in developing RESTful web applications and HTTP services.</li>

                        <li>Utilized the ASP.NET Web API framework to create efficient and scalable solutions.</li>
                        <li>Designed and implemented RESTful APIs, enabling seamless integration with various client applications.</li>
                        <li>Ensured robust security and performance of web services through best practices and comprehensive testing.</li>


                    </div>
                </div>
                <div className="skillBar">
                    <img src={Azcloud} alt="WebDev" className="skillBarImg" />
                    <div className="skillBarText">

                        <ul><h6>Cloud Computing </h6></ul>
                        <li>Created workflows for automating tasks and processes that integrate apps and Azure Cloud services using Azure Logic Apps,Azure Functions,Azure application,Azure Vm and cloud deployments. </li>
                        <li>Implemented Application Performance Management (APM) to monitor application and direct the telemetry data using Azure Application Insights. </li>

                    </div>

                </div>
                <div className="skillBar">
                    <img src={Database} alt="Database" className="skillBarImg" />
                    <div className="skillBarText">

                        <ul> <h6>Database</h6></ul>
                        <li>Contributed to database development by creating tables, stored procedures, constraints, triggers, joins, relationships, indexes, and views. </li>

                    </div>

                </div>
            </div>

        </section>

    );
}
export default Skills;