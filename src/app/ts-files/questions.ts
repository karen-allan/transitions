import {Question} from './question';

export const QUESTIONS: Question[] = [
    {question_num:0,
        question_string: 'How open is your family to discussing your end of life care?',
        responses: [
            {response_num: 0, response_string: 'My family will not let me talk about it freely.'},
            {response_num: 1, response_string: 'My family is somewhat open to hearing my concerns.'},
            {response_num: 2, response_string: 'My family is very open to listening to my concerns.'},
            {response_num: 3, response_string: 'I am not sure what my family thinks about this topic.'}
        ],
        selectedAnswer:0},

    {question_num:1,
        question_string: 'How important is it to maintain your independence and privacy?',
        responses: [
            {response_num: 0, response_string: 'It is extremely important that I maintain my independence.'},
            {response_num: 1, response_string: 'I am okay with being somewhat dependent on others.'},
            {response_num: 2, response_string: 'I have no support system so I must take care of myself.'},
            {response_num: 3, response_string: 'I am fine with giving up my independence as I need help.'}
        ],
        selectedAnswer:0},

   {question_num:2,
       question_string: 'If you have a choice of where to die, where would you like to be?',
       responses: [
            {response_num: 0, response_string: 'I would very much want to die at home.'},
            {response_num: 1, response_string: 'I want to die in a hospice or a care home.'},
            {response_num: 2, response_string: 'I want to die where I feel safe, in a hospital.'},
            {response_num: 3, response_string: 'I am not sure as it depends on the circumstances.'}
       ],
       selectedAnswer:0},

    {question_num:3,
        question_string: 'Who is your primary health care provider?',
        responses: [
            {response_num: 0, response_string: 'I have a family doctor who I can speak freely with.'},
            {response_num: 1, response_string: 'I have a family doctor who I do not communicate well with.'},
            {response_num: 2, response_string: 'I don\'t have a family doctor, so must visit walk-ins or emergency.'},
            {response_num: 3, response_string: 'I don\'t have a family doctor, but I get home care support.'},
        ],
        selectedAnswer:0},

    {question_num:4,
        question_string: 'What are your thoughts on receiving CPR?',
        responses: [
            {response_num: 0, response_string: 'I have a terminal illness and do not want CPR.'},
            {response_num: 1, response_string: 'I am still healthy and would want CPR performed on me.'},
            {response_num: 2, response_string: 'It would depend on my medical fsituation.'},
            {response_num: 3, response_string: 'I will leave it up to the medical team to decide.'}
        ],
        selectedAnswer:0},

    {question_num:5,
        question_string: 'How important to you is your religion or spirituality?',
        responses: [
            {response_num: 0, response_string: 'My faith and religious beliefs are very important to me.'},
            {response_num: 1, response_string: 'I don\'t practice any religion but I am spiritual in my own way.'},
            {response_num: 2, response_string: 'I am not religious or spiritual in any way and don\'t believe in God.'},
            {response_num: 3, response_string: 'I am open to the idea of a religious practice in my future.' +
                    ' age.'}
        ],
        selectedAnswer:0},

    {question_num:6,
        question_string: 'What medical interventions would you accept or reject?',
        responses: [
            {response_num: 0, response_string: 'I would accept any medical interventions in order to stay alive.'},
            {response_num: 1, response_string: 'I would want to try all alternatives, before accepting interventions.'},
            {response_num: 2, response_string: 'If I was terminally ill I would accept interventions for pain control.'},
            {response_num: 3, response_string: 'I wouldn\'t want interventions if I lost my level of existing comfort.'}
        ],
        selectedAnswer:0},

    {question_num:7,
        question_string: 'Would you choose aware with pain or pain-free but unaware?',
        responses: [
            {response_num: 0, response_string: 'I would rather put up with some pain and be awake and aware.'},
            {response_num: 1, response_string: 'I would rather be given sedating drugs, no matter the consequence.'},
            {response_num: 2, response_string: 'I would try other pain lessening treatments first.'},
            {response_num: 3, response_string: 'I would want to be still awake enough to talk with family.'}
        ],
        selectedAnswer:0},

    {question_num:8,
        question_string: 'Can you advocate for your own health concerns?',
        responses: [
            {response_num: 0, response_string: 'I am confident in my decision making and advocacy abilities.'},
            {response_num: 1, response_string: 'I am good at making decisions but my emotions might interfere.'},
            {response_num: 2, response_string: 'I am often unsure of my decisions so I might leave it up to doctors.'},
            {response_num: 3, response_string: 'I would let family advocate for me as I don\'t communicate well.'}
        ],
        selectedAnswer:0},

    {question_num:9,
        question_string: 'What level of interest do you find the subject of MAID?',
        responses: [
            {response_num: 0, response_string: 'I am religious so would likely would not support it.'},
            {response_num: 1, response_string: 'I have heard of it and am curious to know more about it.'},
            {response_num: 2, response_string: 'I would want MAID but my doctor is against it.'},
            {response_num: 3, response_string: 'If I was in pain and was terminal, I would definitely ask for MAID.'}
        ],
        selectedAnswer:0},

    {question_num:10,
        question_string: 'Have you set anyone in charge of your future financial decisions?',
        responses: [
            {response_num: 0, response_string: 'I have a Will with a Power of Attorney for my finances.'},
            {response_num: 1, response_string: 'I have a Will and have set up Rep-Section-7.'},
            {response_num: 2, response_string: 'I have a Will but have not set anyone up to represent me financially.'},
            {response_num: 3, response_string: 'I have no Will as yet and no one to manage my finances if I can not.'}
        ],
        selectedAnswer:0},

    {question_num:11,
        question_string: 'Would you accept treatments that may affect your looks?',
        responses: [
            {response_num: 0, response_string: 'I would not want any treatments that affect my looks.'},
            {response_num: 1, response_string: 'I care about looking attractive, but not at the cost of saving my life.'},
            {response_num: 2, response_string: 'It depends on the area of my body that they want to treat.'},
            {response_num: 3, response_string: 'I don\'t focus on my physical attractive-ness so I would be okay.'}
        ],
        selectedAnswer:0},

    {question_num:12,
        question_string: 'Is there a family member you trust to advocate for you?',
        responses: [
            {response_num: 0, response_string: 'I have one or more trusted family members who I could turn to.'},
            {response_num: 1, response_string: 'There is a lot of dissent in my family and I am not sure who to trust.'},
            {response_num: 2, response_string: 'I am alone and have no support system to advocate for me.'},
            {response_num: 3, response_string: 'I am not sure my family would want to take on the responsibility.'}
        ],
        selectedAnswer:0},

    {question_num:13,
        question_string: 'Would you agree to medical interventions if life saving?',
        responses: [
            {response_num: 0, response_string: 'I wouldn\'t want any medical interventions if I was mentally unfit.'},
            {response_num: 1, response_string: 'It is against my religion to receive medical interventions.'},
            {response_num: 2, response_string: 'I would select a trial period for life prolonging interventions.'},
            {response_num: 3, response_string: 'I am open to all medical interventions if I can be kept alive.'}
        ],
        selectedAnswer:0},

    {question_num:14,
        question_string: 'How much would you want to know about a diagnosis?',
        responses: [
            {response_num: 0, response_string: 'I would want to know absolutely everything, no matter how dire.'},
            {response_num: 1, response_string: 'I would let my family receive all information at their discretion'},
            {response_num: 2, response_string: 'I rely on family to translate to me as I do not understand English.'},
            {response_num: 3, response_string: 'It would depend on the the diagnosis, if terminal or curable.'}
        ],
        selectedAnswer:0},

    {question_num:15,
        question_string: 'Do you keep your will, life insurance etc. securely stored?',
        responses: [
            {response_num: 0, response_string: 'I have a safe in my home where all these papers are kept.'},
            {response_num: 1, response_string: 'I haven\'t compiled these papers, but my doctor knows my wishes.'},
            {response_num: 2, response_string: 'I have given copies of all documents to my trusted advocates.'},
            {response_num: 3, response_string: 'I am not done so as I am overwhelmed with this task.'}
        ],
        selectedAnswer:0},

    {question_num:16,
        question_string: 'Do you believe that you have fulfilled your life purpose?',
        responses: [
            {response_num: 0, response_string: 'I think I have absolutely fulfilled my purpose.'},
            {response_num: 1, response_string: 'I am still unsure what my life purpose is and am still looking.'},
            {response_num: 2, response_string: 'I do not believe that we have a life purpose, I am more of a nihilist.'},
            {response_num: 3, response_string: 'I feel like I failed to find any purpose to my life.'}
        ],
        selectedAnswer:0},

    {question_num:17,
        question_string: 'What would make your life not worth living?',
        responses: [
            {response_num: 0, response_string: 'No longer being able to carry out my day to day activities.'},
            {response_num: 1, response_string: 'Experiencing pain much of the time, even with drugs.'},
            {response_num: 2, response_string: 'Losing my intellectual capabilities, being forgetful and confused.'},
            {response_num: 3, response_string: 'Becoming too weak to mentally and physically to take on tasks.'}
        ],
        selectedAnswer:0},

    {question_num:18,
        question_string: 'What would you like done with your body after you die?',
        responses: [
            {response_num: 0, response_string: 'I want to be cremated and my ashes scattered as noted in my will.'},
            {response_num: 1, response_string: 'I want to be buried in my pre-purchased plot.'},
            {response_num: 2, response_string: 'I care about the environment so want to have a green burial.'},
            {response_num: 3, response_string: 'I don\'t, but am open to finding out more about the alternatives.'}
        ],
        selectedAnswer:0},

    {question_num:19,
        question_string: 'Do you know who you would welcome at your bedside?',
        responses: [
            {response_num: 0, response_string: 'All family and friends are welcome as long as I am respected.'},
            {response_num: 1, response_string: 'I would want the adults in my family there, not the grandchildren.'},
            {response_num: 2, response_string: 'I only want my spouse to be with me at my bedside.'},
            {response_num: 3, response_string: 'I only want my priest, rabbi or religious mentor at my bedside.'}
        ],
        selectedAnswer:0},

    {question_num:20,
        question_string: 'What are your thoughts about receiving life support measures?',
        responses: [
            {response_num: 0, response_string: 'I am opposed to suicide so I must wait to die a natural death.'},
            {response_num: 1, response_string: 'I would request no life support and only receive pain medication.'},
            {response_num: 2, response_string: 'I would want my doctor to approve of and administer MAID.'},
            {response_num: 3, response_string: 'I would stay on life support until my family could say goodbye.'}
        ],
        selectedAnswer: 0},

    {question_num:21,
        question_string: 'Who are the most important and trusted people in your life?',
        responses: [
            {response_num: 0, response_string: 'My immediate family: my children, spouse, grandchildren.'},
            {response_num: 1, response_string: 'My group of friends (church group, book club, childhood friends etc.'},
            {response_num: 2, response_string: 'One significant person only (spouse, sibling etc).'},
            {response_num: 3, response_string: 'I have no trusted people and must rely on the health care team.'}
        ],
        selectedAnswer: 0},

    {question_num:22,
        question_string: 'Would you want information about a terminal diagnosis?',
        responses: [
            {response_num: 0, response_string: 'I want to know absolutely everything, including treatments etc.'},
            {response_num: 1, response_string: 'I want my family to know the details while I focus on time left.'},
            {response_num: 2, response_string: 'I would not want to know anything about my diagnosis.'},
            {response_num: 3, response_string: 'I want only my spouse or significant other to know the details.'}
        ],
        selectedAnswer: 0},

    {question_num:23,
        question_string: 'Do you worry that your family will squabble about your Will?',
        responses: [
            {response_num: 0, response_string: 'I have written down specific instructions to eliminate in-fighting.'},
            {response_num: 1, response_string: 'I don\'t have much left to leave them so I am not worried about this.'},
            {response_num: 2, response_string: 'I have discussed this with family, they will be respectful.'},
            {response_num: 3, response_string: 'I think it is inevitable that some will feel mad but I\'m not worried.'},
        ],
        selectedAnswer: 0},

    {question_num:24,
        question_string: 'Are there any photos, music, scents you would like in your room?',
        responses: [
            {response_num: 0, response_string: 'I have some aromatherapy scents that I love.'},
            {response_num: 1, response_string: 'I would love my favorite music to be played or my family to sing.'},
            {response_num: 2, response_string: 'I would want specific pictures, prints and photos surrounding me.'},
            {response_num: 3, response_string: 'If I can tolerate it, I have always loved to have massages.'},
        ],
        selectedAnswer: 0},

    {question_num:25,
        question_string: 'What do you feel about being on a ventilator?',
        responses: [
            {response_num: 0, response_string: 'If my condition was curable I would be fine with one.'},
            {response_num: 1, response_string: 'If my condition was incurable I would not want to be put on one.'},
            {response_num: 2, response_string: 'If terminal, I would accept this but with conditions made by me.'},
            {response_num: 3, response_string: 'I don\'t know how I would respond to this situation.'}
        ],
        selectedAnswer: 0},

    {question_num:26,
        question_string: 'Do you feel the need to make peace with anyone in your life?',
        responses: [
            {response_num: 0, response_string: 'I have made my peace with past relatives and friends and am content.'},
            {response_num: 1, response_string: 'I don\'t want to think about my past mistakes and indiscretions.'},
            {response_num: 2, response_string: 'I would like to talk with some people in my past and ask for forgiveness.'},
            {response_num: 3, response_string: 'I don\'t owe anyone an apology but would like some spiritual comfort.'}
        ],
        selectedAnswer: 0},

    {question_num:27,
        question_string: 'Is there anyone you would not want at your bedside while dying?',
        responses: [
            {response_num: 0, response_string: 'I have written down a list of those who I do not want at my bedside.'},
            {response_num: 1, response_string: 'I welcome family but reserve the right to ban anyone at any time.'},
            {response_num: 2, response_string: 'I would not want the very young grandchildren to attend.'},
            {response_num: 3, response_string: 'I don\'t really care who ends up near me if I am busy dying.'},
        ],
        selectedAnswer:0},

    {question_num:28,
        question_string: 'How do you feel when thinking about your own death?',
        responses: [
            {response_num: 0, response_string: 'I have had a long life and am accepting of my own impending death.'},
            {response_num: 1, response_string: 'I am okay with my own death as long as I go with dignity.'},
            {response_num: 2, response_string: 'I am very uncomfortable about the idea of family seeing me die.'},
            {response_num: 3, response_string: 'I am terrified of dying and worry about it all the time.'},
        ],
        selectedAnswer:0},

    {question_num:29,
        question_string: 'What kind of a celebration would you like to honor you?',
        responses: [
            {response_num: 0, response_string: 'I would like a proper funeral, with a church service and reception.'},
            {response_num: 1, response_string: 'I would let my family decide as I am beyond worrying about it.'},
            {response_num: 2, response_string: 'I would not want any kind of big celebration.'},
            {response_num: 3, response_string: 'I want to arrange a celebration of my life while I am still alive.'},
        ],
        selectedAnswer:0},

   /* {question_num:30,
        question_string: 'Do you worry that your family will squabble about the money and/or possessions that you leave in your Will?',
        responses: [

        ],
        selectedAnswer:0},*/
];