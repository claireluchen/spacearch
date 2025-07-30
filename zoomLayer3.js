//zoom events for layer navigation
window.addEventListener(
  "wheel",
  (e) => {
    console.log("wheel");
    e.preventDefault();

    // If in walkthrough (normalZoom not enabled), prevent any page navigation (return)
    if (
      window.zoomControls &&
      window.zoomControls.normalZoom &&
      !window.zoomControls.normalZoom.allow
    ) {
      e.stopPropagation();
      return false;
    }

    if (e.deltaX > 0 || e.deltaY > 0) {
      // If zooming out
      window.location.href = "layer2.html"; // Navigate to layer 2
    }
  },
  { passive: false, capture: true }
);

/*Define content for each box upon clicking, CHANGE EXPLANATION TEXTS HERE*/
var boxContents = {
  crew_selection: {
    title: "Crew Selection",
    explanation:
      "Astronaut selection was originally carried out by NASA and the Soviet Space Program, and now Japan, China, Russia, Brazil, and countries in Europe have selected their own astronauts <span style='color:gray'>[NASA 2024]</span>. Due to historical and sociopolitical factors, only male candidates were originally allowed to become astronauts, with one exception in the early 1960s (Valentina Tereshkova, USSR). Female candidates were accepted regularly in the 1980s, although still comprise a minority of the program [Steimle and Norberg 2013]. <br><br> Selection criteria include educational/professional qualifications and candidates must be able to pass the astronaut physical, medical, and psychological exams. More restrictively, astronaut candidates from most programs must exhibit mental and personal capabilities which are selected for and evaluated by a panel of experts <span style='color:gray'>[Steimle and Norberg 2013]</span>. <br><br><br> <span style='color:gray'>NASA. (2024) 'Becoming an astronaut: Frequently asked questions,' NASA.gov. Last updated March 5, 2024. Accessed March 7, 2024. https://www.nasa.gov/humans-in-space/becoming-an-astronaut-frequently-asked-questions/<br>Steimle, H., Norberg, C. (2013). Astronaut crew_selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg. https://doi.org/10.1007/978-3-642-23725-6_7</span>",
  },
  distance_from_home_earth: {
    title: "Distance From Home/Earth",
    explanation:
      "In general applications, distance from home is dependent on the changing definition of home, which has been hypothesized to generally fall into categories of physical structures, territories, self and self-identity, and social-cultural units <span style='color:gray'>[Hayward 1975][Case 1996]</span>. Therefore, “home” may be multiple, constructed, and changing as one leaves and creates new homes. Distance from home can be considered as difficulties due to physical constraints (distance, time), economic (unemployment, cost), social-cultural (values), or political (visas, policies, asylum, deportation) <span style='color:gray'>[Angulo 2010]</span>. Space-specific considerations include orbit alignment, mission impacts, and resource limitations (food, water, fuel). <br><br><br> <span style='color:gray'>Hayward, G. (1975). Home as an environmental and psychological concept. Landscape, 20, 2–9. <br>Case, D. (1996). CONTRIBUTIONS OF JOURNEYS AWAY TO THE DEFINITION OF HOME: AN EMPIRICAL STUDY OF A DIALECTICAL PROCESS. Journal of Environmental Psychology, 16(1), 1–15. https://doi.org/10.1006/jevp.1996.0001. <br> Angulo, M. I. (2010). WHEN HOME IS NO LONGER THERE: RETURN MIGRATION IN A TIME OF CRISIS. Migration, 48. </span>",
  },
  mission_duration: {
    title: "Mission Duration",
    explanation:
      "Space mission durations vary, with the longest space mission being on the order of 1 year (Valeri Polyakov on Mir - 437 days; Frank Rubio on ISS - 371 days; Mark Vande Hei on ISS - 355 days) <span style='color:gray'>[Archie 2023]</span>. Analog missions aim to replicate space-like conditions, such as isolation for 45 days in the Human Research Exploration Analog [NASA 2024]. Mission durations in the Antarctic region vary between the summer cohorts (about 3 months) and the winter-over cohorts (ranging from 6-9 months) <span style='color:gray'>[Harrison 1991]</span>. <br> The duration of voluntary migrations can be up to multigenerational. The duration of involuntary migrations can vary, from weeks (Kosovars in 1999) to decades (Palestinians, 70 years) <span style='color:gray'>[Devictor 2017]</span>. <br><br><br>  <span style='color:gray'> Archie, A. (2023). “A NASA Astronaut is back on Earth after a year in space, the longest for an American.” Updated September 28, 2023. Accessed March 12, 2024. <br> NASA. (2024) “HERA” Accessed March 12, 2024. https://www.nasa.gov/mission/hera/. <br> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. </span>",
  },
  communication_delay: {
    title: "Communication Delay",
    explanation:
      "Missions rely on being able to communicate quickly with crew members in space. Communication delays for missions beyond Low Earth Orbit directly increase mission risks via increased time for resupply and emergency evacuations  <span style='color:gray'>[Parisi 2023]</span>. Seconds to minutes communication delay impacts real-time guidance from the ground. Lunar (5-14 seconds  <span style='color:gray'>[Parisi 2023]</span>) and Martian (6.5-44 min  <span style='color:gray'>[Schuster 2007]</span>) communication delays would require crew members to make independent decisions without relying on ground support  <span style='color:gray'>[Parisi 2023]</span>. <br><br><br>  <span style='color:gray'> Parisi, M., Panontin, T., Wu, S.-C., Mctigue, K., & Vera, A. (2023). Effects of Communication Delay on Human Spaceflight Missions. 14th International Conference on Applied Human Factors and Ergonomics (AHFE 2023). <br> Schuster, Alfons (2007): Intelligent Computing Everywhere. Springer, Berlin. P. 235-236.</span>",
  },
  isolated: {
    title: "Isolated",
    explanation:
      "In isolated environments, physical/social interaction and telecommunication with usual sources of support (family, friends) are seriously disrupted <span style='color:gray'>[Nicolas 2016]</span>. In times of crisis, evacuation from an isolated environment may be difficult, if not impossible <span style='color:gray'>[Sandal 2006]</span>. <br><br><br> <span style='color:gray'> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. <br> Sandal, G. M., Leon, G. R., & Palinkas, L. (2006). Human challenges in polar and space environments. Reviews in Environmental Science and Bio/Technology, 5(2–3), 281–296.</span>",
  },
  confined: {
    title: "Confined",
    explanation:
      "Confined environments, such as submarines, space stations, Antarctic stations, even our homes during COVID lockdowns, are joined by the commonality that there are physical and social constraints to leaving a certain space. Beyond limited mobility outside of the environment due to extreme environmental conditions, the indoor environment might also offer limited mobility <span style='color:gray'>[Nicolas 2016]</span>. <br> Confinement may also incorporate the access to resources within a walkable or accessible neighborhood. For example, the inequitable distribution of healthcare, grocery stores, libraries, and other social services; or the impossibility of gaining access to certain services in refugee camps, can contribute to the definition of confinement <span style='color:gray'>[Mouratidis 2020][Razum 2022]</span>.     <br><br><br> <span style='color:gray'> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. <br> Mouratidis, K. (2020). Neighborhood characteristics, neighborhood satisfaction, and well-being: The links with neighborhood deprivation. Land Use Policy, 99, 104886. <br> Razum, O., Dawson, A., Eckenwiler, L., Wild, V. (2022). Refugee Camps: Paradise or Purgatory?. In: Razum, O., Dawson, A., Eckenwiler, L., Wild, V. (eds) Refugee Camps in Europe and Australia. Palgrave Macmillan, Cham. </span> ",
  },
  extreme: {
    title: "Extreme",
    explanation:
      "Hostile environments exist on Earth and in space. The Antarctic region, characterized by extreme cold (often dipping below -100F/-73C), extremely variable daylight hours with 5-6 months of complete darkness, low humidity, high altitude, and hazards (blizzards, crevices, ice), is often used as an environmental analog for outer space <span style='color:gray'>[Sandal 2018][Harrison 1991][Palinkas and Suedfeld 2008][Salam 2012]</span>. The space environment, further characterized by vacuum, microgravity, temperature swings (due to fluctuations between receiving solar heat and emptying heat to the coldness of space), micrometeoroids, space debris, altered light/dark cycles, and radiation <span style='color:gray'>[Thirsk 2009]</span>.      <br><br><br> <span style='color:gray'> Sandal, G. M., van deVijver, F. J. R., & Smith, N. (2018). Psychological Hibernation in Antarctica. Frontiers in Psychology, 9, 2235. <br> Thirsk, R., Kuipers, A., Mukai, C., & Williams, D. (2009). The space-flight environment: The International Space Station and beyond. Canadian Medical Association Journal, 180(12), 1216–1220. <br> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. <br> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Salam, A. P. (2012). Exploration class missions on earth: Lessons learnt from life in extreme Antarctic isolation and confinement. In A. Chouker (Ed.), Stress challenges and immunity in space (pp. 425-439). Berlin, Germany: Springer. </span>        ",
  },
  resource_constrained: {
    title: "Resource Constrained",
    explanation:
      "Resource constrained areas result from inequitable and inadequate distribution of resources (e.g., food, water, healthcare, education, mobility) <span style='color:gray'> [Mouratidis 2020][Bauer and Gallagher 2020]</span>. In harsh and remote environments such as Antarctica, resources are inherently limited as they have to be transported inland, which can be logistically challenging <span style='color:gray'> [Kennicutt 2016]</span>. In certain situations, medical evaluation might even be impossible [Nicholas 2016].       <br><br><br> <span style='color:gray'> Mouratidis, K. (2020). Neighborhood characteristics, neighborhood satisfaction, and well-being: The links with neighborhood deprivation. Land Use Policy, 99. <br> Bauer, C., & Gallagher, M. J. (2020). Education for Humanity: higher education for refugees in resource-constrained environments through innovative technology. Journal of Refugee Studies, 33(2), 416-436. <br> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. </span>        ",
  },
  mission_demands: {
    title: "Mission Demands",
    explanation:
      "Mission demands vary based on the specific mission profile and goals. This includes cognitive and physical demands encountered due to launch, flight profile, re-entry (if any), and landing/splashdown.",
  },
  life_mission_events: {
    title: "Life/Mission Events",
    explanation:
      "Either planned (nominal) or unplanned (contingency/emergency) acute events, including Extravehicular Activity, crew docking and transfer, injury, conflicts, and emergency egress.        ",
  },
  individual_traits_invisible: {
    title: "Individual Traits",
    explanation:
      "Individual traits accounting for variation, including genetics and personality. Personality traits are based on Costa and McCrea’s five-factor model of personality. Although no consensus for personality models exists, Costa and McCrea’s model is heavily based on empirical research and widely used and adapted as a measurement scale (NEO-PI-R, IPIP-NEO, IPIP-NEO-120 [used by NASA]). ",
  },
  social_composition_invisible: {
    title: "Social Composition",
    explanation: "Social variables for living and working with others",
  },
  team_processes_invisible: {
    title: "Team Processes",
    explanation:
      "People working together to achieve a goal beyond the capabilities of each individual alone. Proposed by Marks et al. (2001), a team moving toward a task has process “phases” when one set of actions dominates at any given time.",
  },
  crew_size: {
    title: "Crew Size",
    explanation:
      "In US space missions, programs have differed in the crew size but consistently remain a small group of crewmembers. From Mercury (1) to Gemini (2), Apollo (3), Skylab (3), Space Shuttle (6-8), and ISS (7), it’s most likely that in the foreseeable future the crew size will remain in this range <span style='color:gray'>[Vakoch 2013][NASA 2024]</span>. These figures do not typically include those who are supporting the mission, including ground support, family, and friends. <br> When considering an Earth analogy to space missions, we can consider immigrants and refugees, who are similarly displaced from home (either voluntarily or involuntarily). In Earth-based contexts, the United Nations currently (2020) estimate there are 281 million immigrants world-wide, which is about 3.6% of the global population <span style='color:gray'>[Mcauliffe and Triandafyllidou 2022]</span>. The global refugee population exceeds 30 million individuals, and more than 100 million are forcibly displaced (including refugees) due to persecution, conflict, violence, and human rights violations <span style='color:gray'>[Masterson 2023][UNHCR 2024]</span>. Sizes of immigrant groups may vary from individual, to family, to 1000 refugees arriving in a single city <span style='color:gray'>[Pottie-Sherman and Wilkes 2017]</span>.          <br><br><br> <span style='color:gray'> Vakoch, D. A. (Ed.). (2013). On Orbit and Beyond: Psychological Perspectives on Human Spaceflight. Springer Berlin Heidelberg. <br> NASA. (2024) “Station Overview” https://www.nasa.gov/international-space-station/space-station-overview/. Accessed March 12, 2024. <br> Mcauliffe, Marie and Anna Triandafyllidou. (2021). World migration report 2022. International Organization for Migration (IOM). <br> Masterson, D. (2023). Refugee Networks, Cooperation, and Resource Access. American Political Science Review, 1–17. <br> UNHCR. (2024) “About UNHCR” https://www.unhcr.org/about-unhcr Accessed March 12, 2024. <br>  Pottie-Sherman, Y. and Wilkes, R. (2017), Does Size Really Matter? On the Relationship between Immigrant Group Size and Anti-Immigrant Prejudice†. Int Migr Rev, 51: 218-250. </span>        ",
  },
  social_support: {
    title: "Social Support",
    explanation:
      "Social support is the perception or experience that one is cared for by others, esteemed and valued, and part of a mutually supportive social network <span style='color:gray'>[Wills 2000][Taylor 2011]</span>. Social support can be measured via structural social support, or understanding how many interpersonal connections an individual is involved in <span style='color:gray'>[Wills 2000]</span>.        <br><br><br> <span style='color:gray'> Wills, T. A., & Shinar, O. (2000). Measuring perceived and received social support. In S. Cohen, L. G. Underwood, & B. H. Gottlieb (Eds.), Social support measurement and intervention: A guide for health and social scientists (pp. 86–135). Oxford University Press. <br> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. </span>",
  },
  social_monotony: {
    title: "Social Monotony",
    explanation:
      "Monotony is described by an unchanging environment, repetition of events or situations, and chronic absence of novelty <span style='color:gray'>[Das 2015]</span>. Here, social monotony describes the chronic exposure to the same set of people.     <br><br><br> <span style='color:gray'> Das, S.K., Barhwal, K., Hota, S.K. (2015). Disrupting monotony during social isolation stress prevents early development of anxiety and depression like traits in male rats. BMC Neurosci 16, 2. </span> ",
  },
  density: {
    title: "Density",
    explanation:
      "Physical density can be increased by adding more people into a given space (increasing social density) or decreasing the size of the space (increasing spatial density) <span style='color:gray'>[Fleming 1987]</span>.       <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906. </span>     ",
  },
  group_living: {
    title: "Group living",
    explanation:
      "In the context of spaceflight and other extreme environments, group living skills or competency refer to a unique subset of skills that apply to colleagues who work and live together <span style='color:gray'>[Landon 2024]</span>. They become more salient as duration, isolation, and confinement increase <span style='color:gray'>[Landon 2024]</span>. <br> Group living skills for astronauts are essentially teaming skills that extend beyond work, into life situations. For example, ability to engage in interpersonal conversations constructively and not defensively; ability to identify and manage differences in personality, knowledge, cultural expectations; and ability to cooperate, take accountability, and assign responsibility <span style='color:gray'>[Landon and Paoletti 2020]</span>.        <br><br><br> <span style='color:gray'> Landon, L. B., Miller, J. C., Bell, S. T., & Roma, P. G. (2024). When people start getting real: The Group Living Skills Survey for extreme work environments. Frontiers in Psychology, 15, 1348119. <br> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press. </span> ",
  },
  extraversion: {
    title: "Extraversion",
    explanation:
      "Tendency toward warmth, gregariousness, assertiveness, activity, excitement seeking, positive emotions <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>  ",
  },
  openness: {
    title: "Openness",
    explanation:
      "Tendency toward fantasy, aesthetics, feelings, actions, ideas, values <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  agreeableness: {
    title: "Agreeableness",
    explanation:
      "Tendency toward trust, straightforwardness, altruism, compliance, modesty, tender-mindedness <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  neuroticism: {
    title: "Neuroticism",
    explanation:
      "Tendency toward anxiety, angry hostility, depression, self-consciousness, impulsiveness, vulnerability <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  conscientiousness: {
    title: "Conscientiousness",
    explanation:
      "Tendency toward competence, order, dutifulness, achievement striving, self-discipline, deliberation <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  genetics: {
    title: "Genetics",
    explanation:
      "Genetics is a branch of biology dealing with heredity and variation. Here, we focus on the chromosomal theory of genetics, which is that genetic differences and similarities are inherited through DNA replication and therefore inherits genetic continuity through generations <span style='color:gray'>[Krug 2006]</span>. Phenotypic (i.e., observable) differences may account for traits such as eye color or handedness <span style='color:gray'>[Krug 2006]</span>. However, while more complex traits such as predisposition to illness could be partially explained by phenotypic differences, they may also differ by environmental influences, age, and interaction effects between genetics and these variables <span style='color:gray'>[Kujala 2011]</span>.<br> Genetic differences and their predictability and effects on personality are still active areas of research, and multiple theories exist on genetic, environmental, and interactive (genetic and environmental) explanations for personality <span style='color:gray'>[Matthews 2003]</span> – which has implications for behaviors, habits, and health.       <br><br><br> <span style='color:gray'> Krug, W. S. Cummings, M. R. & Spencer, C. R.. (2006). Concepts of Genetics, Eighth Edition. Pearson Education. <br> Kujala, U. M. (2011). Physical activity, genes, and lifetime predisposition to chronic disease. European Review of Aging and Physical Activity, 8(1), 31–36. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>        ",
  },
  resilience: {
    title: "Resilience",
    explanation:
      "Resilience has been defined as the ability to effectively negotiate, adapt to, or manage stress and trauma <span style='color:gray'>[Windle 2011]</span>. The definition is two-parted: either the ability to remain psychologically health when faced with significant stress; or the ability to recover from a traumatic event <span style='color:gray'>[de Terte 2014]</span>. <br> A similar concept, hardiness, was introduced by Kobasa in 1982 and composed of the “belief in personal control over events, commitment to full involvement in life, enjoyment of challenge and opportunity” </span>[Matthews 2003]</span>.      <br><br><br> <span style='color:gray'> Windle, G. (2011). What is resilience? A review and concept analysis. Reviews in Clinical Gerontology, 21(2), 152–169. <br> de Terte I, Stephens C, Huddleston L. (2014) The development of a three part model of psychological resilience. Stress Health (5):416-24. <br>Kobasa, S. C. (1982) Commitment and coping in stress resistance among lawyers. Journal of Personality and Social Psychology, 42, 168–77. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>         ",
  },
  psychological_resources: {
    title: "Psychological Resources",
    explanation:
      "NASA provides operational psychology services for the International Space Station crew and their families. This includes private medical conferences with mental health specialists every two weeks, arranging care packages, regular cognitive function tests, and private family conferences <span style='color:gray'>[Sipes and Ark 2005]</span>.       <br><br><br> <span style='color:gray'> Sipes, W. E., & Ark, S. T. V. (2005). Operational Behavioral Health and Performance Resources for International Space Station Crews and Families. Aviation, Space, and Environmental Medicine, 76(6). </span>        ",
  },
  training_and_preparation: {
    title: "Training and Preparation",
    explanation:
      "The goal of training is to provide knowledge and skills to execute mission tasks, including living in the mission environment. Knowledge areas for spaceflight include introductory topics (e.g., autonomy involvement, global space sector), spaceflight systems, scientific fundamentals (e.g., aerospace engineering, life sciences, Earth sciences), operations (e.g., space health, systems and infrastructure), and special skills (e.g., robotic arm operations, extravehicular activity, fitness training, media skills, team dynamics) <span style='color:gray'>[Steimle and Norberg 2013]</span>. <br> For professional career astronauts, training can take anywhere from 3.5 to 5 years, comprising basic, advanced, and increment specific training <span style='color:gray'>[Steimle and Norberg 2013]</span>.        <br><br><br> <span style='color:gray'> Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg. </span> ",
  },
  ground_support: {
    title: "Ground Support",
    explanation:
      "Spaceflight is an incredibly demanding effort and supported by an enormous amount of facilities, technology, and people on the ground. Each of the major space agencies with astronauts on the International Space Station has mission control and research/technology centers, comprising highly trained experts that support the challenges each autonomy may face <span style='color:gray'>[NASA 2023]</span>.      <br><br><br> <span style='color:gray'> NASA. “Ground Facilities”. Updated Dec 28, 2023. Accessed April 30, 2024. https://www.nasa.gov/international-space-station/ground-facilities/ </span>        ",
  },
  medical_capability: {
    title: "Medical Capability",
    explanation:
      "Medical capability is the “complete set of resources that enables the crew to perform medical monitoring, diagnosis, and treatment of medical conditions” <span style='color:gray'>[Antonsen 2022]</span>. These may include tools, medicine, equipment, (crew and ground support) knowledge, training, references, and other resources. <br> Medical capabilities should adequately match medical needs. However, prediction of medical capability requirements for untested mission profiles (e.g., Lunar or Martian mission) are difficult; medical needs are attributed by a complex web of factors, may be acute or chronic, and could develop/escalate as comorbidities <span style='color:gray'>[Antonsen 2022]</span>.       <br><br><br> <span style='color:gray'> Antonsen, E. L., Myers, J. G., Boley, L., Arellano, J., Kerstman, E., Kadwa, B., Buckland, D. M., & Van Baalen, M. (2022). Estimating medical risk in human spaceflight. Npj Microgravity, 8(1), 8. </span> ",
  },
  family_and_friends: {
    title: "Family and Friends",
    explanation:
      "Family and friends are close interpersonal relationships that provide social support.        ",
  },
  supplies: {
    title: "Supplies",
    explanation:
      "Supplies encompass temporary, consumable, and depletable assets. Supplies may include personal effects, logistical support (e.g., vacuum, trash bags), scientific equipment (e.g., rodents, plants, test tubes), ECLSS (e.g., water filters, CO2 regeneration substrates), and tools. Certain supplies have been defined separately due to their relative significance, for instance food/water and medical supplies. <br>  Note that supplies are defined separately from fixtures, which is an arbitrary distinction at times. In general, we would describe supplies as items that are meant to be replaced on a more regular basis than fixtures, which may be intended to serve the same function for the lifespan of the habitat.    ",
  },
  food: {
    title: "Food",
    explanation:
      "Consumables containing the six types of nutrients: lipids, vitamins, water, carbohydrates, protein, and minerals <span style='color:gray'>[Insel 2014]</span>. <br> Considerations for the space food system include safety, nutrition, usability, resource minimization, reliability, stability, variety, and palatability <span style='color:gray'>[Douglas 2020]</span>. These sets of considerations may be similar for environments burdened by resource limitations, such as for disaster-relief.         <br><br><br> <span style='color:gray'>Insel, P. M. (2014). Nutrition. Jones & Bartlett Publishers. <br>Douglas, G. L., Zwart, S. R., & Smith, S. M. (2020). Space food for thought: Challenges and considerations for food and nutrition on exploration missions. The Journal of Nutrition, 150(9), 2242-2244. </span>        ",
  },
  exercise_equipment: {
    title: "Exercise Equipment",
    explanation:
      "Exercise equipment are tools and machines whose primary function is to provide an exercise environment or program. Early space missions used elastic bands coupled with physical exercises as the primary countermeasure against musculoskeletal deconditioning <span style='color:gray'>[Scott 2023]</span>. Currently, the International Space Station exercise equipment includes the Advanced Resistive Exercise Device (ARED), a treadmill (T2), and a cycle ergometer (CEVIS) <span style='color:gray'>[Scott 2023]</span>.        <br><br><br> <span style='color:gray'> Scott, J. M., Feiveson, A. H., English, K. L., Spector, E. R., Sibonga, J. D., Dillon, E. L., Ploutz-Snyder, L., & Everett, M. E. (2023). Effects of exercise countermeasures on multisystem function in long duration spaceflight astronauts. Npj Microgravity, 9(1), 11. </span>      ",
  },
  light_dark_cycles: {
    title: "Light/Dark Cycles",
    explanation:
      "Light/dark cycles typically occur every 24 hours on Earth with shifting portions of light and dark, depending on where one resides and the time of year. Polar regions on Earth experience 6 months of day and 6 months of darkness, also known as polar day and night <span style='color:gray'>[Palinkas and Suedfeld 2008]</span>. On the International Space Station, light/dark transitions occur every 45 minutes due to the velocity of the station in its orbit, resulting in 16 sunrises and sunsets every day <span style='color:gray'>[Thirsk 2009]</span>.         <br><br><br> <span style='color:gray'> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Thirsk, R., Kuipers, A., Mukai, C., & Williams, D. (2009). The space-flight environment: the International Space Station and beyond. Cmaj, 180(12), 1216-1220. </span>  ",
  },
  altered_gravity: {
    title: "Altered Gravity",
    explanation:
      "We denote the gravity level on Earth (~9.81 m/s^2 acceleration toward the Earth, depending on elevation) as 1 ‘g’. Altered gravity includes microgravity ‘0g’ (e.g., freefall around Earth, as seen onboard the International space Station [DeLombard 2004]) and partial gravity: Martian ‘0.38g’ (or about 1/3 Earth gravity) and Lunar ‘0.16g’ (or about 1/6 Earth gravity) [Pletser 2012].         <br><br><br> <span style='color:gray'> Norsk, P. (2021). Physiological effects of spaceflight–Weightlessness: An overview. Handbook of Bioastronautics, 93-105.  <br> Pletser, V., Winter, J., Duclos, F., Bret-Dibat, T., Friedrich, U., Clervoy, J. F., ... & Sundblad, P. (2012). The first joint European partial-G parabolic flight campaign at Moon and Mars gravity levels for science and exploration. Microgravity Science and Technology, 24, 383-395. </span>  ",
  },
  radiation: {
    title: "Radiation",
    explanation:
      " <span style='font-size:8pt'> In extreme environments (such as deep space), radiation levels are elevated due to a combination of background Galactic Cosmic Radiation (GCR), Solar Particle Events (SPEs), and localized trapped particle belts. Radiation protection for spacesuits and habitats can alter the radiation dose received by the crew <span style='color:gray'>[Allen 2018]</span>. <br> GCRs are continuous and uniform (in all directions) flow of charged particles, ranging from hydrogen to uranium, arriving from outside the solar system. While GCRs have no acute effects due to their low dosage, chronic exposure is not well-characterized and uncertainties in biological/physiological response exist for long-duration spaceflight. <br> SPEs are randomized ejections and accelerations of solar particles, causing energy fluxes upward of 100 MeV. The pattern of SPEs is not well understood and therefore difficult to predict. <br> Two main electron belts (at 3,000 and 25,000 km; few keV to 10 MeV) and one proton belt (at 3,000 km; 100keV to few hundred MeV) exist around the Earth, and radiation belt models exist (e.g., AE-9, AP-9, CRRESELE, CRRESPRO). <br> Events on Earth, such as nuclear facility accidents (e.g., Fukushiima Dachii, 2011), can have impacts on the safety of nearby water and food, and increased mortalities and morbidities <span style='color:gray'>[Jones 2013]</span>. On a much larger scale, the use of atomic bombs (only time in history – Hiroshima and Nagasaki, 1945) resulted in over 200,000 deaths before year’s end <span style='color:gray'>[Ten Hoeve and Jacobson 2012]</span>.        <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Jones, C. F., Loh, S. L., & Satō, K. (2013). Narrating Fukushima: Scales of a nuclear meltdown. East Asian Science, Technology and Society: An International Journal, 7(4), 601-623. <br> Ten Hoeve, J. E., & Jacobson, M. Z. (2012). Worldwide health effects of the Fukushima Daiichi nuclear accident. Energy & Environmental Science, 5(9), 8743-8757.  </span> ",
  },
  atmosphere: {
    title: "Atmosphere",
    explanation:
      "Atmospheric considerations include pressure, gas composition, partial pressures of constituent gasses, absolute/relative humidity, temperature, microbes, trace contaminants, and particulate matter. In closed, pressurized, artificial atmospheres such as the one onboard the International Space Station, the atmosphere must be carefully monitored and managed <span style='color:gray'> [Wieland 2005]</span>. <br> One of the main effects of climate change is the escalation of average global temperatures and increased CO2 concentration (currently over 425 ppm as of April 2024) <span style='color:gray'> [NOAA 2024]</span>. These changes may create additional considerations for atmospheric management when designing for Earth.         <br><br><br> <span style='color:gray'> Wieland, P.O. (2005). Designing For Human Presence in Space: An Introduction to Environmental Control and Life Support Systems (ECLSS). NASA. NASA/TM—2005–214007. <br> NOAA. (2024) Trends in Atmospheric Carbon Dioxide. National Oceanic and Atmospheric Administration Global Monitoring Laboratory. Accessed April 9, 2024. https://gml.noaa.gov/ccgg/trends/monthly.html. </span>        ",
  },
  acoustics: {
    title: "Acoustics",
    explanation:
      "The acoustic environment includes continuous and intermittent noise. Continuous noise may be due to the environment or equipment, and typically measured with noise criteria (NC) curves that describe permissible levels (dB) of noise at given frequencies (hz) <span style='color:gray'>[Allen 2018]</span>. Intermittent noise, defined as noise for 8 hours or less in a 24 hour period, has a ceiling of 115-dBA (weighted with time) as set by OSHA <span style='color:gray'>[US Occupational Safety & Health Administration 1983]</span>. Noise may impact communication, nominal operations, and sleep <span style='color:gray'>[Allen 2018]</span>.         <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Occupational Safety and Health Administration, US Department of Labor (1983). Occupational Noise Exposure: Hearing Conservation Amendment. Final Rule. 29 CFR 1910.95, Federal Register 46 (11), 4978–4981. </span>       ",
  },
  nutrition: {
    title: "Nutrition",
    explanation:
      "Nutrition encompasses what we consume (nutrients and other substances), the interactions between the consumed and health/disease, body processes (absorption, digestion, excretion, etc), and the social/cultural/psychological implications of eating <span style='color:gray'>[Insel 2014]</span>.      <br><br><br> <span style='color:gray'> Insel, P. M. (2014). Nutrition. Jones & Bartlett Publishers. </span>        ",
  },
  habitable_volume: {
    title: "Habitable Volume",
    explanation:
      "When considering a pressurized system, there are differences between the total pressurized volume (the interior volume determined by the inner physical envelope) and the usable volume by its occupants <span style='color:gray'>[Rudisill 2010]</span>. After the equipment, stowage, and outfitting of the interior, the remaining space is typically termed the “sand” volume (i.e., volume if sand could fill all crevices) <span style='color:gray'>[Rudisill 2010]</span>. However, not all sand volume is usable or relevant for day-to-day living; for example, consider the volume beneath a couch or inside the fridge. Therefore, a smaller “net habitable volume” is typically the figure of merit for habitat design, and traditionally about 60% of total pressurized volume for space habitats <span style='color:gray'>[Rudisill 2010]</span>.        <br><br> <span style='color:gray'> Rudisill, M., Howard, R., Griffin, B., Green, J., Toups, L., Kennedy, K. (2008). 'Lunar Architecture Team – Phase 2 Habitat Volume Estimation: ‘Caution When Using Analogs’ ', ASCE Earth and Space Conference, Long Beach, CA. </span>  ",
  },
  environmental_control: {
    title: "Environmental Control",
    explanation:
      "Environmental monitoring and control is necessary to maintain a habitable environment inside a confined space. For a spacecraft, the subsystem responsible for regulating the environment is termed “Environmental Control and Life Support Systems”, or ECLSS. ECLSS comprises many subcomponents, which are responsible for thermal management, maintaining and monitoring atmospheric content (pressure, partial pressures, moisture, microbes, contaminants), water, and waste. It also typically includes fire detection, suppression, and cleanup systems <span style='color:gray'>[Broyan 2021]</span>.        <br><br><br> <span style='color:gray'> Broyan, J. L., Shaw, L., McKinley, M., Meyer, C., Ewert, M. K., Schneider, W. F., Meyer, M., Ruff, G. A., Owens, A. C., & Gatens, R. L. (2021). NASA Environmental Control and Life Support Technology Development for Exploration: 2020 to 2021 Overview. 50th International Conference on Environmental Systems. </span>        ",
  },
  circulation_paths: {
    title: "Circulation Paths",
    explanation:
      "Circulation refers to the movement through space. Circulation spaces encompass movement during the “approach” and “entry” phases, before entering into the actual building or space <span style='color:gray'>[Ching 2023]</span>, which may be relevant for extravehicular missions (e.g., visible and compatible docking ports for vehicles). In the interior, considerations include “configurations of the path” (e.g., linear, radial, spiral) that dictates the sequence of spaces; and “path-space relationships”, which considers if paths run adjacent to spaces, cut through spaces, or terminate in a space <span style='color:gray'>[Ching 2023]</span>. <br> Circulation may be designed, and change over time. For instance, “desire paths” refer to dirt paths that form over time due to pedestrians bypassing sidewalks <span style='color:gray'>[Lidwell 2010]</span>.        <br><br><br> <span style='color:gray'> Ching, F. D. (2023). Architecture: Form, space, and order. John Wiley & Sons. <br> Lidwell, W., Holden, K., & Butler, J. (2010). Universal principles of design, revised and updated: 125 ways to enhance usability, influence perception, increase appeal, make better design decisions, and teach through design. Rockport Pub. </span>  ",
  },
  layout: {
    title: "Layout",
    explanation:
      "Layout refers to the arrangement of spaces and the relationships (e.g., spatial, acoustic) between them. <br> Typically, layouts for space habitats are arranged programmatically (i.e., by “programs” or primary activities supported by the space). For instance, one study organized activities that had taken place in space habitats (from Apollo to the International Space Station) into the following programs: sleep, hygiene, food, work, and leisure. Subsystems can also have specific layouts. For example, the International Space Station uses “racks” as a standard unit so systems (e.g., CO2 removal scrubber) and experiments can share standardized interfaces <span style='color:gray'>[Pelfrey and Jordan 2008]</span>.      <br><br><br> <span style='color:gray'> Pelfrey, J., & Jordan, L. (2008). An EXPRESS Rack overview and support for microgravity research on the International Space Station (ISS). In 46th AIAA Aerospace Sciences Meeting and Exhibit (p. 819). </span>        ",
  },
  lighting: {
    title: "Lighting",
    explanation:
      "While natural lighting is important for everyday life, it is limited in extreme environments. Here, we discuss artificial lighting created to support living and working tasks. Some considerations for lighting include color (wavelength on the visible spectrum), color temperature (in degrees Kelvin), and brightness (lumens) <span style='color:gray'>[Karlen 2017]</span>. Operationally, additional design features such as dimmability, adjustments throughout the day to support circadian rhythms, and design of lighting layers (daylight, decorative, focal, task, and ambient) can be considered <span style='color:gray'>[Karlen 2017]</span>.      <br><br><br> <span style='color:gray'> Karlen, M., Spangler, C., & Benya, J. R. (2017). Lighting design basics. John Wiley & Sons. </span>        ",
  },
  privacy: {
    title: "Privacy",
    explanation:
      "Most privacy definitions vary in scope: personal privacy, as a state of being private <span style='color:gray'>[Bailey 1979]</span>; environmental privacy, as a characteristic of the architecture and built environment <span style='color:gray'>[Webster 1979]</span>; and the person-environment relationship of privacy as a transactional and regulated process <span style='color:gray'>[Altman 1975]</span>. Choice and the ability to regulate privacy is crucial. Components of privacy include the ability to be alone, as well as visual and auditory privacy <span style='color:gray'>[Marshall 1972]</span>.     <br><br><br> <span style='color:gray'> Bailey, G. W. S. (1979).  Privacy and the mental. Amsterdam: Rodopi N.V. <br>  Webster, N. (1979).  Webster’s new twentieth century unabridged dictionary. New York: Publishers International. <br> Altman, I. (1975). The environment and social behavior: Privacy, personal space, territory, crowding. Monterey, CA: Brooks/Cole. <br> Marshall, N. J. (1972). Privacy and environment. Human Ecology, 1(2), 93–110. </span>  ",
  },
  ergonomics: {
    title: "Ergonomics",
    explanation:
      "The field of ergonomics integrates knowledge about the human physical and cognitive limitations with the design of interfaces, products, environments, and jobs <span style='color:gray'>[Nussbaum and Van Dieën 2005]</span>. Physical ergonomics focuses on the demands placed on the human and the capabilities of the human to fulfill these, to ensure the demands do not exceed the capabilities <span style='color:gray'>[Nussbaum and Van Dieën 2005]</span>. One example is anthropometry, which is a science that characterizes the human body and a design tool for physical ergonomics; NASA has published an Anthropometric Source Book based largely on data from the military population <span style='color:gray'>[Churchill 1978]</span>. <br> Cognitive ergonomics focuses on the cognitive resources and demands for a given task, environment, and user <span style='color:gray'>[Stanton 2005]</span>. The quality of work is affected by the user’s understanding of the situation (e.g., situation awareness, mental models, goals), which in turn affects the quality of work <span style='color:gray'>[Hollnagel 1997]</span>. One key area of application is in human-robot interaction and joint cognitive systems, where cognitive ergonomics provides a lens of the “fit” of the work and mind in a coupled system, as opposed to simply the effects of one on the other <span style='color:gray'>[Hollnagel 1997]</span>.    <br><br> <span style='color:gray'>  Nussbaum, M. A., & Van Dieën, J. H. (2005). Physical Ergonomics. In M. Kutz (Ed.), Mechanical Engineers’ Handbook (1st ed., pp. 762–781). Wiley. <br> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. <br> Churchill, E., Laubach, L. L., Mcconville, J. T., & Tebbetts, I. (1978). Anthropometric Source Book—Volume I; Anthropometry for Designers.pdf. NASA. 19790003563 <br> Hollnagel, E. (1997). Cognitive ergonomics: It’s all in the mind. Ergonomics, 40(10), 1170–1182. </span>  ",
  },
  fixtures: {
    title: "Fixtures",
    explanation:
      "Here, we define fixtures to include assets of the habitat that are installed, fixed, and/or (semi-)permanent. Some examples include apertures (i.e., openings such as doors, windows, docking ports), signage (e.g., node labels on the International Space Station), stowage (e.g., spaces for personal items and photos), and furniture. Fixtures can serve function and decorative purposes for the habitat. Note that while exercise equipment may fall under “fixtures”, but we have defined it separately due to its significance in the space paradigm.         ",
  },
  reconfigurability: {
    title: "Reconfigurability",
    explanation:
      "The extent to which the habitat can be altered (physically, psychologically, or programmatically) to serve a different purpose. In a study of architectural themes across analogs and space habitats (from Apollo to the International Space Station), “flexibility” (i.e., allowing adjustments according to user requirements) was defined as a key desire, specifically <span style='color:gray'>[Häuplik-Meusburger 2011]</span>: <br> 1. Spatial flexibility (variation in size and locations) <br> 2. Object flexibility (variation in usage) <br> 3.Individual flexibility (personalized variations)    <br><br><br> <span style='color:gray'> Häuplik-Meusburger, S. (2011). Architecture for astronauts: an activity-based approach. Springer Science & Business Media. </span>       ",
  },
  environmental_monotony: {
    title: "Environmental Monotony",
    explanation:
      "Monotony is described by an unchanging environment, repetition of events or situations, and chronic absence of novelty <span style='color:gray'>[Das 2015]</span>. Here, environmental monotony is associated with characteristics of the built and natural environment, including layout, lighting, colors, textures, views, and sensory inputs.    <br><br><br> <span style='color:gray'> Das, S.K., Barhwal, K., Hota, S.K. (2015). Disrupting monotony during social isolation stress prevents early development of anxiety and depression like traits in male rats. BMC Neurosci 16, 2. </span>        ",
  },
  physical_workload: {
    title: "Physical Workload",
    explanation:
      "Physical workload refers to the physical work being performed. It can be measured in many ways, including physical assessments (e.g., musculoskeletal discomfort surveys, muscle fatigue assessments), physiological measurements (e.g., heart rate, respiration, electromyography), and behavioral measurements (e.g., observation) <span style='color:gray'>[Stanton 2005]</span>.        <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. </span>        ",
  },
  cognitive_workload: {
    title: "Cognitive Workload",
    explanation:
      "Cognitive workload refers to the amount of cognitive and mental effort required to perform a task or a set of concurrent tasks <span style='color:gray'>[Hoedemaeker 2002]</span>. Examples of cognitive workload measurement include subjective surveys (usually administered immediately after task completion), performance metrics (e.g., errors, time to task completion), and physiological measures (e.g., heart rate, pupil dilation) <span style='color:gray'>[Staton 2005][Marshall 2002]</span>.        <br><br><br> <span style='color:gray'> Hoedemaeker, M. (2002). Summary Description of Workload Indicators: WP1 Workload Measures. Human Machine Interface and the Safety of Traffic in Europe Growth Project. GRD1-2000-25361. HASTE. Institute for Transport Studies. Leeds, UK: University of Leeds. <br> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. <br> Marshall, S. P. (2002, September). The index of cognitive activity: Measuring cognitive workload. In Proceedings of the IEEE 7th conference on Human Factors and Power Plants (pp. 7-7). IEEE. </span> ",
  },
  media_attention: {
    title: "Media Attention",
    explanation:
      "Media attention is particularly important to the spaceflight population and other populations who may be in Isolated, Confined, and Extreme environments (e.g., refugees, civilians in war zones). Since 1958, when NASA was chartered with providing the “widest practicable and appropriate dissemination of information concerning its activities”, NASA has maintained a public presence in the media <span style='color:gray'>[Makemson 2009]</span>. Since 2009 with Mike Massimino's first ‘tweet’ from space, it has become common practice for astronauts to have public social media accounts. In most space-faring countries, astronauts are popular figures (as a group and some in their own right) with important public relations duties <span style='color:gray'>[Hersch 2012]</span>.        <br><br><br> <span style='color:gray'> Makemson, H. (2009). Media, NASA, and America's Quest for the Moon (Vol. 4). Peter Lang. <br> Hersch, M. H. (2012). Public Space. In Inventing the American Astronaut (pp. 131-158). New York: Palgrave Macmillan US. </span>",
  },
  transition_processes: {
    title: "Transition Processes",
    explanation:
      "Transition phases are when teams are primarily focused on planning and evaluation of team goals. Processes most salient during the transition phase are as follows <span style='color:gray'>[Marks 2001]</span>: <br> - Mission analysis: identifying and evaluating the mission goals, environmental conditions, and resources available to execute the mission. This includes ensuring a shared mental model of the team’s purpose and objectives. <br> - Goal specification: identification and prioritization of goals, discussing how much needs to be accomplished within a certain time frame, to what quality. <br> - Strategy formulation: developing courses of action, including prioritization, task assignment, and discussion of expectations. Further delineating strategy formulation, this process can be broken down into 1) planning for nominal/planned activities, 2) emergency/contingency planning, and 3) reactive strategy adjustment.        <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376. </span>        ",
  },
  action_processes: {
    title: "Action Processes",
    explanation:
      "Action phases are when teams are actively conducting activities that lead to goal achievement. Processes most salient during the action phase are as follows <span style='color:gray'>[Marks 2001]</span>: <br> - Monitor progress: tracking tasks and progress toward team goals. This includes providing feedback and updates to team members to evaluate progress and likelihood of success. <br> - Systems monitoring: tracking status of resources and environmental conditions. This is also known as situation awareness, or monitoring of internal systems (e.g., equipment, resources) and external systems (e.g., weather) relevant to mission success. <br> - Team monitoring: assisting team members to complete their tasks, including offering feedback, helping, or offloading the task. <br> - Coordination: managing the sequence and timing of interdependent tasks. This information exchange and mutual adjustment of activities aligns the pace and sequencing of actions for more productive goal accomplishment.         <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376. </span>   ",
  },
  interpersonal_processes: {
    title: "Interpersonal Processes",
    explanation:
      "Interpersonal processes occur through both transition and action phases, and lay the foundation for the effectiveness of other team processes [Marks 2001]. They are as follows [Marks 2001]: <br> - Conflict management: helps resolve or manage conflict in two ways: 1) preemptively, by establishing conditions to prevent, control, or guide conflicts (e.g., establishing team norms), and 2) reactively, by working through task or interpersonal conflicts that have arisen (e.g., problem-solving, compromising). <br> - Motivating: preserving a collective sense of confidence, motivation, and cohesion toward the team goal. <br> - Affect management: calibrating and regulating team members’ emotions that may be shifting due to task-based (e.g., stress), personal (e.g., animosity), and external (e.g., job security) factors.         <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376. </span> ",
  },
  stress_regulation: {
    title: "Stress Regulation",
    explanation:
      "When faced with a stressor (a situation in which an individual needs to adjust their usual behavior), individuals usually vary greatly in how they respond, manage, and resolve stress. The variables of the stress regulation process includes the magnitude of physiological/emotional responses, length of time for recovery, and the extent of adequate recovery during/following the stressor – also denoted as exposure, reactivity, recovery, and restoration <span style='color:gray'>[Williams 2009]</span>.      <br><br><br> <span style='color:gray'> Williams, P. G., Suchy, Y., & Rau, H. K. (2009). Individual differences in executive functioning: Implications for stress regulation. Annals of Behavioral Medicine, 37(2), 126-140. </span>        ",
  },
  place_attachment: {
    title: "Place Attachment",
    explanation:
      "Place attachment is the affective bond and the process of bonding (i.e., “attachment”) between an individual and a space of significance (i.e., “place”)  <span style='color:gray'>[Altman and Low 1992][Scannell and Gifford 2010]</span>. It has been argued that a “sense of place” fulfills a universal human need  <span style='color:gray'>[Relph 1976]</span> and promotes safety and security  <span style='color:gray'>[Fried 2000]</span>. <br> In Isolated, Confined, and/or Extreme environments, place attachment can refer to the current place (e.g., spacecraft) that we may seek to support; or to the “home” environment (e.g., Earth) that we might seek to manage.            <br><br><br> <span style='color:gray'>  Altman, I., & Low, S. M. (Eds.). (1992). Place Attachment. Springer US. <br> Scannell, L., & Gifford, R. (2010). Defining place attachment: A tripartite organizing framework. Journal of Environmental Psychology, 30(1), 1–10. <br>  Relph, Edward. Place and Placelessness (1976): In P. Hubbard, R. Kitchin, & G. Valentine, Key Texts in Human Geography (pp. 43–52). SAGE Publications Ltd. <br> Fried, M. (2000). CONTINUITIES AND DISCONTINUITIES OF PLACE. Journal of Environmental Psychology, 20(3), 193–205. </span> ",
  },
  sleep: {
    title: "Sleep",
    explanation:
      "Adults are recommended to sleep at least 7 hours per night for optimal health  <span style='color:gray'>[Watson 2015]</span>. Qualifiers for healthy sleep comprise duration, quality, regularity, and timing – often defined broadly as ‘sleep architecture’ in space studies. Two separate studies on the International Space Station found that astronauts slept less than 6 hours on 35-45% of nights  <span style='color:gray'>[Jones 2022][Barger 2014]</span>.        <br><br><br> <span style='color:gray'>  Watson, N. F., Badr, M. S., Belenky, G., et al. (2015). Recommended Amount of Sleep for a Healthy Adult: A Joint Consensus Statement of the American Academy of Sleep Medicine and Sleep Research Society. Journal of Clinical Sleep Medicine, 11(06), 591–592. <br> Jones, C. W., Basner, M., Mollicone, D. J., Mott, C. M., & Dinges, D. F. (2022). Sleep deficiency in spaceflight is associated with degraded neurobehavioral functions and elevated stress in astronauts on six-month missions aboard the International Space Station. Sleep, 45(3), zsac006. <br> Barger, L. K., Flynn-Evans, E. E., Kubey, A., Walsh, L., Ronda, J. M., Wang, W., Wright, K. P., & Czeisler, C. A. (2014). Prevalence of sleep deficiency and use of hypnotic drugs in astronauts before, during, and after spaceflight: An observational study. The Lancet Neurology, 13(9), 904–912. </span>    ",
  },
  crew_performance: {
    title: "Crew Performance",
    explanation:
      " <span style='font-size:8pt'>Individual-level performance is typically task-related (e.g., accomplishment of task goals, errors, task duration). However, most often tasks are accomplished as a team <span style='color:gray'>[Bell 2015]</span>, and overall performance relies on both the individual team members and the team as a whole <span style='color:gray'>[Mathieu 2014]</span>. <br> Team performance comprises the health of a team and the individual performances of each member. Based on the input-mediator-output-input model <span style='color:gray'>[Ilgen 2005][Grossman 2017]</span>, team performance here encompasses both the accomplishment of tasks and goals as set by mission parameters, and also the cognitive and affective “emergent” states of a team <span style='color:gray'>[Grossman 2017][Marks 2001]</span>. Affective states include team cohesion, team confidence, and team trust; cognitive states include team mental models, situational awareness, and team learning <span style='color:gray'>[Grossman 2017]</span>. <br>  In isolated environments, the effect of team cohesion has an exaggerated relationship with team performance due to the extreme environment <span style='color:gray'>[Vessey and Landon 2017]</span>.       <br><br> <span style='color:gray'> Bell, S. T. et al. (2015). Critical Team Composition Issues for Long-Distance and Long-Duration Space Exploration. <br> Mathieu, J. E., Tannenbaum, S. I., Donsbach, J. S., & Alliger, G. M. (2014). A Review and Integration of Team Composition Models: Moving Toward a Dynamic and Temporal Framework. Journal of Management, 40(1), 130-160. <br> Ilgen, D. R. et al. (2005). Teams in organizations: From input–process–output models to IMOI models. Annual Review of Psychology, 56, 517–543. <br> Grossman, R. et al. (2017). Teamwork Processes and Emergent States. In E. Salas et al., The Wiley Blackwell Handbook of the Psychology of Team Working and Collaborative Processes (p. 243–269). Wiley. <br> Marks, M.A. et al. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376. <br>  Vessey, W. B., & Landon, L. B. (2017). Team Performance in Extreme Environments. In E. Salas, R. Rico, & J. Passmore (Eds.), The Wiley Blackwell Handbook of the Psychology of Team Working and Collaborative Processes (1st ed., pp. 531–553). Wiley. </span> </span> ",
  },
  physical_health: {
    title: "Physical Health",
    explanation:
      "Health is a large umbrella term. A typical consideration is the length of life, expressed in average life expectancy, mortality rates, and death due to specific causes <span style='color:gray'>[NCHS 2024]</span>. Physical health metrics may include physical ability, physical limitations, pain, and health outlook <span style='color:gray'>[Ware 1987]</span>. <br> Spaceflight considerations include adverse effects to radiation (e.g., increased cancer risk, degenerative tissue diseases), central nervous system deconditioning, muscle/bone/cardiovascular atrophy due to unloading/migravity, inadequate food and nutrition, lunar dust exposure, and injuries due to extravehicular activities <span style='color:gray'>[McPhee and Charles 2009]</span>. On Earth, the United States Center for Disease Control recommends 30 minutes of moderate exercise every day to maintain health <span style='color:gray'>[Pate 1995]</span>.      <br><br><br> <span style='color:gray'> NCHS: Health. (2024). United States: U.S. Department of Health and Human Services. Accessed May 5, 2024. <br> Ware, E. J. (1987). Standards for validating health measures: Definition and content. Journal of Chronic Diseases, 40(6), 473–480. <br> McPhee, J. C., & Charles, J. B. (Eds.). (2009). Human health and performance risks of space exploration missions: evidence reviewed by the NASA human research program (Vol. 3405). US National Aeronautics & Space Administration. <br>  Pate, R. R., Pratt, M., Blair, S. N., et al. (1995). Physical activity and public health: a recommendation from the Centers for Disease Control and Prevention and the American College of Sports Medicine. Jama, 273(5), 402-407. </span>",
  },
  stress: {
    title: "Stress",
    explanation:
      "Stress refers to any environmental, social, or internal demand which prompts an individual to adjust their usual behavior <span style='color:gray'>[Holmes and Rahe 1967][Thoits 1995]</span>. We feel stressed when the demand is beyond our capability to successfully cope <span style='color:gray'>[Brown 2021]</span>. Stress also has biological responses, promoting various physical and psychological effects on the body (e.g., neuroendocrine/hormone system, cerebral cortex), as well as adverse cognitive effects (e.g., executive function and task performance) <span style='color:gray'>[Cibrian-Llanderal 2018]</span>.       <br><br><br> <span style='color:gray'> Holmes, T. H., & Rahe, R. H. (1967). The social readjustment rating scale. Journal of Psychosomatic Research, 11(2), 213–218. <br> Thoits, P. A. (1995). Stress, Coping, and Social Support Processes: Where Are We? What Next? Journal of Health and Social Behavior, 35, 53. <br>  Cibrian-Llanderal, T., Melgarejo-Gutierrez, M., & Hernandez-Baltazar, D. (2018). Stress and cognition: Psychological basis and support resources. Health and academic achievement, 11(10.5772). <br>  Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. </span> ",
  },
  fatigue: {
    title: "Fatigue",
    explanation:
      "Fatigue is multidimensional, encompassing physical, physiological, and psychological aspects.  Fatigue is defined as “the awareness of a decreased capacity for physical and/or mental activity due to an imbalance in the availability, utilization, and/or restoration of resources needed to perform activity” [Aaronson 1999]. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a fatigue-inertia subconstruct <span style='color:gray'>[McNair 1971]</span>.       <br><br><br> <span style='color:gray'> McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services. <br> Aaronson, L. S., Teel, C. S., Cassmeyer, V., Neuberger, G. B., Pallikkathayil, L., Pierce, J., ... & Wingate, A. (1999). Defining and measuring fatigue. Image: the journal of nursing scholarship, 31(1), 45-50. </span>",
  },
  anxiety: {
    title: "Anxiety",
    explanation:
      "Anxiety is characterized by tension, worried thoughts, and physiological responses (e.g., elevated blood pressure) <span style='color:gray'>[Corsini and Ozaki 1994]</span>. Anxiety is both a state and trait, meaning that some people are more disposed to anxious feelings, while others may experience anxiety more acutely <span style='color:gray'>[Brown 2021]</span>. Beyond clinical interviews or professional assessments, subjective measures of anxiety exists in the form of surveys; some widely-used ones are the State-Trait Anxiety Inventory (STAI), Beck Anxiety Inventory (BAI), and the Hospital Anxiety and Depression Scale - Anxiety (HADS-A) <span style='color:gray'>[Julian 2011]</span>. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a tension-anxiety subconstruct <span style='color:gray'>[McNair 1971]</span>.        <br><br><br> <span style='color:gray'> Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. <br> Corsini, R. J., & Ozaki, B. D. (1994). Encyclopedia of psychology (Vol. 1). New York: Wiley. <br> Julian, L. J. (2011). Measures of anxiety: state‐trait anxiety inventory (STAI), Beck anxiety inventory (BAI), and Hospital anxiety and Depression scale‐anxiety (HADS‐A). Arthritis care & research, 63(S11), S467-S472. <br> McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services. </span>",
  },
  autonomy: {
    title: "Autonomy",
    explanation:
      "Autonomy is the ability to make independent decisions, often task-related (how and when to complete a task) in spaceflight settings. Closely related is autonomy, which refers to the capacity to act intentionally and/or the sense of volition (the power to enact one’s will) <span style='color:gray'>[Schlosser 2015][Goemaere 2016]</span>. Current Low Earth Orbit operational paradigms provide little autonomy to the crewmembers, as work schedules are set by mission control and modifications to procedures or plans are consulted with ground <span style='color:gray'>[Goemaere 2016]</span>. However, current autonomy levels will need to change as mission distances and communication delays increase, leading to less ground support <span style='color:gray'>[Marquez 2017]</span>. While there are efforts to increase crew autonomy through self-scheduling activities, for example, there are still major unknowns on the balance between crew and ground control <span style='color:gray'>[Marquez 2017]</span>.        <br><br><br> <span style='color:gray'> Schlosser, M. (2015). Agency. Stanford Encyclopedia of Philosophy. Accessed May 2, 2024. <br>  Goemaere, S., Vansteenkiste, M., & Van Petegem, S. (2016). Gaining deeper insight into the psychological challenges of human spaceflight: The role of motivational dynamics. Acta Astronautica, 121, 130-143. <br> Marquez, J. J., Hillenius, S., Kanefsky, B., Zheng, J., Deliz, I., & Reagan, M. (2017, March). Increasing crew autonomy for long duration exploration missions: self-scheduling. In 2017 IEEE Aerospace Conference (pp. 1-10). IEEE. </span> ",
  },
  situation_awareness: {
    title: "Situation Awareness",
    explanation:
      "Situation awareness is the internalized mental model of the current state of one’s environments <span style='color:gray'>[Endsley 2021]</span>. Formally, it is defined most widely as “the perception of the elements in the environment within a volume of time and space, the comprehension of their meaning and the projection of their status in the near future” <span style='color:gray'>[Endsley 1988]</span>. There are three components: 1) perceiving relevant information in the environments, 2) understanding what they mean for one’s goals, and 3) predicting what will happen in the system in the near future – defined as levels 1, 2, and 3 situation awareness, respectively <span style='color:gray'>[Endsley 2021]</span>.        <br><br><br> <span style='color:gray'> Endsley, M. R. (1988). Design and evaluation for situation awareness enhancement. In Proceedings of the Human Factors Society 32nd Annual Meeting (pp. 97–101). Santa Monica, CA: Human Factors Society. <br> Endsley, M. R. (2021). Situation awareness. Handbook of human factors and ergonomics, 434-455. </span> ",
  },
  trust: {
    title: "Trust",
    explanation:
      "Trust is a cognitive assessment about the level of risk of making something valued, vulnerable to someone’s (or something’s) actions <span style='color:gray'>[Feltman 2011]</span>. Some aspects of trust (-building or -maintaining) include respecting boundaries, reliability, accountability, integrity, and non-judgement <span style='color:gray'>[Brown 2021]</span>. These may be referred to as the interpersonal or ability-based aspects of trust, important on a personal or team level <span style='color:gray'>[Mayor 1995][Hoff and Bashir 2015]</span>. Trust in automation, which is especially relevant in spaceflight contexts, are more heavily reliant on performance-based trust (i.e., performance, process, or purpose) <span style='color:gray'>[Lee and Moray 1992]</span>.        <br><br><br> <span style='color:gray'>  Feltman, C. (2011). The thin book of trust: An essential primer for building trust at work. Thin Book Publishing. <br> Mayer R. C., Davis J. H., Schoorman F. D. (1995). An integrative model of organizational trust. Academy of Management Review, 20, 709–734. <br>  Hoff, K. A., & Bashir, M. (2015). Trust in automation: Integrating empirical evidence on factors that influence trust. Human factors, 57(3), 407-434. <br>  Lee J. D., Moray N. (1992). Trust, control strategies and allocation of function in human machine systems. Ergonomics, 22, 671–691. </span>",
  },
  curiosity: {
    title: "Curiosity",
    explanation:
      "Curiosity can be a state (i.e., a curious person) or a trait (i.e., feel curious in the moment), and has both cognitive and affective components <span style='color:gray'>[Brown 2021]</span>. Interest, or the intellectual component of curiosity, is a prerequisite to the eventual recognition of a knowledge gap and investment to fill the gap through exploration and learning <span style='color:gray'>[Brown 2021]</span>.       <br><br><br> <span style='color:gray'>  Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. </span>       ",
  },
  kinship: {
    title: "Kinship",
    explanation:
      "During its conception, kinship was used to describe familial or genealogical ties, for example in “next of kin”. David Durkheim, the founder of sociology as a formal discipline, sought to explain kinship as “mutual relations of being, participation in one another’s existence” <span style='color:gray'>[Sahlins 2011]</span>. Kinship, whose definition has been debated in anthropology for over 150 years <span style='color:gray'>[Sahlins 2011]</span>, is chosen here to be the encompassing umbrella of mutual relational closeness, which comprises several subconstructs: belonging, connection, and loneliness. <br><br> Belonging – the connection that arises between people and groups without the need to compromise authenticity or values <span style='color:gray'>[Brown 2021]</span> – is a core concept to kinship. Meaningful connections, that allows people to feel seen and valued, are psychologically critical <span style='color:gray'>[Maslow and Lewis 1987]</span>. Loneliness is the absence of such meaningful connections, and is associated with a greater risk of physiological and psychological illnesses <span style='color:gray'>[Brown 2021]</span>.       <br><br><br> <span style='color:gray'> Sahlins, M. (2011). What kinship is (part one). Journal of the Royal Anthropological Institute, 17(1), 2-19. <br> Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. <br> Maslow, A., & Lewis, K. J. (1987). Maslow's hierarchy of needs. Salenger Incorporated, 14(17), 987-990. </span> ",
  },
  boredom: {
    title: "Boredom",
    explanation:
      "Boredom arises from a lack of stimulation, attention, or arousal <span style='color:gray'>[Bench and Lench 2013]</span>. It is defined as the negative experience of wanting, but being unable to, engage in satisfying activity <span style='color:gray'>[Eastwood 2012]</span>. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a vigor-activity subconstruct, which may be a close approximate <span style='color:gray'>[McNair 1971]</span>.        <br><br><br> <span style='color:gray'>  Bench, S. W., & Lench, H. C. (2013). On the function of boredom. Behavioral sciences, 3(3), 459-472. <br> Eastwood, J. D., Frischen, A., Fenske, M. J., & Smilek, D. (2012). The unengaged mind: Defining boredom in terms of attention. Perspectives on psychological science, 7(5), 482-495. <br> McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services. </span>",
  },
  depression: {
    title: "Depression",
    explanation:
      "<span style='font-size:8.5pt'>Depression has been studied as a clinical symptom for over 2,000 years <span style='color:gray'>[Beck and Alford 2009]</span>. Depression is a cluster of behaviors that are persistent in time, including lack of interest in activities, loss of appetite, negative self-view, and alteration of mood (e.g., sadness, loneliness, apathy) <span style='color:gray'>[Brown 2021][Beck and Alford 2009]</span>. Common scales for measuring depression include the Beck Depression Inventory (BDI) and the Depression Anxiety Stress Scales (DASS) [Beck 1987][Lovibond and Lovibond 1995]. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a depression-dejection subconstruct <span style='color:gray'>[McNair 1971]</span>. <br>  While sadness is common to depression, it is not a necessary trait of depression <span style='color:gray'>[Beck and Alford 2009]</span>. Although we have not defined it explicitly, it is an important component of the human emotional spectrum, with its most salient representation in behavioral health as a symptom of depression. Similarly, grief - composed of feelings of loss and longing – may be associated with ‘depressed mood’ but is realistically distinct <span style='color:gray'>[Brown 2021]</span>.     <br><br><br> <span style='color:gray'> Beck, A. T., & Alford, B. A. (2009). Depression: Causes and treatment. University of Pennsylvania Press. <br> Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. <br> Beck, A. T., Steer, R. A., & Brown, G. K. (1987). Beck depression inventory. San Antonio, TX. <br> Lovibond, P. F., & Lovibond, S. H. (1995). The structure of negative emotional states: Comparison of the Depression Anxiety Stress Scales (DASS) with the Beck Depression and Anxiety Inventories. Behaviour research and therapy, 33(3), 335-343. <br>  McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services. </span> </span>",
  },
  nostalgia_homesickness: {
    title: "Nostalgia/Homesickness",
    explanation:
      "Homesickness is the set of feelings that are associated with the loss of known people and places <span style='color:gray'>[Brown and Perkins 1992]</span>. Nostalgia is difficult to define precisely, but one interpretation is a primarily positive, context-specific emotion that combines sadness, happiness, yearning, and loss <span style='color:gray'>[Brown 2021]</span>. We grouped them here since they are likely to occur in parallel in the context of Isolated, Confined, and Extreme environments.         <br><br><br> <span style='color:gray'> Brown, B. B., & Perkins, D. D. (1992). Disruptions in Place Attachment. In I. Altman & S. M. Low (Eds.), Place Attachment (pp. 279–304). Springer US. <br>  Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. </span>",
  },
  contentment: {
    title: "Contentment",
    explanation:
      "We distinguish contentment here as a low-arousal emotion that may compose feelings of peace, tranquility, satisfaction, and calm <span style='color:gray'>[Brown 2021]</span>. Closely related constructs – happiness, joy, and gratitude – are more high-arousal emotions. We choose contentment here as the ‘catch-all’ for these positive emotions connected to the environment, as a more tangible attribute to promote as a behavioral health outcome.  <br>  To distinguish from contentment, the state of happiness is a feeling of pleasure related to the immediate environment or circumstances <span style='color:gray'>[Brown 2021]</span>. Happiness is more immediate, while other factors (e.g., joy and contentment) may be more chronic, and acute happiness may not necessarily contribute to long-term contentment <span style='color:gray'>[Brown 2021]</span>.       <br><br><br> <span style='color:gray'> Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. </span> ",
  },
};

/*Define content for each box upon clicking/hovering, CHANGE EXPLANATION TEXTS HERE*/
var relatedBoxContents = {
  crew_selection_crew_selection: {
    title: "Crew Selection",
    explanation:
      "Astronaut selection was originally carried out by NASA and the Soviet Space Program, and now Japan, China, Russia, Brazil, and countries in Europe have selected their own astronauts <span style='color:gray'>[NASA 2024]</span>. Due to historical and sociopolitical factors, only male candidates were originally allowed to become astronauts, with one exception in the early 1960s (Valentina Tereshkova, USSR). Female candidates were accepted regularly in the 1980s, although still comprise a minority of the program [Steimle and Norberg 2013]. <br><br> Selection criteria include educational/professional qualifications and candidates must be able to pass the astronaut physical, medical, and psychological exams. More restrictively, astronaut candidates from most programs must exhibit mental and personal capabilities which are selected for and evaluated by a panel of experts <span style='color:gray'>[Steimle and Norberg 2013]</span>. <br><br><br> <span style='color:gray'>NASA. (2024) 'Becoming an astronaut: Frequently asked questions,' NASA.gov. Last updated March 5, 2024. Accessed March 7, 2024. https://www.nasa.gov/humans-in-space/becoming-an-astronaut-frequently-asked-questions/<br>Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg. https://doi.org/10.1007/978-3-642-23725-6_7</span>",
  },
  distance_from_home_earth_distance_from_home_earth: {
    title: "Distance From Home/Earth",
    explanation:
      "In general applications, distance from home is dependent on the changing definition of home, which has been hypothesized to generally fall into categories of physical structures, territories, self and self-identity, and social-cultural units <span style='color:gray'>[Hayward 1975][Case 1996]</span>. Therefore, “home” may be multiple, constructed, and changing as one leaves and creates new homes. Distance from home can be considered as difficulties due to physical constraints (distance, time), economic (unemployment, cost), social-cultural (values), or political (visas, policies, asylum, deportation) <span style='color:gray'>[Angulo 2010]</span>. Space-specific considerations include orbit alignment, mission impacts, and resource limitations (food, water, fuel). <br><br><br> <span style='color:gray'>Hayward, G. (1975). Home as an environmental and psychological concept. Landscape, 20, 2–9. <br>Case, D. (1996). CONTRIBUTIONS OF JOURNEYS AWAY TO THE DEFINITION OF HOME: AN EMPIRICAL STUDY OF A DIALECTICAL PROCESS. Journal of Environmental Psychology, 16(1), 1–15. https://doi.org/10.1006/jevp.1996.0001. <br> Angulo, M. I. (2010). WHEN HOME IS NO LONGER THERE: RETURN MIGRATION IN A TIME OF CRISIS. Migration, 48. </span>",
  },
  mission_duration_mission_duration: {
    title: "Mission Duration",
    explanation: "test",
  },
  /* Space mission durations vary, with the longest space mission being on the order of 1 year (Valeri Polyakov on Mir - 437 days; Frank Rubio on ISS - 371 days; Mark Vande Hei on ISS - 355 days) <span style='color:gray'>[Archie 2023]</span>. Analog missions aim to replicate space-like conditions, such as isolation for 45 days in the Human Research Exploration Analog [NASA 2024]. Mission durations in the Antarctic region vary between the summer cohorts (about 3 months) and the winter-over cohorts (ranging from 6-9 months) <span style='color:gray'>[Harrison 1991]</span>. <br> The duration of voluntary migrations can be up to multigenerational. The duration of involuntary migrations can vary, from weeks (Kosovars in 1999) to decades (Palestinians, 70 years) <span style='color:gray'>[Devictor 2017]</span> <br><br><br>  <span style='color:gray'>Ayana Archie (2023). “A NASA Astronaut is back on Earth after a year in space, the longest for an American.” Updated September 28, 2023. Accessed March 12, 2024. https://www.npr.org/2023/09/20/1200374445/nasa-frank-rubio-record-yearlong-flight. <br> NASA. (2024) “HERA” Accessed March 12, 2024. https://www.nasa.gov/mission/hera/. <br> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. </span>
   */
  communication_delay_communication_delay: {
    title: "Communication Delay",
    explanation:
      "Missions rely on being able to communicate quickly with crew members in space. Communication delays for missions beyond Low Earth Orbit directly increase mission risks via increased time for resupply and emergency evacuations  <span style='color:gray'>[Parisi 2023]</span>. Seconds to minutes communication delay impacts real-time guidance from the ground. Lunar (5-14 seconds  <span style='color:gray'>[Parisi 2023]</span>) and Martian (6.5-44 min  <span style='color:gray'>[Schuster 2007]</span>) communication delays would require crew members to make independent decisions without relying on ground support  <span style='color:gray'>[Parisi 2023]</span>. <br><br><br>  <span style='color:gray'> Parisi, M., Panontin, T., Wu, S.-C., Mctigue, K., & Vera, A. (2023). Effects of Communication Delay on Human Spaceflight Missions. 14th International Conference on Applied Human Factors and Ergonomics (AHFE 2023). <br> Schuster, Alfons (2007): Intelligent Computing Everywhere. Springer, Berlin. P. 235-236.</span>",
  },
  isolated_isolated: {
    title: "Isolated",
    explanation:
      "In isolated environments, physical/social interaction and telecommunication with usual sources of support (family, friends) are seriously disrupted <span style='color:gray'>[Nicolas 2016]</span>. In times of crisis, evacuation from an isolated environment may be difficult, if not impossible <span style='color:gray'>[Sandal 2006]</span>. <br><br><br> <span style='color:gray'> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. <br> Sandal, G. M., Leon, G. R., & Palinkas, L. (2006). Human challenges in polar and space environments. Reviews in Environmental Science and Bio/Technology, 5(2–3), 281–296.</span>",
  },
  confined_confined: {
    title: "Confined",
    explanation:
      "Confined environments, such as submarines, space stations, Antarctic stations, even our homes during COVID lockdowns, are joined by the commonality that there are physical and social constraints to leaving a certain space. Beyond limited mobility outside of the environment due to extreme environmental conditions, the indoor environment might also offer limited mobility <span style='color:gray'>[Nicolas 2016]</span>. <br> Confinement may also incorporate the access to resources within a walkable or accessible neighborhood. For example, the inequitable distribution of healthcare, grocery stores, libraries, and other social services; or the impossibility of gaining access to certain services in refugee camps, can contribute to the definition of confinement <span style='color:gray'>[Mouratidis 2020][Razum 2022]</span>.     <br><br><br> <span style='color:gray'> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. <br> Mouratidis, K. (2020). Neighborhood characteristics, neighborhood satisfaction, and well-being: The links with neighborhood deprivation. Land Use Policy, 99, 104886. <br> Razum, O., Dawson, A., Eckenwiler, L., Wild, V. (2022). Refugee Camps: Paradise or Purgatory?. In: Razum, O., Dawson, A., Eckenwiler, L., Wild, V. (eds) Refugee Camps in Europe and Australia. Palgrave Macmillan, Cham. </span> ",
  },
  extreme_extreme: {
    title: "Extreme",
    explanation:
      "Hostile environments exist on Earth and in space. The Antarctic region, characterized by extreme cold (often dipping below -100F/-73C), extremely variable daylight hours with 5-6 months of complete darkness, low humidity, high altitude, and hazards (blizzards, crevices, ice), is often used as an environmental analog for outer space <span style='color:gray'>[Sandal 2018][Harrison 1991][Palinkas and Suedfeld 2008][Salam 2012]</span>. The space environment, further characterized by vacuum, microgravity, temperature swings (due to fluctuations between receiving solar heat and emptying heat to the coldness of space), micrometeoroids, space debris, altered light/dark cycles, and radiation <span style='color:gray'>[Thirsk 2009]</span>.      <br><br><br> <span style='color:gray'> Sandal, G. M., van deVijver, F. J. R., & Smith, N. (2018). Psychological Hibernation in Antarctica. Frontiers in Psychology, 9, 2235. <br> Thirsk, R., Kuipers, A., Mukai, C., & Williams, D. (2009). The space-flight environment: The International Space Station and beyond. Canadian Medical Association Journal, 180(12), 1216–1220. <br> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. <br> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Salam, A. P. (2012). Exploration class missions on earth: Lessons learnt from life in extreme Antarctic isolation and confinement. In A. Chouker (Ed.), Stress challenges and immunity in space (pp. 425-439). Berlin, Germany: Springer. </span>        ",
  },
  resource_constrained_resource_constrained: {
    title: "Resource Constrained",
    explanation:
      "Resource constrained areas result from inequitable and inadequate distribution of resources (e.g., food, water, healthcare, education, mobility) <span style='color:gray'> [Mouratidis 2020][Bauer and Gallagher 2020]</span>. In harsh and remote environments such as Antarctica, resources are inherently limited as they have to be transported inland, which can be logistically challenging <span style='color:gray'> [Kennicutt 2016]</span>. In certain situations, medical evaluation might even be impossible [Nicholas 2016].       <br><br><br> <span style='color:gray'> Mouratidis, K. (2020). Neighborhood characteristics, neighborhood satisfaction, and well-being: The links with neighborhood deprivation. Land Use Policy, 99. <br> Bauer, C., & Gallagher, M. J. (2020). Education for Humanity: higher education for refugees in resource-constrained environments through innovative technology. Journal of Refugee Studies, 33(2), 416-436. <br> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. </span>        ",
  },
  mission_demands_mission_demands: {
    title: "Mission Demands",
    explanation:
      "Mission demands vary based on the specific mission profile and goals. This includes cognitive and physical demands encountered due to launch, flight profile, re-entry (if any), and landing/splashdown.",
  },
  life_mission_events_life_mission_events: {
    title: "Life/Mission Events",
    explanation:
      "Either planned (nominal) or unplanned (contingency/emergency) acute events, including Extravehicular Activity, crew docking and transfer, injury, conflicts, and emergency egress.        ",
  },
  individual_traits_invisible_individual_traits_invisible: {
    title: "Individual Traits",
    explanation:
      "Individual traits accounting for variation, including genetics and personality. Personality traits are based on Costa and McCrea’s five-factor model of personality. Although no consensus for personality models exists, Costa and McCrea’s model is heavily based on empirical research and widely used and adapted as a measurement scale (NEO-PI-R, IPIP-NEO, IPIP-NEO-120 [used by NASA]). ",
  },
  social_composition_invisible_social_composition_invisible: {
    title: "Social Composition",
    explanation: "Social variables for living and working with others",
  },
  team_processes_invisible_team_processes_invisible: {
    title: "Team Processes",
    explanation:
      "People working together to achieve a goal beyond the capabilities of each individual alone. Proposed by Marks et al. (2001), a team moving toward a task has process “phases” when one set of actions dominates at any given time.",
  },
  crew_size_crew_size: {
    title: "Crew Size",
    explanation:
      "In US space missions, programs have differed in the crew size but consistently remain a small group of crewmembers. From Mercury (1) to Gemini (2), Apollo (3), Skylab (3), Space Shuttle (6-8), and ISS (7), it’s most likely that in the foreseeable future the crew size will remain in this range <span style='color:gray'>[Vakoch 2013][NASA 2024]</span>. These figures do not typically include those who are supporting the mission, including ground support, family, and friends. <br> When considering an Earth analogy to space missions, we can consider immigrants and refugees, who are similarly displaced from home (either voluntarily or involuntarily). In Earth-based contexts, the United Nations currently (2020) estimate there are 281 million immigrants world-wide, which is about 3.6% of the global population <span style='color:gray'>[Mcauliffe and Triandafyllidou 2022]</span>. The global refugee population exceeds 30 million individuals, and more than 100 million are forcibly displaced (including refugees) due to persecution, conflict, violence, and human rights violations <span style='color:gray'>[Masterson 2023][UNHCR 2024]</span>. Sizes of immigrant groups may vary from individual, to family, to 1000 refugees arriving in a single city <span style='color:gray'>[Pottie-Sherman and Wilkes 2017]</span>.          <br><br><br> <span style='color:gray'> Vakoch, D. A. (Ed.). (2013). On Orbit and Beyond: Psychological Perspectives on Human Spaceflight. Springer Berlin Heidelberg. <br> NASA. (2024) “Station Overview” https://www.nasa.gov/international-space-station/space-station-overview/. Accessed March 12, 2024. <br> Mcauliffe, Marie and Anna Triandafyllidou. (2021). World migration report 2022. International Organization for Migration (IOM). <br> Masterson, D. (2023). Refugee Networks, Cooperation, and Resource Access. American Political Science Review, 1–17. <br> UNHCR. (2024) “About UNHCR” https://www.unhcr.org/about-unhcr Accessed March 12, 2024. <br>  Pottie-Sherman, Y. and Wilkes, R. (2017), Does Size Really Matter? On the Relationship between Immigrant Group Size and Anti-Immigrant Prejudice†. Int Migr Rev, 51: 218-250. </span>        ",
  },
  social_support_social_support: {
    title: "Social Support",
    explanation:
      "Social support is the perception or experience that one is cared for by others, esteemed and valued, and part of a mutually supportive social network <span style='color:gray'>[Wills 2000][Taylor 2011]</span>. Social support can be measured via structural social support, or understanding how many interpersonal connections an individual is involved in <span style='color:gray'>[Wills 2000]</span>.        <br><br><br> <span style='color:gray'> Wills, T. A., & Shinar, O. (2000). Measuring perceived and received social support. In S. Cohen, L. G. Underwood, & B. H. Gottlieb (Eds.), Social support measurement and intervention: A guide for health and social scientists (pp. 86–135). Oxford University Press. <br> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. </span>",
  },
  social_monotony_social_monotony: {
    title: "Social Monotony",
    explanation:
      "Monotony is described by an unchanging environment, repetition of events or situations, and chronic absence of novelty <span style='color:gray'>[Das 2015]</span>. Here, social monotony describes the chronic exposure to the same set of people.     <br><br><br> <span style='color:gray'> Das, S.K., Barhwal, K., Hota, S.K. (2015). Disrupting monotony during social isolation stress prevents early development of anxiety and depression like traits in male rats. BMC Neurosci 16, 2. </span> ",
  },
  density_density: {
    title: "Density",
    explanation:
      "Physical density can be increased by adding more people into a given space (increasing social density) or decreasing the size of the space (increasing spatial density) <span style='color:gray'>[Fleming 1987]</span>.       <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906. </span>     ",
  },
  group_living_group_living: {
    title: "Group living",
    explanation:
      "In the context of spaceflight and other extreme environments, group living skills or competency refer to a unique subset of skills that apply to colleagues who work and live together <span style='color:gray'>[Landon 2024]</span>. They become more salient as duration, isolation, and confinement increase <span style='color:gray'>[Landon 2024]</span>. <br> Group living skills for astronauts are essentially teaming skills that extend beyond work, into life situations. For example, ability to engage in interpersonal conversations constructively and not defensively; ability to identify and manage differences in personality, knowledge, cultural expectations; and ability to cooperate, take accountability, and assign responsibility <span style='color:gray'>[Landon and Paoletti 2020]</span>.        <br><br><br> <span style='color:gray'> Landon, L. B., Miller, J. C., Bell, S. T., & Roma, P. G. (2024). When people start getting real: The Group Living Skills Survey for extreme work environments. Frontiers in Psychology, 15, 1348119. <br> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press. </span> ",
  },
  extraversion_extraversion: {
    title: "Extraversion",
    explanation:
      "Tendency toward warmth, gregariousness, assertiveness, activity, excitement seeking, positive emotions <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>  ",
  },
  openness_openness: {
    title: "Openness",
    explanation:
      "Tendency toward fantasy, aesthetics, feelings, actions, ideas, values <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  agreeableness_agreeableness: {
    title: "Agreeableness",
    explanation:
      "Tendency toward trust, straightforwardness, altruism, compliance, modesty, tender-mindedness <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  neuroticism_neuroticism: {
    title: "Neuroticism",
    explanation:
      "Tendency toward anxiety, angry hostility, depression, self-consciousness, impulsiveness, vulnerability <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  conscientiousness_conscientiousness: {
    title: "Conscientiousness",
    explanation:
      "Tendency toward competence, order, dutifulness, achievement striving, self-discipline, deliberation <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  genetics_genetics: {
    title: "Genetics",
    explanation:
      "Genetics is a branch of biology dealing with heredity and variation. Here, we focus on the chromosomal theory of genetics, which is that genetic differences and similarities are inherited through DNA replication and therefore inherits genetic continuity through generations <span style='color:gray'>[Krug 2006]</span>. Phenotypic (i.e., observable) differences may account for traits such as eye color or handedness <span style='color:gray'>[Krug 2006]</span>. However, while more complex traits such as predisposition to illness could be partially explained by phenotypic differences, they may also differ by environmental influences, age, and interaction effects between genetics and these variables <span style='color:gray'>[Kujala 2011]</span>.<br> Genetic differences and their predictability and effects on personality are still active areas of research, and multiple theories exist on genetic, environmental, and interactive (genetic and environmental) explanations for personality <span style='color:gray'>[Matthews 2003]</span> – which has implications for behaviors, habits, and health.       <br><br><br> <span style='color:gray'> Krug, W. S. Cummings, M. R. & Spencer, C. R.. (2006). Concepts of Genetics, Eighth Edition. Pearson Education. <br> Kujala, U. M. (2011). Physical activity, genes, and lifetime predisposition to chronic disease. European Review of Aging and Physical Activity, 8(1), 31–36. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>        ",
  },
  resilience_resilience: {
    title: "Resilience",
    explanation:
      "Resilience has been defined as the ability to effectively negotiate, adapt to, or manage stress and trauma <span style='color:gray'>[Windle 2011]</span>. The definition is two-parted: either the ability to remain psychologically health when faced with significant stress; or the ability to recover from a traumatic event <span style='color:gray'>[de Terte 2014]</span>. <br> A similar concept, hardiness, was introduced by Kobasa in 1982 and composed of the “belief in personal control over events, commitment to full involvement in life, enjoyment of challenge and opportunity” </span>[Matthews 2003]</span>.      <br><br><br> <span style='color:gray'> Windle, G. (2011). What is resilience? A review and concept analysis. Reviews in Clinical Gerontology, 21(2), 152–169. <br> de Terte I, Stephens C, Huddleston L. (2014) The development of a three part model of psychological resilience. Stress Health (5):416-24. <br>Kobasa, S. C. (1982) Commitment and coping in stress resistance among lawyers. Journal of Personality and Social Psychology, 42, 168–77. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>         ",
  },
  psychological_resources_psychological_resources: {
    title: "Psychological Resources",
    explanation:
      "NASA provides operational psychology services for the International Space Station crew and their families. This includes private medical conferences with mental health specialists every two weeks, arranging care packages, regular cognitive function tests, and private family conferences <span style='color:gray'>[Sipes and Ark 2005]</span>.       <br><br><br> <span style='color:gray'> Sipes, W. E., & Ark, S. T. V. (2005). Operational Behavioral Health and Performance Resources for International Space Station Crews and Families. Aviation, Space, and Environmental Medicine, 76(6). </span>        ",
  },
  training_and_preparation_training_and_preparation: {
    title: "Training and Preparation",
    explanation:
      "The goal of training is to provide knowledge and skills to execute mission tasks, including living in the mission environment. Knowledge areas for spaceflight include introductory topics (e.g., autonomy involvement, global space sector), spaceflight systems, scientific fundamentals (e.g., aerospace engineering, life sciences, Earth sciences), operations (e.g., space health, systems and infrastructure), and special skills (e.g., robotic arm operations, extravehicular activity, fitness training, media skills, team dynamics) <span style='color:gray'>[Steimle and Norberg 2013]</span>. <br> For professional career astronauts, training can take anywhere from 3.5 to 5 years, comprising basic, advanced, and increment specific training <span style='color:gray'>[Steimle and Norberg 2013]</span>.        <br><br><br> <span style='color:gray'> Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg. </span> ",
  },
  ground_support_ground_support: {
    title: "Ground Support",
    explanation:
      "Spaceflight is an incredibly demanding effort and supported by an enormous amount of facilities, technology, and people on the ground. Each of the major space agencies with astronauts on the International Space Station has mission control and research/technology centers, comprising highly trained experts that support the challenges each autonomy may face <span style='color:gray'>[NASA 2023]</span>.      <br><br><br> <span style='color:gray'> NASA. “Ground Facilities”. Updated Dec 28, 2023. Accessed April 30, 2024. https://www.nasa.gov/international-space-station/ground-facilities/ </span>        ",
  },
  medical_capability_medical_capability: {
    title: "Medical Capability",
    explanation:
      "Medical capability is the “complete set of resources that enables the crew to perform medical monitoring, diagnosis, and treatment of medical conditions” <span style='color:gray'>[Antonsen 2022]</span>. These may include tools, medicine, equipment, (crew and ground support) knowledge, training, references, and other resources. <br> Medical capabilities should adequately match medical needs. However, prediction of medical capability requirements for untested mission profiles (e.g., Lunar or Martian mission) are difficult; medical needs are attributed by a complex web of factors, may be acute or chronic, and could develop/escalate as comorbidities <span style='color:gray'>[Antonsen 2022]</span>.       <br><br><br> <span style='color:gray'> Antonsen, E. L., Myers, J. G., Boley, L., Arellano, J., Kerstman, E., Kadwa, B., Buckland, D. M., & Van Baalen, M. (2022). Estimating medical risk in human spaceflight. Npj Microgravity, 8(1), 8. </span> ",
  },
  family_and_friends_family_and_friends: {
    title: "Family and Friends",
    explanation:
      "Family and friends are close interpersonal relationships that provide social support.        ",
  },
  supplies_supplies: {
    title: "Supplies",
    explanation:
      "Supplies encompass temporary, consumable, and depletable assets. Supplies may include personal effects, logistical support (e.g., vacuum, trash bags), scientific equipment (e.g., rodents, plants, test tubes), ECLSS (e.g., water filters, CO2 regeneration substrates), and tools. Certain supplies have been defined separately due to their relative significance, for instance food/water and medical supplies. <br>  Note that supplies are defined separately from fixtures, which is an arbitrary distinction at times. In general, we would describe supplies as items that are meant to be replaced on a more regular basis than fixtures, which may be intended to serve the same function for the lifespan of the habitat.    ",
  },
  food_food: {
    title: "Food",
    explanation:
      "Consumables containing the six types of nutrients: lipids, vitamins, water, carbohydrates, protein, and minerals <span style='color:gray'>[Insel 2014]</span>. <br> Considerations for the space food system include safety, nutrition, usability, resource minimization, reliability, stability, variety, and palatability <span style='color:gray'>[Douglas 2020]</span>. These sets of considerations may be similar for environments burdened by resource limitations, such as for disaster-relief.         <br><br><br> <span style='color:gray'>Insel, P. M. (2014). Nutrition. Jones & Bartlett Publishers. <br>Douglas, G. L., Zwart, S. R., & Smith, S. M. (2020). Space food for thought: Challenges and considerations for food and nutrition on exploration missions. The Journal of Nutrition, 150(9), 2242-2244. </span>        ",
  },
  exercise_equipment_exercise_equipment: {
    title: "Exercise Equipment",
    explanation:
      "Exercise equipment are tools and machines whose primary function is to provide an exercise environment or program. Early space missions used elastic bands coupled with physical exercises as the primary countermeasure against musculoskeletal deconditioning <span style='color:gray'>[Scott 2023]</span>. Currently, the International Space Station exercise equipment includes the Advanced Resistive Exercise Device (ARED), a treadmill (T2), and a cycle ergometer (CEVIS) <span style='color:gray'>[Scott 2023]</span>.        <br><br><br> <span style='color:gray'> Scott, J. M., Feiveson, A. H., English, K. L., Spector, E. R., Sibonga, J. D., Dillon, E. L., Ploutz-Snyder, L., & Everett, M. E. (2023). Effects of exercise countermeasures on multisystem function in long duration spaceflight astronauts. Npj Microgravity, 9(1), 11. </span>      ",
  },
  light_dark_cycles_light_dark_cycles: {
    title: "Light/Dark Cycles",
    explanation:
      "Light/dark cycles typically occur every 24 hours on Earth with shifting portions of light and dark, depending on where one resides and the time of year. Polar regions on Earth experience 6 months of day and 6 months of darkness, also known as polar day and night <span style='color:gray'>[Palinkas and Suedfeld 2008]</span>. On the International Space Station, light/dark transitions occur every 45 minutes due to the velocity of the station in its orbit, resulting in 16 sunrises and sunsets every day <span style='color:gray'>[Thirsk 2009]</span>.         <br><br><br> <span style='color:gray'> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Thirsk, R., Kuipers, A., Mukai, C., & Williams, D. (2009). The space-flight environment: the International Space Station and beyond. Cmaj, 180(12), 1216-1220. </span>  ",
  },
  altered_gravity_altered_gravity: {
    title: "Altered Gravity",
    explanation:
      "We denote the gravity level on Earth (~9.81 m/s^2 acceleration toward the Earth, depending on elevation) as 1 ‘g’. Altered gravity includes microgravity ‘0g’ (e.g., freefall around Earth, as seen onboard the International space Station [DeLombard 2004]) and partial gravity: Martian ‘0.38g’ (or about 1/3 Earth gravity) and Lunar ‘0.16g’ (or about 1/6 Earth gravity) [Pletser 2012].         <br><br><br> <span style='color:gray'> Norsk, P. (2021). Physiological effects of spaceflight–Weightlessness: An overview. Handbook of Bioastronautics, 93-105.  <br> Pletser, V., Winter, J., Duclos, F., Bret-Dibat, T., Friedrich, U., Clervoy, J. F., ... & Sundblad, P. (2012). The first joint European partial-G parabolic flight campaign at Moon and Mars gravity levels for science and exploration. Microgravity Science and Technology, 24, 383-395. </span>  ",
  },
  radiation_radiation: {
    title: "Radiation",
    explanation:
      " <span style='font-size:8pt'> In extreme environments (such as deep space), radiation levels are elevated due to a combination of background Galactic Cosmic Radiation (GCR), Solar Particle Events (SPEs), and localized trapped particle belts. Radiation protection for spacesuits and habitats can alter the radiation dose received by the crew <span style='color:gray'>[Allen 2018]</span>. <br> GCRs are continuous and uniform (in all directions) flow of charged particles, ranging from hydrogen to uranium, arriving from outside the solar system. While GCRs have no acute effects due to their low dosage, chronic exposure is not well-characterized and uncertainties in biological/physiological response exist for long-duration spaceflight. <br> SPEs are randomized ejections and accelerations of solar particles, causing energy fluxes upward of 100 MeV. The pattern of SPEs is not well understood and therefore difficult to predict. <br> Two main electron belts (at 3,000 and 25,000 km; few keV to 10 MeV) and one proton belt (at 3,000 km; 100keV to few hundred MeV) exist around the Earth, and radiation belt models exist (e.g., AE-9, AP-9, CRRESELE, CRRESPRO). <br> Events on Earth, such as nuclear facility accidents (e.g., Fukushiima Dachii, 2011), can have impacts on the safety of nearby water and food, and increased mortalities and morbidities <span style='color:gray'>[Jones 2013]</span>. On a much larger scale, the use of atomic bombs (only time in history – Hiroshima and Nagasaki, 1945) resulted in over 200,000 deaths before year’s end <span style='color:gray'>[Ten Hoeve and Jacobson 2012]</span>.        <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Jones, C. F., Loh, S. L., & Satō, K. (2013). Narrating Fukushima: Scales of a nuclear meltdown. East Asian Science, Technology and Society: An International Journal, 7(4), 601-623. <br> Ten Hoeve, J. E., & Jacobson, M. Z. (2012). Worldwide health effects of the Fukushima Daiichi nuclear accident. Energy & Environmental Science, 5(9), 8743-8757.  </span> ",
  },
  atmosphere_atmosphere: {
    title: "Atmosphere",
    explanation:
      "Atmospheric considerations include pressure, gas composition, partial pressures of constituent gasses, absolute/relative humidity, temperature, microbes, trace contaminants, and particulate matter. In closed, pressurized, artificial atmospheres such as the one onboard the International Space Station, the atmosphere must be carefully monitored and managed <span style='color:gray'> [Wieland 2005]</span>. <br> One of the main effects of climate change is the escalation of average global temperatures and increased CO2 concentration (currently over 425 ppm as of April 2024) <span style='color:gray'> [NOAA 2024]</span>. These changes may create additional considerations for atmospheric management when designing for Earth.         <br><br><br> <span style='color:gray'> Wieland, P.O. (2005). Designing For Human Presence in Space: An Introduction to Environmental Control and Life Support Systems (ECLSS). NASA. NASA/TM—2005–214007. <br> NOAA. (2024) Trends in Atmospheric Carbon Dioxide. National Oceanic and Atmospheric Administration Global Monitoring Laboratory. Accessed April 9, 2024. https://gml.noaa.gov/ccgg/trends/monthly.html. </span>        ",
  },
  acoustics_acoustics: {
    title: "Acoustics",
    explanation:
      "The acoustic environment includes continuous and intermittent noise. Continuous noise may be due to the environment or equipment, and typically measured with noise criteria (NC) curves that describe permissible levels (dB) of noise at given frequencies (hz) <span style='color:gray'>[Allen 2018]</span>. Intermittent noise, defined as noise for 8 hours or less in a 24 hour period, has a ceiling of 115-dBA (weighted with time) as set by OSHA <span style='color:gray'>[US Occupational Safety & Health Administration 1983]</span>. Noise may impact communication, nominal operations, and sleep <span style='color:gray'>[Allen 2018]</span>.         <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Occupational Safety and Health Administration, US Department of Labor (1983). Occupational Noise Exposure: Hearing Conservation Amendment. Final Rule. 29 CFR 1910.95, Federal Register 46 (11), 4978–4981. </span>       ",
  },
  nutrition_nutrition: {
    title: "Nutrition",
    explanation:
      "Nutrition encompasses what we consume (nutrients and other substances), the interactions between the consumed and health/disease, body processes (absorption, digestion, excretion, etc), and the social/cultural/psychological implications of eating <span style='color:gray'>[Insel 2014]</span>.      <br><br><br> <span style='color:gray'> Insel, P. M. (2014). Nutrition. Jones & Bartlett Publishers. </span>        ",
  },
  habitable_volume_habitable_volume: {
    title: "Habitable Volume",
    explanation:
      "When considering a pressurized system, there are differences between the total pressurized volume (the interior volume determined by the inner physical envelope) and the usable volume by its occupants <span style='color:gray'>[Rudisill 2010]</span>. After the equipment, stowage, and outfitting of the interior, the remaining space is typically termed the “sand” volume (i.e., volume if sand could fill all crevices) <span style='color:gray'>[Rudisill 2010]</span>. However, not all sand volume is usable or relevant for day-to-day living; for example, consider the volume beneath a couch or inside the fridge. Therefore, a smaller “net habitable volume” is typically the figure of merit for habitat design, and traditionally about 60% of total pressurized volume for space habitats <span style='color:gray'>[Rudisill 2010]</span>.        <br><br> <span style='color:gray'> Rudisill, M., Howard, R., Griffin, B., Green, J., Toups, L., Kennedy, K. (2008). 'Lunar Architecture Team – Phase 2 Habitat Volume Estimation: ‘Caution When Using Analogs’ ', ASCE Earth and Space Conference, Long Beach, CA. </span>  ",
  },
  environmental_control_environmental_control: {
    title: "Environmental Control",
    explanation:
      "Environmental monitoring and control is necessary to maintain a habitable environment inside a confined space. For a spacecraft, the subsystem responsible for regulating the environment is termed “Environmental Control and Life Support Systems”, or ECLSS. ECLSS comprises many subcomponents, which are responsible for thermal management, maintaining and monitoring atmospheric content (pressure, partial pressures, moisture, microbes, contaminants), water, and waste. It also typically includes fire detection, suppression, and cleanup systems <span style='color:gray'>[Broyan 2021]</span>.        <br><br><br> <span style='color:gray'> Broyan, J. L., Shaw, L., McKinley, M., Meyer, C., Ewert, M. K., Schneider, W. F., Meyer, M., Ruff, G. A., Owens, A. C., & Gatens, R. L. (2021). NASA Environmental Control and Life Support Technology Development for Exploration: 2020 to 2021 Overview. 50th International Conference on Environmental Systems. </span>        ",
  },
  circulation_paths_circulation_paths: {
    title: "Circulation Paths",
    explanation:
      "Circulation refers to the movement through space. Circulation spaces encompass movement during the “approach” and “entry” phases, before entering into the actual building or space <span style='color:gray'>[Ching 2023]</span>, which may be relevant for extravehicular missions (e.g., visible and compatible docking ports for vehicles). In the interior, considerations include “configurations of the path” (e.g., linear, radial, spiral) that dictates the sequence of spaces; and “path-space relationships”, which considers if paths run adjacent to spaces, cut through spaces, or terminate in a space <span style='color:gray'>[Ching 2023]</span>. <br> Circulation may be designed, and change over time. For instance, “desire paths” refer to dirt paths that form over time due to pedestrians bypassing sidewalks <span style='color:gray'>[Lidwell 2010]</span>.        <br><br><br> <span style='color:gray'> Ching, F. D. (2023). Architecture: Form, space, and order. John Wiley & Sons. <br> Lidwell, W., Holden, K., & Butler, J. (2010). Universal principles of design, revised and updated: 125 ways to enhance usability, influence perception, increase appeal, make better design decisions, and teach through design. Rockport Pub. </span>  ",
  },
  layout_layout: {
    title: "Layout",
    explanation:
      "Layout refers to the arrangement of spaces and the relationships (e.g., spatial, acoustic) between them. <br> Typically, layouts for space habitats are arranged programmatically (i.e., by “programs” or primary activities supported by the space). For instance, one study organized activities that had taken place in space habitats (from Apollo to the International Space Station) into the following programs: sleep, hygiene, food, work, and leisure. Subsystems can also have specific layouts. For example, the International Space Station uses “racks” as a standard unit so systems (e.g., CO2 removal scrubber) and experiments can share standardized interfaces <span style='color:gray'>[Pelfrey and Jordan 2008]</span>.      <br><br><br> <span style='color:gray'> Pelfrey, J., & Jordan, L. (2008). An EXPRESS Rack overview and support for microgravity research on the International Space Station (ISS). In 46th AIAA Aerospace Sciences Meeting and Exhibit (p. 819). </span>        ",
  },
  lighting_lighting: {
    title: "Lighting",
    explanation:
      "While natural lighting is important for everyday life, it is limited in extreme environments. Here, we discuss artificial lighting created to support living and working tasks. Some considerations for lighting include color (wavelength on the visible spectrum), color temperature (in degrees Kelvin), and brightness (lumens) <span style='color:gray'>[Karlen 2017]</span>. Operationally, additional design features such as dimmability, adjustments throughout the day to support circadian rhythms, and design of lighting layers (daylight, decorative, focal, task, and ambient) can be considered <span style='color:gray'>[Karlen 2017]</span>.      <br><br><br> <span style='color:gray'> Karlen, M., Spangler, C., & Benya, J. R. (2017). Lighting design basics. John Wiley & Sons. </span>        ",
  },
  privacy_privacy: {
    title: "Privacy",
    explanation:
      "Most privacy definitions vary in scope: personal privacy, as a state of being private <span style='color:gray'>[Bailey 1979]</span>; environmental privacy, as a characteristic of the architecture and built environment <span style='color:gray'>[Webster 1979]</span>; and the person-environment relationship of privacy as a transactional and regulated process <span style='color:gray'>[Altman 1975]</span>. Choice and the ability to regulate privacy is crucial. Components of privacy include the ability to be alone, as well as visual and auditory privacy <span style='color:gray'>[Marshall 1972]</span>.     <br><br><br> <span style='color:gray'> Bailey, G. W. S. (1979).  Privacy and the mental. Amsterdam: Rodopi N.V. <br>  Webster, N. (1979).  Webster’s new twentieth century unabridged dictionary. New York: Publishers International. <br> Altman, I. (1975). The environment and social behavior: Privacy, personal space, territory, crowding. Monterey, CA: Brooks/Cole. <br> Marshall, N. J. (1972). Privacy and environment. Human Ecology, 1(2), 93–110. </span>  ",
  },
  ergonomics_ergonomics: {
    title: "Ergonomics",
    explanation:
      "The field of ergonomics integrates knowledge about the human physical and cognitive limitations with the design of interfaces, products, environments, and jobs <span style='color:gray'>[Nussbaum and Van Dieën 2005]</span>. Physical ergonomics focuses on the demands placed on the human and the capabilities of the human to fulfill these, to ensure the demands do not exceed the capabilities <span style='color:gray'>[Nussbaum and Van Dieën 2005]</span>. One example is anthropometry, which is a science that characterizes the human body and a design tool for physical ergonomics; NASA has published an Anthropometric Source Book based largely on data from the military population <span style='color:gray'>[Churchill 1978]</span>. <br> Cognitive ergonomics focuses on the cognitive resources and demands for a given task, environment, and user <span style='color:gray'>[Stanton 2005]</span>. The quality of work is affected by the user’s understanding of the situation (e.g., situation awareness, mental models, goals), which in turn affects the quality of work <span style='color:gray'>[Hollnagel 1997]</span>. One key area of application is in human-robot interaction and joint cognitive systems, where cognitive ergonomics provides a lens of the “fit” of the work and mind in a coupled system, as opposed to simply the effects of one on the other <span style='color:gray'>[Hollnagel 1997]</span>.    <br><br> <span style='color:gray'>  Nussbaum, M. A., & Van Dieën, J. H. (2005). Physical Ergonomics. In M. Kutz (Ed.), Mechanical Engineers’ Handbook (1st ed., pp. 762–781). Wiley. <br> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. <br> Churchill, E., Laubach, L. L., Mcconville, J. T., & Tebbetts, I. (1978). Anthropometric Source Book—Volume I; Anthropometry for Designers.pdf. NASA. 19790003563 <br> Hollnagel, E. (1997). Cognitive ergonomics: It’s all in the mind. Ergonomics, 40(10), 1170–1182. </span>  ",
  },
  fixtures_fixtures: {
    title: "Fixtures",
    explanation:
      "Here, we define fixtures to include assets of the habitat that are installed, fixed, and/or (semi-)permanent. Some examples include apertures (i.e., openings such as doors, windows, docking ports), signage (e.g., node labels on the International Space Station), stowage (e.g., spaces for personal items and photos), and furniture. Fixtures can serve function and decorative purposes for the habitat. Note that while exercise equipment may fall under “fixtures”, but we have defined it separately due to its significance in the space paradigm.         ",
  },
  reconfigurability_reconfigurability: {
    title: "Reconfigurability",
    explanation:
      "The extent to which the habitat can be altered (physically, psychologically, or programmatically) to serve a different purpose. In a study of architectural themes across analogs and space habitats (from Apollo to the International Space Station), “flexibility” (i.e., allowing adjustments according to user requirements) was defined as a key desire, specifically <span style='color:gray'>[Häuplik-Meusburger 2011]</span>: <br> 1. Spatial flexibility (variation in size and locations) <br> 2. Object flexibility (variation in usage) <br> 3.Individual flexibility (personalized variations)    <br><br><br> <span style='color:gray'> Häuplik-Meusburger, S. (2011). Architecture for astronauts: an activity-based approach. Springer Science & Business Media. </span>       ",
  },
  environmental_monotony_environmental_monotony: {
    title: "Environmental Monotony",
    explanation:
      "Monotony is described by an unchanging environment, repetition of events or situations, and chronic absence of novelty <span style='color:gray'>[Das 2015]</span>. Here, environmental monotony is associated with characteristics of the built and natural environment, including layout, lighting, colors, textures, views, and sensory inputs.    <br><br><br> <span style='color:gray'> Das, S.K., Barhwal, K., Hota, S.K. (2015). Disrupting monotony during social isolation stress prevents early development of anxiety and depression like traits in male rats. BMC Neurosci 16, 2. </span>        ",
  },
  physical_workload_physical_workload: {
    title: "Physical Workload",
    explanation:
      "Physical workload refers to the physical work being performed. It can be measured in many ways, including physical assessments (e.g., musculoskeletal discomfort surveys, muscle fatigue assessments), physiological measurements (e.g., heart rate, respiration, electromyography), and behavioral measurements (e.g., observation) <span style='color:gray'>[Stanton 2005]</span>.        <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. </span>        ",
  },
  cognitive_workload_cognitive_workload: {
    title: "Cognitive Workload",
    explanation:
      "Cognitive workload refers to the amount of cognitive and mental effort required to perform a task or a set of concurrent tasks <span style='color:gray'>[Hoedemaeker 2002]</span>. Examples of cognitive workload measurement include subjective surveys (usually administered immediately after task completion), performance metrics (e.g., errors, time to task completion), and physiological measures (e.g., heart rate, pupil dilation) <span style='color:gray'>[Staton 2005][Marshall 2002]</span>.        <br><br><br> <span style='color:gray'> Hoedemaeker, M. (2002). Summary Description of Workload Indicators: WP1 Workload Measures. Human Machine Interface and the Safety of Traffic in Europe Growth Project. GRD1-2000-25361. HASTE. Institute for Transport Studies. Leeds, UK: University of Leeds. <br> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. <br> Marshall, S. P. (2002, September). The index of cognitive activity: Measuring cognitive workload. In Proceedings of the IEEE 7th conference on Human Factors and Power Plants (pp. 7-7). IEEE. </span> ",
  },
  media_attention_media_attention: {
    title: "Media Attention",
    explanation:
      "Media attention is particularly important to the spaceflight population and other populations who may be in Isolated, Confined, and Extreme environments (e.g., refugees, civilians in war zones). Since 1958, when NASA was chartered with providing the “widest practicable and appropriate dissemination of information concerning its activities”, NASA has maintained a public presence in the media <span style='color:gray'>[Makemson 2009]</span>. Since 2009 with Mike Massimino's first ‘tweet’ from space, it has become common practice for astronauts to have public social media accounts. In most space-faring countries, astronauts are popular figures (as a group and some in their own right) with important public relations duties <span style='color:gray'>[Hersch 2012]</span>.        <br><br><br> <span style='color:gray'> Makemson, H. (2009). Media, NASA, and America's Quest for the Moon (Vol. 4). Peter Lang. <br> Hersch, M. H. (2012). Public Space. In Inventing the American Astronaut (pp. 131-158). New York: Palgrave Macmillan US. </span>",
  },
  transition_processes_transition_processes: {
    title: "Transition Processes",
    explanation:
      "Transition phases are when teams are primarily focused on planning and evaluation of team goals. Processes most salient during the transition phase are as follows <span style='color:gray'>[Marks 2001]</span>: <br> - Mission analysis: identifying and evaluating the mission goals, environmental conditions, and resources available to execute the mission. This includes ensuring a shared mental model of the team’s purpose and objectives. <br> - Goal specification: identification and prioritization of goals, discussing how much needs to be accomplished within a certain time frame, to what quality. <br> - Strategy formulation: developing courses of action, including prioritization, task assignment, and discussion of expectations. Further delineating strategy formulation, this process can be broken down into 1) planning for nominal/planned activities, 2) emergency/contingency planning, and 3) reactive strategy adjustment.        <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376. </span>        ",
  },
  action_processes_action_processes: {
    title: "Action Processes",
    explanation:
      "Action phases are when teams are actively conducting activities that lead to goal achievement. Processes most salient during the action phase are as follows <span style='color:gray'>[Marks 2001]</span>: <br> - Monitor progress: tracking tasks and progress toward team goals. This includes providing feedback and updates to team members to evaluate progress and likelihood of success. <br> - Systems monitoring: tracking status of resources and environmental conditions. This is also known as situation awareness, or monitoring of internal systems (e.g., equipment, resources) and external systems (e.g., weather) relevant to mission success. <br> - Team monitoring: assisting team members to complete their tasks, including offering feedback, helping, or offloading the task. <br> - Coordination: managing the sequence and timing of interdependent tasks. This information exchange and mutual adjustment of activities aligns the pace and sequencing of actions for more productive goal accomplishment.         <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376. </span>   ",
  },
  interpersonal_processes_interpersonal_processes: {
    title: "interpersonal Processes",
    explanation:
      "Interpersonal processes occur through both transition and action phases, and lay the foundation for the effectiveness of other team processes [Marks 2001]. They are as follows [Marks 2001]: <br> - Conflict management: helps resolve or manage conflict in two ways: 1) preemptively, by establishing conditions to prevent, control, or guide conflicts (e.g., establishing team norms), and 2) reactively, by working through task or interpersonal conflicts that have arisen (e.g., problem-solving, compromising). <br> - Motivating: preserving a collective sense of confidence, motivation, and cohesion toward the team goal. <br> - Affect management: calibrating and regulating team members’ emotions that may be shifting due to task-based (e.g., stress), personal (e.g., animosity), and external (e.g., job security) factors.         <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376. </span> ",
  },
  stress_regulation_stress_regulation: {
    title: "Stress Regulation",
    explanation:
      "When faced with a stressor (a situation in which an individual needs to adjust their usual behavior), individuals usually vary greatly in how they respond, manage, and resolve stress. The variables of the stress regulation process includes the magnitude of physiological/emotional responses, length of time for recovery, and the extent of adequate recovery during/following the stressor – also denoted as exposure, reactivity, recovery, and restoration <span style='color:gray'>[Williams 2009]</span>.      <br><br><br> <span style='color:gray'> Williams, P. G., Suchy, Y., & Rau, H. K. (2009). Individual differences in executive functioning: Implications for stress regulation. Annals of Behavioral Medicine, 37(2), 126-140. </span>        ",
  },
  place_attachment_place_attachment: {
    title: "Place Attachment",
    explanation:
      "Place attachment is the affective bond and the process of bonding (i.e., “attachment”) between an individual and a space of significance (i.e., “place”)  <span style='color:gray'>[Altman and Low 1992][Scannell and Gifford 2010]</span>. It has been argued that a “sense of place” fulfills a universal human need  <span style='color:gray'>[Relph 1976]</span> and promotes safety and security  <span style='color:gray'>[Fried 2000]</span>. <br> In Isolated, Confined, and/or Extreme environments, place attachment can refer to the current place (e.g., spacecraft) that we may seek to support; or to the “home” environment (e.g., Earth) that we might seek to manage.            <br><br><br> <span style='color:gray'>  Altman, I., & Low, S. M. (Eds.). (1992). Place Attachment. Springer US. <br> Scannell, L., & Gifford, R. (2010). Defining place attachment: A tripartite organizing framework. Journal of Environmental Psychology, 30(1), 1–10. <br>  Relph, Edward. Place and Placelessness (1976): In P. Hubbard, R. Kitchin, & G. Valentine, Key Texts in Human Geography (pp. 43–52). SAGE Publications Ltd. <br> Fried, M. (2000). CONTINUITIES AND DISCONTINUITIES OF PLACE. Journal of Environmental Psychology, 20(3), 193–205. </span> ",
  },
  sleep_sleep: {
    title: "Sleep",
    explanation:
      "Adults are recommended to sleep at least 7 hours per night for optimal health  <span style='color:gray'>[Watson 2015]</span>. Qualifiers for healthy sleep comprise duration, quality, regularity, and timing – often defined broadly as ‘sleep architecture’ in space studies. Two separate studies on the International Space Station found that astronauts slept less than 6 hours on 35-45% of nights  <span style='color:gray'>[Jones 2022][Barger 2014]</span>.        <br><br><br> <span style='color:gray'>  Watson, N. F., Badr, M. S., Belenky, G., et al. (2015). Recommended Amount of Sleep for a Healthy Adult: A Joint Consensus Statement of the American Academy of Sleep Medicine and Sleep Research Society. Journal of Clinical Sleep Medicine, 11(06), 591–592. <br> Jones, C. W., Basner, M., Mollicone, D. J., Mott, C. M., & Dinges, D. F. (2022). Sleep deficiency in spaceflight is associated with degraded neurobehavioral functions and elevated stress in astronauts on six-month missions aboard the International Space Station. Sleep, 45(3), zsac006. <br> Barger, L. K., Flynn-Evans, E. E., Kubey, A., Walsh, L., Ronda, J. M., Wang, W., Wright, K. P., & Czeisler, C. A. (2014). Prevalence of sleep deficiency and use of hypnotic drugs in astronauts before, during, and after spaceflight: An observational study. The Lancet Neurology, 13(9), 904–912. </span>    ",
  },
  crew_performance_crew_performance: {
    title: "Crew Performance",
    explanation:
      " <span style='font-size:8pt'>Individual-level performance is typically task-related (e.g., accomplishment of task goals, errors, task duration). However, most often tasks are accomplished as a team <span style='color:gray'>[Bell 2015]</span>, and overall performance relies on both the individual team members and the team as a whole <span style='color:gray'>[Mathieu 2014]</span>. <br> Team performance comprises the health of a team and the individual performances of each member. Based on the input-mediator-output-input model <span style='color:gray'>[Ilgen 2005][Grossman 2017]</span>, team performance here encompasses both the accomplishment of tasks and goals as set by mission parameters, and also the cognitive and affective “emergent” states of a team <span style='color:gray'>[Grossman 2017][Marks 2001]</span>. Affective states include team cohesion, team confidence, and team trust; cognitive states include team mental models, situational awareness, and team learning <span style='color:gray'>[Grossman 2017]</span>. <br>  In isolated environments, the effect of team cohesion has an exaggerated relationship with team performance due to the extreme environment <span style='color:gray'>[Vessey and Landon 2017]</span>.       <br><br> <span style='color:gray'> Bell, S. T. et al. (2015). Critical Team Composition Issues for Long-Distance and Long-Duration Space Exploration. <br> Mathieu, J. E., Tannenbaum, S. I., Donsbach, J. S., & Alliger, G. M. (2014). A Review and Integration of Team Composition Models: Moving Toward a Dynamic and Temporal Framework. Journal of Management, 40(1), 130-160. <br> Ilgen, D. R. et al. (2005). Teams in organizations: From input–process–output models to IMOI models. Annual Review of Psychology, 56, 517–543. <br> Grossman, R. et al. (2017). Teamwork Processes and Emergent States. In E. Salas et al., The Wiley Blackwell Handbook of the Psychology of Team Working and Collaborative Processes (p. 243–269). Wiley. <br> Marks, M.A. et al. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376. <br>  Vessey, W. B., & Landon, L. B. (2017). Team Performance in Extreme Environments. In E. Salas, R. Rico, & J. Passmore (Eds.), The Wiley Blackwell Handbook of the Psychology of Team Working and Collaborative Processes (1st ed., pp. 531–553). Wiley. </span> </span> ",
  },
  physical_health_physical_health: {
    title: "Physical Health",
    explanation:
      "Health is a large umbrella term. A typical consideration is the length of life, expressed in average life expectancy, mortality rates, and death due to specific causes <span style='color:gray'>[NCHS 2024]</span>. Physical health metrics may include physical ability, physical limitations, pain, and health outlook <span style='color:gray'>[Ware 1987]</span>. <br> Spaceflight considerations include adverse effects to radiation (e.g., increased cancer risk, degenerative tissue diseases), central nervous system deconditioning, muscle/bone/cardiovascular atrophy due to unloading/migravity, inadequate food and nutrition, lunar dust exposure, and injuries due to extravehicular activities <span style='color:gray'>[McPhee and Charles 2009]</span>. On Earth, the United States Center for Disease Control recommends 30 minutes of moderate exercise every day to maintain health <span style='color:gray'>[Pate 1995]</span>.      <br><br><br> <span style='color:gray'> NCHS: Health. (2024). United States: U.S. Department of Health and Human Services. Accessed May 5, 2024. <br> Ware, E. J. (1987). Standards for validating health measures: Definition and content. Journal of Chronic Diseases, 40(6), 473–480. <br> McPhee, J. C., & Charles, J. B. (Eds.). (2009). Human health and performance risks of space exploration missions: evidence reviewed by the NASA human research program (Vol. 3405). US National Aeronautics & Space Administration. <br>  Pate, R. R., Pratt, M., Blair, S. N., et al. (1995). Physical activity and public health: a recommendation from the Centers for Disease Control and Prevention and the American College of Sports Medicine. Jama, 273(5), 402-407. </span>",
  },
  stress_stress: {
    title: "Stress",
    explanation:
      "Stress refers to any environmental, social, or internal demand which prompts an individual to adjust their usual behavior <span style='color:gray'>[Holmes and Rahe 1967][Thoits 1995]</span>. We feel stressed when the demand is beyond our capability to successfully cope <span style='color:gray'>[Brown 2021]</span>. Stress also has biological responses, promoting various physical and psychological effects on the body (e.g., neuroendocrine/hormone system, cerebral cortex), as well as adverse cognitive effects (e.g., executive function and task performance) <span style='color:gray'>[Cibrian-Llanderal 2018]</span>.       <br><br><br> <span style='color:gray'> Holmes, T. H., & Rahe, R. H. (1967). The social readjustment rating scale. Journal of Psychosomatic Research, 11(2), 213–218. <br> Thoits, P. A. (1995). Stress, Coping, and Social Support Processes: Where Are We? What Next? Journal of Health and Social Behavior, 35, 53. <br>  Cibrian-Llanderal, T., Melgarejo-Gutierrez, M., & Hernandez-Baltazar, D. (2018). Stress and cognition: Psychological basis and support resources. Health and academic achievement, 11(10.5772). <br>  Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. </span> ",
  },
  fatigue_fatigue: {
    title: "Fatigue",
    explanation:
      "Fatigue is multidimensional, encompassing physical, physiological, and psychological aspects.  Fatigue is defined as “the awareness of a decreased capacity for physical and/or mental activity due to an imbalance in the availability, utilization, and/or restoration of resources needed to perform activity” [Aaronson 1999]. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a fatigue-inertia subconstruct <span style='color:gray'>[McNair 1971]</span>.       <br><br><br> <span style='color:gray'> McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services. <br> Aaronson, L. S., Teel, C. S., Cassmeyer, V., Neuberger, G. B., Pallikkathayil, L., Pierce, J., ... & Wingate, A. (1999). Defining and measuring fatigue. Image: the journal of nursing scholarship, 31(1), 45-50. </span>",
  },
  anxiety_anxiety: {
    title: "Anxiety",
    explanation:
      "Anxiety is characterized by tension, worried thoughts, and physiological responses (e.g., elevated blood pressure) <span style='color:gray'>[Corsini and Ozaki 1994]</span>. Anxiety is both a state and trait, meaning that some people are more disposed to anxious feelings, while others may experience anxiety more acutely <span style='color:gray'>[Brown 2021]</span>. Beyond clinical interviews or professional assessments, subjective measures of anxiety exists in the form of surveys; some widely-used ones are the State-Trait Anxiety Inventory (STAI), Beck Anxiety Inventory (BAI), and the Hospital Anxiety and Depression Scale - Anxiety (HADS-A) <span style='color:gray'>[Julian 2011]</span>. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a tension-anxiety subconstruct <span style='color:gray'>[McNair 1971]</span>.        <br><br><br> <span style='color:gray'> Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. <br> Corsini, R. J., & Ozaki, B. D. (1994). Encyclopedia of psychology (Vol. 1). New York: Wiley. <br> Julian, L. J. (2011). Measures of anxiety: state‐trait anxiety inventory (STAI), Beck anxiety inventory (BAI), and Hospital anxiety and Depression scale‐anxiety (HADS‐A). Arthritis care & research, 63(S11), S467-S472. <br> McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services. </span>",
  },
  autonomy_autonomy: {
    title: "Autonomy",
    explanation:
      "Autonomy is the ability to make independent decisions, often task-related (how and when to complete a task) in spaceflight settings. Closely related is autonomy, which refers to the capacity to act intentionally and/or the sense of volition (the power to enact one’s will) <span style='color:gray'>[Schlosser 2015][Goemaere 2016]</span>. Current Low Earth Orbit operational paradigms provide little autonomy to the crewmembers, as work schedules are set by mission control and modifications to procedures or plans are consulted with ground <span style='color:gray'>[Goemaere 2016]</span>. However, current autonomy levels will need to change as mission distances and communication delays increase, leading to less ground support <span style='color:gray'>[Marquez 2017]</span>. While there are efforts to increase crew autonomy through self-scheduling activities, for example, there are still major unknowns on the balance between crew and ground control <span style='color:gray'>[Marquez 2017]</span>.        <br><br><br> <span style='color:gray'> Schlosser, M. (2015). Agency. Stanford Encyclopedia of Philosophy. Accessed May 2, 2024. <br>  Goemaere, S., Vansteenkiste, M., & Van Petegem, S. (2016). Gaining deeper insight into the psychological challenges of human spaceflight: The role of motivational dynamics. Acta Astronautica, 121, 130-143. <br> Marquez, J. J., Hillenius, S., Kanefsky, B., Zheng, J., Deliz, I., & Reagan, M. (2017, March). Increasing crew autonomy for long duration exploration missions: self-scheduling. In 2017 IEEE Aerospace Conference (pp. 1-10). IEEE. </span> ",
  },
  situation_awareness_situation_awareness: {
    title: "Situation Awareness",
    explanation:
      "Situation awareness is the internalized mental model of the current state of one’s environments <span style='color:gray'>[Endsley 2021]</span>. Formally, it is defined most widely as “the perception of the elements in the environment within a volume of time and space, the comprehension of their meaning and the projection of their status in the near future” <span style='color:gray'>[Endsley 1988]</span>. There are three components: 1) perceiving relevant information in the environments, 2) understanding what they mean for one’s goals, and 3) predicting what will happen in the system in the near future – defined as levels 1, 2, and 3 situation awareness, respectively <span style='color:gray'>[Endsley 2021]</span>.        <br><br><br> <span style='color:gray'> Endsley, M. R. (1988). Design and evaluation for situation awareness enhancement. In Proceedings of the Human Factors Society 32nd Annual Meeting (pp. 97–101). Santa Monica, CA: Human Factors Society. <br> Endsley, M. R. (2021). Situation awareness. Handbook of human factors and ergonomics, 434-455. </span> ",
  },
  trust_trust: {
    title: "Trust",
    explanation:
      "Trust is a cognitive assessment about the level of risk of making something valued, vulnerable to someone’s (or something’s) actions <span style='color:gray'>[Feltman 2011]</span>. Some aspects of trust (-building or -maintaining) include respecting boundaries, reliability, accountability, integrity, and non-judgement <span style='color:gray'>[Brown 2021]</span>. These may be referred to as the interpersonal or ability-based aspects of trust, important on a personal or team level <span style='color:gray'>[Mayor 1995][Hoff and Bashir 2015]</span>. Trust in automation, which is especially relevant in spaceflight contexts, are more heavily reliant on performance-based trust (i.e., performance, process, or purpose) <span style='color:gray'>[Lee and Moray 1992]</span>.        <br><br><br> <span style='color:gray'>  Feltman, C. (2011). The thin book of trust: An essential primer for building trust at work. Thin Book Publishing. <br> Mayer R. C., Davis J. H., Schoorman F. D. (1995). An integrative model of organizational trust. Academy of Management Review, 20, 709–734. <br>  Hoff, K. A., & Bashir, M. (2015). Trust in automation: Integrating empirical evidence on factors that influence trust. Human factors, 57(3), 407-434. <br>  Lee J. D., Moray N. (1992). Trust, control strategies and allocation of function in human machine systems. Ergonomics, 22, 671–691. </span>",
  },
  curiosity_curiosity: {
    title: "Curiosity",
    explanation:
      "Curiosity can be a state (i.e., a curious person) or a trait (i.e., feel curious in the moment), and has both cognitive and affective components <span style='color:gray'>[Brown 2021]</span>. Interest, or the intellectual component of curiosity, is a prerequisite to the eventual recognition of a knowledge gap and investment to fill the gap through exploration and learning <span style='color:gray'>[Brown 2021]</span>.       <br><br><br> <span style='color:gray'>  Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. </span>       ",
  },
  kinship_kinship: {
    title: "Kinship",
    explanation:
      "During its conception, kinship was used to describe familial or genealogical ties, for example in “next of kin”. David Durkheim, the founder of sociology as a formal discipline, sought to explain kinship as “mutual relations of being, participation in one another’s existence” <span style='color:gray'>[Sahlins 2011]</span>. Kinship, whose definition has been debated in anthropology for over 150 years <span style='color:gray'>[Sahlins 2011]</span>, is chosen here to be the encompassing umbrella of mutual relational closeness, which comprises several subconstructs: belonging, connection, and loneliness. <br><br> Belonging – the connection that arises between people and groups without the need to compromise authenticity or values <span style='color:gray'>[Brown 2021]</span> – is a core concept to kinship. Meaningful connections, that allows people to feel seen and valued, are psychologically critical <span style='color:gray'>[Maslow and Lewis 1987]</span>. Loneliness is the absence of such meaningful connections, and is associated with a greater risk of physiological and psychological illnesses <span style='color:gray'>[Brown 2021]</span>.       <br><br><br> <span style='color:gray'> Sahlins, M. (2011). What kinship is (part one). Journal of the Royal Anthropological Institute, 17(1), 2-19. <br> Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. <br> Maslow, A., & Lewis, K. J. (1987). Maslow's hierarchy of needs. Salenger Incorporated, 14(17), 987-990. </span> ",
  },
  boredom_boredom: {
    title: "Boredom",
    explanation:
      "Boredom arises from a lack of stimulation, attention, or arousal <span style='color:gray'>[Bench and Lench 2013]</span>. It is defined as the negative experience of wanting, but being unable to, engage in satisfying activity <span style='color:gray'>[Eastwood 2012]</span>. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a vigor-activity subconstruct, which may be a close approximate <span style='color:gray'>[McNair 1971]</span>.        <br><br><br> <span style='color:gray'>  Bench, S. W., & Lench, H. C. (2013). On the function of boredom. Behavioral sciences, 3(3), 459-472. <br> Eastwood, J. D., Frischen, A., Fenske, M. J., & Smilek, D. (2012). The unengaged mind: Defining boredom in terms of attention. Perspectives on psychological science, 7(5), 482-495. <br> McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services. </span>",
  },
  depression_depression: {
    title: "Depression",
    explanation:
      "<span style='font-size:8.5pt'>Depression has been studied as a clinical symptom for over 2,000 years <span style='color:gray'>[Beck and Alford 2009]</span>. Depression is a cluster of behaviors that are persistent in time, including lack of interest in activities, loss of appetite, negative self-view, and alteration of mood (e.g., sadness, loneliness, apathy) <span style='color:gray'>[Brown 2021][Beck and Alford 2009]</span>. Common scales for measuring depression include the Beck Depression Inventory (BDI) and the Depression Anxiety Stress Scales (DASS) [Beck 1987][Lovibond and Lovibond 1995]. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a depression-dejection subconstruct <span style='color:gray'>[McNair 1971]</span>. <br>  While sadness is common to depression, it is not a necessary trait of depression <span style='color:gray'>[Beck and Alford 2009]</span>. Although we have not defined it explicitly, it is an important component of the human emotional spectrum, with its most salient representation in behavioral health as a symptom of depression. Similarly, grief - composed of feelings of loss and longing – may be associated with ‘depressed mood’ but is realistically distinct <span style='color:gray'>[Brown 2021]</span>.     <br><br><br> <span style='color:gray'> Beck, A. T., & Alford, B. A. (2009). Depression: Causes and treatment. University of Pennsylvania Press. <br> Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. <br> Beck, A. T., Steer, R. A., & Brown, G. K. (1987). Beck depression inventory. San Antonio, TX. <br> Lovibond, P. F., & Lovibond, S. H. (1995). The structure of negative emotional states: Comparison of the Depression Anxiety Stress Scales (DASS) with the Beck Depression and Anxiety Inventories. Behaviour research and therapy, 33(3), 335-343. <br>  McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services. </span> </span>",
  },
  nostalgia_homesickness_nostalgia_homesickness: {
    title: "Nostalgia/Homesickness",
    explanation:
      "Homesickness is the set of feelings that are associated with the loss of known people and places <span style='color:gray'>[Brown and Perkins 1992]</span>. Nostalgia is difficult to define precisely, but one interpretation is a primarily positive, context-specific emotion that combines sadness, happiness, yearning, and loss <span style='color:gray'>[Brown 2021]</span>. We grouped them here since they are likely to occur in parallel in the context of Isolated, Confined, and Extreme environments.         <br><br><br> <span style='color:gray'> Brown, B. B., & Perkins, D. D. (1992). Disruptions in Place Attachment. In I. Altman & S. M. Low (Eds.), Place Attachment (pp. 279–304). Springer US. <br>  Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. </span>",
  },
  contentment_contentment: {
    title: "Contentment",
    explanation:
      "We distinguish contentment here as a low-arousal emotion that may compose feelings of peace, tranquility, satisfaction, and calm <span style='color:gray'>[Brown 2021]</span>. Closely related constructs – happiness, joy, and gratitude – are more high-arousal emotions. We choose contentment here as the ‘catch-all’ for these positive emotions connected to the environment, as a more tangible attribute to promote as a behavioral health outcome.  <br>  To distinguish from contentment, the state of happiness is a feeling of pleasure related to the immediate environment or circumstances <span style='color:gray'>[Brown 2021]</span>. Happiness is more immediate, while other factors (e.g., joy and contentment) may be more chronic, and acute happiness may not necessarily contribute to long-term contentment <span style='color:gray'>[Brown 2021]</span>.       <br><br><br> <span style='color:gray'> Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House. </span> ",
  },
  crew_selection_individual_traits_invisible: {
    title: "crew_selection &#8594; Individual Traits",
    explanation:
      "Historically, NASA has grouped select-in criteria as “the right stuff” (“virtuous, no-nonsense, able and professional astronauts”), or traits that may be more desirable to select for in astronaut candidates <span style='color:gray'>[Vakoch 2013][Steimle and Norberg 2013]</span>. In a study of ESA astronaut applicants (n=902), higher levels of neuroticism (specifically anxiety, anger hostility, and depression) were found for candidates who were not selected <span style='color:gray'>[Mittelstädt 2016]</span>. However, “the right stuff” is a compilation of ideals that humans cannot attain; more focus has been put on behavioral health research for long-duration missions <span style='color:gray'>[Vakoch 2013]</span>. <br><br><br> <span style='color:gray'> Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg. <br> Vakoch, D. A. (Ed.). (2013). On Orbit and Beyond: Psychological Perspectives on Human Spaceflight. Springer Berlin Heidelberg. <br>Mittelstädt, J. M., Pecena, Y., Oubaid, V., & Maschke, P. (2016). Psychometric Personality Differences Between Candidates in Astronaut Selection. Aerospace Medicine and Human Performance, 87(11), 933–939.</span>",
  },
  individual_traits_invisible_crew_selection: {
    title: "crew_selection &#8594; Individual Traits",
    explanation:
      "Historically, NASA has grouped select-in criteria as “the right stuff” (“virtuous, no-nonsense, able and professional astronauts”), or traits that may be more desirable to select for in astronaut candidates <span style='color:gray'>[Vakoch 2013][Steimle and Norberg 2013]</span>. In a study of ESA astronaut applicants (n=902), higher levels of neuroticism (specifically anxiety, anger hostility, and depression) were found for candidates who were not selected <span style='color:gray'>[Mittelstädt 2016]</span>. However, “the right stuff” is a compilation of ideals that humans cannot attain; more focus has been put on behavioral health research for long-duration missions <span style='color:gray'>[Vakoch 2013]</span>. <br><br><br> <span style='color:gray'> Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg. <br> Vakoch, D. A. (Ed.). (2013). On Orbit and Beyond: Psychological Perspectives on Human Spaceflight. Springer Berlin Heidelberg. <br>Mittelstädt, J. M., Pecena, Y., Oubaid, V., & Maschke, P. (2016). Psychometric Personality Differences Between Candidates in Astronaut Selection. Aerospace Medicine and Human Performance, 87(11), 933–939. </span>",
  },
  crew_selection_social_composition_invisible: {
    title: "crew_selection &#8594; Social Composition",
    explanation:
      "Crew compatibility is a major consideration as astronauts perform their missions with a team. Indirect assessments of compatibility (such as personality inventories) are effective when used in the selection process to create specific team configurations (e.g., homogenous). However, applicants can “game” the system via social desirability (tendency to provide responses that are socially desired) <span style='color:gray'>[Ganster 1983][Bell 2015]</span>. While in-depth interviews and direct/operational methods of assessment may help mitigate these issues, they can be expensive and time-intensive. Furthermore, crews may change in mission <span style='color:gray'>[Bell 2015]</span>. <br><br><br> <span style='color:gray'>Ganster, D. C., Hennessey, H. W., & Luthans, F. (1983). Social desirability response effects: Three alternative models. Academy of Management Journal, 26(2), 321–331. <br>Bell, S. T., Brown, S. G., Outland, N. B., & Abben, D. R. (2015). Critical Team Composition Issues for Long-Distance and Long-Duration Space Exploration.</span>",
  },
  social_composition_invisible_crew_selection: {
    title: "crew_selection &#8594; Social Composition",
    explanation:
      "Crew compatibility is a major consideration as astronauts perform their missions with a team. Indirect assessments of compatibility (such as personality inventories) are effective when used in the selection process to create specific team configurations (e.g., homogenous). However, applicants can “game” the system via social desirability (tendency to provide responses that are socially desired) <span style='color:gray'>[Ganster 1983][Bell 2015]</span>. While in-depth interviews and direct/operational methods of assessment may help mitigate these issues, they can be expensive and time-intensive. Furthermore, crews may change in mission <span style='color:gray'>[Bell 2015]</span>. <br><br><br> <span style='color:gray'>Ganster, D. C., Hennessey, H. W., & Luthans, F. (1983). Social desirability response effects: Three alternative models. Academy of Management Journal, 26(2), 321–331. <br>Bell, S. T., Brown, S. G., Outland, N. B., & Abben, D. R. (2015). Critical Team Composition Issues for Long-Distance and Long-Duration Space Exploration.</span>",
  },
  distance_from_home_earth_communication_delay: {
    title: "Distance from Home/Earth &#8594; Communication Delay",
    explanation:
      "During a lunar mission, a communication delay of 5-14 second is expected <span style='color:gray'>[Parisi 2023]</span>. During a Mars surface mission, depending on the relative positions of the Earth and Mars, a roundtrip communication delay is approximately 6.5 to 44 minutes <span style='color:gray'>[Schuster 2007]</span>. <br><br><br> <span style='color:gray'> Parisi, M., Panontin, T., Wu, S., Mctigue, K., Vera, A.  (2023). Effects of Communication Delay on Human Spaceflight Missions. In: Pedro Arezes and Susana Costa (eds) Human-Centered Aerospace Systems and Sustainability Applications. AHFE (2023) International Conference. AHFE Open Access, vol 98. AHFE International, USA. <br> Schuster, Alfons (2007): Intelligent Computing Everywhere. Springer, Berlin. P. 235-236. </span>",
  },
  distance_from_home_earth_isolated: {
    title: "Distance from Home/Earth &#8594; Isolated",
    explanation:
      "As the distance from Home/Earth increases, Earth will disappear into the background of space, termed the ‘Earth-out-of-view phenomenon’. Along with the awareness of the impossibility of rapid return and confinement as the only option during the whole mission, these psychological factors will increase the sense of isolation <span style='color:gray'>[Musso 2018]</span>.<br><br><br> <span style='color:gray'>Musso, G., Ferraris, S., Fenoglio, F., Zafarana, A., Salatino, A., Ricci, R. (2018). Habitability Issues in Long Duration Space Missions Far from Earth. In: Stanton, N. (eds) Advances in Human Aspects of Transportation. AHFE 2017. Advances in Intelligent Systems and Computing, vol 597. Springer, Cham. </span>>",
  },
  distance_from_home_earth_resource_constrained: {
    title: "Distance from Home/Earth &#8594; Resource Constrained",
    explanation:
      "When moving from home (migration, relocation, immigration), refugees and immigrants face challenges such as language difficulties, rejection of qualifications, limitation of personal resources, and barriers to social support <span style='color:gray'>[Stewart 2008][Faret 2021]</span>.<br>The current space mission paradigm is to bring all resources (consumable and non-consumable) from Earth. Increased distance, such as the one from Mars to Earth, creates logistical and cost difficulties <span style='color:gray'>[Sullivan and McKay 1991]</span>. Solutions such as regenerative systems and in-situ resource utilization have been proposed <span style='color:gray'>[Pickett 2020][Starr 2020]</span>. <br><br><br> <span style='color:gray'> Stewart, M., Anderson, J., Beiser, M., Mwakarimba, E., Neufeld, A., Simich, L., & Spitzer, D. (2008). Multicultural Meanings of Social Support among Immigrants and Refugees. International Migration, 46(3), 123–159.<br>Faret, L., Cornejo, A. P. G., Aguirre, J. N. N., & González, I. A. T. (2021). The city under constraint: International migrants’ challenges and strategies to access urban resources in Mexico City. Canadian Geographies / Géographies Canadiennes, 65(4), 423–434.<br>Sullivan, T. A., & McKay, D. S. (1991). Using space resources. NASA Johnson Space Center.<br>Pickett, M. T., Roberson, L. B., Calabria, J. L., Bullard, T. J., Turner, G., & Yeh, D. H. (2020). Regenerative water purification for space applications: Needs, challenges, and technologies towards “closing the loop.” Life Sciences in Space Research, 24, 64–82.<br>Starr, S. O., & Muscatello, A. C. (2020). Mars in situ resource utilization: A review. Planetary and Space Science, 182. </span>",
  },
  distance_from_home_earth_medical_capability: {
    title: "Distance from Home/Earth &#8594; Medical Capability",
    explanation:
      "Distance from Home/Earth limits the availability of medical care, including unavailability of resources, limited alternatives for ineffectiveness/side effects of medicine, and degradation of medications <span style='color:gray'>[Wotring 2015]</span>. <br><br><br> <span style='color:gray'> Wotring, V. E. (2015). Medication use by U.S. crewmembers on the International Space Station. FASEB Journal: Offcial Publication of the Federation of American Societies for Experimental Biology, 29(11), 4417–4423. </span>",
  },
  distance_from_home_earth_food: {
    title: "Distance from Home/Earth &#8594; Food",
    explanation:
      "Distance from Home/Earth highly constrains the food system to be shelf stable, nutritional, and palatable for long durations <span style='color:gray'>[Schorn and Roma 2020]</span>. <br><br><br> <span style='color:gray'> Schorn, J. M., & Roma, P. G. (2020). Physical hazards of space exploration and the biological bases of behavioral health and performance in extreme environments. In Psychology and human performance in space programs (pp. 1-22). CRC Press.</span>",
  },
  distance_from_home_earth_family_and_friends: {
    title: "Distance from Home/Earth &#8594; Family and Friends",
    explanation:
      "As one moves away from home, one also often moves away from existing social ties <span style='color:gray'>[Scopelliti and Tiberio 2010]</span>. In the United States, ⅕ of the nation’s children are growing up in immigrant homes; in the process of immigration, families often undergo separation from extended relatives, immediate family, and their social networks <span style='color:gray'>[Suárez-Orozco 2012]</span>.        <br><br><br> <span style='color:gray'> Scopelliti, M., & Tiberio, L. (2010). Homesickness in University Students: The Role of Multiple Place Attachment. Environment and Behavior, 42(3), 335–350. <br>  Suárez-Orozco, C., Todorova, I. L., & Louie, J. (2012). Making up for lost time: The experience of separation and reunification among immigrant families. In The new immigration (pp. 179-196). Routledge. </span>",
  },
  mission_duration_isolated: {
    title: "Mission duration &#8594; Isolated",
    explanation:
      "Not only does increased mission duration limit the amount of contact with usual sources of support, prolonged isolation can decrease the perceived quality and satisfaction of support, even when readily available <span style='color:gray'> [Palinkas 2004]</span>. <br><br><br> <span style='color:gray'> Palinkas, L. A., Johnson, J. C., & Boster, J. S. (2004). Social support and depressed mood in isolated and confined environments. Acta Astronautica, 54(9), 639–647. </span>",
  },
  mission_duration_boredom: {
    title: "Mission duration &#8594; Boredom",
    explanation:
      "During a study of a crew of 6 in isolation for 520 days, crew sedentariness increased over the mission as captured by actigraphy (motion data) <span style='color:gray'> [Basner 2013]</span>. <br><br><br> <span style='color:gray'>Basner M, Dinges DF, Mollicone DJ, Ecker A, Jones CW, et al. (2013) Mars 520-d mission simulation reveals protracted crew hypokinesis and alterations of sleep duration and timing. Proc Natl Acad Sci USA 110: 2635–2640. </span>",
  },
  mission_duration_family_and_friends: {
    title: "Mission duration &#8594; Family and Friends",
    explanation:
      "Longer mission duration means that crewmembers will have to endure a longer period of separation from their family and friends <span style='color:gray'>[Palinkas 2001]</span>. There are likely to be adverse effects on the families as well. In a study of military families (n=180), it was found that length of time away on a mission was associated with adverse effects (e.g., loneliness, anxiety) to the family that remained at home <span style='color:gray'>[Wexler and McGrath 1991]</span>.        <br><br><br> <span style='color:gray'> Palinkas, L. A. (2001). Psychosocial issues in long-term space flight: overview. Gravitational and Space Biology Bulletin, 14(2), 25-33. <br> Wexler, H. K., & McGrath, E. (1991). Family member stress reactions to military involvement separation. Psychotherapy: Theory, Research, Practice, Training, 28(3), 515–519. </span>",
  },
  communication_delay_distance_from_home_earth: {
    title: "Distance from Home/Earth &#8594; Communication Delay",
    explanation:
      "During a lunar mission, a communication delay of 5-14 second is expected <span style='color:gray'>[Parisi 2023]</span>. During a Mars surface mission, depending on the relative positions of the Earth and Mars, a roundtrip communication delay is approximately 6.5 to 44 minutes <span style='color:gray'>[Schuster 2007]</span>. <br><br><br> <span style='color:gray'> Parisi, M., Panontin, T., Wu, S., Mctigue, K., Vera, A.  (2023). Effects of Communication Delay on Human Spaceflight Missions. In: Pedro Arezes and Susana Costa (eds) Human-Centered Aerospace Systems and Sustainability Applications. AHFE (2023) International Conference. AHFE Open Access, vol 98. AHFE International, USA.  <br> Schuster, Alfons (2007): Intelligent Computing Everywhere. Springer, Berlin. P. 235-236. </span>",
  },
  communication_delay_ground_support: {
    title: "Communication delay &#8594; Ground Support",
    explanation:
      "All human space exploration thus far has been within the Earth-Moon range, where minimal communication delay has allowed the majority of the operations to be ground-based <span style='color:gray'>[Frank 2013]</span>. In an analog habitat study of communication delay (N = 16), it was found that with the current ISS operational mode, a one-way communication delay of over 300 seconds (5 minutes) resulted in a level of workload requiring mitigation <span style='color:gray'>[Frank 2013]</span>. <br><br><br> <span style='color:gray'> Frank, J., Spirkovska, L., McCann, R., Lui Wang, Pohlkamp, K., & Morin, L. (2013). Autonomous mission operations. 2013 IEEE Aerospace Conference, 1–20.</span>",
  },
  communication_delay_transition_processes: {
    title: "Communication delay &#8594; Transition Processes",
    explanation:
      "During an isolation analog of 520 days (N = 6, Mars 500 experiment), crew reported that the presence, not the duration, of communication delay mattered. During decision making processes, both crew and ground support developed dissatisfaction and inefficiencies in subsequent decisions due to the lack of shared understanding <span style='color:gray'>[Ushakov 2014]</span>. <br><br><br> <span style='color:gray'> Ushakov, I. B., Vladimirovich, M. B., Bubeev, Y. A., Gushin, V. I., Vasil’eva, G. Y., Vinokhodova, A. G., & Shved, D. M. (2014). Main findings of psychophysiological studies in the Mars 500 experiment. Herald of the Russian Academy of Sciences, 84(2), 106–114. </span>",
  },
  communication_delay_family_and_friends: {
    title: "Communication delay &#8594; Family and Friends",
    explanation:
      "Prolonged autonomy and communication delays contribute to long term isolation, resulting in greater need for psychological support from family and friends <span style='color:gray'>[Ushakov 2014]</span>. During an isolation analog of 520 days (N = 6, Mars 500) and previous international isolation studies (HUBES 94; SFINCSS 99), the number and size of outgoing emails to family and friends increased with mission duration <span style='color:gray'>[Ushakov 2014]</span>. <br><br><br> <span style='color:gray'> Ushakov, I. B., Vladimirovich, M. B., Bubeev, Y. A., Gushin, V. I., Vasil’eva, G. Y., Vinokhodova, A. G., & Shved, D. M. (2014). Main findings of psychophysiological studies in the Mars 500 experiment. Herald of the Russian Academy of Sciences, 84(2), 106–114. </span>",
  },
  communication_delay_stress: {
    title: "Communication delay &#8594; Stress",
    explanation:
      "Prolonged isolation and limited interfaces with existing sources of support with communication delay compounds the stress associated with long-duration space exploration missions <span style='color:gray'>[Schorn and Roma 2020]</span>. <br><br><br> <span style='color:gray'> Schorn, J. M., & Roma, P. G. (2020). Physical hazards of space exploration and the biological bases of behavioral health and performance in extreme environments. In Psychology and human performance in space programs (pp. 1-22). CRC Press. </span>",
  },
  isolated_distance_from_home_earth: {
    title: "Distance from Home/Earth &#8594; Isolated",
    explanation:
      "As the distance from Home/Earth increases, Earth will disappear into the background of space, termed the ‘Earth-out-of-view phenomenon’. Along with the awareness of the impossibility of rapid return and confinement as the only option during the whole mission, these psychological factors will increase the sense of isolation <span style='color:gray'>[Musso 2018]</span>.<br><br><br> <span style='color:gray'>Musso, G., Ferraris, S., Fenoglio, F., Zafarana, A., Salatino, A., Ricci, R. (2018). Habitability Issues in Long Duration Space Missions Far from Earth. In: Stanton, N. (eds) Advances in Human Aspects of Transportation. AHFE 2017. Advances in Intelligent Systems and Computing, vol 597. Springer, Cham. </span>>",
  },
  isolated_mission_duration: {
    title: "Mission duration &#8594; Isolated",
    explanation:
      "Not only does increased mission duration limit the amount of contact with usual sources of support, prolonged isolation can decrease the perceived quality and satisfaction of support, even when readily available <span style='color:gray'> [Palinkas 2004]</span>. <br><br><br> <span style='color:gray'> Palinkas, L. A., Johnson, J. C., & Boster, J. S. (2004). Social support and depressed mood in isolated and confined environments. Acta Astronautica, 54(9), 639–647. </span>",
  },
  isolated_extreme: {
    title: "Extreme &#8594; Isolated",
    explanation:
      "Due to the darkness and weather conditions, winter-over Antarctica stays are also limited in visitors, opportunities for leaving, and fresh supplies due to difficulties in transportation and logistics <span style='color:gray'>[Harrison 1991][Palinkas 2008]</span>.         <br><br><br> <span style='color:gray'> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. <br> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163.  </span>  ",
  },
  isolated_social_support: {
    title: "Isolated &#8594; Social Support",
    explanation:
      "In a study of 200+ winter-over personnel in Antarctica, advice seeking decreased in frequency through the mission; moreover, negative mood after advice seeking provided evidence to the frustrating experience of seeking advice from fellow crewmembers who were experiencing the same stressors. In certain scenarios, crewmembers experiencing the same isolation and confinement may be inadequate sources of support <span style='color:gray'>[Palinkas 2004]</span>.         <br><br><br> <span style='color:gray'> Palinkas, L. A., Johnson, J. C., & Boster, J. S. (2004). Social support and depressed mood in isolated and confined environments. Acta Astronautica, 54(9), 639–647.</span> ",
  },
  isolated_ground_support: {
    title: "Isolated &#8594; Ground Support",
    explanation:
      "In one study of 200+ winter-over personnel in Antarctica, it was found that although the availability of support didn’t change during prolonged isolation, the perceived quality of support decreased <span style='color:gray'>[Palinkas 2004]</span>.  <br><br><br> <span style='color:gray'> Palinkas, L. A., Johnson, J. C., & Boster, J. S. (2004). Social support and depressed mood in isolated and confined environments. Acta Astronautica, 54(9), 639–647.</span> ",
  },
  isolated_physical_health: {
    title: "Isolated &#8594; Physical Health",
    explanation:
      "Social isolation is a major risk for mortality. The positive impact of social ties on health is significant, with its effect size on the same scale as smoking, obesity, and physical activity <span style='color:gray'>[House 1988][Taylor 2011]</span>. Pathways for social support linking to physical health are varied, including stress regulation <span style='color:gray'>[Taylor 2011]</span>, and promotion of and adherence to healthy habits <span style='color:gray'>[Carlson 2011][Wilson and Ampey-Thornhill 2011]</span>.        <br><br><br> <span style='color:gray'> House, J. S., Landis, K. R., & Umberson, D. (1988). Social relationships and health. Science (New York, N.Y.), 241(4865), 540–545. <br> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. <br> Carlson, L. E., Goodey, E., Bennett, M. H., Taenzer, P., & Koopmans, J. (2002). The addition of social support to a community-based large-group behavioral smoking cessation intervention: Improved cessation rates and gender differences. Addictive Behaviors, 27, 547-559. <br> Wilson DK, Ampey-Thornhill G. The role of gender and family support on dietary compliance in an African American adolescent hypertension prevention study. Ann Behav Med. 2001;23(1):59-67. </span> ",
  },
  isolated_stress: {
    title: "Isolated &#8594; Stress",
    explanation:
      "Prolonged isolation is a well-established negative stressor; particularly, limited communication with psychological support, family, and friends may negatively impact behavioral health and performance [Schorn and Roma 2020][Kanas 2007].        <br><br><br> <span style='color:gray'> Schorn, J. M., & Roma, P. G. (2020). Physical hazards of space exploration and the biological bases of behavioral health and performance in extreme environments. In Psychology and human performance in space programs (pp. 1-22). CRC Press. <br> Kanas, N. A., Salnitskiy, V. P., Ritsher, J. B., Gushin, V. I., Weiss, D. S., … Marmar, C. R. (2007). Psychosocial interactions during ISS missions. Acta Astronautica, 60, 329–335. </span> ",
  },
  confined_social_monotony: {
    title: "Confined  &#8594; Social Monotony",
    explanation:
      "Groups that undergo confinement lose immediate access to friends, family, and nominal networks of support <span style='color:gray'>[Palinkas 1992]</span>. Social isolation, monotony, and intensified social conflicts can also occur in confinement with the same group of people without a possibility of leaving <span style='color:gray'>[Palinkas 2004]</span>.         <br><br><br> <span style='color:gray'> Palinkas, L. A. (1992). Going to extremes: The cultural context of stress, illness and coping in Antarctica. Social Science & Medicine, 35(5), 651–664. <br> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. </span>        ",
  },
  confined_privacy: {
    title: "Confined  &#8594; Privacy",
    explanation:
      "The interior of the Antarctic stations emphasize efficiency, not comfort. The lack of privacy (physical and acoustic) is a primary stressor in confined environments <span style='color:gray'>[Palinkas 2008][Nicolas 2016]</span>.        <br><br><br> <span style='color:gray'> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. </span>        ",
  },
  extreme_genetics: {
    title: "Extreme &#8594; Genetics",
    explanation:
      "During a spaceflight study of one year or shorter missions (N = 11), it was found that telomere lengths shortened significantly for all crewmembers upon return to Earth, regardless of in-space telomere dynamics. An increased frequency of chromosomal inversions were also observed in- and post-flight. One hypothesis is that this telomerase activity is a response to the extreme environment-induced chronic oxidative stress, which all crewmembers were found to experience during spaceflight <span style='color:gray'>[Luxton 2020]</span>.       <br><br><br> <span style='color:gray'> Luxton, J. J., McKenna, M. J., Lewis, A., Taylor, L. E., George, K. A., Dixit, S. M., Moniz, M., Benegas, W., Mackay, M. J., Mozsary, C., Butler, D., Bezdan, D., Meydan, C., Crucian, B. E., Zwart, S. R., Smith, S. M., Mason, C. E., & Bailey, S. M. (2020). Telomere Length Dynamics and DNA Damage Responses Associated with Long-Duration Spaceflight. Cell Reports, 33(10), 108457. </span>  ",
  },
  extreme_isolated: {
    title: "Extreme &#8594; Isolated",
    explanation:
      "Due to the darkness and weather conditions, winter-over Antarctica stays are also limited in visitors, opportunities for leaving, and fresh supplies due to difficulties in transportation and logistics <span style='color:gray'>[Harrison 1991][Palinkas 2008]</span>.         <br><br><br> <span style='color:gray'> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. <br> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163.  </span>  ",
  },
  extreme_resource_constrained: {
    title: "Extreme &#8594; Resource Constrained",
    explanation:
      "In extreme environments such as Antarctica, little life can exist without artificial support <span style='color:gray'>[Natani and Shurley 1974]</span>. Therefore, support, logistics, and resources must be carefully planned to maintain life and operations in extreme environments. However, the geographic isolation, cost, policies, and extreme conditions make transport and logistics complicated <span style='color:gray'>[Kennicutt 2016]</span>. <br> While costs to launch into space have declined appreciatively from $1 million/kg in the 1950s to $1400/kg in 2020s (SpaceX’s Falcon Heavy), the price tag still constrains resource availability for Low-Earth Orbit, and particularly for Moon and Mars missions <span style='color:gray'>[Jones 2018]</span>. <br> Impacts of climate change are projected to lead to resource depletion in already deprived areas <span style='color:gray'>[Beveniste 2022]</span>.         <br><br><br> <span style='color:gray'> Natani, K., & Shurley, J. T. (1974). Sociopsychological aspects of a winter vigil at South Pole station. In E. K. E. Gunderson (Ed.), Antarctic Research Series (Vol. 22, pp. 89–114). American Geophysical Union. <br> Kennicutt, M. C., Kim, Y., & Rogan-Finnemore, M. (2016). Antarctic roadmap challenges. Council of Managers of National Antarctic Programs. <br> Jones, H. W. (2018). The Future Impact of Much Lower Launch Cost. 48th International Conference on Environmental Systems.<br> Benveniste, H., Oppenheimer, M. & Fleurbaey, M. (2022). Climate change increases resource-constrained international immobility. Nat. Clim. Chang. 12, 634–641. </span>        ",
  },
  extreme_altered_gravity: {
    title: "Extreme &#8594; Altered Gravity",
    explanation:
      "Reduced gravity has physiological and operational implications <span style='color:gray'>[Lackner 1992][Stirling 2009][Massion 1998][Tanaka 2017]</span>. Various analogs for altered gravity exist to replicate conditions for operational, technological, or physiological testing. These include head-down tilt [Watenpaugh 2016], water immersion <span style='color:gray'>[Watenpaugh 2016]</span>, neutral buoyancy <span style='color:gray'>[Bury 2023]</span>, and parabolic flights <span style='color:gray'>[Johnson 2018]</span>.        <br><br><br> <span style='color:gray'> Lackner, J. R. (1992). Spatial orientation in weightless environments. In Perception (Vol. 21, pp. 803–812). <br> Stirling, L., Willcox, K., Ferguson, P., & Newman, D. (2009). Kinetics and kinematics for translational motions in microgravity during parabolic flight. Aviation Space and Environmental Medicine, 80(6), 522–531. <br> Massion, J., Amblard, B., Assaiante, C., Mouchnino, L., & Vernazza, S. (1998). Body orientation and control of coordinated movements in microgravity. Brain Research Reviews, 28(1–2), 83–91. <br> Tanaka, K., Nishimura, N., & Kawai, Y. (2017). Adaptation to microgravity, deconditioning, and countermeasures. The Journal of Physiological Sciences, 67(2), 271–281. <br> Watenpaugh, D. E. (2016). Analogs of microgravity: Head-down tilt and water immersion. Journal of Applied Physiology, 120(8), 904–914. <br> Bury, N.-A., Jenkin, M., Allison, R. S., Herpers, R., & Harris, L. R. (2023). Vection underwater illustrates the limitations of neutral buoyancy as a microgravity analog. Npj Microgravity, 9(1), 42. <br> Johnson, K. T., Taylor, S., Fedor, S., Jaques, N., Chen, W., & Picard, R. W. (2018). Vomit Comet Physiology: Autonomic Changes in Novice Flyers. </span>     ",
  },
  extreme_radiation: {
    title: "Extreme &#8594; Radiation",
    explanation:
      "In extreme environments (such as deep space), radiation levels are elevated due to a combination of background Galactic Cosmic Radiation, Solar Particle Events, and localized trapped particle belts <span style='color:gray'>[Allen 2018]</span>. <br> Extreme events on Earth, such a nuclear facility accidents (e.g., Fukushiima Dachii, 2011) can have impacts on the safety of nearby water and food, and increased mortalities and morbidities <span style='color:gray'>[Jones 2013]</span>. On a much larger scale, the use of atomic bombs (only time in history – Hiroshima and Nagasaki, 1945) resulted in over 200,000 deaths before year’s end <span style='color:gray'>[Ten Hoeve and Jacobson 2012]</span>.        <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Jones, C. F., Loh, S. L., & Satō, K. (2013). Narrating Fukushima: Scales of a nuclear meltdown. East Asian Science, Technology and Society: An International Journal, 7(4), 601-623. <br> Ten Hoeve, J. E., & Jacobson, M. Z. (2012). Worldwide health effects of the Fukushima Daiichi nuclear accident. Energy & Environmental Science, 5(9), 8743-8757. </span>     ",
  },
  extreme_light_dark_cycles: {
    title: "Extreme &#8594; Light/Dark Cycles",
    explanation:
      "Extreme environments, like polar regions, can experience perpetual night or day <span style='color:gray'>[Palinkas and Suedfeld 2008]</span>. In Low-Earth Orbit, the International Space Station experiences a sunrise every 45 minutes <span style='color:gray'>[Thirsk 2009]</span>. Altered (non-24 hour) light/dark cycles can cause disturbances in circadian rhythms due to regular, daily light cycles being the primary factor for entrainment <span style='color:gray'>[Broadway and Arendt 1988]</span>.        <br><br><br> <span style='color:gray'> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Thirsk, R., Kuipers, A., Mukai, C., & Williams, D. (2009). The space-flight environment: The International Space Station and beyond. Canadian Medical Association Journal, 180(12), 1216–1220. <br> Broadway JW and Arendt J. (1988). Seasonal and bright light changes of the phase position of the human melatonin rhythms in Antarctica. Arctic Med Res; 47 (suppl 1): 201–03. </span>     ",
  },
  resource_constrained_distance_from_home_earth: {
    title: "Distance from Home/Earth &#8594; Resource Constrained",
    explanation:
      "When moving from home (migration, relocation, immigration), refugees and immigrants face challenges such as language difficulties, rejection of qualifications, limitation of personal resources, and barriers to social support <span style='color:gray'>[Stewart 2008][Faret 2021]</span>.<br>The current space mission paradigm is to bring all resources (consumable and non-consumable) from Earth. Increased distance, such as the one from Mars to Earth, creates logistical and cost difficulties <span style='color:gray'>[Sullivan and McKay 1991]</span>. Solutions such as regenerative systems and in-situ resource utilization have been proposed <span style='color:gray'>[Pickett 2020][Starr 2020]</span>. <br><br><br> <span style='color:gray'> Stewart, M., Anderson, J., Beiser, M., Mwakarimba, E., Neufeld, A., Simich, L., & Spitzer, D. (2008). Multicultural Meanings of Social Support among Immigrants and Refugees. International Migration, 46(3), 123–159.<br>Faret, L., Cornejo, A. P. G., Aguirre, J. N. N., & González, I. A. T. (2021). The city under constraint: International migrants’ challenges and strategies to access urban resources in Mexico City. Canadian Geographies / Géographies Canadiennes, 65(4), 423–434.<br>Sullivan, T. A., & McKay, D. S. (1991). Using space resources. NASA Johnson Space Center.<br>Pickett, M. T., Roberson, L. B., Calabria, J. L., Bullard, T. J., Turner, G., & Yeh, D. H. (2020). Regenerative water purification for space applications: Needs, challenges, and technologies towards “closing the loop.” Life Sciences in Space Research, 24, 64–82.<br>Starr, S. O., & Muscatello, A. C. (2020). Mars in situ resource utilization: A review. Planetary and Space Science, 182. </span>",
  },
  resource_constrained_extreme: {
    title: "Extreme &#8594; Resource Constrained",
    explanation:
      "In extreme environments such as Antarctica, little life can exist without artificial support <span style='color:gray'>[Natani and Shurley 1974]</span>. Therefore, support, logistics, and resources must be carefully planned to maintain life and operations in extreme environments. However, the geographic isolation, cost, policies, and extreme conditions make transport and logistics complicated <span style='color:gray'>[Kennicutt 2016]</span>. <br> While costs to launch into space have declined appreciatively from $1 million/kg in the 1950s to $1400/kg in 2020s (SpaceX’s Falcon Heavy), the price tag still constrains resource availability for Low-Earth Orbit, and particularly for Moon and Mars missions <span style='color:gray'>[Jones 2018]</span>. <br> Impacts of climate change are projected to lead to resource depletion in already deprived areas <span style='color:gray'>[Beveniste 2022]</span>.         <br><br><br> <span style='color:gray'> Natani, K., & Shurley, J. T. (1974). Sociopsychological aspects of a winter vigil at South Pole station. In E. K. E. Gunderson (Ed.), Antarctic Research Series (Vol. 22, pp. 89–114). American Geophysical Union. <br> Kennicutt, M. C., Kim, Y., & Rogan-Finnemore, M. (2016). Antarctic roadmap challenges. Council of Managers of National Antarctic Programs. <br> Jones, H. W. (2018). The Future Impact of Much Lower Launch Cost. 48th International Conference on Environmental Systems.<br> Benveniste, H., Oppenheimer, M. & Fleurbaey, M. (2022). Climate change increases resource-constrained international immobility. Nat. Clim. Chang. 12, 634–641. </span>        ",
  },
  resource_constrained_supplies: {
    title: "Resource Constrained &#8594; Supplies",
    explanation:
      "In resource constrained environments, supplies (e.g., fresh food, water, clothing) are limited <span style='color:gray'>[Taylor 1969][Natani and Shurley 1974]</span>. With limited or impossible resupply capabilities, regenerative or closed-loops systems are one solution to maximize the use of existing resources <span style='color:gray'>[Pickett 2020]</span>.         <br><br><br> <span style='color:gray'> Taylor, A. J. W. (1969). Ability, stability, and social adjustment among Scott base personnel, Antarctica, Occup. Psychol., 43, 81-93. <br> Natani, K., & Shurley, J. T. (1974). Sociopsychological aspects of a winter vigil at South Pole station. In E. K. E. Gunderson (Ed.), Antarctic Research Series (Vol. 22, pp. 89–114). American Geophysical Union. <br> Pickett, M. T., Roberson, L. B., Calabria, J. L., Bullard, T. J., Turner, G., & Yeh, D. H. (2020). Regenerative water purification for space applications: Needs, challenges, and technologies towards “closing the loop.” Life Sciences in Space Research, 24, 64–82. </span> ",
  },
  resource_constrained_food: {
    title: "Resource Constrained &#8594; Food",
    explanation:
      "Even in Low Earth Orbit, resupply logistics limit the influx of fresh food on the International Space Station. As mission distance increases, the difficulty of resupply will challenge how food and nutrition are provided <span style='color:gray'> [Douglas 2020]</span>.         <br><br><br> <span style='color:gray'> Taylor, A. J. W. (1969). Ability, stability, and social adjustment among Scott base personnel, Antarctica, Occup. Psychol., 43, 81-93. <br> Natani, K., & Shurley, J. T. (1974). Sociopsychological aspects of a winter vigil at South Pole station. In E. K. E. Gunderson (Ed.), Antarctic Research Series (Vol. 22, pp. 89–114). American Geophysical Union. <br> Pickett, M. T., Roberson, L. B., Calabria, J. L., Bullard, T. J., Turner, G., & Yeh, D. H. (2020). Regenerative water purification for space applications: Needs, challenges, and technologies towards “closing the loop.” Life Sciences in Space Research, 24, 64–82. </span> ",
  },
  mission_demands_physical_workload: {
    title: "Mission Demands &#8594; Physical Workload",
    explanation:
      "During launch, peak acceleration is at ~3.8g (1g = 9.81 m/s^2), and up to 15 g can be reached by the launch escape system in emergency scenarios <span style='color:gray'>[Allen 2018]</span>. Accelerations in the lunar landing profile can briefly reach up to 20g <span style='color:gray'>[Allen 2018]</span>. <br> Crewmembers onboard the International Space Station spend around 10 hours a week exercising, which was still insufficient to counteract physiological deconditioning <span style='color:gray'>[Scott 2023]</span>.        <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Scott, J. M., Feiveson, A. H., English, K. L., Spector, E. R., Sibonga, J. D., Dillon, E. L., Ploutz-Snyder, L., & Everett, M. E. (2023). Effects of exercise countermeasures on multisystem function in long duration spaceflight astronauts. Npj Microgravity, 9(1), 11. </span> ",
  },
  mission_demands_cognitive_workload: {
    title: "Mission Demands &#8594; Cognitive Workload",
    explanation:
      "In general, space missions are challenging and require crew (crewmembers and mission control) to maintain high cognitive function while operating complex and sensitive instruments <span style='color:gray'>[Barger 2014]</span>. The “cognitive-overload” hypothesis describes the disproportionate sensorimotor performance deficit that occurs when cognitively challenging tasks are performed, as compared to simple ones. Spaceflight-specific disturbances, including restructuring of the sensorimotor system and cognitive stressors (confinement, altered sleep architecture, high workload) reduce available cognitive resources <span style='color:gray'>[Bock 2010]</span>.       <br><br><br> <span style='color:gray'> Barger, L. K., Wright, K. P., Burke, T. M., Chinoy, E. D., Ronda, J. M., Lockley, S. W., & Czeisler, C. A. (2014). Sleep and cognitive function of crewmembers and mission controllers working 24-h shifts during a simulated 105-day spaceflight mission. Acta Astronautica, 93, 230–242. <br> Bock, O., Weigelt, C., & Bloomberg, J. J. (2010). Cognitive Demand of Human Sensorimotor Performance During an Extended Space Mission: A Dual-Task Study. Aviation, Space, and Environmental Medicine, 81(9), 819–824. </span>",
  },
  mission_demands_fatigue: {
    title: "Mission Demands &#8594; Fatigue",
    explanation:
      "Mission demands and how those demands are enacted (e.g., with adequate preparation, operational requirements, work hours, work-rest cycles) can mediate fatigue <span style='color:gray'>[Parasuraman and Hancock 2008]</span>. Within the aerospace industry, air traffic controllers are a typical analog for studying fatigue due the similarity between their high cognitive demands, working hours, and the need for accuracy and precision. Fatigue is a well-known issue for air traffic controllers, leading the Federal Aviation Administration to implement staffing measures to counteract ATC napping during midnight shifts <span style='color:gray'>[FAA 2011]</span>. In the largest spaceflight sleep study conducted to date, workload was found to be a strong contributor to hours slept, which was associated with physical and mental fatigue <span style='color:gray'>[Jones 2022]</span>.        <br><br><br> <span style='color:gray'> Parasuraman, R., & Hancock, P. A. (2008). Mitigating the adverse effects of workload, stress, and fatigue with adaptive automation. Performance under stress, 45-57.<br> Federal Aviation Administration Press Office. (2011, April 13). The FAA announces additional staffing at 27 control towers [Press release]. <br> Jones, C. W., Basner, M., Mollicone, D. J., Mott, C. M., & Dinges, D. F. (2022). Sleep deficiency in spaceflight is associated with degraded neurobehavioral functions and elevated stress in astronauts on six-month missions aboard the International Space Station. Sleep, 45(3). </span>",
  },
  life_mission_events_stress: {
    title: "Life/Mission Events &#8594; Stress",
    explanation:
      "One of more major life events within 6-12 months well-predict subsequent physical morbidity, mortality, psychological stress, and psychiatric disorder <span style='color:gray'>[Cohen and Williamson 1991][Coyne and Downey 1991][Creed 1985][Kessler, Price, and Wortman 1985][Tausig 1986][Thoits 1983][Thoits 1995] </span>.       <br><br><br> <span style='color:gray'> Cohen, Sheldon and Gail M. Williamson. (1991) 'Stress and Infectious Disease in Humansx' Psychological Bulletin 109(l):5-24. <br> Coyne, James C. and Geraldine Downey. (1991) 'Social Factors and Psychopathology: Stress, Social Support, and Coping Processes.' Annual Review of Psychology. <br> Creed, Francis. (1985) 'Life Events and Physical Illness.' Journal of Psychosomatic Research 29(2): 113-23. <br> Kessler, Ronald C., Richard H. Price, and Camille B. Wortman. (1985) 'Social Factors in Psychopathology: Stress, Social Support, and Coping Processes.' Annual Review of Psychology 36:531-72. <br> Tausig, Mark. 1986. 'Measuring Life Events.' in Social Support, Life Events, and Depression, edited by N. Lin, A. Dean, and W.M. Ensel. Orlando, FL: Academic. p 71-93. <br> Thoits, Peggy A. (1983) 'Dimensions of Life Events that Influence Psychological Distress: An Evaluation and Synthesis of the Literature.' Psychosocial Stress: Trends in Theory and Research, edited by H.B. Kaplan. New York: Academic. p 33-103. <br>  Thoits, P. A. (1995). Stress, Coping, and Social Support Processes: Where Are We? What Next? Journal of Health and Social Behavior, 35, 53. </span>        ",
  },
  life_mission_events_physical_workload: {
    title: "Life/Mission Events &#8594; Physical Workload",
    explanation:
      "Extravehicular activities are extremely demanding on the body. Spacesuits (in particular the Extravehicular Mobility Unit used by NASA) can cause injuries and discomfort, primarily due to the lack of mobility provided by the gas pressure layer <span style='color:gray'>[Diaz and Newman 2014]</span>. Additionally, the weight of the suit and the required walking past (e.g., during an emergency return scenario) increase metabolic workload, which in turn contributes to fatigue <span style='color:gray'>[Belobrajdic 2021]</span>.         <br><br><br> <span style='color:gray'> A. Diaz and D. Newman, (2014). 'Musculoskeletal human-spacesuit interaction model,'' 2014 IEEE Aerospace Conference, Big Sky, MT, USA, pp. 1-13. <br>  Belobrajdic, B., Melone, K., & Diaz-Artiles, A. (2021). Planetary extravehicular activity (EVA) risk mitigation strategies for long-duration space missions. Npj Microgravity, 7(1), 16. </span>        ",
  },
  crew_size_density: {
    title: "Crew Size &#8594; Density",
    explanation:
      "In a given volume, increasing crew size can contribute to higher density <span style='color:gray'> [Fleming 1987]</span>. Complex tasks may also require more space <span style='color:gray'> [Stokols 1973]</span>, and one may feel like the volume is inadequate or the density is too high if there are several people working on a complex task together.        <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906. <br> Stokols, D. (1973). Physical, Social, and Personal Determinants of thePerception of Crowding. Environment and Behavior, 5(1). </span>",
  },
  crew_size_habitable_volume: {
    title: "Crew Size &#8594; Habitable Volume",
    explanation:
      "Requirements for net habitable volume as a function of mission days was developed by Celentano et al., famously described by the Celentano curves of “tolerable”, “performance”, and “optimal” volume for space habitats <span style='color:gray'>[Cohen 2008]</span>. Since then, further work has been done to characterize volume requirements, for instance NASA’s Long Duration Habitable Volume Aggregate Function, which extends Celentano’s optimal curve in time <span style='color:gray'>[Simon 2011]</span>.        <br><br><br> Cohen, M. M. (2008). Testing the celentano curve: An empirical survey of predictions for human spacecraft pressurized volume. SAE International Journal of Aerospace, 1(2008-01-2027), 107-142. <br>  Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). </span>",
  },
  social_support_isolated: {
    title: "Isolated &#8594; Social Support",
    explanation:
      "In a study of 200+ winter-over personnel in Antarctica, advice seeking decreased in frequency through the mission; moreover, negative mood after advice seeking provided evidence to the frustrating experience of seeking advice from fellow crewmembers who were experiencing the same stressors. In certain scenarios, crewmembers experiencing the same isolation and confinement may be inadequate sources of support <span style='color:gray'>[Palinkas 2004]</span>.         <br><br><br> <span style='color:gray'> Palinkas, L. A., Johnson, J. C., & Boster, J. S. (2004). Social support and depressed mood in isolated and confined environments. Acta Astronautica, 54(9), 639–647.</span> ",
  },
  social_support_extraversion: {
    title: "Extraversion &#8594; Social Support",
    explanation:
      "In a study of 100+ dyad (two-people) friendships, it was found that an individual's extraversion scores predicted the extent to which they felt close to their friend <span style='color:gray'> [Berry 2000]</span>.        <br><br><br> <span style='color:gray'> Berry, D. S., Willingham, J. K., & Thayer, C. A. (2000). Affect and Personality as Predictors of Conflict and Closeness in Young Adults’ Friendships. Journal of Research in Personality, 34(1), 84–107.   </span>        ",
  },
  social_support_interpersonal_processes: {
    title: "Interpersonal Processes &#8594; Social Support",
    explanation:
      "Interpersonal processes are rooted in building relationships with one another. These processes help cope with life’s adversities (conflict and affect management) and promote growth and development (motivating processes), which are processes central to social support <span style='color:gray'>[Feeney and Collins 2015]</span>.   <br><br><br> <span style='color:gray'> Feeney, B. C., & Collins, N. L. (2015). A New Look at Social Support: A Theoretical Perspective on Thriving Through Relationships. Personality and Social Psychology Review, 19(2), 113–147.  </span>  ",
  },
  social_support_stress_regulation: {
    title: "Social Support &#8594; Stress Regulation",
    explanation:
      "The buffering model of social support hypothesizes that social support acts as a buffer to stress and allows an individual to more effectively manage and regulate stress  <span style='color:gray'> [Cohen and Willis 1985]</span>. Social support has been shown to reduce physiological distress, including anxiety and depression  <span style='color:gray'> [Fleming 1982][Lin 1999][Sarason 1997][Taylor 2011]</span>.        <br><br><br> <span style='color:gray'> Cohen, S., & Wills, T. A. (1985). Stress, Social Support, and the Buffering Hypothesis. Psychological Bulletin, 98(2), 310–357. <br> Fleming, R., Baum, A., Gisriel, M. M., & Gatchel, R. J. (1982). Mediating influences of social support on stress at Three Mile Island. Journal of human stress, 8(3), 14–22. <br> Lin, N., Ye, X., & Ensel, W. M. (1999). Social support and depressed mood: a structural analysis. Journal of health and social behavior, 40(4), 344–359. <br> Sarason, B. R., Sarason, I. G., & Gurung, R. A. R. (1997). Close personal relationships and health outcomes: A key to the role of social support. In S. Duck (Ed.), Handbook of personal relationships: Theory, research and interventions (2nd ed., pp. 547–573). John Wiley & Sons, Inc. <br> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. </span>        ",
  },
  social_support_physical_health: {
    title: "Social Support &#8594; Physical Health",
    explanation:
      "During a longitudinal study of nearly 7000 participants and a 9 year period, epidemiologists found that having social contacts predicts increased lifespan after controlling for socioeconomic status  <span style='color:gray'> [Berkman and Syme 1979]</span>.       <br><br><br> <span style='color:gray'> Berkman, L. F., & Syme, S. L. (1979). Social networks, host resistance, and mortality: a nine-year follow-up study of Alameda County residents. American journal of epidemiology, 109(2), 186–204.    </span>        ",
  },
  social_support_kinship: {
    title: "Social Support &#8594; Kinship",
    explanation:
      "Providing support to others cements personal relationships and signifies mutual importance in an interpersonal relationship <span style='color:gray'>[Taylor 2011]</span>.        <br><br><br> <span style='color:gray'> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. </span>        ",
  },
  social_monotony_confined: {
    title: "Confined  &#8594; Social Monotony",
    explanation:
      "Groups that undergo confinement lose immediate access to friends, family, and nominal networks of support <span style='color:gray'>[Palinkas 1992]</span>. Social isolation, monotony, and intensified social conflicts can also occur in confinement with the same group of people without a possibility of leaving <span style='color:gray'>[Palinkas 2004]</span>.         <br><br><br> <span style='color:gray'> Palinkas, L. A. (1992). Going to extremes: The cultural context of stress, illness and coping in Antarctica. Social Science & Medicine, 35(5), 651–664. <br> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. </span>        ",
  },
  social_monotony_boredom: {
    title: "Social Monotony &#8594; Boredom",
    explanation:
      "Those who experience social deprivation or isolation report boredom <span style='color:gray'>[Myers 1972][Thackray 1981]</span>.       <br><br><br> <span style='color:gray'> Myers T.I. (1972). Psychobiological factors associated with monotony tolerance. Report No AIR-26400-7/72-FR, Washington, DC, Am Inst for Research. <br> Thackray, Richard I. (1981). The Stress of Boredom and Monotony: A Consideration of the Evidence. Psychosomatic Medicine 43(2):p 165-176. </span> ",
  },
  density_crew_size: {
    title: "Crew Size &#8594; Density",
    explanation:
      "In a given volume, increasing crew size can contribute to higher density <span style='color:gray'> [Fleming 1987]</span>. Complex tasks may also require more space <span style='color:gray'> [Stokols 1973]</span>, and one may feel like the volume is inadequate or the density is too high if there are several people working on a complex task together.        <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906. <br> Stokols, D. (1973). Physical, Social, and Personal Determinants of thePerception of Crowding. Environment and Behavior, 5(1). </span>",
  },
  density_habitable_volume: {
    title: "Habitable Volume &#8594; Density",
    explanation:
      "Physical density can be increased by adding more people into a given space (increasing social density) or decreasing the size of the space (increasing spatial density) <span style='color:gray'>[Fleming 1987]</span>.         <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906.  </span>  ",
  },
  density_circulation_paths: {
    title: "Circulation Paths &#8594; Density",
    explanation:
      "Circulation path planning has an important role, alongside habitable volume, in reducing the number of ‘traffic interactions’, or where one has to step aside and deviate from their original path to let someone else through <span style='color:gray'>[Simon 2011]</span>. These interactions can contribute to the feeling of crowdedness, inadequate space, and heightened density within the habitat.            <br><br><br> <span style='color:gray'> Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). </span>        ",
  },
  density_privacy: {
    title: "Density &#8594; Privacy",
    explanation:
      "High density also leads to crowding, which has been conceptualized as excessive social contact or insufficient personal space <span style='color:gray'>[Altman 1975]</span>. Density in social settings limits the ability to be alone and decreases the ability to be visually and auditorily separate from others <span style='color:gray'>[Marshall 1972]</span>. Under circumstances of crowding, people seek methods to regulate excessive social contact, such as seeking private spaces or increasing physical separation from others <span style='color:gray'>[Baum 1977]</span>.           <br><br><br> <span style='color:gray'> Altman I. (1975). The environment and social behavior: privacy, personal space, territory, crowding. Brooks/Cole, Monterey. <br> Marshall, N. J. (1972). Privacy and environment. Human Ecology, 1(2), 93–110. <br> Baum A, Valins S (1977) Architecture and social behavior: psychological studies of social density. Erlbaum, Hillsdale/New York. </span> ",
  },
  density_stress_regulation: {
    title: "Density &#8594; Stress Regulation",
    explanation:
      "In one study of urban residents (n = 57), high social density was significantly correlated with high reports of stress [Fleming 1987]. One theory is that high density situations lead to perceived loss of control, and low levels of control are associated with stress [Cohen 1980][Fleming 1987].         <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906. <br> Cohen, Sheldon. (1980). Aftereffects of stress on human performance and social behavior: A review of research and theory. Psychological bulletin. 88. 82-108.  </span> ",
  },
  group_living_extraversion: {
    title: "Extraversion &#8594; Group Living",
    explanation:
      "Extraversion is a key factor in adjustment (inner, subjective well being <span style='color:gray'>[Costa and McCrae 1980][Costa 1981]</span> and outer, perceived well being) to group living situations <span style='color:gray'> [Carp 1985]</span>.        <br><br><br> <span style='color:gray'> Costa, P. T., & McCrae, R. R. (1980). The influence of extraversion and neuroticism on subjective well-being. Journal of Gerontology, 38, 668-678. <br> Costa, P. T., McCrae, R. R., & Norris, A. H. (1981). Personal adjustment to aging: Longitudinal prediction from neuroticism and extraversion. Journal of Gerontology, 36, 78-85. <br> Carp, F. M. (1985). Relevance of Personality Traits to Adjustment in Group Living Situations. Journal of Gerontology, 40(5), 544–551.    </span>        ",
  },
  group_living_agreeableness: {
    title: "Agreeableness &#8594; Group Living",
    explanation:
      "Agreeableness may allow individuals to overcome the frustrations involved with group living <span style='color:gray'>[Graziano 1996]</span>. Furthermore, Wiggins (1991) suggested that agreeable individuals also more likely strive for intimacy, union, and solidarity with others.        <br><br><br> <span style='color:gray'> Graziano, W. G., Jensen-Campbell, L. A., & Hair, E. C. (1996). Perceiving interpersonal conflict and reacting to it: The case for agreeableness. Journal of Personality and Social Psychology, 70(4), 820–835. <br> Wiggins, J. S. (1991). Agency and communion as conceptual coordi* nates for the understanding and measurement ofinterpersonal behavior. In W. Grove & D. Cicchetti (Eds.), Thinking clearly about psychology: Essays in honor of PaulE. Meehl(pp. 89-113). Minneapolis: University of Minnesota Press. </span>        ",
  },
  group_living_neuroticism: {
    title: "Neuroticism  &#8594; Group Living",
    explanation:
      "Neuroticism is a key factor in adjustment (inner, subjective well being <span style='color:gray'>[Costa and McCrae 1980][Costa 1981]</span> and outer, perceived well being) to group living situations, with higher neuroticism associated with lower levels of adjustment <span style='color:gray'>[Carp 1985]</span>.    <br><br><br> <span style='color:gray'> Costa, P. T., & McCrae, R. R. (1980). The influence of extraversion and neuroticism on subjective well-being. Journal of Gerontology, 38, 668-678. <br> Costa, P. T., McCrae, R. R., & Norris, A. H. (1981). Personal adjustment to aging: Longitudinal prediction from neuroticism and extraversion. Journal of Gerontology, 36, 78-85. <br> Carp, F. M. (1985). Relevance of Personality Traits to Adjustment in Group Living Situations. Journal of Gerontology, 40(5), 544–551.  </span>  ",
  },
  group_living_training_and_preparation: {
    title: "Training and Preparation &#8594; Group Living",
    explanation:
      "During astronaut training, teams will spend part of their two-year training period learning and practicing expeditionary skills during operational field events, unlike other military groups who do not specifically practice team skills in non-work environments <span style='color:gray'>[Landon and Paoletti 2020]</span>.      <br><br><br> <span style='color:gray'> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press. </span> ",
  },
  group_living_stress_regulation: {
    title: "Group Living &#8594; Stress Regulation",
    explanation:
      "A crew with good group living skills can act as a buffer to the negative effects of a stressful environment <span style='color:gray'> [Landon 2024]</span>.      <br><br><br> <span style='color:gray'> Landon, L. B., Miller, J. C., Bell, S. T., & Roma, P. G. (2024). When people start getting real: The Group Living Skills Survey for extreme work environments. Frontiers in Psychology, 15, 1348119. </span>  ",
  },
  group_living_stress: {
    title: "Group Living &#8594; Stress",
    explanation:
      "Group living can be a source of stress, for example during roommate conflicts [Dusselier 2005] and through increased conflicts over a mission <span style='color:gray'>[Stuster 2010]</span>.          <br><br><br> <span style='color:gray'> Stuster, J. W. (2010). Behavioral issues associated with long-duration space expeditions: Review and analysis of astronaut journals—Final report (No. NASA TM-2010-216130). </span>  ",
  },
  extraversion_genetics: {
    title: "Genetics &#8594; Extraversion",
    explanation:
      "While the conclusion remains tentative, genetic variance explains for 35 to 39% of the variance in extraversion based on 12 twin studies over different familial structures and environmental conditions <span style='color:gray'>[Matthews 2003]</span>.      <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span> ",
  },
  extraversion_interpersonal_processes: {
    title: "Extraversion &#8594; Interpersonal Processes",
    explanation:
      "Extraversion has high predictive validity on social behavior. In social situations with strangers, extroverts ask more questions, joke more, and initiate more conversations  <span style='color:gray'> [Matthews 2003]</span>. Based on a study of 50+ college students, distinctive patterns arose for matched dyads – introverts tend to focus on problem talk (expressing dissatisfaction with their own activities) and extroverts tend to cover a wider range of topics  <span style='color:gray'> [Thorne 1987]</span>. Based on a study of nearly 1700 individuals across 4 years, it was found that extraversion significantly predicts how people choose friends (with similar levels of extraversion) and the magnitude and likelihood of how individual levels of extraversion are influenced throughout the friendships (if A’s friend group is more extraverted that that of B’s, then A’s level of extraversion is more likely to increase than B’s)  <span style='color:gray'> [van Zalk 2020]</span>.         <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. <br> Thorne, A. (1987). The press of personality: A study of conversations between introverts and extraverts. Journal of Personality and Social Psychology, 53(4), 718–726. <br> van Zalk, M. H. W., Nestler, S., Geukes, K., Hutteman, R., & Back, M. D. (2020). The codevelopment of extraversion and friendships: Bonding and behavioral interaction mechanisms in friendship networks. Journal of Personality and Social Psychology, 118(6), 1269–1290. </span>        ",
  },
  extraversion_social_support: {
    title: "Extraversion &#8594; Social Support",
    explanation:
      "In a study of 100+ dyad (two-people) friendships, it was found that an individual's extraversion scores predicted the extent to which they felt close to their friend <span style='color:gray'> [Berry 2000]</span>.        <br><br><br> <span style='color:gray'> Berry, D. S., Willingham, J. K., & Thayer, C. A. (2000). Affect and Personality as Predictors of Conflict and Closeness in Young Adults’ Friendships. Journal of Research in Personality, 34(1), 84–107.   </span>        ",
  },
  extraversion_nostalgia_homesickness: {
    title: "Extraversion &#8594; Nostalgia/Homesickness",
    explanation:
      "From a study of 200+ post-graduate students, students high in neuroticism and low in extraversion were more likely to be homesick. While these personality traits together explain 20% of the variance in homesickness, it drops to 4% after controlling for coping strategies; high neuroticism and low extraversion may be associated with dysfunctional stress coping strategies <span style='color:gray'> [Mohamed 1996][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Mohamed, A. A. R. (1996) Stress processes in British and overseas students. Unpublished doctoral dissertation, University of Dundee. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.  </span>        ",
  },
  extraversion_group_living: {
    title: "Extraversion &#8594; Group Living",
    explanation:
      "Extraversion is a key factor in adjustment (inner, subjective well being <span style='color:gray'>[Costa and McCrae 1980][Costa 1981]</span> and outer, perceived well being) to group living situations <span style='color:gray'> [Carp 1985]</span>.        <br><br><br> <span style='color:gray'> Costa, P. T., & McCrae, R. R. (1980). The influence of extraversion and neuroticism on subjective well-being. Journal of Gerontology, 38, 668-678. <br> Costa, P. T., McCrae, R. R., & Norris, A. H. (1981). Personal adjustment to aging: Longitudinal prediction from neuroticism and extraversion. Journal of Gerontology, 36, 78-85. <br> Carp, F. M. (1985). Relevance of Personality Traits to Adjustment in Group Living Situations. Journal of Gerontology, 40(5), 544–551.    </span>        ",
  },
  openness_curiosity: {
    title: "Openness &#8594; Curiosity",
    explanation:
      "Openness is the trait that is most strongly associated with intelligence <span style='color:gray'>[Ackerman 1997]</span>, with a correlation of around 0.3 in studies with N=4-500 <span style='color:gray'>[Austin 2002][Ackerman and Heggestad 1997]</span>. Other studies around this size  Openness is associated with motivation to pursue ideas and intellectual activities, and mastery of intellectual skills may in turn prompt more openness <span style='color:gray'>[Rolfus 1996][Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Rolfhus, E. L. and Ackerman, P. L. (1996) Self-report knowledge: at the crossroads of ability, interest, and personality. Journal ofEducational Psychology, 88, 174–88. <br> Austin, E. J., Deary, I. J., Whiteman, M. C., Fowkes, F. G. R., Pedersen, N. L., Rabbitt, P., Bent, N. and McInnes, L. (2002) Relationships between ability and personality: does intelligence contribute positively to personal and social adjustment? Personality and Individual Differences, 32, 1391–411. <br> Ackerman, P. L. and Heggestad, E. D. (1997) Intelligence, personality and interests: evidence for overlapping traits. Psychological Bulletin, 121, 219–45. <br> Ackerman, P. L., & Heggestad, E. D. (1997). Intelligence, personality, and interests: Evidence for overlapping traits. Psychological Bulletin, 121(2), 219–245. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  agreeableness_genetics: {
    title: "Genetics &#8594; Agreeableness",
    explanation:
      "From the Minnesota Study of Twins, one of the most comprehensive studies of twins reared apart conducted in history, more than 100 sets of twins were studied. It was found that genetic variation accounted for about 30% of the variance in agreeability <span style='color:gray'>[Bouchard 1994][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Bouchard, T. J. (1994). Genes, Environment, and Personality. Science, 264(5166), 1700–1701. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span> ",
  },
  agreeableness_group_living: {
    title: "Agreeableness &#8594; Group living",
    explanation:
      "Agreeableness may allow individuals to overcome the frustrations involved with group living <span style='color:gray'>[Graziano 1996]</span>. Furthermore, Wiggins (1991) suggested that agreeable individuals also more likely strive for intimacy, union, and solidarity with others.        <br><br><br> <span style='color:gray'> Graziano, W. G., Jensen-Campbell, L. A., & Hair, E. C. (1996). Perceiving interpersonal conflict and reacting to it: The case for agreeableness. Journal of Personality and Social Psychology, 70(4), 820–835. <br> Wiggins, J. S. (1991). Agency and communion as conceptual coordi* nates for the understanding and measurement ofinterpersonal behavior. In W. Grove & D. Cicchetti (Eds.), Thinking clearly about psychology: Essays in honor of PaulE. Meehl(pp. 89-113). Minneapolis: University of Minnesota Press. </span>        ",
  },
  agreeableness_interpersonal_processes: {
    title: "Agreeableness &#8594; Interpersonal Processes",
    explanation:
      "Agreeableness is a key component in social interactions. Highly agreeable individuals have less conflict, respond to conflicts more positively, and generally like their social interactions more <span style='color:gray'>[Graziano 1996]</span>. However, it’s been shown that highly agreeable individuals experience more distress and greater decreases in self-esteem following conflict <span style='color:gray'>[Suls 1998][Barrett and Pietromonaco 1997]</span>.        <br><br><br> <span style='color:gray'> Graziano, W. G., Jensen-Campbell, L. A., & Hair, E. C. (1996). Perceiving interpersonal conflict and reacting to it: The case for agreeableness. Journal of Personality and Social Psychology, 70(4), 820–835. <br> Suls, J., Martin, R. and David, J. P. (1998) Person–environment fit and its limits: agreeableness, neuroticism, and emotional reactivity to interpersonal conflict. Personality and Social Psychology Bulletin, 24, 88–98. <br> Barrett, L. F. and Pietromonaco, P. R. (1997) Accuracy of the five-factor model in predicting perceptions of daily social interactions. Personality and Social Psychology Bulletin, 23, 1173–87.  </span>        ",
  },
  neuroticism_genetics: {
    title: "Genetics &#8594; Neuroticism",
    explanation:
      "From the Minnesota Study of Twins, one of the most comprehensive studies of twins reared apart conducted in history, more than 100 sets of twins were studied. It was found that genetic variation accounted for about 50% of the variance in agreeability <span style='color:gray'>[Bouchard 1994][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Bouchard, T. J. (1994). Genes, Environment, and Personality. Science, 264(5166), 1700–1701. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span> ",
  },
  neuroticism_anxiety: {
    title: "Neuroticism  &#8594; Anxiety",
    explanation:
      "Patients diagnosed with generalized anxiety disorder tend to have higher neuroticism scores, and often anxiety and depression are comorbid (co-occurring) <span style='color:gray'> [Eysenck 1985][Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Eysenck, H. J. and Eysenck, M. W. (1985) Personality and individual differences: a natural science approach. New York: Plenum. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>        ",
  },
  neuroticism_depression: {
    title: "Neuroticism  &#8594; Depression",
    explanation:
      "Numerous studies suggest depression risk is higher in individuals with higher neuroticism scores <span style='color:gray'>[Bagby 1995][Surtees and Wainwright 1996][Ormel 2001][Enns 2001][Tyssen and Vaglum 2002][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Bagby, R. M., Joffe, R. T., Parker, J. D. A., Kalemba, V. and Harkness, K. L. (1995) Major depression and the five factor model of personality. Journal ofPersonality Disorders, 9, 224–34. <br> Surtees, P. G. and Wainwright, N. W. J. (1996) Fragile states of mind: neuroticism, vulnerability and the long-term outcome of depression. British Journal ofPsychiatry, 169, 338–47. <br> Ormel, J., Oldehinkel, A. J. and Brilman, E. I. (2001) The interplay and etiological continuity of neuroticism, difficulties, and life events in the etiology of major and subsyndromal, first and recurrent depressive episodes in later life. American Journal ofPsychiatry, 158, 885–91. <br> Enns, M. W., Cox, B. J., Sareen, J. and Freeman, P. (2001) Adaptive and maladaptive perfectionism in medical students: a longitudinal investigation. Medical Education, 35, 1034–42. <br> Tyssen, R., & Vaglum, P. (2002). Mental health problems among young doctors: an updated review of prospective studies. Harvard review of psychiatry, 10(3), 154-165. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>  ",
  },
  neuroticism_interpersonal_processes: {
    title: "Neuroticism  &#8594; Interpersonal Processes",
    explanation:
      "In a study of 100+ dyad (two-people) friendships, it was found that an individual’s neuroticism scores predicted the number of conflicts they had with their friend <span style='color:gray'>[Berry 2000]</span>.      <br><br><br> <span style='color:gray'> Berry, D. S., Willingham, J. K., & Thayer, C. A. (2000). Affect and Personality as Predictors of Conflict and Closeness in Young Adults’ Friendships. Journal of Research in Personality, 34(1), 84–107. </span>  ",
  },
  neuroticism_nostalgia_homesickness: {
    title: "Neuroticism  &#8594; Nostalgia/Homesickness",
    explanation:
      "From a study of 200+ post-graduate students, students high in neuroticism and low in extraversion were more likely to be homesick. While these personality traits together explain 20% of the variance in homesickness, it drops to 4% after controlling for coping strategies; high neuroticism and low extraversion may be associated with dysfunctional stress coping strategies <span style='color:gray'>[Mohamed 1996][Matthews 2003]</span>.         <br><br><br> <span style='color:gray'> Berry, D. S., Willingham, J. K., & Thayer, C. A. (2000). Affect and Personality as Predictors of Conflict and Closeness in Young Adults’ Friendships. Journal of Research in Personality, 34(1), 84–107. </span>  ",
  },
  neuroticism_stress: {
    title: "Neuroticism  &#8594; Stress",
    explanation:
      "Neuroticism is the trait that has been found to be most salient for stress, lower life satisfaction, and lower subjective well-being <span style='color:gray'>[DeNeve and Cooper 1998][Matthews 2003]</span>.     <br><br><br> <span style='color:gray'> DeNeve, K. M. and Cooper, H. (1998) The happy personality: a meta-analysis of 137 personality traits and subjective well-being. Psychological Bulletin, 124, 197–229. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.    </span>  ",
  },
  neuroticism_group_living: {
    title: "Neuroticism  &#8594; Group Living",
    explanation:
      "Neuroticism is a key factor in adjustment (inner, subjective well being <span style='color:gray'>[Costa and McCrae 1980][Costa 1981]</span> and outer, perceived well being) to group living situations, with higher neuroticism associated with lower levels of adjustment <span style='color:gray'>[Carp 1985]</span>.    <br><br><br> <span style='color:gray'> Costa, P. T., & McCrae, R. R. (1980). The influence of extraversion and neuroticism on subjective well-being. Journal of Gerontology, 38, 668-678. <br> Costa, P. T., McCrae, R. R., & Norris, A. H. (1981). Personal adjustment to aging: Longitudinal prediction from neuroticism and extraversion. Journal of Gerontology, 36, 78-85. <br> Carp, F. M. (1985). Relevance of Personality Traits to Adjustment in Group Living Situations. Journal of Gerontology, 40(5), 544–551.  </span>  ",
  },
  conscientiousness_crew_performance: {
    title: "Conscientiousness &#8594; Crew Performance",
    explanation:
      "Meta-analyses reveal that conscientiousness is the most consistent factor predicting work performance and desirable work behaviors (e.g., integrity) <span style='color:gray'>[Matthews 2003]</span>.     <br><br><br> <span style='color:gray'>Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.    </span> ",
  },
  conscientiousness_physical_health: {
    title: "Conscientiousness &#8594; Physical Health",
    explanation:
      "Conscientiousness may be a predictor for following medical advice and regimens <span style='color:gray'>[Christensen and Smith 1995]</span>.     <br><br><br> <span style='color:gray'>Christensen, A. J. and Smith, T. W. (1995) Personality and patient adherence: Correlates of the five-factor model in renal analysis. Journal ofBehavioral Medicine, 18, 305–13.        </span> ",
  },
  conscientiousness_action_processes: {
    title: "Conscientiousness &#8594; Action Processes",
    explanation:
      "When faced with stress, highly conscientious people tend to use active, problem-focused strategies  <span style='color:gray'>[Watson and Hubbard 1996][Matthews 2003]</span>.         <br><br><br> <span style='color:gray'> Watson, D. and Hubbard, B. (1996) Adaptational style and dispositional structure: coping in the context of the five-factor model. Journal ofPersonality, 64, 737–74.<br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.  </span> ",
  },
  genetics_extreme: {
    title: "Extreme &#8594; Genetics",
    explanation:
      "During a spaceflight study of one year or shorter missions (N = 11), it was found that telomere lengths shortened significantly for all crewmembers upon return to Earth, regardless of in-space telomere dynamics. An increased frequency of chromosomal inversions were also observed in- and post-flight. One hypothesis is that this telomerase activity is a response to the extreme environment-induced chronic oxidative stress, which all crewmembers were found to experience during spaceflight <span style='color:gray'>[Luxton 2020]</span>.       <br><br><br> <span style='color:gray'> Luxton, J. J., McKenna, M. J., Lewis, A., Taylor, L. E., George, K. A., Dixit, S. M., Moniz, M., Benegas, W., Mackay, M. J., Mozsary, C., Butler, D., Bezdan, D., Meydan, C., Crucian, B. E., Zwart, S. R., Smith, S. M., Mason, C. E., & Bailey, S. M. (2020). Telomere Length Dynamics and DNA Damage Responses Associated with Long-Duration Spaceflight. Cell Reports, 33(10), 108457. </span>  ",
  },
  genetics_physical_health: {
    title: "Genetics &#8594; Physical Health",
    explanation:
      "Genes contribute to predisposition to chronic illnesses and diseases, physical activity, and aging <span style='color:gray'>[Kujala 2011]</span>. Telomere (DNA-protein complexes capping chromosome ends) shortening may be correlated to physical inactivity and chronic diseases <span style='color:gray'>[Puterman 2010]</span>.        <br><br><br> <span style='color:gray'> Kujala, U. M. (2011). Physical activity, genes, and lifetime predisposition to chronic disease. European Review of Aging and Physical Activity, 8(1), 31–36. <br> Puterman E, Lin J, Blackburn E, O'Donovan A, Adler N, Epel E (2010) The power of exercise: buffering the effect of chronic stress on telomere length. PLoS ONE 5:e10837. </span> ",
  },
  genetics_extraversion: {
    title: "Genetics &#8594; Extraversion",
    explanation:
      "While the conclusion remains tentative, genetic variance explains for 35 to 39% of the variance in extraversion based on 12 twin studies over different familial structures and environmental conditions <span style='color:gray'>[Matthews 2003]</span>.      <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span> ",
  },
  genetics_agreeableness: {
    title: "Genetics &#8594; Agreeableness",
    explanation:
      "From the Minnesota Study of Twins, one of the most comprehensive studies of twins reared apart conducted in history, more than 100 sets of twins were studied. It was found that genetic variation accounted for about 30% of the variance in agreeability <span style='color:gray'>[Bouchard 1994][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Bouchard, T. J. (1994). Genes, Environment, and Personality. Science, 264(5166), 1700–1701. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span> ",
  },
  genetics_neuroticism: {
    title: "Genetics &#8594; Neuroticism",
    explanation:
      "From the Minnesota Study of Twins, one of the most comprehensive studies of twins reared apart conducted in history, more than 100 sets of twins were studied. It was found that genetic variation accounted for about 50% of the variance in agreeability <span style='color:gray'>[Bouchard 1994][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Bouchard, T. J. (1994). Genes, Environment, and Personality. Science, 264(5166), 1700–1701. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span> ",
  },
  resilience_stress_regulation: {
    title: "Resilience &#8594; Stress Regulation",
    explanation:
      "From a survey of 2000+ individuals, it was found that higher resilience has a protective effect against stress, but the effect diminishes in high-strain, difficult work environments. The relationship between hardiness and stress are mixed. Hardiness has been found to regulate stress <span style='color:gray'> [Pengilly and Dowd 2000]</span>, but other investigators have not found that hardiness precludes negative reactions to adverse events <span style='color:gray'> [Cohen and Edwards 1989]</span> – which may be a similar phenomenon to the limited protective effect resilience has on challenging work environments.         <br><br><br> <span style='color:gray'> Pengilly, J. W. and Dowd, E. T. (2000) Hardiness and social support as moderators of stress. Journal ofClinical Psychology, 56, 813–20. <br> Cohen, S. and Edwards, J. (1989) Personality characteristics as moderators of the relationship between stress and health. In R. W. Neufeld (ed.), Advances in investigations of psychological stress. New York: Wiley. </span>",
  },
  psychological_resources_ground_support: {
    title: "Ground Support &#8594; Psychological Resources",
    explanation:
      "The current spaceflight (ISS) model of behavioral health care and intervention relies on private medical conferences. The reliance on access to ground support renders the current model of psychotherapy impossible with increased mission distance <span style='color:gray'>[Ad Hoc Committee 2008]</span>. Alternatives, including email and text communication, makes psychological assessment and potential treatment far more difficult <span style='color:gray'>[Ad Hoc Committee 2008]</span>.       <br><br><br> <span style='color:gray'> Ad Hoc Committee of Members of the Space Medicine Association and the Society of NASA Flight Surgeons. Human health and performance for long-duration spaceflight. Aviat Space Environ Med 2008; 79:629–35. </span>        ",
  },
  psychological_resources_stress_regulation: {
    title: "Psychological Resources &#8594; Stress Regulation",
    explanation:
      "Based on a comprehensive literature review conducted by Ong 2014 in the stress management field of over 150 papers describing over 1000 non-unique techniques employed, cognitive-behavioral techniques was the most commonly used for stress regulation, followed by imagery/meditation techniques <span style='color:gray'>[Ong 2004]</span>. In studies with psychological support provided, participants showed decreased vulnerability to stress and hardiness <span style='color:gray'>[Santos-Ruiz 2017][Sahranavard 2019]</span>.        <br><br><br> <span style='color:gray'> Ong, L., Linden, W., & Young, S. (2004). Stress management: what is it?. Journal of psychosomatic research, 56(1), 133-137. <br> Santos-Ruiz, A., Robles-Ortega, H., Pérez-García, M., & Peralta-Ramírez, M. I. (2017). Effects of the cognitive-behavioral therapy for stress management on executive function components. The Spanish journal of psychology, 20, E11. <br> Sahranavard, S., Esmaeili, A., Salehiniya, H., & Behdani, S. (2019). The effectiveness of group training of cognitive behavioral therapy-based stress management on anxiety, hardiness and self-efficacy in female medical students. Journal of education and health promotion, 8(1), 49. </span>   ",
  },
  psychological_resources_anxiety: {
    title: "Psychological Resources &#8594; Anxiety",
    explanation:
      "In studies with psychological support provided, participants showed decreased anxiety, even with long-term improvements  <span style='color:gray'>[Sahranavard 2019][Dimauro 2013]</span>.       <br><br><br> <span style='color:gray'> Sahranavard, S., Esmaeili, A., Salehiniya, H., & Behdani, S. (2019). The effectiveness of group training of cognitive behavioral therapy-based stress management on anxiety, hardiness and self-efficacy in female medical students. Journal of education and health promotion, 8(1), 49. <br> DiMauro, J., Domingues, J., Fernandez, G., & Tolin, D. F. (2013). Long-term effectiveness of CBT for anxiety disorders in an adult outpatient clinic sample: A follow-up study. Behaviour research and therapy, 51(2), 82-86. </span>   ",
  },
  team_processes_invisible_training_and_preparation: {
    title: "Training and Preparation &#8594; Team Processes",
    explanation:
      "Team-based training was not found to have an explicit effect on performance, but rather on transition (e.g., shared mental models), action (e.g., coordination), and interpersonal (e.g., trust) processes <span style='color:gray'>[Landon and Paoletti 2020]</span>.      <br><br><br> <span style='color:gray'> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press. </span>        ",
  },
  training_and_preparation_team_processes_invisible: {
    title: "Training and Preparation &#8594; Team Processes",
    explanation:
      "Team-based training was not found to have an explicit effect on performance, but rather on transition (e.g., shared mental models), action (e.g., coordination), and interpersonal (e.g., trust) processes <span style='color:gray'>[Landon and Paoletti 2020]</span>.      <br><br><br> <span style='color:gray'> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press. </span>        ",
  },
  training_and_preparation_physical_health: {
    title: "Training and Preparation &#8594; Physical Health",
    explanation:
      "Training comprise fitness regimes and preparation of skills to maintain physical and physiological health in space <span style='color:gray'>[Steimle and Norberg 2013]</span>.       <br><br><br> <span style='color:gray'> Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg.</span>",
  },
  training_and_preparation_group_living: {
    title: "Training and Preparation &#8594; Group Living",
    explanation:
      "During astronaut training, teams will spend part of their two-year training period learning and practicing expeditionary skills during operational field events, unlike other military groups who do not specifically practice team skills in non-work environments <span style='color:gray'>[Landon and Paoletti 2020]</span>.      <br><br><br> <span style='color:gray'> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press. </span> ",
  },
  ground_support_isolated: {
    title: "Isolated &#8594; Ground Support",
    explanation:
      "In one study of 200+ winter-over personnel in Antarctica, it was found that although the availability of support didn’t change during prolonged isolation, the perceived quality of support decreased <span style='color:gray'>[Palinkas 2004]</span>.  <br><br><br> <span style='color:gray'> Palinkas, L. A., Johnson, J. C., & Boster, J. S. (2004). Social support and depressed mood in isolated and confined environments. Acta Astronautica, 54(9), 639–647.</span> ",
  },
  ground_support_communication_delay: {
    title: "Communication Delay &#8594; Ground Support",
    explanation:
      "All human space exploration thus far has been within the Earth-Moon range, where minimal communication delay has allowed the majority of the operations to be ground-based <span style='color:gray'>[Frank 2013]</span>. In an analog habitat study of communication delay (N = 16), it was found that with the current ISS operational mode, a one-way communication delay of over 300 seconds (5 minutes) resulted in a level of workload requiring mitigation <span style='color:gray'>[Frank 2013]</span>. <br><br><br> <span style='color:gray'> Frank, J., Spirkovska, L., McCann, R., Lui Wang, Pohlkamp, K., & Morin, L. (2013). Autonomous mission operations. 2013 IEEE Aerospace Conference, 1–20.</span>",
  },
  ground_support_psychological_resources: {
    title: "Ground Support &#8594; Psychological Resources",
    explanation:
      "The current spaceflight (ISS) model of behavioral health care and intervention relies on private medical conferences. The reliance on access to ground support renders the current model of psychotherapy impossible with increased mission distance <span style='color:gray'>[Ad Hoc Committee 2008]</span>. Alternatives, including email and text communication, makes psychological assessment and potential treatment far more difficult <span style='color:gray'>[Ad Hoc Committee 2008]</span>.       <br><br><br> <span style='color:gray'> Ad Hoc Committee of Members of the Space Medicine Association and the Society of NASA Flight Surgeons. Human health and performance for long-duration spaceflight. Aviat Space Environ Med 2008; 79:629–35. </span>        ",
  },
  ground_support_medical_capability: {
    title: "Ground Support &#8594; Medical Capability",
    explanation:
      "Current medical operations in Low Earth Orbit rely on real-time communication from flight surgeons and medical experts to provide evaluations and recommendations <span style='color:gray'>[Antonsen 2022]</span>. The relatively short distance can also allow the ground team to resupply medical resources and offer evacuation as a possibility <span style='color:gray'>[Antonsen 2022]</span>.     <br><br><br> <span style='color:gray'> Antonsen, E. L., Myers, J. G., Boley, L., Arellano, J., Kerstman, E., Kadwa, B., Buckland, D. M., & Van Baalen, M. (2022). Estimating medical risk in human spaceflight. Npj Microgravity, 8(1), 8.  </span>        ",
  },
  ground_support_autonomy: {
    title: "Ground Support &#8594; Autonomy",
    explanation:
      "Scenarios in which crew will not be able to communicate with (due to communication delay, loss of communication, lack of bandwidth, or other emergency scenario) ground support, crew will be required to operate autonomously <span style='color:gray'>[Marquez 2017]</span>.        <br><br><br> <span style='color:gray'> Marquez, J. J., Hillenius, S., Kanefsky, B., Zheng, J., Deliz, I., & Reagan, M. (2017). Increasing crew autonomy for long duration exploration missions: Self-scheduling. 2017 IEEE Aerospace Conference, 1–10.        </span>        ",
  },
  ground_support_situation_awareness: {
    title: "Ground Support &#8594; Situation Awareness",
    explanation:
      "On the International Space Station, astronauts currently are supported by a large team of experts that provide them with task-specific and vehicle state information <span style='color:gray'> [Marquez 2017]</span>. Situation awareness is largely maintained by the integrated presence of mission control.        <br><br><br> <span style='color:gray'> Marquez, J. J., Hillenius, S., Kanefsky, B., Zheng, J., Deliz, I., & Reagan, M. (2017). Increasing crew autonomy for long duration exploration missions: Self-scheduling. 2017 IEEE Aerospace Conference, 1–10.        </span>        ",
  },
  medical_capability_distance_from_home_earth: {
    title: "Distance from Home/Earth &#8594; Medical Resources",
    explanation:
      "Distance from Home/Earth limits the availability of medical care, including unavailability of resources, limited alternatives for ineffectiveness/side effects of medicine, and degradation of medications <span style='color:gray'>[Wotring 2015]</span>. <br><br><br> <span style='color:gray'> Wotring, V. E. (2015). Medication use by U.S. crewmembers on the International Space Station. FASEB Journal: Offcial Publication of the Federation of American Societies for Experimental Biology, 29(11), 4417–4423. </span>",
  },
  medical_capability_ground_support: {
    title: "Ground Support &#8594; Medical Capability",
    explanation:
      "Current medical operations in Low Earth Orbit rely on real-time communication from flight surgeons and medical experts to provide evaluations and recommendations <span style='color:gray'>[Antonsen 2022]</span>. The relatively short distance can also allow the ground team to resupply medical resources and offer evacuation as a possibility <span style='color:gray'>[Antonsen 2022]</span>.     <br><br><br> <span style='color:gray'> Antonsen, E. L., Myers, J. G., Boley, L., Arellano, J., Kerstman, E., Kadwa, B., Buckland, D. M., & Van Baalen, M. (2022). Estimating medical risk in human spaceflight. Npj Microgravity, 8(1), 8.  </span>        ",
  },
  medical_capability_physical_health: {
    title: "Medical Capability &#8594; Physical Health",
    explanation:
      "Physical health is maintained when the capability matches or exceeds the medical needs. Medical needs may be dependent on initial conditions and remain high even with access to medical care. Based on a study of nearly 300 Iraqi refugees in southeastern Michigan, 100% and 99% of respondents indicated they needed medical and dental care, respectively, which remained consistent in the first two years of arrival even when provided consistent access to medical care <span style='color:gray'> [Wright 2016]</span>.          <br><br><br> <span style='color:gray'> Wright, A.M., Aldhalimi, A., Lumley, M.A. et al. (2016). Determinants of resource needs and utilization among refugees over time. Soc Psychiatry Psychiatr Epidemiol 51, 539–549.</span>",
  },
  family_and_friends_distance_from_home_earth: {
    title: "Distance from Home/Earth &#8594; Family and Friends",
    explanation:
      "As one moves away from home, one also often moves away from existing social ties <span style='color:gray'>[Scopelliti and Tiberio 2010]</span>. In the United States, ⅕ of the nation’s children are growing up in immigrant homes; in the process of immigration, families often undergo separation from extended relatives, immediate family, and their social networks <span style='color:gray'>[Suárez-Orozco 2012]</span>.        <br><br><br> <span style='color:gray'> Scopelliti, M., & Tiberio, L. (2010). Homesickness in University Students: The Role of Multiple Place Attachment. Environment and Behavior, 42(3), 335–350. <br>  Suárez-Orozco, C., Todorova, I. L., & Louie, J. (2012). Making up for lost time: The experience of separation and reunification among immigrant families. In The new immigration (pp. 179-196). Routledge. </span>",
  },
  family_and_friends_mission_duration: {
    title: "Mission Duration &#8594; Family and Friends",
    explanation:
      "Longer mission duration means that crewmembers will have to endure a longer period of separation from their family and friends <span style='color:gray'>[Palinkas 2001]</span>. There are likely to be adverse effects on the families as well. In a study of military families (n=180), it was found that length of time away on a mission was associated with adverse effects (e.g., loneliness, anxiety) to the family that remained at home <span style='color:gray'>[Wexler and McGrath 1991]</span>.        <br><br><br> <span style='color:gray'> Palinkas, L. A. (2001). Psychosocial issues in long-term space flight: overview. Gravitational and Space Biology Bulletin, 14(2), 25-33. <br> Wexler, H. K., & McGrath, E. (1991). Family member stress reactions to military involvement separation. Psychotherapy: Theory, Research, Practice, Training, 28(3), 515–519. </span>",
  },
  family_and_friends_communication_delay: {
    title: "Communication Delay &#8594; Family and Friends",
    explanation:
      "Prolonged autonomy and communication delays contribute to long term isolation, resulting in greater need for psychological support from family and friends <span style='color:gray'>[Ushakov 2014]</span>. During an isolation analog of 520 days (N = 6, Mars 500) and previous international isolation studies (HUBES 94; SFINCSS 99), the number and size of outgoing emails to family and friends increased with mission duration <span style='color:gray'>[Ushakov 2014]</span>. <br><br><br> <span style='color:gray'> Ushakov, I. B., Vladimirovich, M. B., Bubeev, Y. A., Gushin, V. I., Vasil’eva, G. Y., Vinokhodova, A. G., & Shved, D. M. (2014). Main findings of psychophysiological studies in the Mars 500 experiment. Herald of the Russian Academy of Sciences, 84(2), 106–114. </span>",
  },
  family_and_friends_stress_regulation: {
    title: "Family and Friends &#8594; Stress Regulation",
    explanation:
      "During spaceflight, conference calls with and care packages from friends and family are important to help crewmembers mitigate stress <span style='color:gray'>[Kanas and Manzey 2008][Sipes and Ark 2005][Deming and Vasterling 2017]</span>.        <br><br><br> <span style='color:gray'> Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). El Segundo, CA: Microcosm Press. <br> Sipes, W. E., & Ark, S. T. V. (2005). Operational Behavioral Health and Performance Resources for International Space Station Crews and Families. Aviation, Space, and Environmental Medicine, 76(6). <br> Deming, C. A., & Vasterling, J. J. (2017). Workplace social support and behavioral health prior to long-duration spaceflight. Aerospace medicine and human performance, 88(6), 565-573. </span> ",
  },
  supplies_resource_constrained: {
    title: "Resource Constrained &#8594; Supplies",
    explanation:
      "In resource constrained environments, supplies (e.g., fresh food, water, clothing) are limited <span style='color:gray'>[Taylor 1969][Natani and Shurley 1974]</span>. With limited or impossible resupply capabilities, regenerative or closed-loops systems are one solution to maximize the use of existing resources <span style='color:gray'>[Pickett 2020]</span>.         <br><br><br> <span style='color:gray'> Taylor, A. J. W. (1969). Ability, stability, and social adjustment among Scott base personnel, Antarctica, Occup. Psychol., 43, 81-93. <br> Natani, K., & Shurley, J. T. (1974). Sociopsychological aspects of a winter vigil at South Pole station. In E. K. E. Gunderson (Ed.), Antarctic Research Series (Vol. 22, pp. 89–114). American Geophysical Union. <br> Pickett, M. T., Roberson, L. B., Calabria, J. L., Bullard, T. J., Turner, G., & Yeh, D. H. (2020). Regenerative water purification for space applications: Needs, challenges, and technologies towards “closing the loop.” Life Sciences in Space Research, 24, 64–82. </span> ",
  },
  supplies_environmental_monotony: {
    title: "Supplies &#8594; Environmental Monotony",
    explanation:
      "The limitation of supplies due to mass, volume, or transportation distance may contribute to environmental or material monotony (e.g., the lack of fresh fruit or care packages) <span style='color:gray'>[Kanas and Manzey 2008]</span>.      <br><br><br> <span style='color:gray'> Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). El Segundo, CA: Microcosm Press. </span>        ",
  },
  supplies_place_attachment: {
    title: "Supplies &#8594; Place Attachment",
    explanation:
      "The distribution of personal items and decorating/furnishing rooms are an example of space appropriation, which can facilitate place attachment <span style='color:gray'>[Graumann 1976]</span>.         <br><br><br> <span style='color:gray'> Graumann, C. F. (1976). Concept of Appropriation.        </span>        ",
  },
  food_distance_from_home_earth: {
    title: "Distance from Home/Earth &#8594; Food",
    explanation:
      "Distance from Home/Earth highly constrains the food system to be shelf stable, nutritional, and palatable for long durations <span style='color:gray'>[Schorn and Roma 2020]</span>. <br><br><br> <span style='color:gray'> Schorn, J. M., & Roma, P. G. (2020). Physical hazards of space exploration and the biological bases of behavioral health and performance in extreme environments. In Psychology and human performance in space programs (pp. 1-22). CRC Press.</span>",
  },
  food_resource_constrained: {
    title: "Resource Constrained &#8594; Food",
    explanation:
      "Even in Low Earth Orbit, resupply logistics limit the influx of fresh food on the International Space Station. As mission distance increases, the difficulty of resupply will challenge how food and nutrition are provided <span style='color:gray'> [Douglas 2020]</span>.         <br><br><br> <span style='color:gray'> Taylor, A. J. W. (1969). Ability, stability, and social adjustment among Scott base personnel, Antarctica, Occup. Psychol., 43, 81-93. <br> Natani, K., & Shurley, J. T. (1974). Sociopsychological aspects of a winter vigil at South Pole station. In E. K. E. Gunderson (Ed.), Antarctic Research Series (Vol. 22, pp. 89–114). American Geophysical Union. <br> Pickett, M. T., Roberson, L. B., Calabria, J. L., Bullard, T. J., Turner, G., & Yeh, D. H. (2020). Regenerative water purification for space applications: Needs, challenges, and technologies towards “closing the loop.” Life Sciences in Space Research, 24, 64–82. </span> ",
  },
  food_nutrition: {
    title: "Food &#8594; Nutrition",
    explanation:
      "Food is the primary source of nutrition. Food choices may be due to personal preferences, availability, sensory influences (taste, texture, smell), and economics <span style='color:gray'>[Insel 2014]</span>. Food supplies essential nutrients, providing energy, hydration, vitamins, minerals, carbohydrates, and proteins <span style='color:gray'>[Insel 2014]</span>.          <br><br><br> <span style='color:gray'> Insel, P. M. (2014). Nutrition. Jones & Bartlett Publishers. </span>        ",
  },
  food_kinship: {
    title: "Food &#8594; Kinship",
    explanation:
      "Food can be a highly effective bonding tool, particularly in care packages sent from home or sharing a meal around the dinner table. Food variability, quality, and availability has been found to positively influence social cohesion and morale <span style='color:gray'>[Douglas 2016][Smith 2015][Stuster 2010]</span>.     <br><br><br> <span style='color:gray'> Douglas, G. L. C. (2016). Risk of performance decrement and crew illness due to an inadequate food system (NASA 20160011582). Houston, TX: NASA Johnson Space Center. <br>  Smith, S., Zwart, S., & Heer, M. (2015). Evidence report: Risk factor of inadequate nutrition. Retrieved from https://ntrs.nasa.gov/search.jsp?R=20150000512. <br>  Stuster, J. W. (2010). Behavioral issues associated with long-duration space expeditions: Review and analysis of astronaut journals—Final report (No. NASA TM-2010-216130).  </span>        ",
  },
  exercise_equipment_physical_health: {
    title: "Exercise Equipment &#8594; Physical Health",
    explanation:
      "Current exercise protocols are necessary to mitigate adverse effects of musculoskeletal deconditioning due to the microgravity environment, but decreases in muscle strength/mass and cardiorespiratory performance were found even in 6 month spaceflights (n=46) <span style='color:gray'>[Scott 2023]</span>.         <br><br><br> <span style='color:gray'> Scott, J. M., Feiveson, A. H., English, K. L., Spector, E. R., Sibonga, J. D., Dillon, E. L., Ploutz-Snyder, L., & Everett, M. E. (2023). Effects of exercise countermeasures on multisystem function in long duration spaceflight astronauts. Npj Microgravity, 9(1), 11. </span>     ",
  },
  exercise_equipment_physical_workload: {
    title: "Exercise Equipment &#8594; Physical Workload",
    explanation:
      "Current exercise protocol for International Space Station crewmembers averages around 10 hours per week, or 2 hours per day [Scott 2023]. The exercise protocol is the primary source of physical workload, beyond mission events such as extravehicular activity, due to the lack of loading and stress in the microgravity environment. Based on a study of over 45 astronauts on the ISS, the median aerobic exercise duration was 65 minutes per session for the cycle ergometer and 84 minutes per session for the treadmill. Resistance training varied roughly between 100-300 pounds of force, depending on the specific exercise (e.g., squats, bench press, deadlift) <span style='color:gray'>[Scott 2023]</span>.        <br><br><br> <span style='color:gray'> Scott, J. M., Feiveson, A. H., English, K. L., Spector, E. R., Sibonga, J. D., Dillon, E. L., Ploutz-Snyder, L., & Everett, M. E. (2023). Effects of exercise countermeasures on multisystem function in long duration spaceflight astronauts. Npj Microgravity, 9(1), 11. </span>     ",
  },
  light_dark_cycles_extreme: {
    title: "Extreme &#8594; Light/Dark Cycles",
    explanation:
      "Extreme environments, like polar regions, can experience perpetual night or day <span style='color:gray'>[Palinkas and Suedfeld 2008]</span>. In Low-Earth Orbit, the International Space Station experiences a sunrise every 45 minutes <span style='color:gray'>[Thirsk 2009]</span>. Altered (non-24 hour) light/dark cycles can cause disturbances in circadian rhythms due to regular, daily light cycles being the primary factor for entrainment <span style='color:gray'>[Broadway and Arendt 1988]</span>.        <br><br><br> <span style='color:gray'> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Thirsk, R., Kuipers, A., Mukai, C., & Williams, D. (2009). The space-flight environment: The International Space Station and beyond. Canadian Medical Association Journal, 180(12), 1216–1220. <br> Broadway JW and Arendt J. (1988). Seasonal and bright light changes of the phase position of the human melatonin rhythms in Antarctica. Arctic Med Res; 47 (suppl 1): 201–03. </span>     ",
  },
  light_dark_cycles_sleep: {
    title: "Light/Dark Cycles &#8594; Sleep",
    explanation:
      "Circadian rhythms are internal ‘biological clocks’ comprising multiple systems across the body <span style='color:gray'>[Turek 1994]</span>. While the circadian rhythm continues regardless of external inputs (i.e., “freerunning” circadian rhythm, which is a little less than 24 hours), they are influenced, or entrained, by external cues <span style='color:gray'>[Vitaterna 2001]</span>. The most powerful of these is the light/dark cycle <span style='color:gray'>[Vitaterna 2001]</span>. The circadian rhythm modulates the sleep-wake cycle and desynchronized circadian rhythms can alter sleep patterns <span style='color:gray'>[Turek 1994]</span>. <br> In a study of altered light/dark cycles and disturbed sleep on the Space Shuttle (n=5), participants reported ~6.5hr/night of sleep on average, lower sleep quality compared to preflight baselines, more wakefulness, less slow-wave sleep, and sleep was unimproved by melatonin administration <span style='color:gray'>[Dijk 2001]</span>.     <br><br><br> <span style='color:gray'> Turek, F. W. (1994, January). Circadian rhythms. In Proceedings of the 1992 Laurentian Hormone Conference (pp. 43-90). Academic Press. <br> Vitaterna, M. H., Takahashi, J. S., & Turek, F. W. (2001). Overview of circadian rhythms. Alcohol research & health, 25(2), 85. <br>  Dijk, D.-J., Neri, D. F., Wyatt, J. K., Ronda, J. M., Riel, E., Ritz-De Cecco, A., Hughes, R. J., Elliott, A. R., Prisk, G. K., West, J. B., & Czeisler, C. A. (2001). Sleep, performance, circadian rhythms, and light-dark cycles during two space shuttle flights. American Journal of Physiology-Regulatory, Integrative and Comparative Physiology, 281(5), R1647–R1664. </span> ",
  },
  altered_gravity_extreme: {
    title: "Extreme &#8594; Altered Gravity",
    explanation:
      "Reduced gravity has physiological and operational implications <span style='color:gray'>[Lackner 1992][Stirling 2009][Massion 1998][Tanaka 2017]</span>. Various analogs for altered gravity exist to replicate conditions for operational, technological, or physiological testing. These include head-down tilt [Watenpaugh 2016], water immersion <span style='color:gray'>[Watenpaugh 2016]</span>, neutral buoyancy <span style='color:gray'>[Bury 2023]</span>, and parabolic flights <span style='color:gray'>[Johnson 2018]</span>.        <br><br><br> <span style='color:gray'> Lackner, J. R. (1992). Spatial orientation in weightless environments. In Perception (Vol. 21, pp. 803–812). <br> Stirling, L., Willcox, K., Ferguson, P., & Newman, D. (2009). Kinetics and kinematics for translational motions in microgravity during parabolic flight. Aviation Space and Environmental Medicine, 80(6), 522–531. <br> Massion, J., Amblard, B., Assaiante, C., Mouchnino, L., & Vernazza, S. (1998). Body orientation and control of coordinated movements in microgravity. Brain Research Reviews, 28(1–2), 83–91. <br> Tanaka, K., Nishimura, N., & Kawai, Y. (2017). Adaptation to microgravity, deconditioning, and countermeasures. The Journal of Physiological Sciences, 67(2), 271–281. <br> Watenpaugh, D. E. (2016). Analogs of microgravity: Head-down tilt and water immersion. Journal of Applied Physiology, 120(8), 904–914. <br> Bury, N.-A., Jenkin, M., Allison, R. S., Herpers, R., & Harris, L. R. (2023). Vection underwater illustrates the limitations of neutral buoyancy as a microgravity analog. Npj Microgravity, 9(1), 42. <br> Johnson, K. T., Taylor, S., Fedor, S., Jaques, N., Chen, W., & Picard, R. W. (2018). Vomit Comet Physiology: Autonomic Changes in Novice Flyers. </span>     ",
  },
  altered_gravity_ergonomics: {
    title: "Altered Gravity &#8594; Ergonomics",
    explanation:
      " <span style='font-size:8pt'> The neutral body posture in space was first described by Tengwall in 1982 through Skylab photographs. Since then, more work has been done to fully characterize the body posture that naturally arises from the lack of gravity <span style='color:gray'>[Zimmerman and Akin 2001][Kim 2019]</span>. The posture is characterized by a semi-crouched torso, bent legs, raised arms, and a forward tilt in the neck/head. Consideration of the neutral body posture is critical for design, as deviations away from this posture equate to physical energy expenditure <span style='color:gray'>[Tengwall 1982]</span>. The neutral body posture can be observed in weightlessness (microgravity and neutral buoyancy) <span style='color:gray'>[Zimmerman and Akin 2001]</span> and when sleeping <span style='color:gray'>[Tengwall 1982]</span>. <br> For altered gravity in between 0g and 1g, or beyond 1g, considerations for gait become more critical. Gravity level is a significant factor in changing gait patterns, including altered run-walk transition speeds <span style='color:gray'>[De Witt 2014]</span> and narrowed visual fields <span style='color:gray'>[Schlacht 2016]</span>. Ergonomics and the design of peripheral systems, spacesuits, information displays, and equipment must then change to support altered biomechanics.       <br><br> <span style='color:gray'> Zimmerman, J., & Akin, D. L. (2001). Effect of Orientation on Human Posture in Neutral Buoyancy and Parabolic Flight (No. 2001-01-2149). SAE Technical Paper. <br> Kim, H. K., Young, K. S., & Rajulu, S. L. (2019, November). Neutral body posture in spaceflight. In Proceedings of the Human Factors and Ergonomics Society Annual Meeting (Vol. 63, No. 1, pp. 992-996). Sage CA: Los Angeles, CA: SAGE Publications. <br> Tengwall, R. et al. (1982). Human Posture in Zero Gravity [and Comments and Reply]. Current Anthropology, 23(6), 657–666. <br> De Witt, J. K. et al.(2014). The preferred walk to run transition speed in actual lunar gravity. Journal of Experimental Biology, 217(18), 3200-3203. <br> Schlacht, I.L. et al. (2016). From Virtual Reality to Neutral Buoyancy—Methodologies for Analyzing Walking Pattern on Moon and Mars. In: Arezes, P. (eds) Advances in Safety Management and Human Factors. Advances in Intelligent Systems and Computing, vol 491. Springer, Cham. </span> </span>",
  },
  altered_gravity_physical_health: {
    title: "Altered Gravity &#8594; Physical Health",
    explanation:
      "Physical adaptation to the microgravity environment causes a myriad of physiological changes, including cardiovascular deconditioning, bone & muscle atrophy, and neurological changes <span style='color:gray'>[Norsk 2021]</span>. Fluid shifts due to the removal of the hydrostatic gradient provided by 1g causes cardiovascular changes, phenomena known as ‘puffy face’ and ‘bird legs’, congestion, and is thought to play a role in inducing SANS (Spaceflight Associated Neuro-ocular Syndrome - a series of intracranial and ocular changes) <span style='color:gray'>[Stenger 2017][Norsk 2021]</span>. Between 40-50% of crewmembers experience Space Adaptation Sickness during their first few days in space, including symptoms of nausea, disorientation, and headache <span style='color:gray'>[West 1985]</span>.        <br><br><br> <span style='color:gray'> Norsk, P. (2021). Physiological effects of spaceflight–Weightlessness: An overview. Handbook of Bioastronautics, 93-105. <br> Stenger MB, Tarver WJ, Brunstetter T, Gibson CR, Laurie SS, Lee SMC, Macias BR, Mader TH, Otto C, Smith SM, Zwart SR (2017) Risk of spaceflight associated neuro-ocular syndrome (SANS). Evidence report (Nov 30), NASA, Lyndon B. Johnson Space Center, Houston.   </span> ",
  },
  radiation_extreme: {
    title: "Extreme &#8594; Radiation",
    explanation:
      "In extreme environments (such as deep space), radiation levels are elevated due to a combination of background Galactic Cosmic Radiation, Solar Particle Events, and localized trapped particle belts <span style='color:gray'>[Allen 2018]</span>. <br> Extreme events on Earth, such a nuclear facility accidents (e.g., Fukushiima Dachii, 2011) can have impacts on the safety of nearby water and food, and increased mortalities and morbidities <span style='color:gray'>[Jones 2013]</span>. On a much larger scale, the use of atomic bombs (only time in history – Hiroshima and Nagasaki, 1945) resulted in over 200,000 deaths before year’s end <span style='color:gray'>[Ten Hoeve and Jacobson 2012]</span>.        <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Jones, C. F., Loh, S. L., & Satō, K. (2013). Narrating Fukushima: Scales of a nuclear meltdown. East Asian Science, Technology and Society: An International Journal, 7(4), 601-623. <br> Ten Hoeve, J. E., & Jacobson, M. Z. (2012). Worldwide health effects of the Fukushima Daiichi nuclear accident. Energy & Environmental Science, 5(9), 8743-8757. </span>     ",
  },
  radiation_physical_health: {
    title: "Radiation &#8594; Physical Health",
    explanation:
      "High-dose radiation exposure has disastrous impacts on mortality and morbidity, as established through longitudinal studies of atomic bombing victims from Hiroshima and Nagasaki <span style='color:gray'>[Kamiya 2015][Ten Hoeve and Jacobson 2012]</span>. A very-worst case Solar Particle Event would cause significant injury even with thick radiation shielding. Extreme radiative events during extravehicular activities in high-altitude regions of Mars could cause potential death. Currently, lifelong radiation exposure limits for astronauts only exist for Low-Earth Orbit mission profiles  <span style='color:gray'>[Allen 2018]</span>.        <br><br><br> <span style='color:gray'> Kamiya, K., Ozasa, K., Akiba, S., Niwa, O., Kodama, K., Takamura, N., Zaharieva, E. K., Kimura, Y., & Wakeford, R. (2015). Long-term effects of radiation exposure on health. The Lancet, 386(9992), 469–478. <br>  Jones, C. F., Loh, S. L., & Satō, K. (2013). Narrating Fukushima: Scales of a nuclear meltdown. East Asian Science, Technology and Society: An International Journal, 7(4), 601-623. <br> Ten Hoeve, J. E., & Jacobson, M. Z. (2012). Worldwide health effects of the Fukushima Daiichi nuclear accident. Energy & Environmental Science, 5(9), 8743-8757. <br> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier.</span> ",
  },
  atmosphere_environmental_control: {
    title: "Environmental Control &#8594; Atmosphere",
    explanation:
      "Environmental control manages the atmosphere pressure and compositions of various gases and particulate matter within the environment <span style='color:gray'>[Broyan 2021]</span>. A particularly important design parameter for orbital habitations is the lack of air movement in microgravity. Environmental systems considerations will therefore include considerations for hot spots of CO2 collection and “CO2 washout” (i.e., sufficient flow rate to “wash” CO2 away from the face) <span style='color:gray'>[Watts and Vogel 2016]</span>.         <br><br><br> <span style='color:gray'>  Broyan, J. L., Shaw, L., McKinley, M., Meyer, C., Ewert, M. K., Schneider, W. F., Meyer, M., Ruff, G. A., Owens, A. C., & Gatens, R. L. (2021). NASA Environmental Control and Life Support Technology Development for Exploration: 2020 to 2021 Overview. 50th International Conference on Environmental Systems. <br> Watts, C., & Vogel, M. (2016). Space Suit Portable Life Support System 2.0 Human-in-the-Loop Testing. ICES-2016-87, presented at the 46th International Conference on Environmental Systems 10-14 July 2016, Vienna, Austria. </span>  ",
  },
  atmosphere_sleep: {
    title: "Atmosphere &#8594; Sleep",
    explanation:
      "Based on a review of 200 literature sources by Caddick 2018 on sleep for the normal healthy population, it was found that sleep is dependent on ambient temperature (which can be regulated with the aid of clothing and bedding) between 17 (with external insulation) and 28C and 40-60% relative humidity <span style='color:gray'>[Caddick 2018]</span>. The “thermoneutral zone” that allows for optimal maintenance of core and skin temperature is quite narrow, from 27.9 to 28.5 °C – within the zone, lower temperatures can enhance slow wave sleep and higher temperatures can facilitate sleep onset <span style='color:gray'>[Caddick 2018]</span>. Temperatures outside of this thermoneutral range may result in lowered sleep quality <span style='color:gray'>[Caddick 2018]</span>.         <br><br><br> <span style='color:gray'> Caddick, Z. A., Gregory, K., Arsintescu, L., & Flynn-Evans, E. E. (2018). A review of the environmental parameters necessary for an optimal sleep environment. Building and Environment, 132, 11–20. </span>  ",
  },
  atmosphere_crew_performance: {
    title: "Atmosphere &#8594; Crew Performance",
    explanation:
      "Standards for the built environment suggest that a CO2 concentration of 400-800 ppm (parts per million) is suitable for habitation <span style='color:gray'>[European Committee for Standardization 2007]</span>. On the International Space Station, minimum concentrations of CO2 are approximately 3000 ppm, and can reach greater than 6500 ppm <span style='color:gray'>[Georgescu 2007]</span>. High concentrations of CO2 affects cognition negatively and can result in physiological symptoms, including headaches and congestion <span style='color:gray'>[Law 2014]</span>. As an example, keep the risk of headaches below 1% (the general “rule of thumb” level of risk for spaceflight for NASA), CO2 concentrations would need to be below 3300 ppm across a 7-day average <span style='color:gray'>[Law 2014]</span>. However, a head-down bed rest study (n=19) did not find significant differences in cognition speed with vs. without elevated CO2 concentrations <span style='color:gray'>[Basner 2021]</span>.         <br><br><br> <span style='color:gray'> EUROPEAN COMMITTEE FOR STANDARDIZATION, En 13779, Management, 2007, p. 72. <br> Georgescu, M. R., Meslem, A., & Nastase, I. (2020). Accumulation and spatial distribution of CO2 in the astronaut's crew quarters on the International Space Station. Building and Environment, 185, 107278. <br>  Law, J., Van Baalen, M., Foy, M., Mason, S. S., Mendez, C., Wear, M. L., ... & Alexander, D. (2014). Relationship between carbon dioxide levels and reported headaches on the international space station. Journal of occupational and environmental medicine, 56(5), 477-483. <br> Basner, M., Stahn, A. C., Nasrini, J., Dinges, D. F., Moore, T. M., Gur, R. C., ... & Laurie, S. S. (2021). Effects of head-down tilt bed rest plus elevated CO2 on cognitive performance. Journal of Applied Physiology, 130(4), 1235-1246.  </span>  ",
  },
  acoustics_sleep: {
    title: "Acoustics &#8594; Sleep",
    explanation:
      "Based on a review of 200 literature sources on sleep for the normal healthy population, it was found that the sleep environment should be below 35dB, otherwise intermittent noises above this threshold have the potential to cause sleep disruption <span style='color:gray'>[Caddick 2018]</span>.        <br><br><br> <span style='color:gray'> Caddick, Z. A., Gregory, K., Arsintescu, L., & Flynn-Evans, E. E. (2018). A review of the environmental parameters necessary for an optimal sleep environment. Building and Environment, 132, 11–20. </span>        ",
  },
  acoustics_crew_performance: {
    title: "Acoustics &#8594; Crew Performance",
    explanation:
      "Excessive noise can lead to physiological and psychological symptoms, including temporary/permanent hearing loss, headaches, discomfort, fatigue, irritability, distraction, decreased productivity, and inability to concentrate <span style='color:gray'> [Allen 2018]</span>.    <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier.   </span>        ",
  },
  nutrition_food: {
    title: "Food &#8594; Nutrition",
    explanation:
      "Food is the primary source of nutrition. Food choices may be due to personal preferences, availability, sensory influences (taste, texture, smell), and economics <span style='color:gray'>[Insel 2014]</span>. Food supplies essential nutrients, providing energy, hydration, vitamins, minerals, carbohydrates, and proteins <span style='color:gray'>[Insel 2014]</span>.          <br><br><br> <span style='color:gray'> Insel, P. M. (2014). Nutrition. Jones & Bartlett Publishers. </span>        ",
  },
  nutrition_physical_health: {
    title: "Nutrition &#8594; Physical Health",
    explanation:
      "The key nutrients for maintaining physical health are lipids, vitamins, water, carbohydrates, protein, and minerals  <span style='color:gray'>[Insel 2014]</span>. Lipids provide energy sources for the body and provide building blocks for hormones; vitamins are essential for efficient energy extraction from other nutrients; water makes up 60% of the body, providing lubrication and transportation through the body; carbohydrates provide glucose, the source of energy for cells and tissues; protein provides energy, body structure, and regulate processes; and minerals provide regulatory (e.g., fluid balance) and structural support (e.g., calcium for bones) <span style='color:gray'>[Insel 2014]</span>. Deficiencies in these areas, or malnutrition, can cause health problems, diseases, and increased morbidity and mortality risks [Zavitsanou and Drigas 2021]. Similarly, an excessive intake of these (e.g., lipids or sugars) can likewise cause morbidities (e.g., type II diabetes) <span style='color:gray'>[Johnson 2017]</span>.     <br><br><br> <span style='color:gray'> Insel, P. M. (2014). Nutrition. Jones & Bartlett Publishers. <br> Zavitsanou, A., & Drigas, A. (2021). Nutrition in mental and physical health. Technium Soc. Sci. J., 23, 67. <br> Johnson, R. J., Sánchez-Lozada, L. G., Andrews, P., & Lanaspa, M. A. (2017). Perspective: a historical and scientific perspective of sugar and its relation with obesity and diabetes. Advances in Nutrition, 8(3), 412-422. </span>    ",
  },
  nutrition_depression: {
    title: "Nutrition &#8594; Depression",
    explanation:
      "Deficiencies in zinc, vitamin D, and omega-3 are associated with depression, anxiety, and other mood disorders <span style='color:gray'>[Mitsuya 2015][Patrick and Ames 2015]</span>.     <br><br><br> <span style='color:gray'> Mitsuya, H., Omata, N., Kiyono, Y., Mizuno, T., Murata, T., Mita, K., … Wada, Y. (2015). The co-occurrence of zinc deficiency and social isolation has the opposite effects on mood compared with either condition alone due to changes in the central norepinephrine system. Behavioural Brain Research, 284, 125–130. <br> Patrick, R. P., & Ames, B. N. (2015). Vitamin D and the omega-3 fatty acids control serotonin synthesis and action, part 2: Relevance for ADHD, bipolar disorder, schizophrenia, and impulsive behavior. FASEB Journal: Official Publication of the Federation of American Societies for Experimental Biology, 29(6), 2207–2222.         </span>        ",
  },
  nutrition_anxiety: {
    title: "Nutrition &#8594; Anxiety",
    explanation:
      "Deficiencies in zinc, vitamin D, and omega-3 are associated with depression, anxiety, and other mood disorders <span style='color:gray'>[Mitsuya 2015][Patrick and Ames 2015]</span>.     <br><br><br> <span style='color:gray'> Mitsuya, H., Omata, N., Kiyono, Y., Mizuno, T., Murata, T., Mita, K., … Wada, Y. (2015). The co-occurrence of zinc deficiency and social isolation has the opposite effects on mood compared with either condition alone due to changes in the central norepinephrine system. Behavioural Brain Research, 284, 125–130. <br> Patrick, R. P., & Ames, B. N. (2015). Vitamin D and the omega-3 fatty acids control serotonin synthesis and action, part 2: Relevance for ADHD, bipolar disorder, schizophrenia, and impulsive behavior. FASEB Journal: Official Publication of the Federation of American Societies for Experimental Biology, 29(6), 2207–2222.         </span>        ",
  },
  habitable_volume_crew_size: {
    title: "Crew Size &#8594; Habitable Volume",
    explanation:
      "Requirements for net habitable volume as a function of mission days was developed by Celentano et al., famously described by the Celentano curves of “tolerable”, “performance”, and “optimal” volume for space habitats <span style='color:gray'>[Cohen 2008]</span>. Since then, further work has been done to characterize volume requirements, for instance NASA’s Long Duration Habitable Volume Aggregate Function, which extends Celentano’s optimal curve in time <span style='color:gray'>[Simon 2011]</span>.        <br><br><br> Cohen, M. M. (2008). Testing the celentano curve: An empirical survey of predictions for human spacecraft pressurized volume. SAE International Journal of Aerospace, 1(2008-01-2027), 107-142. <br>  Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). </span>",
  },
  habitable_volume_privacy: {
    title: "Habitable Volume &#8594; Privacy",
    explanation:
      "Habitable volume considerations should ensure adequate allocation of private and personal spaces, such as a ‘crew quarters’ in spaceflight or in polar exploration missions <span style='color:gray'>[Stuster 1996][Simon 2011]</span>.        <br><br><br> <span style='color:gray'> Stuster, J. (1996). Bold endeavors: Lessons from polar and space exploration. Naval Institute Press. <br> Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). </span>  ",
  },
  habitable_volume_density: {
    title: "Habitable Volume &#8594; Density",
    explanation:
      "Physical density can be increased by adding more people into a given space (increasing social density) or decreasing the size of the space (increasing spatial density) <span style='color:gray'>[Fleming 1987]</span>.         <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906.  </span>  ",
  },
  environmental_control_atmosphere: {
    title: "Environmental Control &#8594; Atmosphere",
    explanation:
      "Environmental control manages the atmosphere pressure and compositions of various gases and particulate matter within the environment <span style='color:gray'>[Broyan 2021]</span>. A particularly important design parameter for orbital habitations is the lack of air movement in microgravity. Environmental systems considerations will therefore include considerations for hot spots of CO2 collection and “CO2 washout” (i.e., sufficient flow rate to “wash” CO2 away from the face) <span style='color:gray'>[Watts and Vogel 2016]</span>.         <br><br><br> <span style='color:gray'>  Broyan, J. L., Shaw, L., McKinley, M., Meyer, C., Ewert, M. K., Schneider, W. F., Meyer, M., Ruff, G. A., Owens, A. C., & Gatens, R. L. (2021). NASA Environmental Control and Life Support Technology Development for Exploration: 2020 to 2021 Overview. 50th International Conference on Environmental Systems. <br> Watts, C., & Vogel, M. (2016). Space Suit Portable Life Support System 2.0 Human-in-the-Loop Testing. ICES-2016-87, presented at the 46th International Conference on Environmental Systems 10-14 July 2016, Vienna, Austria. </span>  ",
  },
  circulation_paths_layout: {
    title: "Layout &#8594; Circulation Paths",
    explanation:
      "Part of circulation is the interaction between movement paths and spaces <span style='color:gray'> [Ching 2023]</span>. For instance, spaces can be adjacent to the paths, such as classrooms off of a hallway. Paths can cross through spaces, for instance in an art gallery. Paths can also end in a space, for instance at a church altar.        <br><br><br> <span style='color:gray'> Ching, F. D. (2023). Architecture: Form, space, and order. John Wiley & Sons. </span>        ",
  },
  circulation_paths_density: {
    title: "Circulation Paths &#8594; Density",
    explanation:
      "Circulation path planning has an important role, alongside habitable volume, in reducing the number of ‘traffic interactions’, or where one has to step aside and deviate from their original path to let someone else through <span style='color:gray'>[Simon 2011]</span>. These interactions can contribute to the feeling of crowdedness, inadequate space, and heightened density within the habitat.            <br><br><br> <span style='color:gray'> Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). </span>        ",
  },
  circulation_paths_reconfigurability: {
    title: "Circulation Paths &#8594; Reconfigurability",
    explanation:
      "The setup of circulation paths may influence how reprogrammable a space is. For instance, a grid pattern circulation path allows most spaces to have equal priority and therefore a high degree of reconfiguration; whereas a linear circulation path may place more emphasis on the endpoints of the path, where spaces become less reconfigurable. ",
  },
  circulation_paths_interpersonal_processes: {
    title: "Circulation Paths &#8594; Interpersonal Processes",
    explanation:
      "Design and placement of circulation spaces, including hallways, access paths, stairs, entrances, contribute to the formation of friendships and social cohesion <span style='color:gray'>[Festinger 1950][Skjaeveland and Garling 1997]</span>. Promotion of interpersonal processes can be designed into circulation spaces, much like common spaces <span style='color:gray'>[Adianto 2021]</span>. Importantly, circulation spaces may be neither private or public, and can be flexible to provide the level of privacy needed (as described in Altman’s theory of privacy <span style='color:gray'>[Alman 1975]</span>).        <br><br><br> <span style='color:gray'> Festinger, L., Schachter, S., & Back, K. (1950). Social pressures in informal groups; a study of human factors in housing. Harper. <br> Skjaeveland, O., & Garling, T. (1997). EFFECTS OF INTERACTIONAL SPACE ON NEIGHBOURING. Journal of Environmental Psychology, 17(3), 181–198. <br> Adianto, J., Gabe, R. T., Ristanto, D. F., & Sihombing, A. (2021). Circulation Space as “The Fourth Place” in a Private Student Housing Complex in Depok, Indonesia. The International Journal of Design in Society, 15(1), 59–72. <br>  Altman, I. (1975). The environment and social behavior: Privacy, personal space, territory, crowding. Monterey, CA: Brooks/Cole.   </span>        ",
  },
  circulation_paths_ergonomics: {
    title: "Circulation Paths &#8594; Ergonomics",
    explanation:
      "Circulation paths provide physical paths to translate and move through a larger space. Hazards along the circulation path may pose risks and restrictions for individuals using the path. For instance, translation paths that are physically inaccessible to limited-mobility users disadvantage their access to public services <span style='color:gray'>[Banda-Chalwe 2014]</span>. The design of circulation paths also promotes wayfinding, which is a combination of physical and cognitive processes <span style='color:gray'>[Golledge 1999]</span>. The selected circulation design(s) may impact the interpreted complexity and wayfinding difficulty for the occupants <span style='color:gray'>[Natapov 2020]</span>.      <br><br><br> <span style='color:gray'> Banda-Chalwe, M., Nitz, J. C., & De Jonge, D. (2014). Impact of inaccessible spaces on community participation of people with mobility limitations in Zambia. African journal of disability, 3(1), 1-17. <br> Golledge, R. G. 1999. “Human Wayfinding and Cognitive Maps.” In Wayfinding Behavior: Cognitive Mapping and Other Spatial Processes, edited by R. G. Golledge, 5–45. Baltimore: JHU press. <br> Natapov, A., Kuliga, S., Dalton, R. C., & Hölscher, C. (2020). Linking building-circulation typology and wayfinding: Design, spatial analysis, and anticipated wayfinding difficulty of circulation types. Architectural Science Review, 63(1), 34–46. </span>        ",
  },
  layout_reconfigurability: {
    title: "Layout &#8594; Reconfigurability",
    explanation:
      "Layouts endowed with spatial flexibility (variation in size and locations) can contribute to greater reconfigurability <span style='color:gray'>[Häuplik-Meusburger 2011]</span>. For instance, reconfigurable layouts could provide multiple activities to be held in the same space, or for multiple configurations of adjacent spaces.       <br><br><br> <span style='color:gray'> Häuplik-Meusburger, S. (2011). Architecture for astronauts: an activity-based approach. Springer Science & Business Media.        </span>        ",
  },
  layout_circulation_paths: {
    title: "Layout &#8594; Circulation Paths",
    explanation:
      "Part of circulation is the interaction between movement paths and spaces <span style='color:gray'> [Ching 2023]</span>. For instance, spaces can be adjacent to the paths, such as classrooms off of a hallway. Paths can cross through spaces, for instance in an art gallery. Paths can also end in a space, for instance at a church altar.        <br><br><br> <span style='color:gray'> Ching, F. D. (2023). Architecture: Form, space, and order. John Wiley & Sons. </span>        ",
  },
  layout_privacy: {
    title: "Layout &#8594; Privacy",
    explanation:
      "Private spaces and private-public relationships of spaces are crucial for layout planning. Private, personal, personalizable spaces are psychologically important <span style='color:gray'>[Altman and Haythorn 1967][Kanas and Manzey 2008][Stuster 1996]</span>. Layout design and ensuring the availability of private spaces directly contributes to the ability to regulate one’s privacy.        <br><br><br> <span style='color:gray'> Altman I, Haythorn WW. 1967. The ecology of isolated groups. Behav. Sci. 32:169–82. <br>  Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). Springer Science + Business Media; Microcosm Press. <br> Stuster, J. (1996). Bold endeavors: Lessons from polar and space exploration. Naval Institute Press. </span>        ",
  },
  layout_interpersonal_processes: {
    title: "Layout &#8594; Interpersonal Processes",
    explanation:
      "Group spaces (and the lack of) can facilitate group activities and interpersonal processes, such as crew cohesion and bonding <span style='color:gray'>[Simon 2011]</span>. Public social spaces can also help social cohesion processes amongst strangers <span style='color:gray'>[Aelbrecht 2019]</span>.        <br><br><br> <span style='color:gray'> Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). <br> Aelbrecht, P. (2019). New Public Spaces of Circulation, Consumption and Recreation and their Scope for Informal Social Interaction and Cohesion. In P. Aelbrecht & Q. Stevens (Eds.), Public Space Design and Social Cohesion (1st ed., pp. 199–219). Routledge.   </span>        ",
  },
  lighting_sleep: {
    title: "lighting &#8594; Sleep",
    explanation:
      "Lighting is the primary entrainment factor for circadian rhythm regulation <span style='color:gray'>[Broadway and Arendt 1988]</span>. Lowered light levels and warm tones of light closer to the evening promotes the production of melatonin, which in turn promotes sleep desire <span style='color:gray'>[Karlen 2017]</span>. In recent years, the International Space Station has introduced a solid state lighting system in the crew quarters that has yielded preliminary results that light-responsive melatonin regulation is possible in the spaceflight environment <span style='color:gray'>[Brainard 2013]</span>.          <br><br><br> <span style='color:gray'> Broadway JW and Arendt J. (1988). Seasonal and bright light changes of the phase position of the human melatonin rhythms in Antarctica. Arctic Med Res; 47 (suppl 1): 201–03. <br> Karlen, M., Spangler, C., & Benya, J. R. (2017). Lighting design basics. John Wiley & Sons. <br>   Brainard, G. C., Coyle, W., Ayers, M., Kemp, J., Warfield, B., Maida, J., ... & Hanifin, J. P. (2013). Solid-state lighting for the International Space Station: Tests of visual performance and melatonin regulation. Acta Astronautica, 92(1), 21-28. </span>",
  },
  privacy_confined: {
    title: "Confined  &#8594; Privacy",
    explanation:
      "The interior of the Antarctic stations emphasize efficiency, not comfort. The lack of privacy (physical and acoustic) is a primary stressor in confined environments <span style='color:gray'>[Palinkas 2008][Nicolas 2016]</span>.        <br><br><br> <span style='color:gray'> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. </span>        ",
  },
  privacy_density: {
    title: "Density &#8594; Privacy",
    explanation:
      "High density also leads to crowding, which has been conceptualized as excessive social contact or insufficient personal space <span style='color:gray'>[Altman 1975]</span>. Density in social settings limits the ability to be alone and decreases the ability to be visually and auditorily separate from others <span style='color:gray'>[Marshall 1972]</span>. Under circumstances of crowding, people seek methods to regulate excessive social contact, such as seeking private spaces or increasing physical separation from others <span style='color:gray'>[Baum 1977]</span>.           <br><br><br> <span style='color:gray'> Altman I. (1975). The environment and social behavior: privacy, personal space, territory, crowding. Brooks/Cole, Monterey. <br> Marshall, N. J. (1972). Privacy and environment. Human Ecology, 1(2), 93–110. <br> Baum A, Valins S (1977) Architecture and social behavior: psychological studies of social density. Erlbaum, Hillsdale/New York. </span> ",
  },
  privacy_habitable_volume: {
    title: "Habitable Volume &#8594; Privacy",
    explanation:
      "Habitable volume considerations should ensure adequate allocation of private and personal spaces, such as a ‘crew quarters’ in spaceflight or in polar exploration missions <span style='color:gray'>[Stuster 1996][Simon 2011]</span>.        <br><br><br> <span style='color:gray'> Stuster, J. (1996). Bold endeavors: Lessons from polar and space exploration. Naval Institute Press. <br> Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). </span>  ",
  },
  privacy_layout: {
    title: "Layout &#8594; Privacy",
    explanation:
      "Private spaces and private-public relationships of spaces are crucial for layout planning. Private, personal, personalizable spaces are psychologically important <span style='color:gray'>[Altman and Haythorn 1967][Kanas and Manzey 2008][Stuster 1996]</span>. Layout design and ensuring the availability of private spaces directly contributes to the ability to regulate one’s privacy.        <br><br><br> <span style='color:gray'> Altman I, Haythorn WW. 1967. The ecology of isolated groups. Behav. Sci. 32:169–82. <br>  Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). Springer Science + Business Media; Microcosm Press. <br> Stuster, J. (1996). Bold endeavors: Lessons from polar and space exploration. Naval Institute Press. </span>        ",
  },
  privacy_media_attention: {
    title: "Media Attention &#8594; Privacy",
    explanation:
      "In the (social) media world, privacy is currency – people willingly or unknowingly disclose private information to gain access to digital tools and services  <span style='color:gray'>[Quinn 2019]</span>. In public facing jobs or situations, such as an astronaut/spaceflight participant or as someone in the midst of a natural disaster with high media attention, access privacy may become harder to manage.     <br><br><br> <span style='color:gray'> Quinn, K., Epstein, D., & Moon, B. (2019). We care about different things: Non-elite conceptualizations of social media privacy. Social Media+ Society, 5(3). </span>        ",
  },
  privacy_sleep: {
    title: "Privacy &#8594; Sleep",
    explanation:
      "Anecdotal evidence shows that the need for privacy often manifests itself in a need to be alone <span style='color:gray'>[Stuster 1996]</span>, for instance in a sleep area. In isolation, a bed is often the first thing people claim as their own, showing the importance of a personal sleeping area <span style='color:gray'>[Altman and Haythorn 1967]</span>.        <br><br><br> <span style='color:gray'> Stuster, J. (1996). Bold endeavors: Lessons from polar and space exploration. Naval Institute Press. <br> Altman I, Haythorn WW. 1967. The ecology of isolated groups. Behav. Sci. 32:169–82. </span>        ",
  },
  privacy_place_attachment: {
    title: "Privacy &#8594; Place Attachment",
    explanation:
      "Privacy is closely related to territoriality and space appropriation. For instance, one study of over 100 college students found that privacy regulation behaviors (i.e., managing one’s social contact) was correlated with adjustment to university life <span style='color:gray'>[Vinsel 1980]</span>. Private spaces are also often where one can perform place_attachment behavior and form stronger bonds to personalized areas. For instance, in a study of 18 pairs of confined sailors, it was found that the territoriality over the bed areas were enacted first, followed by more public areas (table and chairs) <span style='color:gray'>[Altman and Haythorn 1967]</span>.        <br><br><br> <span style='color:gray'> Vinsel, A., Brown, B. B., Altman, I., & Foss, C. (1980). Privacy regulation, territorial displays, and effectiveness of individual functioning. Journal of Personality and Social Psychology, 39(6), 1104–1115.     <br> Altman I, Haythorn WW. 1967. The ecology of isolated groups. Behav. Sci. 32:169–82. </span>        ",
  },
  privacy_stress_regulation: {
    title: "Privacy &#8594; Stress Regulation",
    explanation:
      "The lack of privacy can lead to stress <span style='color:gray'>[Harrison 1991]</span>. Privacy is critical, particularly in long-duration missions and in isolated and confined environments, to afford a personal space away from social and work stressors <span style='color:gray'>[Kanas and Manzy 2008][Simon 2011][Landon and Paoletti 2020]</span>.         <br><br><br> <span style='color:gray'> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. <br> Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). Springer Science + Business Media; Microcosm Press. <br> Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). <br> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press.  </span>        ",
  },
  privacy_crew_performance: {
    title: "Privacy &#8594; Crew Performance",
    explanation:
      "In spaceflight missions, privacy is necessary for mental restoration and supports performance, but must be in moderation to avoid isolation within teams <span style='color:gray'>[Kearney 2016]</span>.        <br><br><br> <span style='color:gray'> Kearney, A. R. (2016). Team health and performance in spacefight habitats risks, countermeasures, and research recommendations (NASA/TM-2016-219274). Houston, TX: NASA         </span>        ",
  },
  privacy_kinship: {
    title: "Privacy &#8594; Kinship",
    explanation:
      "In a study of over 1000 residents in Norway, it was found that the presence of private/public spaces, such as gardens, promoted “neighboring” (i.e., attachment to neighborhood, social support amongst neighbors) due to the ability to regulate privacy and social contacts <span style='color:gray'>[Skjaeveland and Garling 1997]</span>.      <br><br><br> <span style='color:gray'> Skjaeveland, O., & Garling, T. (1997). EFFECTS OF INTERACTIONAL SPACE ON NEIGHBOURING. Journal of Environmental Psychology, 17(3), 181–198.    </span>        ",
  },
  ergonomics_altered_gravity: {
    title: "Altered Gravity &#8594; Ergonomics",
    explanation:
      " <span style='font-size:8pt'> The neutral body posture in space was first described by Tengwall in 1982 through Skylab photographs. Since then, more work has been done to fully characterize the body posture that naturally arises from the lack of gravity <span style='color:gray'>[Zimmerman and Akin 2001][Kim 2019]</span>. The posture is characterized by a semi-crouched torso, bent legs, raised arms, and a forward tilt in the neck/head. Consideration of the neutral body posture is critical for design, as deviations away from this posture equates to physical energy expenditure <span style='color:gray'>[Tengwall 1982]</span>. The neutral body posture can be observed in weightlessness (microgravity and neutral buoyancy) <span style='color:gray'>[Zimmerman and Akin 2001]</span> and when sleeping <span style='color:gray'>[Tengwall 1982]</span>. <br> For altered gravity in between 0g and 1g, or beyond 1g, considerations for gait become more critical. Gravity level is a significant factor in changing gait patterns, including altered run-walk transition speeds <span style='color:gray'>[De Witt 2014]</span> and narrowed visual fields <span style='color:gray'>[Schlacht 2016]</span>. Ergonomics and the design of peripheral systems, spacesuits, information displays, and equipment must then change to support altered biomechanics.       <br><br> <span style='color:gray'> Zimmerman, J., & Akin, D. L. (2001). Effect of Orientation on Human Posture in Neutral Buoyancy and Parabolic Flight (No. 2001-01-2149). SAE Technical Paper. <br> Kim, H. K., Young, K. S., & Rajulu, S. L. (2019, November). Neutral body posture in spaceflight. In Proceedings of the Human Factors and Ergonomics Society Annual Meeting (Vol. 63, No. 1, pp. 992-996). Sage CA: Los Angeles, CA: SAGE Publications. <br> Tengwall, R. et al. (1982). Human Posture in Zero Gravity [and Comments and Reply]. Current Anthropology, 23(6), 657–666. <br> De Witt, J. K. et al.(2014). The preferred walk to run transition speed in actual lunar gravity. Journal of Experimental Biology, 217(18), 3200-3203. <br> Schlacht, I.L. et al. (2016). From Virtual Reality to Neutral Buoyancy—Methodologies for Analyzing Walking Pattern on Moon and Mars. In: Arezes, P. (eds) Advances in Safety Management and Human Factors. Advances in Intelligent Systems and Computing, vol 491. Springer, Cham. </span> </span>",
  },
  ergonomics_circulation_paths: {
    title: "Circulation Paths &#8594; Ergonomics",
    explanation:
      "Circulation paths provide physical paths to translate and move through a larger space. Hazards along the circulation path may pose risks and restrictions for individuals using the path. For instance, translation paths that are physically inaccessible to limited-mobility users disadvantage their access to public services <span style='color:gray'>[Banda-Chalwe 2014]</span>. The design of circulation paths also promotes wayfinding, which is a combination of physical and cognitive processes <span style='color:gray'>[Golledge 1999]</span>. The selected circulation design(s) may impact the interpreted complexity and wayfinding difficulty for the occupants <span style='color:gray'>[Natapov 2020]</span>.      <br><br><br> <span style='color:gray'> Banda-Chalwe, M., Nitz, J. C., & De Jonge, D. (2014). Impact of inaccessible spaces on community participation of people with mobility limitations in Zambia. African journal of disability, 3(1), 1-17. <br> Golledge, R. G. 1999. “Human Wayfinding and Cognitive Maps.” In Wayfinding Behavior: Cognitive Mapping and Other Spatial Processes, edited by R. G. Golledge, 5–45. Baltimore: JHU press. <br> Natapov, A., Kuliga, S., Dalton, R. C., & Hölscher, C. (2020). Linking building-circulation typology and wayfinding: Design, spatial analysis, and anticipated wayfinding difficulty of circulation types. Architectural Science Review, 63(1), 34–46. </span>        ",
  },
  ergonomics_physical_workload: {
    title: "Ergonomics &#8594; Physical Workload",
    explanation:
      "If a system is not ergonomic, users may be prone to accidents or errors. Many musculoskeletal injuries begin with discomfort, which is an indicator that the demands placed on the physical system are exceeding the capabilities <span style='color:gray'>[Stanton 2005]</span>. If left unmanaged, discomfort can turn into aches and pains, and eventually into musculoskeletal injury <span style='color:gray'>[Stanton 2005]</span>.       <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. </span>        ",
  },
  ergonomics_crew_performance: {
    title: "Ergonomics &#8594; Crew Performance",
    explanation:
      "Discomfort (physical, cognitive, or psychological) due to incompatibilities with interfaces also adversely impacts performance through degraded quantity or quality (e.g., errors) <span style='color:gray'>[Stanton 2005]</span>.         <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. </span>        ",
  },
  ergonomics_situation_awareness: {
    title: "Ergonomics &#8594; Situation Awareness",
    explanation:
      "Cognitive ergonomics are important to maintain a balance between the cognitive resources (e.g., knowledge, experience, training, user manuals, user interface clarity) and cognitive demands (e.g., task complexity, multitasking, user goals) <span style='color:gray'> [Stanton 2005]</span>. An imbalance between the resources and demands can occur as task underload or task overload <span style='color:gray'> [Stanton 2005]</span>, which could then lead to an improper level of situation awareness.    <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. </span>        ",
  },
  fixtures_place_attachment: {
    title: "Fixtures &#8594; Place Attachment",
    explanation:
      "Fixtures contribute to the habitability of a space. In particular, furnishings that enable the personalization of spaces – including decorating/furnishing rooms and  distribution of personal items – enable space appropriation, which in turn promotes place attachment <span style='color:gray'>[Graumann 1976]</span>.  <br><br><br> <span style='color:gray'> Graumann, C. F. (1976). Concept of Appropriation. </span>        ",
  },
  fixtures_reconfigurability: {
    title: "Fixtures &#8594; Reconfigurability",
    explanation:
      "Flexibility in the attachment or fixtures, or modularity in the design and implementation of fixtures, can contribute to reconfigurability. ",
  },
  reconfigurability_fixtures: {
    title: "Fixtures &#8594; Reconfigurability",
    explanation:
      "Flexibility in the attachment or fixtures, or modularity in the design and implementation of fixtures, can contribute to reconfigurability. ",
  },
  reconfigurability_circulation_paths: {
    title: "Circulation Paths &#8594; Reconfigurability",
    explanation:
      "The setup of circulation paths may influence how reprogrammable a space is. For instance, a grid pattern circulation path allows most spaces to have equal priority and therefore a high degree of reconfiguration; whereas a linear circulation path may place more emphasis on the endpoints of the path, where spaces become less reconfigurable. ",
  },
  reconfigurability_layout: {
    title: "Layout &#8594; Reconfigurability",
    explanation:
      "Layouts endowed with spatial flexibility (variation in size and locations) can contribute to greater reconfigurability <span style='color:gray'>[Häuplik-Meusburger 2011]</span>. For instance, reconfigurable layouts could provide multiple activities to be held in the same space, or for multiple configurations of adjacent spaces.       <br><br><br> <span style='color:gray'> Häuplik-Meusburger, S. (2011). Architecture for astronauts: an activity-based approach. Springer Science & Business Media.        </span>        ",
  },
  reconfigurability_place_attachment: {
    title: "Reconfigurability &#8594; Place Attachment",
    explanation:
      "The ability to reconfigure and personalize a space is important to create and reflect a sense of attachment <span style='color:gray'>[Simon 2011][Rioux 2017]</span>.     <br><br><br> <span style='color:gray'>  Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). <br>  Rioux, L., Scrima, F., & Werner, C. M. (2017). Space appropriation and place attachment: University students create places. Journal of Environmental Psychology, 50, 60–68. </span> ",
  },
  reconfigurability_sleep: {
    title: "Reconfigurability &#8594; Sleep",
    explanation:
      "Insufficient control over personal environments (e.g., temperature, humidity, noise), particularly during sleep, can result in poorer sleep quality <span style='color:gray'>[Simon 2011]</span>.        <br><br><br> <span style='color:gray'>  Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). </span> ",
  },
  environmental_monotony_supplies: {
    title: "Supplies &#8594; Environmental Monotony",
    explanation:
      "The limitation of supplies due to mass, volume, or transportation distance may contribute to environmental or material monotony (e.g., the lack of fresh fruit or care packages) <span style='color:gray'>[Kanas and Manzey 2008]</span>.      <br><br><br> <span style='color:gray'> Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). El Segundo, CA: Microcosm Press. </span>        ",
  },
  environmental_monotony_boredom: {
    title: "Environmental Monotony &#8594; Boredom",
    explanation:
      "Monotony within the environment, understimulation, or sensory deprivation are common attributes of boredom <span style='color:gray'>[Todman 2003][Leong and Schneller 1993][Mikulas and Vodanovich 1993][Suedfeld and Steel 2000]</span>. Sensory deprivation in spaceflight can be mitigated through novel additions to food, for instance, through crew care packages (which becomes difficult with distance away from Earth) <span style='color:gray'>[Kanas and Manzey 2008]</span>.        <br><br><br> <span style='color:gray'> Todman, M. (2003). Boredom and Psychotic Disorders: Cognitive and Motivational Issues. Psychiatry: Interpersonal and Biological Processes, 66(2), 146–167. <br> Leong, F. T., & Schneller, G. R. (1993). Boredom proneness: Temperamental and cognitive components. Personality and individual differences, 14(1), 233-239. <br> Mikulas, W. L., & Vodanovich, S. J. (1993). The essence of boredom. The psychological record, 43(1), 3. <br> Suedfeld, P., & Steel, G. D. (2000). The Environmental Psychology of Capsule Habitats. Annual Review of Psychology, 51(1), 227–253. <br> Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). El Segundo, CA: Microcosm Press. </span> ",
  },
  physical_workload_mission_demands: {
    title: "Mission Demands &#8594; Physical Workload",
    explanation:
      "During launch, peak acceleration is at ~3.8g (1g = 9.81 m/s^2), and up to 15 g can be reached by the launch escape system in emergency scenarios <span style='color:gray'>[Allen 2018]</span>. Accelerations in the lunar landing profile can briefly reach up to 20g <span style='color:gray'>[Allen 2018]</span>. <br> Crewmembers onboard the International Space Station spend around 10 hours a week exercising, which was still insufficient to counteract physiological deconditioning <span style='color:gray'>[Scott 2023]</span>.        <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Scott, J. M., Feiveson, A. H., English, K. L., Spector, E. R., Sibonga, J. D., Dillon, E. L., Ploutz-Snyder, L., & Everett, M. E. (2023). Effects of exercise countermeasures on multisystem function in long duration spaceflight astronauts. Npj Microgravity, 9(1), 11. </span> ",
  },
  physical_workload_life_mission_events: {
    title: "Mission Events &#8594; Physical Workload",
    explanation:
      "Extravehicular activities are extremely demanding on the body. Spacesuits (in particular the Extravehicular Mobility Unit used by NASA) can cause injuries and discomfort, primarily due to the lack of mobility provided by the gas pressure layer <span style='color:gray'>[Diaz and Newman 2014]</span>. Additionally, the weight of the suit and the required walking past (e.g., during an emergency return scenario) increase metabolic workload, which in turn contributes to fatigue <span style='color:gray'>[Belobrajdic 2021]</span>.         <br><br><br> <span style='color:gray'> A. Diaz and D. Newman, (2014). 'Musculoskeletal human-spacesuit interaction model,'' 2014 IEEE Aerospace Conference, Big Sky, MT, USA, pp. 1-13. <br>  Belobrajdic, B., Melone, K., & Diaz-Artiles, A. (2021). Planetary extravehicular activity (EVA) risk mitigation strategies for long-duration space missions. Npj Microgravity, 7(1), 16. </span>        ",
  },
  physical_workload_exercise_equipment: {
    title: "Exercise Equipment &#8594; Physical Workload",
    explanation:
      "Current exercise protocol for International Space Station crewmembers averages around 10 hours per week, or 2 hours per day [Scott 2023]. The exercise protocol is the primary source of physical workload, beyond mission events such as extravehicular activity, due to the lack of loading and stress in the microgravity environment. Based on a study of over 45 astronauts on the ISS, the median aerobic exercise duration was 65 minutes per session for the cycle ergometer and 84 minutes per session for the treadmill. Resistance training varied roughly between 100-300 pounds of force, depending on the specific exercise (e.g., squats, bench press, deadlift) <span style='color:gray'>[Scott 2023]</span>.        <br><br><br> <span style='color:gray'> Scott, J. M., Feiveson, A. H., English, K. L., Spector, E. R., Sibonga, J. D., Dillon, E. L., Ploutz-Snyder, L., & Everett, M. E. (2023). Effects of exercise countermeasures on multisystem function in long duration spaceflight astronauts. Npj Microgravity, 9(1), 11. </span>     ",
  },
  physical_workload_ergonomics: {
    title: "Ergonomics &#8594; Physical Workload",
    explanation:
      "If a system is not ergonomic, users may be prone to accidents or errors. Many musculoskeletal injuries begin with discomfort, which is an indicator that the demands placed on the physical system are exceeding the capabilities <span style='color:gray'>[Stanton 2005]</span>. If left unmanaged, discomfort can turn into aches and pains, and eventually into musculoskeletal injury <span style='color:gray'>[Stanton 2005]</span>.       <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. </span>        ",
  },
  physical_workload_physical_health: {
    title: "Physical Workload &#8594; Physical Health",
    explanation:
      "Many musculoskeletal injuries begin with discomfort, which can turn into pains and injuries if left unmanaged <span style='color:gray'>[Stanton 2005]</span>. However, an appropriate level of physical workload is needed to sustain musculoskeletal health. In spaceflight, where multiple systems experience deconditioning due to microgravity unloading, aerobic and resistance exercise can help protect against muscle mass loss, bone mass, muscle strength, and aerobic capacity <span style='color:gray'>[Petersen 2016]</span>.         <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. <br> Petersen, N., Jaekel, P., Rosenberger, A., Weber, T., Scott, J., Castrucci, F., ... & Mester, J. (2016). Exercise in space: the European Space Agency approach to in-flight exercise countermeasures for long-duration missions on ISS. Extreme physiology & medicine, 5, 1-13. </span>  ",
  },
  physical_workload_depression: {
    title: "Physical Workload &#8594; Depression",
    explanation:
      "Studies have shown that physical activity is beneficial to those with depressive symptoms <span style='color:gray'>[Morgan 1985][Farmer 1988][Martinsen 1989a][Dimeo 2001][Leppamaki 2002]</span>. Proposed mechanisms for the linkage between physical activity and mental health include physiological benefits (e.g., release of feel-good endorphins and hormones), improve self-image and self-efficacy, and serve as distraction and social interaction <span style='color:gray'>[Peluso and De Andrade 2005]</span>.       <br><br> <span style='color:gray'> Morgan, W. P. (1985). Affective beneficence of vigorous physical activity. Medicine and science in sports and exercise, 17(1), 94-100. <br> Farmer, M.E., Locke, B.Z., Mościcki, E.K., et al. (1988). Physical activity and depressive symptoms: the NHANES I Epidemiologic Follow-up Study. American journal of epidemiology, 128(6), 1340-1351. <br> Martinsen, E.W., Hoffart, A., & Solberg, Ø. (1989). Comparing aerobic with nonaerobic forms of exercise in the treatment of clinical depression: a randomized trial. Comprehensive psychiatry, 30(4), 324-331. <br> Dimeo, F., Bauer, M., Varahram, I., et al. (2001). Benefits from aerobic exercise in patients with major depression: a pilot study. British journal of sports medicine, 35(2), 114-117. <br> Leppamaki, S. J., Partonen, T. T., Hurme, J., Haukka, J. K., & Lonnqvist, J. K. (2002). Randomized trial of the efficacy of bright-light exposure and aerobic exercise on depressive symptoms and serum lipids. Journal of Clinical Psychiatry, 63(4), 316-321. <br> Peluso, M. A. M., & De Andrade, L. H. S. G. (2005). Physical activity and mental health: the association between exercise and mood. Clinics, 60(1), 61-70. </span>  ",
  },
  physical_workload_anxiety: {
    title: "Physical Workload &#8594; Anxiety",
    explanation:
      "Studies have shown that physical activity is beneficial to those with anxious symptoms <span style='color:gray'>[Petruzzello 1991][Martinsen 1989][Dunn 2001]</span>. Proposed mechanisms for the linkage between physical activity and mental health include physiological benefits (e.g., release of feel-good endorphins and hormones), improve self-image and self-efficacy, and serve as distraction and social interaction <span style='color:gray'>[Peluso and De Andrade 2005]</span>.        <br><br><br> <span style='color:gray'> Petruzzello, S. J., Landers, D. M., Hatfield, B. D., Kubitz, K. A., & Salazar, W. (1991). A meta-analysis on the anxiety-reducing effects of acute and chronic exercise: Outcomes and mechanisms. Sports medicine, 11, 143-182. <br> Martinsen, E. W., Hoffart, A., & Solberg, Ø. Y. (1989). Aerobic and non‐aerobic forms of exercise in the treatment of anxiety disorders. Stress Medicine, 5(2), 115-120. <br> Dunn, A. L., Trivedi, M. H., & O'Neal, H. A. (2001). Physical activity dose-response effects on outcomes of depression and anxiety. Database of Abstracts of Reviews of Effects (DARE): Quality-assessed Reviews [Internet]. <br> Peluso, M. A. M., & De Andrade, L. H. S. G. (2005). Physical activity and mental health: the association between exercise and mood. Clinics, 60(1), 61-70.     </span>  ",
  },
  cognitive_workload_mission_demands: {
    title: "Mission Demands &#8594; Cognitive Workload",
    explanation:
      "In general, space missions are challenging and require crew (crewmembers and mission control) to maintain high cognitive function while operating complex and sensitive instruments <span style='color:gray'>[Barger 2014]</span>. The “cognitive-overload” hypothesis describes the disproportionate sensorimotor performance deficit that occurs when cognitively challenging tasks are performed, as compared to simple ones. Spaceflight-specific disturbances, including restructuring of the sensorimotor system and cognitive stressors (confinement, altered sleep architecture, high workload) reduce available cognitive resources <span style='color:gray'>[Bock 2010]</span>.       <br><br><br> <span style='color:gray'> Barger, L. K., Wright, K. P., Burke, T. M., Chinoy, E. D., Ronda, J. M., Lockley, S. W., & Czeisler, C. A. (2014). Sleep and cognitive function of crewmembers and mission controllers working 24-h shifts during a simulated 105-day spaceflight mission. Acta Astronautica, 93, 230–242. <br> Bock, O., Weigelt, C., & Bloomberg, J. J. (2010). Cognitive Demand of Human Sensorimotor Performance During an Extended Space Mission: A Dual-Task Study. Aviation, Space, and Environmental Medicine, 81(9), 819–824. </span>",
  },
  cognitive_workload_stress: {
    title: "Cognitive Workload &#8594; Stress",
    explanation:
      "High mental workload can be stressful when the mental resources are burdened <span style='color:gray'>[Mandrick 2016]</span>. Higher cognitive workload demands necessitate higher mental energy expenditure, which is characterized as stress <span style='color:gray'>[Gaillard 2018]</span>. Maintained levels of high cognitive workload and high performance may be possible, but at a detriment to physiological and psychological systems, as the workload is stressing the existing resources and limiting the ability to assess other concerns/threats <span style='color:gray'>[Warm 2018]</span>.        <br><br><br> <span style='color:gray'> Mandrick, K., Peysakhovich, V., Rémy, F., Lepron, E., & Causse, M. (2016). Neural and psychophysiological correlates of human performance under stress and high mental workload. Biological psychology, 121, 62-73. <br> Gaillard, A. W. (2018). Concentration, stress and performance. In Performance under stress (pp. 75-92). CRC Press. <br> Warm, J. S., Matthews, G., & Finomore Jr, V. S. (2018). Vigilance, workload, and stress. In Performance under stress (pp. 131-158). CRC Press. </span>   ",
  },
  cognitive_workload_crew_performance: {
    title: "Cognitive Workload &#8594; Crew Performance",
    explanation:
      "The type of cognitive workload may be important as well. Meaningful work promotes performance and satisfaction <span style='color:gray'>[Landon 2024]</span>; interesting work also allows cognitive resources to be allocated to the work, as opposed to overcoming the tedium of the work <span style='color:gray'>[Warm 2018]</span>.        <br><br><br> <span style='color:gray'> Landon, L. B., Doerr, A., Khader, A., Bell, S., Roma, P. G., & Dinges, D. F. (2024, February). Meaningful Work as a Resilience Countermeasure in Extreme Environments. In Human Research Program-Investigators Working Group (HRP-IWG) Workshop. <br> Warm, J. S., Matthews, G., & Finomore Jr, V. S. (2018). Vigilance, workload, and stress. In Performance under stress (pp. 131-158). CRC Press. </span> ",
  },
  cognitive_workload_boredom: {
    title: "Cognitive Workload &#8594; Boredom",
    explanation:
      "The strains of work, including low cognitive workload and decreased stimulation, can lead to boredom <span style='color:gray'>[Bench and Lench 2013][Landon 2024]</span>.         <br><br><br> <span style='color:gray'> Bench, S. W., & Lench, H. C. (2013). On the function of boredom. Behavioral sciences, 3(3), 459-472. <br>  Landon, L. B., Doerr, A., Khader, A., Bell, S., Roma, P. G., & Dinges, D. F. (2024, February). Meaningful Work as a Resilience Countermeasure in Extreme Environments. In Human Research Program-Investigators Working Group (HRP-IWG) Workshop. </span>   ",
  },
  cognitive_workload_sleep: {
    title: "Cognitive Workload &#8594; Sleep",
    explanation:
      "From the largest study of sleep and neurobehavioral functioning in 6-month stays on the ISS, elevated workload was found to be associated with shorter sleep durations. Observational data suggests that when the workload demand is low, astronauts can sleep longer if provided the opportunity <span style='color:gray'>[Jones 2022]</span>.         <br><br><br> <span style='color:gray'> Jones, C. W., Basner, M., Mollicone, D. J., Mott, C. M., & Dinges, D. F. (2022). Sleep deficiency in spaceflight is associated with degraded neurobehavioral functions and elevated stress in astronauts on six-month missions aboard the International Space Station. Sleep, 45(3), zsac006. </span>   ",
  },
  cognitive_workload_situation_awareness: {
    title: "Cognitive Workload &#8594; Situation Awareness",
    explanation:
      "Given a limited amount of cognitive resources, with rising task complexity and cognitive workload, there are decreased resources available for situation awareness <span style='color:gray'>[Vidulich and Tsang 2012]</span>. However, an appropriately high level of cognitive workload is sometimes required to maintain high situation awareness (i.e. prevent boredom) <span style='color:gray'>[Endsley 1993]</span>.    <br><br><br> <span style='color:gray'> Vidulich, M. A., & Tsang, P. S. (2012). Mental workload and situation awareness. Handbook of human factors and ergonomics, 243-273. Endsley, M. R. (1993). A survey of situation awareness requirements in air-to-air combat fighters. The International Journal of Aviation Psychology, 3(2), 157–168. </span>   ",
  },
  media_attention_privacy: {
    title: "Media Attention &#8594; Privacy",
    explanation:
      "In the (social) media world, privacy is currency – people willingly or unknowingly disclose private information to gain access to digital tools and services  <span style='color:gray'>[Quinn 2019]</span>. In public facing jobs or situations, such as an astronaut/spaceflight participant or as someone in the midst of a natural disaster with high media attention, access privacy may become harder to manage.     <br><br><br> <span style='color:gray'> Quinn, K., Epstein, D., & Moon, B. (2019). We care about different things: Non-elite conceptualizations of social media privacy. Social Media+ Society, 5(3). </span>        ",
  },
  transition_processes_communication_delay: {
    title: "Communication Delay &#8594; Ground Support",
    explanation:
      "During an isolation analog of 520 days (N = 6, Mars 500 experiment), crew reported that the presence, not the duration, of communication delay mattered. During decision making processes, both crew and ground support developed dissatisfaction and inefficiencies in subsequent decisions due to the lack of shared understanding <span style='color:gray'>[Ushakov 2014]</span>. <br><br><br> <span style='color:gray'> Ushakov, I. B., Vladimirovich, M. B., Bubeev, Y. A., Gushin, V. I., Vasil’eva, G. Y., Vinokhodova, A. G., & Shved, D. M. (2014). Main findings of psychophysiological studies in the Mars 500 experiment. Herald of the Russian Academy of Sciences, 84(2), 106–114. </span>",
  },
  transition_processes_crew_performance: {
    title: "Transition Processes &#8594; Crew Performance",
    explanation:
      "A shared mental model, situation awareness, and communication of expectations to the entire team is necessary for accomplishing goals effectively. Teams that abbreviate or ignore the planning processes are at risk of misdirecting their attention and resources until it’s too late to recover <span style='color:gray'>[Gersick 1988][Marks 2001]</span>. When teams are unable to plan, this forces them to rely on past experience or improvisation, which can be difficult for complex and/or novel tasks <span style='color:gray'>[Marks 2001]</span>.     <br><br><br> <span style='color:gray'> Gersick, C. J. G. (1988). Time and transition in work teams: Toward a new model of group development. Academy of Management Journal, 31: 9-41. <br> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  </span> ",
  },
  action_processes_conscientiousness: {
    title: "Conscientiousness &#8594; Action Processes",
    explanation:
      "When faced with stress, highly conscientious people tend to use active, problem-focused strategies  <span style='color:gray'>[Watson and Hubbard 1996][Matthews 2003]</span>.         <br><br><br> <span style='color:gray'> Watson, D. and Hubbard, B. (1996) Adaptational style and dispositional structure: coping in the context of the five-factor model. Journal ofPersonality, 64, 737–74.<br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.  </span> ",
  },
  action_processes_crew_performance: {
    title: "Action Processes &#8594; Crew Performance",
    explanation:
      "During the action phase, critical processes include monitoring and providing effective feedback on the progress/status of resources, environmental/system conditions, and team members. These processes are important to ensure the team is aware and in sync with each other and the environment, so adjustments can be made to reach goals successfully [Marks 2001].     <br><br><br><span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  </span>   ",
  },
  interpersonal_processes_extraversion: {
    title: "Extraversion &#8594; Interpersonal Processes",
    explanation:
      "Extraversion has high predictive validity on social behavior. In social situations with strangers, extroverts ask more questions, joke more, and initiate more conversations  <span style='color:gray'> [Matthews 2003]</span>. Based on a study of 50+ college students, distinctive patterns arose for matched dyads – introverts tend to focus on problem talk (expressing dissatisfaction with their own activities) and extroverts tend to cover a wider range of topics  <span style='color:gray'> [Thorne 1987]</span>. Based on a study of nearly 1700 individuals across 4 years, it was found that extraversion significantly predicts how people choose friends (with similar levels of extraversion) and the magnitude and likelihood of how individual levels of extraversion are influenced throughout the friendships (if A’s friend group is more extraverted that that of B’s, then A’s level of extraversion is more likely to increase than B’s)  <span style='color:gray'> [van Zalk 2020]</span>.         <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. <br> Thorne, A. (1987). The press of personality: A study of conversations between introverts and extraverts. Journal of Personality and Social Psychology, 53(4), 718–726. <br> van Zalk, M. H. W., Nestler, S., Geukes, K., Hutteman, R., & Back, M. D. (2020). The codevelopment of extraversion and friendships: Bonding and behavioral interaction mechanisms in friendship networks. Journal of Personality and Social Psychology, 118(6), 1269–1290. </span>        ",
  },
  interpersonal_processes_agreeableness: {
    title: "Agreeableness &#8594; Interpersonal Processes",
    explanation:
      "Agreeableness is a key component in social interactions. Highly agreeable individuals have less conflict, respond to conflicts more positively, and generally like their social interactions more <span style='color:gray'>[Graziano 1996]</span>. However, it’s been shown that highly agreeable individuals experience more distress and greater decreases in self-esteem following conflict <span style='color:gray'>[Suls 1998][Barrett and Pietromonaco 1997]</span>.        <br><br><br> <span style='color:gray'> Graziano, W. G., Jensen-Campbell, L. A., & Hair, E. C. (1996). Perceiving interpersonal conflict and reacting to it: The case for agreeableness. Journal of Personality and Social Psychology, 70(4), 820–835. <br> Suls, J., Martin, R. and David, J. P. (1998) Person–environment fit and its limits: agreeableness, neuroticism, and emotional reactivity to interpersonal conflict. Personality and Social Psychology Bulletin, 24, 88–98. <br> Barrett, L. F. and Pietromonaco, P. R. (1997) Accuracy of the five-factor model in predicting perceptions of daily social interactions. Personality and Social Psychology Bulletin, 23, 1173–87.  </span>        ",
  },
  interpersonal_processes_neuroticism: {
    title: "Neuroticism  &#8594; Interpersonal Processes",
    explanation:
      "In a study of 100+ dyad (two-people) friendships, it was found that an individual’s neuroticism scores predicted the number of conflicts they had with their friend <span style='color:gray'>[Berry 2000]</span>.      <br><br><br> <span style='color:gray'> Berry, D. S., Willingham, J. K., & Thayer, C. A. (2000). Affect and Personality as Predictors of Conflict and Closeness in Young Adults’ Friendships. Journal of Research in Personality, 34(1), 84–107. </span>  ",
  },
  interpersonal_processes_circulation_paths: {
    title: "Circulation Paths &#8594; Interpersonal Processes",
    explanation:
      "Design and placement of circulation spaces, including hallways, access paths, stairs, entrances, contribute to the formation of friendships and social cohesion <span style='color:gray'>[Festinger 1950][Skjaeveland and Garling 1997]</span>. Promotion of interpersonal processes can be designed into circulation spaces, much like common spaces <span style='color:gray'>[Adianto 2021]</span>. Importantly, circulation spaces may be neither private or public, and can be flexible to provide the level of privacy needed (as described in Altman’s theory of privacy <span style='color:gray'>[Alman 1975]</span>).        <br><br><br> <span style='color:gray'> Festinger, L., Schachter, S., & Back, K. (1950). Social pressures in informal groups; a study of human factors in housing. Harper. <br> Skjaeveland, O., & Garling, T. (1997). EFFECTS OF INTERACTIONAL SPACE ON NEIGHBOURING. Journal of Environmental Psychology, 17(3), 181–198. <br> Adianto, J., Gabe, R. T., Ristanto, D. F., & Sihombing, A. (2021). Circulation Space as “The Fourth Place” in a Private Student Housing Complex in Depok, Indonesia. The International Journal of Design in Society, 15(1), 59–72. <br>  Altman, I. (1975). The environment and social behavior: Privacy, personal space, territory, crowding. Monterey, CA: Brooks/Cole.   </span>        ",
  },
  interpersonal_processes_layout: {
    title: "Layout &#8594; Interpersonal Processes",
    explanation:
      "Group spaces (and the lack of) can facilitate group activities and interpersonal processes, such as crew cohesion and bonding <span style='color:gray'>[Simon 2011]</span>. Public social spaces can also help social cohesion processes amongst strangers <span style='color:gray'>[Aelbrecht 2019]</span>.        <br><br><br> <span style='color:gray'> Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). <br> Aelbrecht, P. (2019). New Public Spaces of Circulation, Consumption and Recreation and their Scope for Informal Social Interaction and Cohesion. In P. Aelbrecht & Q. Stevens (Eds.), Public Space Design and Social Cohesion (1st ed., pp. 199–219). Routledge.   </span>        ",
  },
  interpersonal_processes_crew_performance: {
    title: "Interpersonal Processes &#8594; Crew Performance",
    explanation:
      "Low motivation levels can decrease the individual effort expended, thereby decreasing the overall team performance <span style='color:gray'>[Marks 2001]</span>.   <br><br><br> <span style='color:gray'>Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  </span>  ",
  },
  interpersonal_processes_social_support: {
    title: "Interpersonal Processes &#8594; Social Support",
    explanation:
      "Interpersonal processes are rooted in building relationships with one another. These processes help cope with life’s adversities (conflict and affect management) and promote growth and development (motivating processes), which are processes central to social support <span style='color:gray'>[Feeney and Collins 2015]</span>.   <br><br><br> <span style='color:gray'> Feeney, B. C., & Collins, N. L. (2015). A New Look at Social Support: A Theoretical Perspective on Thriving Through Relationships. Personality and Social Psychology Review, 19(2), 113–147.  </span>  ",
  },
  interpersonal_processes_kinship: {
    title: "Interpersonal Processes &#8594; Kinship",
    explanation:
      "Interpersonal processes underlay team member feelings toward each other, and can rally or derail team cohesion at any time. Social activities can build cohesion, break tension, and aid in stress management <span style='color:gray'>[Marks 2001]</span>.    <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  </span>  ",
  },
  interpersonal_processes_stress_regulation: {
    title: "Interpersonal Processes &#8594; Stress Regulation",
    explanation:
      "Social activities can aid in stress management <span style='color:gray'>[Marks 2001]</span>. A study of 60 dyadic couples (romantic and platonic) showed that a brief (10 minute) affectionate interaction prior to a stressful experience acted as a buffer, limiting the magnitude of cardiovascular arousal <span style='color:gray'>[Pauley 2015]</span>.        <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  <br> Pauley, P. M., Floyd, K., & Hesse, C. (2015). The stress-buffering effects of a brief dyadic interaction before an acute stressor. Health communication, 30(7), 646-659.        </span>  ",
  },
  interpersonal_processes_place_attachment: {
    title: "Interpersonal Processes &#8594; Place Attachment",
    explanation:
      "A commonly studied predictor of place attachment is social interaction <span style='color:gray'>[Bonaiuto 1999][Bonaiuto 2006][Brown 2004][Kasarda and Janowitz 1974][Lewicka 2005][Mesch and Manor 1998][Moser 2002][Ringel and Finkelstein 1991]</span>. The strength of community ties consistently positively predicts place attachment.    <br><br> <span style='color:gray'> Bonaiuto, M., Aiello, A., Perugini, M., Bonnes, M., & Ercolani, A. P. (1999). Multidimensional perception of residential environment quality and neighbourhood attachment in the urban environment. Journal of Environmental Psychology, 19,331-352. <br> Bonaiuto, M., Fornara, F., & Bonnes, M. (2006). Perceived residential environment quality in middle- and low-extension Italian cities. European Review of Applied Psychology, 56, 23-34. <br> Brown, B. B., Perkins, D. D., & Brown, G. (2004). Incivilities, place attachment and crime: Block and individual effects. Journal of Environmental Psychology, 24, 359-371. <br> Kasarda, J. D., & Janowitz, M. (1974). Community attachment in mass society. American Sociological Review, 39, 328-339. <br> Lewicka, M. (2005). Ways to make people active: Role of place attachment, cultural capital and neighborhood ties. Journal of Environmental Psychology, 4, 381-395. <br> Mesch, G. S., & Manor, O. (1998). Social ties, environmental perception and local attachment. Environment and Behavior, 30, 504-519. <br> Moser, G., Ratiu, E., & Fleury-Bahi, G. (2002). Appropriation and interpersonal relations. From Dwelling to City through the neighborhood. Environment and Behavior, 34,122-136. <br> Ringel, N. B., & Finkelstein, J. C. (1991). Differentiating neighborhood satisfaction and neighborhood attachment among urban residents. Basic and Applied Social Psychology, 12,177-193. </span>  ",
  },
  interpersonal_processes_trust: {
    title: "Interpersonal Processes &#8594; Trust",
    explanation:
      "Interpersonal and social exchanges are thought to evolve relationships into trusting, mutual commitments <span style='color:gray'>[Blau 1969]</span>. Over time, interpersonal trust between team members will also influence the state of team trust <span style='color:gray'>[Marks 2001]</span>.        <br><br> <span style='color:gray'> Blau, P. (1969). The dynamics of bureaucracy: A study of interpersonal relations in two government agencies. Chicago: University of Chicago Press. <br> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.     </span>  ",
  },
  stress_regulation_social_support: {
    title: "Social Support &#8594; Stress Regulation",
    explanation:
      "The buffering model of social support hypothesizes that social support acts as a buffer to stress and allows an individual to more effectively manage and regulate stress  <span style='color:gray'> [Cohen and Willis 1985]</span>. Social support has been shown to reduce physiological distress, including anxiety and depression  <span style='color:gray'> [Fleming 1982][Lin 1999][Sarason 1997][Taylor 2011]</span>.        <br><br><br> <span style='color:gray'> Cohen, S., & Wills, T. A. (1985). Stress, Social Support, and the Buffering Hypothesis. Psychological Bulletin, 98(2), 310–357. <br> Fleming, R., Baum, A., Gisriel, M. M., & Gatchel, R. J. (1982). Mediating influences of social support on stress at Three Mile Island. Journal of human stress, 8(3), 14–22. <br> Lin, N., Ye, X., & Ensel, W. M. (1999). Social support and depressed mood: a structural analysis. Journal of health and social behavior, 40(4), 344–359. <br> Sarason, B. R., Sarason, I. G., & Gurung, R. A. R. (1997). Close personal relationships and health outcomes: A key to the role of social support. In S. Duck (Ed.), Handbook of personal relationships: Theory, research and interventions (2nd ed., pp. 547–573). John Wiley & Sons, Inc. <br> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. </span>        ",
  },
  stress_regulation_group_living: {
    title: "Group Living &#8594; Stress Regulation",
    explanation:
      "A crew with good group living skills can act as a buffer to the negative effects of a stressful environment <span style='color:gray'> [Landon 2024]</span>.      <br><br><br> <span style='color:gray'> Landon, L. B., Miller, J. C., Bell, S. T., & Roma, P. G. (2024). When people start getting real: The Group Living Skills Survey for extreme work environments. Frontiers in Psychology, 15, 1348119. </span>  ",
  },
  stress_regulation_privacy: {
    title: "Privacy &#8594; Stress Regulation",
    explanation:
      "The lack of privacy can lead to stress <span style='color:gray'>[Harrison 1991]</span>. Privacy is critical, particularly in long-duration missions and in isolated and confined environments, to afford a personal space away from social and work stressors <span style='color:gray'>[Kanas and Manzy 2008][Simon 2011][Landon and Paoletti 2020]</span>.         <br><br><br> <span style='color:gray'> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. <br> Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). Springer Science + Business Media; Microcosm Press. <br> Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). <br> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press.  </span>        ",
  },
  stress_regulation_family_and_friends: {
    title: "Family and Friends &#8594; Stress Regulation",
    explanation:
      "During spaceflight, conference calls with and care packages from friends and family are important to help crewmembers mitigate stress <span style='color:gray'>[Kanas and Manzey 2008][Sipes and Ark 2005][Deming and Vasterling 2017]</span>.        <br><br><br> <span style='color:gray'> Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). El Segundo, CA: Microcosm Press. <br> Sipes, W. E., & Ark, S. T. V. (2005). Operational Behavioral Health and Performance Resources for International Space Station Crews and Families. Aviation, Space, and Environmental Medicine, 76(6). <br> Deming, C. A., & Vasterling, J. J. (2017). Workplace social support and behavioral health prior to long-duration spaceflight. Aerospace medicine and human performance, 88(6), 565-573. </span> ",
  },
  stress_regulation_resilience: {
    title: "Resilience &#8594; Stress Regulation",
    explanation:
      "From a survey of 2000+ individuals, it was found that higher resilience has a protective effect against stress, but the effect diminishes in high-strain, difficult work environments. The relationship between hardiness and stress are mixed. Hardiness has been found to regulate stress <span style='color:gray'> [Pengilly and Dowd 2000]</span>, but other investigators have not found that hardiness precludes negative reactions to adverse events <span style='color:gray'> [Cohen and Edwards 1989]</span> – which may be a similar phenomenon to the limited protective effect resilience has on challenging work environments.         <br><br><br> <span style='color:gray'> Pengilly, J. W. and Dowd, E. T. (2000) Hardiness and social support as moderators of stress. Journal ofClinical Psychology, 56, 813–20. <br> Cohen, S. and Edwards, J. (1989) Personality characteristics as moderators of the relationship between stress and health. In R. W. Neufeld (ed.), Advances in investigations of psychological stress. New York: Wiley. </span>",
  },
  stress_regulation_psychological_resources: {
    title: "Psychological Resources &#8594; Stress Regulation",
    explanation:
      "Based on a comprehensive literature review in the stress management field of over 150 papers describing over 1000 non-unique techniques employed, cognitive-behavioral techniques was the most commonly used for stress regulation, followed by imagery/meditation techniques <span style='color:gray'>[Ong 2004]</span>. In studies with psychological support provided, participants showed decreased vulnerability to stress and hardiness <span style='color:gray'>[Santos-Ruiz 2017][Sahranavard 2019]</span>.        <br><br><br> <span style='color:gray'> Ong, L., Linden, W., & Young, S. (2004). Stress management: what is it?. Journal of psychosomatic research, 56(1), 133-137. <br> Santos-Ruiz, A., Robles-Ortega, H., Pérez-García, M., & Peralta-Ramírez, M. I. (2017). Effects of the cognitive-behavioral therapy for stress management on executive function components. The Spanish journal of psychology, 20, E11. <br> Sahranavard, S., Esmaeili, A., Salehiniya, H., & Behdani, S. (2019). The effectiveness of group training of cognitive behavioral therapy-based stress management on anxiety, hardiness and self-efficacy in female medical students. Journal of education and health promotion, 8(1), 49. </span>   ",
  },
  stress_regulation_density: {
    title: "Density &#8594; Stress Regulation",
    explanation:
      "In one study of urban residents (n = 57), high social density was significantly correlated with high reports of stress [Fleming 1987]. One theory is that high density situations lead to perceived loss of control, and low levels of control are associated with stress [Cohen 1980][Fleming 1987].         <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906. <br> Cohen, Sheldon. (1980). Aftereffects of stress on human performance and social behavior: A review of research and theory. Psychological bulletin. 88. 82-108.  </span> ",
  },
  stress_regulation_interpersonal_processes: {
    title: "Interpersonal Processes &#8594; Stress Regulation",
    explanation:
      "Social activities can aid in stress management <span style='color:gray'>[Marks 2001]</span>. A study of 60 dyadic couples (romantic and platonic) showed that a brief (10 minute) affectionate interaction prior to a stressful experience acted as a buffer, limiting the magnitude of cardiovascular arousal <span style='color:gray'>[Pauley 2015]</span>.        <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  <br> Pauley, P. M., Floyd, K., & Hesse, C. (2015). The stress-buffering effects of a brief dyadic interaction before an acute stressor. Health communication, 30(7), 646-659.        </span>  ",
  },
  stress_regulation_place_attachment: {
    title: "Place Attachment &#8594; Stress Regulation",
    explanation:
      "Highly-attached places often have restorative qualities <span style='color:gray'>[Korpela 1989]</span> and provide a safe, comfortable environment that promotes stress relief and self-regulation <span style='color:gray'>[Scannell and Gifford 2010]</span>.       <br><br><br> <span style='color:gray'> Korpela, K. M. (1989). Place-identity as a product of environmental self-regulation. Journal of Environmental Psychology, 9, 241–256. <br> Scannell, L., & Gifford, R. (2010). Defining place attachment: A tripartite organizing framework. Journal of Environmental Psychology, 30(1), 1–10. </span> ",
  },
  stress_regulation_sleep: {
    title: "Sleep &#8594; Stress Regulation",
    explanation:
      "Sleep is a resource for stress regulation <span style='color:gray'>[Drake 2003]</span>. In one study (n=49), it was found that sleep quality and duration had a protective effect on stress and pain for chronic patients <span style='color:gray'>[Hamilton 2007]</span>. In a work setting study (n=78), it was found that adequate sleep provided more resilience to menial tasks and greater emotion reward in challenging tasks <span style='color:gray'>[Zohar 2005]</span>.    <br><br><br> <span style='color:gray'> Drake, C.L., T. Roehrs and T. Roth. (2003). Insomnia causes, consequences, and therapeutics: An overview, Depression and Anxiety 18, pp. 163–176. <br> Hamilton, N. A., Catley, D., & Karlson, C. (2007b). Sleep and the affective response to stress and pain. Health Psychology, 26(3), 288. <br> Zohar, D., Tzischinsky, O., Epstein, R., & Lavie, P. (2005). The effects of sleep loss on medical residents' emotional reactions to work events: a cognitive-energy model. Sleep, 28(1), 47-54.       </span>   ",
  },
  stress_regulation_stress: {
    title: "Stress Regulation &#8594; Stress",
    explanation:
      "Individual variability in stress regulation (exposure, reactivity, recovery, and restoration) accounts for how stressed they may feel and how long it takes for the stress to be resolved <span style='color:gray'>[Williams 2009]</span>.        <br><br><br> <span style='color:gray'> Williams, P. G., Suchy, Y., & Rau, H. K. (2009). Individual differences in executive functioning: Implications for stress regulation. Annals of Behavioral Medicine, 37(2), 126-140. </span>        ",
  },
  stress_regulation_depression: {
    title: "Stress Regulation &#8594; Depression",
    explanation:
      "Effective regulation strategies have been linked to improved mental wellness <span style='color:gray'>[Gross and John 2003][Ochsner and Gross 2005][Troy 2010]</span>. In a study of over 150 college students, it was found that emotional regulation fully mediate the relationship between interpersonal stress and depression; while interpersonal stress does not have a significant relationship to depression, maladaptive regulation strategies contribute to an increase in depression after stressful events <span style='color:gray'>[Moriya and Takahashi 2013]</span>.     <br><br><br> <span style='color:gray'> Gross, J. J., & John, O. P. (2003). Individual differences in two emotion regulation processes: Implications for affect, relationships, and well-being. Journal of Personality and Social Psychology, 85, 348–362. <br> Ochsner, K. N., & Gross, J. J. (2005). The cognitive control of emotion. Trends in Cognitive Sciences, 9, 242–249. <br>  Troy, A. S., Wilhelm, F. H., Shallcross, A. J., & Mauss, I. B. (2010). Seeing the silver lining: Cognitive reappraisal ability moderates the relationship between stress and depressive symptoms. Emotion, 10, 783–795. <br> Moriya, J., & Takahashi, Y. (2013). Depression and interpersonal stress: The mediating role of emotion regulation. Motivation and Emotion, 37, 600-608.        </span>        ",
  },
  stress_regulation_anxiety: {
    title: "Stress Regulation &#8594; Anxiety",
    explanation:
      "Effective regulation strategies have been linked to improved mental wellness <span style='color:gray'>[Gross and John 2003][Ochsner and Gross 2005][Troy 2010]</span>. Anxiety disorders have been characterized as dysfunction in systems regulating stress <span style='color:gray'>[Mineka and Zinbarg 1996][Nolte 2011]</span>. Excessive anxiety and worry of situations are also symptoms of dysregulation of stress.           <br><br><br> <span style='color:gray'> Gross, J. J., & John, O. P. (2003). Individual differences in two emotion regulation processes: Implications for affect, relationships, and well-being. Journal of Personality and Social Psychology, 85, 348–362. <br> Ochsner, K. N., & Gross, J. J. (2005). The cognitive control of emotion. Trends in Cognitive Sciences, 9, 242–249. <br>  Troy, A. S., Wilhelm, F. H., Shallcross, A. J., & Mauss, I. B. (2010). Seeing the silver lining: Cognitive reappraisal ability moderates the relationship between stress and depressive symptoms. Emotion, 10, 783–795. <br> Mineka, S., and Zinbarg, R. (1996). Conditioning and ethological models of anxiety disorders: stress-in-dynamic-context anxiety models. Perspectives on anxiety, panic, and fear. Nebr. Symp. Motiv. 43, 135–211. <br>   Nolte, T., Guiney, J., Fonagy, P., Mayes, L. C., & Luyten, P. (2011). Interpersonal stress regulation and the development of anxiety disorders: an attachment-based developmental framework. Frontiers in behavioral neuroscience, 5, 55.  </span>        ",
  },
  stress_regulation_kinship: {
    title: "Stress Regulation &#8594; Kinship",
    explanation:
      "During a study of 6 crewmembers in isolation and confinement for 520 days, two of the crewmember with the highest ratings of stress accounted for 85% of the conflicts <span style='color:gray'>[Basner 2014]</span>. Coping styles that center acceptance and replanning are also considered “positive” regulation strategies, as opposed to blaming others <span style='color:gray'>[Martin 2005]</span>, can have positive effects for interpersonal closeness.        <br><br><br> <span style='color:gray'> Basner M, Dinges DF, Mollicone DJ, Savelev I, Ecker AJ, Di Antonio A, Jones CW, Hyder EC, Kan K, Morukov BV, Sutton JP. Psychological and behavioral changes during confinement in a 520-day simulated interplanetary mission to mars. PLoS One. 2014 Mar 27;9(3):e93298. <br> Martin, R. C., & Dahlen, E. R. (2005). Cognitive emotion regulation in the prediction of depression, anxiety, stress, and anger. Personality and individual differences, 39(7), 1249-1260.        </span>        ",
  },
  place_attachment_supplies: {
    title: "Supplies &#8594; Place Attachment",
    explanation:
      "The distribution of personal items and decorating/furnishing rooms are an example of space appropriation, which can facilitate place attachment <span style='color:gray'>[Graumann 1976]</span>.         <br><br><br> <span style='color:gray'> Graumann, C. F. (1976). Concept of Appropriation.        </span>        ",
  },
  place_attachment_fixtures: {
    title: "Fixtures &#8594; Place Attachment",
    explanation:
      "Fixtures contribute to the habitability of a space. In particular, furnishings that enable the personalization of spaces – including decorating/furnishing rooms and  distribution of personal items – enable space appropriation, which in turn promotes place attachment <span style='color:gray'>[Graumann 1976]</span>.  <br><br><br> <span style='color:gray'> Graumann, C. F. (1976). Concept of Appropriation. </span>        ",
  },
  place_attachment_privacy: {
    title: "Privacy &#8594; Place Attachment",
    explanation:
      "Privacy is closely related to territoriality and space appropriation. For instance, one study of over 100 college students found that privacy regulation behaviors (i.e., managing one’s social contact) was correlated with adjustment to university life <span style='color:gray'>[Vinsel 1980]</span>. Private spaces are also often where one can perform place_attachment behavior and form stronger bonds to personalized areas. For instance, in a study of 18 pairs of confined sailors, it was found that the territoriality over the bed areas were enacted first, followed by more public areas (table and chairs) <span style='color:gray'>[Altman and Haythorn 1967]</span>.        <br><br><br> <span style='color:gray'> Vinsel, A., Brown, B. B., Altman, I., & Foss, C. (1980). Privacy regulation, territorial displays, and effectiveness of individual functioning. Journal of Personality and Social Psychology, 39(6), 1104–1115.     <br> Altman I, Haythorn WW. 1967. The ecology of isolated groups. Behav. Sci. 32:169–82. </span>        ",
  },
  place_attachment_reconfigurability: {
    title: "Reconfigurability &#8594; Place Attachment",
    explanation:
      "The ability to reconfigure and personalize a space is important to create and reflect a sense of attachment <span style='color:gray'>[Simon 2011][Rioux 2017]</span>.     <br><br><br> <span style='color:gray'>  Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). <br>  Rioux, L., Scrima, F., & Werner, C. M. (2017). Space appropriation and place attachment: University students create places. Journal of Environmental Psychology, 50, 60–68. </span> ",
  },
  place_attachment_interpersonal_processes: {
    title: "Interpersonal Processes &#8594; Place Attachment",
    explanation:
      "A commonly studied predictor of place attachment is social interaction <span style='color:gray'>[Bonaiuto 1999][Bonaiuto 2006][Brown 2004][Kasarda and Janowitz 1974][Lewicka 2005][Mesch and Manor 1998][Moser 2002][Ringel and Finkelstein 1991]</span>. The strength of community ties consistently positively predicts place attachment.    <br><br> <span style='color:gray'> Bonaiuto, M., Aiello, A., Perugini, M., Bonnes, M., & Ercolani, A. P. (1999). Multidimensional perception of residential environment quality and neighbourhood attachment in the urban environment. Journal of Environmental Psychology, 19,331-352. <br> Bonaiuto, M., Fornara, F., & Bonnes, M. (2006). Perceived residential environment quality in middle- and low-extension Italian cities. European Review of Applied Psychology, 56, 23-34. <br> Brown, B. B., Perkins, D. D., & Brown, G. (2004). Incivilities, place attachment and crime: Block and individual effects. Journal of Environmental Psychology, 24, 359-371. <br> Kasarda, J. D., & Janowitz, M. (1974). Community attachment in mass society. American Sociological Review, 39, 328-339. <br> Lewicka, M. (2005). Ways to make people active: Role of place attachment, cultural capital and neighborhood ties. Journal of Environmental Psychology, 4, 381-395. <br> Mesch, G. S., & Manor, O. (1998). Social ties, environmental perception and local attachment. Environment and Behavior, 30, 504-519. <br> Moser, G., Ratiu, E., & Fleury-Bahi, G. (2002). Appropriation and interpersonal relations. From Dwelling to City through the neighborhood. Environment and Behavior, 34,122-136. <br> Ringel, N. B., & Finkelstein, J. C. (1991). Differentiating neighborhood satisfaction and neighborhood attachment among urban residents. Basic and Applied Social Psychology, 12,177-193. </span>  ",
  },
  place_attachment_stress_regulation: {
    title: "Place Attachment &#8594; Stress Regulation",
    explanation:
      "Highly-attached places often have restorative qualities <span style='color:gray'>[Korpela 1989]</span> and provide a safe, comfortable environment that promotes stress relief and self-regulation <span style='color:gray'>[Scannell and Gifford 2010]</span>.       <br><br><br> <span style='color:gray'> Korpela, K. M. (1989). Place-identity as a product of environmental self-regulation. Journal of Environmental Psychology, 9, 241–256. <br> Scannell, L., & Gifford, R. (2010). Defining place attachment: A tripartite organizing framework. Journal of Environmental Psychology, 30(1), 1–10. </span> ",
  },
  place_attachment_autonomy: {
    title: "Place Attachment &#8594; Autonomy",
    explanation:
      "Place attachment provides security within the place or community, which in turn encourages greater exploration, confidence, and curiosity <span style='color:gray'>[Fried 2000]</span>.        <br><br><br> <span style='color:gray'> Fried, M. (2000). CONTINUITIES AND DISCONTINUITIES OF PLACE. Journal of Environmental Psychology, 20(3), 193–205.   </span> ",
  },
  place_attachment_nostalgia_homesickness: {
    title: "Place Attachment &#8594; Nostalgia/Homesickness",
    explanation:
      "Nostalgia and homesickness arise from the loss of people and places <span style='color:gray'>[Brown and Perkins 1992]</span>. Often following events of “disruption”, such as voluntary migration or involuntary displacement, feelings of homesickness are often experienced, multifaceted, and change in intensity over time <span style='color:gray'>[Brown and Perkins 1992]</span>. While promoting attachment to a new place or with new people can help, homesickness often arises independently of the quality of attachment in the new setting <span style='color:gray'>[Brown and Perkins 1992]</span>. <br> Place attachment to a home may induce homesickness when moving away from home. In a study of 200 college students in Italy, it was found that strong home attachment positively predicted homesickness <span style='color:gray'>[Scopelliti and Tiberio 2010]</span>. In more severe cases, dysfunctional place attachment/dependence can arise, particularly when the place that one wishes to return to is no longer possible <span style='color:gray'>[Fried 2000]</span>.     <br><br><br> <span style='color:gray'> Brown, B. B., & Perkins, D. D. (1992). Disruptions in Place Attachment. In I. Altman & S. M. Low (Eds.), Place Attachment (pp. 279–304). Springer US. <br>  Scopelliti, M., & Tiberio, L. (2010). Homesickness in University Students: The Role of Multiple Place Attachment. Environment and Behavior, 42(3), 335–350. <br>  Fried, M. (2000). CONTINUITIES AND DISCONTINUITIES OF PLACE. Journal of Environmental Psychology, 20(3), 193–205.   </span> ",
  },
  sleep_light_dark_cycles: {
    title: "Light/Dark Cycles &#8594; Sleep",
    explanation:
      "Circadian rhythms are internal ‘biological clocks’ comprising multiple systems across the body <span style='color:gray'>[Turek 1994]</span>. While the circadian rhythm continues regardless of external inputs (i.e., “freerunning” circadian rhythm, which is a little less than 24 hours), they are influenced, or entrained, by external cues <span style='color:gray'>[Vitaterna 2001]</span>. The most powerful of these is the light/dark cycle <span style='color:gray'>[Vitaterna 2001]</span>. The circadian rhythm modulates the sleep-wake cycle and desynchronized circadian rhythms can alter sleep patterns <span style='color:gray'>[Turek 1994]</span>. <br> In a study of altered light/dark cycles and disturbed sleep on the Space Shuttle (n=5), participants reported ~6.5hr/night of sleep on average, lower sleep quality compared to preflight baselines, more wakefulness, less slow-wave sleep, and sleep was unimproved by melatonin administration <span style='color:gray'>[Dijk 2001]</span>.     <br><br><br> <span style='color:gray'> Turek, F. W. (1994, January). Circadian rhythms. In Proceedings of the 1992 Laurentian Hormone Conference (pp. 43-90). Academic Press. <br> Vitaterna, M. H., Takahashi, J. S., & Turek, F. W. (2001). Overview of circadian rhythms. Alcohol research & health, 25(2), 85. <br>  Dijk, D.-J., Neri, D. F., Wyatt, J. K., Ronda, J. M., Riel, E., Ritz-De Cecco, A., Hughes, R. J., Elliott, A. R., Prisk, G. K., West, J. B., & Czeisler, C. A. (2001). Sleep, performance, circadian rhythms, and light-dark cycles during two space shuttle flights. American Journal of Physiology-Regulatory, Integrative and Comparative Physiology, 281(5), R1647–R1664. </span> ",
  },
  sleep_atmosphere: {
    title: "Atmosphere &#8594; Sleep",
    explanation:
      "Based on a review of 200 literature sources by Caddick 2018 on sleep for the normal healthy population, it was found that sleep is dependent on ambient temperature (which can be regulated with the aid of clothing and bedding) between 17 (with external insulation) and 28C and 40-60% relative humidity <span style='color:gray'>[Caddick 2018]</span>. The “thermoneutral zone” that allows for optimal maintenance of core and skin temperature is quite narrow, from 27.9 to 28.5 °C – within the zone, lower temperatures can enhance slow wave sleep and higher temperatures can facilitate sleep onset <span style='color:gray'>[Caddick 2018]</span>. Temperatures outside of this thermoneutral range may result in lowered sleep quality <span style='color:gray'>[Caddick 2018]</span>.         <br><br><br> <span style='color:gray'> Caddick, Z. A., Gregory, K., Arsintescu, L., & Flynn-Evans, E. E. (2018). A review of the environmental parameters necessary for an optimal sleep environment. Building and Environment, 132, 11–20. </span>  ",
  },
  sleep_acoustics: {
    title: "Acoustics &#8594; Sleep",
    explanation:
      "Based on a review of 200 literature sources on sleep for the normal healthy population, it was found that the sleep environment should be below 35dB, otherwise intermittent noises above this threshold have the potential to cause sleep disruption <span style='color:gray'>[Caddick 2018]</span>.        <br><br><br> <span style='color:gray'> Caddick, Z. A., Gregory, K., Arsintescu, L., & Flynn-Evans, E. E. (2018). A review of the environmental parameters necessary for an optimal sleep environment. Building and Environment, 132, 11–20. </span>        ",
  },
  sleep_lighting: {
    title: "lighting &#8594; Sleep",
    explanation:
      "Lighting is the primary entrainment factor for circadian rhythm regulation <span style='color:gray'>[Broadway and Arendt 1988]</span>. Lowered light levels and warm tones of light closer to the evening promotes the production of melatonin, which in turn promotes sleep desire <span style='color:gray'>[Karlen 2017]</span>. In recent years, the International Space Station has introduced a solid state lighting system in the crew quarters that has yielded preliminary results that light-responsive melatonin regulation is possible in the spaceflight environment <span style='color:gray'>[Brainard 2013]</span>.          <br><br><br> <span style='color:gray'> Broadway JW and Arendt J. (1988). Seasonal and bright light changes of the phase position of the human melatonin rhythms in Antarctica. Arctic Med Res; 47 (suppl 1): 201–03. <br> Karlen, M., Spangler, C., & Benya, J. R. (2017). Lighting design basics. John Wiley & Sons. <br>   Brainard, G. C., Coyle, W., Ayers, M., Kemp, J., Warfield, B., Maida, J., ... & Hanifin, J. P. (2013). Solid-state lighting for the International Space Station: Tests of visual performance and melatonin regulation. Acta Astronautica, 92(1), 21-28. </span>",
  },
  sleep_privacy: {
    title: "Privacy &#8594; Sleep",
    explanation:
      "Anecdotal evidence shows that the need for privacy often manifests itself in a need to be alone <span style='color:gray'>[Stuster 1996]</span>, for instance in a sleep area. In isolation, a bed is often the first thing people claim as their own, showing the importance of a personal sleeping area <span style='color:gray'>[Altman and Haythorn 1967]</span>.        <br><br><br> <span style='color:gray'> Stuster, J. (1996). Bold endeavors: Lessons from polar and space exploration. Naval Institute Press. <br> Altman I, Haythorn WW. 1967. The ecology of isolated groups. Behav. Sci. 32:169–82. </span>        ",
  },
  sleep_reconfigurability: {
    title: "Reconfigurability &#8594; Sleep",
    explanation:
      "Insufficient control over personal environments (e.g., temperature, humidity, noise), particularly during sleep, can result in poorer sleep quality <span style='color:gray'>[Simon 2011]</span>.        <br><br><br> <span style='color:gray'>  Simon, M., Whitmire, A., Otto, C., & Neubek, D. (2011). Factors impacting habitable volume requirements: Results from the 2011 Habitable Volume Workshop (No. S-1114). </span> ",
  },
  sleep_cognitive_workload: {
    title: "Cognitive Workload &#8594; Sleep",
    explanation:
      "From the largest study of sleep and neurobehavioral functioning in 6-month stays on the ISS, elevated workload was found to be associated with shorter sleep durations. Observational data suggests that when the workload demand is low, astronauts can sleep longer if provided the opportunity <span style='color:gray'>[Jones 2022]</span>.         <br><br><br> <span style='color:gray'> Jones, C. W., Basner, M., Mollicone, D. J., Mott, C. M., & Dinges, D. F. (2022). Sleep deficiency in spaceflight is associated with degraded neurobehavioral functions and elevated stress in astronauts on six-month missions aboard the International Space Station. Sleep, 45(3), zsac006. </span>   ",
  },
  sleep_fatigue: {
    title: "Sleep &#8594; Fatigue",
    explanation:
      "Insufficient sleep or decreased sleep quality can lead to fatigue. Based on a review of numerous nation-wide studies of air traffic controllers with shifted sleep schedules (n > 100,000), it was found that most ATCs experience elevated chronic fatigue <span style='color:gray'>[Nealley and Gawron 2015]</span>. Reviews of shift work studies have also revealed a higher prevalence of disturbed sleep and chronic fatigue in sleep-shifted workers as compared to their day-shift counterparts <span style='color:gray'>[Harrington 2001][Waterhouse 1992]</span>. Through the most comprehensive spaceflight sleep study done to date, it was found that astronauts (on average) sleep less than the recommended 7 hours per night, and with decreased sleep, higher levels of physical and mental fatigue  <span style='color:gray'>[Jones 2022]</span>.           <br><br><br> <span style='color:gray'> Nealley, M. A., & Gawron, V. J. (2015). The effect of fatigue on air traffic controllers. The International Journal of Aviation Psychology, 25(1), 14-47. <br> Harrington, J. M. (2001). Health effects of shift work and extended hours of work. Occupational and Environmental medicine, 58(1), 68-72. <br> Waterhouse, J. M., Minors, D. S., & Folkard, S. (1992). Shiftwork, health and safety: an overview of the scientific literature 1978-1990. HSE books. </span>   ",
  },
  sleep_stress_regulation: {
    title: "Sleep &#8594; Stress Regulation",
    explanation:
      "Sleep is a resource for stress regulation <span style='color:gray'>[Drake 2003]</span>. In one study (n=49), it was found that sleep quality and duration had a protective effect on stress and pain for chronic patients <span style='color:gray'>[Hamilton 2007]</span>. In a work setting study (n=78), it was found that adequate sleep provided more resilience to menial tasks and greater emotion reward in challenging tasks <span style='color:gray'>[Zohar 2005]</span>.    <br><br><br> <span style='color:gray'> Drake, C.L., T. Roehrs and T. Roth. (2003). Insomnia causes, consequences, and therapeutics: An overview, Depression and Anxiety 18, pp. 163–176. <br> Hamilton, N. A., Catley, D., & Karlson, C. (2007b). Sleep and the affective response to stress and pain. Health Psychology, 26(3), 288. <br> Zohar, D., Tzischinsky, O., Epstein, R., & Lavie, P. (2005). The effects of sleep loss on medical residents' emotional reactions to work events: a cognitive-energy model. Sleep, 28(1), 47-54.       </span>   ",
  },
  sleep_depression: {
    title: "Sleep &#8594; Depression",
    explanation:
      "Reviews of shift work studies have also revealed a higher prevalence of disturbed sleep and depression in sleep-shifted workers as compared to their day-shift counterparts <span style='color:gray'>[Harrington 2001][Waterhouse 1992]</span>. A study of over 500 non-clinical participants revealed that those with optimal sleep (greater than 6 and less than 8.5 hours) reported fewer symptoms of depression <span style='color:gray'>[Hamilton 2007]</span>. This particular study removed highly depressed individuals (>10 on the Beck Depression Index) to manage for the confounding effect of depression on increased sleep.         <br><br><br> <span style='color:gray'> Harrington, J. M. (2001). Health effects of shift work and extended hours of work. Occupational and Environmental medicine, 58(1), 68-72. <br> Waterhouse, J. M., Minors, D. S., & Folkard, S. (1992). Shiftwork, health and safety: an overview of the scientific literature 1978-1990. HSE books. <br> Hamilton, N. A., Nelson, C. A., Stevens, N., & Kitzman, H. (2007). Sleep and psychological well-being. Social Indicators Research, 82, 147-163. </span>   ",
  },
  sleep_anxiety: {
    title: "Sleep &#8594; Anxiety",
    explanation:
      "Reviews of shift work studies have also revealed a higher prevalence of disturbed sleep and anxiety in sleep-shifted workers as compared to their day-shift counterparts <span style='color:gray'>[Harrington 2001][Waterhouse 1992]</span>. A study of over 500 non-clinical participants revealed that those with optimal sleep (greater than 6 and less than 8.5 hours) reported fewer symptoms of anxiety <span style='color:gray'>[Hamilton 2007]</span>.         <br><br><br> <span style='color:gray'> Harrington, J. M. (2001). Health effects of shift work and extended hours of work. Occupational and Environmental medicine, 58(1), 68-72. <br> Waterhouse, J. M., Minors, D. S., & Folkard, S. (1992). Shiftwork, health and safety: an overview of the scientific literature 1978-1990. HSE books. <br> Hamilton, N. A., Nelson, C. A., Stevens, N., & Kitzman, H. (2007). Sleep and psychological well-being. Social Indicators Research, 82, 147-163.  </span>   ",
  },
  sleep_physical_health: {
    title: "Sleep &#8594; Physical Health",
    explanation:
      "<span style='font-size:9pt'>Sleep is critical for maintaining health <span style='color:gray'>[Watson 2015]</span>. It has been proposed and found in some studies that sleep quality may be more critical than sleep duration <span style='color:gray'>[Bower 2010][Grander 2006]</span>. In a study of over 900 participants, it was found that the duration and quality of sleep predict physical wellbeing <span style='color:gray'>[Wong 2006]</span>. Reviews of shift work studies have also revealed a higher prevalence of disturbed sleep, and adverse cardiovascular, gastrointestinal, and reproductive effects in sleep-shifted workers as compared to their day-shift counterparts <span style='color:gray'>[Harrington 2001][Waterhouse 1992]</span>.        <br><br><br> <span style='color:gray'> Watson, N. F. et al. (2015). Recommended Amount of Sleep for a Healthy Adult: A Joint Consensus Statement of the American Academy of Sleep Medicine and Sleep Research Society. Journal of Clinical Sleep Medicine, 11(06), 591–592. <br> Bower, B., Bylsma, L. M., Morris, B. H., & Rottenberg, J. (2010). Poor reported sleep quality predicts low positive affect in daily life among healthy and mood‐disordered persons. Journal of sleep research, 19(2), 323-332. <br> Grandner, M. A., Kripke, D. F., Yoon, I. Y., & Youngstedt, S. D. (2006). Criterion validity of the Pittsburgh Sleep Quality Index: Investigation in a non-clinical sample. Sleep and biological rhythms, 4, 129-136. <br> Wong, M. L. et al. (2013). The interplay between sleep and mood in predicting academic functioning, physical health and psychological health: A longitudinal study. Journal of psychosomatic research, 74(4), 271-277. <br> Harrington, J. M. (2001). Health effects of shift work and extended hours of work. Occupational and Environmental medicine, 58(1), 68-72. <br> Waterhouse, J. M., Minors, D. S., & Folkard, S. (1992). Shiftwork, health and safety: an overview of the scientific literature 1978-1990. HSE books. </span> </span>   ",
  },
  sleep_crew_performance: {
    title: "Sleep &#8594; Crew Performance",
    explanation:
      "In Earth and space studies, sleep restriction of less than 6 hours per night was correlated with decreased vigilance performance and working memory task performance  <span style='color:gray'>[Dinges 1997][Jones 2022][Van Dongen 2003]</span>. Rapid Eye Movement (REM) sleep and slow-wave (NREM) sleep facilitate memory, learning, and cognition  <span style='color:gray'>[Cibrian-Llanderal 2018]</span>. In one study (n=48), chronic sleep restriction for 4-6 hours produced comparable cognitive performance impairment to those found in 1-2 days of total sleep deprivation  <span style='color:gray'>[Van Dongen 2003]</span>.         <br><br><br> <span style='color:gray'> Dinges  DF, et  al. Cumulative sleepiness, mood disturbance, and psychomotor vigilance performance decrements during a week of sleep restricted to 4–5 hours per night. Sleep. 1997;20(4):267–277. <br> Jones, C. W., Basner, M., Mollicone, D. J., Mott, C. M., & Dinges, D. F. (2022). Sleep deficiency in spaceflight is associated with degraded neurobehavioral functions and elevated stress in astronauts on six-month missions aboard the International Space Station. Sleep, 45(3). <br> Van Dongen, H. P., Maislin, G., Mullington, J. M., & Dinges, D. F. (2003). The cumulative cost of additional wakefulness: dose-response effects on neurobehavioral functions and sleep physiology from chronic sleep restriction and total sleep deprivation. Sleep, 26(2), 117-126. <br> Cibrian-Llanderal, T., Melgarejo-Gutierrez, M., & Hernandez-Baltazar, D. (2018). Stress and cognition: Psychological basis and support resources. Health and academic achievement, 11(10.5772).        </span>   ",
  },
  crew_performance_conscientiousness: {
    title: "Conscientiousness &#8594; Crew Performance",
    explanation:
      "Meta-analyses reveal that conscientiousness is the most consistent factor predicting work performance and desirable work behaviors (e.g., integrity) <span style='color:gray'>[Matthews 2003]</span>.     <br><br><br> <span style='color:gray'>Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.    </span> ",
  },
  crew_performance_atmosphere: {
    title: "Atmosphere &#8594; Crew Performance",
    explanation:
      "Standards for the built environment suggest that a CO2 concentration of 400-800 ppm (parts per million) is suitable for habitation <span style='color:gray'>[European Committee for Standardization 2007]</span>. On the International Space Station, minimum concentrations of CO2 are approximately 3000 ppm, and can reach greater than 6500 ppm <span style='color:gray'>[Georgescu 2007]</span>. High concentrations of CO2 affects cognition negatively and can result in physiological symptoms, including headaches and congestion <span style='color:gray'>[Law 2014]</span>. As an example, keep the risk of headaches below 1% (the general “rule of thumb” level of risk for spaceflight for NASA), CO2 concentrations would need to be below 3300 ppm across a 7-day average <span style='color:gray'>[Law 2014]</span>. However, a head-down bed rest study (n=19) did not find significant differences in cognition speed with vs. without elevated CO2 concentrations <span style='color:gray'>[Basner 2021]</span>.         <br><br><br> <span style='color:gray'> EUROPEAN COMMITTEE FOR STANDARDIZATION, En 13779, Management, 2007, p. 72. <br> Georgescu, M. R., Meslem, A., & Nastase, I. (2020). Accumulation and spatial distribution of CO2 in the astronaut's crew quarters on the International Space Station. Building and Environment, 185, 107278. <br>  Law, J., Van Baalen, M., Foy, M., Mason, S. S., Mendez, C., Wear, M. L., ... & Alexander, D. (2014). Relationship between carbon dioxide levels and reported headaches on the international space station. Journal of occupational and environmental medicine, 56(5), 477-483. <br> Basner, M., Stahn, A. C., Nasrini, J., Dinges, D. F., Moore, T. M., Gur, R. C., ... & Laurie, S. S. (2021). Effects of head-down tilt bed rest plus elevated CO2 on cognitive performance. Journal of Applied Physiology, 130(4), 1235-1246.  </span>  ",
  },
  crew_performance_acoustics: {
    title: "Acoustics &#8594; Crew Performance",
    explanation:
      "Excessive noise can lead to physiological and psychological symptoms, including temporary/permanent hearing loss, headaches, discomfort, fatigue, irritability, distraction, decreased productivity, and inability to concentrate <span style='color:gray'> [Allen 2018]</span>.    <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier.   </span>        ",
  },
  crew_performance_privacy: {
    title: "Privacy &#8594; Crew Performance",
    explanation:
      "In spaceflight missions, privacy is necessary for mental restoration and supports performance, but must be in moderation to avoid isolation within teams <span style='color:gray'>[Kearney 2016]</span>.        <br><br><br> <span style='color:gray'> Kearney, A. R. (2016). Team health and performance in spacefight habitats risks, countermeasures, and research recommendations (NASA/TM-2016-219274). Houston, TX: NASA         </span>        ",
  },
  crew_performance_ergonomics: {
    title: "Ergonomics &#8594; Crew Performance",
    explanation:
      "Discomfort (physical, cognitive, or psychological) due to incompatibilities with interfaces also adversely impacts performance through degraded quantity or quality (e.g., errors) <span style='color:gray'>[Stanton 2005]</span>.         <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. </span>        ",
  },
  crew_performance_cognitive_workload: {
    title: "Cognitive Workload &#8594; Crew Performance",
    explanation:
      "The type of cognitive workload may be important as well. Meaningful work promotes performance and satisfaction <span style='color:gray'>[Landon 2024]</span>; interesting work also allows cognitive resources to be allocated to the work, as opposed to overcoming the tedium of the work <span style='color:gray'>[Warm 2018]</span>.        <br><br><br> <span style='color:gray'> Landon, L. B., Doerr, A., Khader, A., Bell, S., Roma, P. G., & Dinges, D. F. (2024, February). Meaningful Work as a Resilience Countermeasure in Extreme Environments. In Human Research Program-Investigators Working Group (HRP-IWG) Workshop. <br> Warm, J. S., Matthews, G., & Finomore Jr, V. S. (2018). Vigilance, workload, and stress. In Performance under stress (pp. 131-158). CRC Press. </span> ",
  },
  crew_performance_transition_processes: {
    title: "Transition Processes &#8594; Crew Performance",
    explanation:
      "A shared mental model, situation awareness, and communication of expectations to the entire team is necessary for accomplishing goals effectively. Teams that abbreviate or ignore the planning processes are at risk of misdirecting their attention and resources until it’s too late to recover <span style='color:gray'>[Gersick 1988][Marks 2001]</span>. When teams are unable to plan, this forces them to rely on past experience or improvisation, which can be difficult for complex and/or novel tasks <span style='color:gray'>[Marks 2001]</span>.     <br><br><br> <span style='color:gray'> Gersick, C. J. G. (1988). Time and transition in work teams: Toward a new model of group development. Academy of Management Journal, 31: 9-41. <br> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  </span> ",
  },
  crew_performance_action_processes: {
    title: "Action Processes &#8594; Crew Performance",
    explanation:
      "During the action phase, critical processes include monitoring and providing effective feedback on the progress/status of resources, environmental/system conditions, and team members. These processes are important to ensure the team is aware and in sync with each other and the environment, so adjustments can be made to reach goals successfully [Marks 2001].     <br><br><br><span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  </span>   ",
  },
  crew_performance_interpersonal_processes: {
    title: "Interpersonal Processes &#8594; Crew Performance",
    explanation:
      "Low motivation levels can decrease the individual effort expended, thereby decreasing the overall team performance <span style='color:gray'>[Marks 2001]</span>.   <br><br><br> <span style='color:gray'>Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  </span>  ",
  },
  crew_performance_sleep: {
    title: "Sleep &#8594; Crew Performance",
    explanation:
      "In Earth and space studies, sleep restriction of less than 6 hours per night was correlated with decreased vigilance performance and working memory task performance  <span style='color:gray'>[Dinges 1997][Jones 2022][Van Dongen 2003]</span>. Rapid Eye Movement (REM) sleep and slow-wave (NREM) sleep facilitate memory, learning, and cognition  <span style='color:gray'>[Cibrian-Llanderal 2018]</span>. In one study (n=48), chronic sleep restriction for 4-6 hours produced comparable cognitive performance impairment to those found in 1-2 days of total sleep deprivation  <span style='color:gray'>[Van Dongen 2003]</span>.         <br><br><br> <span style='color:gray'> Dinges  DF, et  al. Cumulative sleepiness, mood disturbance, and psychomotor vigilance performance decrements during a week of sleep restricted to 4–5 hours per night. Sleep. 1997;20(4):267–277. <br> Jones, C. W., Basner, M., Mollicone, D. J., Mott, C. M., & Dinges, D. F. (2022). Sleep deficiency in spaceflight is associated with degraded neurobehavioral functions and elevated stress in astronauts on six-month missions aboard the International Space Station. Sleep, 45(3). <br> Van Dongen, H. P., Maislin, G., Mullington, J. M., & Dinges, D. F. (2003). The cumulative cost of additional wakefulness: dose-response effects on neurobehavioral functions and sleep physiology from chronic sleep restriction and total sleep deprivation. Sleep, 26(2), 117-126. <br> Cibrian-Llanderal, T., Melgarejo-Gutierrez, M., & Hernandez-Baltazar, D. (2018). Stress and cognition: Psychological basis and support resources. Health and academic achievement, 11(10.5772).        </span>   ",
  },
  physical_health_isolated: {
    title: "Isolated &#8594; Physical Health",
    explanation:
      "Social isolation is a major risk for mortality. The positive impact of social ties on health is significant, with its effect size on the same scale as smoking, obesity, and physical activity <span style='color:gray'>[House 1988][Taylor 2011]</span>. Pathways for social support linking to physical health are varied, including stress regulation <span style='color:gray'>[Taylor 2011]</span>, and promotion of and adherence to healthy habits <span style='color:gray'>[Carlson 2011][Wilson and Ampey-Thornhill 2011]</span>.        <br><br><br> <span style='color:gray'> House, J. S., Landis, K. R., & Umberson, D. (1988). Social relationships and health. Science (New York, N.Y.), 241(4865), 540–545. <br> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. <br> Carlson, L. E., Goodey, E., Bennett, M. H., Taenzer, P., & Koopmans, J. (2002). The addition of social support to a community-based large-group behavioral smoking cessation intervention: Improved cessation rates and gender differences. Addictive Behaviors, 27, 547-559. <br> Wilson DK, Ampey-Thornhill G. The role of gender and family support on dietary compliance in an African American adolescent hypertension prevention study. Ann Behav Med. 2001;23(1):59-67. </span> ",
  },
  physical_health_social_support: {
    title: "Social Support &#8594; Physical Health",
    explanation:
      "During a longitudinal study of nearly 7000 participants and a 9 year period, epidemiologists found that having social contacts predicts increased lifespan after controlling for socioeconomic status  <span style='color:gray'> [Berkman and Syme 1979]</span>.       <br><br><br> <span style='color:gray'> Berkman, L. F., & Syme, S. L. (1979). Social networks, host resistance, and mortality: a nine-year follow-up study of Alameda County residents. American journal of epidemiology, 109(2), 186–204.    </span>        ",
  },
  physical_health_conscientiousness: {
    title: "Conscientiousness &#8594; Physical Health",
    explanation:
      "Conscientiousness may be a predictor for following medical advice and regimens <span style='color:gray'>[Christensen and Smith 1995]</span>.     <br><br><br> <span style='color:gray'>Christensen, A. J. and Smith, T. W. (1995) Personality and patient adherence: Correlates of the five-factor model in renal analysis. Journal ofBehavioral Medicine, 18, 305–13.        </span> ",
  },
  physical_health_genetics: {
    title: "Genetics &#8594; Physical Health",
    explanation:
      "Genes contribute to predisposition to chronic illnesses and diseases, physical activity, and aging <span style='color:gray'>[Kujala 2011]</span>. Telomere (DNA-protein complexes capping chromosome ends) shortening may be correlated to physical inactivity and chronic diseases <span style='color:gray'>[Puterman 2010]</span>.        <br><br><br> <span style='color:gray'> Kujala, U. M. (2011). Physical activity, genes, and lifetime predisposition to chronic disease. European Review of Aging and Physical Activity, 8(1), 31–36. <br> Puterman E, Lin J, Blackburn E, O'Donovan A, Adler N, Epel E (2010) The power of exercise: buffering the effect of chronic stress on telomere length. PLoS ONE 5:e10837. </span> ",
  },
  physical_health_training_and_preparation: {
    title: "Training and Preparation &#8594; Physical Health",
    explanation:
      "Training comprise fitness regimes and preparation of skills to maintain physical and physiological health in space <span style='color:gray'>[Steimle and Norberg 2013]</span>.       <br><br><br> <span style='color:gray'> Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg.</span>",
  },
  physical_health_medical_capability: {
    title: "Medical Capability &#8594; Physical Health",
    explanation:
      "Physical health is maintained when the capability matches or exceeds the medical needs. Medical needs may be dependent on initial conditions and remain high even with access to medical care. Based on a study of nearly 300 Iraqi refugees in southeastern Michigan, 100% and 99% of respondents indicated they needed medical and dental care, respectively, which remained consistent in the first two years of arrival even when provided consistent access to medical care <span style='color:gray'> [Wright 2016]</span>.          <br><br><br> <span style='color:gray'> Wright, A.M., Aldhalimi, A., Lumley, M.A. et al. (2016). Determinants of resource needs and utilization among refugees over time. Soc Psychiatry Psychiatr Epidemiol 51, 539–549.</span>",
  },
  physical_health_exercise_equipment: {
    title: "Exercise Equipment &#8594; Physical Health",
    explanation:
      "Current exercise protocols are necessary to mitigate adverse effects of musculoskeletal deconditioning due to the microgravity environment, but decreases in muscle strength/mass and cardiorespiratory performance were found even in 6 month spaceflights (n=46) <span style='color:gray'>[Scott 2023]</span>.         <br><br><br> <span style='color:gray'> Scott, J. M., Feiveson, A. H., English, K. L., Spector, E. R., Sibonga, J. D., Dillon, E. L., Ploutz-Snyder, L., & Everett, M. E. (2023). Effects of exercise countermeasures on multisystem function in long duration spaceflight astronauts. Npj Microgravity, 9(1), 11. </span>     ",
  },
  physical_health_altered_gravity: {
    title: "Altered Gravity &#8594; Physical Health",
    explanation:
      "Physical adaptation to the microgravity environment causes a myriad of physiological changes, including cardiovascular deconditioning, bone & muscle atrophy, and neurological changes <span style='color:gray'>[Norsk 2021]</span>. Fluid shifts due to the removal of the hydrostatic gradient provided by 1g causes cardiovascular changes, phenomena known as ‘puffy face’ and ‘bird legs’, congestion, and is thought to play a role in inducing SANS (Spaceflight Associated Neuro-ocular Syndrome - a series of intracranial and ocular changes) <span style='color:gray'>[Stenger 2017][Norsk 2021]</span>. Between 40-50% of crewmembers experience Space Adaptation Sickness during their first few days in space, including symptoms of nausea, disorientation, and headache <span style='color:gray'>[West 1985]</span>.        <br><br><br> <span style='color:gray'> Norsk, P. (2021). Physiological effects of spaceflight–Weightlessness: An overview. Handbook of Bioastronautics, 93-105. <br> Stenger MB, Tarver WJ, Brunstetter T, Gibson CR, Laurie SS, Lee SMC, Macias BR, Mader TH, Otto C, Smith SM, Zwart SR (2017) Risk of spaceflight associated neuro-ocular syndrome (SANS). Evidence report (Nov 30), NASA, Lyndon B. Johnson Space Center, Houston.   </span> ",
  },
  physical_health_radiation: {
    title: "Radiation &#8594; Physical Health",
    explanation:
      "High-dose radiation exposure has disastrous impacts on mortality and morbidity, as established through longitudinal studies of atomic bombing victims from Hiroshima and Nagasaki <span style='color:gray'>[Kamiya 2015][Ten Hoeve and Jacobson 2012]</span>. A very-worst case Solar Particle Event would cause significant injury even with thick radiation shielding. Extreme radiative events during extravehicular activities in high-altitude regions of Mars could cause potential death. Currently, lifelong radiation exposure limits for astronauts only exist for Low-Earth Orbit mission profiles  <span style='color:gray'>[Allen 2018]</span>.        <br><br><br> <span style='color:gray'> Kamiya, K., Ozasa, K., Akiba, S., Niwa, O., Kodama, K., Takamura, N., Zaharieva, E. K., Kimura, Y., & Wakeford, R. (2015). Long-term effects of radiation exposure on health. The Lancet, 386(9992), 469–478. <br>  Jones, C. F., Loh, S. L., & Satō, K. (2013). Narrating Fukushima: Scales of a nuclear meltdown. East Asian Science, Technology and Society: An International Journal, 7(4), 601-623. <br> Ten Hoeve, J. E., & Jacobson, M. Z. (2012). Worldwide health effects of the Fukushima Daiichi nuclear accident. Energy & Environmental Science, 5(9), 8743-8757. <br> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier.</span> ",
  },
  physical_health_nutrition: {
    title: "Nutrition &#8594; Physical Health",
    explanation:
      "The key nutrients for maintaining physical health are lipids, vitamins, water, carbohydrates, protein, and minerals  <span style='color:gray'>[Insel 2014]</span>. Lipids provide energy sources for the body and provide building blocks for hormones; vitamins are essential for efficient energy extraction from other nutrients; water makes up 60% of the body, providing lubrication and transportation through the body; carbohydrates provide glucose, the source of energy for cells and tissues; protein provides energy, body structure, and regulate processes; and minerals provide regulatory (e.g., fluid balance) and structural support (e.g., calcium for bones) <span style='color:gray'>[Insel 2014]</span>. Deficiencies in these areas, or malnutrition, can cause health problems, diseases, and increased morbidity and mortality risks [Zavitsanou and Drigas 2021]. Similarly, an excessive intake of these (e.g., lipids or sugars) can likewise cause morbidities (e.g., type II diabetes) <span style='color:gray'>[Johnson 2017]</span>.     <br><br><br> <span style='color:gray'> Insel, P. M. (2014). Nutrition. Jones & Bartlett Publishers. <br> Zavitsanou, A., & Drigas, A. (2021). Nutrition in mental and physical health. Technium Soc. Sci. J., 23, 67. <br> Johnson, R. J., Sánchez-Lozada, L. G., Andrews, P., & Lanaspa, M. A. (2017). Perspective: a historical and scientific perspective of sugar and its relation with obesity and diabetes. Advances in Nutrition, 8(3), 412-422. </span>    ",
  },
  physical_health_physical_workload: {
    title: "Physical Workload &#8594; Physical Health",
    explanation:
      "Many musculoskeletal injuries begin with discomfort, which can turn into pains and injuries if left unmanaged <span style='color:gray'>[Stanton 2005]</span>. However, an appropriate level of physical workload is needed to sustain musculoskeletal health. In spaceflight, where multiple systems experience deconditioning due to microgravity unloading, aerobic and resistance exercise can help protect against muscle mass loss, bone mass, muscle strength, and aerobic capacity <span style='color:gray'>[Petersen 2016]</span>.         <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. <br> Petersen, N., Jaekel, P., Rosenberger, A., Weber, T., Scott, J., Castrucci, F., ... & Mester, J. (2016). Exercise in space: the European Space Agency approach to in-flight exercise countermeasures for long-duration missions on ISS. Extreme physiology & medicine, 5, 1-13. </span>  ",
  },
  physical_health_sleep: {
    title: "Sleep &#8594; Physical Health",
    explanation:
      "<span style='font-size:9pt'>Sleep is critical for maintaining health <span style='color:gray'>[Watson 2015]</span>. It has been proposed and found in some studies that sleep quality may be more critical than sleep duration <span style='color:gray'>[Bower 2010][Grander 2006]</span>. In a study of over 900 participants, it was found that the duration and quality of sleep predict physical wellbeing <span style='color:gray'>[Wong 2006]</span>. Reviews of shift work studies have also revealed a higher prevalence of disturbed sleep, and adverse cardiovascular, gastrointestinal, and reproductive effects in sleep-shifted workers as compared to their day-shift counterparts <span style='color:gray'>[Harrington 2001][Waterhouse 1992]</span>.        <br><br><br> <span style='color:gray'> Watson, N. F. et al. (2015). Recommended Amount of Sleep for a Healthy Adult: A Joint Consensus Statement of the American Academy of Sleep Medicine and Sleep Research Society. Journal of Clinical Sleep Medicine, 11(06), 591–592. <br> Bower, B., Bylsma, L. M., Morris, B. H., & Rottenberg, J. (2010). Poor reported sleep quality predicts low positive affect in daily life among healthy and mood‐disordered persons. Journal of sleep research, 19(2), 323-332. <br> Grandner, M. A., Kripke, D. F., Yoon, I. Y., & Youngstedt, S. D. (2006). Criterion validity of the Pittsburgh Sleep Quality Index: Investigation in a non-clinical sample. Sleep and biological rhythms, 4, 129-136. <br> Wong, M. L. et al. (2013). The interplay between sleep and mood in predicting academic functioning, physical health and psychological health: A longitudinal study. Journal of psychosomatic research, 74(4), 271-277. <br> Harrington, J. M. (2001). Health effects of shift work and extended hours of work. Occupational and Environmental medicine, 58(1), 68-72. <br> Waterhouse, J. M., Minors, D. S., & Folkard, S. (1992). Shiftwork, health and safety: an overview of the scientific literature 1978-1990. HSE books. </span> </span>   ",
  },
  stress_communication_delay: {
    title: "Communication Delay &#8594; Stress",
    explanation:
      "Prolonged isolation and limited interfaces with existing sources of support with communication delay compounds the stress associated with long-duration space exploration missions <span style='color:gray'>[Schorn and Roma 2020]</span>. <br><br><br> <span style='color:gray'> Schorn, J. M., & Roma, P. G. (2020). Physical hazards of space exploration and the biological bases of behavioral health and performance in extreme environments. In Psychology and human performance in space programs (pp. 1-22). CRC Press. </span>",
  },
  stress_isolated: {
    title: "Isolated &#8594; Stress",
    explanation:
      "Prolonged isolation is a well-established negative stressor; particularly, limited communication with psychological support, family, and friends may negatively impact behavioral health and performance [Schorn and Roma 2020][Kanas 2007].        <br><br><br> <span style='color:gray'> Schorn, J. M., & Roma, P. G. (2020). Physical hazards of space exploration and the biological bases of behavioral health and performance in extreme environments. In Psychology and human performance in space programs (pp. 1-22). CRC Press. <br> Kanas, N. A., Salnitskiy, V. P., Ritsher, J. B., Gushin, V. I., Weiss, D. S., … Marmar, C. R. (2007). Psychosocial interactions during ISS missions. Acta Astronautica, 60, 329–335. </span> ",
  },
  stress_life_mission_events: {
    title: "Mission Events &#8594; Stress",
    explanation:
      "One of more major life events within 6-12 months well-predict subsequent physical morbidity, mortality, psychological stress, and psychiatric disorder <span style='color:gray'>[Cohen and Williamson 1991][Coyne and Downey 1991][Creed 1985][Kessler, Price, and Wortman 1985][Tausig 1986][Thoits 1983][Thoits 1995] </span>.       <br><br><br> <span style='color:gray'> Cohen, Sheldon and Gail M. Williamson. (1991) 'Stress and Infectious Disease in Humansx' Psychological Bulletin 109(l):5-24. <br> Coyne, James C. and Geraldine Downey. (1991) 'Social Factors and Psychopathology: Stress, Social Support, and Coping Processes.' Annual Review of Psychology. <br> Creed, Francis. (1985) 'Life Events and Physical Illness.' Journal of Psychosomatic Research 29(2): 113-23. <br> Kessler, Ronald C., Richard H. Price, and Camille B. Wortman. (1985) 'Social Factors in Psychopathology: Stress, Social Support, and Coping Processes.' Annual Review of Psychology 36:531-72. <br> Tausig, Mark. 1986. 'Measuring Life Events.' in Social Support, Life Events, and Depression, edited by N. Lin, A. Dean, and W.M. Ensel. Orlando, FL: Academic. p 71-93. <br> Thoits, Peggy A. (1983) 'Dimensions of Life Events that Influence Psychological Distress: An Evaluation and Synthesis of the Literature.' Psychosocial Stress: Trends in Theory and Research, edited by H.B. Kaplan. New York: Academic. p 33-103. <br>  Thoits, P. A. (1995). Stress, Coping, and Social Support Processes: Where Are We? What Next? Journal of Health and Social Behavior, 35, 53. </span>        ",
  },
  stress_group_living: {
    title: "Group Living &#8594; Stress",
    explanation:
      "Group living can be a source of stress, for example during roommate conflicts [Dusselier 2005] and through increased conflicts over a mission <span style='color:gray'>[Stuster 2010]</span>.          <br><br><br> <span style='color:gray'> Stuster, J. W. (2010). Behavioral issues associated with long-duration space expeditions: Review and analysis of astronaut journals—Final report (No. NASA TM-2010-216130). </span>  ",
  },
  stress_neuroticism: {
    title: "Neuroticism  &#8594; Stress",
    explanation:
      "Neuroticism is the trait that has been found to be most salient for stress, lower life satisfaction, and lower subjective well-being <span style='color:gray'>[DeNeve and Cooper 1998][Matthews 2003]</span>.     <br><br><br> <span style='color:gray'> DeNeve, K. M. and Cooper, H. (1998) The happy personality: a meta-analysis of 137 personality traits and subjective well-being. Psychological Bulletin, 124, 197–229. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.    </span>  ",
  },
  stress_cognitive_workload: {
    title: "Cognitive Workload &#8594; Stress",
    explanation:
      "High mental workload can be stressful when the mental resources are burdened <span style='color:gray'>[Mandrick 2016]</span>. Higher cognitive workload demands necessitate higher mental energy expenditure, which is characterized as stress <span style='color:gray'>[Gaillard 2018]</span>. Maintained levels of high cognitive workload and high performance may be possible, but at a detriment to physiological and psychological systems, as the workload is stressing the existing resources and limiting the ability to assess other concerns/threats <span style='color:gray'>[Warm 2018]</span>.        <br><br><br> <span style='color:gray'> Mandrick, K., Peysakhovich, V., Rémy, F., Lepron, E., & Causse, M. (2016). Neural and psychophysiological correlates of human performance under stress and high mental workload. Biological psychology, 121, 62-73. <br> Gaillard, A. W. (2018). Concentration, stress and performance. In Performance under stress (pp. 75-92). CRC Press. <br> Warm, J. S., Matthews, G., & Finomore Jr, V. S. (2018). Vigilance, workload, and stress. In Performance under stress (pp. 131-158). CRC Press. </span>   ",
  },
  stress_stress_regulation: {
    title: "Stress Regulation &#8594; Stress",
    explanation:
      "Individual variability in stress regulation (exposure, reactivity, recovery, and restoration) accounts for how stressed they may feel and how long it takes for the stress to be resolved <span style='color:gray'>[Williams 2009]</span>.        <br><br><br> <span style='color:gray'> Williams, P. G., Suchy, Y., & Rau, H. K. (2009). Individual differences in executive functioning: Implications for stress regulation. Annals of Behavioral Medicine, 37(2), 126-140. </span>        ",
  },
  fatigue_mission_demands: {
    title: "Mission Demands &#8594; Fatigue",
    explanation:
      "Mission demands and how those demands are enacted (e.g., with adequate preparation, operational requirements, work hours, work-rest cycles) can mediate fatigue <span style='color:gray'>[Parasuraman and Hancock 2008]</span>. Within the aerospace industry, air traffic controllers are a typical analog for studying fatigue due the similarity between their high cognitive demands, working hours, and the need for accuracy and precision. Fatigue is a well-known issue for air traffic controllers, leading the Federal Aviation Administration to implement staffing measures to counteract ATC napping during midnight shifts <span style='color:gray'>[FAA 2011]</span>. In the largest spaceflight sleep study conducted to date, workload was found to be a strong contributor to hours slept, which was associated with physical and mental fatigue <span style='color:gray'>[Jones 2022]</span>.        <br><br><br> <span style='color:gray'> Parasuraman, R., & Hancock, P. A. (2008). Mitigating the adverse effects of workload, stress, and fatigue with adaptive automation. Performance under stress, 45-57.<br> Federal Aviation Administration Press Office. (2011, April 13). The FAA announces additional staffing at 27 control towers [Press release]. <br> Jones, C. W., Basner, M., Mollicone, D. J., Mott, C. M., & Dinges, D. F. (2022). Sleep deficiency in spaceflight is associated with degraded neurobehavioral functions and elevated stress in astronauts on six-month missions aboard the International Space Station. Sleep, 45(3). </span>",
  },
  fatigue_sleep: {
    title: "Sleep &#8594; Fatigue",
    explanation:
      "Insufficient sleep or decreased sleep quality can lead to fatigue. Based on a review of numerous nation-wide studies of air traffic controllers with shifted sleep schedules (n > 100,000), it was found that most ATCs experience elevated chronic fatigue <span style='color:gray'>[Nealley and Gawron 2015]</span>. Reviews of shift work studies have also revealed a higher prevalence of disturbed sleep and chronic fatigue in sleep-shifted workers as compared to their day-shift counterparts <span style='color:gray'>[Harrington 2001][Waterhouse 1992]</span>. Through the most comprehensive spaceflight sleep study done to date, it was found that astronauts (on average) sleep less than the recommended 7 hours per night, and with decreased sleep, higher levels of physical and mental fatigue  <span style='color:gray'>[Jones 2022]</span>.          <br><br><br> <span style='color:gray'> Nealley, M. A., & Gawron, V. J. (2015). The effect of fatigue on air traffic controllers. The International Journal of Aviation Psychology, 25(1), 14-47. <br> Harrington, J. M. (2001). Health effects of shift work and extended hours of work. Occupational and Environmental medicine, 58(1), 68-72. <br> Waterhouse, J. M., Minors, D. S., & Folkard, S. (1992). Shiftwork, health and safety: an overview of the scientific literature 1978-1990. HSE books. </span>   ",
  },
  anxiety_neuroticism: {
    title: "Neuroticism  &#8594; Anxiety",
    explanation:
      "Patients diagnosed with generalized anxiety disorder tend to have higher neuroticism scores, and often anxiety and depression are comorbid (co-occurring) <span style='color:gray'> [Eysenck 1985][Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Eysenck, H. J. and Eysenck, M. W. (1985) Personality and individual differences: a natural science approach. New York: Plenum. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>        ",
  },
  anxiety_psychological_resources: {
    title: "Psychological Resources &#8594; Anxiety",
    explanation:
      "In studies with psychological support provided, participants showed decreased anxiety, even with long-term improvements  <span style='color:gray'>[Sahranavard 2019][Dimauro 2013]</span>.       <br><br><br> <span style='color:gray'> Sahranavard, S., Esmaeili, A., Salehiniya, H., & Behdani, S. (2019). The effectiveness of group training of cognitive behavioral therapy-based stress management on anxiety, hardiness and self-efficacy in female medical students. Journal of education and health promotion, 8(1), 49. <br> DiMauro, J., Domingues, J., Fernandez, G., & Tolin, D. F. (2013). Long-term effectiveness of CBT for anxiety disorders in an adult outpatient clinic sample: A follow-up study. Behaviour research and therapy, 51(2), 82-86. </span>   ",
  },
  anxiety_nutrition: {
    title: "Nutrition &#8594; Anxiety",
    explanation:
      "Deficiencies in zinc, vitamin D, and omega-3 are associated with depression, anxiety, and other mood disorders <span style='color:gray'>[Mitsuya 2015][Patrick and Ames 2015]</span>.     <br><br><br> <span style='color:gray'> Mitsuya, H., Omata, N., Kiyono, Y., Mizuno, T., Murata, T., Mita, K., … Wada, Y. (2015). The co-occurrence of zinc deficiency and social isolation has the opposite effects on mood compared with either condition alone due to changes in the central norepinephrine system. Behavioural Brain Research, 284, 125–130. <br> Patrick, R. P., & Ames, B. N. (2015). Vitamin D and the omega-3 fatty acids control serotonin synthesis and action, part 2: Relevance for ADHD, bipolar disorder, schizophrenia, and impulsive behavior. FASEB Journal: Official Publication of the Federation of American Societies for Experimental Biology, 29(6), 2207–2222.         </span>        ",
  },
  anxiety_physical_workload: {
    title: "Physical Workload &#8594; Anxiety",
    explanation:
      "Studies have shown that physical activity is beneficial to those with anxious symptoms <span style='color:gray'>[Petruzzello 1991][Martinsen 1989][Dunn 2001]</span>. Proposed mechanisms for the linkage between physical activity and mental health include physiological benefits (e.g., release of feel-good endorphins and hormones), improve self-image and self-efficacy, and serve as distraction and social interaction <span style='color:gray'>[Peluso and De Andrade 2005]</span>.        <br><br><br> <span style='color:gray'> Petruzzello, S. J., Landers, D. M., Hatfield, B. D., Kubitz, K. A., & Salazar, W. (1991). A meta-analysis on the anxiety-reducing effects of acute and chronic exercise: Outcomes and mechanisms. Sports medicine, 11, 143-182. <br> Martinsen, E. W., Hoffart, A., & Solberg, Ø. Y. (1989). Aerobic and non‐aerobic forms of exercise in the treatment of anxiety disorders. Stress Medicine, 5(2), 115-120. <br> Dunn, A. L., Trivedi, M. H., & O'Neal, H. A. (2001). Physical activity dose-response effects on outcomes of depression and anxiety. Database of Abstracts of Reviews of Effects (DARE): Quality-assessed Reviews [Internet]. <br> Peluso, M. A. M., & De Andrade, L. H. S. G. (2005). Physical activity and mental health: the association between exercise and mood. Clinics, 60(1), 61-70.     </span>  ",
  },
  anxiety_stress_regulation: {
    title: "Stress Regulation &#8594; Anxiety",
    explanation:
      "Effective regulation strategies have been linked to improved mental wellness <span style='color:gray'>[Gross and John 2003][Ochsner and Gross 2005][Troy 2010]</span>. Anxiety disorders have been characterized as dysfunction in systems regulating stress <span style='color:gray'>[Mineka and Zinbarg 1996][Nolte 2011]</span>. Excessive anxiety and worry of situations are also symptoms of dysregulation of stress.           <br><br><br> <span style='color:gray'> Gross, J. J., & John, O. P. (2003). Individual differences in two emotion regulation processes: Implications for affect, relationships, and well-being. Journal of Personality and Social Psychology, 85, 348–362. <br> Ochsner, K. N., & Gross, J. J. (2005). The cognitive control of emotion. Trends in Cognitive Sciences, 9, 242–249. <br>  Troy, A. S., Wilhelm, F. H., Shallcross, A. J., & Mauss, I. B. (2010). Seeing the silver lining: Cognitive reappraisal ability moderates the relationship between stress and depressive symptoms. Emotion, 10, 783–795. <br> Mineka, S., and Zinbarg, R. (1996). Conditioning and ethological models of anxiety disorders: stress-in-dynamic-context anxiety models. Perspectives on anxiety, panic, and fear. Nebr. Symp. Motiv. 43, 135–211. <br>   Nolte, T., Guiney, J., Fonagy, P., Mayes, L. C., & Luyten, P. (2011). Interpersonal stress regulation and the development of anxiety disorders: an attachment-based developmental framework. Frontiers in behavioral neuroscience, 5, 55.  </span>        ",
  },
  anxiety_sleep: {
    title: "Sleep &#8594; Anxiety",
    explanation:
      "Reviews of shift work studies have also revealed a higher prevalence of disturbed sleep and anxiety in sleep-shifted workers as compared to their day-shift counterparts <span style='color:gray'>[Harrington 2001][Waterhouse 1992]</span>. A study of over 500 non-clinical participants revealed that those with optimal sleep (greater than 6 and less than 8.5 hours) reported fewer symptoms of anxiety <span style='color:gray'>[Hamilton 2007]</span>.         <br><br><br> <span style='color:gray'> Harrington, J. M. (2001). Health effects of shift work and extended hours of work. Occupational and Environmental medicine, 58(1), 68-72. <br> Waterhouse, J. M., Minors, D. S., & Folkard, S. (1992). Shiftwork, health and safety: an overview of the scientific literature 1978-1990. HSE books. <br> Hamilton, N. A., Nelson, C. A., Stevens, N., & Kitzman, H. (2007). Sleep and psychological well-being. Social Indicators Research, 82, 147-163.  </span>   ",
  },
  autonomy_ground_support: {
    title: "Ground Support &#8594; Autonomy",
    explanation:
      "Scenarios in which crew will not be able to communicate with (due to communication delay, loss of communication, lack of bandwidth, or other emergency scenario) ground support, crew will be required to operate autonomously <span style='color:gray'>[Marquez 2017]</span>.        <br><br><br> <span style='color:gray'> Marquez, J. J., Hillenius, S., Kanefsky, B., Zheng, J., Deliz, I., & Reagan, M. (2017). Increasing crew autonomy for long duration exploration missions: Self-scheduling. 2017 IEEE Aerospace Conference, 1–10.        </span>        ",
  },
  autonomy_place_attachment: {
    title: "Place Attachment &#8594; Autonomy",
    explanation:
      "Place attachment provides security within the place or community, which in turn encourages greater exploration, confidence, and curiosity <span style='color:gray'>[Fried 2000]</span>.        <br><br><br> <span style='color:gray'> Fried, M. (2000). CONTINUITIES AND DISCONTINUITIES OF PLACE. Journal of Environmental Psychology, 20(3), 193–205.   </span> ",
  },
  situation_awareness_ground_support: {
    title: "Ground Support &#8594; Situation Awareness",
    explanation:
      "On the International Space Station, astronauts currently are supported by a large team of experts that provide them with task-specific and vehicle state information <span style='color:gray'> [Marquez 2017]</span>. Situation awareness is largely maintained by the integrated presence of mission control.        <br><br><br> <span style='color:gray'> Marquez, J. J., Hillenius, S., Kanefsky, B., Zheng, J., Deliz, I., & Reagan, M. (2017). Increasing crew autonomy for long duration exploration missions: Self-scheduling. 2017 IEEE Aerospace Conference, 1–10.        </span>        ",
  },
  situation_awareness_ergonomics: {
    title: "Ergonomics &#8594; Situation Awareness",
    explanation:
      "Cognitive ergonomics are important to maintain a balance between the cognitive resources (e.g., knowledge, experience, training, user manuals, user interface clarity) and cognitive demands (e.g., task complexity, multitasking, user goals) <span style='color:gray'> [Stanton 2005]</span>. An imbalance between the resources and demands can occur as task underload or task overload <span style='color:gray'> [Stanton 2005]</span>, which could then lead to an improper level of situation awareness.    <br><br><br> <span style='color:gray'> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press. </span>        ",
  },
  situation_awareness_cognitive_workload: {
    title: "Cognitive Workload &#8594; Situation Awareness",
    explanation:
      "Given a limited amount of cognitive resources, with rising task complexity and cognitive workload, there are decreased resources available for situation awareness <span style='color:gray'>[Vidulich and Tsang 2012]</span>. However, an appropriately high level of cognitive workload is sometimes required to maintain high situation awareness (i.e. prevent boredom) <span style='color:gray'>[Endsley 1993]</span>.    <br><br><br> <span style='color:gray'> Vidulich, M. A., & Tsang, P. S. (2012). Mental workload and situation awareness. Handbook of human factors and ergonomics, 243-273. Endsley, M. R. (1993). A survey of situation awareness requirements in air-to-air combat fighters. The International Journal of Aviation Psychology, 3(2), 157–168. </span>   ",
  },
  situation_awareness_trust: {
    title: "Situation Awareness &#8594; Trust",
    explanation:
      "In human-machine teaming, maintaining situation awareness of the problem space, the machine state and capabilities, and environmental/situational demands is critical to ensure the operator puts the appropriate amount of trust on the automation <span style='color:gray'>[Parasuraman and Riley 1997]</span>.      <br><br><br> <span style='color:gray'> Parasuraman, R., & Riley, V. (1997). Humans and automation: Use, misuse, disuse, abuse. Human factors, 39(2), 230-253. </span>   ",
  },
  trust_interpersonal_processes: {
    title: "Interpersonal Processes &#8594; Trust",
    explanation:
      "Interpersonal and social exchanges are thought to evolve relationships into trusting, mutual commitments <span style='color:gray'>[Blau 1969]</span>. Over time, interpersonal trust between team members will also influence the state of team trust <span style='color:gray'>[Marks 2001]</span>.        <br><br> <span style='color:gray'> Blau, P. (1969). The dynamics of bureaucracy: A study of interpersonal relations in two government agencies. Chicago: University of Chicago Press. <br> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.     </span>  ",
  },
  trust_situation_awareness: {
    title: "Situation Awareness &#8594; Trust",
    explanation:
      "In human-machine teaming, maintaining situation awareness of the problem space, the machine state and capabilities, and environmental/situational demands is critical to ensure the operator puts the appropriate amount of trust on the automation <span style='color:gray'>[Parasuraman and Riley 1997]</span>.      <br><br><br> <span style='color:gray'> Parasuraman, R., & Riley, V. (1997). Humans and automation: Use, misuse, disuse, abuse. Human factors, 39(2), 230-253. </span>   ",
  },
  curiosity_openness: {
    title: "Openness &#8594; Curiosity",
    explanation:
      "Openness is the trait that is most strongly associated with intelligence <span style='color:gray'>[Ackerman 1997]</span>, with a correlation of around 0.3 in studies with N=4-500 <span style='color:gray'>[Austin 2002][Ackerman and Heggestad 1997]</span>. Other studies around this size  Openness is associated with motivation to pursue ideas and intellectual activities, and mastery of intellectual skills may in turn prompt more openness <span style='color:gray'>[Rolfus 1996][Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Rolfhus, E. L. and Ackerman, P. L. (1996) Self-report knowledge: at the crossroads of ability, interest, and personality. Journal ofEducational Psychology, 88, 174–88. <br> Austin, E. J., Deary, I. J., Whiteman, M. C., Fowkes, F. G. R., Pedersen, N. L., Rabbitt, P., Bent, N. and McInnes, L. (2002) Relationships between ability and personality: does intelligence contribute positively to personal and social adjustment? Personality and Individual Differences, 32, 1391–411. <br> Ackerman, P. L. and Heggestad, E. D. (1997) Intelligence, personality and interests: evidence for overlapping traits. Psychological Bulletin, 121, 219–45. <br> Ackerman, P. L., & Heggestad, E. D. (1997). Intelligence, personality, and interests: Evidence for overlapping traits. Psychological Bulletin, 121(2), 219–245. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>",
  },
  kinship_social_support: {
    title: "Social Support &#8594; Kinship",
    explanation:
      "Providing support to others cements personal relationships and signifies mutual importance in an interpersonal relationship <span style='color:gray'>[Taylor 2011]</span>.        <br><br><br> <span style='color:gray'> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. </span>        ",
  },
  kinship_food: {
    title: "Food &#8594; Kinship",
    explanation:
      "Food can be a highly effective bonding tool, particularly in care packages sent from home or sharing a meal around the dinner table. Food variability, quality, and availability has been found to positively influence social cohesion and morale <span style='color:gray'>[Douglas 2016][Smith 2015][Stuster 2010]</span>.     <br><br><br> <span style='color:gray'> Douglas, G. L. C. (2016). Risk of performance decrement and crew illness due to an inadequate food system (NASA 20160011582). Houston, TX: NASA Johnson Space Center. <br>  Smith, S., Zwart, S., & Heer, M. (2015). Evidence report: Risk factor of inadequate nutrition. Retrieved from https://ntrs.nasa.gov/search.jsp?R=20150000512. <br>  Stuster, J. W. (2010). Behavioral issues associated with long-duration space expeditions: Review and analysis of astronaut journals—Final report (No. NASA TM-2010-216130).  </span>        ",
  },
  kinship_privacy: {
    title: "Privacy &#8594; Kinship",
    explanation:
      "In a study of over 1000 residents in Norway, it was found that the presence of private/public spaces, such as gardens, promoted “neighboring” (i.e., attachment to neighborhood, social support amongst neighbors) due to the ability to regulate privacy and social contacts <span style='color:gray'>[Skjaeveland and Garling 1997]</span>.      <br><br><br> <span style='color:gray'> Skjaeveland, O., & Garling, T. (1997). EFFECTS OF INTERACTIONAL SPACE ON NEIGHBOURING. Journal of Environmental Psychology, 17(3), 181–198.    </span>        ",
  },
  kinship_interpersonal_processes: {
    title: "Interpersonal Processes &#8594; Kinship",
    explanation:
      "Interpersonal processes underlay team member feelings toward each other, and can rally or derail team cohesion at any time. Social activities can build cohesion, break tension, and aid in stress management <span style='color:gray'>[Marks 2001]</span>.    <br><br><br> <span style='color:gray'> Marks, M. A., John E. Mathieu, & Stephen J. Zaccaro. (2001). A Temporally Based Framework and Taxonomy of Team Processes. The Academy of Management Review, 26(3), 356–376.  </span>  ",
  },
  kinship_stress_regulation: {
    title: "Stress Regulation &#8594; Kinship",
    explanation:
      "During a study of 6 crewmembers in isolation and confinement for 520 days, two of the crewmember with the highest ratings of stress accounted for 85% of the conflicts <span style='color:gray'>[Basner 2014]</span>. Coping styles that center acceptance and replanning are also considered “positive” regulation strategies, as opposed to blaming others <span style='color:gray'>[Martin 2005]</span>, can have positive effects for interpersonal closeness.        <br><br><br> <span style='color:gray'> Basner M, Dinges DF, Mollicone DJ, Savelev I, Ecker AJ, Di Antonio A, Jones CW, Hyder EC, Kan K, Morukov BV, Sutton JP. Psychological and behavioral changes during confinement in a 520-day simulated interplanetary mission to mars. PLoS One. 2014 Mar 27;9(3):e93298. <br> Martin, R. C., & Dahlen, E. R. (2005). Cognitive emotion regulation in the prediction of depression, anxiety, stress, and anger. Personality and individual differences, 39(7), 1249-1260.        </span>        ",
  },
  boredom_mission_duration: {
    title: "Mission Duration &#8594; Boredom",
    explanation:
      "During a study of a crew of 6 in isolation for 520 days, crew sedentariness increased over the mission as captured by actigraphy (motion data) <span style='color:gray'> [Basner 2013]</span>. <br><br><br> <span style='color:gray'>Basner M, Dinges DF, Mollicone DJ, Ecker A, Jones CW, et al. (2013) Mars 520-d mission simulation reveals protracted crew hypokinesis and alterations of sleep duration and timing. Proc Natl Acad Sci USA 110: 2635–2640. </span>",
  },
  boredom_social_monotony: {
    title: "Social Monotony &#8594; Boredom",
    explanation:
      "Those who experience social deprivation or isolation report boredom <span style='color:gray'>[Myers 1972][Thackray 1981]</span>.       <br><br><br> <span style='color:gray'> Myers T.I. (1972). Psychobiological factors associated with monotony tolerance. Report No AIR-26400-7/72-FR, Washington, DC, Am Inst for Research. <br> Thackray, Richard I. (1981). The Stress of Boredom and Monotony: A Consideration of the Evidence. Psychosomatic Medicine 43(2):p 165-176. </span> ",
  },
  boredom_environmental_monotony: {
    title: "Environmental Monotony &#8594; Boredom",
    explanation:
      "Monotony within the environment, understimulation, or sensory deprivation are common attributes of boredom <span style='color:gray'>[Todman 2003][Leong and Schneller 1993][Mikulas and Vodanovich 1993][Suedfeld and Steel 2000]</span>. Sensory deprivation in spaceflight can be mitigated through novel additions to food, for instance, through crew care packages (which becomes difficult with distance away from Earth) <span style='color:gray'>[Kanas and Manzey 2008]</span>.        <br><br><br> <span style='color:gray'> Todman, M. (2003). Boredom and Psychotic Disorders: Cognitive and Motivational Issues. Psychiatry: Interpersonal and Biological Processes, 66(2), 146–167. <br> Leong, F. T., & Schneller, G. R. (1993). Boredom proneness: Temperamental and cognitive components. Personality and individual differences, 14(1), 233-239. <br> Mikulas, W. L., & Vodanovich, S. J. (1993). The essence of boredom. The psychological record, 43(1), 3. <br> Suedfeld, P., & Steel, G. D. (2000). The Environmental Psychology of Capsule Habitats. Annual Review of Psychology, 51(1), 227–253. <br> Kanas, N., & Manzey, D. (2008). Space psychology and psychiatry (2nd ed.). El Segundo, CA: Microcosm Press. </span> ",
  },
  boredom_cognitive_workload: {
    title: "Cognitive Workload &#8594; Boredom",
    explanation:
      "The strains of work, including low cognitive workload and decreased stimulation, can lead to boredom <span style='color:gray'>[Bench and Lench 2013][Landon 2024]</span>.         <br><br><br> <span style='color:gray'> Bench, S. W., & Lench, H. C. (2013). On the function of boredom. Behavioral sciences, 3(3), 459-472. <br>  Landon, L. B., Doerr, A., Khader, A., Bell, S., Roma, P. G., & Dinges, D. F. (2024, February). Meaningful Work as a Resilience Countermeasure in Extreme Environments. In Human Research Program-Investigators Working Group (HRP-IWG) Workshop. </span>   ",
  },
  depression_neuroticism: {
    title: "Neuroticism  &#8594; Depression",
    explanation:
      "Numerous studies suggest depression risk is higher in individuals with higher neuroticism scores <span style='color:gray'>[Bagby 1995][Surtees and Wainwright 1996][Ormel 2001][Enns 2001][Tyssen and Vaglum 2002][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Bagby, R. M., Joffe, R. T., Parker, J. D. A., Kalemba, V. and Harkness, K. L. (1995) Major depression and the five factor model of personality. Journal ofPersonality Disorders, 9, 224–34. <br> Surtees, P. G. and Wainwright, N. W. J. (1996) Fragile states of mind: neuroticism, vulnerability and the long-term outcome of depression. British Journal ofPsychiatry, 169, 338–47. <br> Ormel, J., Oldehinkel, A. J. and Brilman, E. I. (2001) The interplay and etiological continuity of neuroticism, difficulties, and life events in the etiology of major and subsyndromal, first and recurrent depressive episodes in later life. American Journal ofPsychiatry, 158, 885–91. <br> Enns, M. W., Cox, B. J., Sareen, J. and Freeman, P. (2001) Adaptive and maladaptive perfectionism in medical students: a longitudinal investigation. Medical Education, 35, 1034–42. <br> Tyssen, R., & Vaglum, P. (2002). Mental health problems among young doctors: an updated review of prospective studies. Harvard review of psychiatry, 10(3), 154-165. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>  ",
  },
  depression_nutrition: {
    title: "Nutrition &#8594; Depression",
    explanation:
      "Deficiencies in zinc, vitamin D, and omega-3 are associated with depression, anxiety, and other mood disorders <span style='color:gray'>[Mitsuya 2015][Patrick and Ames 2015]</span>.     <br><br><br> <span style='color:gray'> Mitsuya, H., Omata, N., Kiyono, Y., Mizuno, T., Murata, T., Mita, K., … Wada, Y. (2015). The co-occurrence of zinc deficiency and social isolation has the opposite effects on mood compared with either condition alone due to changes in the central norepinephrine system. Behavioural Brain Research, 284, 125–130. <br> Patrick, R. P., & Ames, B. N. (2015). Vitamin D and the omega-3 fatty acids control serotonin synthesis and action, part 2: Relevance for ADHD, bipolar disorder, schizophrenia, and impulsive behavior. FASEB Journal: Official Publication of the Federation of American Societies for Experimental Biology, 29(6), 2207–2222.         </span>        ",
  },
  depression_physical_workload: {
    title: "Physical Workload &#8594; Depression",
    explanation:
      "Studies have shown that physical activity is beneficial to those with depressive symptoms <span style='color:gray'>[Morgan 1985][Farmer 1988][Martinsen 1989a][Dimeo 2001][Leppamaki 2002]</span>. Proposed mechanisms for the linkage between physical activity and mental health include physiological benefits (e.g., release of feel-good endorphins and hormones), improve self-image and self-efficacy, and serve as distraction and social interaction <span style='color:gray'>[Peluso and De Andrade 2005]</span>.       <br><br> <span style='color:gray'> Morgan, W. P. (1985). Affective beneficence of vigorous physical activity. Medicine and science in sports and exercise, 17(1), 94-100. <br> Farmer, M.E., Locke, B.Z., Mościcki, E.K., et al. (1988). Physical activity and depressive symptoms: the NHANES I Epidemiologic Follow-up Study. American journal of epidemiology, 128(6), 1340-1351. <br> Martinsen, E.W., Hoffart, A., & Solberg, Ø. (1989). Comparing aerobic with nonaerobic forms of exercise in the treatment of clinical depression: a randomized trial. Comprehensive psychiatry, 30(4), 324-331. <br> Dimeo, F., Bauer, M., Varahram, I., et al. (2001). Benefits from aerobic exercise in patients with major depression: a pilot study. British journal of sports medicine, 35(2), 114-117. <br> Leppamaki, S. J., Partonen, T. T., Hurme, J., Haukka, J. K., & Lonnqvist, J. K. (2002). Randomized trial of the efficacy of bright-light exposure and aerobic exercise on depressive symptoms and serum lipids. Journal of Clinical Psychiatry, 63(4), 316-321. <br> Peluso, M. A. M., & De Andrade, L. H. S. G. (2005). Physical activity and mental health: the association between exercise and mood. Clinics, 60(1), 61-70. </span>  ",
  },
  depression_stress_regulation: {
    title: "Stress Regulation &#8594; Depression",
    explanation:
      "Effective regulation strategies have been linked to improved mental wellness <span style='color:gray'>[Gross and John 2003][Ochsner and Gross 2005][Troy 2010]</span>. In a study of over 150 college students, it was found that emotional regulation fully mediate the relationship between interpersonal stress and depression; while interpersonal stress does not have a significant relationship to depression, maladaptive regulation strategies contribute to an increase in depression after stressful events <span style='color:gray'>[Moriya and Takahashi 2013]</span>.     <br><br><br> <span style='color:gray'> Gross, J. J., & John, O. P. (2003). Individual differences in two emotion regulation processes: Implications for affect, relationships, and well-being. Journal of Personality and Social Psychology, 85, 348–362. <br> Ochsner, K. N., & Gross, J. J. (2005). The cognitive control of emotion. Trends in Cognitive Sciences, 9, 242–249. <br>  Troy, A. S., Wilhelm, F. H., Shallcross, A. J., & Mauss, I. B. (2010). Seeing the silver lining: Cognitive reappraisal ability moderates the relationship between stress and depressive symptoms. Emotion, 10, 783–795. <br> Moriya, J., & Takahashi, Y. (2013). Depression and interpersonal stress: The mediating role of emotion regulation. Motivation and Emotion, 37, 600-608.        </span>        ",
  },
  depression_sleep: {
    title: "Sleep &#8594; Depression",
    explanation:
      "Reviews of shift work studies have also revealed a higher prevalence of disturbed sleep and depression in sleep-shifted workers as compared to their day-shift counterparts <span style='color:gray'>[Harrington 2001][Waterhouse 1992]</span>. A study of over 500 non-clinical participants revealed that those with optimal sleep (greater than 6 and less than 8.5 hours) reported fewer symptoms of depression <span style='color:gray'>[Hamilton 2007]</span>. This particular study removed highly depressed individuals (>10 on the Beck Depression Index) to manage for the confounding effect of depression on increased sleep.         <br><br><br> <span style='color:gray'> Harrington, J. M. (2001). Health effects of shift work and extended hours of work. Occupational and Environmental medicine, 58(1), 68-72. <br> Waterhouse, J. M., Minors, D. S., & Folkard, S. (1992). Shiftwork, health and safety: an overview of the scientific literature 1978-1990. HSE books. <br> Hamilton, N. A., Nelson, C. A., Stevens, N., & Kitzman, H. (2007). Sleep and psychological well-being. Social Indicators Research, 82, 147-163. </span>   ",
  },
  nostalgia_homesickness_extraversion: {
    title: "Extraversion &#8594; Nostalgia/Homesickness",
    explanation:
      "From a study of 200+ post-graduate students, students high in neuroticism and low in extraversion were more likely to be homesick. While these personality traits together explain 20% of the variance in homesickness, it drops to 4% after controlling for coping strategies; high neuroticism and low extraversion may be associated with dysfunctional stress coping strategies <span style='color:gray'> [Mohamed 1996][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Mohamed, A. A. R. (1996) Stress processes in British and overseas students. Unpublished doctoral dissertation, University of Dundee. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.  </span>        ",
  },
  nostalgia_homesickness_neuroticism: {
    title: "Neuroticism  &#8594; Nostalgia/Homesickness",
    explanation:
      "From a study of 200+ post-graduate students, students high in neuroticism and low in extraversion were more likely to be homesick. While these personality traits together explain 20% of the variance in homesickness, it drops to 4% after controlling for coping strategies; high neuroticism and low extraversion may be associated with dysfunctional stress coping strategies <span style='color:gray'>[Mohamed 1996][Matthews 2003]</span>.         <br><br><br> <span style='color:gray'> Berry, D. S., Willingham, J. K., & Thayer, C. A. (2000). Affect and Personality as Predictors of Conflict and Closeness in Young Adults’ Friendships. Journal of Research in Personality, 34(1), 84–107. </span>  ",
  },
  nostalgia_homesickness_place_attachment: {
    title: "Place Attachment &#8594; Nostalgia/homesickness",
    explanation:
      "Nostalgia and homesickness arise from the loss of people and places <span style='color:gray'>[Brown and Perkins 1992]</span>. Often following events of “disruption”, such as voluntary migration or involuntary displacement, feelings of homesickness are often experienced, multifaceted, and change in intensity over time <span style='color:gray'>[Brown and Perkins 1992]</span>. While promoting attachment to a new place or with new people can help, homesickness often arises independently of the quality of attachment in the new setting <span style='color:gray'>[Brown and Perkins 1992]</span>. <br> Place attachment to a home may induce homesickness when moving away from home. In a study of 200 college students in Italy, it was found that strong home attachment positively predicted homesickness <span style='color:gray'>[Scopelliti and Tiberio 2010]</span>. In more severe cases, dysfunctional place attachment/dependence can arise, particularly when the place that one wishes to return to is no longer possible <span style='color:gray'>[Fried 2000]</span>.     <br><br><br> <span style='color:gray'> Brown, B. B., & Perkins, D. D. (1992). Disruptions in Place Attachment. In I. Altman & S. M. Low (Eds.), Place Attachment (pp. 279–304). Springer US. <br>  Scopelliti, M., & Tiberio, L. (2010). Homesickness in University Students: The Role of Multiple Place Attachment. Environment and Behavior, 42(3), 335–350. <br>  Fried, M. (2000). CONTINUITIES AND DISCONTINUITIES OF PLACE. Journal of Environmental Psychology, 20(3), 193–205.   </span> ",
  },
};

clickedBox = null;
document.addEventListener("DOMContentLoaded", function () {
  //Get all inner box elements
  var innerBoxes = document.querySelectorAll(".box div");

  //Format text to the desired format
  function formatToSmallBoxName(text) {
    tmp = text.trim().toLowerCase().replace(/\s+/g, "_");
    tmp2 = tmp.replace(/\//g, "_");
    if (tmp2 === "individual_traits") return "individual_traits_invisible";
    if (tmp2 === "social_composition") return "social_composition_invisible";
    if (tmp2 === "team_processes") return "team_processes_invisible";
    return tmp2;
  }

  function getRightBoxes(smallBoxName) {
    switch (smallBoxName) {
      case "crew_selection":
        return [
          "crew_selection",
          "individual_traits_invisible",
          "social_composition_invisible",
          "extraversion",
          "openness",
          "agreeableness",
          "genetics",
          "conscientiousness",
          "neuroticism",
          "resilience",
          "emotional_bandwidth",
          "crew_size",
          "social_support",
          "social_monotony",
          "density",
          "group_living",
        ];
      case "individual_traits_invisible":
        return [
          "individual_traits_invisible",
          "extraversion",
          "openness",
          "agreeableness",
          "genetics",
          "conscientiousness",
          "neuroticism",
          "resilience",
          "emotional_bandwidth",
        ];
      case "social_composition_invisible":
        return [
          "social_composition_invisible",
          "crew_size",
          "social_support",
          "social_monotony",
          "density",
          "group_living",
        ];
      case "team_processes_invisible":
        return [
          "team_processes_invisible",
          "transition_processes",
          "action_processes",
          "interpersonal_processes",
        ];
      case "distance_from_home_earth":
        return [
          "distance_from_home_earth",
          "communication_delay",
          "resource_constrained",
          "isolated",
          "medical_capability",
          "food",
          "family_and_friends",
        ];
      case "mission_duration":
        return [
          "mission_duration",
          "isolated",
          "boredom",
          "family_and_friends",
        ];
      case "communication_delay":
        return [
          "communication_delay",
          "ground_support",
          "family_and_friends",
          "transition_processes",
          "stress",
        ];
      case "isolated":
        return [
          "isolated",
          "social_support",
          "ground_support",
          "physical_health",
          "stress",
        ];
      case "confined":
        return ["confined", "social_monotony", "privacy"];
      case "extreme":
        return [
          "extreme",
          "isolated",
          "genetics",
          "resource_constrained",
          "altered_gravity",
          "radiation",
          "light_dark_cycles",
        ];
      case "resource_constrained":
        return ["resource_constrained", "supplies", "food"];
      case "mission_demands":
        return [
          "mission_demands",
          "cognitive_workload",
          "physical_workload",
          "fatigue",
        ];
      case "life_mission_events":
        return ["life_mission_events", "stress", "physical_workload"];
      case "crew_size":
        return ["crew_size", "density", "habitable_volume"];
      case "social_support":
        return [
          "social_support",
          "stress_regulation",
          "physical_health",
          "kinship",
        ];
      case "social_monotony":
        return ["social_monotony", "boredom"];
      case "density":
        return ["density", "privacy", "stress_regulation"];
      case "group_living":
        return ["group_living", "stress_regulation", "stress"];
      case "extraversion":
        return [
          "extraversion",
          "interpersonal_processes",
          "social_support",
          "nostalgia_homesickness",
          "group_living",
        ];
      case "openness":
        return ["openness", "curiosity"];
      case "agreeableness":
        return ["agreeableness", "interpersonal_processes", "group_living"];
      case "neuroticism":
        return [
          "neuroticism",
          "anxiety",
          "depression",
          "interpersonal_processes",
          "stress",
          "nostalgia_homesickness",
          "group_living",
        ];
      case "conscientiousness":
        return [
          "conscientiousness",
          "crew_performance",
          "physical_health",
          "action_processes",
        ];
      case "genetics":
        return [
          "genetics",
          "physical_health",
          "extraversion",
          "agreeableness",
          "neuroticism",
        ];
      case "resilience":
        return ["resilience", "stress_regulation"];
      case "psychological_resources":
        return ["psychological_resources", "stress_regulation", "anxiety"];
      case "training_and_preparation":
        return [
          "training_and_preparation",
          "physical_health",
          "group_living",
          "team_processes_invisible",
          "transition_processes",
          "action_processes",
          "interpersonal_processes",
        ];
      case "ground_support":
        return [
          "ground_support",
          "psychological_resources",
          "medical_capability",
          "autonomy",
          "situation_awareness",
        ];
      case "medical_capability":
        return ["medical_capability", "physical_health"];
      case "family_and_friends":
        return ["family_and_friends", "stress_regulation"];
      case "supplies":
        return ["supplies", "environmental_monotony", "place_attachment"];
      case "food":
        return ["food", "nutrition", "kinship"];
      case "exercise_equipment":
        return ["exercise_equipment", "physical_workload", "physical_health"];
      case "light_dark_cycles":
        return ["light_dark_cycles", "sleep"];
      case "altered_gravity":
        return ["altered_gravity", "physical_health", "ergonomics"];
      case "radiation":
        return ["radiation", "physical_health"];
      case "atmosphere":
        return ["atmosphere", "sleep", "crew_performance"];
      case "acoustics":
        return ["acoustics", "sleep", "crew_performance"];
      case "nutrition":
        return ["nutrition", "physical_health", "anxiety", "depression"];
      case "habitable_volume":
        return ["habitable_volume", "privacy", "density"];
      case "environmental_control":
        return ["environmental_control", "atmosphere"];
      case "circulation_paths":
        return [
          "circulation_paths",
          "reconfigurability",
          "interpersonal_processes",
          "ergonomics",
          "density",
        ];
      case "layout":
        return [
          "layout",
          "circulation_paths",
          "privacy",
          "interpersonal_processes",
          "reconfigurability",
        ];
      case "lighting":
        return ["lighting", "sleep"];
      case "privacy":
        return [
          "privacy",
          "place_attachment",
          "sleep",
          "stress_regulation",
          "kinship",
          "crew_performance",
        ];
      case "ergonomics":
        return [
          "ergonomics",
          "physical_workload",
          "crew_performance",
          "situation_awareness",
        ];
      case "fixtures":
        return ["fixtures", "place_attachment", "reconfigurability"];
      case "reconfigurability":
        return ["reconfigurability", "place_attachment", "sleep"];
      case "environmental_monotony":
        return ["environmental_monotony", "boredom"];
      case "physical_workload":
        return [
          "physical_workload",
          "physical_health",
          "depression",
          "anxiety",
        ];
      case "cognitive_workload":
        return [
          "cognitive_workload",
          "stress",
          "crew_performance",
          "boredom",
          "sleep",
          "situation_awareness",
        ];
      case "media_attention":
        return ["media_attention", "privacy"];
      case "transition_processes":
        return ["transition_processes", "crew_performance"];
      case "action_processes":
        return ["action_processes", "crew_performance"];
      case "interpersonal_processes":
        return [
          "interpersonal_processes",
          "crew_performance",
          "social_support",
          "kinship",
          "trust",
          "stress_regulation",
          "place_attachment",
        ];
      case "stress_regulation":
        return [
          "stress_regulation",
          "stress",
          "depression",
          "anxiety",
          "kinship",
        ];
      case "place_attachment":
        return [
          "place_attachment",
          "stress_regulation",
          "autonomy",
          "nostalgia_homesickness",
        ];
      case "sleep":
        return [
          "sleep",
          "fatigue",
          "stress_regulation",
          "physical_health",
          "depression",
          "anxiety",
          "crew_performance",
        ];
      case "crew_performance":
        return ["crew_performance"];
      case "physical_health":
        return ["physical_health"];
      case "stress":
        return ["stress"];
      case "fatigue":
        return ["fatigue"];
      case "anxiety":
        return ["anxiety"];
      case "autonomy":
        return ["autonomy"];
      case "situation_awareness":
        return ["situation_awareness", "trust"];
      case "trust":
        return ["trust"];
      case "curiosity":
        return ["curiosity"];
      case "kinship":
        return ["kinship"];
      case "boredom":
        return ["boredom"];
      case "depression":
        return ["depression"];
      case "nostalgia_homesickness":
        return ["nostalgia_homesickness"];
      case "contentment":
        return ["contentment"];
      default:
        return [];
    }
  }

  //All boxes the current one is related to, left and right
  function getRelatedBoxes(smallBoxName) {
    switch (smallBoxName) {
      case "crew_selection":
        return [
          "crew_selection",
          "individual_traits_invisible",
          "social_composition_invisible",
          "extraversion",
          "openness",
          "agreeableness",
          "genetics",
          "conscientiousness",
          "neuroticism",
          "resilience",
          "emotional_bandwidth",
          "crew_size",
          "social_support",
          "social_monotony",
          "density",
          "group_living",
        ];
      case "individual_traits_invisible":
        return [
          "individual_traits_invisible",
          "crew_selection",
          "extraversion",
          "openness",
          "agreeableness",
          "genetics",
          "conscientiousness",
          "neuroticism",
          "resilience",
          "emotional_bandwidth",
        ];
      case "social_composition_invisible":
        return [
          "social_composition_invisible",
          "crew_selection",
          "crew_size",
          "social_support",
          "social_monotony",
          "density",
          "group_living",
        ];
      case "team_processes_invisible":
        return [
          "team_processes_invisible",
          "training_and_preparation",
          "transition_processes",
          "action_processes",
          "interpersonal_processes",
        ];
      case "distance_from_home_earth":
        return [
          "distance_from_home_earth",
          "communication_delay",
          "resource_constrained",
          "isolated",
          "medical_capability",
          "food",
          "family_and_friends",
        ];
      case "mission_duration":
        return [
          "mission_duration",
          "isolated",
          "boredom",
          "family_and_friends",
        ];
      case "communication_delay":
        return [
          "communication_delay",
          "ground_support",
          "family_and_friends",
          "transition_processes",
          "stress",
          "distance_from_home_earth",
        ];
      case "isolated":
        return [
          "isolated",
          "social_support",
          "ground_support",
          "physical_health",
          "stress",
          "distance_from_home_earth",
          "mission_duration",
          "extreme",
        ];
      case "confined":
        return ["confined", "social_monotony", "privacy"];
      case "extreme":
        return [
          "extreme",
          "isolated",
          "genetics",
          "resource_constrained",
          "altered_gravity",
          "radiation",
          "light_dark_cycles",
        ];
      case "resource_constrained":
        return [
          "resource_constrained",
          "supplies",
          "food",
          "distance_from_home_earth",
          "extreme",
        ];
      case "mission_demands":
        return [
          "mission_demands",
          "cognitive_workload",
          "physical_workload",
          "fatigue",
        ];
      case "life_mission_events":
        return ["life_mission_events", "stress", "physical_workload"];
      case "crew_size":
        return ["crew_size", "density", "habitable_volume"];
      case "social_support":
        return [
          "social_support",
          "stress_regulation",
          "physical_health",
          "kinship",
          "interpersonal_processes",
          "extraversion",
          "isolated",
        ];
      case "social_monotony":
        return ["social_monotony", "boredom", "confined"];
      case "density":
        return [
          "density",
          "privacy",
          "stress_regulation",
          "crew_size",
          "habitable_volume",
          "circulation_paths",
        ];
      case "group_living":
        return [
          "group_living",
          "stress_regulation",
          "stress",
          "extraversion",
          "agreeableness",
          "neuroticism",
          "traning_and_preparation",
        ];
      case "extraversion":
        return [
          "extraversion",
          "interpersonal_processes",
          "social_support",
          "nostalgia_homesickness",
          "group_living",
          "genetics",
        ];
      case "openness":
        return ["openness", "curiosity"];
      case "agreeableness":
        return [
          "agreeableness",
          "interpersonal_processes",
          "group_living",
          "genetics",
        ];
      case "neuroticism":
        return [
          "neuroticism",
          "anxiety",
          "depression",
          "interpersonal_processes",
          "stress",
          "nostalgia_homesickness",
          "group_living",
          "genetics",
        ];
      case "conscientiousness":
        return [
          "conscientiousness",
          "crew_performance",
          "physical_health",
          "action_processes",
        ];
      case "genetics":
        return [
          "genetics",
          "physical_health",
          "extraversion",
          "agreeableness",
          "neuroticism",
          "extreme",
        ];
      case "resilience":
        return ["resilience", "stress_regulation"];
      case "genetics":
        return [
          "genetics",
          "physical_health",
          "sleep",
          "depression",
          "anxiety",
          "tranquility",
          "fatigue",
          "stress",
        ];
      case "resilience":
        return [
          "resilience",
          "stress_regulation",
          "depression",
          "anxiety",
          "contentment",
          "stress",
        ];
      case "psychological_resources":
        return [
          "psychological_resources",
          "stress_regulation",
          "anxiety",
          "ground_support",
        ];
      case "training_and_preparation":
        return [
          "training_and_preparation",
          "physical_health",
          "group_living",
          "team_processes_invisible",
          "transition_processes",
          "action_processes",
          "interpersonal_processes",
        ];
      case "ground_support":
        return [
          "ground_support",
          "psychological_resources",
          "medical_capability",
          "autonomy",
          "situation_awareness",
          "communication_delay",
          "isolated",
        ];
      case "medical_capability":
        return [
          "medical_capability",
          "physical_health",
          "ground_support",
          "distance_from_home_earth",
        ];
      case "family_and_friends":
        return [
          "family_and_friends",
          "stress_regulation",
          "communication_delay",
          "distance_from_home_earth",
          "mission_duration",
        ];
      case "supplies":
        return [
          "supplies",
          "environmental_monotony",
          "place_attachment",
          "resource_constrained",
        ];
      case "food":
        return [
          "food",
          "nutrition",
          "kinship",
          "resource_constrained",
          "distance_from_home_earth",
        ];
      case "exercise_equipment":
        return ["exercise_equipment", "physical_workload", "physical_health"];
      case "light_dark_cycles":
        return ["light_dark_cycles", "sleep", "extreme"];
      case "altered_gravity":
        return ["altered_gravity", "physical_health", "ergonomics", "extreme"];
      case "radiation":
        return ["radiation", "physical_health", "extreme"];
      case "atmosphere":
        return [
          "atmosphere",
          "sleep",
          "crew_performance",
          "environmental_control",
        ];
      case "acoustics":
        return ["acoustics", "sleep", "crew_performance"];
      case "nutrition":
        return [
          "nutrition",
          "physical_health",
          "anxiety",
          "depression",
          "food",
        ];
      case "habitable_volume":
        return ["habitable_volume", "privacy", "density", "crew_size"];
      case "environmental_control":
        return ["environmental_control", "atmosphere"];
      case "circulation_paths":
        return [
          "circulation_paths",
          "reconfigurability",
          "interpersonal_processes",
          "ergonomics",
          "layout",
          "density",
        ];
      case "layout":
        return [
          "layout",
          "circulation_paths",
          "privacy",
          "interpersonal_processes",
          "reconfigurability",
        ];
      case "lighting":
        return ["lighting", "sleep"];
      case "privacy":
        return [
          "privacy",
          "place_attachment",
          "sleep",
          "stress_regulation",
          "kinship",
          "crew_performance",
          "media_attention",
          "layout",
          "habitable_volume",
          "density",
          "confined",
        ];
      case "ergonomics":
        return [
          "ergonomics",
          "physical_workload",
          "crew_performance",
          "situation_awareness",
          "circulation_paths",
        ];
      case "fixtures":
        return ["fixtures", "place_attachment", "reconfigurability"];
      case "reconfigurability":
        return [
          "reconfigurability",
          "place_attachment",
          "sleep",
          "layout",
          "fixtures",
          "circulation_paths",
        ];
      case "environmental_monotony":
        return ["environmental_monotony", "boredom", "supplies"];
      case "physical_workload":
        return [
          "physical_workload",
          "physical_health",
          "depression",
          "anxiety",
          "mission_demands",
          "life_mission_events",
          "exercise_equipment",
          "ergonomics",
        ];
      case "cognitive_workload":
        return [
          "cognitive_workload",
          "stress",
          "crew_performance",
          "boredom",
          "sleep",
          "situation_awareness",
          "mission_demands",
        ];
      case "media_attention":
        return ["media_attention", "privacy"];
      case "transition_processes":
        return ["transition_processes", "crew_performance"];
      case "action_processes":
        return ["action_processes", "crew_performance", "conscientiousness"];
      case "interpersonal_processes":
        return [
          "interpersonal_processes",
          "crew_performance",
          "social_support",
          "kinship",
          "trust",
          "stress_regulation",
          "place_attachment",
          "extraversion",
          "agreeableness",
          "neuroticism",
          "circulation_paths",
          "layout",
        ];
      case "stress_regulation":
        return [
          "stress_regulation",
          "stress",
          "depression",
          "anxiety",
          "kinship",
          "social_support",
          "density",
          "group_living",
          "resilience",
          "psychological_resources",
          "family_and_friends",
          "privacy",
          "interpersonal_processes",
          "place_attachment",
          "sleep",
        ];
      case "place_attachment":
        return [
          "place_attachment",
          "stress_regulation",
          "autonomy",
          "nostalgia_homesickness",
          "supplies",
          "privacy",
          "fixtures",
          "reconfigurability",
          "interpersonal_processes",
        ];
      case "sleep":
        return [
          "sleep",
          "fatigue",
          "stress_regulation",
          "physical_health",
          "depression",
          "anxiety",
          "crew_performance",
          "light_dark_cycles",
          "atmosphere",
          "acoustics",
          "lighting",
          "privacy",
          "reconfigurability",
          "cognitive_workload",
          "stress_regulation",
        ];
      case "crew_performance":
        return [
          "crew_performance",
          "sleep",
          "interpersonal_processes",
          "action_processes",
          "transition_processes",
          "cognitive_workload",
          "ergonomics",
          "privacy",
          "acoustics",
          "atmosphere",
          "conscientiousness",
        ];
      case "physical_health":
        return [
          "physical_health",
          "isolated",
          "social_support",
          "conscientiousness",
          "genetics",
          "training_and_preparation",
          "medical_capability",
          "exercise_equipment",
          "altered_gravity",
          "radiation",
          "nutrition",
          "physical_workload",
          "sleep",
        ];
      case "stress":
        return [
          "stress",
          "communication_delay",
          "isolated",
          "life_mission_events",
          "group_living",
          "neuroticism",
          "cognitive_workload",
          "stress_regulation",
        ];
      case "fatigue":
        return ["fatigue", "mission_demands", "sleep"];
      case "anxiety":
        return [
          "anxiety",
          "neuroticism",
          "psychological_resources",
          "nutrition",
          "physical_workload",
          "stress_regulation",
          "sleep",
        ];
      case "autonomy":
        return ["autonomy", "place_attachment", "ground_support"];
      case "situation_awareness":
        return [
          "situation_awareness",
          "trust",
          "ergonomics",
          "ground_support",
          "cognitive_workload",
        ];
      case "trust":
        return ["trust", "situation_awareness", "interpersonal_processes"];
      case "curiosity":
        return ["curiosity", "openness"];
      case "kinship":
        return [
          "kinship",
          "social_support",
          "food",
          "privacy",
          "interpersonal_processes",
          "stress_regulation",
        ];
      case "boredom":
        return [
          "boredom",
          "mission_duration",
          "social_monotony",
          "environmental_monotony",
          "cognitive_workload",
        ];
      case "depression":
        return [
          "depression",
          "neuroticism",
          "nutrition",
          "physical_workload",
          "stress_regulation",
          "sleep",
        ];
      case "nostalgia_homesickness":
        return [
          "nostalgia_homesickness",
          "extraversion",
          "neuroticism",
          "place_attachment",
        ];
      case "contentment":
        return ["contentment"];
      default:
        return [];
    }
  }

  var clickedarrows = [];
  var hoveredarrows = [];
  var clickedBox = null;
  var explanationBox = document.querySelector(".explanation");
  var defaultContent = `
    <div class="explanation-content">
        <p><strong>Hover</strong> over each box for their definitions.</p>
        <p><strong>Click</strong> on a factor and <strong>hover</strong> over its related boxes to read about their relationships.</p>
        <p><strong>Click again</strong> to reset the diagram.</p>
    </div>`;
  explanationBox.innerHTML = defaultContent;

  function resetDiagram() {
    clickedBox = null;
    explanationBox.innerHTML = defaultContent;

    innerBoxes.forEach(function (box) {
      box.classList.remove("greyed-out", "clicked", "greyed-out-hover");
    });

    clickedarrows.forEach((arrow) => arrow.remove());
    clickedarrows = [];
  }

  innerBoxes.forEach(function (innerBox) {
    innerBox.addEventListener("mouseenter", function () {
      if (clickedBox) {
        var relatedBoxes = getRelatedBoxes(clickedBox);
        var smallBoxName = formatToSmallBoxName(innerBox.textContent);
        if (relatedBoxes.includes(smallBoxName)) {
          var clickedAndCurName = clickedBox + "_" + smallBoxName;
          var content = relatedBoxContents[clickedAndCurName];
          explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
        }
      } else {
        var smallBoxName = formatToSmallBoxName(innerBox.textContent);
        var content = boxContents[smallBoxName];
        explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
        var relatedBoxes = getRelatedBoxes(smallBoxName);
        var rightBoxes = getRightBoxes(smallBoxName);
        innerBoxes.forEach(function (box) {
          var relatedBox = formatToSmallBoxName(box.textContent);
          var isRelated = relatedBoxes.includes(relatedBox);

          if (!isRelated) {
            box.classList.add("greyed-out-hover");
          } else {
            if (relatedBox != smallBoxName) {
              if (
                smallBoxName === "team_processes_invisible" &&
                relatedBox != "training_and_preparation"
              ) {
                // do nothing
              } else if (
                smallBoxName === "training_and_preparation" &&
                relatedBox != "team_processes_invisible" &&
                relatedBox !== "physical_health" &&
                relatedBox !== "group_living"
              ) {
                // do nothing
              } else if (
                smallBoxName === "individual_traits_invisible" &&
                relatedBox !== "crew_selection"
              ) {
                // do nothing
              } else if (
                smallBoxName === "social_composition_invisible" &&
                relatedBox !== "crew_selection"
              ) {
                // do nothing
              } else if (
                smallBoxName === "crew_selection" &&
                relatedBox !== "individual_traits_invisible" &&
                relatedBox !== "social_composition_invisible"
              ) {
                // do nothing
              } else {
                if (rightBoxes.includes(relatedBox)) {
                  const arrow = arrowLine(
                    "." + smallBoxName,
                    "." + relatedBox,
                    { color: "white" }
                  );
                  hoveredarrows.push(arrow);
                } else {
                  const arrow = arrowLine(
                    "." + relatedBox,
                    "." + smallBoxName,
                    { color: "white" }
                  );
                  hoveredarrows.push(arrow);
                }
              }
            }
          }
        });
      }
    });

    innerBox.addEventListener("mouseleave", function () {
      innerBoxes.forEach(function (box) {
        box.classList.remove("greyed-out-hover");
      });
      hoveredarrows.forEach((arrow) => arrow.remove());
      hoveredarrows = [];
      if (!clickedBox) {
        explanationBox.innerHTML = defaultContent;
      }
    });

    innerBox.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent click event from propagating to document
      
      // Clean up any arrows from hover when clicking
      hoveredarrows.forEach(arrow => arrow.remove());
      hoveredarrows = [];

      if (!innerBox.classList.contains("clicked")) {
        resetDiagram();
        innerBox.classList.add("clicked");

        if (!explanationBox.dataset.originalContent) {
          explanationBox.dataset.originalContent = explanationBox.innerHTML;
        }

        var smallBoxName = formatToSmallBoxName(innerBox.textContent);
        var content = boxContents[smallBoxName];
        clickedBox = formatToSmallBoxName(content.title);
        explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;

        var relatedBoxes = getRelatedBoxes(smallBoxName);
        var rightBoxes = getRightBoxes(smallBoxName);

        innerBoxes.forEach(function (box) {
          var relatedBox = formatToSmallBoxName(box.textContent);
          var isRelated = relatedBoxes.includes(relatedBox);

          if (!isRelated) {
            box.classList.add("greyed-out");
          } else {
            if (relatedBox != smallBoxName) {
              if (
                smallBoxName === "team_processes_invisible" &&
                relatedBox != "training_and_preparation"
              ) {
                // do nothing
              } else if (
                smallBoxName === "training_and_preparation" &&
                relatedBox != "team_processes_invisible" &&
                relatedBox !== "physical_health" &&
                relatedBox !== "group_living"
              ) {
                // do nothing
              } else if (
                smallBoxName === "individual_traits_invisible" &&
                relatedBox !== "crew_selection"
              ) {
                // do nothing
              } else if (
                smallBoxName === "social_composition_invisible" &&
                relatedBox !== "crew_selection"
              ) {
                // do nothing
              } else if (
                smallBoxName === "crew_selection" &&
                relatedBox !== "individual_traits_invisible" &&
                relatedBox !== "social_composition_invisible"
              ) {
                // do nothing
              } else {
                if (rightBoxes.includes(relatedBox)) {
                  const arrow = arrowLine(
                    "." + smallBoxName,
                    "." + relatedBox,
                    { color: "white" }
                  );
                  clickedarrows.push(arrow);
                } else {
                  const arrow = arrowLine(
                    "." + relatedBox,
                    "." + smallBoxName,
                    { color: "white" }
                  );
                  clickedarrows.push(arrow);
                }
              }
            }
          }
        });
      } 
      else {
        resetDiagram();
      }
    });
  });

  // reset the diagram when clicking anywhere outside the boxes and outside explanation
  document.addEventListener("click", function () {
    const clickedInsideExplanation = event.target.closest(".explanation");

    if (!clickedInsideExplanation) {
      resetDiagram();
    }
  });
});
