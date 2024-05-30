import { GridColDef, GridRowProps } from "@mui/x-data-grid";

export const ClaimsColumns: GridColDef[] = [
  { field: "id", headerName: "ClaimID", width: 150 },
  { field: "first_name", headerName: "First Name", width: 150 },
  { field: "last_name", headerName: "Last Name", width: 150 },
  { field: "gender", headerName: "Gender", width: 150 },
  { field: "Date_of_birth", headerName: "Date of birth", width: 150 },
  { field: "email", headerName: "Email Address", width: 150 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "Coverage", headerName: "Coverage", width: 150 },
  { field: "Date_submitted", headerName: "Date Submitted", width: 150 },
  { field: "Car_model", headerName: "Car Model", width: 150 },
  { field: "Year", headerName: "Year", width: 150 },
  { field: "Amount", headerName: "Amount", width: 150 },
  { field: "Claim_details", headerName: "Claim Details", width: 150 },
];

export const claims = [
  {
    id: 1,
    first_name: "Vincent",
    last_name: "Diggles",
    gender: "Male",
    Date_of_birth: "08-01-1996",
    email: "vdiggles0@techcrunch.com",
    phone: "+216 (582) 795-6510",
    Coverage: "Basic",
    Date_submitted: "19-02-2024",
    Car_model: "Chevrolet",
    Year: 1999,
    Amount: 81329,
    Claim_details:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    id: 2,
    first_name: "Rayshell",
    last_name: "O'Griffin",
    gender: "Female",
    Date_of_birth: "20-06-2001",
    email: "rogriffin1@ustream.tv",
    phone: "+351 (853) 941-1765",
    Coverage: "Comprehensive",
    Date_submitted: "10-01-2024",
    Car_model: "Volvo",
    Year: 2009,
    Amount: 17305,
    Claim_details:
      "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
  },
  {
    id: 3,
    first_name: "Anjanette",
    last_name: "Slafford",
    gender: "Female",
    Date_of_birth: "05-05-1977",
    email: "aslafford2@bravesites.com",
    phone: "+98 (703) 910-2138",
    Coverage: "Comprehensive",
    Date_submitted: "23-05-2024",
    Car_model: "Chevrolet",
    Year: 2009,
    Amount: 61580,
    Claim_details: "Maecenas ut massa quis augue luctus tincidunt.",
  },
  {
    id: 4,
    first_name: "Cordie",
    last_name: "Strettle",
    gender: "Male",
    Date_of_birth: "09-02-1973",
    email: "cstrettle3@dedecms.com",
    phone: "+49 (739) 187-4379",
    Coverage: "Basic",
    Date_submitted: "16-03-2024",
    Car_model: "Mercury",
    Year: 1991,
    Amount: 60498,
    Claim_details:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
  },
  {
    id: 5,
    first_name: "Dorian",
    last_name: "Rockwill",
    gender: "Male",
    Date_of_birth: "18-04-1987",
    email: "drockwill4@t-online.de",
    phone: "+54 (391) 333-7483",
    Coverage: "Comprehensive",
    Date_submitted: "09-04-2024",
    Car_model: "Acura",
    Year: 1988,
    Amount: 67486,
    Claim_details:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    id: 6,
    first_name: "Dougy",
    last_name: "Clibbery",
    gender: "Male",
    Date_of_birth: "19-05-1990",
    email: "dclibbery5@scientificamerican.com",
    phone: "+63 (327) 949-8991",
    Coverage: "Basic",
    Date_submitted: "28-12-2023",
    Car_model: "Acura",
    Year: 1990,
    Amount: 53830,
    Claim_details: "In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: 7,
    first_name: "Hatty",
    last_name: "Herreros",
    gender: "Female",
    Date_of_birth: "28-09-1991",
    email: "hherreros6@blogspot.com",
    phone: "+86 (856) 470-5007",
    Coverage: "Comprehensive",
    Date_submitted: "12-10-2023",
    Car_model: "Hyundai",
    Year: 2009,
    Amount: 54429,
    Claim_details:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    id: 8,
    first_name: "Kyle",
    last_name: "Cabera",
    gender: "Female",
    Date_of_birth: "30-11-1982",
    email: "kcabera7@answers.com",
    phone: "+86 (726) 877-9668",
    Coverage: "Basic",
    Date_submitted: "16-03-2024",
    Car_model: "Audi",
    Year: 2003,
    Amount: 45313,
    Claim_details: "Cras non velit nec nisi vulputate nonummy.",
  },
  {
    id: 9,
    first_name: "Jasper",
    last_name: "Backen",
    gender: "Non-binary",
    Date_of_birth: "09-06-1975",
    email: "jbacken8@intel.com",
    phone: "+62 (492) 894-4613",
    Coverage: "Basic",
    Date_submitted: "13-01-2024",
    Car_model: "Mercury",
    Year: 1984,
    Amount: 82199,
    Claim_details:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
  },
  {
    id: 10,
    first_name: "Noella",
    last_name: "Mollison",
    gender: "Female",
    Date_of_birth: "17-04-1997",
    email: "nmollison9@bing.com",
    phone: "+86 (393) 388-7439",
    Coverage: "Basic",
    Date_submitted: "30-03-2024",
    Car_model: "Acura",
    Year: 2009,
    Amount: 13809,
    Claim_details:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
  },
  {
    id: 11,
    first_name: "Randi",
    last_name: "Irving",
    gender: "Female",
    Date_of_birth: "29-11-1992",
    email: "rirvinga@uiuc.edu",
    phone: "+81 (455) 228-6473",
    Coverage: "Comprehensive",
    Date_submitted: "08-11-2023",
    Car_model: "Mitsubishi",
    Year: 1993,
    Amount: 33522,
    Claim_details:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
  },
  {
    id: 12,
    first_name: "Filia",
    last_name: "Matteotti",
    gender: "Female",
    Date_of_birth: "28-03-1981",
    email: "fmatteottib@ft.com",
    phone: "+55 (504) 324-4426",
    Coverage: "Comprehensive",
    Date_submitted: "28-12-2023",
    Car_model: "Infiniti",
    Year: 2009,
    Amount: 52691,
    Claim_details:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
  },
  {
    id: 13,
    first_name: "Amber",
    last_name: "Sherwood",
    gender: "Female",
    Date_of_birth: "29-09-1973",
    email: "asherwoodc@ftc.gov",
    phone: "+86 (688) 318-8998",
    Coverage: "Basic",
    Date_submitted: "17-10-2023",
    Car_model: "Daihatsu",
    Year: 1992,
    Amount: 46091,
    Claim_details:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
  },
  {
    id: 14,
    first_name: "Lavinie",
    last_name: "Roscamp",
    gender: "Female",
    Date_of_birth: "21-11-2012",
    email: "lroscampd@bbb.org",
    phone: "+880 (729) 450-5296",
    Coverage: "Basic",
    Date_submitted: "29-10-2023",
    Car_model: "Maybach",
    Year: 2007,
    Amount: 41233,
    Claim_details:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
  },
  {
    id: 15,
    first_name: "Ignacio",
    last_name: "Coggins",
    gender: "Male",
    Date_of_birth: "31-07-1976",
    email: "icogginse@mediafire.com",
    phone: "+998 (841) 204-5892",
    Coverage: "Basic",
    Date_submitted: "04-03-2024",
    Car_model: "Mazda",
    Year: 1993,
    Amount: 67275,
    Claim_details:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
  },
  {
    id: 16,
    first_name: "Becki",
    last_name: "Zanetto",
    gender: "Female",
    Date_of_birth: "08-12-2000",
    email: "bzanettof@washington.edu",
    phone: "+7 (554) 939-1757",
    Coverage: "Comprehensive",
    Date_submitted: "01-02-2024",
    Car_model: "Pontiac",
    Year: 1987,
    Amount: 13510,
    Claim_details:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
  },
  {
    id: 17,
    first_name: "Ruthanne",
    last_name: "Geraldo",
    gender: "Female",
    Date_of_birth: "27-06-1976",
    email: "rgeraldog@shutterfly.com",
    phone: "+351 (691) 273-2055",
    Coverage: "Basic",
    Date_submitted: "26-11-2023",
    Car_model: "Bentley",
    Year: 2007,
    Amount: 52068,
    Claim_details:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
  },
  {
    id: 18,
    first_name: "Alf",
    last_name: "Borthram",
    gender: "Male",
    Date_of_birth: "25-07-1974",
    email: "aborthramh@amazon.com",
    phone: "+1 (203) 678-6091",
    Coverage: "Comprehensive",
    Date_submitted: "06-04-2024",
    Car_model: "Mercury",
    Year: 1997,
    Amount: 38644,
    Claim_details:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    id: 19,
    first_name: "Timmy",
    last_name: "Whimp",
    gender: "Male",
    Date_of_birth: "11-11-1970",
    email: "twhimpi@cloudflare.com",
    phone: "+86 (682) 497-1525",
    Coverage: "Basic",
    Date_submitted: "05-03-2024",
    Car_model: "Maybach",
    Year: 2003,
    Amount: 17795,
    Claim_details:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    id: 20,
    first_name: "Bryana",
    last_name: "Shrimpling",
    gender: "Agender",
    Date_of_birth: "23-12-1994",
    email: "bshrimplingj@meetup.com",
    phone: "+380 (946) 294-2845",
    Coverage: "Comprehensive",
    Date_submitted: "03-11-2023",
    Car_model: "GMC",
    Year: 2008,
    Amount: 36777,
    Claim_details:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    id: 21,
    first_name: "Mellicent",
    last_name: "Sorensen",
    gender: "Genderqueer",
    Date_of_birth: "25-10-2008",
    email: "msorensenk@europa.eu",
    phone: "+962 (431) 104-8801",
    Coverage: "Basic",
    Date_submitted: "03-10-2023",
    Car_model: "Ford",
    Year: 1994,
    Amount: 42281,
    Claim_details: "Suspendisse potenti.",
  },
  {
    id: 22,
    first_name: "Patty",
    last_name: "Badcock",
    gender: "Male",
    Date_of_birth: "23-10-2015",
    email: "pbadcockl@mashable.com",
    phone: "+60 (370) 567-7065",
    Coverage: "Basic",
    Date_submitted: "20-11-2023",
    Car_model: "Lincoln",
    Year: 1986,
    Amount: 27062,
    Claim_details: "Mauris sit amet eros.",
  },
  {
    id: 23,
    first_name: "Carolina",
    last_name: "Bernardot",
    gender: "Genderfluid",
    Date_of_birth: "10-01-1980",
    email: "cbernardotm@cbsnews.com",
    phone: "+86 (402) 959-4343",
    Coverage: "Basic",
    Date_submitted: "09-03-2024",
    Car_model: "GMC",
    Year: 2012,
    Amount: 61391,
    Claim_details:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    id: 24,
    first_name: "Rozele",
    last_name: "Dundredge",
    gender: "Female",
    Date_of_birth: "01-03-1980",
    email: "rdundredgen@bigcartel.com",
    phone: "+502 (693) 861-5373",
    Coverage: "Basic",
    Date_submitted: "02-01-2024",
    Car_model: "Toyota",
    Year: 2012,
    Amount: 23835,
    Claim_details: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
  },
  {
    id: 25,
    first_name: "Gabriel",
    last_name: "Ringe",
    gender: "Female",
    Date_of_birth: "26-03-1994",
    email: "gringeo@whitehouse.gov",
    phone: "+62 (754) 897-7039",
    Coverage: "Comprehensive",
    Date_submitted: "16-01-2024",
    Car_model: "Honda",
    Year: 2011,
    Amount: 31079,
    Claim_details: "Nulla ut erat id mauris vulputate elementum.",
  },
  {
    id: 26,
    first_name: "Carlina",
    last_name: "Jee",
    gender: "Female",
    Date_of_birth: "26-08-1979",
    email: "cjeep@mlb.com",
    phone: "+20 (483) 413-2247",
    Coverage: "Comprehensive",
    Date_submitted: "12-01-2024",
    Car_model: "BMW",
    Year: 2000,
    Amount: 58379,
    Claim_details:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
  },
  {
    id: 27,
    first_name: "Elysia",
    last_name: "Walduck",
    gender: "Female",
    Date_of_birth: "05-08-1975",
    email: "ewalduckq@storify.com",
    phone: "+503 (340) 886-3014",
    Coverage: "Comprehensive",
    Date_submitted: "07-04-2024",
    Car_model: "Mercedes-Benz",
    Year: 1994,
    Amount: 21110,
    Claim_details: "Donec semper sapien a libero.",
  },
  {
    id: 28,
    first_name: "Herby",
    last_name: "Billion",
    gender: "Male",
    Date_of_birth: "05-12-1971",
    email: "hbillionr@tuttocitta.it",
    phone: "+62 (756) 727-6503",
    Coverage: "Basic",
    Date_submitted: "21-10-2023",
    Car_model: "Cadillac",
    Year: 2008,
    Amount: 36046,
    Claim_details: "Quisque porta volutpat erat.",
  },
];
