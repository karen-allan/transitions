import {EarthExcessPsych, MetalExcessPsych, WaterExcessPsych, WoodExcessPsych, FireExcessPsych}
    from "./element-psych-excesses";

import {EarthDeficientPsych, MetalDeficientPsych, WaterDeficientPsych, WoodDeficientPsych, FireDeficientPsych}
    from "./element-psych-deficiencies";

import {EarthBalancedPsych, MetalBalancedPsych, WaterBalancedPsych, WoodBalancedPsych, FireBalancedPsych}
    from "./element-psych-balances";

import {EarthDeficientPhysical, FireDeficientPhysical, MetalDeficientPhysical, WaterDeficientPhysical, WoodDeficientPhysical}
    from "./element-physical-deficiencies";

import {EarthExcessPhysical, FireExcessPhysical, MetalExcessPhysical, WaterExcessPhysical, WoodExcessPhysical}
    from "./element-physical-excesses";

import {Element} from'./element';



export const ELEMENTS: Element[] = [
    {
        id: 1,
        name: 'Water',
        start_hour:15,
        end_hour:19,
        time_range_yang_1:'3:00 pm to 5:00 pm (Bladder)',
        time_range_yin_1:'5:00 pm to 7:00 pm (Kidney)',

        verb:'I dream',
        overall:'yin',
        season:'winter',

        meridians: 'Kidney (Yin) and Bladder (Yang)',

        icon:'assets/images/energyMedicine/elements/water/waterElement.png',
        bkgrd_image:'assets/images/energyMedicine/elements/water/waterElementLarge.jpg',
        nl_pic:'assets/images/energyMedicine/elements/water/nlWater.jpg',
        nv_pic:'assets/images/energyMedicine/elements/water/nvWater.jpg',

        summary_yin:' is gentle and yielding when it flows over rocks in a stream. It ' +
            'is deep, cold, still and mysterious like the bottom of a well.',
        summary_yang:' is dynamic like wild rapids and overflowing waterfalls. With pressure can create dangerous tsunamis and floods.',

        power_animals:'the Water Turtle (signifying longevity and strength) and the Deer (signifying sexual vigor and vitality).',
        attributes:'our genetic background, reproduction, instinct, willpower, vision and dreams.',
        challenge:'If we are honest with our emotions (METAL) we are free to be creative (WATER).',
        governs:'Bladder, Kidneys, bones, marrow, brain, fluids and teeth.',
        archetypes:'The Philosopher, The Thinker, The Prince or Princess',

        direction:'Water\'s direction is north.',
        color:'blue of all shades to turquoise',
        weather:'cold',
        taste:'salty',
        sensory_organ:'ears',
        aspect:'introverted',
        time_day:'night',
        focus:'in the past',
        body_type:'Do you have limbs that are slim, with a lithe physique. Do you tend to walk slowly, stopping often to observe life',
        stress_emotion:'When you are stressed do you tend to isolate, internalize, withdraw and let fear and paranoia make your decisions for you',

        positive_traits1:'Do new ideas come easily to you and do you trust your instructs and feel a sense of strength and power from this',
        negative_traits1:'Do you sometimes feel fearful and needy, leading to envy, vindictiveness, paranoia and jealousy',

        positive_traits2:'Are you a good listener, who hears the underlying context behind the words',
        negative_traits2:'Do you feel like you are often in survival mode, just barely treading water',

        positive_traits3:'Do you consider yourself to be a great conversationalist, who has no interest in small talk',
        negative_traits3:'Do you tend to go on and on about a subject you are enthused by',

        positive_traits4:'Are you highly intelligent, imaginative and deeply interested in many diverse subjects',
        negative_traits4:'When you are unhappy do you tend to focus on how others have let you down, increasing your resentment of them',

        vital_function:'Do you often have problems with your reproductive or urinary systems',
        arts:'Do you enjoy writing, painting, drawing, acting, sculpture, photography, french cooking or film making',
        occupations:'Do you work in finance, banking, accounting, investment, retail, real estate, travel or tourism',
        relationship:'Re relationships: When feeling balanced do you find that you are incredibly giving and generous but when unbalanced, you can overly depend  ' +
            'on your significant other and if in conflict you feel alone and you withdraw even more from them as well as the outside world',

        background_color_active:'background-color:#629deb',
        background_color_selected:'background-color:#465189',

        font_color_active:'color:#6d78b1',
        font_color_selected:'color:#6d78b1',

        heading_font_color:'color:#535f9c',
        copy_font_color:'color:#535f9c',

        excess_psych:WaterExcessPsych,
        deficient_psych:WaterDeficientPsych,
        balanced_psych:WaterBalancedPsych,
        excess_physio: WaterExcessPhysical,
        deficient_physio: WaterDeficientPhysical,
        treating_emotion:'If your unbalanced Water is letting your fear run wild, consider that Earth controls Water. Do ' +
            'Earth like activities to strengthen the edges of your foundation and stop the water (fear) from overflowing. Try practical, ' +
            'homey type activities such as cooking creative meals, crafting, knitting, sewing - making your home cosy. Don\'t self isolate. ' +
            'Understand that as a Water, while you need a lot of alone time to recoup and create, you can get bogged down, ' +
            'stop caring for yourself and avoid commitments which leads to low confidence and even depression. For balanced Waters ' +
            'walk for exercise and/or try Tai Chi or Qigong. Try yoga, Essentrics and any kind of stretching routine. Try fun activities ' +
            'like skiing, surfing or swimming',

        nl_overview:'The two meridians that belong to Water Element are Kidney and Bladder. They convey the emotions of fear of self ' +
            '(Yin Kidney) and fear of the world (Yang Bladder). When you are feeling fearful try giving your Water Neurolymphatics a deep massage',
        nl_points:'Your Kidney Neurolymphatics are where your Kidneys lie. Reach back with your hands, thumbs upwards. Rub deeply up and down ' +
            'this Kidney line. Bladder NLs are found just above your pubic area, give these a deep massage as well',

        nv_points:'Water\'s Neurovascular points are found on both sides at the back of the head, directly behind the center of the eyes, about ' +
            '3 inches apart.',




    },

    {
        id: 2,
        name: 'Wood',
        start_hour:23,
        end_hour:3,
        time_range_yang_1:'11:00 pm to 1:00 am (Gallbladder)',
        time_range_yin_1:'1:00 am to 3:00 am (Liver)',

        verb:'I think',
        overall:'yang',
        season:'spring',

        meridians: 'Liver (Yin) and Gallbladder (Yang)',

        icon:'assets/images/energyMedicine/elements/wood/woodElement.png',
        bkgrd_image:'assets/images/energyMedicine/elements/wood/woodElementLarge.jpg',
        nl_pic:'assets/images/energyMedicine/elements/wood/nlWood.jpg',
        nv_pic:'assets/images/energyMedicine/elements/wood/nvWood.jpg',

        summary_yin:' emerges from the Earth as a new sapling struggling against the elements. It is YIN WOOD is ' +
            'a fallen tree that creates a bridge across a river, while sending down roots to replenish itself.',
        summary_yang:' is powerful and ancestral like an old growth tree in an ancient forest. It forcefully ' +
            'reaches towards heaven while also powerfully spreading it\'s roots into the Earth.',



        power_animals:'the Eastern mythical Dragon. Unlike western dragons, these dragons bring joy and good luck.',
        attributes:'our intelligence, potential for new skills and growth.',
        challenge:'If we have creative ideas (Water) they can be put into plans of action (Wood).',
        governs:'Gallbladder, Liver, eyes, tendons, muscles, ligaments, nails.',
        archetypes:'The Pioneer, The Visionary, The Warrior',

        direction:'Wood\'s direction is east.',
        weather:'windy',
        color:'green of all shades to brown',
        taste:'sour',
        sensory_organ:'eyes',
        aspect:'extraverted',
        time_day:'dawn',
        focus:'on the future',
        body_type:'Are you sturdily built with a square shaped physique',
        stress_emotion: 'When you are stressed do you boil up with frustration taking it out on yourself or others',

        positive_traits1:'Do you put your great ideas into motion, creating plans and strategies to make them a reality',
        negative_traits1:'Do you lose perspective and become confused when trying to sort out a problem',

        positive_traits2:'Are you focused and driven to find solutions through active problem solving and research',
        negative_traits2:'Do you feel like you are often angry, impulsively lashing out at others',

        positive_traits3:'Do you hate to see injustices done to others. Do you consider yourself to be a champion of the downtrodden',
        negative_traits3:'Do you have to squelch your impatience, exasperation and irritation when dealing with wishy washy or unmotivated people',

        positive_traits4:'Are you a highly productive do-er able to take on leadership roles without hesitation',
        negative_traits4:'Do you take pride in the fact that you are called a workaholic, seeing that as a sign of your devotion and tenacity, ' +
            'often disregarding the need to take time off and just chill with friends',

        vital_function:'Do you often have problems with your nervous system or sex drive',
        arts:'Do you engage in writing poetry, writing novels or essays, doing martial arts or taking part in many athletic endeavors or sports',
        occupations:'Do you work in management, politics, lobbying, the military, law enforcement, administration, consulting, education, science,' +
            'research and development, coaching, training, in the judicial system or as any kind of a critic',
        relationship:'Re relationships: When feeling balanced are you a dependable knight in shining armour to your significant other but ' +
            'when unbalanced, such as when working too many long hours, you can retreat and forget to consider their feelings',

        background_color_selected:'background-color:#305617',
        background_color_active:'background-color:#91c271',

        font_color_selected:'color:#305617',
        font_color_active:'color:#91c271',

        heading_font_color:'color:#546e43',
        copy_font_color:'color:#546e43',

        excess_psych:WoodExcessPsych,
        deficient_psych:WoodDeficientPsych,
        balanced_psych:WoodBalancedPsych,
        excess_physio:WoodExcessPhysical,
        deficient_physio: WoodDeficientPhysical,
        treating_emotion:'If your Wood is unbalanced and you are constantly angry or judgementl, consider that Metal controls Wood. Engaging ' +
            'in refined activities such as playing or listening to music, learning an instrument, designing your home, clothing or garden or ' +
            'working on your appearance, ie updating your look. Skip the competitive sports and try more solitary pursuits such as ' +
            'hiking, skiing or swimming. If you feel balanced in your Wood try yoga if you can handle the slow pace, ' +
            'otherwise try brisk walking, weight training, martial arts and dance',

        nl_overview:'The two meridians that belong to Wood Element are Liver and Gallbladder. They tend to flare up in people who may' +
            'either stifle their anger, feel angry at themselves (Liver) or are perpetually angry at everyone else (Gallbladder). ' +
            'When you are feeling angry or frustrated, try rubbing your Wood Neurolymphatics deeply.',
        nl_points:'Your Liver Neurolymphatics are found just under your right breast, where you physical organ lies. Rub deeply ' +
            'along the arc, from outer side to sternum. Rub along your sternum to massage your Gallbladder points. As well an easy ' +
            'area to get to is where your fingers lay on your thighs when you are at attention.',


        nv_points:'Woods\'s Neurovascular points are found on both sides at the edge of your outer eye corners ' +
            'at the indentation.',




    },

    {
        id: 3,
        name: 'Fire',
        start_hour:11,
        end_hour:15,
        start_hour_2:19,
        end_hour_2:23,
        time_range_yang_1:'11:00 am to 1:00 pm (Heart)',
        time_range_yin_1:'1:00 pm to 3:00 pm (Small Intestine)',
        time_range_yang_2:'7:00 pm to 9:00 pm (Pericardium)',
        time_range_yin_2:'9:00 pm to 11:00 am (Triple Warmer)',

        verb:'I know',
        overall:'yang',
        season:'summer',

        meridians: 'Heart (Yin), Pericardium (Yin), Small Intestine (Yang) and Triple Warmer (Yang)',

        nl_pic:'assets/images/energyMedicine/elements/fire/nlFire.jpg',
        nv_pic:'assets/images/energyMedicine/elements/fire/nvFire.jpg',
        icon:'assets/images/energyMedicine/elements/fire/fireElement.png',
        bkgrd_image:'assets/images/energyMedicine/elements/fire/fireElementLarge.jpg',

        summary_yin:' is the fluid layer of liquid iron and nickel living in the Earth\'s outer core. It is ' +
            'the deeply dark embers going cold in a fireplace.',

        summary_yang:' is the flickering sparks of a newly lighted crackling fire. It is the volcanic lava, ' +
            'tephra, and steam that erupts on to the Earth\'s surface.',

        power_animals:'the mythical Phoenix, the Hummingbird, Grosbeak and other red-throated birds.',
        attributes:'our spirit, consciousness, wisdom, intuition and ability to communicate effectively.',
        challenge:'If we act on our dreams (Wood) we can be free to feel uplifted and joyful (Fire).',
        governs:'Heart, Small Intestine, blood circulation, veins, arteries and blood vessels.',
        archetypes:'The Wizard, The Joker, The Party Animal',

        direction:'Fire\'s direction is south.',
        weather:'hot',
        color:'red of all shades to purple',
        taste:'bitter',
        sensory_organ:'tongue',
        aspect:'extroverted',
        time_day:'daytime',
        focus:'in the now',
        body_type:'Are you slim with good posture, with a fast metabolism',
        stress_emotion:'When you are stressed do you lose faith in yourself and others, leading to a lack of enthusiasm for life',

        positive_traits1:'Do you consider yourself high spirited, with great enthusiasm for - and purpose to - your life',
        negative_traits1:'Do you panic that you have to always be \'on\', and never say no so you forget to take care of your physical and emotional needs',

        positive_traits2:'Do you have great intuition, knowing the perfect time and place to make or avoid a move',
        negative_traits2:'Do you lose your ability to reach out to others, becoming insensitive and uncaring, even cruel',

        positive_traits3:'Do you have a ton of \'best friends\' and enjoy parties, dressing fashionably, entertaining and living in the moment',
        negative_traits3:'Do these friends often express hurt feelings and think you are fickle and shallow when you don\'t ' +
            'like to listen to their problems (which you find boring)',

        positive_traits4:'Do you love the spotlight, live for fun, rarely feel embarrassed about your sometimes over the top enthusiasm in meeting new people and having new adventures',
        negative_traits4:'Do you sometimes disregard other\'s personal space, laugh inappropriately when nervous or just start talking ' +
            'when the silence feels unbearable',

        vital_function:'Do you often have problems with your blood or endocrine system (hormones)',
        arts:'Do you enjoy dancing, singing, acting, the opera, assisting in productions or being on the main stage',
        occupations:'Are you a teacher, spiritual leader, philospher, comedian, healer, midwife, performing artist - are you in show business, ' +
            'the theatre, in education or medicine',
        relationship:'Re relationships: When you feel balanced you are the star of the party and your significant other basks in your passion ' +
            'and enthusiasm for people and life but when unbalanced you can become impatient and bored with the same old same old, including your significant other',

        background_color_selected:'background-color:#a61c1b',
        background_color_active:'background-color:#d59392',

        font_color_selected:'color:#a61c1b',
        font_color_active:'color:#d59392',

        heading_font_color:'color:#a61c1b',
        copy_font_color:'color:#a61c1b',

        excess_psych:FireExcessPsych,
        deficient_psych:FireDeficientPsych,
        balanced_psych:FireBalancedPsych,
        excess_physio: FireExcessPhysical,
        deficient_physio: FireDeficientPhysical ,
        treating_emotion:'If your Fire is unbalanced, and you are feeling impatient and panic-ridden, consider that ' +
            'Water controls Fire. Temper your moods with meditations, journaling, drawing, painting, photography, sculpting or any other ' +
            'figurative arts endeavor. If you feel your Fire is in balance try yoga, slow dancing, swimming and Qigong',

        nl_overview:'There are 4 meridians that belong to the Fire Element. A Fire out of balance can be nervous, jittery, panicky,' +
            'forgetful and unreliable like fire that ignites and thens quickly goes out. Try massaging these areas if you are feeling any ' +
            'of these emotions or are suffering from hot flashes. ',
        nl_points:'Small Intestine meridian runs all along the bottom of your ribs, in an upside U shape. Rub all along your inner and front' +
            'thighs to get at Pericardium and Small Intestine meridians. Rubbing directly behind your breasts at nipple level can help ' +
            'with and overheated Heart meridian.',


        nv_points:'Fires\'s Neurovascular points are found at the back of head about 3 inches apart, directly in line ' +
            'with the eyebrows.',




    },

    {
        id: 4,
        name: 'Earth',
        start_hour:7,
        end_hour:11,
        time_range_yang_1:'7:00 am to 9:00 am (Stomach)',
        time_range_yin_1:'9:00 am to 11:00 am (Spleen)',

        verb:'I do',
        overall:'yin-yang',
        season:'between spring-summer and summer-fall.',

        meridians: 'Spleen (Yin) and Stomach (Yang)',

        nl_pic:'assets/images/energyMedicine/elements/earth/nlEarth.jpg',
        nv_pic:'assets/images/energyMedicine/elements/earth/nvEarth.jpg',
        icon:'assets/images/energyMedicine/elements/earth/earthElement.png',
        bkgrd_image:'assets/images/energyMedicine/elements/earth/earthElementLarge.jpg',

        summary_yin:' supplies the nutrients to help newly planted seeds grow. It' +
            ' grows the grass that invites you to lay down upon it and rest.',
        summary_yang:' moves itself ever upwards to create mountains. It can tear itself apart creating deadly earthquakes.',

        power_animals:'the Pheasant, Chicken, Turkey and other domestic farm animals.',
        attributes:'our authenticity, our solidity, our adaptability and practicality.',
        challenge:'If we allow ourselves to live the spirited life we are meant to have (Fire) we then feel and supported (Earth).',
        governs:'Spleen, Pancreas, Stomach and blood.',
        archetypes:'The Mother, The Healer, The Teacher',

        direction:'Earth\'s direction is center.',
        weather:'rainy or misty',
        color:'orange, gold and yellow',
        taste:'sweet',
        sensory_organ:'mouth',
        aspect:'both inner and outer directed',
        time_day:'after breakfast, before dinner, before bed',
        focus:'on the cyclic nature of time',
        body_type:'Would you say you are carrying extra weight or have a motherly physique',
        stress_emotion: 'When you are stressed do you worry excessively about your own actions or more globally about the state of the world.',

        positive_traits1:'Are you at ease with yourself and with life in general. Do you usually feel confident and supported in your life',
        negative_traits1:'Do you lose your ability to trust your decisions, do you feel ungrounded and often unsatisfied with your life',

        positive_traits2:'Are you practical, happy with the here and now, accepting of others, full of common sense, present and receptive',
        negative_traits2:'Do you often feel out of place, abandoned, self-conscious, not quite right and illogically responsible for other\'s joy',

        positive_traits3:'Do you love to serve others by being a good listener, comforting others while remaining non-judgemental and accepting',
        negative_traits3:'Do you give and give often to the point of self sacrifice and end up ultimately resenting any seeming lack of appreciation',

        positive_traits4:'Are you a dependable and altrustic worker for the environment, the peace movement, BLM or other causes',
        negative_traits4:'Do you disregard and dismiss your own many talents, failing to charge for your services and lacking the assertiveness' +
            ' needed to move to the next level',

        vital_function:'Do you often have problems with your Stomach, Spleen, Pancreas or digestion in general',
        arts:'Do you enjoy artisan crafts such as weaving, knitting, making clothes, building furniture, gardening, landscaping or ' +
            'anything to do with the culinary arts',
        occupations:'Are you an engineer, architect, farmer, horticulturalist, construction worker, carpenter, cabinet maker,' +
            ' AirBnB host, counselor, gardener, chef, crafts-person or are you in the hospitality industry',
        relationship:'Re relationships: When you feel balanced you create a serene and calm life for you and your significant other but ' +
            'when unbalanced, you often end up in abusive relationships that destroy your self esteem',

        background_color_selected:'background-color:#91886d',
        background_color_active:'background-color:#ddba51',

        font_color_selected:'color:#5c4911',
        font_color_active:'color:#ddba51',

        heading_font_color:'color:#796322',
        copy_font_color:'color:#796322',

        excess_psych:EarthExcessPsych,
        deficient_psych:EarthDeficientPsych,
        balanced_psych:EarthBalancedPsych,
        excess_physio: EarthExcessPhysical,
        deficient_physio: EarthDeficientPhysical,
        treating_emotion:'If you feel you are an unbalanced Earth - feeling overly anxious and worried, recall that ' +
            'Wood controls Earth. It literally stabalizes the ground, keeping it from eroding. Get out and walk in nature ' +
            'if you can, get even more grounded with bare feet in the grass. As a balanced Earth ' +
            'try learning a new skill such as dance lessons, yoga, or music lessons.',

        nl_overview:'The two meridians that belong to the Earth Element are Spleen and Stomach. Those of us who have a lot' +
            '        of Earth element in us, know that we can be over-caring, over-helpful and ... eventually over-resentful' +
            '        if not balanced. This protocol is easy and fast to learn.',

        nl_points:' Simply rub your Stomach Neurolymphatic' +
            '        points that are located directly under your breasts on your left. (Liver is on the right and could' +
            '        certainly enjoy a rub as well!) Spleen NeuroLymphatics are found just under these points on both sides.',



        nv_points:'Earths\'s Neurovascular points are found on both sides of the face at the bottom ' +
            'of the cheekbones.',





    },

    {
        id: 5,
        name: 'Metal',
        start_hour:3,
        end_hour:7,
        time_range_yang_1:'3:00 am to 5:00 am (Lung)',
        time_range_yin_1:'5:00 am to 7:00 am (Large Intestine)',

        verb:'I feel',
        overall:'yin',
        season:'fall',

        meridians: 'Lung (Yin) and Large Intestine (Yang)',

        icon:'assets/images/energyMedicine/elements/metal/metalElement.png',
        bkgrd_image:'assets/images/energyMedicine/elements/metal/metalElementLarge.jpg',
        nl_pic:'assets/images/energyMedicine/elements/metal/nlMetal.jpg',
        nv_pic:'assets/images/energyMedicine/elements/metal/nvMetal.jpg',

        summary_yin:' is like the intricate and magnificent inner workings of a grandfather clock. ' +
            'It is a tool that is cold and lifeless when sitting on a shelf.',
        summary_yang:' is the tool that when used creates magnificent and powerful works of art. It' +
            'can produce great buildings and structures like the skyscrapers that tower over the city.',

        power_animals:'the White Tiger. Metal represents all felines, both wild jungle cats ' +
            'and playful domestic kittens.',
        attributes:'our refinement and love of aesthetics and our powers of alchemy, ingenuity and creativity. ' ,
        challenge:'MINE- CHECK If we can recognize our need for connection (Earth) we can put love into our creations (Metal).',
        governs:'Lungs, Large Intestine, skin and hair.',
        archetypes:'The Queen or King, The Yogi, The Alchemist',
        direction:'Metal\'s direction is west.',
        weather:'dry',
        color:'white, silver and blue-silver',
        taste:'spicy',
        sensory_organ:'nose',
        aspect:'introverted',
        time_day:'late afternoon, evening',
        focus:'in the past or future',
        body_type:'Are you thin, graceful and elegant in your carriage. Do you walk slowly and smoothy',
        stress_emotion:'When you are stressed is do you feel personal grief as in depression or existential angst about the state of the world',

        positive_traits1: 'Are you able to easily look inward, explore your feelings and accept them with complete honesty',
        negative_traits1:  'Have you lost your ability to understand and accept your own feelings',

        positive_traits2:  'Are you honest with yourself and with others and do you easily empathize with how others feel',
        negative_traits2: 'Do you allow your grief to turn into deep sorrow and despondency to the point where you feel nothing at all',

        positive_traits3: 'Are you charming, refined, calm, cool, witty, composed, sophisticated and at your best with small groups of friends',
        negative_traits3:  'Do you come off as snobby, entitled, indifferent, cold - even void of feelings when you feel that ' +
            'someone is beneath you',

        positive_traits4:  'Do you have an uncluttered home, needing few possessions as your goal is to live simply and stoicly ' +
            ' in order to attain higher spiritual purity or perfection',
        negative_traits4: 'Do you avoid emotional people as it\s difficult for you to understand them. Do you avoid drama and ' +
            'confrontation and simply remove these what you consider difficult people from your life without a moment\'s hesitation',

        vital_function:'Do you have issues with breathing, with constipation or diarrhea or do you suffer from skin rashes or excema',
        arts: 'Do you enjoy music, zen design, spiritual quests, cosmetology, reading philosophy, math or physics that entails abstract thought',
        occupations: 'Are you a fashion designer, publicity agent, ad executive, auto designer, interior decorator, landscaper,' +
            'antique collector, flower arranger, cosmetologist, perfumist, tailer, furniture designer, or are you in high fashion sales',
        relationship:'Re relationships: As a balanced Metal you will likely enjoy doing projects around the house, making beautiful ' +
            'food and art for your significant other but unbalanced you will generally be lost in your own world with little thought for them',

        background_color_selected:'background-color:#899097',
        background_color_active:'background-color:#d4d7d9',

        font_color_selected:'color:#494e53',
        font_color_active:'color:#a0a4a7',

        heading_font_color:'color:#6d7176',
        copy_font_color:'color:#6d7176',

        excess_psych:MetalExcessPsych,
        deficient_psych:MetalDeficientPsych,
        balanced_psych:MetalBalancedPsych,
        excess_physio: MetalExcessPhysical,
        deficient_physio: MetalDeficientPhysical,
        treating_emotion:'If you feel as a Metal, that you are feeling unbalanced, consider that Fire controls Metal. Try doing more Fire-y ' +
            'activities like getting a pet to love, watch funny and romantic shows, get out in nature as much as possible ' +
            'and try to connect with old friends. Try aerobics for exercise to get your blood flowing',

        nl_overview:'The two meridians that belong to Metal element are Lung and Large Intestine. Being part of the Autumn element means ' +
            'that many Metal types suffer from an unrelenting sadness or grief and an awareness of the end of things. If you are suffering ' +
            'from unexplainable sadness try massaging your Lung and Large Intestine points to help them expell better.',
        nl_points:'Your Lung meridian Neurolymphatics run along your sternum or breast-bone. If I feel like I am catching a cold with a cough ' +
            'I vigorously rub this area. Large Intestine meridian NLs are at the outside of your thighs. Rub deeply and then push the energy off your legs,' +
            'down your feet and off your toes.',


        nv_points:'Metal\'s Neurovascular points are found on the very top of the head in the center.',




    },
]
