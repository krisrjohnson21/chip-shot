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
  url: "https://img.bizbash.com/files/base/bizbash/bzb/image/2019/02/7efb30d7943e16bd5a4dd77449de57fc.png?ar=16%3A9&auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&w=1140"
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
  url: "https://static.wixstatic.com/media/46c90c_2d1b23169dfe4c1a82919eb76cfbdbb1~mv2_d_2048_1365_s_2.jpeg"
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
  url: "https://www.quailridgecc.com/images/dynamic/getImage.gif?ID=100003662"
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
  url: "https://golfadvisor.brightspotcdn.com/dims4/default/0d6fdde/2147483647/strip/true/crop/450x290+0+24/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F19%2Fce%2Fb3ddb4af9acd1960d4ef89c3d81b%2F61858.jpg"
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
  url: "https://mthoodgolfclub.com/wp-content/uploads/2018/05/MtHood-Course-16.jpg"
)
