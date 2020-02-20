# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

c1 = Course.create(
  name: "Desert Canyon Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "10440 North Indian Wells Drive",
  city: "Fountain Hills",
  state: "Arizona",
  website: "http://desertcanyongolf.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://img.bizbash.com/files/base/bizbash/bzb/image/2019/02/7efb30d7943e16bd5a4dd77449de57fc.png?ar=16%3A9&auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&w=1140",
  latitude: 33.6042,
  longitude: -111.7257
)

c2 = Course.create(
  name: "Painted Mountain Golf Resort",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "6210 East McKellips Road",
  city: "Mesa",
  state: "Arizona",
  website: "http://www.paintedmountaingolf.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://static.wixstatic.com/media/46c90c_2d1b23169dfe4c1a82919eb76cfbdbb1~mv2_d_2048_1365_s_2.jpeg",
  latitude: 33.4152,
  longitude: -111.8315
)

c3 = Course.create(
  name: "Quail Ridge Country Club",
  membership: "Private",
  holes: 36,
  par: 72,
  address: "3715 Golf Road",
  city: "Boynton Beach",
  state: "Florida",
  website: "www.quailridgecc.com",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://www.quailridgecc.com/images/dynamic/getImage.gif?ID=100003662",
  latitude: 26.5318,
  longitude: -80.0905
)

c4 = Course.create(
  name: "Fort Dodge Country Club",
  membership: "Private",
  holes: 18,
  par: 72,
  address: "370 Country Club Dr",
  city: "Fort Dodge",
  state: "Iowa",
  website: "http://www.fortdodgecountryclub.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://golfadvisor.brightspotcdn.com/dims4/default/0d6fdde/2147483647/strip/true/crop/450x290+0+24/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F19%2Fce%2Fb3ddb4af9acd1960d4ef89c3d81b%2F61858.jpg",
  latitude: 42.4975,
  longitude: -94.1680
)

c5 = Course.create(
  name: "Mt Hood Municipal Golf Course",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "100 Slayton Road",
  city: "Melrose",
  state: "Massachusetts",
  website: "http://mthoodgolfclub.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://mthoodgolfclub.com/wp-content/uploads/2018/05/MtHood-Course-16.jpg",
  latitude: 42.4584,
  longitude: -71.0662
)

c6 = Course.create(
  name: "Castle Pines Country Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "1600 Quail Ridge Drive",
  city: "Gardendale",
  state: "Alabama",
  website: "http://www.castlepinesllc.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://golfadvisor.brightspotcdn.com/dims4/default/6e529ff/2147483647/strip/true/crop/640x360+0+59/resize/590x332!/format/jpg/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2Fd2%2F83%2F57007e3a40703c9873c409004046%2F34386.jpg",
  latitude: 33.6601,
  longitude: -86.8128
)

c7 = Course.create(
  name: "Stonebridge Meadows Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "3495 East Goff Farms Road",
  city: "Fayetteville",
  state: "Arkansas",
  website: "http://www.stonebridgemeadows.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://golfadvisor.brightspotcdn.com/dims4/default/7d087f8/2147483647/strip/true/crop/1245x803+98+0/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2Fac%2Fa3%2Fe7c7281e4c0cb928d14c34c4bdba%2F97336.jpg",
  latitude: 36.0822,
  longitude: -94.1719
)

c8 = Course.create(
  name: "Black Gold Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "One Black Gold Drive",
  city: "Yorba Linda",
  state: "California",
  website: "blackgoldgolf.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://blackgoldgolf.com/golf/emailer2020/img/blackgoldgolf/Black_Gold_%2309-3_2.jpg",
  latitude: 33.8885,
  longitude: -117.8133
)

c9 = Course.create(
  name: "Goose Creek Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "11418 68th Street",
  city: "Mira Loma",
  state: "California",
  website: "goosecreekgc.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://www.goosecreekgc.com/images/gallery/full-gallery/3.jpg",
  latitude: 33.9845,
  longitude: -117.5159
)

