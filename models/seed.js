const wines = [
    {
        style: "Red",
        type: "Cabernet Sauvignon",
        name: "Chateau Montelena Estate Cabernet Sauvignon",
        year: 2015,
        region: "Napa Valley",
        producer: "Chateau Montelena",
        abv: 14.2,
        description: "A classic Napa Cabernet with flavors of black currant, cassis, and cedar.",
        photo: "https://images.vivino.com/thumbs/EbBb5X-uSkuhaCVnHZ-LHA_pb_600x600.png",
        isFeatured: true,
        reviews: [
            {
                reviewerName: "John Smith",
                rating: 5,
                title: "Fantastic Cabernet",
                content: "This wine is amazing, with rich flavors and a smooth finish. Highly recommended!"
            },
            {
                reviewerName: "Jane Doe",
                rating: 4,
                title: "Great wine, but a bit pricey",
                content: "I really enjoyed this Cabernet, but it's definitely on the expensive side."
            }
        ]
    },
    {
        style: "White",
        type: "Chardonnay",
        name: "Rombauer Vineyards Chardonnay",
        year: 2019,
        region: "Carneros",
        producer: "Rombauer Vineyards",
        abv: 14.5,
        description: "A rich and creamy Chardonnay with notes of butter, vanilla, and tropical fruit.",

        photo: "https://dandm.com/image/product/11457.jpg",
        isFeatured: false,
        reviews: [
            {
                reviewerName: "Emily Jones",
                rating: 5,
                title: "Best Chardonnay I've ever had",
                content: "This wine is absolutely delicious. I love the creamy texture and the tropical fruit flavors."
            },
            {
                reviewerName: "Michael Chen",
                rating: 4,
                title: "Solid Chardonnay",
                content: "This is a really good Chardonnay, but I've had better for the price."
            }
        ]
    },
    {
        style: "Red",
        type: "Pinot Noir",
        name: "Domaine Serene Evenstad Reserve Pinot Noir",
        year: 2016,
        region: "Willamette Valley",
        producer: "Domaine Serene",
        abv: 14.5,
        description: "An elegant Pinot Noir with flavors of cherry, raspberry, and spice.",
        photo: "https://www.centralwinemerchants.com/images/labels/domaine-serene-pinot-noir-willamette-valley-evenstad-reserve.jpg",
        isFeatured: true,
        reviews: [
            {
                reviewerName: "David Lee",
                rating: 5,
                title: "Incredible Pinot Noir",
                content: "This is one of the best Pinot Noirs I've ever had. The flavors are complex and delicious."
            },
            {
                reviewerName: "Sarah Johnson",
                rating: 4.5,
                title: "Great wine, but a bit expensive",
                content: "I really enjoyed this Pinot Noir, but it's definitely on the pricey side."
            }
        ]
    },
    {
        style: "Sparkling",
        type: "Brut",
        name: "Jaume Serra Cristalino Brut",
        year: 2020,
        region: "Penedes, Spain",
        producer: "Jaume Serra",
        abv: 11.5,
        description: "This Spanish Cava is crisp and clean, with citrus and apple flavors, and a hint of toastiness. Perfect for toasting or enjoying with seafood or light appetizers.",
        photo: "https://images.vivino.com/thumbs/C_cGpdwNQMKDCCk5Vnj3yA_pb_x600.png",
        isFeatured: false,
        reviews: [
            {
                reviewerName: "John Doe",
                rating: 4,
                title: "Great value for the price",
                content: "I was pleasantly surprised by this Cava. It has a nice balance of fruitiness and acidity, and is a great value for the price."
            },
            {
                reviewerName: "Jane Smith",
                rating: 3,
                title: "Decent but not amazing",
                content: "This Cava is decent but not amazing. It's good for the price, but I've had better."
            }
        ]
    },
    {
        style: "Red",
        type: "Merlot",
        name: "Chateau Ste. Michelle Merlot",
        year: 2017,
        region: "Columbia Valley",
        producer: "Chateau Ste. Michelle",
        abv: 14,
        description: "A medium-bodied Merlot with flavors of black cherry, plum, and a hint of vanilla.",
        photo: "https://images.vivino.com/thumbs/DygMHm5zSi2qXX6I0Hk90A_pb_600x600.png",
        isFeatured: false,
        reviews: [
            {
                reviewerName: "John Doe",
                rating: 5,
                title: "Amazing wine",
                content: "This is one of the best Merlots I've ever tasted. Highly recommended!"
            },
            {
                reviewerName: "Jane Smith",
                rating: 4,
                title: "Good value for the price",
                content: "This wine is a great value for the price. I would definitely buy it again."
            }
        ]
    },
    {
        style: "White",
        type: "Chardonnay",
        name: "Kendall-Jackson Vintner's Reserve Chardonnay",
        year: 2019,
        region: "California",
        producer: "Kendall-Jackson",
        abv: 13.5,
        description: "A full-bodied Chardonnay with flavors of apple, pear, and a hint of oak.",
        photo: "https://images.vivino.com/thumbs/20ykzlp3ToqV0sgtOzH3-A_pb_x600.png",
        isFeatured: false,
        reviews: [
            {
                reviewerName: "Alex Johnson",
                rating: 4,
                title: "Solid Chardonnay",
                content: "This is a good Chardonnay with nice fruit flavors and a subtle oakiness."
            }
        ]
    },
    {
        style: "Red",
        type: "Cabernet Sauvignon",
        name: "Robert Mondavi Napa Valley Cabernet Sauvignon",
        year: 2018,
        region: "Napa Valley",
        producer: "Robert Mondavi",
        abv: 15,
        description: "A full-bodied Cabernet Sauvignon with flavors of blackcurrant, vanilla, and a hint of tobacco.",
        photo: "https://images.vivino.com/thumbs/DygMHm5zSi2qXX6I0Hk90A_pb_600x600.png",
        isFeatured: false,
        reviews: [
            {
                reviewerName: "Jessica Lee",
                rating: 4,
                title: "Nice wine",
                content: "This is a solid Cabernet Sauvignon with good fruit flavors and a nice finish."
            },
            {
                reviewerName: "Michael Chen",
                rating: 5,
                title: "Excellent wine",
                content: "This wine is truly exceptional. It has rich, complex flavors and a long, smooth finish."
            }
        ]
    },
    {
        style: "Sparkling",
        type: "Extra Dry",
        name: "Barefoot Bubbly Extra Dry",
        year: 2021,
        region: "California, USA",
        producer: "Barefoot",
        abv: 11,
        description: "This California sparkling wine has flavors of green apple, jasmine, and kiwi. It's a great choice for celebrations or just enjoying with friends.",
        photo: "https://www.shoppersvineyard.com/images/sites/shoppersvineyard/labels/barefoot-bubbly-ex-dry_1.jpg",
        isFeatured: false,
        reviews: [
            {
                reviewerName: "Sarah Johnson",
                rating: 5,
                title: "Love it!",
                content: "This is my go-to sparkling wine. It's light and refreshing, and I love the flavors of green apple and kiwi."
            },
            {
                reviewerName: "Michael Lee",
                rating: 2,
                title: "Too sweet for me",
                content: "I found this wine to be too sweet for my taste. I prefer drier sparkling wines."
            }
        ]
    },
    {
        style: 'Red',
        type: 'Cabernet Sauvignon',
        name: 'Chateau Margaux',
        year: 2015,
        region: 'Bordeaux',
        producer: 'Chateau Margaux',
        abv: 13.5,
        description: 'Full-bodied, with ripe black fruit flavors and a long finish.',
        photo: 'https://images.vivino.com/thumbs/DygMHm5zSi2qXX6I0Hk90A_pb_600x600.png',
        isFeatured: true,
        reviews: [
            {
                reviewerName: 'John Smith',
                rating: 4,
                title: 'Great wine, but a bit expensive',
                content: 'This is a fantastic wine, but the price point is a bit high for me.'
            },
            {
                reviewerName: 'Jane Doe',
                rating: 5,
                title: 'One of the best wines I have ever tasted',
                content: 'I had the pleasure of trying this wine at a dinner party and was blown away by its complexity and depth of flavor.'
            }
        ]
    },
    {
        style: 'White',
        type: 'Chardonnay',
        name: 'Kistler Vineyards',
        year: 2018,
        region: 'Sonoma Coast',
        producer: 'Kistler Vineyards',
        abv: 14.5,
        description: 'A rich, buttery Chardonnay with notes of vanilla and caramel.',
        photo: 'https://images.vivino.com/thumbs/oUpfXZUcTgSEUBCwGlRNJA_pb_600x600.png',
        isFeatured: true,
        reviews: [
            {
                reviewerName: 'James Brown',
                rating: 3,
                title: 'Good, but not great',
                content: 'This is a solid Chardonnay, but I have had better for the price.'
            },
            {
                reviewerName: 'Sarah Johnson',
                rating: 5,
                title: 'Absolutely amazing wine',
                content: 'I am not usually a fan of Chardonnay, but this wine is a game-changer. It has so much flavor and complexity.'
            }
        ]
    },
    {
        style: "Red",
        type: "Cabernet Sauvignon",
        name: "Trader Joe's Grand Reserve",
        year: 2019,
        region: "Napa Valley",
        producer: "Trader Joe's Winery",
        abv: 14.5,
        description: "Full-bodied with rich flavors of dark fruit and vanilla.",
        photo: "https://www.traderjoes.com/content/dam/trjo/products/m306/wine/52078.png/jcr:content/renditions/cq5dam.web.1280.1280",
        isFeatured: true,
        reviews: [
            {
                reviewerName: "John",
                rating: 4.5,
                title: "Great wine for the price",
                content: "I was pleasantly surprised by this wine. It's full-bodied with great flavors and aromas."
            },
            {
                reviewerName: "Jane",
                rating: 5,
                title: "Best Cab for the price",
                content: "I've tried many Cabs at this price point and this is the best one. Highly recommend."
            }
        ]
    },
    {
        style: "Red",
        type: "Pinot Noir",
        name: "Trader Joe's Platinum Reserve",
        year: 2018,
        region: "Russian River Valley",
        producer: "Trader Joe's Winery",
        abv: 13.5,
        description: "Silky and smooth with flavors of cherry and spice.",
        photo: "https://www.traderjoes.com/content/dam/trjo/products/m306/wine/72594.png/jcr:content/renditions/cq5dam.web.1280.1280",
        isFeatured: false,
        reviews: [
            {
                reviewerName: "Emily",
                rating: 4,
                title: "Great Pinot for the price",
                content: "I'm usually skeptical of cheap Pinots, but this one is really good. Smooth and easy to drink."
            },
            {
                reviewerName: "Mark",
                rating: 3,
                title: "Decent for the price",
                content: "This wine is decent, but not outstanding. It's good for a casual weeknight dinner."
            }
        ]
    },
    {
        style: "Red",
        type: "Cabernet Sauvignon",
        name: "Three Thieves",
        year: 2018,
        region: "California",
        producer: "Three Thieves",
        abv: 13.5,
        description: "A rich and full-bodied wine with flavors of blackberry and cassis.",
        photo: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hdc/hb7/16012958728222.png",
        isFeatured: false,
        reviews: [
            {
                reviewerName: "John Doe",
                rating: 4,
                title: "Excellent value",
                content: "I was pleasantly surprised by how good this wine tasted given the low price."
            },
            {
                reviewerName: "Jane Smith",
                rating: 3,
                title: "Decent wine",
                content: "Not the best Cab I've had, but for the price, it's a good value."
            }
        ]
    },
    {
        style: "White",
        type: "Pinot Grigio",
        name: "Santa Margherita",
        year: 2019,
        region: "Italy",
        producer: "Santa Margherita",
        abv: 12.5,
        description: "A crisp and refreshing wine with notes of citrus and green apple.",
        photo: "https://www.wespeakwine.com/Shared/Images/Product/Santa-Margherita-Pinot-Grigio-Alto-Adige-2016-750ML/santamargherita_pg_bottle.jpg",
        isFeatured: false,
        reviews: [
            {
                reviewerName: "Tom Jones",
                rating: 5,
                title: "Delicious",
                content: "One of my favorite Pinot Grigios. It's light and refreshing with a nice balance of acidity."
            },
            {
                reviewerName: "Amy Lee",
                rating: 3,
                title: "Not my favorite",
                content: "I found this wine to be a bit too acidic for my taste, but it might be a good fit for someone who likes a more tart wine."
            }
        ]
    },
    {
        style: "Rose",
        type: "Grenache",
        name: "Dark Horse",
        year: 2020,
        region: "California",
        producer: "Dark Horse",
        abv: 11.5,
        description: "A light and fruity wine with notes of strawberry and raspberry.",
        photo: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h5c/hf6/13411422208030.png",
        isFeatured: true,
        reviews: [
            {
                reviewerName: "Emily Davis",
                rating: 4,
                title: "Nice summer wine",
                content: "This is a great wine to sip on a hot day. It's refreshing and not too sweet."
            },
            {
                reviewerName: "Mark Johnson",
                rating: 2,
                title: "Disappointing",
                content: "I didn't enjoy this wine at all. It tasted too watered down and lacked depth."
            }
        ]
    }
];
// Export the seed data to `models/index.js`
module.exports = wines;