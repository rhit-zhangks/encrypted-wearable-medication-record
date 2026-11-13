# 6.4.2 Stakeholder Needs and Requirements Definition process
## 1. Prepare for Stakeholder Needs and Requirements Definition
### a. Identify the stakeholders who have an interest in the software system throughout its lifecycle
**Outcome:** A

**XP Implementation:** XP handles this through the Whole Team practice, which says to “include on the team people with all the skills and perspectives necessary for the project to succeed.” So far, we have identified patients, caregivers, healthcare workers, hospital staff, developers, and emergency service workers as stakeholders. We also hope to meet with some of these stakeholders directly to get feedback on our product. The Real Customer Involvement practice also focuses on “people whose lives and business are affected by your system,” which supports getting feedback from the people who would actually use or depend on the product.
(Ch. 7 Whole Team; Ch. 9 Real Customer Involvement)
### b. Define the stakeholder needs and requirements definition strategy
**Outcome:** D

**XP Implementation:** XP does not treat requirements as something that is completely defined at the start of the project. The Weekly Cycle says to “plan work a week at a time,” so requirements can be reviewed and adjusted as the team learns more. We gather needs through meetings with our client and turn them into Jira user stories, while our client also talks with hospital and emergency service workers to gather more information.
(Ch. 7 Weekly Cycle)
### c. Identify and plan for the necessary enabling systems or services needed to support stakeholder needs and requirements definition
**Outcome:** H

**XP Implementation:** The closest XP practice is Ten-Minute Build, which says to “automatically build the whole system and run all of the tests in ten minutes.” For our project, the needed systems include NFC tags, NFC-capable phones, development computers, our Git repository, Rose-Hulman VMs, and GitHub Actions for automated builds and testing. These tools give us a consistent environment for developing and checking the system.
(Ch. 7 Ten-Minute Build)
### d. Obtain or acquire access to the enabling systems or services to be used
**Outcome:** H

**XP Implementation:** The closest XP practice is Continuous Integration, which says to “integrate and build a complete product.” We are documenting the setup so each team member can run the application locally, and we are working toward having the VMs ready for hosting. We already have NFC chips, NFC-capable devices, a shared GitHub repository, and GitHub Actions for continuous integration.
(Ch. 7 Continuous Integration)
## 2. Define Stakeholder Needs
### a. Define context of use within the concept of operations and the preliminary life cycle concepts
**Outcome:** B

**XP Implementation:** XP represents how a system will be used through stories/user stories which describe functionality from the customer’s point of view. Beck says to “plan using units of customer-visible functionality” so we’ll describe situations from the caregiver/user POV for scanning NFC tags, viewing records, and updating records, rather than only talking about the technical side of things.
(Ch. 7 Stories)
### b. Identify stakeholder needs
**Outcome:** D

**XP Implementation:** XP uses stories/user stories to capture what users need software to do. For our project, they’ll need to access medication records securely, update remotely, login, and be able to scan the chip. We’ll continue to build onto our program’s functionality as we learn more about user needs. Again, stories representing these needs will be written “using units of customer-visible functionality”.
(Ch. 7 Stories)
### c. Prioritize and down‐select needs
**Outcome:** E

**XP Implementation:** The XP book prioritizes through the Weekly Cycle, where customers decide what stories should be worked on next. Specifically, it says to “have the customers pick a week’s worth of stories to implement”. We’ve been doing this by asking our client what we should be working on for the next week and sometimes suggesting specific things that we’re interested in implementing.
(Ch. 7  Weekly Cycle)
### d. Define the stakeholder needs and rationale
**Outcome:** D

**XP Implementation:** The XP book uses stories to connect what the customer wants to the work needed to implement that. Beck says that “estimation gives the business and technical perspectives a chance to interact,” which helps the team understand the rationale behind stakeholder needs. For our team, we discuss the purpose behind needs during our client meetings, as our client is good at giving examples to back up desired functionality.
(Ch. 7 Stories)
## 3. Develop the operational concept and other life cycle concepts
### a. Define a representative set of scenarios to identify the required capabilities that correspond to anticipated operational and other life cycle concepts
**Outcome:** B