c10 = Course.create(
  name: "Raccoon Creek Golf Course",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "7301 West Bowles Avenue",
  city: "Littleton",
  state: "Colorado",
  website: "raccooncreek.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://golfadvisor.brightspotcdn.com/dims4/default/711f4a9/2147483647/strip/true/crop/1000x645+0+11/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F2c%2F32%2F0f6696db50e577d62997fd29a624%2F15486.jpg",
  latitude: 39.6133,
  longitude: -105.0166
)

c11 = Course.create(
  name: "Royal Hawaiian Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "770 Auloa Road Kailua",
  city: "Oahu",
  state: "Hawaii",
  website: "royalhawaiiangc.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://assets.simpleviewinc.com/simpleview/image/upload/crm/hawaii/Home_Welcome-Image-light_9EDD72D1-BEF7-436E-8D38815C1332284B_1af6e941-ef85-4868-a2a47cecf73e676e.jpg",
  latitude: 21.4389,
  longitude: -158.0001
)

c12 = Course.create(
  name: "Erin Hills Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "7169 County Trunk O",
  city: "Hartford",
  state: "Wisconsin",
  website: "www.erinhills.com",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://erinhills.com/wp-content/uploads/2019/05/eh_home_spring2019.jpg",
  latitude: 43.3178,
  longitude: -88.3790
)

c13 = Course.create(
  name: "Gleneagle Golf Course",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "7619 East Country Club Drive",
  city: "Arlington",
  state: "Washington",
  website: "gleneaglegc.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://www.gleneaglegc.com/wp-content/uploads/sites/6296/2017/03/course01.jpg",
  latitude: 48.1987,
  longitude: -122.1251
)

c14 = Course.create(
  name: "Tobacco Road Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "442 Tobacco Road",
  city: "Sanford",
  state: "North Carolina",
  website: "http://www.tobaccoroadgolf.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://tobaccoroadgolf.com/wp-content/uploads/2015/08/tobacco-road-golf-course.jpg",
  latitude: 35.4799,
  longitude: -79.1803
)

c15 = Course.create(
  name: "The Country Club of South Carolina",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "3525 McDonald Boulevard",
  city: "Florence",
  state: "South Carolina",
  website: "www.countryclubsc.com",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://lh3.googleusercontent.com/proxy/UMp7gI-OuW8oMShXfSQ8cTe2t8TeAV-IjbMmGk94ai8ZerS5Fhf5NdvOlrxrzA6K-kIg8gz4jkRCQte9cxRssnQFYLh4_BCpdP9EzqgjAxwqtKLGZlFExWyaUSEDV-pSIWbCOZg",
  latitude: 34.1954,
  longitude: -79.7626
)

c16 = Course.create(
  name: "The Club at Pronghorn",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "65600 Pronghorn Club Road",
  city: "Bend",
  state: "Oregon",
  website: "pronghornresort.com",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://res.cloudinary.com/the-wholesum-agency/image/upload/v1555470148/pronghorn-web-golf-4-1-fazio-800x400-3_xvsndo.jpg",
  latitude: 44.0582,
  longitude: -121.3153
)

c17 = Course.create(
  name: "Red Tail Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "15 Bulge Road",
  city: "Devens",
  state: "Massachusetts",
  website: "redtailgolf.net/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://golfadvisor.brightspotcdn.com/dims4/default/584e0ac/2147483647/strip/true/crop/1047x675+0+62/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F9a%2F5e%2Fe49294f0234a5b50faefc4776b8b%2F11631.jpg",
  latitude: 42.5455,
  longitude: -71.6139
)

c18 = Course.create(
  name: "Sagamore Spring Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "1287 Main Street",
  city: "Lynnfield",
  state: "Massachusetts",
  website: "http://www.sagamoregolf.com/sagamore-spring-golf-club",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://patch.com/img/cdn/users/296669/2011/08/raw/6bcef77cf8bb2de156c995127b545f0a.jpg",
  latitude: 42.5387,
  longitude: -71.0466
)

