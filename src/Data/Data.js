export const heartscapeFields = [
  {
    name: 'Age',
    id: 'age',
    placeholder: '0-200',
  },
  {
    name: 'Sex',
    id: 'sex',
    options: [
      { name: '', value: '' },
      { name: '0-Female', value: 0 },
      { name: '1-Male', value: 1 },
    ],
  },
  {
    name: 'Chest pain type',
    id: 'chestPainType',
    options: [
      { name: '', value: '' },
      { name: '0-Typical angina', value: 0 },
      { name: '1-Atypical angina', value: 1 },
      { name: '2-Non-anginal pain', value: 2 },
      { name: '3-Asymptomatic', value: 3 },
    ],
  },
  {
    name: 'Resting blood pressure',
    id: 'restingBloodSugar',
    placeholder: '0-200',
  },
  { name: 'Cholesterol', id: 'cholesterol', placeholder: '0-600' },
  {
    name: 'Fasting blood sugar',
    id: 'fastingBloodSugar',
    options: [
      { name: '', value: '' },
      { name: '0-False( < 120 mg/dl)', value: 0 },
      { name: '1-True( > 120 mg/dl)', value: 1 },
    ],
  },
  {
    name: 'Resting electrocardiographic results',
    id: 'restingEcgResults',
    placeholder: '0-2',
  },
  { name: 'Maximum heart rate', id: 'maxHeartRate', placeholder: '0-250' },
  {
    name: 'Exercise Induced Angina',
    id: 'angina',
    options: [
      { name: '', value: '' },
      { name: '0-No', value: 0 },
      { name: '1-Yes', value: 1 },
    ],
  },
];
export const heartscapefieldsCol3 = [
  { name: 'Old peak', id: 'oldPeak', placeholder: '0-7' },
  {
    name: 'Slope',
    id: 'slope',
    options: [
      { name: '', value: '' },
      { name: '0-Upsloping', value: 0 },
      { name: '1-Flat', value: 1 },
      { name: '2-Downsloping', value: 2 },
    ],
  },
  { name: 'Flourosopy', id: 'flourosopy', placeholder: '0-3' },
  {
    name: 'Thalassemia',
    id: 'thalassemia',
    options: [
      { name: '', value: '' },
      { name: '1-Normal', value: 1 },
      { name: '2-Fixed defect', value: 2 },
      { name: '3-Reversible defect', value: 3 },
    ],
  },
];

export const heartscapeInitialData = {
  age: '',
  sex: '',
  chestPainType: '',
  restingBloodSugar: '',
  cholesterol: '',
  fastingBloodSugar: '',
  restingEcgResults: '',
  maxHeartRate: '',
  angina: '',
  oldPeak: '',
  slope: '',
  flourosopy: '',
  thalassemia: '',
};

export const validationMessage = {
  age: '',
  sex: '',
  chestPainType: '',
  restingBloodSugar: '',
  cholesterol: '',
  fastingBloodSugar: '',
  restingEcgResults: '',
  maxHeartRate: '',
  angina: '',
  oldPeak: '',
  slope: '',
  flourosopy: '',
  thalassemia: '',
};

