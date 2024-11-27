export const states = [
    { label: "Andhra Pradesh", value: "AP" },
    { label: "Arunachal Pradesh", value: "AR" },
    { label: "Assam", value: "AS" },
    { label: "Bihar", value: "BR" },
    { label: "Chhattisgarh", value: "CG" },
    { label: "Goa", value: "GA" },
    { label: "Gujarat", value: "GJ" },
    { label: "Haryana", value: "HR" },
    { label: "Himachal Pradesh", value: "HP" },
    { label: "Jharkhand", value: "JH" },
    { label: "Karnataka", value: "KA" },
    { label: "Kerala", value: "KL" },
    { label: "Madhya Pradesh", value: "MP" },
    { label: "Maharashtra", value: "MH" },
    { label: "Manipur", value: "MN" },
    { label: "Meghalaya", value: "ML" },
    { label: "Mizoram", value: "MZ" },
    { label: "Nagaland", value: "NL" },
    { label: "Odisha", value: "OD" },
    { label: "Punjab", value: "PB" },
    { label: "Rajasthan", value: "RJ" },
    { label: "Sikkim", value: "SK" },
    { label: "Tamil Nadu", value: "TN" },
    { label: "Telangana", value: "TG" },
    { label: "Tripura", value: "TR" },
    { label: "Uttar Pradesh", value: "UP" },
    { label: "Uttarakhand", value: "UK" },
    { label: "West Bengal", value: "WB" },
    { label: "Andaman ", value: "AN" },
    { label: "Chandigarh", value: "CH" },
    { label: "Dadra ", value: "DN" },
    { label: "Lakshadweep", value: "LD" },
    { label: "Delhi", value: "DL" },
    { label: "Puducherry", value: "PY" }
  ];


  export  const employmentTypes = [
    { label: "Full-time", value: "full_time" },
    { label: "Part-time", value: "part_time" },
    { label: "Contract", value: "contract" },
    { label: "Internship", value: "internship" },
    { label: "Freelance", value: "freelance" },
    { label: "Temporary", value: "temporary" },
    { label: "Remote", value: "remote" }
  ]

  export  const companySizes = [
    { label: "Small (1-50 employees)", value: "1_50" },
    { label: "Medium (51-200 employees)", value: "51_200" },
    { label: "Large (201-500 employees)", value: "201_500" },
    { label: "Very Large (500+ employees)", value: "500_plus" }
  ]
  export const techStacks = [
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "Ruby", value: "ruby" },
    { label: "Go", value: "go" },
    { label: "PHP", value: "php" },
    { label: "C#", value: "csharp" },
    { label: "C++", value: "cpp" },
    { label: "React", value: "react" },
    { label: "Node.js", value: "nodejs" },
    { label: "Angular", value: "angular" },
    { label: "Vue.js", value: "vuejs" },
    { label: "MongoDB", value: "mongodb" },
    { label: "MySQL", value: "mysql" },
    { label: "PostgreSQL", value: "postgresql" },
    { label: "Docker", value: "docker" },
    { label: "Kubernetes", value: "kubernetes" },
    { label: "AWS", value: "aws" },
    { label: "Azure", value: "azure" },
    { label: "Google Cloud", value: "google_cloud" }
  ]



  export  const degreeRequired = [
    { label: "High School", value: "high_school" },
    { label: "Associate Degree", value: "associate_degree" },
    { label: "Bachelor's Degree", value: "bachelors_degree" },
    { label: "Master's Degree", value: "masters_degree" },
    { label: "Doctoral Degree", value: "doctoral_degree" }
  ];


  export const salaryRanges= [
    { label: "₹0 - ₹3,00,000", value: "0_300000" },
    { label: "₹3,00,001 - ₹5,00,000", value: "300001_500000" },
    { label: "₹5,00,001 - ₹7,00,000", value: "500001_700000" },
    { label: "₹7,00,001 - ₹10,00,000", value: "700001_1000000" },
    { label: "₹10,00,001 - ₹15,00,000", value: "1000001_1500000" },
    { label: "₹15,00,001 - ₹20,00,000", value: "1500001_2000000" },
    { label: "₹20,00,001 and above", value: "2000001_above" }
  ]


  export const experienceLevels = [
    { label: "Entry Level", value: "entry_level" },
    { label: "Junior", value: "junior" },
    { label: "Mid Level", value: "mid_level" },
    { label: "Senior", value: "senior" },
    { label: "Lead", value: "lead" }
  ]

 export const jobListings = [
    {
      jobRole: "Software Engineer",
      jobDescription: "Develop and maintain web applications using JavaScript and React.",
      companyName: "Tech Innovators Pvt Ltd",
      postedTime: "2 days ago",
      companySize: 150, // Number of employees
      companyLogo: "https://www.techinnovators.com/logo.png", // Sample company logo URL
      website: "https://www.techinnovators.com",
      linkedIn: "https://www.linkedin.com/company/tech-innovators",
      employmentType: "Full-time",
      experienceLevel: "Mid Level",
      salaryPackage: "₹8 - ₹12 lpa", // Salary range
      state: "Karnataka"
    },
    {
      jobRole: "Data Scientist",
      jobDescription: "Analyze large datasets to extract meaningful insights and build predictive models.",
      companyName: "DataWorks Solutions",
      postedTime: "1 week ago",
      companySize: 350, // Number of employees
      companyLogo: "https://www.dataworks.com/logo.png", // Sample company logo URL
      website: "https://www.dataworks.com",
      linkedIn: "https://www.linkedin.com/company/data-works-solutions",
      employmentType: "Contract",
      experienceLevel: "Senior",
      salaryPackage: "₹15-₹20 lpa", // Salary range
      state: "Maharashtra"
    },
    {
      jobRole: "UI/UX Designer",
      jobDescription: "Create user-friendly and visually appealing designs for web and mobile applications.",
      companyName: "Creative Designs Inc.",
      postedTime: "5 days ago",
      companySize: 40, // Number of employees
      companyLogo: "https://www.creativedesigns.com/logo.png", // Sample company logo URL
      website: "https://www.creativedesigns.com",
      linkedIn: "https://www.linkedin.com/company/creative-designs-inc",
      employmentType: "Freelance",
      experienceLevel: "Junior",
      salaryPackage: "₹4-₹6 lpa", // Salary range
      state: "Delhi"
    },
    {
      jobRole: "Backend Developer",
      jobDescription: "Design and develop server-side applications, ensuring scalability and performance.",
      companyName: "NextGen Technologies",
      postedTime: "3 days ago",
      companySize: 120, // Number of employees
      companyLogo: "https://www.nextgentech.com/logo.png", // Sample company logo URL
      website: "https://www.nextgentech.com",
      linkedIn: "https://www.linkedin.com/company/nextgen-technologies",
      employmentType: "Full-time",
      experienceLevel: "Mid Level",
      salaryPackage: "₹7-₹10 lpa", // Salary range
      state: "Telangana"
    },
    {
      jobRole: "Product Manager",
      jobDescription: "Manage the product lifecycle from ideation to launch, working closely with cross-functional teams.",
      companyName: "Innovative Solutions Pvt Ltd",
      postedTime: "1 day ago",
      companySize: 400, // Number of employees
      companyLogo: "https://www.innovativesolutions.com/logo.png", // Sample company logo URL
      website: "https://www.innovativesolutions.com",
      linkedIn: "https://www.linkedin.com/company/innovative-solutions",
      employmentType: "Full-time",
      experienceLevel: "Lead",
      salaryPackage: "₹18-₹25 lpa", // Salary range
      state: "Haryana"
    }
  ];


  // reviews

 export  const reviews = [
    { name: "John Doe", review: "Great platform for finding tech jobs! Highly recommended for job seekers. ", role: "Software Developer", postedDate: "March 2022" },
    { name: "Jane Smith", review: "User-friendly interface and lots of job listings. Perfect for those looking for a career switch.", role: "Marketing Manager", postedDate: "July 2021" },
    { name: "Sam Brown", review: "Had a hard time navigating the site. Needs better UX design.", role: "Graphic Designer", postedDate: "September 2023" },
    { name: "Emily White", review: "Found my dream job here! The platform connected me with my current employer swiftly.", role: "Data Analyst", postedDate: "June 2022" },
    { name: "Alex Green", review: "Too many irrelevant job postings. Needs better filtering options to refine search results.", role: "Sales Executive", postedDate: "April 2021" },
    { name: "Olivia Black", review: "Excellent customer support. Quick responses and helpful guidance throughout the job search.", role: "HR Specialist", postedDate: "November 2023" },
    { name: "Michael Johnson", review: "Needs more job categories. Could benefit from a wider range of industry-specific listings.", role: "Project Manager", postedDate: "February 2023" },
    { name: "Sarah Miller", review: "Easy to upload my resume. The process was smooth and hassle-free.", role: "Content Writer", postedDate: "August 2022" },
    { name: "David Lee", review: "Not enough remote job options. A platform for more flexible work would be great.", role: "Web Developer", postedDate: "January 2021" },
    { name: "Emma Wilson", review: "Great for entry-level positions. Found my first job here and it kickstarted my career.", role: "Customer Service Rep", postedDate: "October 2021" },
    { name: "Daniel Harris", review: "Could use more filters. Better search functionality would improve user experience.", role: "IT Consultant", postedDate: "May 2022" },
    { name: "Sophia Clark", review: "Found a job within a week! The site is efficient and reliable for job seekers.", role: "Accountant", postedDate: "July 2023" },
    { name: "James Taylor", review: "Too many ads on the site. It disrupts the browsing experience.", role: "Engineer", postedDate: "April 2023" },
    { name: "Grace Hall", review: "Helpful job alerts. Notifications are timely and relevant to my career interests.", role: "Teacher", postedDate: "December 2021" },
    { name: "Lucas Adams", review: "Needs better search functionality. Sometimes hard to find specific job postings.", role: "Research Scientist", postedDate: "June 2023" },
    { name: "Mia Scott", review: "Great for networking. The platform helps connect with potential employers and industry professionals.", role: "Recruiter", postedDate: "March 2023" },
    { name: "Ethan Wright", review: "Too many fake job postings. Better verification would enhance credibility.", role: "Sales Manager", postedDate: "October 2023" },
    { name: "Ava Moore", review: "Found a job in a new city! The site helped me relocate and start fresh in my career.", role: "Real Estate Agent", postedDate: "February 2022" },
    { name: "Noah King", review: "Could use more job descriptions. Detailed information would help in making informed decisions.", role: "Operations Manager", postedDate: "November 2021" },
    { name: "Lily Carter", review: "Great for career growth. The platform provides various opportunities for professional development.", role: "Product Manager", postedDate: "May 2023" }
  ];



 export const faqData = [
    {
      question: "How do I create an account on the job website?",
      answer: "To create an account, click on the 'Sign Up' button located at the top right corner of the homepage. You will be asked to provide your name, email address, and create a password. Once you complete the form, click 'Submit' to create your account. You will receive a confirmation email to verify your account.",
      
    },
    {
      question: "How can I search for jobs?",
      answer: "To search for jobs, simply enter relevant keywords (e.g., job title, skills, company) into the search bar on the homepage. You can also filter results by location, job type, salary range, and more by using the filter options available on the left side of the job listings page.",
      
    },
    {
      question: "How do I apply for a job?",
      answer: "After finding a job you're interested in, click on the job listing to view more details. If you wish to apply, click the 'Apply Now' button. You may need to upload your resume, fill out additional forms, or complete an assessment depending on the employer's requirements.",
    },
    {
      question: "Do I need a resume to apply for jobs?",
      answer: "Yes, most job applications require you to upload your resume. You can upload your resume in various formats, such as PDF, DOCX, or TXT. Some jobs may also allow you to apply with just your profile details if the employer supports that feature.",
  
    },
    
    {
      question: "How can I update my profile?",
      answer: "To update your profile, log in to your account and go to your profile page. Here, you can edit your personal details, upload a new resume, update your skills and experiences, and adjust your job preferences.",
  
    },
    {
      question: "How do I get job alerts?",
      answer: "You can set up job alerts by entering specific criteria for the types of jobs you're interested in (such as keywords, location, or salary range). Once you've set your preferences, you will receive email notifications when new jobs that match your criteria are posted.",
  
    },
    {
      question: "Is the job website free to use?",
      answer: "Yes, our job website is free to use for job seekers. You can create an account, search for jobs, and apply without any charges. Some employers may offer paid services for premium listings or job boosting.",
  
    },
    {
      question: "How do I know if an employer has reviewed my application?",
      answer: "You can track the status of your application directly from your dashboard. Employers may update the status of your application, or you may receive notifications via email or through the website once your application is reviewed.",
  
    },
    
      
    {
      question: "How can I contact customer support?",
      answer: "If you have any questions or need assistance, you can contact our customer support team via the 'Contact Us' page. You can either fill out the support form or reach out via email at support@jobwebsite.com. Our team will get back to you as soon as possible.",
  
    }
  ];