// Sora Performing Arts is a fictional studio. All details below are example content for this concept site.

export const studio = {
  name: 'Sora Performing Arts',
  season: '2026-2027 Season',
  seasonStart: 'Begins September 12',
  phone: '(212) 555-0142',
  email: 'hello@sora-studio.example',
  officeHours: 'Mon to Fri, 9am to 6pm',
  locations: [
    { name: 'Central Plaza Studio', address: '128 Sakura Street, Central Plaza' },
    { name: 'Riverside Studio', address: '45 Maple Avenue, Riverside Commercial Center' },
  ],
};

export interface Program {
  id: string;
  title: string;
  ages: string;
  levels: string;
  length: string;
  summary: string;
  learn: string[];
}

export const programs: Program[] = [
  {
    id: 'dance',
    title: 'Dance',
    ages: 'Ages 5 and up',
    levels: 'Beginner to advanced',
    length: '60 to 90 min',
    summary: 'Ballet foundations, contemporary and jazz. Students build strength, musicality and confidence, then perform at the end of each term.',
    learn: ['Ballet technique and posture', 'Contemporary floor work', 'Choreography and stage presence'],
  },
  {
    id: 'acting',
    title: 'Acting',
    ages: 'Ages 8 and up',
    levels: 'All levels',
    length: '75 min',
    summary: 'Voice, movement and scene work in a supportive room. Classes end with a short showcase for family and friends.',
    learn: ['Voice and breath control', 'Improvisation', 'Scene study and auditions'],
  },
  {
    id: 'modeling',
    title: 'Modeling',
    ages: 'Ages 12 and up',
    levels: 'Beginner and intermediate',
    length: '60 min',
    summary: 'Runway walk, posing and working with a camera, with a focus on posture and calm confidence rather than looks.',
    learn: ['Runway walk and turns', 'Posing for camera', 'Building a simple portfolio'],
  },
  {
    id: 'etiquette',
    title: 'Etiquette',
    ages: 'Ages 7 to 16',
    levels: 'One level',
    length: '45 min',
    summary: 'Everyday manners, introductions and speaking up with confidence. A gentle class that pairs well with any performance program.',
    learn: ['Introductions and conversation', 'Table manners', 'Public speaking basics'],
  },
];

export interface ScheduleSlot {
  time: string;
  program: string;
  level: string;
  studio: 'Central Plaza' | 'Riverside';
}

export const schedule: { day: string; slots: ScheduleSlot[] }[] = [
  { day: 'Monday', slots: [
    { time: '4:00 pm', program: 'Dance', level: 'Ballet Foundations (5 to 7)', studio: 'Central Plaza' },
    { time: '5:30 pm', program: 'Acting', level: 'Young Actors (8 to 12)', studio: 'Central Plaza' },
    { time: '7:00 pm', program: 'Dance', level: 'Contemporary (Adults)', studio: 'Riverside' },
  ]},
  { day: 'Tuesday', slots: [
    { time: '4:00 pm', program: 'Etiquette', level: 'Manners & Confidence (7 to 11)', studio: 'Riverside' },
    { time: '5:00 pm', program: 'Modeling', level: 'Runway Basics (12+)', studio: 'Central Plaza' },
    { time: '6:30 pm', program: 'Dance', level: 'Jazz (Teens)', studio: 'Central Plaza' },
  ]},
  { day: 'Wednesday', slots: [
    { time: '4:00 pm', program: 'Dance', level: 'Ballet Foundations (8 to 11)', studio: 'Riverside' },
    { time: '5:30 pm', program: 'Acting', level: 'Teen Ensemble (13 to 17)', studio: 'Riverside' },
    { time: '7:00 pm', program: 'Acting', level: 'Scene Study (Adults)', studio: 'Central Plaza' },
  ]},
  { day: 'Thursday', slots: [
    { time: '4:00 pm', program: 'Etiquette', level: 'Public Speaking (12 to 16)', studio: 'Central Plaza' },
    { time: '5:00 pm', program: 'Dance', level: 'Contemporary (Teens)', studio: 'Riverside' },
    { time: '6:30 pm', program: 'Modeling', level: 'Camera & Posing (14+)', studio: 'Riverside' },
  ]},
  { day: 'Friday', slots: [
    { time: '4:30 pm', program: 'Dance', level: 'Ballet Intermediate', studio: 'Central Plaza' },
    { time: '6:00 pm', program: 'Acting', level: 'Improv Night (All ages 12+)', studio: 'Central Plaza' },
  ]},
  { day: 'Saturday', slots: [
    { time: '9:30 am', program: 'Dance', level: 'Little Movers (5 to 6)', studio: 'Riverside' },
    { time: '11:00 am', program: 'Acting', level: 'Young Actors (8 to 12)', studio: 'Riverside' },
    { time: '1:00 pm', program: 'Modeling', level: 'Runway Basics (12+)', studio: 'Central Plaza' },
    { time: '2:30 pm', program: 'Dance', level: 'Showcase Rehearsal', studio: 'Central Plaza' },
  ]},
];

export const firstSteps = [
  { title: 'Book a free trial', text: 'Pick any class on the schedule and send us a message. Your first class is on us.' },
  { title: 'Meet your teacher', text: 'Arrive ten minutes early. We will find the right level together after class.' },
  { title: 'Join a term', text: 'Terms run ten weeks and end with a small showcase. Join at any point in the season.' },
];