**XP Implementation:** XP uses stories and tests to make different use cases more concrete. The Weekly Cycle section in the book says to “start the week by writing automated tests that will run when the stories are completed,” so we can make stories for situations like viewing a record, updating medication information, scanning a lost chip without authorization, or an unauthorized user trying to get access. We can also write unit tests for making sure authorization works as intended, and our records are secure. These stories and tests will help us figure out what functionality the system actually needs.
(Ch. 7 Weekly Cycle)
### b. Identify the factors affecting interactions between users and the system
**Outcome:** B

**XP Implementation:** It’s not directly connected to user/system interaction, but the Informative Workspace section focuses on making important information easy to understand quickly. Beck says that someone should be able to “get a general idea of how the project is going in fifteen seconds.” For our web app, we can apply the same idea by keeping medication information and common actions clear, especially since someone may be using the site on a phone. Beck also says that interaction-design tools are “no substitute for conversation with real people,” so we should get feedback on the interface from actual healthcare workers when possible. This will most likely take place in Spring Quarter, after the webapp functionality is done.
(Ch. 7 Informative Workspace; Ch. 10 Interaction Designers)
## 4. Transform stakeholder needs into stakeholder requirements
### a. Identify the constraints on a system solution
**Outcome:** C

**XP Implementation:** XP considers constraints when deciding what can realistically be built. In the Stories section, Beck says that “to choose a car wisely you need to know your constraints, both cost and intended use.” Some of our constraints are time, budget, security/HIPAA requirements, and our limited experience with hardware development for the NFC encasing materials. We also mainly gather information from actual healthcare workers through our client, which means it’s harder and more time consuming to get that information.
(Ch. 7 Stories)
### b. Identify the stakeholder requirements and functions that relate to critical quality characteristics, such as assurance, safety, security, environment, or health
**Outcome:** E
 
**XP Implementation:** XP treats quality as something the whole team is responsible for instead of something checked only at the end. In the Shared Code section, Kent Beck says that team members can “collectively assume responsibility not just for the quality of what they deliver to users but also for the pride they take in their work along the way.” All of the members of our team work on and make decisions regarding security, medication fields, access controls, and other technical decisions.
(Ch. 9 Shared Code)
### c. Define stakeholder requirements, consistent with life cycle concepts, scenarios, interactions, constraints, and critical quality characteristics
**Outcome:** E

**XP Implementation:** Test-First Programming makes requirements more specific because we have to decide what the correct behavior should be before or while implementing it. Beck says that “by stating explicitly and objectively what the program is supposed to do, you give yourself a focus for your coding.” For example, we can define that an unauthorized user cannot view a medication record and then write a test that checks that behavior. We can also test sample medication record updates and make sure that the database shows the correct information.
(Ch. 7 Test-First Programming)
## 5. Analyze stakeholder requirements
### a. Analyze the complete set of stakeholder requirements
**Outcome:** E

**XP Implementation:** XP expects the team to keep adjusting the design as it learns more instead of assuming the first plan is final. Incremental Design says to “strive to make the design of the system an excellent fit for the needs of the system that day.” We can change requirements or stories when client feedback or testing shows that our original idea no longer fits what users need. This has already been the case for us, as when we showed the client our initial medication record page, they suggested some extra fields to include.
(Ch. 7 Incremental Design)
### b. Define critical performance measures that enable the assessment of technical achievement
**Outcome:** F

**XP Implementation:** XP uses automated builds and tests to give the team a clear way to check whether changes still work. In Continuous Integration, Beck says, “we wait for the build to complete and the entire test suite to run with no regressions before proceeding.” For our project, we can use tests to check things like login, authorization, saving records, and keeping change history correct. We’ll be using GitHub actions/workflows to do this.
(Ch. 7 Continuous Integration)
### c. Feed back the analyzed requirements to applicable stakeholders to validate that their needs and expectations have been adequately captured and expressed
**Outcome:** G

**XP Implementation:** Incremental Deployment supports getting feedback before the entire project is finished. Beck recommends finding “a little piece of functionality or a limited data set you can handle right away” and deploying it. We can show our client smaller working parts of the system throughout the year and use their feedback before we build too far in the wrong direction. So far, we’ve showed the client a sample login and medication page. This also follows Real Customer Involvement, since actual customers “are who you are trying to please,” making their feedback more useful than relying only on our own assumptions.
(Ch. 9 Incremental Deployment; Ch. 9 Real Customer Involvement)
### d. Resolve stakeholder requirements issues
**Outcome:** G

