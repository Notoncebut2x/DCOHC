var config = {
    style: 'mapbox://styles/rorynealon/ckfh4ha911czy19o6gphiw1zw',
    //accessToken:'pk.eyJ1Ijoicm9yeW5lYWxvbiIsImEiOiJjazJveTNjdnQwaHF5M21tdHV2ZTV2YjE3In0.I3OhWK8stAfiXzDFMHa7vA',
    accessToken:'pk.eyJ1Ijoicm9yeW5lYWxvbiIsImEiOiJQSkZ2NU9nIn0.8i2jsHIQQBU4lDdv3emAbQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Larry La',
    subtitle: 'The Ambassador of Meiwah',
    byline: 'By Chrystal Rie',
    footer: 'Crystal Rie',
    chapters: [
        {
            id: 'born',
            title: 'Chinese Boy Born in Vietnam',
            image: './images/fathers_store_Tra_Vinh.jpg',
            audio: './audio/DCOHC_MeiWah_0015_LT_MIX.mp3',
	    description: 'Larry La was born in Vietnam in the 1950s to Chinese parents who left China during the Chinese Civil War. His father emigrated to Vietnam as a teenager and settled down in South Vietnam near the Mekong delta. Growing up, Larry and his siblings spoke Chinese at home and used Vietnamese at school.',
            location: {
                center: [106.3397879, 9.9385840,],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'boatTrip',
                    opacity: 0
                }
            ],
            onChapterExit: [
                 {
                    // layer: 'boatTrip',
                    // opacity: .85
                 }
            ]
        },
        {
            id: 'vietnamWar',
            //title: '',
            image: './images/war_quote.png',
            description: 'Larry recalls growing up in a war zone as a teenager.\n “We see people, their body on the streets, coming back from school. You just come and walk by and take a look. If it\'s somebody that you know, you don\'t, you just walk on. Gun fire almost everywhere.” \n The repetitive and inevitable exposure to the everyday violence made him numbed to the war. Having no other choices, this traumatic experience forced him to build mental resilience.',
            location: {
                center: [106.3397879, 9.9385840,],
                zoom: 6,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                {
                     // layer: 'layer-name',
                     // opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     // layer: 'layer-name',
                     // opacity: 0
                 }
            ]
        },
        {
            id: 'boat4554',
            //title: '',
            image: './images/Boat_4554_in_Kuching_Sarawah_1979.jpg',
	    description: 'Following the end of the Vietnam War in 1975, Larry’s family fled Vietnam by boat and arrived at a refugee camp on Borneo Island in Malaysia. After living at the refugee camp for 15 months, his family was able to immigrate to the United States through sponsorship from the First Baptist Church of Erwin in Tennessee.',
            location: {
                center: [106.3397879, 9.9385840,],
                zoom: 13.5,
                pitch: 60, 
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'boatTrip',
                    opacity: .85
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
            id: 'erwinTN',
            //title: '',
            image: './images/erwin_FBC.jpg',
            description: 'First Baptist Church of Erwin, TN',
            location: {
                center: [-82.41815, 36.14351],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                {
                     // layer: 'layer-name',
                     // opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     // layer: 'layer-name',
                     // opacity: 0
                 }
            ]
        },
	    

	{
            id: 'boatTrip',
            title: 'Boat #4554',
            image: './images/Boat_4554_in_Kuching_Sarawah_1979.jpg',
            description: 'In the late 1970s, a lot of small boat of Vietnamese people, fled out of Vietnam. They go to Thailand, Malaysia or Indonesia or the Philippines. So we just decided to go, and so we left it, now at that time in 1978 October. And we were on the ocean. It\'s really it\'s a big ocean with a small boat of 292 people in it. So we were so lucky we could survive the storms, survived the wave, survived the pirates',
            location: {
                center: [107.293, 5.921],
                zoom: 5.5,
                pitch: 20, 
                bearing: -10.2
            },  
             onChapterEnter: [
                {
                     layer: 'boatTrip',
                      opacity: 1
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
            id: 'boat',
            title: 'Boat #4554',
            image: './images/Boat_4554_in_Kuching_Sarawah_1979.jpg',
            description: 'In the late 1970s, a lot of small boat of Vietnamese people, fled out of Vietnam. They go to Thailand, Malaysia or Indonesia or the Philippines. So we just decided to go, and so we left it, now at that time in 1978 October. And we were on the ocean. It\'s really it\'s a big ocean with a small boat of 292 people in it. So we were so lucky we could survive the storms, survived the wave, survived the pirates',
            location: {
                center: [110.3579862, 1.5394127],
                zoom: 11.5,
                pitch: 60,
                bearing: -43.2
            },
        },



        {   
            id: 'cityLights',
            title: 'City Lights of China',
            image: './images/cloc.jpg',
            description: 'When I came here, I did not have Meiwah. We have City Lights of China. That\'s the former restaurant. And they still here on Connecticut, in a basement in DuPont Circle. That\'s where I started the restaurant business there. The reason I came up here for that because one of my brother-in-law, got to know the chef and the chef needs somebody to run the dining room. He cook well but he doesn\'t speak English, and he doesn\'t know how to run the front. So my brother introduce me and I came up here. I look around. I love the metropolitan Washington, DC, Virginia. So I said, this is good area. And I love, because you can tell, I love politics too. So you couldn\'t pick a better city than Washington DC. So I got into City Lights in 1988',
            location: {
                center: [-77.0453777, 38.9134807],
                zoom: 19.5,
                pitch: 60, 
                bearing:15.0
            },
                    onChapterEnter: [
                {
                        layer: 'restaurantLocations',
                        opacity: .9
                }
            ],
            onChapterExit: [
                {
                       // layer: 'restaurantLocations',
                       // opacity: 0
                }
            ]
        },
	{ 
            id: 'cityLights',
            title: 'City Lights of China',
            image: './images/matches.png',
            description: ' "Hey Larry, the new boss coming in two weeks. He used to be the at the refugee in Malaysia." I said, "Oh, is that Mr. Rooyen? Is that?" They said, "We think that\'s the one." So when he came after a few weeks, he said to Ian, I came to see him, "That\'s the one." Of course, I recognized him right away because he doesn\'t change. But he could not recognize me because when we in refugee camp, we had long hair and dark skin because it\'s very tropical weather, this way, every day. So we talk about reminding thing about the past. I say, "Wow! What a small world!" And we sit right there and his office and looking out the window and he say, "What are you doing?" I said, "Well, I run my restaurant right there." So I showed him through the window. He can see the City Lights right across there. He say, "Oh really?" So from then on the Lights of China become the refugee restaurant. Anytime they have any kind of refugee meeting with the refugee, the Catholic organization or any other organization about refugee. They will have meeting there at our restaurant.”',
            location: {
                center: [-77.0453777, 38.9134807],
                zoom: 19.5,
                pitch: 60,
                bearing: 15.0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        { 
            id: 'cityLights2',
            title: 'City Lights of China',
            image: './images/cloc.jpg',
            description: 'I was in City Lights for 10 years, and I was in the basement for everyday. I used to work seven days, or six days, or six and a half days easily. And I\'m in the basement so long, and the ceiling was so low. I can jump up and can touch the ceiling. So, when I go out at lunchtime, after lunchtime to do errand, to go bank and do everything, so now I feel like the sky is that low that I could touch the sky, I mean just the feeling. It\'s kind of scary and I feel like, wow, I better not stay in the basement for another 10 years. I don\'t know what I\'d feel about psychologically. So, I want to get out, and I want to sell the restaurant to other people so we can open a new restaurant. So that\'s why, after I sold it in 1998, I thought that I could find another career, find another business, but I still miss the customers, and also the staff too, and the customers. So, a year later, some of the people, they still stay at City Lights after we sold, the people in the kitchen, they call me and say, "Hey, let\'s open another restaurant." I said, "well, I wanted to," because I myself, that\'s what they say, how much golf you can play everyday. So, I said, "well, I need to get back to the restaurant business." And I\'m probably one of the few people that get out of the restaurant business, still want to get in, because I love it. You have to like it.',
            location: {
                center: [-77.0453777, 38.9134807],
                zoom: 19.5,
                pitch: 60,
                bearing: 15.0
            },
            onChapterEnter: [],
            onChapterExit: [
		{
			layer: 'restaurantLocations',
			opacity: 0
		}
	    ]
        },
        {
            id: 'westend',
            title: 'Dead End West End',
            image: './images/West_End_map.png',
            description: 'At that time, in 1998, 99, that area called West End, they still call West End, but they have a nicknamed called Dead End. On Elm Street, after 18th street, after 19th street, it\'s nothing until you go to Georgetown. So the whole section from 19th street to about 28th, it kind of only very, nothing going on that much. So they called it Dead End, and the Meiwah that we just closed, that corner left for two year, empty for two year. Nobody touched it. So when we got in, we want that space. There used to be a bookstore there, they called it Crowd Books, and all this thing. But when we got that space, that location, we had, across from there, that location, they have a park. That\'s a public park there. They now, they just make it very nice. My chef partner and I, we just sit there for many nights, just to count how many people are walking by the area. It\'s scary. It\'s not busy, you know? But I feel like it\'s a very good corner location.  LL: So we take the risk. We decided. But we\'re lucky. We got in there up to that. The Ritz Carlton opened, the other hotel across street from that, the St. Gregory [Hotel], and all these things start open up. And the building right across from us used to be a parking lot, and now it\'s the high end building around the corner at New Hampshire, where you have Rasika. Rasika is on the first floor. Rasika didn\'t come in until',
            location: {
                center: [-77.0512, 38.90619],
                zoom: 16.5,
                pitch: 10,
                bearing: 0.0
            },
            onChapterEnter: [
                {
                        layer: 'west-end',
                        opacity: .15
                }
            ],
            onChapterExit: [
                {
                        layer: 'west-end',
                        opacity: 0
                }
            ]
        },
        {
            id: 'meiwah',
            title: 'Meiwah',
            image: './images/Meiwah_Restaurant_Ancient_Gate_02.jpg',
            description: 'We started for construction in 1999. It took almost a whole year to finish everything because it\'s an empty shell. So we build it up. And then we opened in the year 2000. I work seven days a week. I\'m there, and many nights that I don\'t go home because I have to stay late, and then the next day, you have to be there in the morning. So instead of go home, I just pull out three chairs and just there. It\'s hard work. What I mean is really hard work. It\'s not like, okay, open restaurant and people come. You need to do up, and you need to keep up.',
            location: {
                center: [-77.0477261, 38.9054718],
                zoom: 19.5,
                pitch: 60, 
                bearing: 0.0 
            },
            onChapterEnter: [
                {
                        layer: 'restaurantLocations',
                        opacity: .9
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
            id: 'generalTso',
            title: 'Is General Tso’s Chicken Chinese Food?',
            image: './images/general_tsos_chicken.jpg',
            description: '"In the United States, it doesn\'t matter how small a Chinese restaurant is or how big it is, you have to have General Tso\'s chicken. That\'s one of the main thing....You can\'t find it in China. Like the fortune cookie, you don\'t have in China... But people love it.”',
            location: {
                center: [-77.0477261, 38.9054718],
                zoom: 19.5,
                pitch: 60, 
                bearing: 0.0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final',
            title: '',
            image: './images/xchang_portrait_larry_015.jpg',
            description: 'I lived in DC since 1988, so it\'s 31 years. So this is a place that I call home, because even in Vietnam, I left Vietnam when I was 20, so only 20 years, and then Tennessee, and then, so here is the place that I lived the longest, and that gave me a lot of... And besides, this is the capital of the country, and at least, we still the great country in the world, so it\'s very, very honored to live here. I feel very good to be in this area. And with the suburban Virginia and Maryland, I mean, this is very, they call the greater Washington DC, it\'s very dynamic, and trust me, it\'s like the melting pot, a lot of people from different ... In this area, we speak, you strictly speak with an accent, nobody pay attention to you, you know? But in some other state, the people say, who is this? Where\'s he come from? But here, it\'s okay. With the World Bank, with the IMF, with the embassy, a hundred something embassy, it\'s just a good place to be, culturally very rich. Actually, I don\'t know you pay attention to that or not, but a lot of think tank in DC that you can go to their lecture, their event, free. And you can enrich yourself if you have time to do it, and the CSIS, something like that, the Carter, those, like the one near the Reagan Building. They have a lot of this, the Woodrow Wilson Center. All this thing is very, it\'s very good, and you have program everyday, different thing. If you\'re on the list, they keep sending you, and then pick which one you\'d like to go. And it\'s really fun to see different, and then that. So, and the museum. You can\'t beat museum. In DC, you walk in, you don\'t have to have a ticket, you don\'t have to have anything, and only in DC. Any other museum, you have to pay something. But in DC, that\'s nothing. And then, the federal government here, all this thing. So, DC is a very unique city that I still love, I still enjoy. I\'m probably still here for awhile, and you know, just like I said, when you retire, you get to go to those think tank and enjoy yourself, enrich your, and then the embassy, a lot of embassy. So, I love DC.',
            location: {
                center: [-77.0365581, 38.8949924],
                zoom: 11.5,
                pitch: 10,
                bearing: 0.0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