c19 = Course.create(
  name: "Bay Pointe Golf Club",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "4001 Haggerty Road",
  city: "West Bloomfield",
  state: "Michigan",
  website: "www.baypointegolfcourse.com",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://golfadvisor.brightspotcdn.com/dims4/default/a68d083/2147483647/strip/true/crop/960x619+0+50/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F52%2Fb6%2F79816eb327a1f94d97e0edbe5d4d%2F46063.jpg",
  latitude: 42.5679,
  longitude: -83.3733
)

c20 = Course.create(
  name: "Pebble Beach Golf Links",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "Pebble Beach Resorts, 17-Mile Drive",
  city: "Pebble Beach",
  state: "California",
  website: "https://www.pebblebeach.com/golf/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://www.golf.com/wp-content/uploads/2019/05/June_Features_Gem_Timeline-1-5.jpg",
  latitude: 36.5725,
  longitude: -121.9486
)

c21 = Course.create(
  name: "Shadow Creek",
  membership: "Public",
  holes: 18,
  par: 72,
  address: "3 Shadow Creek Dr",
  city: "North Las Vegas",
  state: "Nevada",
  website: "http://www.shadowcreek.com/",
  range: "Yes",
  carts: "Yes",
  rentals: "Yes",
  lessons: "Yes",
  url: "https://golfadvisor.brightspotcdn.com/dims4/default/778971c/2147483647/strip/true/crop/1184x707+0+82/resize/1440x860!/format/jpg/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F3e%2Fbf%2Fe097481057394794f24a720e32ac%2Fp.php",
  latitude: 36.1989,
  longitude: -115.1175
)

u1 = User.create(
  first: "Bill",
  last: "Keegan",
  email: "bill@aol.com",
  password: "password1",
  city: "Orlando",
  state: "Florida",
  handicap: 30,
  bio: "Mostly play to make new friends"
)

u2 = User.create(
  first: "Steve",
  last: "Jones",
  email: "steve@aol.com",
  password: "password2",
  city: "Boston",
  state: "Massachusetts",
  handicap: 20,
  bio: "Playing since I was ten years old"
)

u3 = User.create(
  first: "John",
  last: "Davis",
  email: "john@aol.com",
  password: "password3",
  city: "San Diego",
  state: "California",
  handicap: 15,
  bio: "Played on my college team"
)

u4 = User.create(
  first: "Liz",
  last: "Willis",
  email: "liz@aol.com",
  password: "password3",
  city: "Milwaukee",
  state: "Wisconsin",
  handicap: 20,
  bio: "Learned from my parents when I was young"
)

r1 = Review.create(
  user: u1,
  course: c3,
  rating: 3,
  body: "This is a nice course"
)

r2 = Review.create(
  user: u2,
  course: c5,
  rating: 4,
  body: "Good league on Wednesday nights"
)

r3 = Review.create(
  user: u2,
  course: c1,
  rating: 4,
  body: "A nice warm winter round"
)

r4 = Review.create(
  user: u3,
  course: c1,
  rating: 3,
  body: "Decent, but gets a little dried out"
)

r5 = Review.create(
  user: u3,
  course: c4,
  rating: 3,
  body: "Very friendly clubhouse staff"
)

r6 = Review.create(
  user: u1,
  course: c2,
  rating: 2,
  body: "Greens were faster than a racecar"
)

r7 = Review.create(
  user: u4,
  course: c5,
  rating: 5,
  body: "Gem of a summer course"
)

r8 = Review.create(
  user: u1,
  course: c6,
  rating: 3,
  body: "This is a nice course"
)

r9 = Review.create(
  user: u2,
  course: c7,
  rating: 4,
  body: "Good league on Wednesday nights"
)

r10 = Review.create(
  user: u2,
  course: c8,
  rating: 4,
  body: "Tough course, but a fun round"
)

r11 = Review.create(
  user: u3,
  course: c9,
  rating: 3,
  body: "Lovely teebox views"
)

r12 = Review.create(
  user: u3,
  course: c10,
  rating: 3,
  body: "Very friendly clubhouse staff"
)