export const help = [
  { id: 'age', helpTitle: 'Age', helpContent: ' The age of the person' },
  { id: 'sex', helpTitle: 'Sex', helpContent: 'The Gender of the person' },
  {
    id: 'chestPain',
    helpTitle: 'Chest pain',
    helpContent:
      'Asymptomatic is defined as a transient alteration in myocardial perfusion in the absence of chest pain or the usual anginal equivalents.',
  },
  {
    id: 'bloodPressure',
    helpTitle: 'Blood pressure',
    helpContent:
      ' Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg.<br/>High blood pressure is considered to be 140/90mmHg or higher.<br/>Low blood pressure is considered to be 90/60mmHg or lower.',
  },
  {
    id: 'cholestrol',
    helpTitle: 'Cholestrol',
    helpContent:
      'Cholesterol is a waxy substance found in your blood. Your body needs cholesterol to build healthy cells,but high levels of cholesterol can increase your risk of heart disease.',
  },
  {
    id: 'fastingBloodSugar',
    helpTitle: 'Fasting blood sugar',
    helpContent:
      "A fasting blood sugar level less than 100 mg/dL (5.6 mmol/L) is normal.<br/> A fasting blood sugar level from 100 to 125 mg/dL (5.6 to 6.9 mmol/L) is considered prediabetes.<br/> If it's 126 mg/dL (7 mmol/L) or higher on two separate tests, you have diabetes",
  },
  {
    id: 'restingElectrocardiography',
    helpTitle: 'Resting electrocardiography',
    helpContent:
      'Resting electrocardiography (ECG) is a non-invasive test that can detect abnormalities including arrhythmias, evidence of coronary heart disease, left ventricular hypertrophy and bundle branch blocks.<br/> In the preoperative setting, resting ECG is used to assess known cardiovascular diseases, to detect previously undiagnosed cardiovascular diseases, and to provide a baseline standard against which to measure changes in the postoperative period.',
  },
  {
    id: 'maximumHeartRate',
    helpTitle: 'Maximum heart rate',
    helpContent:
      " You can calculate your maximum heart rate by subtracting your age from 220.<br/> For example, if you're 45 years old, subtract 45 from 220 to get a maximum heart rate of 175. This is the average maximum number of times your heart should beat per minute during exercise.",
  },
  {
    id: 'exerciseInducedEngima',
    helpTitle: 'Exercise Induced Angina',
    helpContent:
      'Exercise Induced Angina is a type of chest pain that occurs during physical activity. It is caused by a temporary decrease in blood flow to the heart muscle, usually due to narrowed or blocked coronary arteries. It can be a symptom of underlying heart disease and should be evaluated by a healthcare professional.',
  },
  {
    id: 'oldPeak',
    helpTitle: 'Old peak',
    helpContent:
      'Old Peak in heart refers to an abnormal pattern seen on an electrocardiogram (ECG) that suggests a previous heart attack. This pattern is characterized by a tall R wave in lead V4, which is an indicator of a previous heart attack. Old Peak in heart is typically seen in patients who have had a heart attack in the past, and it is considered to be a risk factor for future heart attacks.',
  },
  {
    id: 'slope',
    helpTitle: 'Slope',
    helpContent:
      'The slope of the ST segment in an electrocardiogram (ECG) is a measure of the rate at which the electrical activity in the heart is changing. A positive slope is indicative of ischemia, while a negative slope may indicate an injury to the heart muscle. The slope of the ST segment can be used to help diagnose and evaluate the severity of heart conditions such as myocardial infarction and ischemia.',
  },
  {
    id: 'flourosopy',
    helpTitle: 'Flourosopy',
    helpContent:
      'Fluoroscopy is a medical imaging technique that uses X-rays to produce real-time moving images of the inside of the body. It is commonly used in cardiology to visualize the heart and its blood vessels. Fluoroscopy can be used for a variety of procedures, including angiograms, catheterization, and valve replacements, to help diagnose and treat heart conditions.',
  },
  {
    id: 'thalassemia',
    helpTitle: 'Thalassemia',
    helpContent:
      ' Thalassemia is an inherited (i.e., passed from parents to children through genes) blood disorder caused when the body doesn’t make enough of a protein called hemoglobin, an important part of red blood cells.',
  },
];

export const signUpFields = [
  {
    fieldId: 'firstName',
    fieldName: 'First Name',
    fieldOptions: [],
    fieldType: 'text',
    placeholder: 'John',
  },
  {
    fieldId: 'lastName',
    fieldName: 'Last Name',
    fieldOptions: [],
    fieldType: 'text',
    placeholder: 'Doe',
  },
  {
    fieldId: 'age',
    fieldName: 'Age',
    fieldOptions: [],
    fieldType: 'number',
    placeholder: '46',
  },
  {
    fieldId: 'gender',
    fieldName: 'Gender',
    fieldOptions: ['', 'Male', 'Female'],
    fieldType: '',
    placeholder: '',
  },
  {
    fieldId: 'email',
    fieldName: 'Email',
    fieldOptions: [],
    fieldType: 'email',
    placeholder: 'johndoe@gmail.com',
  },
  {
    fieldId: 'password',
    fieldName: 'Password',
    fieldOptions: [],
    fieldType: 'password',
    placeholder: '',
  },
];

export const loginFields = [
  {
    fieldId: 'email',
    fieldName: 'Email',
    fieldOptions: [],
    fieldType: 'email',
  },
  {
    fieldId: 'password',
    fieldName: 'Password',
    fieldOptions: [],
    fieldType: 'password',
  },
];