**XP Implementation:** XP allows requirements to change when the team learns that a story is too large, unclear, or not worth the amount of work it would take. The Stories section says that when the team knows the cost of features, it can “split, combine, or extend scope based on what it knows about the features' value.” We can do the same with our client when a requirement needs to be changed or simplified. So far our scope is relatively limited to just the webapp, leaving room for late Winter/Spring quarter for more features if stakeholders are interested.
(Ch. 7 Stories)
## 6. Manage the stakeholder needs and requirements definition
### a. Obtain explicit agreement with designated stakeholders on the stakeholder requirements
**Outcome:** G

**XP Implementation:** XP’s implementation of this task would be the weekly cycle, which explicitly includes a recurring weekly meeting with the customers/stakeholders to prioritize and agree on what gets built/developed first. Beck describes how in this meeting the team will “have the customers pick a week’s worth of stories to implement this week,” and Chapter 12 adds to “agree on the work that needs to be done within the budget.” The note’s concern about conflict resolution not compromising stakeholder intentions is supported by planning being done as a whole team, as “the whole team together may be able to find a way for the seemingly divergent needs of the customers to be satisfied.” (Ch. 7 Weekly Cycle; Ch. 12 Planning: Managing Scope)
### b. Maintain traceability of stakeholder needs and requirements
**Outcome:** I

**XP Implementation:** The most obvious implementation of this is stories, which are defined in the XP book as “units of customer-visible functionality”. Stories allow for tracking what the customer thinks is important, as well as how important it is to the customer.
### c. Provide key artifacts and information items that have been selected for baselines
**Outcome:** H

**XP Implementation:** XP’s Weekly Meetings seem to be the closest to this, as the book mentions “Review progress to date, including how actual progress for the previous week matched expected progress”. While not mentioned explicitly, weekly meetings are also good times to meet with the client and show them the new system.

 # 6.4.4 Architecture Definition Process
## 1. Prepare for architecture definition
### a. Review pertinent information and identify key drivers of the architecture
**Outcome:** A

**XP Implementation:** Weekly/Quarterly Cycles. “Review progress to date, including how actual progress from the previous week matched expected progress.” “Identify bottlenecks, especially those controlled outside the team. Initiate repairs.” Each is a good time to see how progress has been, and see if anything has been missed or pushed to the side.
### b. Identify stakeholder concerns
**Outcome:** A

**XP Implementation:** Stories. “Plan using units of customer-visible functionality.” Stories are what best highlight what the customer finds important, so they encapsulate this well.
### c. Define the Architecture Definition roadmap, approach, and strategy
**Outcome:** K

**XP Implementation:** Quarterly Cycles. “Plan work a quarter at a time. Once a quarter reflect on the team, the project, its progress, and its alignment with larger goals.” As with some below, every quarter is a good time to review the roadmap and see how things are going.
### d. Define architecture evaluation criteria based on stakeholder concerns and key requirements
**Outcome:** A

**XP Implementation:** Quarterly Cycles. “Plan work a quarter at a time. Once a quarter reflect on the team, the project, its progress, and its alignment with larger goals.” Quarterly cycles are a good time to have criteria made or updated as necessary.
### e. Identify and plan for the necessary enabling systems or services needed to support the Architecture Definition process
**Outcome:** H

**XP Implementation:** Quarterly Cycles. “Using a quarter as a planning horizon synchronizes nicely with other business activities that occur quarterly.” In addition, quarters are good for finding the necessary systems or services that are needed for architecture definition.
### f. Obtain or acquire access to the enabling systems or services to be used
**Outcome:** J

**XP Implementation:** Shared Code. “Anyone on the team can improve any part of the system at any time. If something goes wrong with the system and fixing it is not out of scope for what I’m doing right now, I should go ahead and fix it.” By having shared ownership, anyone is able to have access to the systems or services needed.
## 2. Develop architecture viewpoints
### a. Select, adapt, or develop viewpoints and model kinds based on stakeholder concerns
**Outcome:** I

**XP Implementation:** Stories. “Plan using units of customer-visible functionality.” What the customer deems important can be encapsulated via stories perfectly well, which can then be used in viewpoints and models.
### b. Establish or identify potential architecture framework(s) to be used in developing models and views
**Outcome:** J

**XP Implementation:** Quarterly Cycles. “Plan work a quarter at a time. Once a quarter reflect on the team, the project, its progress, and its alignment with larger goals.” This is also a perfect time to figure out what frameworks align with the project, and how they can be used for models and views. 
### c. Capture rationale for selection of framework(s), viewpoints and model kinds
**Outcome:** K

