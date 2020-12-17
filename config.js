var config = {
    style: 'mapbox://styles/rorynealon/ckfh4ha911czy19o6gphiw1zw',
    //accessToken:'pk.eyJ1Ijoicm9yeW5lYWxvbiIsImEiOiJjazJveTNjdnQwaHF5M21tdHV2ZTV2YjE3In0.I3OhWK8stAfiXzDFMHa7vA',
    accessToken:'pk.eyJ1Ijoicm9yeW5lYWxvbiIsImEiOiJQSkZ2NU9nIn0.8i2jsHIQQBU4lDdv3emAbQ',
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    title: 'The Ambassador of Meiwah',
    subtitle: 'Change in coverage from 1998 to 2015',
    byline: 'By: Chrystal Rie',
    footer: 'Crystal Rie',
    chapters: [
        {
            id: 'born',
            title: 'Chinese Boy Born in Vietnam',
            image: './images/fathers_store_Tra_Vinh.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_04.mp3',
            description: 'Larry La was born in Vietnam in the 1950s to Chinese parents who left China during the Chinese Civil War. His father emigrated to Vietnam as a teenager and settled down in South Vietnam near the Mekong delta. Growing up, Larry and his siblings spoke Chinese at home and used Vietnamese at school.',
            location: {
                center: [106.3397879, 9.9385840],
                zoom: 13.5,
                pitch: 50.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'vietnamWar',
            title: '',
            //image: './images/war_quote.png',
            description: '<span class="quote">In Vietnam, we jokingly said, if you hear an explosion, that means you\'re still alive.</span><br><br>Larry recalls growing up in a war zone as a teenager.\n “We see people, their body on the streets, coming back from school. You just come and walk by and take a look. If it\'s somebody that you know, you don\'t, you just walk on. Gun fire almost everywhere.” \n The repetitive and inevitable exposure to the everyday violence made him numbed to the war. Having no other choices, this traumatic experience forced him to build mental resilience.',
            location: {
                center: [106.3397879, 9.9385840],
                zoom: 6,
                pitch: 60,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'boat4554',
            title: '',
            image: './images/Boat_4554_in_Kuching_Sarawah_1979.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_06.mp3',
            description: 'Following the end of the Vietnam War in 1975, Larry’s family fled Vietnam by boat and arrived at a refugee camp on Borneo Island in Malaysia. After living at the refugee camp for 15 months, his family was able to immigrate to the United States through sponsorship from the First Baptist Church of Erwin in Tennessee.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 45.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: 'boatTrip',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: 'boatTrip',
                    opacity: 0
                }
            ]
        },
        {
            id: 'route',
            title: '',
            image: './images/Boat_4554_in_Kuching_Sarawah_1979.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_07.mp3',
            // description: 'Following the end of the Vietnam War in 1975, Larry’s family fled Vietnam by boat and arrived at a refugee camp on Borneo Island in Malaysia. After living at the refugee camp for 15 months, his family was able to immigrate to the United States through sponsorship from the First Baptist Church of Erwin in Tennessee.',
            location: {
                center: [140.23839, 5.85966],
                zoom: 1.85,
                pitch: 10.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: 'boatTripLong',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: 'boatTripLong',
                    opacity: 0
                }
            ]
        },
        {
        id: 'erwinTN',
        //title: '',
        image: './images/erwin_FBC.jpg',
        description: 'First Baptist Church of Erwin, TN',
        location: {
            center: [-82.4184723, 36.1437193],
            zoom: 17.5,
            pitch: 45,
            bearing: 132
        },
        onChapterEnter: [
            {
                 layer: 'fbce',
                 opacity: .85
            }
        ],
        onChapterExit: [
             {
                 layer: 'fbce',
                 opacity: 0
             }
        ]
        },
        {
            id: 'move2DC',
            title: '',
            image: '',
            audio: './audio/DCOHC_Meiwah_Slide_10.mp3',
            description: 'One day, Larry got a phone call from his brother-in-law asking if he would be interested in managing a Chinese restaurant in Washington, DC. Larry decided to move to the nation’s capital to work at City Lights of China in Dupont Circle in 1988. <br><br><span class="quote">I love politics.  So you couldn’t pick a better city than Washington DC.</span>',
            location: {
                center: [-77.04349, 38.90967],
                zoom: 17,
                pitch: 45,
                bearing: -0
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'cloc ',
            title: 'City Lights of China turned into Refugee Meeting Room',
            image: './images/Slide_11_CityLights.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_11.mp3',
            description: 'At City Lights of China, Larry was reunited with the United Nations High Commissioner for Refugee whom he had met at the refugee camp in Malaysia.<br><br>Since their reunion, Larry has opened up his restaurant as meeting space to international, religious, and any organizations that serve refugees.',
            location: {
                center: [-77.04528, 38.91353],
                zoom: 19,
                pitch: 45,
                bearing: 60
            },
            onChapterEnter: [
                {
                    layer: 'restaurantLocations',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: 'restaurantLocations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'clocBasement ',
            title: '',
            image: './Images_Meiwah/Slide_12_02.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_12.mp3',
            description: '',
            location: {
                center: [-77.04528, 38.91353],
                zoom: 19,
                pitch: 45,
                bearing: 60
            },
            onChapterEnter: [
                {
                    layer: 'restaurantLocations',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'deadEndWestEnd ',
            title: '“Dead End” to West End',
            image: './images/Slide_11_CityLights.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_13.mp3',
            description: 'After over a decade of arduous work (working without weekends) at City Lights of China, Larry had decided to take a break to recharge himself physically and mentally. But it did not take long for him to miss working at restaurants and to scout around DC to open a new restaurant, Meiwah.<br><br>Seeking out a potential location for Meiwah, West End grabbed the attention of Larry and his business partners. Larry recalls West End was nicknamed “Dead End” in the late 1990s because it was a quiet neighborhood that had a park and a bookstore called Crowd Books.<br><br>Larry and his business partners spotted a corner retail space that has been left empty for two years. They spent many nights observing the neighborhood and counting the number of passersby. Then they decided to take the risk and open Meiwah in West End.',
            location: {
                center: [-77.04528, 38.91353],
                zoom: 19,
                pitch: 45,
                bearing: 60
            },
            onChapterEnter: [
                {
                    layer: 'restaurantLocations',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'meiwahWestEnd',
            title: 'Meiwah West End: from 2000 - 2019',
            image: './Images_Meiwah/Slide_12_02.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_14.mp3',
            description: '',
            location: {
                center: [-77.04773, 38.90547],
                zoom: 17.5,
                pitch: 160,
                bearing: -65.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'agassiz2015',
            title: 'Agassiz Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Agassiz Glacier lost 108 acres of surface area (about 37%).',
            location: {
                center: [-114.15881, 48.93439],
                zoom: 13.51,
                pitch: 41.00,
                bearing: 78.33
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'rainbow1998',
            title: 'Rainbow Glacier, 1998',
            image: '',
            description: 'Rainbow Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated immediately to the east of Rainbow Peak at an elevation between 8,500 feet (2,600 m) and 8,000 feet (2,400 m) above sea level. The glacier has visible crevasses in satellite imagery. Rainbow Glacier has shown modest retreat compared to other glaciers in Glacier National Park.',
            location: {
                center: [-114.08659, 48.88039],
                zoom: 13.09,
                pitch: 50.00,
                bearing: -53.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rainbow2015',
            title: 'Rainbow Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Rainbow Glacier lost 17 acres of surface area (about 6%).',
            location: {
                center: [-114.08659, 48.88039],
                zoom: 13.09,
                pitch: 50.00,
                bearing: -53.60
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'kintla1998',
            title: 'Kintla Glacier, 1998',
            image: '',
            description: 'Kintla Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated on a plateau 2 miles (3.2 km) southwest of Kintla Peak at an elevation between 8,700 feet (2,700 m) and 7,700 feet (2,300 m) above sea level. The glacier has numerous crevasses and is actually two glaciers.',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kintla2015',
            title: 'Kintla Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 24 acres of surface area (about 10%).',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sperry1998',
            title: 'Sperry Glacier, 1998',
            image: '',
            description: 'Sperry Glacier is a glacier on the north slopes of Gunsight Mountain west of the Continental Divide in Glacier National Park in the U.S. state of Montana. Although many geologic features of Glacier National Park were formed during the much longer period of glaciation ending over 10,000 years ago, Sperry Glacier — like all the glaciers in the park today — is a product of the recent Little Ice Age, the period of cooler average temperatures starting in about the 13th century and concluding in the mid-19th century.',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sperry2015',
            title: 'Sperry Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 37 acres of surface area (about 16%).',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
         }
    ]
};
