// Inside ProjectsSection.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleReadMore = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const projects = [
    {
      id: 1,
      title: "Preparation of Project Document and Baseline Report for The Proposed Project Nature Based Solutions (Nbs) For Resilient Lower Narayani Basin in Nepal –WWF Nepal/DANIDA Funded",
      image: "images/projects/1.jpg",
      description: "EERC embarked on a comprehensive project to address pressing societal challenges in a proposed project site through the implementation of Nature-based Solutions (NbS). The project unfolded in several phases, beginning with a meticulous review of existing legislative frameworks for NbS, ensuring alignment with international standards and local contexts. This review incorporated analyses of primary laws, regulations, and secondary sources, such as reports from governmental agencies and NGOs, with a specific focus on climate vulnerability assessments. EERC prioritized the integration of Gender Equality and Social Inclusion (GESI) lenses throughout the review process, recognizing the importance of addressing differential impacts across various social groups. Subsequently, EERC conducted climate vulnerability analyses of two major watersheds, namely the Khageri and Gindri watersheds. This analysis provided crucial insights into the vulnerabilities of these ecosystems and informed the identification and prioritization of NbS interventions. Stakeholder engagement played a pivotal role in this phase, ensuring inclusivity and the consideration of diverse perspectives. Through participatory processes, stakeholders, including indigenous peoples and local communities, contributed to the identification of pressing societal challenges, guided by principles of equity and sustainability. Building upon the insights gained from the situation analysis and stakeholder engagement, EERC conducted a systemic review of implemented NbS interventions. This review aimed to compile a comprehensive list of potential NbS interventions, considering the findings from the situation analysis and the diverse needs and priorities of the stakeholders. Cost-benefit analysis was conducted to inform the development of a project document, which served as a blueprint for the implementation of NbS interventions. Concurrently, EERC conducted a baseline survey aligned with the project's objectives and monitoring frameworks, incorporating GESI disaggregated data. This survey provided a comprehensive understanding of the project's starting point and set the stage for effective monitoring and evaluation throughout its implementation. Stakeholder mapping was seamlessly integrated into the situation analysis, enabling adaptive management and ensuring that NbS interventions effectively address the identified challenges and opportunities.",
      bgColor: "bg-orange-100",
    },
    {
      id: 2,
      title: "Piloting Low-Cost Landslide Risk Assessment and development of contingency plan/DPRP revision of Sanni-tribeni rural municipality, Kalikot District)-NRCS-Swiss Redcross.",
      image: "images/projects/2.jpg",
      description: "EERC undertook a comprehensive project in Sanni Tribeni Rural Municipality, focusing on landslide risk management, which included an assessment of geological conditions, proposing cost-effective technologies, enhancing local knowledge, and developing contingency plans. Initially, a detailed assessment of the municipality's geology was conducted, examining factors such as soil composition, slope stability, and rainfall patterns. This involved analyzing existing geological data, conducting field visits, surveys, and interviews with experts and community members. Moreover, climate trend analysis and precipitation analysis were conducted to understand historical patterns and trends. This analysis provided insights into the climatic conditions affecting landslide occurrences in the area. Additionally, climate and precipitation projections were generated using Representative Concentration Pathway (RCP) scenarios 4.5 and 8.5. These projections offered valuable insights into potential future climate conditions and precipitation patterns, enabling better anticipation of landslide risks under different climate change scenarios. Based on these findings, cost-effective technologies suitable for the local context were identified and evaluated for their sustainability and effectiveness in reducing landslide risks. Concurrently, training programs were organized for local masons and rural municipality engineers, emphasizing low-cost landslide risk management measures. Hands-on training sessions were conducted at selected sites to pilot the implementation of these measures, ensuring knowledge transfer and empowerment of the local workforce. Furthermore, cost calculations were prepared for implementing low-cost landslide risk management measures across the entire landslide-prone area. The municipality's landscape was categorized into three categories based on risk levels: safer locations with lower landslide risk (CAT-I), areas with the possibility of implementing mitigation measures (CAT-II), and settlements requiring relocation due to high landslide risk (CAT-III). The implications and socio-economic benefits of implementing cost-effective technologies were thoroughly assessed, taking into account potential positive impacts on the community. Finally, a comprehensive landslide contingency plan was developed, outlining strategies for immediate response, evacuation procedures, communication protocols, and coordination mechanisms. This plan was revised in coordination with local and provincial government authorities to align with new findings and recommendations regarding landslide risk management. Engagement with stakeholders ensured their involvement and commitment to implementing the contingency plan and the revised District Preparedness and Response Plan (DPRP). Overall, EERC's integrated approach aimed to enhance landslide risk management and build community resilience in Sanni Tribeni Rural Municipality, considering both current geological conditions and future climate change scenarios.",
      bgColor: "bg-red-200",
    },
    {
      id: 3,
      title: "Status of Climate Finance in Nepal -OXFAM in Nepal",
      image: "images/projects/3.jpg",
      description: "EERC has conducted a comprehensive study focusing on various aspects of climate finance in Nepal. This includes analysing policy frameworks to gauge alignment with climate objectives and identifying implementation gaps. The study also delves into the financial landscape, examining budget allocations, expenditure patterns, and funding sources, with a particular emphasis on gender-responsive budgeting. Furthermore, it evaluates the effectiveness of existing climate finance mechanisms, encompassing public funds, international aid, private investments, and innovative financing instruments. Stakeholder engagement is a crucial aspect, with the study assessing the involvement and capacity of government entities, civil society organizations, and local communities in decision-making processes. Lastly, the study entails developing tailored climate resilience strategies for Oxfam Nepal, aimed at enhancing community resilience, promoting gender-responsive approaches, and strengthening adaptive capacity to climate change impacts.",
      bgColor: "bg-purple-200",
    },
    {
      id: 4,
      title: "Assessment of the State of Ecosystem Services and Identification of the Major Threats and Socio-Economic Barriers to the Conservation of the Mutani Khola Watershed, Siraha District, Nepal funded by CARE Nepal",
      image: "images/projects/4.jpg",
      description: "EERC has conducted an extensive assessment of ecosystem services and watershed conservation practices in the Mutani Khola sub-watershed. Our analysis reveals a delicate balance of provisioning, regulating, supporting, and cultural services vital to local communities and environmental health. However, this balance is threatened by factors such as deforestation, land degradation, water pollution, and socio-economic barriers including poverty and inadequate governance structures. Through detailed mapping, we've identified areas of degraded and deforested lands, as well as natural resources at risk, proposing mitigation measures such as reforestation, sustainable agriculture, and water quality improvement strategies. Moreover, we've mapped potential avenues for positive livelihood means leveraging the watershed's natural resources sustainably, ranging from ecotourism to watershed-based enterprises. Our assessment also delves into the existing governance structures and stakeholder roles, highlighting the need for collaborative efforts and policy interventions to ensure effective watershed management and conservation of livelihoods. Through these findings, EERC aims to guide informed decision-making and foster sustainable development practices in the Mutani Khola sub-watershed.",
      bgColor: "bg-blue-100",
    },
    {
      id: 5,
      title: "Flood/Inundation Hazard Mapping and Overland Water Flow Modelling of West Rapti Basin –CRS Nepal.",
      image: "images/projects/5.jpg",
      description: "EERC, in close collaboration with CRS and flood-affected communities within the West Rapti River Basin, which includes Banke-Rapti Sonari Rural Municipality, Narainapur Rural Municipality Duduwa Rural Municipality, Bardiya -Rajapur Municipality, Barabardiya Municipality, and Badhaiyatal Rural Municipality, undertook a comprehensive flood risk and vulnerability assessment alongside flood inundation mapping efforts. This multifaceted project involved analysing various factors contributing to flood risk and vulnerability, encompassing socio-economic and environmental variables. The team meticulously monitored, documented, and analyzed the extent and impacts of floods while delving into local factors such as infrastructure that influenced flooding patterns. By employing high-resolution digital elevation models (DEMs) and drone mapping, the team assessed flood depth and extent, aiming to comprehend the spatial distribution of flood risk. Furthermore, a custom Google Earth Engine script was developed to process satellite imagery and generates maps illustrating flood extents over the past decade. To support flood modelling, hydro-meteorological data from relevant stations within and near the target area were collected, aiding in the identification of drainage systems. Flood inundation maps were meticulously prepared for various return periods, integrating climate models and scenarios to project future flood risks accurately. The validation of models and maps was conducted meticulously by comparing them with observed flood events, historical records, remote sensing products, and community consultations, ensuring the accuracy and reliability of the flood risk and vulnerability assessments. By amalgamating the outcomes of flood inundation mapping with the flood risk and vulnerability assessments, EERC produced comprehensive flood risk maps. These maps furnished invaluable insights into areas at high risk of flooding, thereby assisting communities and stakeholders in prioritizing mitigation and adaptation measures to bolster resilience against future flood events. Through tight collaboration with CRS and local communities, EERC ensured that the flood risk and vulnerability assessments were finely tailored to address the specific needs and challenges encountered by communities in the region.",
      bgColor: "bg-green-200",
    },
    {
      id: 6,
      title: "Review of Legal Policy Framework and Capacity Assessment Related to Natural Resource Safeguards in Linear Infrastructure-WWF ALIGN Project",
      image: "images/projects/6.JPG",
      description: "EERC conducted a comprehensive assessment of policy frameworks and practices related to natural resource (NR) safeguards in linear infrastructure (LI) development, aligning them with international standards and practices. This involved a thorough review and analysis of existing legal frameworks at all levels of government and key stakeholders. The assessment delved into the relevancy of these frameworks and identified gaps across various stages of the LI project cycle. Additionally, the implementation status of these frameworks was evaluated, highlighting integration gaps and challenges. The perception and understanding of major policy actors at federal, provincial, and local levels regarding NR safeguards in LI were also explored. EERC mapped the interrelation of NR safeguards legal frameworks among different levels of government and recommended ways for harmonization. Recommendations were provided to address gaps in legal frameworks and challenges for implementation. Furthermore, EERC compiled a master list of internationally accepted NR safeguard best practices for LI to benchmark Nepal's legal frameworks. Recommendations were made to strengthen the legal framework for mainstreaming international safeguard standards. Capacity gaps in concerned government agencies and stakeholders were assessed, including LI engineering capacity, and recommendations were provided for improvement in implementation and enforcement of NR safeguards. Institutions and training centers offering capacity-building programs on NR safeguards were identified, along with possible mechanisms for collaboration. Consultation workshops were conducted with relevant government ministries, civil society organizations, and other stakeholders to gather input and recommendations. Finally, legal frameworks were assessed from a Gender Equality and Social Inclusion (GESI) perspective, with recommendations provided to address gaps and make frameworks more inclusive.",
      bgColor: "bg-yellow-100",
    },
    {
      id: 7,
      title: "Assessment and Training Package on Climate Change Adaptation and Nature-Based Solutions (NbS) –IFRC British Redcross",
      image: "images/projects/7.jpg",
      description: "EERC conducted a comprehensive assessment and planning process focused on climate-smart programming and ecosystem-based assessments. Initially, a thorough desktop review analysed national and local climate change documentation, historical data, and ecosystem descriptions, identifying threats and potential drivers. EERC accompanied the project team during climate-smart programming, verifying secondary data and conducting transect walks to understand socio-economic resilience dimensions and ecosystem services. EERC Conducted ecological assessments for each target community, updated based on on-site visits and current data, analysing future opportunities and threats, and recommending nature-based solutions. EERC documented NbS practices implemented by communities, detailing challenges faced and addressed during implementation. Overall, EERC's work provided a comprehensive understanding of climate change impacts on ecosystem services, guiding the development of tailored nature-based solutions for each community. In addition to the tasks outlined previously, EERC conducted a detailed vulnerability assessment and geohazard assessment of the watershed areas in wards 17 and 19 of Dhangadhi Sub-metropolitan City, including the upstream Churea area. This assessment focused on identifying the specific vulnerabilities of these areas to climate change impacts, such as increased frequency of extreme weather events, changes in precipitation patterns, and shifts in temperature regimes. By analysing the socio-economic and environmental factors contributing to vulnerability, EERC identified areas of heightened risk and potential impacts on ecosystem services. This detailed vulnerability assessment informed the development of climate-resilient Nature-based Solutions (NbS) activities tailored to address the specific challenges faced by these communities. Integrating the findings of this assessment into the broader planning process ensured that NbS interventions were designed to enhance community resilience in the face of climate change.",
      bgColor: "bg-purple-200",
    },
    {
      id: 8,
      title: "Outcome Survey of Climate Adaptation Interventions-USAID Tayar Nepal",
      image: "images/projects/8.jpg",
      description: "EERC was hired to conduct an outcome monitoring survey on climate change adaptation interventions to assess their effectiveness and identify areas for improvement. The specific objective of the survey was to evaluate the outcomes of project indicators, particularly the number of people using climate information or implementing risk-reducing actions to enhance resilience to climate change, with support from USG Assistance. The survey covered 8 partner municipalities within Tayar Nepal, encompassing diverse geographic regions. These included hilly areas such as Bhimeshwor, Neelakantha, and Dullu, inner valleys like Tulsipur and Birendranagar, and Tarai regions including Rajapur, Lamkichuha, and Godawari. Each of these regions faced distinct climate challenges, with Tarai municipalities primarily affected by flooding, while others grappled with erosion and landslides. The survey assessed the outcomes of various field-level interventions directly implemented within the project areas. These interventions ranged from flood control through embankment construction to landslide mitigation via stone wall construction, check-dam installation, trail improvements, bioengineering initiatives, and the establishment of early warning systems. Additionally, livelihood and greening projects such as tree plantations, forest fire management, environmental education in schools, climate-smart agriculture promotion, agroforestry initiatives, and insurance schemes for agriculture and livestock were examined. EERC's approach extended beyond field interventions to include the dissemination of Climate Change Adaptation (CCA) messages through diverse Information, Education, and Communication (IEC) materials. These materials, including Public Service Announcements (PSAs), radio jingles, videos, brochures, booklets, handbooks, and television programs like the Dukkha Series, aimed to raise awareness and engagement among target communities. Through its comprehensive survey methodology and expertise in climate change adaptation initiatives, EERC provided valuable insights into the effectiveness of interventions and contributed to informed decision-making for further enhancing resilience to climate change in Nepal's diverse municipalities.",
      bgColor: "bg-blue-100",
    }
  ];

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`rounded-lg shadow-lg overflow-hidden ${project.bgColor} hover:shadow-xl transition-shadow duration-300`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-64 object-cover p-2 rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 rounded-md" />
            </motion.div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-[#F59E0B] transition-colors duration-200">
                {project.title}
              </h3>
              <div className="relative">
                <p className="text-gray-600 max-h-24 overflow-hidden">
                  {project.description.substring(0, 200)}...
                </p>
                <button
                  onClick={() => handleReadMore(project)}
                  className="text-[#F59E0B] font-semibold mt-2 hover:text-[#D97706] transition-colors duration-200"
                >
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-[10000]"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={`Project ${selectedProject.id}`}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectSection;