**XP Implementation:** Weekly cycles do this. “Have the customers pick a week’s worth of stories to implement this week.” By having the customer choose, the rationale is identified and can be noted down in whatever form weekly meetings are recorded.
### d. Select or develop supporting modelling techniques and tools
**Outcome:** J

**XP Implementation:** Weekly/Quarterly Cycles. These are opportunities to review what’s currently been happening with the progress of the project, allowing for evaluation of current modelling technique and tools. “Review progress to date, including how actual progress from the previous week matched expected progress.” “Identify bottlenecks, especially those controlled outside the team. Initiate repairs.”
## 3. Develop models and views of candidate architectures
### a. Define the software system context and boundaries in terms of interfaces and interactions with external entities
**Outcome:** C

**XP Implementation:** The closest thing to this is stories. “When the team knows the cost of features it can split, combine, or extend scope based on what it knows about the features’ value.” Stories can help estimate value, but they also allow the chance to evaluate the context of the system and what a story will interact with, external or not.
### b. Identify architectural entities and relationships between entities that address key stakeholder concerns and critical software system requirements
**Outcome:** I

**XP Implementation:** This could be a bit of stories, but it sounds more like Weekly Cycle. “Have the customer pick a week’s worth of stories to implement this week.” This is having the stakeholder address their own key concerns, and thusly letting the developers identify the architectural entities and relationships and map them appropriately.
### c. Allocate concepts, properties, characteristics, behaviors, functions, or constraints that are significant to architecture decisions of the software system to architectural entities
**Outcome:** E

**XP Implementation:** This is Incremental Deployment. “Find a little piece of functionality or a limited data set you can handle right away. Deploy it.” Spitting out small parts of the system bit by bit is allocating the significant items of architecture decisions to the software system’s architectural entities.
### d. Select, adapt, or develop models of the candidate architectures of the software system
**Outcome:** G

**XP Implementation:** Incremental Design seems to be the most appropriate. “Invest in the design of the system daily.” Is the very first sentence that is said when talking about Incremental Design. Incremental Design is the process of adapting or developing the models of the software system.
### e. Compose views from the models in accordance with identified viewpoints to express how the architecture addresses stakeholder concerns and meets stakeholder and system/software requirements
**Outcome:** E

**XP Implementation:** This is stories. “Estimation gives the business and technical perspectives a chance to interact, which creates value early, when an idea has the most potential.” The identified viewpoints interact with the models and thusly express stakeholder concerns.
### f. Harmonize the architecture models and views with each other
**Outcome:** D

**XP Implementation:** Continuous Integration is one way to achieve this goal, specifically synchronous integration. “Synchronous builds also create positive pressure for a short, clear feedback cycle.” This cycle can outline differences between the architecture models and views.
## 4. Relate the architecture to design
### a. Identify software system elements that relate to architectural entities and the nature of these relationships
**Outcome:** F

**XP Implementation:** Incremental Design is probably the closest practice to this, as it focuses on improving the design throughout development. Beck says to “invest in the design of the system every day.” As we work on the project the design of the system changes as the project needs it. 
### b. Define the interfaces and interactions among the software system elements and external entities
**Outcome:** F

**XP Implementation:** Test-First Programming can help with defining how the different parts of a system interact. Beck mentions that “loosely coupled, highly cohesive code is easy to test.” By making sure we write low coupling, easy to test code we can better easily determine the interactions between each section of the code. 
### c. Partition, align and allocate requirements to architectural entities and system elements
**Outcome:** I

**XP Implementation:** Stories seem to be the best fit for this task, as they help break down requirements into smaller pieces. Beck says to “plan using units of customer-visible functionality.” When we assign requirements to sections of the architecture, with stories, we can better design and work on the system with knowledge of the requirements. 
### d. Map software system elements and architectural entities to design characteristics
**Outcome:** I

**XP Implementation:** Incremental Design also applies here, as it involves making changes to the design to better fit what the system needs. Beck says to “strive to make the design of the system an excellent fit for the needs of the system that day.” This would allow us to make changes to different components as needed to better meet requirements like security and reliability.
### e. Define principles for the software system design and evolution
**Outcome:** H

