use('DOCTOR-APPOINTMENT-WEBSITE')
db.doctors.find({})


db.doctors.insertMany([
  {
    name: "Dr. Rohit Verma",
    email: "rohit.verma@neuroclinic.com",
    password: "$2b$10$QDEsN7GGSl96.2CTsGGe7OBI6p5cHlT5K0W0rOBaVnrjZTqPBt6Tq",
    phone: "9800012345",
    address: { clinic: "Neuro Health Clinic", city: "Mumbai", state: "Maharashtra", pincode: "400001" },
    gender: "male",
    experience: "9 years",
    speciality: "Neurologist",
    fees: 700,
    available: true,
    slots_booked: { "2025-06-24": ["10:00", "10:30"] }
  },
  {
    name: "Dr. Neha Singh",
    email: "neha.singh@womensclinic.com",
    password: "$2b$10$abcdeFghijKLMNOPQRSTuvWXyz1234567890123456789012345",
    phone: "9876543210",
    address: { clinic: "Women’s Health Center", city: "Delhi", state: "Delhi", pincode: "110001" },
    gender: "female",
    experience: "7 years",
    speciality: "Gynecologist",
    fees: 600,
    available: true,
    slots_booked: { "2025-06-25": ["09:00", "09:30"] }
  },
  {
    name: "Dr. Arjun Desai",
    email: "arjun.desai@braincare.com",
    password: "$2b$10$d8jCk9Qd1K9bDj9djw2EX3ZsAp5zY2qZdTzPNK2wdH3oqVo",
    phone: "9123456780",
    address: { clinic: "BrainCare Clinic", city: "Bangalore", state: "Karnataka", pincode: "560001" },
    gender: "male",
    experience: "11 years",
    speciality: "Neurologist",
    fees: 800,
    available: true,
    slots_booked: { "2025-06-24": ["11:00", "11:30"] }
  },
  {
    name: "Dr. Anjali Mehta",
    email: "anjali.mehta@heartcare.com",
    password: "$2b$10$NsjPwbD2x1f5YlKu6RhPvO2ZfJKUvCuE9cH1K6z1n0U6PfOqK",
    phone: "9999999999",
    address: { clinic: "HeartCare Clinic", city: "Ahmedabad", state: "Gujarat", pincode: "380015" },
    gender: "female",
    experience: "13 years",
    speciality: "Cardiologist",
    fees: 750,
    available: true,
    slots_booked: {}
  },
  {
    name: "Dr. Vikram Rao",
    email: "vikram.rao@skincare.com",
    password: "$2b$10$asdfasdfadsfadsfadfadsfasdfasdfadsfasdfads",
    phone: "9823456710",
    address: { clinic: "SkinCare Center", city: "Hyderabad", state: "Telangana", pincode: "500001" },
    gender: "male",
    experience: "6 years",
    speciality: "Dermatologist",
    fees: 500,
    available: true,
    slots_booked: {}
  },
  {
    name: "Dr. Pooja Joshi",
    email: "pooja.joshi@eyevision.com",
    password: "$2b$10$Zkl7TgUDG7Cgbl2ZLkN/Au1PzJ4jlUP4O09kKjfTxp3dkq",
    phone: "9765432100",
    address: { clinic: "Eye Vision Center", city: "Pune", state: "Maharashtra", pincode: "411001" },
    gender: "female",
    experience: "5 years",
    speciality: "Ophthalmologist",
    fees: 400,
    available: true,
    slots_booked: {}
  },
  {
    name: "Dr. Rajeev Menon",
    email: "rajeev.menon@kidneycare.com",
    password: "$2b$10$asf8w7efwf3nkjshfskf7a8shdjk",
    phone: "9753124680",
    address: { clinic: "KidneyCare", city: "Chennai", state: "Tamil Nadu", pincode: "600001" },
    gender: "male",
    experience: "14 years",
    speciality: "Nephrologist",
    fees: 950,
    available: true,
    slots_booked: {}
  },
  {
    name: "Dr. Sneha Kapoor",
    email: "sneha.kapoor@childrenclinic.com",
    password: "$2b$10$uhfu83rjfwefsdfbnsdkfns",
    phone: "9867123498",
    address: { clinic: "Children's Clinic", city: "Indore", state: "Madhya Pradesh", pincode: "452001" },
    gender: "female",
    experience: "8 years",
    speciality: "Pediatrician",
    fees: 550,
    available: true,
    slots_booked: {}
  },
  {
    name: "Dr. Karan Singh",
    email: "karan.singh@orthocare.com",
    password: "$2b$10$fakedsfhfhsfh1234asdfgdfgdfg",
    phone: "9811123456",
    address: { clinic: "OrthoCare", city: "Lucknow", state: "Uttar Pradesh", pincode: "226001" },
    gender: "male",
    experience: "10 years",
    speciality: "Orthopedic Surgeon",
    fees: 850,
    available: true,
    slots_booked: {}
  },
  {
    name: "Dr. Meera Iyer",
    email: "meera.iyer@mentalwellness.com",
    password: "$2b$10$meeraPWfakehashfornow1234567890",
    phone: "9876001234",
    address: { clinic: "Mind & Wellness", city: "Bhopal", state: "Madhya Pradesh", pincode: "462001" },
    gender: "female",
    experience: "7 years",
    speciality: "Psychiatrist",
    fees: 650,
    available: true,
    slots_booked: {}
  },
  {
    name: "Dr. Aman Khan",
    email: "aman.khan@dentalzone.com",
    password: "$2b$10$2342fakedsfhlksdfhsdfkhsdf",
    phone: "9800456721",
    address: { clinic: "Dental Zone", city: "Kolkata", state: "West Bengal", pincode: "700001" },
    gender: "male",
    experience: "6 years",
    speciality: "Dentist",
    fees: 450,
    available: true,
    slots_booked: {}
  }
]);