r13 = Review.create(
  user: u1,
  course: c11,
  rating: 2,
  body: "Slow round, not a fan"
)

r14 = Review.create(
  user: u4,
  course: c12,
  rating: 5,
  body: "Gem of a summer course"
)

r15 = Review.create(
  user: u1,
  course: c13,
  rating: 3,
  body: "This is a nice course"
)

r16 = Review.create(
  user: u2,
  course: c14,
  rating: 4,
  body: "Lovely teebox views"
)

r17 = Review.create(
  user: u2,
  course: c15,
  rating: 4,
  body: "Tough course, but a fun round"
)

r18 = Review.create(
  user: u3,
  course: c16,
  rating: 3,
  body: "Decent, but gets a little dried out"
)

r19 = Review.create(
  user: u3,
  course: c17,
  rating: 3,
  body: "Very friendly clubhouse staff"
)

r20 = Review.create(
  user: u1,
  course: c18,
  rating: 2,
  body: "Slow round, not a fan"
)

r21 = Review.create(
  user: u4,
  course: c19,
  rating: 5,
  body: "Gem of a summer course"
)

r22 = Review.create(
  user: u1,
  course: c20,
  rating: 2,
  body: "Lovely teebox views"
)

r23 = Review.create(
  user: u4,
  course: c21,
  rating: 5,
  body: "Tough course, but a fun round"
)

o1 = Round.create(
  user: u1,
  score: 80,
  birdies: 1,
  pars: 2,
  date: "06/04/2019",
  course: "Mt Hood Municipal Golf Course"
)

o2 = Round.create(
  user: u1,
  score: 83,
  birdies: 0,
  pars: 2,
  date: "06/11/2019",
  course: "Painted Mountain Golf Resort"
)

o3 = Round.create(
  user: u1,
  score: 78,
  birdies: 2,
  pars: 3,
  date: "06/25/2019",
  course: "Quail Ridge Country Club"
)

o4 = Round.create(
  user: u1,
  score: 88,
  birdies: 0,
  pars: 1,
  date: "07/03/2019",
  course: "Mt Hood Municipal Golf Course"
)

o5 = Round.create(
  user: u2,
  score: 73,
  birdies: 3,
  pars: 8,
  date: "04/04/2019",
  course: "Mt Hood Municipal Golf Course"
)

o6 = Round.create(
  user: u2,
  score: 78,
  birdies: 2,
  pars: 6,
  date: "04/11/2019",
  course: "Mt Hood Municipal Golf Course"
)

o7 = Round.create(
  user: u2,
  score: 70,
  birdies: 4,
  pars: 9,
  date: "04/25/2019",
  course: "Desert Canyon Golf Club"
)

o8 = Round.create(
  user: u3,
  score: 82,
  birdies: 1,
  pars: 6,
  date: "05/03/2019",
  course: "Desert Canyon Golf Club"
)

o9 = Round.create(
  user: u3,
  score: 93,
  birdies: 0,
  pars: 1,
  date: "08/04/2019",
  course: "Desert Canyon Golf Club"
)

o10 = Round.create(
  user: u3,
  score: 88,
  birdies: 0,
  pars: 3,
  date: "08/11/2019",
  course: "Desert Canyon Golf Club"
)

o11 = Round.create(
  user: u3,
  score: 86,
  birdies: 0,
  pars: 4,
  date: "08/25/2019",
  course: "Fort Dodge Country Club"
)

o12 = Round.create(
  user: u3,
  score: 82,
  birdies: 1,
  pars: 3,
  date: "09/03/2019",
  course: "Fort Dodge Country Club"
)

o13 = Round.create(
  user: u4,
  score: 88,
  birdies: 0,
  pars: 3,
  date: "05/11/2019",
  course: "Mt Hood Municipal Golf Course"
)

o14 = Round.create(
  user: u4,
  score: 86,
  birdies: 0,
  pars: 4,
  date: "10/25/2019",
  course: "Mt Hood Municipal Golf Course"
)
