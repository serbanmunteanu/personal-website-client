import React from 'react'
import Service from '../components/Service';
import { faReact, faHtml5, faCss3, faNode, faPhp, faDocker, faAws, faGoogle, faJs } from '@fortawesome/free-brands-svg-icons';
import Rocket from '../components-svg/Rocket';
import Cloud from '../components-svg/Cloud';
import Teach from '../components-svg/Teach';

function ServicesScreen() {
    const [services, setServices] = React.useState([
        {
            name: 'Web development',
            active: true,
            description: 'In contrast to creating the average web resource, developing websites for startups demands more creativity. We aren’t just talking about a beautiful facade but a functional and original interface, and a unique solution to your clients’ needs. Like any other project, it all depends on the energy that the ambitious entrepreneur brings to its debut in his career. With the right planning, you can have a headstart over your competitors.',
            categories: [
                {
                    name: 'single-page applications (spa)',
                    description: 'Allow simulating the work of desktop applications. Their architecture is designed in such a way that when you switch to a new page, only part of the content is updated. Thus, there is no need to re-download the same elements, which is very convenient for both web developers and users. SPA development uses such popular technologies as React.js, Angular.js, Vue.js, whose architecture allows them to develop very flexible web applications.'
                },
                {
                    name: 'microservices',
                    description: 'Is an approach in which a single web application is built as a set of small services, each of them works in its own process and communicates with the rest using lightweight mechanisms (usually HTTP). Such services are built around customers’ business-needs and are developed independently using a fully automated environment. In addition, these services can be developed using different programming languages ​​and data storage technologies, which significantly speeds up the development process.'
                },
                {
                    name: 'serverless architecture',
                    description: 'Is a cloud-based model of build and runs web applications in which the cloud provider acts as the server, dynamically managing the allocation of machine resources, databases and storage systems. The most famous cloud-providers are Azure and AWS. This architecture allows running web applications using a flexible pricing model, in which payment is made for the actual amount of resources used, instead of paying for the allocated capacity units.'
                }
            ],
            logo: <Rocket/>,
            frameworks: ['Laravel','Lumen','Express', 'Nest'],
            technologies: [
                {
                    color: '#61DBFB',
                    logo: faReact
                },
                {
                    color: '#68a063',
                    logo: faNode
                },
                {
                    color: '#f06529',
                    logo: faHtml5,
                },
                {
                    color: '#2965f1',
                    logo: faCss3
                },
                {
                    color: '#474A8A',
                    logo: faPhp
                }
            ],
        },
        {
            name: 'Cloud management',
            active: false,
            description: 'In contrast to creating the average web resource, developing websites for startups demands more creativity. We aren’t just talking about a beautiful facade but a functional and original interface, and a unique solution to your clients’ needs. Like any other project, it all depends on the energy that the ambitious entrepreneur brings to its debut in his career. With the right planning, you can have a headstart over your competitors.',
            categories: [
                {
                    name: 'Infrastructure as a code (IaC)',
                    description: 'Infrastructure as code is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. Infrastructure as code (IaC) means to manage your IT infrastructure using configuration files.'
                }
            ],
            logo: <Cloud />,
            technologies: [
                {
                    color: '0db7ed',
                    logo: faDocker
                },
                {
                    color: '#FF9900',
                    logo: faAws
                },
                {
                    color: '#DB4437',
                    logo: faGoogle
                }
            ],
            frameworks: ['Serverless', 'Terraform'],
        },
        {
            name: 'E-commerce',
            active: false,
            description: 'In contrast to creating the average web resource, developing websites for startups demands more creativity. We aren’t just talking about a beautiful facade but a functional and original interface, and a unique solution to your clients’ needs. Like any other project, it all depends on the energy that the ambitious entrepreneur brings to its debut in his career. With the right planning, you can have a headstart over your competitors.',
            categories: [
                {
                    name: 'DESIGN & DEVELOPMENT SERVICES',
                    description: 'If you are going to promote an exclusive product or premium-class products, then you will have to pay a bit more for that especially when it is meant to be memorable.'
                },
                {
                    name: 'DEVELOPMENT OF SPECIFIC FUNCTIONALITY',
                    description: 'The development of additional, non-standard features affects the cost of development more than other factors.'
                },
                {
                    name: 'Payment gateway and shipping API integrations',
                    description: 'lorem ipsum tananan lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .'
                },
                {
                    name: 'Optimized For Speed And Search Engines',
                    description: 'lorem ipsum tananan lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .'
                }
            ],
            logo: <Teach/>,
            technologies: [
                {
                    color: '#474A8A',
                    logo: faPhp
                },
                {
                    color: '#f0db4f',
                    logo: faJs
                }
            ],
            frameworks: ['Magento 2', 'Shopify', 'Wordpress', 'OpenCart'],
        }
    ]);
    return (
        <div className="mx-5 my-5">
            <div className="container flex flex-col md:flex-row font-serif justify-center mx-auto">
                {
                    services.map((item,index) => 
                        <div 
                        key={index} 
                        className={`${item.active && 'color-red'} text-2xl px-5 cursor-pointer text-center`}
                        onClick={() => {
                            const newState = services.map((data,index2) => {
                                if(data.name === item.name) {
                                    data.active = true;
                                } else {
                                    data.active = false;
                                }
                                return data;
                            });
                            setServices(newState);
                        }}
                    > {item.name} </div>)
                }
            </div>
            <div className="container mx-auto">
                {
                    services.map((item,index) => 
                        <Service 
                            key={index}
                            name={item.name}
                            description={item.description}
                            active={item.active}
                            categories={item.categories}
                            logo={item.logo}
                            technologies={item.technologies}
                            frameworks={item.frameworks}
                        />)
                }
            </div>
        </div>
    )
}

export default ServicesScreen
