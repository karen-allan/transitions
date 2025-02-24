import {Question} from './question';

export const QUESTIONS: Question[] = [
    {question_num:1,
        question_string: 'How open are your family members to discussing your end of life care wishes or concerns?',
        responses: [
            {response_num: 0, response_string: 'My family will not let me talk about it freely.'},
            {response_num: 1, response_string: 'My family is somewhat open to hearing about some of my concerns.'},
            {response_num: 2, response_string: 'My family is very open to listening to my concerns and wishes.'},
            {response_num: 3, response_string: 'I am not sure what my family thinks about this topic.'}
        ],
        selectedAnswer:0},

    {question_num:2,
        question_string: 'How important is it to maintain your independence and privacy?',
        responses: [
            {response_num: 0, response_string: 'It is extremely important that I maintain my independence as much as possible.'},
            {response_num: 1, response_string: 'I am okay with being somewhat dependent on others.'},
            {response_num: 2, response_string: 'I have no support system so I must take care of myself whether I want to or not.'},
            {response_num: 3, response_string: 'I am fine with giving up my independence as I need help.'}
        ],
        selectedAnswer:0},

   {question_num:3,
       question_string: 'If you have a choice of where to die, where would you be most comfortable?',
       responses: [
            {response_num: 0, response_string: 'I want to die at home.'},
            {response_num: 1, response_string: 'I want to die in a hospice or a care home.'},
            {response_num: 2, response_string: 'I want to die in a hospital.'},
            {response_num: 3, response_string: 'I am not sure as it depends on the circumstances.'}
       ],
       selectedAnswer:0},

    {question_num:4,
        question_string: 'Choose your situation as it relates to having a primary health care provider.',
        responses: [
            {response_num: 0, response_string: 'I have a family doctor who I can speak freely with.'},
            {response_num: 1, response_string: 'I have a family doctor who I do not communicate well with.'},
            {response_num: 2, response_string: 'I don\'t have a family doctor, so must visit walk-ins or emergency when I need help.'},
            {response_num: 3, response_string: 'I do not have a family doctor, but I get support from home care nurses.' +
                    ' practitioners.'}
        ],
        selectedAnswer:0},

    {question_num:5,
        question_string: 'What are your thoughts on receiving CPR?',
        responses: [
            {response_num: 0, response_string: 'I have a terminal illness and do not want CPR performed on me.'},
            {response_num: 1, response_string: 'I am still healthy and would want CPR performed on me.'},
            {response_num: 2, response_string: 'It would depend on my situation.'},
            {response_num: 3, response_string: 'I will leave it up to the medical team to decide.'}
        ],
        selectedAnswer:0},

    {question_num:6,
        question_string: 'How important to you is your religion or spirituality?',
        responses: [
            {response_num: 0, response_string: 'My faith and religious beliefs are very important to me.'},
            {response_num: 1, response_string: 'I don\'t practice any religious beliefs but I feel that I am spiritual in my own way.'},
            {response_num: 2, response_string: 'I am not religious or spiritual in any way and don\'t believe in a God of any kind.'},
            {response_num: 3, response_string: 'I am open to the idea of a religious practice in my future.' +
                    ' age.'}
        ],
        selectedAnswer:0},

    {question_num:7,
        question_string: 'Would you accept medical interventions that would affect your everyday enjoyment of life?',
        responses: [
            {response_num: 0, response_string: 'I would accept any medical interventions in order to stay alive, no matter the cost.'},
            {response_num: 1, response_string: 'I would want to try all possible alternatives first, before accepting the intervention.'},
            {response_num: 2, response_string: 'If I was terminally ill I would accept interventions for pain control and comfort.'},
            {response_num: 3, response_string: 'I would not want medical interventions if it means I lose my level of existing comfort.'}
        ],
        selectedAnswer:0},

    {question_num:8,
        question_string: 'Would you choose to be aware with some pain or be pain-free but unaware?',
        responses: [
            {response_num: 0, response_string: 'I would rather put up with some pain and be awake and aware.'},
            {response_num: 1, response_string: 'I would rather be given sedating drugs, no matter the consequence.'},
            {response_num: 2, response_string: 'I would seek out other pain lessening treatments such as massage or energy work.'},
            {response_num: 3, response_string: 'I would want to be still awake enough to talk with family and friends.'}
        ],
        selectedAnswer:0},

    {question_num:9,
        question_string: 'Do you feel that you could advocate for yourself if met with a chronic or terminal illness?',
        responses: [
            {response_num: 0, response_string: 'I am very confident in my decision making so I think I would advocate well for' +
                    ' myself' +
                    ' .'},
            {response_num: 1, response_string: 'I am usually good at making decisions but my emotions might get in the' +
                    ' way.'},
            {response_num: 2, response_string: 'I am often unsure of my decisions so I might leave many up to the health' +
                    ' care team.'},
            {response_num: 3, response_string: 'I would let a close family member advocate for me as I don\'t communicate' +
                    ' well.'}
        ],
        selectedAnswer:0},

    {question_num:10,
        question_string: 'What level of interest do you find the subject of MAID (Medical Assistance in Dying)?',
        responses: [
            {response_num: 0, response_string: 'I don\'t know anything about it and I would not support it because of my beliefs.'},
            {response_num: 1, response_string: 'I have heard of it and am curious to know more about it.'},
            {response_num: 2, response_string: 'I would want MAID but my doctor is against it.'},
            {response_num: 3, response_string: 'If I was in pain and was terminal, I would definitely ask for MAID.'}
        ],
        selectedAnswer:0},

    {question_num:11,
        question_string: 'Have you set anyone in charge of your future financial decisions, if unable to make them?',
        responses: [
            {response_num: 0, response_string: 'I have a Will with a Power of Attorney for my finances.'},
            {response_num: 1, response_string: 'I have a Will and have assigned my financial Representative(s) with Rep-Section-7.'},
            {response_num: 2, response_string: 'I have a Will but have not set anyone up to represent me financially.'},
            {response_num: 3, response_string: 'I have no Will as yet and no one to manage my finances should I be unable to do so.'}
        ],
        selectedAnswer:0},

    {question_num:12,
        question_string: 'Would you accept treatments that may affect your physical attractiveness?',
        responses: [
            {response_num: 0, response_string: 'I take care to be attractive and would not want any treatments that affect it.'},
            {response_num: 1, response_string: 'I care about looking attractive, but not at the cost of saving my life or parts of my body.'},
            {response_num: 2, response_string: 'It depends on the area of my body that they want to treat.'},
            {response_num: 3, response_string: 'I do not have the interest or energy to worry about my physical attractive-ness.'}
        ],
        selectedAnswer:0},

    {question_num:13,
        question_string: 'If I was incapacitated, is there a family member I trust who would advocate for me adequately?',
        responses: [
            {response_num: 0, response_string: 'I have one or more trusted family members who I could turn to.'},
            {response_num: 1, response_string: 'There is a lot of dissent in my family and I am not sure who I could trust.'},
            {response_num: 2, response_string: 'I am alone and have no support system to advocate for me.'},
            {response_num: 3, response_string: 'I am not sure any of my family would want to take on the responsibility.'}
        ],
        selectedAnswer:0},

    {question_num:14,
        question_string: 'What life support or prolonging medical interventions would you most likely disagree with?',
        responses: [
            {response_num: 0, response_string: 'I would not want to any medical interventions if I became mentally incapacitated.'},
            {response_num: 1, response_string: 'It is against my religion or other belief system to receive any medical interventions.'},
            {response_num: 2, response_string: 'I would be open to selecting a trial period for life prolonging medical interventions.'},
            {response_num: 3, response_string: 'I am open to all medical interventions if I can be kept alive no matter the cost.'}
        ],
        selectedAnswer:0},

    {question_num:15,
        question_string: 'How much information would you want to receive about your diagnosis, treatment and care?',
        responses: [
            {response_num: 0, response_string: 'I would want to know absolutely everything, no matter how dire.'},
            {response_num: 1, response_string: 'I would let my family receive the information and allow them to decide what to tell me.'},
            {response_num: 2, response_string: 'I rely on family to translate to me as I do not speak English or I can not speak at all.'},
            {response_num: 3, response_string: 'It would depend on the nature of the diagnosis, whether it was terminal or curable.'}
        ],
        selectedAnswer:0},

    {question_num:16,
        question_string: 'Where do you keep your important papers, such as wills, life insurance and care plans, if any?',
        responses: [
            {response_num: 0, response_string: 'I have a safe in my home where all these papers are kept.'},
            {response_num: 1, response_string: 'I have not compiled any of this information, but my doctor knows my wishes.'},
            {response_num: 2, response_string: 'I have given copies of all documents to my trusted Advocates and my doctor.'},
            {response_num: 3, response_string: 'I am overwhelmed with this task and so have not compiled any documents.'}
        ],
        selectedAnswer:0},

    {question_num:17,
        question_string: 'Do you believe that you have fulfilled your life has purpose?',
        responses: [
            {response_num: 0, response_string: 'I think I have absolutely fulfilled my purpose.'},
            {response_num: 1, response_string: 'I am still unsure what my life purpose is and and still trying to find meaning.'},
            {response_num: 2, response_string: 'I do not believe in the theory that we have a life purpose, I am more of a nihilist.'},
            {response_num: 3, response_string: 'I feel like I failed to find any purpose to my life.'}
        ],
        selectedAnswer:0},

    {question_num:18,
        question_string: 'Choose the best answer related to what would make your life not worth living?',
        responses: [
            {response_num: 0, response_string: 'No longer being able to carry out my day to day activities without support from others.'},
            {response_num: 1, response_string: 'Experiencing pain and discomfort much of the time, with drugs no longer helping.'},
            {response_num: 2, response_string: 'Losing my intellectual capabilities, becoming forgetful and confused.'},
            {response_num: 3, response_string: 'Becoming too weak to mentally and physically to take on most challenges.'}
        ],
        selectedAnswer:0},

    {question_num:19,
        question_string: 'What would you like done with your body after you die?',
        responses: [
            {response_num: 0, response_string: 'I want to be cremated and my ashes scattered at the location noted in my will.'},
            {response_num: 1, response_string: 'I want to be buried in my pre-purchased plot.'},
            {response_num: 2, response_string: 'I care about the environment so want to have a green burial.'},
            {response_num: 3, response_string: 'I don\'t, but am open to finding out more about the options and alternatives.'}
        ],
        selectedAnswer:0},

    {question_num:20,
        question_string: 'Do you know which family members and friends you would welcome at your bedside?',
        responses: [
            {response_num: 0, response_string: 'All family members and friends are welcome as long as my comfort level is respected.'},
            {response_num: 1, response_string: 'I would want all the adults in my family to be able to visit, but not the grandchildren.'},
            {response_num: 2, response_string: 'I only want my spouse at my bedside.'},
            {response_num: 3, response_string: 'I only want my priest, rabbi or religious mentor at my bedside.'}
        ],
        selectedAnswer:0},

    {question_num:21,
        question_string: 'What are your thoughts about requesting or rejecting life support measures if dying?',
        responses: [
            {response_num: 0, response_string: 'I am opposed to suicide so I must wait to die a natural death.'},
            {response_num: 1, response_string: 'I request that I be taken off all life support and only receive pain medication.'},
            {response_num: 2, response_string: 'I would want my doctor to approve of and administer MAID as soon as possible.'},
            {response_num: 3, response_string: 'I would request to stay on life support until any viable organs could be removed.'}
        ],
        selectedAnswer: 0},

    {question_num:22,
        question_string: 'Who are the most important and trusted people in your life?',
        responses: [
            {response_num: 0, response_string: 'My immediate family: my children, spouse, grandchildren.'},
            {response_num: 1, response_string: 'My group of friends (church group, book club, childhood friends etc.'},
            {response_num: 2, response_string: 'One significant person only (spouse, sibling etc).'},
            {response_num: 3, response_string: 'I have no trusted people and must rely on the health care team.'}
        ],
        selectedAnswer: 0},

    {question_num:23,
        question_string: 'If your doctor says your condition is terminal, how much information would you want?',
        responses: [
            {response_num: 0, response_string: 'I want to know absolutely everything, including time line, treatments etc.'},
            {response_num: 1, response_string: 'I want my family to know the details while I focus on the time I have left.'},
            {response_num: 2, response_string: 'I would not want to know anything about my situation as it is too stressful.'},
            {response_num: 3, response_string: 'I want only my spouse or significant other to know the details.'}
        ],
        selectedAnswer: 0},

    {question_num:24,
        question_string: 'What treatments would you consent to even if there is a high risk of death or impairment?',
        responses: [
            {response_num: 0, response_string: 'I want every possible intervention done no matter the outcome.'},
            {response_num: 1, response_string: 'I would want my family to make the choice after learning the possibilities.'},
            {response_num: 2, response_string: 'I would only want interventions that carry little risk.'},
            {response_num: 3, response_string: 'I would not want any high risk treatments.'}
        ],
        selectedAnswer: 0},

    {question_num:25,
        question_string: 'Are there any items, sentimental photos, music, sights, smells you would like in your room?',
        responses: [
            {response_num: 0, response_string: 'I have some aromatherapy scents that I would love to have in my room.'},
            {response_num: 1, response_string: 'I would love my favorite music to be played or my family to sing to me.'},
            {response_num: 2, response_string: 'I would want specific pictures, prints and photos surrounding me if possible'},
            {response_num: 3, response_string: 'If I can tolerate it, I have always loved to have massages with my favorite oils.'},
        ],
        selectedAnswer: 0},

    {question_num:26,
        question_string: 'What do you feel about being on a ventilator?',
        responses: [
            {response_num: 0, response_string: 'If my condition was curable I would be fine with one.'},
            {response_num: 1, response_string: 'If my condition was incurable I would not want to be put on one.'},
            {response_num: 2, response_string: 'If terminal, I would be okay with being on one until my family could say their goodbyes.'},
            {response_num: 3, response_string: 'I have no opinion on this subject.'}
        ],
        selectedAnswer: 0},

    {question_num:27,
        question_string: 'What do you feel about tube feeding?',
        responses: [
            {response_num: 0, response_string: 'If my condition was curable I would be fine with tube feeding.'},
            {response_num: 1, response_string: 'If my condition was incurable I would not want to be be fed with tube feeding.'},
            {response_num: 2, response_string: 'If terminal, I would be okay with being on one until my family could say their goodbyes.'},
            {response_num: 3, response_string: 'I have no opinion on this subject.'}
        ],
        selectedAnswer: 0},

    {question_num:28,
        question_string: 'Is there anyone you would absolutely not want at your bedside while dying?',
        responses: [
            {response_num: 0, response_string: 'I have written down a list of those who I do not want at my bedside.'},
            {response_num: 1, response_string: 'I may welcome family but reserve the right to ban anyone if I no longer feel safe.'},
            {response_num: 2, response_string: 'I would not want the very young grandchildren to attend.'},
            {response_num: 3, response_string: 'I do not want anyone at my bedside.'},
        ],
        selectedAnswer:0},

    {question_num:29,
        question_string: 'How do you feel when thinking about your own death?',
        responses: [
            {response_num: 0, response_string: 'I have had a long life and am accepting of my own impending death.'},
            {response_num: 1, response_string: 'I am okay with my own death as long as I go with dignity.'},
            {response_num: 2, response_string: 'I am very uncomfortable about the idea of family seeing me die.'},
            {response_num: 3, response_string: 'I am terrified of dying and worry about it all the time.'},
        ],
        selectedAnswer:0},

    {question_num:30,
        question_string: 'What kind of a celebration would you like to honor you?',
        responses: [
            {response_num: 0, response_string: 'I would like a proper funeral, with a church service, burial and reception.'},
            {response_num: 1, response_string: 'I would let my family decide as I am beyond worrying about it at that point.'},
            {response_num: 2, response_string: 'I would not want any kind of big celebration.'},
            {response_num: 3, response_string: 'I want to arrange a celebration of my life while I am still alive to enjoy it.'},
        ],
        selectedAnswer:0},

   /* {question_num:30,
        question_string: 'Do you worry that your family will squabble about the money and/or possessions that you leave in your Will?',
        responses: [
            {response_num: 0, response_string: 'I have written down very specific instructions to eliminate in-fighting.'},
            {response_num: 1, response_string: 'I don\'t have much left to leave them so I am not worried about this.'},
            {response_num: 2, response_string: 'I have discussed this with close family and they have promised to be respectful.'},
            {response_num: 3, response_string: 'I think it is inevitable that some will feel slighted but I really don\'t worry about it.'},
        ],
        selectedAnswer:0},*/
];