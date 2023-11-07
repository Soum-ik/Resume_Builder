// education fetch from localstorage
const Education = () => {
  let Education = localStorage.getItem("education");
  if (Education) {
    return JSON.parse(localStorage.getItem("education"));
  } else {
    return [];
  }
};
export const EducationData = Education();

// summary fetch from localstorage
const summary = () => {
  let summary = localStorage.getItem("summary");
  if (summary) {
    return JSON.parse(localStorage.getItem("summary"));
  } else {
    return [];
  }
};
export const summaryData = summary();

// project fetch from localstorage
const project = () => {
  let project = localStorage.getItem("project");
  if (project) {
    return JSON.parse(localStorage.getItem("project"));
  } else {
    return [];
  }
};

export const projectData = project();

const personalInfo = () => {
  let personalInfo = localStorage.getItem("personalInfo");
  if (personalInfo) {
    return JSON.parse(localStorage.getItem("personalInfo"));
  } else {
    return [];
  }
};

export const personalInfoData = personalInfo();

const work_Expe = () => {
  let work_Expe = localStorage.getItem("work_Expe");
  if (work_Expe) {
    return JSON.parse(localStorage.getItem("work_Expe"));
  } else {
    return [];
  }
};

export const work_ExpeData = work_Expe();
