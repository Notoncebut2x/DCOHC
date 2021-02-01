var config = {
    style: 'mapbox://styles/rorynealon/ckfh4ha911czy19o6gphiw1zw',
    //accessToken:'pk.eyJ1Ijoicm9yeW5lYWxvbiIsImEiOiJjazJveTNjdnQwaHF5M21tdHV2ZTV2YjE3In0.I3OhWK8stAfiXzDFMHa7vA',
    accessToken:'pk.eyJ1Ijoicm9yeW5lYWxvbiIsImEiOiJQSkZ2NU9nIn0.8i2jsHIQQBU4lDdv3emAbQ',
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    title: 'Larry La',
    subtitle: 'Ambassador of Meiwah',
    byline: 'By: Chrystal Rie',
    footer: 'Crystal Rie',
    chapters: [
        {
            id: 'born',
            title: 'Chinese Boy Born in Vietnam',
            image: './images/Slide_04.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_04.mp3',
            description: 'Larry La was born in Vietnam in the 1950s to Chinese parents who fled the country during the Chinese Civil War. His father emigrated to Vietnam as a teenager and settled down in South Vietnam near the Mekong delta. Growing up, Larry and his siblings spoke Mandarin at home and used Vietnamese at school.',
            transcript: '<i>My parents left China when they had the civil war there, back in the 1930s, before the World War II. And at that time the communist, Mao Zedong and the Kuomintang, Chiang Kai-shek, they were have a civil war in China. And then also Japan invaded China at that time in the 1930s. So it\'s got big turmoil economically and everything politically, everything, just chaos...My father came to Vietnam when he was teenager. Then he stayed in Vietnam the rest of his life after that. And then get into business, and we were all born in Vietnam. I was born in Vietnam in the South, in the Mekong delta. And grew up with two languages. We speak Chinese at home or we speak Chinese with the Chinese community in Vietnam. And went to Vietnamese school. So we have two languages growing up.</i>',
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
            image: './images/Slide_05_TetOffensive.gif',
            audio: './audio/DCOHC_Meiwah_Slide_05.mp3',
            description: '<span class="quote">In Vietnam, we jokingly said, if you hear an explosion, that means you\'re still alive.</span><br><br>Larry recalls growing up in a war zone as a teenager and seeing dead bodies on the street on his way back from school. This repetitive and traumatic exposure to everyday violence numbed him to the daily atrocities he encountered. He had no other choice but to adopt a mental toughness that stayed with him into adulthood.',
            transcript: '<i>Actually I was born and grew up in a war zone. It\'s just the time I was born and the time that the communists up North took over the whole South Vietnam in 1975. April 30th of 75. That\'s the fall of Saigon. Still war going on a little bit, but that\'s part of the end of the war. And since then, Vietnam had been peace for the last 40 some years. They have some war right after that, probably 1976, 77 to Cambodia. And then with China in 1978. But that\'s it. After that, Vietnam have not had war for a long time. But few in Vietnam, like my age or they go today, we all born and grew up in a war zone. We see people, their body on the streets, coming back from school. You just come and walk by and take a look. If it\'s somebody that you know, you don\'t, you just walk on. Gun fire almost everywhere. If you look in the TV nowadays in some of the Middle East country, it\'s pretty bad at that time. And in Vietnam we always jokingly saying, but that\'s real is that, \‘if you hear an explosion, that means you\'re still alive.’ That\'s how bad. You can walk by somewhere, they have the explosion. Because it\'s a civil war. The Vietnamese communists, they\'re called Viet Cong. They everywhere. Especially when I was old enough at that time, in 1968 when they have the Tet Offensive, there\'s really fighting right inside the city. We probably numb with the war, so that\'s why we not die, scary, because it\'s everywhere is war anyway. So I still remember even teenager, I still very young, 12, 13. I still standing the roof of the building, not the red roof, the building too. We see the helicopter, military helicopter shoot out from both sides of that. And you can see the explosion from the target. And we\'re standing there watch, look like we\'re watching movie but it\'s real. So that give you a sense that when people go to war zone, their mentality is different than people who never see war before. That\'s not so obvious.</i>',
            chapterType: 'wide',
            location: {
		    center: [105.00, 15.00],
                zoom: 5.5,
                pitch: 35,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'boat4554',
            title: '',
            image: './images/Slide_06_Boat.png',
            audio: './audio/DCOHC_Meiwah_Slide_06.mp3',
            description: 'Following the end of the Vietnam War in 1975, Larry’s family fled Vietnam by boat and arrived at a refugee camp on Borneo Island in Malaysia. The family stayed at the refugee camp for 15 months.',
            transcript:'<i>In the late 1970s, a lot of small boat of Vietnamese people, fled out of Vietnam. They go to Thailand, Malaysia or Indonesia or the Philippines. So we just decided to go, and so we left it, now at that time in 1978 October. And we were on the ocean. It\'s really it\'s a big ocean with a small boat of 292 people in it. So we were so lucky we could survive the storms, survived the wave, survived the pirates. We didn\'t run into any pirates. At that time, the Thai pirates, they really operate very hard because they know a lot of people get out of Vietnam. They have jewelry, they have money, they have everything. So they rowed up there. So we are lucky we didn\'t have all these thing, and we survived after 9 days at [inaudible 00:19:48], then we got to East Malaysia. Called the Borneo Island. They called Kuching in Sarawak</i>',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
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
            id: 'refugeeCamp',
            title: '',
            image: './images/Slide_07_Sarawak.png',
            audio: './audio/DCOHC_Meiwah_Slide_07.mp3',
            description: 'While Larry’s family was staying at the refugee camp, Larry helped out an United Nations High Commissioner for Refugee Rene Van Rooyen. Following Rooyen’s suggestion, Larry’s family immigrated to the United States through sponsorship from a Baptist church in Erwin, Tennessee. ',
            transcript:'<i>You got to the refugee camp, the UN High Commissioner for Refugees, they would come to interview you. Say, okay, get your [inaudible 00:48:30]. And then, that\'s the UN High Commissioner. So after that you have to wait for a third country like Australia, New Zealand, US, and Canada, or European country to accept you. So there\'s another process that they come in. At that time, for some reason, everybody said that, "Oh, you have a big family, you should go to Australia because they have a lot of land, you can do farming." So we really want to go to Australia from the beginning because we thought that that\'s the... But then after that we..., Australia is very strict at the time that they don\'t take that many people into the country. So later on, one of the High Commissioner [for Refugees], Mr. Rene Van Rooyen, he\'s Dutch and he worked for the High Commissioner in our camp. So he came to interview. And even though my English was not good at that time, but it\'s a lot better than a lot of other people in the camp. So I was helping him a lot, fill out paper form and all these things. Writing is okay but speaking is different. But I still speak enough to talk to him. So anytime he come to the camp I would come to help him to deal with the other refugee. So Rooyen said, ‘Why don\'t you go to America?’ I said, ‘I don\'t know why I don\'t go.’ ‘So let\'s go.’ So he got me to the American interviewer, the people from the Embassy of the US Embassy in Malaysia. So they interviewed our family and they accepted. That\'s when you get to come to this country that\'s the process.</i>',
            location: {
                center: [110.23785, 1.61577],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'boatTrip',
                    opacity: 0.0
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
        image: './images/Slide_08_Church.jpg',
        audio: './audio/DCOHC_Meiwah_Slide_08',
        description: 'When Larry’s family arrived in Erwin in the late 1970s, his family was one of a few families of color who settled down in the area.',
        transcript:'When you\'re in refugee camp, you don\'t know where you\'ll be end up. Because you need to wait for the sponsorship. So the first Baptist church of Erwin, Tennessee decided to sponsor our family. So that\'s why we end up in Erwin. Forgive me to say that, but when I was in refugee camp, when we get assignments say Tennessee, we didn\'t know where Tennessee was. In overseas, you would know Chicago, you would know LA, San Francisco, Miami, but not Tennessee. And then not Erwin, Tennessee. It\'s a very small town, only about 4000, 5000 population. People there until today is 100% Caucasian. And those too they\'ve been living there for generations, many, many generations. And none, not one single African American live there. No Asian lived there.',
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
            id: 'route',
            title: 'Larry\'s Journey',
            // image: './images/Boat_4554_in_Kuching_Sarawah_1979.jpg',
            // audio: './audio/DCOHC_Meiwah_Slide_07.mp3',
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
            id: 'move2DC',
            title: '',
            image: '',
            audio: './audio/DCOHC_Meiwah_Slide_10.mp3',
            description: 'One day, Larry got a phone call from his brother-in-law asking if he would be interested in managing a Chinese restaurant in Washington, DC. The chef spoke no English, and he needed someone to run the front of house. Larry grabbed at the opportunity, and moved to the nation’s capital to begin his career at City Lights of China, located in Dupont Circle.<br><br><span class="quote">I love politics.  So you couldn’t pick a better city than Washington DC.</span>',
            transcript:'When I came here, I did not have Meiwah. We have City Lights of China. That\'s the former restaurant. And they still here on Connecticut, in a basement in DuPont Circle. That\'s where I started the restaurant business there. The reason I came up here for that because one of my brother-in-law, got to know the chef and the chef needs somebody to run the dining room. He cook well but he doesn\'t speak English, and he doesn\'t know how to run the front. So my brother introduce me and I came up here. I look around. I love the metropolitan Washington, DC, Virginia. So I said, this is good area. And I love, because you can tell, I love politics too. So you couldn\'t pick a better city than Washington DC. So I got into City Lights in 1988, so that\'s when we work with the chef. The chef is from Taiwan, he is an excellent chef. So he take care of the kitchen, I take care of dining. And we were in the basement. It\'s very unusual for us that we can have that kind of business. We were so... Well first, I think it\'s the cooking in any restaurant, the food has to be the main thing there, to be a decent food that people would like it. And the chef is very good. And then I take care of the front, getting people. And in the basement, but we style pretty well. And then later on in the 1990s, I consider this tiny restaurant in the town, everybody knows City Lights of China. And I got to know so many politician, Senator, governor, justice. The Supreme Court justice, I met so many of them, the Justice of the Supreme Court.',
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
            id: 'cloc',
            title: 'City Lights of China turned into Refugee Meeting Room',
            image: './images/Slide_11_CityLights.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_11.mp3',
            description: 'After twelve years since Larry immigrated to America, he was reconnected with Rene Van Rooyen, the United Nations High Commissioner for Refugee, whom he had met at the refugee camp in Malaysia. <br><br>Since their reunion, Larry has reimagined his restaurant to not only feed diners, but to also serve as a meeting space for refugee communities and other organizations working to support them.',
            transcript: 'And believe it or not, 12 years later, after we got the accepted and Mr. Rooyen. Twelve years after that, Mr. Rooyen, still work for UN High Commissioner, but got promoted to be the head of the UN in the United States and his office just right across from City Lights of China. Before he came, the people that worked for the UN there, UN now, they moved to Dupont Circle, south now, but before they were on North of Dupont Circle. But the people that work there, they come to our restaurant and I said, "Hey Larry, the new boss coming in two weeks. He used to be the at the refugee in Malaysia." I said, "Oh, is that Mr. Rooyen? Is that?" They said, "We think that\'s the one." So when he came after a few weeks, he said to Ian, I came to see him, "That\'s the one." Of course, I recognized him right away because he doesn\'t change. But he could not recommend me because when we in refugee camp, we had long hair and dark skin because it\'s very tropical weather, this way, every day. So we talk about reminding thing about the past. I say, "Wow! What a small world!" And we sit right there and his office and looking out the window and he say, "What are you doing?" I said, "Well, I run my restaurant right there." So I showed him through the window. He can see the City Lights right across there. He said, "Oh really?" So from then on the Lights of China become the refugee restaurant. Anytime they have any kind of refugee meeting with the refugee, the Catholic organization or any other organization about refugee. They will have meeting there at our restaurant. So it\'s very amazing that I got to reunited with him. And from then on, everything, every year I go to the UN High Commissioner for Refugees here in DC. They have the New Year\'s celebration or, Refugee International, anytime anywhere they have the gala to raise money. I always attend and I always giving back to the community, the refugee community.',
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
            id: 'cloc2',
            image: './images/Slide_12.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_12.mp3',
            transcript:'I was in City Lights for 10 years, and I was in the basement for everyday. I used to work seven days, or six days, or six and a half days easily. And I\'m in the basement so long, and the ceiling was so low. I can jump up and can touch the ceiling. So, when I go out at lunchtime, after lunchtime to do errand, to go bank and do everything, so now I feel like the sky is that low that I could touch the sky, I mean just the feeling. It\'s kind of scary and I feel like, wow, I better not stay in the basement for another 10 years. I don\'t know what I\'d feel about psychologically. So, I want to get out, and I want to sell the restaurant to other people so we can open a new restaurant. So that\'s why, after I sold it in 1998, I thought that I could find another career, find another business, but I still miss the customers, and also the staff too, and the customers. So, a year later, some of the people, they still stay at City Lights after we sold, the people in the kitchen, they call me and say, ‘Hey, let\'s open another restaurant!’ I said, ‘well, I wanted to,’ because I myself, that\'s what they say, how much golf you can play everyday. So, I said, ‘well, I need to get back to the restaurant business.’ And I\'m probably one of the few people that get out of the restaurant business, still want to get in, because I love it. You have to like it.',
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
		id:'clocMenu',
		image:'./images/Slide_13.jpg',
		description:'Vintage City Lights of China menu and matchbook from the ‘90s. The menu included American Chinese classic dishes such as Orange Chicken and Sweet and Sour Pork, each priced at $8.95. For drinks, it offered beer, wine, cocktails, cognac, champagne, as well as "exotic drink" and non-alcoholic selections. Its exotic beverages referring to tiki cocktails, included the Frozen Fruit Daiquiri, Mai Tai, Pina Colada, Planter’s Punch, and other offerings.',
		location: {
		    center:[-77.04528, 38.91353],
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
            id: 'deadEndWestEnd ',
            title: '“Dead End” to West End',
            // image: './images/Slide_15_01_Meiwah_WestEnd.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_14.mp3',
            description: 'After over a decade of arduous work (working without weekends) at City Lights of China, Larry decided to take a break to recharge himself physically and mentally. But it did not take long for him to miss working at restaurants and to scout around DC to open a new restaurant, Meiwah.<br><br>As Larry and his business partners seeked out a potential location for Meiwah, West End emerged as a prime candidate. Larry recalls how West End used be nicknamed the “Dead End” in the late 1990s, given that it was a quiet neighborhood that had little else besides a park and a bookstore.<br><br>Larry and his business partners spotted a corner retail space that had been left empty for two years. They spent many nights observing the neighborhood and counting the number of passersby. Then they decided to take the risk and open Meiwah on the then sleepy corner of M Street and New Hampshire Ave.',
            transcript: 'At that time, in 1998, 99, that area called West End, they still call West End, but they have a nickname called Dead End. On M Street, after 18th street, after 19th street, it\'s nothing until you go to Georgetown. So the whole section from 19th street to about 28th, it kind of only very, nothing going on that much. So they called it Dead End, and the Meiwah that we just closed, that corner left for two year, empty for two year. Nobody touched it. So when we got in, we want that space. There used to be a bookstore there, they called it Crowd Books, and all this thing. But when we got that space, that location, we had, across from there, that location, they have a park. That\'s a public park there. They now, they just make it very nice. My chef partner and I, we just sit there for many nights, just to count how many people are walking by the area. It\'s scary. It\'s not busy, you know? But I feel like it\'s a very good corner location. So we take the risk. We decided. But we\'re lucky. We got in there up to that. The Ritz Carlton opened, the other hotel across street from that, the St. Gregory [Hotel], and all these things started opening up. And the building right across from us used to be a parking lot, and now it\'s the high end building around the corner at New Hampshire, where you have Rasika. Rasika is on the first floor. Rasika didn\'t come in until probably three, four year, five years ago, Rasika. But before, it\'s an empty space, and all these things. But we were lucky.',
            location: {
                center: [-77.05363, 38.90716],
                zoom: 14.9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'west-end',
                    opacity: 0.25
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
            id: 'meiwahWestEnd',
            title: 'Meiwah West End: from 2000 - 2019',
            image: './images/Slide_15_01_Meiwah_WestEnd.jpg',
            // audio: './audio/DCOHC_Meiwah_Slide_14.mp3',
            description: '',
            location: {
                center: [-77.04773, 38.90547],
                zoom: 17.5,
                pitch: 160,
                bearing: -65.00
            },
            onChapterEnter: [
                {
                    layer: 'restaurantLocations',
                    opacity: .85
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
            id: 'gtc',
            title: 'General Tso\’s Chicken: An American Chinese Dish',
            image: './images/Slide_17_GeneralTso.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_17.mp3',
            description: '<span class="quote">In the United States, it doesn\'t matter how small a Chinese restaurant is or how big it is, you have to have General Tso\'s chicken. That\'s one of the main thing....You can\'t find it in China. Like the fortune cookie, you don\'t have in China... But people love it.</span>',
            transcript:'The Blair House is right across from the White House. The Blair House official name is the guest house of the president. The president of United States, like the Queen of England, the president of China, president of Korea, whatever come in, they don\'t stay in the hotel. The president invite them to stay in the Blair House. They have 14 bedrooms, very nice, beautiful there. So they have a lot of function that run by the State Department. So, the protocol office or the state department, so I\'ve been there many time for that. And one time, they asked us to cook, they called taste of China. So they have Ambassador from China here, and then the state department ... We cooked, and Ambassador said, "What did you cook today?" I said, "General Tso\'s chicken." And he looked at me and said, "What\'s that?" I said, even I speak in Chinese, he didn\'t know. He said, "What is General Tso’s?" I said, well, I said, "Ambassador, in this country, in the United States, it doesn\'t matter how small a Chinese restaurant is or how big it is, you have to have General Tso\'s chicken. That\'s one of the main thing." And it is not in China. You can\'t find in China. Like the fortune cookie, you don\'t have in China. So that\'s what we ... But people love it. So, the taste of people, going to the general public, that\'s more important. And of course, some people, they want something more fancy, you know? Beijing Duck is one of them. But in general, people like General Tso\'s chicken. So that ambassador asked me, "What\'s Meiwah mean?" I said, "Okay, Mei mean America, Wah mean China, American-Chinese." I said, "These two countries." I said that probably about six, seven years ago, I said, "Even these two countries so important to each other in the world that we cannot afford any kind of war, even economic war." Right now we have that. I said, "When we come disagreement, just the Chinese delegation and the American just come to Meiwah and have a meal, have a dinner, and drink Qingdao beer and solve the problem." And the ambassador said, "That\'s a good idea!',
            location: {
                center: [-77.04773, 38.90547],
                zoom: 17.5,
                pitch: 160,
                bearing: -65.00
            },
            onChapterEnter: [
                {
                    layer: 'restaurantLocations',
                    opacity: .85
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
            id: 'meiwahChecyChase',
            title: 'Meiwah in Chevy Chase',
            image: './images/Slide_18.JPG',
            audio: './audio/DCOHC_Meiwah_Slide_18.mp3',
            description: 'A few years after opening first Meiwah in West End, Larry opened his second Meiwah restaurant in Chevy Chase.',
            transcript:'We opened 2003. We opened DC in 2000, and then 2003, actually 2002, the owner of that building want Meiwah to open, and again, I went up there, and we are second floor, it\'s very hard to do. A lot of people in this industry, not just Chinese restaurant, that I know, they say, ‘Don\'t open restaurant on second floor. It\'s hard.’ But I said, ‘I opened in the basement, I\'m from the street level, why not second floor? Try it!’ [...] We\'re lucky. At that time, we got there, that\'s way before you all know about. Right across from us now is a high rise... I mean, a very big building, apartment building, and a garden, and the pub, and everything. Before, there was a parking lot for a depressed retail store called Hecht\'s. I don\'t know, you\'re probably too young to know Hecht\'s. Hecht\'s been gone for probably 16, 17 years ago. Yeah, they usually, Hecht\'s usually big like Macy\'s or something like that. But they got that across from us. It was usually just an empty lot, all parking for Hecht\'s company. So, when I got that space, it was a little bit scary too. First, we\'re on the second floor. Secondly, that area is not like it is today. Right now you go on Wisconsin [Avenue] near where our restaurant is, they have a lot of department store, a lot of big building. Those building, like Microsoft building across from us, also Whole Foods on there, all these, they\'re new, just only in the last probably five to 10 years.',
            location: {
                center: [-77.08843, 38.96207],
                zoom: 17.6,
                pitch: 60,
                bearing: -10.00
            },
            onChapterEnter: [
                {
                    layer: 'meiwah_CC',
                    opacity: .85
                }
            ],
            onChapterExit: [
                {
                    layer: 'meiwah_CC',
                    opacity: 0
                }
            ]
        },
        {
            id: 'meiwahChecyChase2',
            // title: 'Meiwah in Chevy Chase',
            image: './images/Slide_19.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_19.mp3',
            // description: 'A few years after opening first Meiwah in West End, Larry opened his second Meiwah restaurant in Chevy Chase.',
            transcript:'Even though Chevy Chase is only one block from the western area, that\'s the border of DC and Maryland, but the customers different. They mentally different. The people like suburb already, but the DC is more of a tourist and more of the people younger generation and people that lived there for long. So it\'s two different kinds of town. But again, they have people that work in DC. They eat lunch in DC at Meiwah and then at night they live in Chevy Chase but they start there and then they come to us for dinner. So we have both. That\'s I think that\'s the reason we can open the restaurant on second floor and still survive because we already have the client there. First they didn\'t know us. And quite frankly a lot of them, from my old restaurant still [inaudible] that\'s why I told you, I can see if you have pregnant, the son and now the son born, grew up, and now go the college and get married, and other see many generations because 30 years, a long time for many generation. You can see four generation come in together to eat. But this what is that you can build up a clientele that they feel very loyal to you. I have so many of this customer they\'ve been with me unless they move somewhere or some of them pass away but they still come to us. So we have a good time. And so that\'s why important is you have to repeat customer in this business. You can just say, okay, you come you come you don\'t say a one shot No. You have to take care of the customer today, they feel good when they come in they feel better when they leave',
            location: {
                center: [-77.08843, 38.96207],
                zoom: 17.6,
                pitch: 60,
                bearing: -10.00
            },
            onChapterEnter: [
                {
                    layer: 'meiwah_CC',
                    opacity: .85
                }
            ],
            onChapterExit: [
                {
                    layer: 'meiwah_CC',
                    opacity: 0
                }
            ]
        },
 	{
            id: 'epilogue',
            title: 'What does Washington, DC mean to you?',
            image: './images/Slide_20.jpg',
            audio: './audio/DCOHC_Meiwah_Slide_19.mp3',
            description: '<span class="quote">I lived in DC since 1988, so it\'s 31 years. So this is a place that I call home, because even in Vietnam, I left Vietnam when I was 20, so only 20 years, and then Tennessee, and then, so here is the place that I lived the longest […] the greater Washington DC, it\'s very dynamic, and trust me, it\'s like the melting pot...In this area, you speak with an accent, nobody pays attention to you. But in some other states, the people say, ‘who is this? Where\'s he come from?’ But here, it\'s okay. </span>',
            transcript: 'I lived in DC since 1988, so it\'s 31 years. So this is a place that I call home, because even in Vietnam, I left Vietnam when I was 20, so only 20 years, and then Tennessee, and then, so here is the place that I lived the longest, and that gave me a lot of... And besides, this is the capital of the country, and at least, we still the great country in the world, so it\'s very, very honored to live here. I feel very good to be in this area. And with the suburban Virginia and Maryland, I mean, this is very, they call the greater Washington DC, it\'s very dynamic, and trust me, it\'s like a melting pot, a lot of people from different ... In this area, you speak with an accent, nobody pay attention to you, you know? But in some other state, the people say, who is this? Where\'s he come from? But here, it\'s okay.',
	    location: {
                center: [-77.08843, 38.96207],
                zoom: 17.6,
                pitch: 60,
                bearing: -10.00
            },
            onChapterEnter: [
                {
                    layer: 'meiwah_CC',
                    opacity: .85
                }
            ],
            onChapterExit: [
                {
                    layer: 'meiwah_CC',
                    opacity: 0
                }
            ]
        }
    ]
};
