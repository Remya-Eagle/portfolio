import React from 'react';
import './works.css';

import Carousel from 'react-bootstrap/Carousel';
import Azure from '../../assets/1678014479730.png';
import Aspnet from '../../assets/2024-06-10 10_10_08-Window.png';
import Api from '../../assets/swagger.png'
import Entity from '../../assets/Designer.jpg';
import Afunction from '../../assets/azure-function-app-main.png';
import Ablob from '../../assets/blobs.png';
import Avm from '../../assets/azure_vm.png';
import Alogicapp from '../../assets/azure-logic-apps-designer.webp';

import Mssql from '../../assets/SQL_image.jpg';
import Azsql from '../../assets/azure-sql-server-database.png';
import Cosmos from '../../assets/Cosmosdb.png';


import Ssrs from '../../assets/SSIS.gif';
import Ssis from '../../assets/SSRS.jpg';


import Postman from '../../assets/Postman-for-the-web.png';
import Swagger from '../../assets/swagger.png';


import Jira from '../../assets/Jira.png';



import Clickup from '../../assets/Clickup.png';
import Forcast from '../../assets/forcast.png';

import Agile from '../../assets/agile.webp';

const Works = () => {
    return (
        <section id='works'>

            <h2 className="workstitle">My Portfolio</h2>
            <span className="worksDesc">
               <p> I take pride in paying attention to the smallest details and making sure that 
                my work is pixel perfect.I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</p></span>
             <div className="worksImgs">
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <div className='imgBlock'><img src={Aspnet} alt="Aspnet" className="d-block w-100" />
                                <h6>Frameworks:</h6>
                                <p>.NET Core, Asp.Net MVC,Asp.Net Web API,Entity Framework,NUnit</p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='imgBlock'><img src={Entity} alt="Entity" className="d-block w-100" />
                                <h6>Frameworks:</h6>
                                <p>.NET Core, Asp.Net MVC,Asp.Net Web API,Entity Framework,NUnit</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div></div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <div className='imgBlock'><img src={Afunction} alt="Afunction" className="d-block w-100" />
                                <h6>Azure Cloud: </h6>
                                <p>Azure Functions ,Azure Logic Apps,Azure Insights,Azure App services,Azure Entra,Azure Vm,Azure deployment</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='imgBlock'><img src={Ablob} alt="Ablob" className="d-block w-100" />
                                <h6>Azure Cloud: </h6>
                                <p>Azure Functions ,Azure Logic Apps,Azure Insights,Azure App services,Azure Entra,Azure Vm,Azure deployment</p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='imgBlock'><img src={Avm} alt="Avm" className="d-block w-100" />
                                <h6>Azure Cloud: </h6>
                                <p>.Azure Functions ,Azure Logic Apps,Azure Insights,Azure App services,Azure Entra,Azure Vm,Azure deployment</p>
                            </div>
                        </Carousel.Item>


                        <Carousel.Item>
                            <div className='imgBlock'><img src={Alogicapp} alt="Alogicapp" className="d-block w-100" />
                                <h6>Azure Cloud: </h6>
                                <p>Azure Functions ,Azure Logic Apps,Azure Insights,Azure App services,Azure Entra,Azure Vm,Azure deployments</p>
                            </div>
                        </Carousel.Item>

                    </Carousel>
                </div>
<div><br></br><br></br></div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <div className='imgBlock'><img src={Mssql} alt="Mssql" className="d-block w-100" />
                                <h6>Databases: </h6>
                                <p>MS SQL, Azure SQL server, Azure Cosmos DB</p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='imgBlock'><img src={Azsql} alt=" Azsql" className="d-block w-100" />
                                <h6>Databases: </h6>
                                <p>Ms SQL, Azure SQL server, Azure Cosmos DB</p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='imgBlock'><img src={Cosmos} alt="Cosmos" className="d-block w-100" />
                                <h6>Databases: </h6>
                                <p>MS SQL, Azure SQL server,Azure Cosmos DB</p>
                            </div>
                        </Carousel.Item>




                    </Carousel>
                </div>
                <div><br></br><br></br></div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <div className='imgBlock'><img src={Ssis} alt="Ssis" className="d-block w-100" />
                                <h6>Reporting services And ETL </h6>
                                <p>SQL server Reporting services,SQL server integration services </p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='imgBlock'><img src={Ssrs} alt="Ssrs" className="d-block w-100" />
                                <h6> Reporting services And ETL</h6>
                                <p>SQL server Reporting services,SQL server integration services</p>
                            </div>
                        </Carousel.Item>


                    </Carousel>
                </div>

                <div><br></br><br></br></div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <div className='imgBlock'><img src={Postman} alt="Postman" className="d-block w-100" />
                                <h6>Web Services and API </h6>
                                <p>RestAPI,Json,Postman,swagger </p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='imgBlock'><img src={Swagger} alt="Swagger" className="d-block w-100" />
                                <h6> Web Services and API</h6>
                                <p>RestAPI,Json,Postman,Swagger</p>
                            </div>
                        </Carousel.Item>


                    </Carousel>
                </div>
                <div><br></br><br></br></div>

                <div>
                    <Carousel>
                        <Carousel.Item>
                            <div className='imgBlock'><img src={Jira} alt="Jira" className="d-block w-100" />
                                <h6>Project Management methodologies and tools </h6>
                                <p>Jira,Clickup,Forecast,Agile Kanban,Scrum </p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='imgBlock'><img src={Clickup} alt="Clickup" className="d-block w-100" />
                                <h6> Project Management methodologies and tools</h6>
                                <p>Jira,Clickup,Forecast,Agile Kanban,Scrum</p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='imgBlock'><img src={Forcast} alt="Forcast" className="d-block w-100" />
                                <h6> Project Management methodologies and tools </h6>
                                <p>Jira,Clickup,Forecast,Agile Kanban,Scrum</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='imgBlock'><img src={Agile} alt="Agile" className="d-block w-100" />
                                <h6> Project Management methodologies and tools</h6>
                                <p>Jira,Clickup,Forecast,Agile Kanban,Scrum</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div><br></br><br></br></div>
            </div>  


        </section>




    );
}
export default Works;