**XP Implementation:** Incremental Design is a good fit for this task because it gives some guidelines for how the design should be maintained. One of these is that “designs without duplication tend to be easy to change.” Avoiding duplicated code and keeping things simple should make it easier for us to change or add features later on
## 5. Assess architecture candidates
### a. Assess each candidate architecture against constraints and requirements
**Outcome:** G

**XP Implementation:** Once again, Incremental Design seems to fit this task, as it focuses on designing based on what the system currently needs. Beck says to keep “the design investment in proportion to the needs of the system so far.” This can help us avoid making things unnecessarily complicated when deciding on different approaches, while also considering our time and security requirements.
### b. Assess each candidate architecture against stakeholder concerns using evaluation criteria
**Outcome:** G

**XP Implementation:** Real Customer Involvement would be useful here, since it focuses on including the people who will actually use the system. Beck says to “make people whose lives and business are affected by your system part of the team.” For our project, this would mean discussing different design decisions with our client to see if they meet what the stakeholders need.
### c. Select the preferred architecture(s) and capture key decisions and rationale
**Outcome:** G

**XP Implementation:** Pair Programming could be used for this, since it allows developers to discuss different ways of implementing something. Beck mentions that pair programmers “brainstorm refinements to the system.” 
### d. Establish the architecture baseline of the selected architecture
**Outcome:** H

**XP Implementation Code and Tests seems to be the closest practice here, since XP focuses on keeping the actual implementation of the system up to date. Beck says to “maintain only the code and the tests as permanent artifacts.” These are both stored on the repository, so it can serve as a reference for the current architecture of the system.
## 6. Manage the selected architecture
### a. Formalize the architecture governance approach and specify governance‐related roles and responsibilities, accountabilities, and authorities related to design, quality, security, and safety
**Outcome:** H

**XP Implementation:** Shared Code would apply here because it allows all team members to work on and improve different parts of the project.  Beck says that “anyone on the team can improve any part of the system at any time.” This means that responsibility for the architecture and its quality is shared among the developers rather than being left to one person.
### b. Obtain explicit acceptance of the architecture by stakeholders
**Outcome:** A

**XP Implementation:** This is Real Customer Involvement 100%. Beck mentions that actual customers “are who you are trying to please.” We can show our client the architecture we plan to use and get their feedback before moving further into development.
### c. Maintain concordance and completeness of the architectural entities and their architectural characteristics
**Outcome:** D

**XP Implementation:** Continuous Integration could help with this because it involves regularly checking that the different parts of the system work together. Beck says to “integrate and test changes after no more than a couple of hours.” Doing this would help us catch problems between components as we continue adding functionality.
### d. Organize, assess and control evolution of the architecture models and views to help ensure that the architectural intent is met and the architectural vision and key concepts are correctly implemented
**Outcome:** D

**XP Implementation:** Incremental Design is a good fit for this, as it allows changes to the design throughout development. Beck says that “refactoring is a discipline of design.” We can use refactoring to improve our system as we work on it, while using our repository and automated testing to make sure the changes don't cause problems.
### e. Maintain the architecture definition and evaluation strategy
**Outcome:** H

**XP Implementation:** Quarterly Cycles would be useful here because they provide a regular opportunity to look at the direction of the project. Beck says to “plan work a quarter at a time.” At the beginning of each quarter, we can look at how our architecture is working and decide whether anything needs to be changed based on feedback or progress.
### f. Maintain traceability of the architecture
**Outcome:** K

**XP Implementation:** This could probably be Incremental Design. As we work on the project the traceability of the architecture can be shown through the shared code base, which is our repository. 
### g. Provide key artifacts and information items that have been selected for baselines
**Outcome:** H

**XP Implementation Code and Tests fits this task, since XP focuses on keeping these as the main artifacts of the project. Beck says to “generate other documents from the code and tests.” We can keep our code and tests in the repository  along with any documentation we need, giving us a way to reference the current state of the project.
# 6.4.5 Design Definition Process
## 1. Prepare for software system design definition
### a. Define the design definition strategy, consistent with the selected life cycle model and anticipated design artifacts
**Outcome:** A

**XP Implementation:** Incremental design, as it is a design definition strategy, and regards a life cycle model and anticipated design artifacts, with guidelines being to "Invest in the design of the system every day", and "design done close to when it is used is more efficient" (all also tying into the life cycle, and regarding design artifacts indirectly). (Ch. 7 Incremental Design)
### b. Select and prioritize design principles and design characteristics
**Outcome:** A

