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

r6 = Review.create(
  user: u4,
  course: c5,
  rating: 5,
  body: "Gem of a summer course"
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
