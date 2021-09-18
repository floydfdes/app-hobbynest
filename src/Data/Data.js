export const heartscapeFields = [
  {
    name: "Age",
    id: "age",
  },
  {
    name: "Sex",
    id: "sex",
    options: [
      { name: "", value: "" },
      { name: "0-Female", value: 0 },
      { name: "1-Male", value: 1 },
    ],
  },
  {
    name: "Chest pain type",
    id: "chestPainType",
    options: [
      { name: "", value: "" },
      { name: "0-Typical angina", value: 0 },
      { name: "1-Atypical angina", value: 1 },
      { name: "2-Non-anginal pain", value: 2 },
      { name: "3-Asymptomatic", value: 3 },
    ],
  },
  { name: "Resting blood pressure", id: "restingBloodSugar" },
  { name: "Cholesterol", id: "cholesterol" },
  {
    name: "Fasting blood sugar",
    id: "fastingBloodSugar",
    options: [
      { name: "", value: "" },
      { name: "0-False( < 120 mg/dl)", value: 0 },
      { name: "1-True( > 120 mg/dl)", value: 1 },
    ],
  },
  { name: "Resting electrocardiographic results", id: "restingEcgResults" },
  { name: "Maximum heart rate", id: "maxHeartRate" },
  {
    name: "Exercise Induced Angina",
    id: "angina",
    options: [
      { name: "", value: "" },
      { name: "0-No", value: 0 },
      { name: "1-Yes", value: 1 },
    ],
  },
];
export const heartscapefieldsCol3 = [
  { name: "Old peak", id: "oldPeak" },
  {
    name: "Slope",
    id: "slope",
    options: [
      { name: "", value: "" },
      { name: "0-Upsloping", value: 0 },
      { name: "1-Flat", value: 1 },
      { name: "2-Downsloping", value: 2 },
    ],
  },
  { name: "Flourosopy", id: "flourosopy" },
  {
    name: "Thalassemia",
    id: "thalassemia",
    options: [
      { name: "", value: "" },
      { name: "1-Normal", value: 1 },
      { name: "2-Fixed defect", value: 2 },
      { name: "3-Reversible defect", value: 3 },
    ],
  },
];

export const heartscapeInitialData = {
  age: "",
  sex: "",
  chestPainType: "",
  restingBloodSugar: "",
  cholesterol: "",
  fastingBloodSugar: "",
  restingEcgResults: "",
  maxHeartRate: "",
  angina: "",
  oldPeak: "",
  slope: "",
  flourosopy: "",
  thalassemia: "",
};