**XP Implementation:** Incremental design also fits as an implementation of this task, as it outlines design principles such as keeping "the design investment in proportion to the needs of the system so far", and characteristics like prioritization of zero duplication ("Designs without duplication tend to be easy to change"). (Ch. 7 Incremental Design)  Note that test-first programming could also fit well as prioritization of designing around tests and prioritizing "loosely coupled, highly cohesive code" may fall under this task. (Ch. 7 Test-First Programming)
### c. Identify and plan for the necessary enabling systems or services needed to support design definition
**Outcome:** G

**XP Implementation:** Continuous integration seems to be the XP implementation for this task, as it includes enabling systems like the "build system" which notices changes and in response "starts to build and test", and the deploy system such that "eventual first deployment of the system is no big deal." (Ch. 7 Continuous Integration)
### d. Obtain or acquire access to the enabling systems or services to be used
**Outcome:** G

**XP Implementation:** Once again continuous integration appears to be XP's implementation of this task as it describes and thus subsequently requires access to enabling systems to be used, such as a build system and deploy system (sometimes both come in the same package). For example, it outlines the importance of this as acquiring such system "reduces the cost of automating tests." (Ch. 13 Testing: Early, Often, and Automated)
## 2. Establish designs related to each software system element
### a. Transform architectural and design characteristics into the design of software system elements
**Outcome:** A

**XP Implementation:** Incremental design fits as the implementation of this task, as it outlines adaptive design due to incremental progress, with repeated and gradual transformation of ectural and design characteristics into the design of software system elements. As stated by Beck, "When your understanding of the best possible design leaps forward, work gradually but persistently to bring the design back into alignment with your understanding" and "Refactoring is a discipline of design that codifies these recurring patterns of changes." Although indirect, these quotes indicate how the manner of transforming new or existing architectural and design characteristics is transformed into the design of software system elements. (Ch. 7 Incremental Design)
### b. Define and prepare or obtain the necessary design enablers
**Outcome:** C

**XP Implementation:** XP's implementation of this task is stories, described in chapter 7. This task's note directly mentions "user stories" and "user story points" as design enablers or parts of design enablers, with Beck describing these this implementation as including "estimation" and plans "using units of customer-visible functionality", both of which fall directly under defining and preparation/obtaining of design enablers, emphasizing the importance of stories as enabling "business and technical perspectives a chance to interact." (Ch. 7 Stories)
### c. Examine design alternatives and feasibility of implementation
**Outcome:** E

**XP Implementation:** XP’s implementation of this task would likely be pair programming, as it describes designing as a shared dialog, with Beck stating that “pair programming is a dialog between two people simultaneously programming (and analyzing and designing and testing)” and that pair programmers “brainstorm refinements to the system.” Both of these allow for two programmers to suggest alternatives in design and feasability of implementation as they implement, achieving examination of both through a two-factor system. As even Clarified by Beck, “the resulting idea, not the code, [is brought] back to the team”, indicating a series of brainstorming and design decisions, with choices between various alternatives. (Ch. 7 Pair Programming)
### d. Refine or define the interfaces among the software system elements and with external entities
**Outcome:** D

**XP Implementation:** Test-first programming fits as XP’s implementation of this task, as writing tests before implementation directly shapes how elements interface with each other. Beck notes that “folk wisdom in software development teaches that interfaces shouldn’t be unduly influenced by implementations,” and that “writing a test first is a concrete way to achieve this separation.” This lines up explicitly with the “separation of interface and implementation” principle listed in the standard’s notes for this process. Additionally, “in XP, when possible, tests are written in advance of implementation,” meaning interfaces are defined, and then refined as tests evolve, before the code behind them is implemented. (Ch. 13 Testing: Early, Often, and Automated)
### e. Establish the design artifacts
**Outcome:** F

**XP Implementation:** XP’s implementation of this task is code and tests, which Beck describes as the only permanent artifacts, stating, “Maintain only the code and the tests as permanent artifacts. Generate other documents from the code and tests.” This task’s note lists examples such as prototypes, interface specifications, and pseudocode, with XP’s answer being that the code and tests themselves serve these purposes, while other documents are generated only as needed. This is supported by the reasoning that “any artifacts contributing to these two sources of value are themselves valuable. Everything else is waste.” (Ch. 9 Code and Tests)
## 3. Assess alternatives for obtaining software system elements
### a. Determine technologies required for each element composing the software system
**Outcome:** E

