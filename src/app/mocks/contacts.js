const { v4: uuidv4 } = require('uuid');

const contacts = [
  {
    id: uuidv4(),
    name: 'Elma Herring',
    email: 'elmaherring@unq.com',
    phone: '+1 (913) 497-2020',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Knapp Berry',
    email: 'knappberry@unq.com',
    phone: '+1 (951) 472-2967',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Bell Burgess',
    email: 'bellburgess@unq.com',
    phone: '+1 (887) 478-2693',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Hobbs Ferrell',
    email: 'hobbsferrell@unq.com',
    phone: '+1 (862) 581-3022',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Marylou Medina',
    email: 'maryloumedina@unq.com',
    phone: '+1 (996) 520-2967',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Larson Guerra',
    email: 'larsonguerra@unq.com',
    phone: '+1 (972) 566-2684',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Shelby Ballard',
    email: 'shelbyballard@unq.com',
    phone: '+1 (824) 467-3579',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Lea Faulkner',
    email: 'leafaulkner@unq.com',
    phone: '+1 (899) 528-3402',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Cecelia Wolf',
    email: 'ceceliawolf@unq.com',
    phone: '+1 (862) 507-3140',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Melva Nixon',
    email: 'melvanixon@unq.com',
    phone: '+1 (901) 444-3081',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Bernard Chambers',
    email: 'bernardchambers@unq.com',
    phone: '+1 (831) 539-3366',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Wendi Bender',
    email: 'wendibender@unq.com',
    phone: '+1 (868) 414-2720',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Wall Stewart',
    email: 'wallstewart@unq.com',
    phone: '+1 (814) 558-3191',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Howell Gilbert',
    email: 'howellgilbert@unq.com',
    phone: '+1 (926) 512-3631',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Nguyen Maxwell',
    email: 'nguyenmaxwell@unq.com',
    phone: '+1 (838) 469-2152',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Norris Hendricks',
    email: 'norrishendricks@unq.com',
    phone: '+1 (818) 563-2900',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Salinas Mcleod',
    email: 'salinasmcleod@unq.com',
    phone: '+1 (888) 413-3775',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Michelle Barrett',
    email: 'michellebarrett@unq.com',
    phone: '+1 (988) 446-2594',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Burke Barlow',
    email: 'burkebarlow@unq.com',
    phone: '+1 (965) 492-2552',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Rosie Cummings',
    email: 'rosiecummings@unq.com',
    phone: '+1 (845) 456-2237',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Sanford Frye',
    email: 'sanfordfrye@unq.com',
    phone: '+1 (936) 581-3494',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Janna Peck',
    email: 'jannapeck@unq.com',
    phone: '+1 (824) 512-2437',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Lorraine Sykes',
    email: 'lorrainesykes@unq.com',
    phone: '+1 (959) 422-3635',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Vicki Fulton',
    email: 'vickifulton@unq.com',
    phone: '+1 (916) 455-2402',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Massey Moody',
    email: 'masseymoody@unq.com',
    phone: '+1 (840) 453-3811',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Grant Berg',
    email: 'grantberg@unq.com',
    phone: '+1 (837) 554-3706',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Hawkins Winters',
    email: 'hawkinswinters@unq.com',
    phone: '+1 (945) 469-2432',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Frazier Davidson',
    email: 'frazierdavidson@unq.com',
    phone: '+1 (854) 558-2637',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Francine Cervantes',
    email: 'francinecervantes@unq.com',
    phone: '+1 (923) 520-2916',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Francis Perez',
    email: 'francisperez@unq.com',
    phone: '+1 (885) 461-3054',
    category_id: uuidv4(),
  },
];

module.exports = contacts;