**XP Implementation:** The closest fit in XP's book by Beck is likely incremental design, as technology decisions/determinations fall under the idea that “design done close to when it is used is more efficient.” This effectively means that technologies would be determined as each element is needed rather than all up front, and so the composition of the software system would be ever-evolving including the determined technologies required for each element in it. (Ch. 7 Incremental Design)
### b. Identify candidate alternatives for the software system elements
**Outcome:** E

**XP Implementation:** Similarly to 2c, pair programming also seems to fit best as XP's implementation of this task, as it allows for exploring candidate ideas through interaction within a pair of programmers and further exploration when "the resulting idea, not the code, [is brought] back to the team." Beck also highlights this property in prototyping, when stating "you can even prototype alone and still respect pairing", which would directly pair with "candidate alternatives" to software system elements. (Ch. 7 Pair Programming)
### c. Assess each candidate alternative against criteria developed from expected design characteristics and element requirements to determine suitability for the intended application
**Outcome:** E

**XP Implementation:** XP’s implementation of this task is test-first programming, as this task’s note directly mentions “enabling systems required to test the candidate alternative (test-driven design and development).” Beck’s directive to “write a failing automated test before changing any code” gives explicit, objective criteria to assess a candidate against, as “by stating explicitly and objectively what the program is supposed to do, you give yourself a focus for your coding.” (Ch. 7 Test-First Programming)
### d. Choose the preferred alternatives among candidate design solutions for the software system elements
**Outcome:** E

**XP Implementation:** The closest fit is incremental design, as the choice of an alternative is made under the principle that XP teams can “defer investment to the last responsible moment,” meaning choices are made when there is enough experience to make them well and enough of a preference (likely through the client or software requirements) to make a accurate judgement call. This could also fit into the aforementioned practices in pair programming of listing alternatives and choosing the preferred one. (Ch. 7 Incremental Design)
## 4. Manage the design
### a. Capture the design and rationale
**Outcome:** F

**XP Implementation:** XP’s implementation of this task is code and tests, with Kent Beck's ideas that the design and its rationale should live in the permanent artifacts, rather than in separate documents. Beck instructs followers of XP to “generate other documents from the code and tests,” and suggests that the team should “rely on social mechanisms to keep alive important history of the project,” which covers the rationale that the code itself cannot show. This task’s note also lists test cases as commonly captured information, and test-first programming (as well as its artifacts) supports this by “demonstrating your intentions with automated tests.” (Ch. 9 Code and Tests)
### b. Establish traceability between the detailed design elements, the system/software requirements, and the architectural entities of the software system architecture
**Outcome:** H

**XP Implementation:** XP’s best-fit implementation of this task is stories, as XP achieves traceability through stories and tests rather than a formal traceability matrix. Beck describes planning using “units of customer-visible functionality,” with stories given “short names in addition to a short prose or graphical description” on index cards, meaning each piece of the design can be tied back to the story, and card, that precedented it. The testing portion of stories then closes the loop, as during verification “I can point to what the system actually does as demonstrated by the tests.” (Ch. 7 Stories)
### c. Determine the status of the software system and element design
**Outcome:** F

**XP Implementation:** Once again, continuous integration appears to be the optimal candidate for the XP implementation of this task. Each integration reports the current state of the system alongside a history of changes and integrations and versions (including those deployed). Beck highlights waiting “for the build to complete and the entire test suite to run with no regressions before proceeding,” which gives a frequent, objective status of the software system. This also fits the task’s note about measuring completeness and verifying the design as it progresses, as “tests can provide a measure of progress" throughout development. (Ch. 7 Continuous Integration)
### d. Provide key artifacts and information items that have been selected for baselines
**Outcome:** F

**XP Implementation:** The practice of a single code base, as implemented in XP, fits as an implementation of this task. Notably, it keeps one authoritative (selected) version of the artifacts, which serves as the baseline, rather than multiple ongoing branches which all hold their own sets of artifacts. Beck states in this practice that “there is only one code stream,” and that temporary branches should never “live longer than a few hours,” while warning that “multiple code streams are an enormous source of waste in software development.” The task’s note refers to Configuration Management maintaining baselines, and a single code base together with continuous integration’s directive to “integrate and build a complete product” fills that role directly to ensure a singular, ongoing and reliable baseline.

